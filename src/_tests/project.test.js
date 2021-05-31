import Project from '../_mocks/classProject';

describe('Project class', () => {
  let project;
  beforeEach(() => {
    project = new Project('data');
  });

  it('Should create a project object', () => {
    expect(typeof project).toBe('object');
  });

  const newProject = new Project('Jenny');

  test('It has a title of Jenny', () => {
    expect(newProject.name).toBe('Jenny');
  });

  test('It has a list of tasks', () => {
    expect(newProject).toHaveProperty('tasks');
  });

  test('It has an empty list of tasks', () => {
    expect(newProject.tasks.length).toBe(0);
  });
});