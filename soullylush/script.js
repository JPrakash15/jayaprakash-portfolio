/* ══════════════════════════════════════════════
   Soullylush Case Study — script.js
   Vanilla JS, no dependencies. Each feature is
   its own init function, called once on load.
═══════════════════════════════════════════════ */

function initCustomCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .card, .side-dot').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
      cursor.style.background = '#C9A96E';
      ring.style.borderColor = 'rgba(201,169,110,0.4)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      cursor.style.background = '#95D5B2';
      ring.style.borderColor = 'rgba(149,213,178,0.4)';
    });
  });
}

function initScrollProgress() {
  const progress = document.getElementById('progress');
  if (!progress) return;

  window.addEventListener('scroll', () => {
    const scrollable = document.body.scrollHeight - window.innerHeight;
    const scrolled = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = scrolled + '%';
  });
}

function initScrollReveal() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
    revealObserver.observe(el);
  });
}

function initSideNav() {
  const sideNav = document.getElementById('side-nav');
  const dots = document.querySelectorAll('.side-dot');
  if (!sideNav || !dots.length) return;

  const sections = [
    'hero', 'overview', 'problem', 'users',
    'web', 'mobile', 'farmer', 'bi-dashboard',
    'system', 'iteration', 'reflection'
  ];

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sideNav.classList.toggle('visible', scrollY > 400);

    let current = 'hero';
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop - 200 <= scrollY) {
        current = id;
      }
    });

    dots.forEach((dot) => {
      dot.classList.toggle('active', dot.dataset.section === current);
    });
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const target = document.getElementById(dot.dataset.section);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function initHeroParallax() {
  const ghostText = document.querySelector('.ghost-num');
  if (!ghostText) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      ghostText.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initScrollProgress();
  initScrollReveal();
  initSideNav();
  initHeroParallax();
});
