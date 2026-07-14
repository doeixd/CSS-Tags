/** A scoped, progressively enhanced router for the View Transitions API. */

const ROUTER_SELECTOR = ':is(view-transitions, view-transition, [data-view-transitions], .view-transitions)';
const PAGE_SELECTOR = ':is(view-page, [data-view-page], .view-page)';
const TRIGGER_SELECTOR = ':is(nav-trigger, [data-view-trigger], .view-trigger)';

function initializeViewTransitions(root = document) {
  root.querySelectorAll(ROUTER_SELECTOR).forEach(router => {
    if (router.dataset.viewTransitionsInitialized === 'true') return;

    const pages = Array.from(router.querySelectorAll(PAGE_SELECTOR));
    const triggers = Array.from(router.querySelectorAll(TRIGGER_SELECTOR));
    if (pages.length === 0) return;

    router.dataset.viewTransitionsInitialized = 'true';

    const targetFor = trigger => {
      const explicitTarget = trigger.getAttribute('to');
      if (explicitTarget) return explicitTarget.replace(/^#/, '');

      const href = trigger.getAttribute('href');
      return href?.startsWith('#') ? href.slice(1) : '';
    };

    const setActivePage = pageId => {
      const nextPage = pages.find(page => page.id === pageId);
      if (!nextPage) return null;

      pages.forEach(page => page.toggleAttribute('active', page === nextPage));
      triggers.forEach(trigger => {
        const isCurrent = targetFor(trigger) === pageId;
        if (isCurrent) trigger.setAttribute('aria-current', 'page');
        else trigger.removeAttribute('aria-current');
      });

      return nextPage;
    };

    const showPage = (pageId, options = {}) => {
      const { updateHistory = true, focus = true } = options;
      const nextPage = pages.find(page => page.id === pageId);
      if (!nextPage) return;

      const update = () => setActivePage(pageId);
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      let transition;

      if (!reduceMotion && typeof document.startViewTransition === 'function') {
        transition = document.startViewTransition(update);
      } else {
        update();
      }

      if (updateHistory && window.location.hash !== `#${pageId}`) {
        window.history.pushState(null, '', `#${pageId}`);
      }

      const focusPage = () => {
        if (!nextPage.hasAttribute('tabindex')) nextPage.setAttribute('tabindex', '-1');
        nextPage.focus({ preventScroll: true });
      };

      if (focus) {
        if (transition?.updateCallbackDone) transition.updateCallbackDone.then(focusPage);
        else focusPage();
      }
    };

    triggers.forEach(trigger => {
      const pageId = targetFor(trigger);
      if (!pageId) return;

      if (!trigger.hasAttribute('aria-controls')) trigger.setAttribute('aria-controls', pageId);

      trigger.addEventListener('click', event => {
        event.preventDefault();
        showPage(pageId);
      });

      if (trigger.matches('nav-trigger')) {
        trigger.addEventListener('keydown', event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            showPage(pageId);
          }
        });
      }
    });

    const syncFromLocation = () => {
      const hashTarget = window.location.hash.slice(1);
      const initialPage = pages.find(page => page.id === hashTarget)
        || pages.find(page => page.hasAttribute('active'))
        || pages[0];

      if (initialPage) showPage(initialPage.id, { updateHistory: false, focus: false });
    };

    window.addEventListener('popstate', syncFromLocation);
    syncFromLocation();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initializeViewTransitions(), { once: true });
} else {
  initializeViewTransitions();
}

export { initializeViewTransitions };
