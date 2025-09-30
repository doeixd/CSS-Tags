/**
 * img-container.js
 *
 * JavaScript enhancements for the img-container component.
 * ------------------------------------------------------------------------------
 * Handles loading states, error recovery, lazy loading fallbacks, and responsive image generation.
 */

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('img-container');

  containers.forEach(container => {
    const img = container.querySelector('img');
    if (!img) return;

    // Mark as loading
    img.setAttribute('data-loading', '');

    // Handle load event
    img.addEventListener('load', () => {
      img.removeAttribute('data-loading');
      img.setAttribute('loaded', '');
    });

    // Handle error event
    img.addEventListener('error', () => {
      img.setAttribute('data-error', '');

      // Try fallback if provided
      const fallback = container.getAttribute('fallback-src');
      if (fallback && img.src !== fallback) {
        img.src = fallback;
        img.removeAttribute('data-error');
        img.setAttribute('data-loading', '');
      }
    });

    // Intersection Observer for lazy loading (fallback for browsers without native lazy)
    if ('IntersectionObserver' in window && !('loading' in HTMLImageElement.prototype)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.hasAttribute('data-src')) {
              img.src = img.getAttribute('data-src');
              img.removeAttribute('data-src');
            }
            if (img.hasAttribute('data-srcset')) {
              img.srcset = img.getAttribute('data-srcset');
              img.removeAttribute('data-srcset');
            }
            observer.unobserve(img);
          }
        });
      });

      if (img.hasAttribute('data-src') || img.hasAttribute('data-srcset')) {
        observer.observe(img);
      }
    }

    // Generate responsive images if attributes provided
    const src = container.getAttribute('src');
    const srcset = container.getAttribute('srcset');
    const sizes = container.getAttribute('sizes');

    if (src && !img.src) {
      img.src = src;
    }

    if (srcset) {
      img.srcset = srcset;
    }

    if (sizes) {
      img.sizes = sizes;
    }

    // Alt text handling
    const alt = container.getAttribute('alt');
    if (alt && !img.alt) {
      img.alt = alt;
    }
  });
});