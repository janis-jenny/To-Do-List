import Project from './project';
import Todos from './todos';
import { addTodo, todoCard } from './renderTasks';
import { addProject } from './renderProjects';
import { storage, populateSelect, getValue, getIndex } from './common';


const createProject = () => {
  const newProject = document.querySelector('#new-project');
  newProject.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('.project_name').value;
    const newProject = new Project(nameInput);
    newProject.addProject();
    populateSelect();
    const projectsContainer = document.getElementById('projects');
    displayProjects(projectsContainer);
  });
}

function createTodo() {
  const btnTodo = document.querySelectorAll('.create-button');
  btnTodo.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = getValue();
      const projectIndex = getIndex(projectId);
      const project = storage[projectIndex];
      const newTitle = document.querySelector('#title').value;
      const newDescp = document.querySelector('#description').value;
      const newDate = document.querySelector('#date').value;
      const newPriority = document.querySelector('#priority-list').value;
      const newTodo = new Todos(newTitle, newDescp, newDate, newPriority);
      console.log('hereeee');
      console.log(newTodo);
      addTodo(project, {
        title: newTitle, description: newDescp, date: newDate, priority: newPriority,
      });
      displayTasks();
    });
  });
}

const displayProjects = (container) => {
  console.log('AQUI');
  console.log(storage);
  container.innerHTML = '';
  storage.map(item => {
    const h2 = `<h2 data-id=${item.id} class="project-name">${item.name}</h2>`;
    container.insertAdjacentHTML('afterbegin', h2); 
  });
}

const displayTasks = () => {
  const todoRender = document.querySelectorAll('.project-name');
  todoRender.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = e.target.dataset.id;
      const projectIndex = getIndex(projectId);
      const project = storage[projectIndex];
      console.log('HEREEE.!!!')
      console.log(project)
      const todoContainer = document.getElementById('todo-list-container');
      todoContainer.innerHTML = '';
      todoCard(project, todoContainer);
    });
  });
}

export { createProject, createTodo, displayProjects, displayTasks };
