import Project from './project';

function createProject() {
  const nameInput = document.querySelector('.project_name').value;
  const newProject = new Project(nameInput);
  return newProject;
}

export default createProject;