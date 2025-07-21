document.addEventListener("DOMContentLoaded", () => {
    const ham = document.querySelector(".hamburger-overlay");
    const menu = document.getElementById("overlay-menu");

    if (!ham || !menu) return;

    ham.addEventListener("click", () => {
        const isOpen = ham.classList.toggle("active");
        menu.classList.toggle("active", isOpen);
        ham.setAttribute("aria-expanded", isOpen);
        menu.setAttribute("aria-hidden", !isOpen);
        document.body.classList.remove("no-scroll");
    });

    menu.querySelectorAll(".nav-overlay__link").forEach(link => {
        link.addEventListener("click", () => {
            ham.classList.remove("active");
            menu.classList.remove("active");
            ham.setAttribute("aria-expanded", "false");
            menu.setAttribute("aria-hidden", "true");
            document.body.classList.remove("no-scroll");
        });
    });

    document.addEventListener("keyup", e => {
        if (e.key === "Escape" && ham.classList.contains("active")) {
            ham.click();
        }
    });
});