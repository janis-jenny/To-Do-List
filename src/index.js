import { populateSelect } from './components/common';
import {
  createProject, createTodo, displayProjects, displayTasks, showTaskForm, showProjectForm,
} from './components/render';
import Project from './components/project';
import './css/stylesheet.css';

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