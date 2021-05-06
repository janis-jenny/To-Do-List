import Project from './project';
import Todos from './todos';
import { addTodo, todoCard } from './renderTasks';
import {
  storage, populateSelect, getValue, getIndex, hideTodoForm, displayTodoForm, cancelButton,
} from './common';
import { setLocalStorage } from './localStorage';

const uniqid = require('uniqid');

const deleteProject = () => {
  const btnDelete = document.querySelectorAll('.delete-btn');
  btnDelete.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectIndex = getIndex(e.target.id);
      storage.splice(+projectIndex, 1);
      setLocalStorage();
      const projectsContainer = document.querySelector('.project-name');
      const todoWrapper = document.querySelector('.todo-wrapper');
      projectsContainer.remove();
      todoWrapper.remove();
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
      const currentTodo = document.querySelector('.todoCard');
      currentTodo.remove();
    });
  });
};

const displayProjects = (container) => {
  container.innerHTML = '';
  storage.map(item => {
    const h2 = `<h2 data-id=${item.id} class="project-name">${item.name}
                <span><button id=${item.id} class="delete-btn">Delete</button></span></h2>`;
    container.insertAdjacentHTML('afterbegin', h2);
    return h2;
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
        const todoForm = document.querySelector('.todos-form-container');
        cancelButton(todoForm);
        deleteTask(project);
      }
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
    const projectForm = document.querySelector('.project-form');
    hideTodoForm(projectForm);
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
      const newTodo = new Todos(id, newTitle, newDescp, newDate, newPriority);
      addTodo(project, {
        id, title: newTitle, description: newDescp, date: newDate, priority: newPriority,
      });
      displayTasks();
      const todoForm = document.querySelector('.todos-form-container');
      hideTodoForm(todoForm);
    });
  });
};

const showTaskForm = () => {
  const todoForm = document.querySelector('.todos-form-container');
  const addTask = document.querySelector('.add-task-btn');
  addTask.addEventListener('click', e => {
    e.preventDefault();
    displayTodoForm(todoForm);
  });
  cancelButton(todoForm);
};

const showProjectForm = () => {
  const projectForm = document.querySelector('.project-form');
  const addProject = document.querySelector('#create-project');
  addProject.addEventListener('click', e => {
    e.preventDefault();
    displayTodoForm(projectForm);
  });
  cancelButton(projectForm);
};

export {
  createProject, createTodo, displayProjects, displayTasks, showTaskForm, showProjectForm,
};
