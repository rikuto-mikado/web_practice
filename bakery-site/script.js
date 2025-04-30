document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("mobile-nav");
    const closeBtn = document.getElementById("closeBtn");
  
    // 三を押したら表示
    hamburger.addEventListener("click", () => {
      nav.classList.add("show");
    });
  
    // ✕を押したら非表示
    closeBtn.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
  