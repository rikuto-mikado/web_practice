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

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // data-order で並べ替え
        const items = [...entry.target.querySelectorAll('.reveal-item')]
                     .sort((a, b) => a.dataset.order - b.dataset.order);

        items.forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.5}s`;
          el.classList.add('show');
        });

        // 一度表示したら監視解除
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.reveal-section').forEach(sec => io.observe(sec));
});



/* GRAPH */
const labels = ['Item1', 'Item2', 'Item3', 'Item4'];

const data = {
  labels,
  datasets: [{
    label: 'My First Dataset',
    data: [10, 20, 15, 25],
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderColor: 'rgba(0, 0, 0, 1)',
    borderWidth: 1,
  }],
};

const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('myChart');
  const myChart = new Chart(canvas.getContext('2d'), {
    ...config,
    options: {
      ...config.options,
      responsive: true,
      maintainAspectRatio: false,
    }
  });

  new ResizeObserver(() => myChart.resize())
      .observe(canvas.parentElement);
});
