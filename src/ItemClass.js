class Item{
    constructor(title, description = '', date = new Date(), dueDate = date.getDate(), priority = 'Low', complete = false){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
    }
}
export default Item;
