const addTodo = (project, task) => {
  console.log('AQUIIII');
  console.log(project);
  project.tasks.push(task);
};

const sanitizeId = (text) => text.split(' ').join('');

const todoCard = (project, container) => {
  console.log(container);
  const contTodo = project.tasks.map(item => `<div class="todoCard" id="${sanitizeId(item.title)}">
                                              <h5>${item.title}</h5>
                                              <p>${item.description}</p>
                                              <span>${item.date}</span>
                                              <span>${item.priority}</span>
                                              <div><button class="todo-delete" data-id="${sanitizeId(item.title)}">Delete</button></div>
                                              <div><button class="todo-edit" data-id="${sanitizeId(item.title)}">Edit</button></div>
                                              </div>`);
  container.insertAdjacentHTML('afterbegin', contTodo);
};

export { addTodo, todoCard };
