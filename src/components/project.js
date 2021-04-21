import storage from './common';

export default class Project {
  constructor(name) {
    this.name = name; 
    this.container = document.querySelector('.render-name');
    this.tasks = [];
  }

  addProject() {
    storage.push({
      name: this.name,
      tasks: this.tasks,
    })
  }

  renderProject() {
    this.container.textContent = '';
    this.addProject();
    const contPj = storage.map(item => `<h2>${item.name}</h2>
                                        <button data-id=${storage.indexOf(item)} class="todo-btn">Add</button>`);
    this.container.insertAdjacentHTML('afterbegin', contPj);
    console.log(storage);
  }
}
// <button class="todo-btn">Create Task</button> 