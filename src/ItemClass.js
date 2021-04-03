import { format } from 'date-fns';

class Item {
  constructor(
    title,
    description = '',
    dueDate = format(new Date(), 'P'),
    priority = 'Low',
    complete = false,
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
  }
}
export default Item;
