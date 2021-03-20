import Project from './projectClass'
import basicDom from './basicDom'




const addProject = (() => {
    const projectsContainer = basicDom.projectsContainer;
    
    const addProjectButton = document.createElement('div');
    addProjectButton.textContent = '+';
    addProjectButton.classList.add('project-div')
    addProjectButton.setAttribute('style', 'font-size: 50px; justify-content: center; font-weight: bolder;')
    projectsContainer.appendChild(addProjectButton);

    const defaultProject = new Project('Default')
    
    let projectsArray = [];
    projectsArray.push(defaultProject)

    addProjectButton.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text';
        projectsContainer.appendChild(input);

        projectsContainer.removeChild(addProjectButton);

        const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('style', 'width: 60%; margin-left: 30px; margin-top: 0; cursor: default; align-items: baseline; display: flex; justify-content: center;')
        projectsContainer.appendChild(buttonContainer)

        const confirmButton = document.createElement('button');
        confirmButton.textContent = '✓';
        buttonContainer.appendChild(confirmButton);
        
        confirmButton.addEventListener('click', () => {
            const projectName = input.value;
            let projectTitles = projectsArray.map(title => title.title);
            
            if(projectName != '' && projectTitles.includes(projectName) === false) {
                const newProject = new Project(projectName);
                projectsArray.push(newProject);
                
                for(let i = 0; i < projectsArray.length; i++) {
                    projectsArray[i].dataProject = i;
                }
                projectsContainer.removeChild(buttonContainer)
                projectsContainer.removeChild(input)

                projectRenderer.renderNames(projectsArray);
                console.log(projectsArray)
                
                
                projectsContainer.appendChild(addProjectButton)
            }

            
            
        })

        const cancelButton = document.createElement('button');
        cancelButton.textContent = '✕';
        buttonContainer.appendChild(cancelButton);

        cancelButton.addEventListener('click', () => {
            projectsContainer.removeChild(buttonContainer)
            projectsContainer.removeChild(input)
            projectsContainer.appendChild(addProjectButton)
        })
    })


})()
const projectRenderer = (() => {
    const renderNames = (projectsArray) => {
        const projectsContainer = basicDom.projectsContainer;

        while(projectsContainer.hasChildNodes()) {
            
            projectsContainer.removeChild(projectsContainer.firstChild);
        }

        const title = document.createElement('h2');
        title.textContent = 'Projects';
        projectsContainer.appendChild(title);
    
        for(let i = 0; i < projectsArray.length; i++) {
            

            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project-div'); 
            projectsContainer.appendChild(projectDiv);

            const icon = document.createElement('i');
            icon.classList.add('fas', 'fa-list')
            projectDiv.appendChild(icon);

            const projectLink = document.createElement('a');
            projectLink.textContent = projectsArray[i].title;
            projectDiv.appendChild(projectLink)

        }
    }
    return {renderNames}
})()
export {projectRenderer, addProject}