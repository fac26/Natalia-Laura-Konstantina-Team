
const teamSection = document.querySelector('#team');

const scrollToTeamHandler = () => {
  const currentScrollPosition = document.documentElement.scrollTop;//Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically
  const teamSectionTop = teamSection.offsetTop; /*-100=> to start display earlier*/
  const teamSectionHeight = teamSection.offsetHeight;  
    if (
      currentScrollPosition >= teamSectionTop &&
      currentScrollPosition <= teamSectionTop + teamSectionHeight
    ) {
        //el.style.animation = 'right-slide-in 1s ease-out forwards';
  };
};



window.addEventListener('scroll', scrollToTeamHandler);