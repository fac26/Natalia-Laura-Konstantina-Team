const navIconMobile = document.querySelector('.nav-icon-mob'); //will be added
const navItemsUlEl = document.querySelector('.nav-bar--menu');
const navLinkEls=navItemsUlEl.querySelectorAll('li');
const navBar = document.querySelector('.nav-bar');

const showHideMenuHandler = (ev) => {
  navItemsUlEl.classList.toggle('hidden');
  if (navItemsUlEl.classList.contains('hidden')) {//span width style as open or closed
    navIconMobile
      .querySelectorAll(':nth-child(odd)')//Odd and even are keywords that can be used to match child elements whose index is odd or even
      .forEach((el) => (el.style.width = '100%'));//css styling navbar in mobile version
  } else {
    navIconMobile
      .querySelectorAll(':nth-child(odd)')
      .forEach((el) => (el.style.width = '50%'));
  }
};

const addMobVersListeners = () => {
  navIconMobile.classList.remove('hidden');
  for (const item of navLinkEls) {
    item.addEventListener('click', showHideMenuHandler);
  }
};

const removeMobVersListeners = () => {
  navIconMobile.classList.add('hidden');
  navItemsUlEl.classList.remove('hidden');//in case they are hidden
  for (const item of navLinkEls) {
    item.removeEventListener('click', showHideMenuHandler);
  }
};

const checkMediaQueryHandler = () => {
  const mediaQuery = window.matchMedia('(max-width: 600px)');
  if (mediaQuery.matches && navBar.dataset.mob === 'false') {
    navBar.dataset.mob = 'true';
    addMobVersListeners();
  } else if (mediaQuery.matches && navBar.dataset.mob === 'true') {
    return;
  }
  if (!mediaQuery.matches && navBar.dataset.mob === 'true') {
    navBar.dataset.mob = 'false';
    removeMobVersListeners();
  }
};

const checkMediaOnLoanding = () => {
  const mediaQuery = window.matchMedia('(max-width: 600px)');
  mediaQuery.matches
    ? ((navBar.dataset.mob = 'true'), addMobVersListeners())
    : (navBar.dataset.mob = 'false');
};
checkMediaOnLoanding();
navIconMobile.addEventListener('click', showHideMenuHandler);
window.addEventListener('resize', checkMediaQueryHandler);