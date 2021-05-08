import { setLocalStorage } from './localStorage';

const addTodo = (project, task) => {
  project.tasks.push(task);
  setLocalStorage();
};

const todoCard = (project, container) => {
  const contTodo = project.tasks.map(item => `<div class="todoCard" id="container-${item.id}">
                                              <h5>${item.title}</h5>
                                              <p>${item.description}</p>
                                              <span>${item.date}</span>
                                              <span>${item.priority}</span>
                                              <div><button class="todo-delete" id="${item.id}"><img class="trash-icon" src="../assets/trash-fill.svg"></button></div>
                                              </div>`);
  container.insertAdjacentHTML('afterbegin', contTodo);
};

export { addTodo, todoCard };
