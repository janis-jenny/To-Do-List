import { storage } from './common';

const uniqid = require('uniqid');

export default class Project {
  constructor(name) {
    this.name = name;
    // this.container = document.querySelector('.render-projects');
    this.tasks = [];
  }

  addProject() {
    storage.push({
      id: uniqid(),
      name: this.name,
      tasks: this.tasks,
    });
    console.log(storage);
  }

  renderProject() {
    this.addProject();
    // projectCard();
    const contPj = storage.map(item => `<h2 class="project-name">${item.name}</h2>
                                       `);
    // this.container.insertAdjacentHTML('afterbegin', contPj); */

    return contPj;
  }
}
