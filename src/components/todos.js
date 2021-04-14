import storage from "./common";


export default class Todos {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.todoList = document.getElementById('todos-list-container')
  }

  appendTodo() {
    const todoCard = `<div class="todoCard">
                      <div>${this.title}</div>
                      <div>${this.description}</div>
                      </div>`
    this.todoList.insertAdjacentHTML('afterbegin', todoCard)
  }

  /* addTodo() {
    storage[0].tasks.push({
      title: this.title, description: this.description
    })
  } */
  renderTodo() {
    this.appendTodo();
  }
}
   
  