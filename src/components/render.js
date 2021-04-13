import Project from './project';
import Todos from './todos'

function createProject() {
  const nameInput = document.querySelector('.project_name').value;
  const newProject = new Project(nameInput);
  return newProject;
}

function displayTodo() {
  const todoContainer = document.getElementById('todos-form-container');
  const todo = new Todos('Title1', 'Description1', 'date1');
  return todo;
}

export { createProject, displayTodo } ;