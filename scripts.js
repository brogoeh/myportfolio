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

//====================== button category ===================

const all = document.querySelector('#all');
const web = document.querySelector('#web');
const ilus = document.querySelector('#illustration');
const cards = document.querySelectorAll('.cards');

all.addEventListener('click', () => {
  cards.forEach((card) => {
    card.style.display = 'flex';
    card.classList.add('fade');
  });
});

web.addEventListener('click', () => {
  cards.forEach((card) => {
    const c = card.classList.contains('web');
    if (c) {
      card.style.display = 'block';
      card.classList.add('fade');
    } else {
      card.classList.remove('fade');
      card.style.display = 'none';
    }
  });
});
ilus.addEventListener('click', () => {
  cards.forEach((card) => {
    const c = card.classList.contains('illustration');
    if (c) {
      card.style.display = 'block';
      card.classList.add('fade');
    } else {
      card.classList.remove('fade');
      card.style.display = 'none';
    }
  });
});
