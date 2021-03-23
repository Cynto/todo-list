import basicDom from './basicDom'
const itemAdder = (() => {
    const mainContainer = basicDom.mainContainer;
    

    const addItemButton = document.createElement('div');
    addItemButton.classList.add('add-item-button');
    addItemButton.textContent = '+ Add Task'
    mainContainer.appendChild(addItemButton)

    addItemButton.addEventListener('click', () => {
        mainContainer.removeChild(addItemButton)

        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('item-input')
        mainContainer.appendChild(input);
    })
})()

export default itemAdder