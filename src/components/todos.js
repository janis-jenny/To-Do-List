import { todoCard } from './renderCards'

export default class Todos {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    // this.todoList = document.getElementById('todo-list-container');
  }

  /* addTodo(project, task) {
    project.tasks.push(task);
  } */

  renderTodo(project, container) {
    todoCard(project, container);
  }

  prueba() {
    console.log('pruebaa');
  }
}