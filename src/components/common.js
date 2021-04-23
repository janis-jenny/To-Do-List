
const storage = [];

const selectElement = document.querySelector('select');

const populateSelect = () => {
  selectElement.textContent = '';
  storage.map((project) => {
    const optionElement = `<option value=${project.id}>${project.name}</option>`;
    selectElement.insertAdjacentHTML('afterbegin', optionElement);
  });
}

const getValue = () => {
  const value = selectElement.value;
  return value;
};

export { populateSelect, getValue, storage };
