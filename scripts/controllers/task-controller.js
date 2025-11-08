// controller is a glue between view and model
// controller - handle view i/o and talk to model layer
import { taskService } from "../models/task-service.js";
window.addEventListener('load', init);
function init(){
    bindEvents();
    updateCounts();
    disableButtons();
}
function disableButtons(){
    document.querySelector('#remove').disabled = true;
    document.querySelector('#update').disabled = true;

}

function bindEvents(){
    document.getElementById('add').addEventListener('click',addTask); //event - delegation model
    document.getElementById('remove').addEventListener('click', deleteForever);
}
function deleteForever(){
    taskService.deleteTask();
    updateCounts();
    document.querySelector('#records').innerHTML = '';
    printTasks(taskService.getAllTasks());
    disableButtons();
}

function updateCounts(){
    document.querySelector('#total-records').innerText = taskService.totalTask();
    document.querySelector('#mark-records').innerText = taskService.markCount();
    document.querySelector('#unmark-records').innerText = taskService.unMarkCount();

}

function addTask(){
    const fields = ['id', 'name', 'desc', 'doc'];
    const taskObject = {};
    for(let field of fields){
        taskObject[field] = document.getElementById(field).value;
    }
    const tObject = taskService.addTask(taskObject);
    printTask(tObject);
    updateCounts();
    //DRY
    // const id = document.getElementById('id').value;
    // const name = document.getElementById('name').value;
    // const desc = document.getElementById('desc').value;
    // const doc = document.getElementById('doc').value;
   
}
function createIcon(className, fn, taskId){
    const icon = document.createElement('i'); //<i></i>
    icon.className = "hand fa-solid " + className; //<i class="fa-solid fa-pen-to-square"></i>
    icon.addEventListener('click', fn)
    icon.setAttribute('task-id', taskId);
    return icon;
}
function printTasks(allTasks){
    allTasks.forEach(printTask);
    updateCounts();
    
}

function printTask(taskObject){
    const tbody = document.querySelector('#records');
    const tr = tbody.insertRow();
    for(let key in taskObject){
        if(key == 'isDeleted'){
            continue;
        }
        const td = tr.insertCell();
        td.innerText = taskObject[key];
    }
    const oprCell = tr.insertCell();
    oprCell.appendChild(createIcon("fa-pen-to-square", edit, taskObject.id));
    oprCell.append(createIcon("fa-trash", toggleDelete, taskObject.id));
    
}

function edit(){
    const currentIcon = this;
    const tr = currentIcon.parentNode.parentNode;
    console.log("edit", tr);

}
function toggleDelete(){
    const currentIcon = this;
    const taskId = currentIcon.getAttribute('task-id');
    taskService.toggleTask(taskId);
    const tr = currentIcon.parentNode.parentNode;
    tr.classList.toggle('red');
    updateCounts();
    if(taskService.markCount()>0){
        document.querySelector('#remove').disabled = false;
    }
    else{
        disableButtons();
    }
    console.log("delete button called", currentIcon);

}