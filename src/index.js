import { populateSelect } from './components/common';
import {
  createProject, createTodo, displayProjects, displayTasks, showTaskForm, showProjectForm,
} from './components/render';
import Project from './components/project';
import './css/stylesheet.css';
import { getLocalStorage } from './components/localStorage.js';

createProject();
createTodo();
const firstProject = new Project('default');
firstProject.renderProject(); 
const projectContainer = document.getElementById('projects');
displayProjects(projectContainer);
populateSelect();
displayTasks();
showTaskForm();
showProjectForm();

window.addEventListener('DOMContentLoaded', () => { // solo se ejecuta una vez
  getLocalStorage();
  projectContainer.innerText = '';
  displayProjects(projectContainer);
});