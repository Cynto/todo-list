import Project from './projectClass'
import basicDom from './basicDom'
import dateRenderer from './dateRender'
import itemAdder from './ItemAdder'
import {format} from 'date-fns';


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
        if(title === 'Thisweek') {
            title = 'This Week'
        }
        titleh2.textContent = title;
        titleh2.classList.add('title')
        mainContainer.appendChild(titleh2);

        for(let i = 0; i < itemArray.length; i++) {
            if(itemArray[i].complete === false) {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item-div')
                
                const titleContainer = document.createElement('div');
                titleContainer.classList.add('title-container');
                itemDiv.appendChild(titleContainer);

                const circleIcon = document.createElement('i');
                circleIcon.classList.add('far', 'fa-circle');
                titleContainer.appendChild(circleIcon)

                circleIcon.addEventListener('click', () => {
                    itemArray[i].complete = true;
                    renderPage();
                })
                
                const itemTitle = document.createElement('h3');
                itemTitle.textContent = itemArray[i].title;
                titleContainer.appendChild(itemTitle);
                mainContainer.appendChild(itemDiv);

                itemTitle.addEventListener('click', () => {
                    const newTitleInput = document.createElement('input');
                    newTitleInput.type = 'text';
                    newTitleInput.value = itemArray[i].title;
                    titleContainer.appendChild(newTitleInput)
                    titleContainer.removeChild(itemTitle);

                    newTitleInput.addEventListener('keypress', (e) => {
                        console.log(e.key)
                        if(e.key === 'Enter') {
                            itemArray[i].title = newTitleInput.value;
                            titleContainer.removeChild(newTitleInput);
                            itemTitle.textContent = itemArray[i].title;
                            titleContainer.appendChild(itemTitle)
                        }
                    })
                })

                const dateContainer = document.createElement('div');
                dateContainer.classList.add('date-container')
                itemDiv.appendChild(dateContainer)

                const dueDate = document.createElement('h3');
                dueDate.textContent = itemArray[i].dueDate;
                dueDate.classList.add('date')
                dateContainer.appendChild(dueDate)

                dueDate.addEventListener('click', () => {
                    dateContainer.removeChild(dueDate)

                    const dueDateInput = document.createElement('input');
                    dueDateInput.type = 'date';

                    dateContainer.appendChild(dueDateInput)

                    dueDateInput.addEventListener('change', () => {
                        itemArray[i].dueDate = format(new Date(dueDateInput.value), 'P')
                        dueDate.textContent = itemArray[i].dueDate;
                        dateContainer.removeChild(dueDateInput);
                        dateContainer.appendChild(dueDate)
                    })
                })

            }


        }
        const addItemButton = itemAdder.addItemButton;
        mainContainer.appendChild(addItemButton)

    }
    
    renderNames(addProject.projectsArray)
    projectsContainer.appendChild(addProject.addProjectButton)
    return {renderNames, renderPage, projectDivArray}
})()
export {projectRenderer, addProject}