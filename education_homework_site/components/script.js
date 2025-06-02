/* loading */
const loadingAreaOrange = document.querySelector("#loading");
const loadingAreaBule = document.querySelector("#loading-screen");
const loadingText = document.querySelector("#loading p");

window.addEventListener("load", () => {
    loadingAreaOrange.animate(
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

    loadingAreaBule.animate(
        {
            translate: ["0 100vh", "0 0", "0-100vh"],
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        },
    );

    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8,
            },
            {
                opacity: 1,
                offset: 1,
            },
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});

