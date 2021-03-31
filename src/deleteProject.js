import {projectRenderer, addProject} from './projectRender'

const projectDeleter = (arrayItem, projectsArray) => {
    
    projectsArray = projectsArray.filter(item => item.title != arrayItem.title)
    localStorage.setItem('projectsArray', JSON.stringify([projectsArray]));
    addProject.setProjectsArray(projectsArray);
    projectRenderer.renderNames(projectsArray);
}

export default projectDeleter