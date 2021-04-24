import { setLocalStorage } from './common';

export default class Todos {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.todoList = document.getElementById('todo-list-container');
  }

  addTodo(project, task) {
    project.tasks.push(task);
    setLocalStorage();
  }

  renderTodo(project) {
    this.todoList.textContent = '';
    const contTodo = project.tasks.map(item => `<ul class="todoCard">
                                                <li>${item.title}</li>
                                                <li>${item.description}</li>
                                                <li><button class="todo-delete">Delete</button></li>
                                                <li><button class="todo-edit">Edit</button></li>
                                                </ul>`);
    this.todoList.insertAdjacentHTML('afterbegin', contTodo);
    console.log(project)

  }
}