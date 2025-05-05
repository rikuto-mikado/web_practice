const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('#mobileNav');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('clicked'); 
  mobileNav.classList.toggle('active');
  
});

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      const href = this.getAttribute('href');
  
      document.body.classList.add('fade-out');
  
      setTimeout(() => {
        window.location.href = href;
        }, 1000); 
      });
  });