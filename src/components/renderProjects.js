/* import { storage } from './common';

const displayProjects = (container) => {
  console.log('AQUI');
  console.log(storage);
  container.innerHTML = '';
  storage.map(item => {
    const h2 = `<h2 data-id=${item.id} class="project-name">${item.name}</h2>`;

    container.insertAdjacentHTML('afterbegin', h2);
  });
}

export default { displayProjects };  */