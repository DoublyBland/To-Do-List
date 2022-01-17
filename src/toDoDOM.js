 import { newToDo } from "./toDoHandler";
 
 function openForm() {
        let form = document.getElementById("to-do-form")
        form.style.display = "block";
    }
    
    function closeForm() {
        let form = document.getElementById("to-do-form")
        _clearForm();
        form.style.display = "none";
    }

    function _clearForm(){
        const forms = document.getElementsByClassName('input');
        for(let i=0;i<forms.length;i++){
            forms[i].value = "";
        }
    }

    function createToDo(project){
        newToDo(project);
        _clearForm();
        closeForm();
    }

    function activateListeners(project){
        const cancelNewToDo = document.getElementById('cancel-to-do');
        cancelNewToDo.addEventListener('click', closeForm);
        const addBtn = document.getElementById('add-to-do');
        console.log(project);
        //addBtn.addEventListener('click', createToDo(project));
        addBtn.addEventListener('click', function(event){
            createToDo(project);   
        }, {once: true});
    }


export {openForm, activateListeners};