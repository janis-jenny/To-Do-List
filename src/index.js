import createProject from './components/render';
import displayTodo from './components/render';

const projectButton = document.getElementById('newProject');
const newProject = createProject();
projectButton.addEventListener('click', (e) => {
  const projectName = document.querySelector('.projectName');
  projectName.innerText = newProject.name;
});

const btnTodo = document.getElementById('todo-btn');

btnTodo.addEventListener('click', (e) => {
  const newTodo = displayTodo();
})


