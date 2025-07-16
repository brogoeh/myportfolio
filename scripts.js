let linkEl = document.querySelectorAll('.nav__link');

linkEl.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active');
    link.classList.add('active');
  });
});

const menuEl = document.querySelector('.menu');
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty('--scroll-pading', navigationHeight + ' px');
