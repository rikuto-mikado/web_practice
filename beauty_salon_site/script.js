const items = document.querySelectorAll('.salon-animated01');

for (let i = 0; i < items.length; i++) {
    const keyframes = {
        opacity: [0,1],
        translate: ["0 50px", 0],
    };

    const options = {
        duration: 1000,
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
        translate: ["0 50px", 0],
      }, {
        duration: 1000,
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


const items03 = document.querySelectorAll('.animated-kirin02');

const showKirin02 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const i = Array.from(items03).indexOf(entry.target);

      entry.target.animate({
        opacity: [0, 1],
        translate: ["0 50px", 0],
      }, {
        duration: 1000,
        delay: i * 300,
        fill: 'forwards',
        easing: 'ease-out'
      });
      
      observer.unobserve(entry.target);
    }
  });
};

const kirinObserver02 = new IntersectionObserver(showKirin02);

for (let i = 0; i < items03.length; i++) {
  kirinObserver02.observe(items03[i]);
}