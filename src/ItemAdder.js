import add from 'date-fns/add';
import { format } from 'date-fns';
import basicDom from './basicDom';
import { addProject, projectRenderer } from './projectRender';
import Item from './ItemClass';
import dateRenderer from './dateRender';
import localStorageAdder from './localStorage';

const itemAdder = (() => {
  const mainContainer = basicDom.mainContainer;

  const addItemButton = document.createElement('div');
  addItemButton.classList.add('add-item-button');
  addItemButton.textContent = '+ Add Task';
  mainContainer.appendChild(addItemButton);

  addItemButton.addEventListener('click', () => {
    mainContainer.removeChild(addItemButton);

    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('item-input');
    mainContainer.appendChild(input);

    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute(
      'style',
      'width: 60%; margin-left: 30px; margin-top: 0; cursor: default; align-items: baseline; display: flex; justify-content: center;',
    );
    mainContainer.appendChild(buttonContainer);

    const confirmButton = document.createElement('button');
    confirmButton.textContent = '✓';
    buttonContainer.appendChild(confirmButton);

    confirmButton.addEventListener('click', () => {
      const inputValue = input.value;

      const item = new Item(inputValue);

      const currentProject = document.getElementsByClassName('selected');
      const dateProjectArray = dateRenderer.dateProjectArray;
      const projectsArray = addProject.projectsArray;

      for (let i = 0; i < dateProjectArray.length; i += 1) {
        if (dateProjectArray[i].title === currentProject[0].id) {
          if (dateProjectArray[i].title === 'thisweek') {
            const weekItem = new Item(
              inputValue,
              '',
              format(add(new Date(), { days: 7 }), 'P'),
            );
            dateProjectArray[i].array.push(weekItem);
          } else {
            dateProjectArray[i].array.push(item);
          }
        }
      }
      for (let i = 0; i < projectsArray.length; i += 1) {
        if (projectsArray[i].title.toLowerCase() === currentProject[0].id) {
          projectsArray[i].array.push(item);
        }
      }
      localStorageAdder.projectsAdder(projectsArray);
      localStorageAdder.datesAdder(dateProjectArray);

      mainContainer.removeChild(buttonContainer);
      mainContainer.removeChild(input);
      mainContainer.appendChild(addItemButton);

      projectRenderer.renderPage();
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = '✕';
    buttonContainer.appendChild(cancelButton);

    cancelButton.addEventListener('click', () => {
      mainContainer.removeChild(buttonContainer);
      mainContainer.removeChild(input);
      mainContainer.appendChild(addItemButton);
    });
  });

  return { addItemButton };
})();

export default itemAdder;
