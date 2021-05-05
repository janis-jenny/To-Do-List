import { populateSelect, storage } from './components/common';
import {
  createProject, createTodo, displayProjects, displayTasks, showTaskForm, showProjectForm,
} from './components/render';
import './css/stylesheet.css';
import Project from './components/project';
import { getLocalStorage } from './components/localStorage';

const projectContainer = document.getElementById('projects');
createProject();
createTodo();
 
displayProjects(projectContainer);
populateSelect();
displayTasks();
showTaskForm();
showProjectForm();

window.addEventListener('DOMContentLoaded', () => { // solo se ejecuta una vez
  projectContainer.innerText = '';
  getLocalStorage();
  if (storage.length == 0) {
    const firstProject = new Project('default');
    firstProject.renderProject();
    displayProjects(projectContainer);
  } else {
    displayProjects(projectContainer);
  }
});