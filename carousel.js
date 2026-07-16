/**
 * carousel.js
 *
 * Logic for the responsive and touch-friendly carousel component.
 * ------------------------------------------------------------------------------
 * This script initializes all carousels on the page, adding support for:
 * - Next/Previous button navigation and state management.
 * - Looping behavior.
 * - Touch-based swipe navigation for mobile devices.
 * - It overrides scroll-snap behavior for transform-based animations.
 */
function initializeCarousels(root = document) {
  const carousels = root.querySelectorAll(':is(carousel, [data-carousel], .carousel)');

  carousels.forEach(carousel => {
    if (carousel.dataset.carouselInitialized === 'true') return;

    const slidesContainer = carousel.querySelector(':is(.carousel-slides, [data-carousel-slides])');
    const items = carousel.querySelectorAll(':is(carousel-item, [data-carousel-item], .carousel-item)');
    const prevTrigger = carousel.querySelector(':is(carousel-trigger, [data-carousel-trigger], .carousel-trigger)[direction="prev"]');
    const nextTrigger = carousel.querySelector(':is(carousel-trigger, [data-carousel-trigger], .carousel-trigger)[direction="next"]');

    if (!slidesContainer || items.length === 0) return;
    const totalSlides = items.length;
    const isLooping = carousel.hasAttribute('loop');

    carousel.dataset.carouselInitialized = 'true';
    slidesContainer.style.width = '100%';
    slidesContainer.style.overflowX = 'hidden';
    slidesContainer.style.scrollSnapType = 'none';
    items.forEach(item => {
      item.style.width = '100%';
    });

    let currentIndex = 0;

    function updateCarousel(isInstant = false) {
      if (isInstant) slidesContainer.style.transition = 'none';

      const direction = getComputedStyle(carousel).direction === 'rtl' ? 1 : -1;
      slidesContainer.style.transform = `translate3d(${direction * currentIndex * 100}%, 0, 0)`;

      if (isInstant) {
        // Restore transition after the instant move
        setTimeout(() => slidesContainer.style.transition = '', 50);
      }

      if (!isLooping) {
        prevTrigger?.toggleAttribute('disabled', currentIndex === 0);
        nextTrigger?.toggleAttribute('disabled', currentIndex === totalSlides - 1);
      }

      items.forEach((item, index) => {
        const inactive = index !== currentIndex;
        item.setAttribute('aria-hidden', String(inactive));
        item.toggleAttribute('inert', inactive);
      });
    }

    function goToSlide(index) {
      if (isLooping) {
        currentIndex = (index + totalSlides) % totalSlides;
      } else {
        currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
      }
      updateCarousel();
    }

    prevTrigger?.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextTrigger?.addEventListener('click', () => goToSlide(currentIndex + 1));
    carousel.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const rtl = getComputedStyle(carousel).direction === 'rtl';
      const delta = event.key === 'ArrowRight' ? (rtl ? -1 : 1) : (rtl ? 1 : -1);
      goToSlide(currentIndex + delta);
    });

    let touchStartX = 0;
    carousel.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    carousel.addEventListener('touchend', e => {
      const touchEndX = e.changedTouches[0].screenX;
      if (Math.abs(touchEndX - touchStartX) > 50) {
        goToSlide(touchEndX < touchStartX ? currentIndex + 1 : currentIndex - 1);
      }
    });

    updateCarousel(true); // Initial setup without animation
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initializeCarousels(), { once: true });
} else {
  initializeCarousels();
}

export { initializeCarousels };
