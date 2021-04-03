import basicDom from './basicDom';
import { projectRenderer } from './projectRender';
import Project from './projectClass';

const dateRenderer = (() => {
  const today = basicDom.today;
  const week = basicDom.week;

  const todayProject = new Project('today');
  const weekProject = new Project('thisweek');

  let dateProjectArray = [];
  dateProjectArray.push(todayProject, weekProject);

  const setDateProjectArray = (array) => {
    dateProjectArray = array;
    return dateProjectArray;
  };

  const getLocalDateArray = (() => {
    if (localStorage.length > 0) {
      dateProjectArray = JSON.parse(localStorage.getItem('dateProjectArray'));
      dateProjectArray = dateProjectArray[0];
    }
  })();

  const dateDivArray = [];
  const projectDivArray = projectRenderer.projectDivArray;

  dateDivArray.push(today, week);
  for (let i = 0; i < dateDivArray.length; i += 1) {
    dateDivArray[i].addEventListener('click', () => {
      for (let i = 0; i < projectDivArray.length; i += 1) {
        projectDivArray[i].classList.remove('selected');
      }
      for (let i = 0; i < dateDivArray.length; i += 1) {
        dateDivArray[i].classList.remove('selected');
      }
      dateDivArray[i].classList.add('selected');
      projectRenderer.renderPage();
    });
  }

  return { dateProjectArray, setDateProjectArray };
})();
export default dateRenderer;
