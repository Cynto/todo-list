import { projectRenderer, addProject } from './projectRender';

const projectDeleter = (arrayItem, projectsArray) => {
  const projectsArray2 = projectsArray.filter((item) => item.title !== arrayItem.title);
  localStorage.setItem('projectsArray', JSON.stringify([projectsArray]));
  addProject.setProjectsArray(projectsArray2);
  projectRenderer.renderNames(projectsArray2);
};

export default projectDeleter;
