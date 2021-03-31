import {projectRenderer, addProject} from './projectRender'


const localStorageRetriever = (() => {

    let projectsArray = JSON.parse(localStorage.getItem('projectsArray'));
    projectsArray = projectsArray[0];
    console.log(projectsArray)
    addProject.setProjectsArray(projectsArray);

    projectRenderer.renderNames(projectsArray)
    addProject.projectsArray = projectsArray;
    
    
})()
