import { projectRenderer, addProject } from "./projectRender";


const localStorageAdder = (() => {

    const projectsAdder = (projectsArray) => {
     
        
        localStorage.setItem('projectsArray', JSON.stringify([projectsArray]));
        console.log(localStorage)
    }
    const datesAdder = (dateProjectArray) => {

        localStorage.setItem('dateProjectArray', JSON.stringify([dateProjectArray]));
        console.log(localStorageAdder)
    }
    return {projectsAdder, datesAdder}
})()

export default localStorageAdder;