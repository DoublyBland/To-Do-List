import {addToDo} from './toDoHandler';

function newProject(name) {
    let project = {
        name: name,
        todos: [],
    }
    projects.push(project);
    _addProjectToPage(project);
    return project;
}

function newToDo(title, description, dueDate, priority, index){
    let toDo = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        index,
    }

    return toDo;
}

function _addProjectToPage(project){
    const container = document.getElementById('dropdown-container');
    let addProject = document.createElement('a');
        let addProjectWrapper = document.createElement('div');
        addProject.textContent = project.name;
        //addProject.classList.add(project.name);
        addProject.addEventListener('click', function(){
            displayToDo(project)
        });
        addProjectWrapper.appendChild(addProject);
        container.appendChild(addProjectWrapper);
}

function displayToDo(project){
    const container = document.getElementById('to-do-holder');
    const projectHeading = document.getElementById('to-do-heading');
    projectHeading.textContent = project.name;
    _removeAllChildNodes(container);
    // const projectTitle = document.createElement('div');
    // projectTitle.textContent = project.name;
    // container.appendChild(projectTitle);
    let addNewTaskBtn = document.createElement('button');
    addNewTaskBtn.textContent = "+";
    addNewTaskBtn.addEventListener('click', function(){
        addToDo(project)//toDoHandler.js
    });
    _appendToDoNodes(project, container);
    container.appendChild(addNewTaskBtn);
}


function _appendToDoNodes(project, container){
    for(let i = 0; i<project.todos.length;i++){
        let todo = project.todos[i];
        if(todo.title !== null && todo.dueDate !== null){
            let toDo = document.createElement('div');
            let heading = document.createElement('h1');
            heading.textContent = todo.title;
            let date = document.createElement('h2');
            date.textContent = todo.dueDate;
            toDo.appendChild(heading);
            toDo.appendChild(date);
            toDo.setAttribute('id', project.name + '-' + todo.index);
            container.appendChild(toDo);
            toDo.addEventListener('click', findItem);
        }
    }
}

function findItem(){
        let id =this.id;
        let id_strings = id.split('-');
       let project =  _projectFinder(id_strings[0]);
       let index = id_strings[1] - 1;
       //console.log(index);
       let toDoItem = project.todos[index];
       console.log(toDoItem);
       //editItem(toDoItem);
}

function _projectFinder(title){
    //console.log(projects);
    let foundProject = projects.find(( {name }) => name === title);
    return foundProject;
}

function _removeAllChildNodes(parent) {
    //console.log(parent.firstChild);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let projects = [];

(function testingValues(){
    let gamingToDo = newToDo("Play", "gotta game", "tomorrow", 5, 1);
let gamingToDo2 = newToDo("Play", "gotta game", "tomorrow", 5, 2);
let gamingToDo3 = newToDo("Play", "gotta game", "tomorrow", 5, 3);
let gamingToDo4 = newToDo("Play", "gotta game", "tomorrow", 5, 4);
let gaming = newProject("Gaming");
let chores = newProject("Chores");
gaming.todos.push(gamingToDo);
gaming.todos.push(gamingToDo2);
gaming.todos.push(gamingToDo3);
gaming.todos.push(gamingToDo4);
})();


export{newProject, displayToDo};