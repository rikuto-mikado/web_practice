/* contact-form */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="/#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const id = this.getAttribute("href").replace("/#", "");
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
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
