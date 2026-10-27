// Applying for Benefits & Assistance — site scripts
// Asdale Dynamics, LLC — education only, not legal advice

(() => {
  'use strict';

  // Highlight the current page in the navigation
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === 'index.html' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // Printable checklist behavior: strikethrough checked items
  const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
  checkboxes.forEach((box) => {
    box.addEventListener('change', () => {
      const label = box.nextElementSibling;
      if (label) {
        if (box.checked) {
          label.style.textDecoration = 'line-through';
          label.style.color = '#6b7280';
        } else {
          label.style.textDecoration = 'none';
          label.style.color = '';
        }
      }
    });
  });
})();
