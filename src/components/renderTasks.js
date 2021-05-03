const addTodo = (project, task) => {
  console.log('AQUIIII');
  console.log(project);
  project.tasks.push(task);
};

const todoCard = (project, container) => {
  const contTodo = project.tasks.map(item => `<div class="todoCard" id="container-${item.id}">
                                              <h5>${item.title}</h5>
                                              <p>${item.description}</p>
                                              <span>${item.date}</span>
                                              <span>${item.priority}</span>
                                              <div><button class="todo-delete" id="${item.id}">Delete</button></div>
                                              <div><button class="todo-edit" id="edit-${item.id}">Edit</button></div>
                                              </div>`);
  container.insertAdjacentHTML('afterbegin', contTodo);
};

export { addTodo, todoCard };
