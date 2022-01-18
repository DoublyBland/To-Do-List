//import { newToDo } from "./toDoHandler";

import { displayToDo } from "./projectHandler";

 
function editForm(item) {
       let form = document.getElementById("edit")
       form.style.display = "block";
       showCurrentValues(item)
   }

   function showCurrentValues(item){
    let nameField  = document.getElementById('edit-name');
    let descriptionField  = document.getElementById('edit-description');
    let dateField  = document.getElementById('edit-date');
    let priorityField  = document.getElementById('edit-priority');

    nameField.value = item.title;
    descriptionField.value = item.description;
    dateField.value = item.dueDate;
    priorityField.value = item.priority;
   }
   
   function closeForm() {
       let form = document.getElementById("edit")
       _clearForm();
       form.style.display = "none";
   }

   function _clearForm(){
       const forms = document.getElementsByClassName('input');
       for(let i=0;i<forms.length;i++){
           forms[i].value = "";
       }
   }

   function handleEdits(item, project){
       updateItem(item);//update values
       displayToDo(project);
       _clearForm();
       closeForm();
   }

   function updateItem(item){
    let nameField  = document.getElementById('edit-name');
    let descriptionField  = document.getElementById('edit-description');
    let dateField  = document.getElementById('edit-date');
    let priorityField  = document.getElementById('edit-priority');
    item.title = nameField.value;
    item.description = descriptionField.value;
    item.dueDate = dateField.value;
    item.priority = priorityField.value;
   }

   function removeItem(item, itemDOM, project){
    let position = item.index - 1;
    decrementIndices(item, project);
    //console.log(project);
    //console.log(item);
    project.todos.splice(position, 1);
    itemDOM.remove();
    displayToDo(project);
    _clearForm();
    closeForm();
   }

   function decrementIndices(item, project){//
    let index = item.index;
    let list = project.todos;
    for(let i =0; i<list.length;i++){
        let currentItem = list[i];
        let currentIndex = currentItem.index;
        if (currentIndex > index){
            currentItem.index = currentIndex - 1;
        }
    }
   }

   function activateEditListeners(item, itemDOM, project){
       const cancelNewToDo = document.getElementById('cancel-edit');
       cancelNewToDo.addEventListener('click', closeForm);
       const editBtn = document.getElementById('edit-to-do');
       const deleteBtn = document.getElementById('delete-to-do')
       //addBtn.addEventListener('click', createToDo(project));
       editBtn.addEventListener('click', function(event){
           handleEdits(item, project);   
       }, {once: true});
       deleteBtn.addEventListener('click', function(event){
           removeItem(item, itemDOM, project);   
       }, {once: true});
   }


export {editForm, activateEditListeners};