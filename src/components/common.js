const storage = [];
const selectElement = document.querySelector('select');

const populateSelect = () => {
  selectElement.textContent = '';
  const populate = storage.map((project) => {
    const optionElement = `<option value=${project.id}>${project.name}</option>`;
    selectElement.insertAdjacentHTML('afterbegin', optionElement);
    return populate;
  });
};

const getValue = () => {
  const { value } = selectElement;
  return value;
};

const getIndex = (id) => storage.findIndex((project) => project.id === id);

const displayTodoForm = (element) => element.classList.remove('d-none')

const hideTodoForm = (element) => element.classList.add('d-none')

const cancelButton = (element) => {
  const cancel = document.querySelector('.cancel-button');
  cancel.addEventListener('click' , e => {
    e.preventDefault();
    element.classList.toggle('d-none');
  });
}

const setLocalStorage = () => {
  window.localStorage.setItem('todos', JSON.stringify(storage));
};



const getLocalStorage = () => {
  const colletion = JSON.parse(window.localStorage.getItem('todos'));
  if (colletion) {
    colletion.forEach(el => {
      storage.push(el);
    });
  }
};

export {
  populateSelect, getValue, setLocalStorage, getLocalStorage, getIndex, storage, hideTodoForm, displayTodoForm, cancelButton
};
