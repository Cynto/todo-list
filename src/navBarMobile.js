import basicDom from './basicDom';

const navBarToggler = (() => {
  const menuBar = basicDom.menuBar;
  const menuBarContainer = basicDom.menuBarContainer;
  const navBarIcon = basicDom.navBarIcon;
  const nav = basicDom.nav;
  const navBarContainer = basicDom.navBars;
  
  nav.classList.add('nav-off');

  const turnOff = () => {
    nav.classList.add('nav-off');

    menuBarContainer.classList.remove('clicked');
    menuBarContainer.classList.add('menu-bars');

    navBarContainer.classList.add('clicked');
    navBarContainer.classList.remove('menu-bars');
  };

  const turnOn = () => {
    nav.classList.remove('nav-off');

    menuBarContainer.classList.add('clicked');
    menuBarContainer.classList.remove('menu-bars');

    navBarIcon.addEventListener('click', turnOff);
    navBarContainer.classList.add('menu-bars');
    navBarContainer.classList.remove('clicked');
  };

  menuBar.addEventListener('click', () => {
    if (menuBarContainer.classList.contains('clicked')) {
      turnOff();
    } else turnOn();
  });
})();

export default navBarToggler;
