const navIconMobile = document.querySelector('.nav-icon-mob');//will be added
const navItemsUlEl = document.querySelector('.nav-bar--menu');
const navLinkEls = Array.from(navItemsUlEl.querySelectorAll('a'));
const sections = document.querySelectorAll('section');

const showHideMenuHandler = (ev) => {
    navItemsUlEl.classList.toggle('hidden');
};
for (const item of navLinkEls) {
  item.addEventListener('click', showHideMenuHandler);
}
navIconMobile.addEventListener('click', showHideMenuHandler);
