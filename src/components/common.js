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

export {
  populateSelect, getValue, getIndex, storage,
};
