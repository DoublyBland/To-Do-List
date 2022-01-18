import {projects, appendToDoNodes} from './projectHandler'

function showAll(projects){
    let container = document.getElementById('to-do-holder');
    let heading = document.getElementById('to-do-heading');
    heading.textContent = "All To-Do tasks";
    _removeAllChildNodes(container);
    for(let i=0;i<projects.length;i++){
        let project = projects[i];
        appendToDoNodes(project, container);
    }
}

function _removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function activateHome(){
    showAll(projects);
    const home = document.getElementById('home');
    home.addEventListener('click', function(event){
        showAll(projects)
    }, {once:false});
}

export {activateHome}