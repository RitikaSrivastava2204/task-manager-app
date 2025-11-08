import Task from './task-model.js';
export const taskService = {
    tasks:[],

    addTask(taskObject){
        const task = new Task(taskObject.id, taskObject.name, taskObject.desc, taskObject.doc);
        this.tasks.push(task);
        return task;
        // console.log(this.tasks);

    },
    getAllTasks(){
        return this.tasks;
    },
    deleteTask(){
        this.tasks = this.tasks.filter(taskObject => !taskObject.isDeleted); // replace task array with new task array having not deleted tasks;

    },
    updateTask(){

    },
    searchTaskById(taskId){
        return this.tasks.find(taskObject=>taskObject.id == taskId);

    },
    sortTask(){

    },
    totalTask(){
        return this.tasks.length;

    },
    markCount(){
        return this.tasks.filter(taskObject=>taskObject.isDeleted).length;

    },
    unMarkCount(){
        return this.tasks.length - this.markCount();

    },
    toggleTask(taskId){
        const taskObject = this.searchTaskById(taskId);
        if(taskObject){
            taskObject.isDeleted = !taskObject.isDeleted;
        }
    }

}