import storage from './common'

export default class Project {
  constructor(name) {
    this.name = name;
    this.container = document.querySelector('.render-name');
  }

  addProjectName() {
    this.container.innerText = this.name;
   /*  storage.push({
      name: this.name,
      tasks: []
    }) */
  }

  renderProject() {
    this.addProjectName();
    // console.log(storage)
  }
}

