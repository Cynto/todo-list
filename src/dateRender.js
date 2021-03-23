import basicDom from './basicDom'
import {projectRenderer} from './projectRender'
const dateRenderer = (() => {
    const today = basicDom.today;
    const week = basicDom.week;

    let dateDivArray = []
    let projectDivArray = projectRenderer.projectDivArray;

    dateDivArray.push(today, week)
    
    for(let i = 0; i < dateDivArray.length; i++) {
        dateDivArray[i].addEventListener('click', () => {
            for(let i = 0; i < projectDivArray.length; i++) {
                projectDivArray[i].classList.remove('selected') 
            }
            for(let i = 0; i < dateDivArray.length; i++) {
                dateDivArray[i].classList.remove('selected')
            }
            dateDivArray[i].classList.add('selected')
            
        })
        
        
    }
    
    

})()
export default dateRenderer;