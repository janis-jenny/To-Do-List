import Project from './project';
import ToDos from './todos';

function createProject() {
  const newProject = document.querySelector('#new-project');
  newProject.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('.project_name').value;
    const newProject = new Project(nameInput);
    newProject.renderProject();
  });
}

function displayTodo() {
  const btnTodo = document.querySelector('#todo-btn');
  btnTodo.addEventListener('click', (e) => {
    e.preventDefault();
    const newTitle = document.querySelector('#title').value;
    const newDescp = document.querySelector('#description').value;
    const newTodo = new ToDos(newTitle, newDescp);
    newTodo.renderTodo();
  });
}

export { createProject, displayTodo };