import {activateListeners, openForm} from './toDoDOM'
import {displayToDo, projects} from './projectHandler'
import { activateEditListeners, editForm } from './editItem';

function newToDo(project){
    let nameField  = document.getElementById('to-do-name');
    let descriptionField  = document.getElementById('to-do-description');
    let dateField  = document.getElementById('to-do-date');
    let priorityField  = document.getElementById('to-do-priority');
    let index = project.todos.length+1;

    let toDo = {
        title: nameField.value,
        description: descriptionField.value,
        dueDate: dateField.value,
        priority: priorityField.value,
        index: index,
    }

    //return toDo
    // let copy = projects;
    // window.localStorage.setItem("Projects", JSON.stringify(copy));
    project.todos.push(toDo);
    displayToDo(project);
    //addNode(toDo);
}

    function addNode(todo){
        const container = document.getElementById('to-do-holder')
        let toDo = document.createElement('div');
            let heading = document.createElement('h1');
            heading.textContent = todo.title;
            let date = document.createElement('h2');
            date.textContent = todo.dueDate;
            toDo.appendChild(heading);
            toDo.appendChild(date);
            container.appendChild(toDo);
    }

function addToDo(project) {
    openForm();//toDoDOM.js
    activateListeners(project);
    
}

function editItem(item, itemDOM, project){
    //console.log(item);
    editForm(item);
    activateEditListeners(item, itemDOM, project);

}

//function 

export {addToDo, newToDo, editItem};