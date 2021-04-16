import storage from './common';
// import createProject from './render';

export default class Project {
  constructor(name, id) {
    this.name = name;
    this.tasks = []; 
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
    const contPj = storage.map(item => `<h2 id="${item.id}>${item.name}</h2>`);
    this.container.insertAdjacentHTML('', contPj);
    console.log(storage);
  }
}
