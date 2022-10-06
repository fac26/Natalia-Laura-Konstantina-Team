const navIconMobile = document.querySelector('.nav-icon-mob'); //will be added
const navItemsUlEl = document.querySelector('.nav-bar--menu');

const showHideMenuHandler = (ev) => {
  navItemsUlEl.classList.toggle('hidden');
  if (navItemsUlEl.classList.contains('hidden')) {
    navIconMobile.classList.toggle('expanded-menu');
  } else {
    navIconMobile.classList.add('expanded-menu');
  }
};

const checkMediaQueryHandler = () => {
  const mediaQuery = window.matchMedia('(max-width: 600px)');
  if (mediaQuery.matches) {
    navItemsUlEl.addEventListener('click', showHideMenuHandler);
    navItemsUlEl.classList.add('hidden');
    navIconMobile.classList.remove('expanded-menu');
  } else {
    navItemsUlEl.removeEventListener('click', showHideMenuHandler);
    navItemsUlEl.classList.remove('hidden');
  }
};

checkMediaQueryHandler();

navIconMobile.addEventListener('click', showHideMenuHandler);
window.addEventListener('resize', checkMediaQueryHandler);
