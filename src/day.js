import {projects, findItem} from './projectHandler'
import {format, isAfter, isBefore, add} from 'date-fns'

function showToday(projects){
    let container = document.getElementById('to-do-holder');
    let heading = document.getElementById('to-do-heading');
    heading.textContent = "Today's Tasks";
    _removeAllChildNodes(container);
    for(let i=0;i<projects.length;i++){
        let project = projects[i];
        appendTodayNodes(project, container);
    }
}

function showWeek(projects){
    let container = document.getElementById('to-do-holder');
    let heading = document.getElementById('to-do-heading');
    heading.textContent = "This Week's Tasks";
    _removeAllChildNodes(container);
    for(let i=0;i<projects.length;i++){
        let project = projects[i];
        appendWeekNodes(project, container);
    }
}

function appendTodayNodes(project, container){
    let today = format(new Date(), 'yyyy-MM-dd');
    console.log(today);
    for(let i = 0; i<project.todos.length;i++){
        let todo = project.todos[i];
        console.log(todo.dueDate);
        if(todo.dueDate == today){
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
}

function appendWeekNodes(project, container){
    for(let i = 0; i<project.todos.length;i++){
        let todo = project.todos[i];
        if(checkWeek(todo.dueDate)){
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
}

function checkWeek(dueDate){
    let today = add(new Date(),{days: -1});
    let weekFromToday = add(new Date(), {weeks: 1});
    let parseDate = dueDate.split('-');//yyyy-mm-dd
    let formattedDate = new Date(parseDate[0], (parseDate[1]-1), parseDate[2]);
    if(isBefore(formattedDate, weekFromToday) && isAfter(formattedDate, today)){
        return true;
    }
    else {
        return false;
    }
}

function _removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function activateDateTabs(){
    const today = document.getElementById('today');
    today.addEventListener('click', function(event){
        showToday(projects)
    }, {once:false});
    const week = document.getElementById('week');
    week.addEventListener('click', function(event){
        showWeek(projects)
    }, {once:false});
}

export {activateDateTabs}