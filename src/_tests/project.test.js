import Project from '../_mocks/classProject';

describe('Project class', () => {
  let project;
  beforeEach(() => {
    project = new Project('data');
  });

  it.only('Should create a project object', () => {
    expect(typeof project).toBe('object');
  });
});