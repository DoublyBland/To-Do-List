function newProject(name) {
    let project = {
        name: name,
        todos: [],
    }
    projects.push(project);
    _addProjectToPage(project);
    return project;
}

function newToDo(title, description, dueDate, priority){
    let toDo = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority,
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
            _displayToDo(project)
        });
        addProjectWrapper.appendChild(addProject);
        container.appendChild(addProjectWrapper);
}

function _displayToDo(project){
    const container = document.getElementById('to-do-holder');
    _removeAllChildNodes(container);
    const projectTitle = document.createElement('div');
    projectTitle.textContent = project.name;
    container.appendChild(projectTitle);
    let addNewTaskBtn = document.createElement('button');
    addNewTaskBtn.textContent = "add task";
    for(let i = 0; i<project.todos.length;i++){
        let todo = project.todos[i];
        let toDo = document.createElement('div');
        let heading = document.createElement('h1');
        heading.textContent = todo.title;
        let date = document.createElement('h2');
        date.textContent = todo.dueDate;
        toDo.appendChild(heading);
        toDo.appendChild(date);
        container.appendChild(toDo);
    }
    container.appendChild(addNewTaskBtn);

}

function _removeAllChildNodes(parent) {
    console.log(parent);
    //console.log(parent.firstChild);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let projects = [];
let gamingToDo = newToDo("Play", "gotta game", "tomorrow", 5);
let gaming = newProject("Gaming");
let chores = newProject("Chores");
gaming.todos.push(gamingToDo);
export{newProject};