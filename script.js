const elementi = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {

  elementi.forEach(el => {
    const rect = el.getBoundingClientRect();

    if(
      rect.top < window.innerHeight - 100 &&
      rect.bottom > 0 &&
      !el.classList.contains('show')
    ) {
      el.classList.add('show');
    }

  });

});

window.history.scrollRestoration = 'manual';

window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0); 
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

document.querySelector('.btn.chi').addEventListener('click', () => {
  const target = document.querySelector('#blocco2');
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'center' 
  });
});

document.querySelector('.btn.comp').addEventListener('click', () => {
  const target = document.querySelector('#blocco3');
  target.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn.progetti').addEventListener('click', () => {
  const target = document.querySelector('#blocco4');
  target.scrollIntoView({ behavior: 'smooth',  block: 'center' });
});

document.querySelector('.btn.contatti').addEventListener('click', () => {
  const target = document.querySelector('footer');
  target.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn.su').addEventListener('click', () => {
  const target = document.querySelector('#blocco1');
  target.scrollIntoView({ behavior: 'smooth' });
});

const skillBars = document.querySelectorAll('.fill');

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting) {
      const el = entry.target;
      const width = el.dataset.width;
      el.style.width = width;
    }

  });

});

skillBars.forEach(bar => {
  observer.observe(bar);
});

function rimuoviFadeInResponsive() {

  const chisono = document.querySelector('#chisono');

  if (window.innerWidth <= 600) {
    chisono.classList.remove('fade-in');
  } 

}

window.addEventListener('load', rimuoviFadeInResponsive);
window.addEventListener('resize', rimuoviFadeInResponsive);