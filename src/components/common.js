const storage = [];

const selectElement = document.querySelector('select');
// const btn = document.querySelector('.btn');

const populateSelect = () => {
  storage.map((project) => {
    const optionElement = `<option value=${project.id}>${project.name}</option>
    `;
    selectElement.insertAdjacentHTML('afterbegin', optionElement);
  });
}

export { populateSelect, storage };
