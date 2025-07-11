window.addEventListener("load", () => {
    const loading = document.getElementById("load");
    const MIN_DISPLAY_TIME = 1500;

    if(loading) {
        const loadTime = performance.now()
        const fadeOutLoader = () => {
            loading.style.opacity = 0;
            setTimeout(() => {
                loading.style.display = "none";
            }, 500);
        };

        const elapsed = performance.now () - loadTime
        const waitTime = Math.max(0, MIN_DISPLAY_TIME - elapsed);
        setTimeout(fadeOutLoader, waitTime);
    }
});
