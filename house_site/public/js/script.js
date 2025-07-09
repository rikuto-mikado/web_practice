document.addEventListener('DOMContentLoaded', () => {
  /* --- ハンバーガーメニュー処理 --- */
  const hamburger = document.querySelector('.hamburger-overlay');
  const nav = document.querySelector('.nav-overlay');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');

      const isOpen = hamburger.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      nav.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
        nav.setAttribute('aria-hidden', true);
        document.body.style.overflow = '';
      }
    });
  }
});



/* loading */
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const MIN_DISPLAY_TIME = 1500;

  if (loading) {
    const loadTime = performance.now();

    const fadeOutLoader = () => {
      loading.style.opacity = 0;
      setTimeout(() => {
        loading.style.display = "none";
      }, 500);
    };

    const elapsed = performance.now() - loadTime;
    const waitTime = Math.max(0, MIN_DISPLAY_TIME - elapsed);

    setTimeout(fadeOutLoader, waitTime);
  }
});