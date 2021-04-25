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
  populateSelect, getValue, setLocalStorage, getLocalStorage, storage,
};
