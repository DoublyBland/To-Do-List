import {addToDo, editItem} from './toDoHandler';

function newProject(name) {
    let project = {
        name: name,
        todos: [],
    }
    // let copy = projects
    // window.localStorage.setItem("Projects", JSON.stringify(copy));
    projects.push(project);
    localStorage.setItem("projects", JSON.stringify(projects));
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
    appendToDoNodes(project, container);
    container.appendChild(addNewTaskBtn);
}


function appendToDoNodes(project, container){
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
       let itemIndex = findItemIndex(id_strings[1], project.todos);
       //console.log(itemIndex);
       //let toDoItem = project.todos[index];
       editItem(itemIndex, this, project);
}

function findItemIndex(indexValue, itemArray){
    //console.log(indexValue);
    //console.log(itemArray);
    let item = itemArray.find(x => {
        return x.index == indexValue;
      })
      return item;
}

function _projectFinder(title){
    let foundProject = projects.find(( {name }) => name === title);
    return foundProject;
}

function _removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
let projects = JSON.parse(localStorage.getItem("projects") || "[]");
console.log("Projects looks like: " + projects);
// if(!localStorage.getItem('Projects')){
//      projects = [];
// } else {
//      let stringy = localStorage.getItem('Projects');
//      projects = JSON.parse(stringy);
// }


(function testingValues(){
    let gamingToDo = newToDo("Zelda", "Play", "2022-01-18", 5, 1);
    let gamingToDo2 = newToDo("Mario", "Watchn", "2022-01-22", 5, 2);
    let choresToDo = newToDo("Clean Dishes", "Scrub with soap", "2022-01-18", 5, 1);
    let gaming = newProject("Gaming");
    let chores = newProject("Chores");
    if(gaming.length == 0 && chores.length == 0){
    gaming.todos.push(gamingToDo);
    gaming.todos.push(gamingToDo2);
    chores.todos.push(choresToDo);
    }
})();


export{newProject, displayToDo, projects, appendToDoNodes, findItem};