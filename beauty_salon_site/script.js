const items = document.querySelectorAll('.salon-animated01');

for (let i = 0; i < items.length; i++) {
    const keyframes = {
        opacity: [0,1],
        translate: ["0 50px", 0],
    };

    const options = {
        duration: 2000,
        delay: i * 300,
        fill: 'forwards',
        easing: 'ease-out',
    };
    items[i].animate(keyframes, options);
}


const items02 = document.querySelectorAll('.animated-kirin');

const showKirin = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const i = Array.from(items02).indexOf(entry.target);

      entry.target.animate({
        opacity: [0, 1],
        translate: ['0 50px', '0 0']
      }, {
        duration: 2000,
        delay: i * 300,
        fill: 'forwards',
        easing: 'ease-out'
      });
      
      observer.unobserve(entry.target);
    }
  });
};

const kirinObserver = new IntersectionObserver(showKirin);

for (let i = 0; i < items02.length; i++) {
  kirinObserver.observe(items02[i]);
}
