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
