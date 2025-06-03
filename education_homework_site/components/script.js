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


/* SCROLLING */
document.addEventListener('DOMContentLoaded', () => {

  /** 交差コールバック */
  const onIntersect = (entries) => {
    entries.forEach(entry => {
      const items = [...entry.target.querySelectorAll('.reveal-item')]
        .sort((a, b) => a.dataset.order - b.dataset.order); // define numbers

      if (entry.isIntersecting) { // when it is able to see
        items.forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.5}s`;
          el.classList.add('show');
        });
      } else { // when i go outside of the area
        items.forEach(el => {
          el.classList.remove('show');
          el.style.transitionDelay = '0s';
        });
      }
    });
  };

  /** Observer 作成 (root はビューポート) */
  const io = new IntersectionObserver(onIntersect, {
    threshold: 0.3 // it will be happend when it is seem around 30%
  });

  document.querySelectorAll('.reveal-section').forEach(sec => io.observe(sec));
});
