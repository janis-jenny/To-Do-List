import storage from './common';
// import createProject from './render';

export default class Project {
  constructor(name) {
    this.name = name;
    // this.task = []; 
    this.container = document.querySelector('.render-name');
  }

  addProject() {
    // this.container.innerText = this.name;
    storage.push({
      name: this.name,
      tasks: [],
    })
  }

  renderProject() {
    this.container.textContent = '';
    this.addProject();
    const contPj = storage.map(item => `<h2>${item.name}</h2>`);
    this.container.insertAdjacentHTML('afterbegin', contPj);
    console.log(storage);
  }
}
