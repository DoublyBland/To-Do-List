import {newProject} from './projectHandler';

function dropDown(){
    let dropdown = document.getElementsByClassName("dropdown-btn");
    let i;

    for (i = 0; i < dropdown.length; i++) {
    //dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    //});
    }
}

function openForm() {
    let form = document.getElementById("myForm")
    form.style.display = "block";
  }
  
  function closeForm() {
    let form = document.getElementById("myForm")
    _clearForm();
    form.style.display = "none";
  }

  function _clearForm(){
    const forms = document.getElementsByClassName('input');
    for(let i=0;i<forms.length;i++){
        forms[i].value = "";
    }
  }

function createProject(){
    let input  = document.getElementById('project-name');
    let name = input.value;
    newProject(name);
    _clearForm();
    closeForm();
}

  function activateListeners(){
    const dropDownBtn = document.getElementById('dropdown-btn');
    dropDownBtn.addEventListener('click', dropDown);
    const newProject = document.getElementById('new-project');
    const cancelNewProject = document.getElementById('cancel-project');
    newProject.addEventListener('click', openForm);
    cancelNewProject.addEventListener('click', closeForm);
    const addBtn = document.getElementById('add-project');
    addBtn.addEventListener('click', createProject);
}

export {activateListeners};