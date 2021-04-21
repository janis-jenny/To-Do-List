

function showForm() {
  const showTodoForm = document.querySelector('.task-btn');
  showTodoForm.addEventListener('click', (e) => {
    e.preventDefault();
    const todoForm = document.querySelector('#todos-form');
    todoForm.toggle();
  });
}