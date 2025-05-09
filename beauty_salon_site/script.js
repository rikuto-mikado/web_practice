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