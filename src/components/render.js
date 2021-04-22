import Project from './project';
import Todos from './todos';
import { storage, populateSelect } from './common';


function createProject() {
  const newProject = document.querySelector('#new-project');
  newProject.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('.project_name').value;
    const newProject = new Project(nameInput);
    newProject.renderProject();
    populateSelect();
    createTodo();
  });
}

function createTodo() {
  const btnTodo = document.querySelectorAll('.create-button');
  btnTodo.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const addDataId = storage.indexOf(item)
      const projectIndex = e.target.dataset.id;
      const project = storage[projectIndex]
      const newTitle = document.querySelector('#title').value;
      const newDescp = document.querySelector('#description').value;
      const newTodo = new Todos(newTitle, newDescp);
      console.log('hereee');
      console.log(newTodo);
      newTodo.addTodo(project, {title: newTitle, description: newDescp });
      newTodo.renderTodo(project);
    })
  })
}

/* function toggle(id) {
  var e = document.getElementById(id);
  if (e.style.display == 'block' || e.style.display == '') {
    e.style.display = 'none';
  } else {
    e.style.display = 'block';
  }
}
 */
export { createProject, createTodo };
