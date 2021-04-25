import { storage } from './common';
var uniqid = require('uniqid');

export default class Project {
  constructor(name) {
    this.name = name; 
    this.container = document.querySelector('.render-projects');
    this.tasks = [];
  }

  addProject() {
    storage.push({
      id: uniqid(),
      name: this.name,
      tasks: this.tasks
    })
  }

  renderProject() {
    this.container.textContent = '';
    this.addProject();
    const contPj = storage.map(item => `<h2>${item.name}</h2>
                                       `);
    this.container.insertAdjacentHTML('afterbegin', contPj);
    console.log(storage);
    
  }
}
