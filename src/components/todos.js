
export default class Todos {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.todoList = document.getElementById('todo-list-container');
  }

  addTodo(project, task) {
    project.tasks.push(task);
    console.log(project)

  }

  renderTodo(project) {
    this.todoList.textContent = '';
    // this.addTodo();
    const contTodo = project.tasks.map(item => `<ul class="todoCard">
                                                <li>${item.title}</li>
                                                <li>${item.description}</li>
                                                <li><button class="todo-delete">Delete</button></li>
                                                <li><button class="todo-edit">Edit</button></li>
                                                </ul>`);
    this.todoList.insertAdjacentHTML('afterbegin', contTodo);
  
  }

}