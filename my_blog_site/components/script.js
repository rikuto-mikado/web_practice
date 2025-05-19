/* LOADING SECTION */
const loadingAreaGrey = document.querySelector("#loading");
const loadingAreaGreen = document.querySelector("#loading-screen");
const loadingText = document.querySelector("#loading p");

window.addEventListener("load", () => {
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        },
    );
    /* LOADING PROGRESS */
    loadingAreaGreen.animate(
        {
            translate: ["0 100vh", "0 0", "0-100vh"]
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    );
    /* LOADING TEXT */
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8
            },
            {
                opacity: 0,
                offset: 1
            },
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});

/* OBSERVER */
const fadeObserver = new IntersectionObserver(animateFade);

const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});

/* HERO SECTION */
function setHeroHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setHeroHeight);
window.addEventListener('load', setHeroHeight);
