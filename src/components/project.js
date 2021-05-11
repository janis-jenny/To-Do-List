import { storage } from './common';
import { setLocalStorage } from './localStorage';

const uniqid = require('uniqid');

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addProject() {
    storage.push({
      id: uniqid(),
      name: this.name,
      tasks: this.tasks,
    });
  }

  renderProject() {
    this.addProject();
    setLocalStorage();
  }
}
