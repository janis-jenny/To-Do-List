import createProject from './components/render';

const projectButton = document.getElementById('newProject');
const newProject = createProject();
projectButton.addEventListener('click', (e) => {
  e.preventDefault();
  const projectName = document.querySelector('.projectName');
  projectName.innerText = newProject.name;
});
