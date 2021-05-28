import Project from './project';
import Todos from './todos';
import {
  addTodo, todoCard, eventForClick, eventForFocusOut,
} from './renderTasks';
import {
  storage, populateSelect, getValue, getIndex,
} from './common';
import { setLocalStorage } from './localStorage';

const uniqid = require('uniqid');

const deleteProject = () => {
  const btnDelete = document.querySelectorAll('.delete-btn');
  btnDelete.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectIndex = getIndex(e.target.id);
      console.log(storage);
      console.log(projectIndex);
      storage.splice(+projectIndex, 1);
      console.log(storage);
      setLocalStorage();
      const projectsContainer = document.querySelector('.project-name');
      const todoWrapper = document.querySelector('.todo-wrapper');
      projectsContainer.remove();
      if (projectIndex.tasks >= 0) {
        todoWrapper.remove();
      }
    });
  });
};

const deleteTask = (projectIndex) => {
  const btnDelete = document.querySelectorAll('.todo-delete');
  btnDelete.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const taskId = e.target.id;
      const taskIndex = (projectIndex.tasks).findIndex((task) => task.id === taskId);
      (projectIndex.tasks).splice(+taskIndex, 1);
      setLocalStorage();
      const currentTodo = document.querySelector('.todo');
      const currentDetail = document.querySelector('.todo-details');
      currentTodo.remove();
      currentDetail.remove();
    });
  });
};

const displayProjects = (container) => {
  container.innerHTML = '';
  storage.map(item => {
    const list = `<h3 class="project project-name d-flex justify-content-between" data-id=${item.id}>${item.name}
                <span id=${item.id} class="delete-btn"><img class="trash-icon" src="../assets/trash-fill.svg"></span></h3>`;
    container.insertAdjacentHTML('afterbegin', list);
    return list;
  });
  deleteProject();
};

const displayTasks = () => {
  const todoRender = document.querySelectorAll('.project-name');
  todoRender.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = e.target.dataset.id;
      const projectIndex = getIndex(projectId);
      const project = storage[projectIndex];
      console.log(projectIndex);
      if (projectIndex >= 0) {
        const taskContainer = document.querySelector('#todo-list-container');
        taskContainer.dataset.id = projectId;
        taskContainer.innerHTML = '';
        const todoWrapper = document.createElement('div');
        todoWrapper.classList.add('todo-wrapper');
        taskContainer.append(todoWrapper);
        todoCard(project, todoWrapper);
        deleteTask(project);
        eventForClick(project, todoWrapper);
        eventForFocusOut(project, todoWrapper);
      }
    });
  });
};

const createProject = () => {
  const newProject = document.getElementById('new-project');
  newProject.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('.project_name').value;
    const newProject = new Project(nameInput);
    newProject.renderProject();
    // eslint-disable-next-line no-undef
    $('#projectModal').modal('hide');
    populateSelect();
    // eslint-disable-next-line no-undef
    $('#projectModal').on('hidden.bs.modal', function reset() {
      // eslint-disable-next-line no-undef
      $(this).find('form').trigger('reset');
    });
    const projectsContainer = document.getElementById('projects');
    displayProjects(projectsContainer);
  });
};

const createTodo = () => {
  const btnTodo = document.querySelectorAll('.create-button');
  btnTodo.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = getValue();
      const projectIndex = getIndex(projectId);
      const project = storage[projectIndex];
      const id = uniqid();
      const newTitle = document.querySelector('#title').value;
      const newDescp = document.querySelector('#description').value;
      const newDate = document.querySelector('#date').value;
      const newPriority = document.querySelector('#priority-list').value;
      // eslint-disable-next-line no-unused-vars
      const newTodo = new Todos(id, newTitle, newDescp, newDate, newPriority);
      addTodo(project, {
        id, title: newTitle, description: newDescp, date: newDate, priority: newPriority,
      });
      // eslint-disable-next-line no-undef
      $('#exampleModal').modal('hide');
      displayTasks();
      // eslint-disable-next-line no-undef
      $('#exampleModal').on('hidden.bs.modal', function reset() {
        // eslint-disable-next-line no-undef
        $(this).find('form').trigger('reset');
      });
    });
  });
};

export {
  createProject, createTodo, displayProjects, displayTasks,
};
