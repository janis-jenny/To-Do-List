import { populateSelect } from './components/common';
import { createProject, createTodo } from './components/render';
import Project from './components/project';

createProject();
createTodo();
const firstProject = new Project('default')
firstProject.renderProject();

populateSelect();

