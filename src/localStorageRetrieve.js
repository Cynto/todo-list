import localStorageAdder from './localStorage';
import {projectRenderer, addProject} from './projectRender'
import dateRenderer from './dateRender'

const localStorageRetriever = (() => {

    const projectRetriever = (() => {
        let projectsArray = JSON.parse(localStorage.getItem('projectsArray'));
        projectsArray = projectsArray[0]
        
        addProject.setProjectsArray(projectsArray);
        console.log(projectsArray)
        projectRenderer.renderNames(projectsArray)
        addProject.projectsArray = projectsArray;

    })()
    const dateRetriever = (() => {
        let dateProjectArray = JSON.parse(localStorage.getItem('dateProjectArray'));
        dateProjectArray = dateProjectArray[0];
        
        dateRenderer.setDateProjectArray(dateProjectArray)
        
        return {dateProjectArray}
    })()

    
    return {dateRetriever}
    
})()
