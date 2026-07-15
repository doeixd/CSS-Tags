function initializeDemoNavigation(root = document) {
  root.querySelectorAll(':is(nav-navbar, [data-navbar], .navbar, .nav-navbar)[data-collapsible]').forEach((nav) => {
    const toggle = nav.querySelector('.nav-toggle[aria-controls]');
    const links = toggle && nav.querySelector(`#${CSS.escape(toggle.getAttribute('aria-controls'))}`);
    if (!toggle || !links || toggle.dataset.initialized === 'true') return;

    toggle.dataset.initialized = 'true';
    toggle.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') !== 'true'));
    });

    links.addEventListener('click', (event) => {
      if (event.target.closest('a')) toggle.setAttribute('aria-expanded', 'false');
    });

    nav.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initializeDemoNavigation(), { once: true });
} else {
  initializeDemoNavigation();
}

export { initializeDemoNavigation };
