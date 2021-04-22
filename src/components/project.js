import { storage } from './common';

export default class Project {
  constructor(name = 'Default') {
    this.name = name; 
    this.container = document.querySelector('.render-projects');
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
    const contPj = storage.map(item => `<h2 data-id=${storage.indexOf(item)}>${item.name}</h2>
                                       `);
    this.container.insertAdjacentHTML('afterbegin', contPj);
    console.log(storage);
  }
}
// <button class="todo-btn">Create Task</button> 