
export default class Todos {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.todoList = document.getElementById('todo-list-container');
  }

  addTodo(project, task) {
    project.tasks.push(task),
    console.log(project)
  }

  renderTodo(project) {
    this.todoList.textContent = '';
    const contTodo = project.tasks.map(item => `<div class="todoCard">
                                                   <div>${item.title}</div>
                                                   <div>${item.description}</div>
                                                   </div>`);
    this.todoList.insertAdjacentHTML('afterbegin', contTodo);
  
  }

}

    /* storage[0].tasks.push({
      title: this.title, description: this.description
    }) */