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
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('carousel');

  carousels.forEach(carousel => {
    const slidesContainer = carousel.querySelector('.carousel-slides');
    const items = carousel.querySelectorAll('carousel-item');
    const prevTrigger = carousel.querySelector('carousel-trigger[direction="prev"]');
    const nextTrigger = carousel.querySelector('carousel-trigger[direction="next"]');

    if (!slidesContainer || items.length === 0) return;

    const totalSlides = items.length;
    const isLooping = carousel.hasAttribute('loop');

    // Set the slides container width to accommodate all slides
    slidesContainer.style.width = `${totalSlides * 100}%`;

    // Set each item width to match the carousel width
    items.forEach(item => {
      item.style.width = `${100 / totalSlides}%`;
    });

    let currentIndex = 0;

    function updateCarousel(isInstant = false) {
      if (isInstant) slidesContainer.style.transition = 'none';

      slidesContainer.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;

      if (isInstant) {
        // Restore transition after the instant move
        setTimeout(() => slidesContainer.style.transition = '', 50);
      }

      if (!isLooping) {
        prevTrigger?.toggleAttribute('disabled', currentIndex === 0);
        nextTrigger?.toggleAttribute('disabled', currentIndex === totalSlides - 1);
      }
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
});