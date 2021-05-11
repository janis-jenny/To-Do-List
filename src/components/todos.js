
export default class Todos {
  constructor(id, title, description, date, priority, check = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.check = check;
  }
}