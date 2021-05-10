import { setLocalStorage } from './localStorage';

const addTodo = (project, task) => {
  project.tasks.push(task);
  setLocalStorage();
};

const eventForClick = (project, container) => {
  const contTodo = project.tasks.map(item => container.addEventListener('click', (e) => {
    if (e.target.id === `title-${item.id}`
          || e.target.id === `date-${item.id}`
          || e.target.id === `container-${item.id}`) {
      const detailsContainer = document.getElementById(`details-${item.id}`);
      detailsContainer.classList.toggle('d-none');
    }

    if (e.target.id === `checkbox-${item.id}`) {
      const checkMark = document.getElementById(`check-mark-${item.id}`);
      const todoTitle = document.getElementById(`title-${item.id}`);
      const checkBox = document.getElementById(`checkbox-${item.id}`);
      todoTitle.classList.toggle('cross-line');
      checkMark.classList.toggle('d-none');
      item.check = checkBox.checked;
      setLocalStorage();
    }
  }));
  return contTodo;
};

const renderCheckCard = (item) => {
  if (item.check) {
    return `<div class="checkbox-container" id="check-${item.id}">
      <input type="checkbox" name="checkbox-${item.id}" id="checkbox-${item.id}" class="checkbox" checked>
      <label for="checkbox-${item.id}" class="checkbox-circle" id="label-${item.id}"></label>
      <label for="checkbox-${item.id}" id="check-mark-${item.id}" class="checkbox-checker">
      <ion-icon name="checkmark-outline"></ion-icon>
      </label>
    </div>
    <p class="todo-title cross-line" id="title-${item.id}">
      ${item.title}
    </p>`;
  }

  return `<div class="checkbox-container" id="check-${item.id}">
          <input type="checkbox" name="checkbox-${item.id}" id="checkbox-${item.id}" class="checkbox">
          <label for="checkbox-${item.id}" class="checkbox-circle" id="label-${item.id}"></label>
          <label for="checkbox-${item.id}" id="check-mark-${item.id}" class="checkbox-checker d-none">
          <ion-icon name="checkmark-outline"></ion-icon>
          </label>
          </div>
          <p class="todo-title" id="title-${item.id}">
          ${item.title}
          </p>`;
};

const todoCard = (project, container) => {
  const contTodo = project.tasks.map(item => `<div class="todo d-flex" id="container-${item.id}">
                                                  ${renderCheckCard(item)}
                                                  <div class="todo-date ml-auto px-1" id="date-${item.id}"> Due date: ${item.date}</div>
                                                  <span class="todo-delete delete-btn px-4" id="${item.id}"><img class="trash-icon" src="../assets/trash-fill.svg"></span>
                                                  <div class="priority-color-container priority-color-${item.priority}" id="color-${item.id}"></div>
                                                </div>
                                                <div class="todo-details d-none" id="details-${item.id}">
                                                  <div class="edit-container">
                                                    <p class="gray-color">Title</p>
                                                    <p contenteditable="true" id="editable-title-${item.id}" class="editable-content">${item.title}</p>
                                                  </div>
                                                  <div class="edit-container">
                                                    <p class="gray-color">Due date:</p>
                                                    <input type="date" value="${item.date}" id="edit-date-${item.id}" class="editable-content">
                                                  </div>
                                                  <div class="edit-container">
                                                    <p class="gray-color">Description: </p>
                                                    <p class="editable-content" id="description-${item.id}">
                                                        ${item.description}
                                                    </p>
                                                  </div>
                                                  <div class="edit-container">
                                                    <p class="gray-color">Priority: </p>
                                                    <select id="priority-${item.id}" class="editable-content">
                                                      <option value="high">High</option>
                                                      <option value="medium">Medium</option>
                                                      <option value="low">Low</option>
                                                    </select>
                                                  </div>
                                                </div>`);
  container.insertAdjacentHTML('afterbegin', contTodo);
};

export { addTodo, todoCard, eventForClick };
