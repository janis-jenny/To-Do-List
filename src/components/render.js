import Project from './project';
import Todos from './todos';
import { addTodo, todoCard } from './renderCards';
import { storage, populateSelect, getValue } from './common';


const createProject = () => {
  const newProject = document.querySelector('#new-project');
  newProject.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('.project_name').value;
    const newProject = new Project(nameInput);
    const markup1 = newProject.renderProject();
    populateSelect();
    document.getElementById('projects').insertAdjacentHTML('afterbegin', markup1);
  });
}

function createTodo() {
  const btnTodo = document.querySelectorAll('.create-button');
  btnTodo.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = getValue();
      const projectIndex = storage.findIndex(
        (item) => item.id === projectId,
      );
      const project = storage[projectIndex];
      const newTitle = document.querySelector('#title').value;
      const newDescp = document.querySelector('#description').value;
      const newDate = document.querySelector('#date').value;
      const newPriority = document.querySelector('#priority-list').value;
      const newTodo = new Todos(newTitle, newDescp, newDate, newPriority);
      console.log('hereee');
      console.log(newTodo);
      addTodo(project, {
        title: newTitle, description: newDescp, date: newDate, priority: newPriority,
      });
      const todoContainer = document.getElementById('todo-list-container');
      todoCard(project, todoContainer);
      newTodo.prueba;
      // newTodo.renderTodo(project, todoContainer);
    });
  });
}

export { createProject, createTodo };
