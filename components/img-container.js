/** Progressive enhancement for image-container loading, fallback, and host shorthands. */

function initializeImageContainers(root = document) {
  const containers = root.querySelectorAll(':is(img-container, [data-img-container], .img-container)');

  containers.forEach(container => {
    if (container.dataset.imgContainerInitialized === 'true') return;

    const img = container.querySelector('img');
    if (!img) return;

    container.dataset.imgContainerInitialized = 'true';
    container.setAttribute('aria-busy', 'true');
    img.setAttribute('data-loading', '');

    const markLoaded = () => {
      img.removeAttribute('data-loading');
      img.removeAttribute('data-error');
      img.setAttribute('data-loaded', '');
      img.setAttribute('loaded', '');
      container.setAttribute('aria-busy', 'false');
      container.removeAttribute('data-error');
    };

    const markFailed = () => {
      const fallback = container.getAttribute('fallback-src');

      if (fallback && container.dataset.fallbackAttempted !== 'true') {
        container.dataset.fallbackAttempted = 'true';
        img.removeAttribute('data-error');
        img.setAttribute('data-loading', '');
        img.src = fallback;
        return;
      }

      img.removeAttribute('data-loading');
      img.setAttribute('data-error', '');
      container.setAttribute('aria-busy', 'false');
      container.setAttribute('data-error', '');
    };

    img.addEventListener('load', markLoaded);
    img.addEventListener('error', markFailed);

    if (container.hasAttribute('lazy') && !img.hasAttribute('loading')) {
      img.loading = 'lazy';
    }

    const src = container.getAttribute('src') || img.getAttribute('data-src');
    const srcset = container.getAttribute('srcset') || img.getAttribute('data-srcset');
    const sizes = container.getAttribute('sizes');
    const alt = container.getAttribute('alt');

    if (srcset) img.srcset = srcset;
    if (sizes) img.sizes = sizes;
    if (alt && !img.hasAttribute('alt')) img.alt = alt;
    if (src && !img.getAttribute('src')) img.src = src;

    img.removeAttribute('data-src');
    img.removeAttribute('data-srcset');

    if (img.complete && img.currentSrc) {
      if (img.naturalWidth > 0) markLoaded();
      else markFailed();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initializeImageContainers(), { once: true });
} else {
  initializeImageContainers();
}

export { initializeImageContainers };
