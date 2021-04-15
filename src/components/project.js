import storage from './common';
// import createProject from './render';

export default class Project {
  constructor(name) {
    this.name = name;
    this.task = []; 
    this.container = document.querySelector('.render-name');
  }

  addProject() {
    // this.container.innerText = this.name;
    storage.push({
      name: this.name,
      // tasks: [],
    })
  }

  get name() {
    return this._name;
  }
  
  get task() {
    return this.task;
  }

  set name(name) {
    this.name = name;
  }
 
  set task(task) {
    this._task = task;
  }
  /* addProjectName() {
    storage.forEach((element) => {
      const containerProject = element;
      this.container.insertAdjacentHTML('afterbegin', containerProject);
    })
  } */
  renderProject() {
    storage.map(item => ({
      name: item[0],
    }))
    console.log(storage);
  }
}
