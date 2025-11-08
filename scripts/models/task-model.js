class Task{
    constructor(id, name, desc, doc, status="WIP"){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.doc = doc;
        this.status = status;
        this.isDeleted = false; //not read
    }
}
export default Task;