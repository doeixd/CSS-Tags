---
title: View Transitions JavaScript
description: JavaScript implementation for view transitions in single-page applications.
---

# view-transitions.js

A simple router for triggering View Transitions in a Single-Page App (SPA).
------------------------------------------------------------------------------/**
 * view-transitions.js
 *
 * A simple router for triggering View Transitions in a Single-Page App (SPA).
 * ------------------------------------------------------------------------------
 * This script provides the logic for the `<view-page>` and `<nav-trigger>`
 * custom elements. It listens for clicks and wraps the DOM updates in
 * `document.startViewTransition()` to create animated transitions.
 *
 * NOTE: This script is ONLY needed for the SPA-style implementation.
 * For standard Multi-Page Apps, remove this script and use the meta tag instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Find all navigation triggers on the page.
  const triggers = document.querySelectorAll('nav-trigger[to]');

  // If there are no triggers, there's nothing for this router to do.
  if (triggers.length === 0) {
    return;
  }

  /**
   * Shows a page with the given ID and hides all others, wrapping the
   * DOM change in a view transition if the API is supported.
   *
   * @param {string} pageId The ID of the `<view-page>` element to display.
   */
  const showPage = (pageId) => {
    // The core function that performs the DOM update.
    const updateDOM = () => {
      document.querySelectorAll('view-page').forEach(page => {
        page.toggleAttribute('active', page.id === pageId);
      });
    };

    // Check for View Transitions API support.
    if (document.startViewTransition) {
      // Use the API to create a smooth, animated transition.
      document.startViewTransition(updateDOM);
    } else {
      // Fallback for browsers without support: just update the DOM instantly.
      updateDOM();
    }
  };

  // Add a single, delegated event listener to the document for efficiency.
  document.body.addEventListener('click', (event) => {
    // Check if the clicked element is a <nav-trigger>.
    const trigger = event.target.closest('nav-trigger[to]');

    if (trigger) {
      event.preventDefault(); // Prevent default action if it's a link
      const targetId = trigger.getAttribute('to');
      if (targetId) {
        showPage(targetId);
      }
    }
  });

  // --- Initial Page Setup ---
  // On load, find the page that should be active.
  // This can be one explicitly marked with `active`, or just the first one.
  const initialPage = document.querySelector('view-page[active]') || document.querySelector('view-page');

  if (initialPage) {
    // Set the initial state without triggering an animation.
    document.querySelectorAll('view-page').forEach(page => {
      page.toggleAttribute('active', page.id === initialPage.id);
    });
  }
});