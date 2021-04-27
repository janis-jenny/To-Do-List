const addTodo = (project, task) => {
  project.tasks.push(task);
}

const todoCard = (project, container) => {
/*   console.log('HEREEE');
  console.log(project); */
  console.log(container);
  const contTodo = project.tasks.map(item => `<div class="todoCard">
                                              <h5>${item.title}</h5>
                                              <p>${item.description}</p>
                                              <span>${item.date}</span>
                                              <span>${item.priority}</span>
                                              <div><button class="todo-delete">Delete</button></div>
                                              <div><button class="todo-edit">Edit</button></div>
                                              </div>`);
  container.insertAdjacentHTML('afterbegin', contTodo);                                    

}

export { addTodo, todoCard };
