import { projectRenderer, addProject } from "./projectRender";


const localStorageAdder = (() => {

    const projectsAdder = (projectsArray) => {
     
        
        localStorage.setItem('projectsArray', JSON.stringify([projectsArray]));
        console.log(localStorage)
        
        
        

    }
    return {projectsAdder}
})()

export default localStorageAdder;