import { populateSelect, storage } from './components/common';
import {
  createProject, createTodo, displayProjects, displayTasks,
} from './components/render';
import './css/stylesheet.css';
import Project from './components/project';
import { getLocalStorage } from './components/localStorage';

window.addEventListener('DOMContentLoaded', () => {
  const projectContainer = document.getElementById('projects');
  projectContainer.innerText = '';
  getLocalStorage();
  if (storage.length === 0) {
    createProject();
    createTodo();
    const firstProject = new Project('default');
    firstProject.renderProject();
    displayProjects(projectContainer);
    populateSelect();
    displayTasks();
  } else {
    createProject();
    createTodo();
    displayProjects(projectContainer);
    populateSelect();
    displayTasks();
  }
});