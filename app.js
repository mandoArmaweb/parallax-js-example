let parallax = document.querySelector('.parallax');
let titulo = document.querySelector('.titulo');

function scrollParallax() {
  let ScrollTop = document.documentElement.scrollTop;
  parallax.style.transform = 'translateY(' + ScrollTop * -0.5 + 'px)';
  titulo.style.transform = 'translateY(' + ScrollTop * 0.3 + 'px)';
}

window.addEventListener('scroll', scrollParallax);