import Project from './project';
import ToDos from './todos';
import storage from './common';

function createProject() {
  const newProject = document.querySelector('#new-project');
  newProject.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('.project_name').value;
    const newProject = new Project(nameInput);
    newProject.renderProject();
  });
}

function createTodo() {
  const btnTodo = document.querySelectorAll('.todo-btn');
  btnTodo.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectIndex = e.target.dataset.id;
      const project = storage[projectIndex]
      const newTitle = document.querySelector('#title').value;
      const newDescp = document.querySelector('#description').value;
      addTodo(project, {title: newTitle, description: newDescp });
      const newTodo = new ToDos(newTitle, newDescp);
      newTodo.renderTodo();
    })
  })
}

  /* btnTodo.forEach(btn => {
    btn.addEventListener('click', function() {                                          
      this.querySelector("#todos-form").classList.toggle("show"); 
    }) */
   /*  addIndexProject() {
      const addTaskButtons = document.querySelectorAll('.todo-btn');
      addTaskButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const projectIndex = e.target.dataset.id;
          const project = storage[projectIndex]
          addTodo(project, { title: this.title, description: this.description })
        })
      })
    } */

export { createProject, createTodo };

/*  */

