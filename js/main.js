/* ============================================
   The Bistro at Lakeland Village — Main JS
   ============================================ */

(function () {
  'use strict';

  /* ------------------------------------------
     Sticky Navigation
     ------------------------------------------ */
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar(); // run on init in case of refresh mid-page

  /* ------------------------------------------
     Mobile Menu Toggle
     ------------------------------------------ */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    navbar.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu when any nav link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navbar.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile menu on outside click
  document.addEventListener('click', function (e) {
    if (
      navLinks.classList.contains('open') &&
      !navbar.contains(e.target)
    ) {
      navLinks.classList.remove('open');
      navbar.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ------------------------------------------
     Smooth Scroll (with nav offset)
     ------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navHeight = navbar.offsetHeight || 72;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  /* ------------------------------------------
     Scroll Reveal (Intersection Observer)
     ------------------------------------------ */
  var revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // Stagger siblings slightly for grid items
            var siblings = entry.target.parentElement.querySelectorAll('.reveal:not(.visible)');
            var index = Array.from(siblings).indexOf(entry.target);
            var delay = Math.min(index * 80, 320);

            setTimeout(function () {
              entry.target.classList.add('visible');
            }, delay);

            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealItems.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all for older browsers
    revealItems.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ------------------------------------------
     Hero Parallax
     ------------------------------------------ */
  var heroBg = document.querySelector('.hero-bg');

  if (heroBg) {
    window.addEventListener(
      'scroll',
      function () {
        var scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
          heroBg.style.transform = 'translateY(' + scrolled * 0.28 + 'px)';
        }
      },
      { passive: true }
    );
  }

  /* ------------------------------------------
     Active Nav Link Highlight
     ------------------------------------------ */
  var sections   = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  if ('IntersectionObserver' in window && navAnchors.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navAnchors.forEach(function (a) {
              var active = a.getAttribute('href') === '#' + id;
              a.style.fontWeight = active ? '700' : '';
            });
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ------------------------------------------
     Catering Inquiry Form
     ------------------------------------------ */
  var form        = document.getElementById('cateringForm');
  var formSuccess = document.getElementById('formSuccess');

  if (form && formSuccess) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous error states
      form.querySelectorAll('.error').forEach(function (el) {
        el.classList.remove('error');
      });

      // Validate required fields
      var required = form.querySelectorAll('[required]');
      var valid    = true;

      required.forEach(function (field) {
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      // Basic email format check
      var emailField = form.querySelector('#email');
      if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        emailField.classList.add('error');
        valid = false;
      }

      if (!valid) {
        var firstError = form.querySelector('.error');
        if (firstError) firstError.focus();
        return;
      }

      // Disable submit & show loading state
      var submitBtn    = form.querySelector('[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending\u2026';
      submitBtn.disabled    = true;

      // Simulate async submission (replace with real endpoint later)
      setTimeout(function () {
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled    = false;

        formSuccess.hidden = false;
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto-hide success message after 7 seconds
        setTimeout(function () {
          formSuccess.hidden = true;
        }, 7000);
      }, 1000);
    });

    // Remove error class on input
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        field.classList.remove('error');
      });
    });
  }

  /* ------------------------------------------
     Year in Footer Copyright
     ------------------------------------------ */
  var footerCopyright = document.querySelector('.footer-bottom p');
  if (footerCopyright) {
    footerCopyright.innerHTML = footerCopyright.innerHTML.replace(
      /\d{4}/,
      new Date().getFullYear()
    );
  }

})();
