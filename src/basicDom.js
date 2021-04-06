const basicDom = (() => {
  const projectsContainer = document.querySelector('.projects-container');

  const today = document.querySelector('#today');
  const week = document.querySelector('#thisweek');

  const mainContainer = document.querySelector('.main-container');

  const menuBar = document.querySelector('.menu-bar-icon');

  const menuBarContainer = document.querySelector('.menu-bars');

  const nav = document.querySelector('nav');

  const navBarIcon = document.querySelector('.nav-bar-icon');

  const navBars = document.querySelector('.nav-bars');

  return {
    projectsContainer,
    today,
    week,
    mainContainer,
    menuBar,
    nav,
    menuBarContainer,
    navBarIcon,
    navBars,
  };
})();
export default basicDom;
