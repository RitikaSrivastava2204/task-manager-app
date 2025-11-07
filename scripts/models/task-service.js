import Task from './task-model.js';
export const taskService = {
    tasks:[],

    addTask(taskObject){
        const task = new Task(taskObject.id, taskObject.name, taskObject.desc, taskObject.doc);
        this.tasks.push(task);
        return task;
        // console.log(this.tasks);

    },
    deleteTask(){

    },
    updateTask(){

    },
    searchTask(){

    },
    sortTask(){

    },
    totalTask(){

    },
    markCount(){

    },
    unMarkCount(){

    },
    toggleTask(){
        
    }

}