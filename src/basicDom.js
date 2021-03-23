const basicDom = (() => {
    const projectsContainer = document.querySelector('.projects-container')

    const today = document.querySelector('#today');
    const week = document.querySelector('#week')

    const mainContainer = document.querySelector('.main-container')

    return{projectsContainer, today, week, mainContainer}
})()
export default basicDom