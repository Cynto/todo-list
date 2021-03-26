import Project from './projectClass'
import basicDom from './basicDom'
import dateRenderer from './dateRender'
import itemAdder from './ItemAdder'



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

    return{projectsArray, addProjectButton}
})()
const projectRenderer = (() => {
    let projectDivArray = [];
    const projectsContainer = basicDom.projectsContainer;
    const renderNames = (projectsArray) => {
        

        while(projectsContainer.hasChildNodes()) {
            
            projectsContainer.removeChild(projectsContainer.firstChild);
        }

        const title = document.createElement('h2');
        title.textContent = 'Projects';
        projectsContainer.appendChild(title);
        
        for(let i = 0; i < projectsArray.length; i++) {
            

            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project-div'); 
            projectDiv.id = projectsArray[i].title.toLowerCase();
            projectsContainer.appendChild(projectDiv);

            projectDivArray.push(projectDiv);
            for(let i = 0; i < projectDivArray.length; i++) {
                projectDivArray[i].addEventListener('click', () => {
                    for(let i = 0; i < projectDivArray.length; i++) {
                        projectDivArray[i].classList.remove('selected')
                    }
                    basicDom.today.classList.remove('selected');
                    basicDom.week.classList.remove('selected')
                    projectDivArray[i].classList.add('selected')
                    renderPage();
                })
            }
            const icon = document.createElement('i');
            icon.classList.add('fas', 'fa-list')
            projectDiv.appendChild(icon);

            const projectLink = document.createElement('a');
            projectLink.textContent = projectsArray[i].title;
            projectDiv.appendChild(projectLink)

        }
    }
    const renderPage = () => {
        const currentProject = document.getElementsByClassName('selected');
        const dateProjectArray = dateRenderer.dateProjectArray;
        const projectsArray = addProject.projectsArray;

        let itemArray = [];
        let title = '';

        for(let i = 0; i < dateProjectArray.length; i++) {
            if(dateProjectArray[i].title === currentProject[0].id){
                console.log(dateProjectArray)
                itemArray = dateProjectArray[i].array;
                title = dateProjectArray[i].title;
            }
        }
        for(let i = 0; i < projectsArray.length; i++) {
            if(projectsArray[i].title.toLowerCase() === currentProject[0].id) {
                console.log(projectsArray)
                itemArray = projectsArray[i].array;
                title = projectsArray[i].title;
            }
        }
        title = title.charAt(0).toUpperCase() + title.slice(1);

        const mainContainer = basicDom.mainContainer;
        //render items

        while(mainContainer.hasChildNodes()) {
            
            mainContainer.removeChild(mainContainer.firstChild);
        }
        const titleh2 = document.createElement('h2');
        titleh2.textContent = title;
        titleh2.classList.add('title')
        mainContainer.appendChild(titleh2);

        for(let i = 0; i < itemArray.length; i++) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-div')
            
            const circleIcon = document.createElement('i');
            circleIcon.classList.add('far', 'fa-circle');
            itemDiv.appendChild(circleIcon)
            
            const itemTitle = document.createElement('h3');
            itemTitle.textContent = itemArray[i].title;
            itemDiv.appendChild(itemTitle);
            mainContainer.appendChild(itemDiv);

            


        }
        const addItemButton = itemAdder.addItemButton;
        mainContainer.appendChild(addItemButton)

    }
    
    renderNames(addProject.projectsArray)
    projectsContainer.appendChild(addProject.addProjectButton)
    return {renderNames, renderPage, projectDivArray}
})()
export {projectRenderer, addProject}