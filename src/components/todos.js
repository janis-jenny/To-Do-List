import storage from './common';

export default class Todos {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    // this.tasks = [];
    this.todoList = document.getElementById('todo-list-container');
  }

  appendTodo() {
    const todoCard = `<div class="todoCard">
                      <div>${this.title}</div>
                      <div>${this.description}</div>
                      </div>`;
    this.todoList.insertAdjacentHTML('afterbegin', todoCard);
  }

  addTodo(project, task) {
    project.tasks.push(task)
  }

  renderTodo() {
    this.todoList.textContent = '';
    this.appendTodo();
    this.addTodo();
    const contTodo = project.tasks.map(item => `<div class="todoCard">
                                                   <div>${item.title}</div>
                                                   <div>${item.description}</div>
                                                   </div>`);
    this.todoList.insertAdjacentHTML('afterbegin', contTodo);
    console.log(tasks);
  }

}

    /* storage[0].tasks.push({
      title: this.title, description: this.description
    }) */