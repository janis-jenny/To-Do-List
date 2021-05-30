/**
 * @jest-environment jsdom
 */

/* import {
  createProject, createTodo, displayProjects, displayTasks,
} from '../components/render';
 */
import createHtmlForm from '../_mocks/createForm';

it('Should click on add project', () => {
  createHtmlForm();
  const mockCallBack = jest.fn();
  const createProjectBtn = document.getElementById('new-project');
  createProjectBtn.onclick = mockCallBack;
  createProjectBtn.click();
  expect(mockCallBack.mock.calls.length).toEqual(1);
});

it('Should click on add task', () => {
  createHtmlForm();
  const mockCallBack = jest.fn();
  const createTaskBtn = document.getElementById('exampleModalLabel');
  createTaskBtn.onclick = mockCallBack;
  createTaskBtn.click();
  expect(mockCallBack.mock.calls.length).toEqual(1);
});

it('Should click form buttons', () => {
  createHtmlForm();
  const mockCallBack = jest.fn();
  const createButton = document.getElementById('create-button');
  createButton.onclick = mockCallBack;
  createButton.click();
  const createProject = document.getElementById('new-project');
  createProject.onclick = mockCallBack;
  createProject.click();
  const cancelButton = document.getElementById('cancel-btn');
  cancelButton.onclick = mockCallBack;
  cancelButton.click();
  expect(mockCallBack.mock.calls.length).toEqual(3);
});
