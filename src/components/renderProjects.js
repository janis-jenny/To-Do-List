import { storage } from './common';

const uniqid = require('uniqid');

const addProject = () => {
  storage.push({
    id: uniqid(),
    name: this.name,
    tasks: this.tasks,
  });
  console.log(storage);
}

/* renderProject() {
  this.addProject();
} */

export default { addProject };