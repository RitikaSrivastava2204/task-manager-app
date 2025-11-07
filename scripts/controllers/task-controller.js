// controller is a glue between view and model
// controller - handle view i/o and talk to model layer
import { taskService } from "../models/task-service.js";
window.addEventListener('load', bindEvents);
function bindEvents(){
    document.getElementById('add').addEventListener('click',addTask); //event - delegation model
}

function addTask(){
    const fields = ['id', 'name', 'desc', 'doc'];
    const taskObject = {};
    for(let field of fields){
        taskObject[field] = document.getElementById(field).value;
    }
    const tObject = taskService.addTask(taskObject);
    printTask(tObject);
    //DRY
    // const id = document.getElementById('id').value;
    // const name = document.getElementById('name').value;
    // const desc = document.getElementById('desc').value;
    // const doc = document.getElementById('doc').value;
   
}
function printTask(taskObject){
    const tbody = document.querySelector('#records');
    const tr = tbody.insertRow();
    for(let key in taskObject){
        const td = tr.insertCell();
        td.innerText = taskObject[key];
    }
    
}