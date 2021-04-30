import Project from './project';
import Todos from './todos';
import { addTodo, todoCard } from './renderTasks';
import {
  storage, populateSelect, getValue, getIndex,
} from './common';

const displayProjects = (container) => {
  container.innerHTML = '';
  storage.map(item => {
    const h2 = `<h2 data-id=${item.id} class="project-name">${item.name}
                <span><button id=${item.id} class="delete-btn">Delete</button></span></h2>`;
    container.insertAdjacentHTML('afterbegin', h2);
    return h2;
  });
};

const displayTasks = () => {
  const todoRender = document.querySelectorAll('.project-name');
  todoRender.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = e.target.dataset.id;
      const projectIndex = getIndex(projectId);
      const project = storage[projectIndex];
      const taskContainer = document.querySelector('#todo-list-container');
      taskContainer.dataset.id = projectId;
      taskContainer.innerHTML = '';
      const todoWrapper = document.createElement('div');
      todoWrapper.classList.add('todo-wrapper')
      taskContainer.append(todoWrapper);
      todoCard(project, todoWrapper);
    });
  });
};

const createProject = () => {
  const newProject = document.querySelector('#new-project');
  newProject.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('.project_name').value;
    const newProject = new Project(nameInput);
    newProject.renderProject();
    populateSelect();
    const projectsContainer = document.getElementById('projects');
    displayProjects(projectsContainer);
    deleteProject();
  });
};

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


const deleteProject = () => {
  const btnDelete = document.querySelectorAll('.delete-btn');;
  btnDelete.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectIndex = getIndex(e.target.id);
      storage.splice(+projectIndex, 1)
      const taskContainer = document.querySelector('#todo-list-container');
      const todoWrapper = document.querySelector('.todo-wrapper')
      taskContainer.remove();
    })
  });
}

export {
  createProject, createTodo, displayProjects, displayTasks,
};
