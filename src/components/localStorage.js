import { storage } from './common';

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
  setLocalStorage, getLocalStorage,
};
