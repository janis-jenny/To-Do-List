import { storage } from './common';

const uniqid = require('uniqid');

const setLocalStorage = () => {
    if (storage.length == 0) {
      storage.push({
      id: uniqid(),
      name: 'default',
      tasks: [],
      })
      window.localStorage.setItem('todos', JSON.stringify(storage));
    }
    else {
      window.localStorage.setItem('todos', JSON.stringify(storage));
    }
    
};

const getLocalStorage = () => {
  const colletion = JSON.parse(window.localStorage.getItem('todos'));
  console.log('local stprage')
  console.log(colletion)
  if (colletion) {
    colletion.forEach(el => {
      storage.push(el);
    });
  }
};

export {
  setLocalStorage, getLocalStorage,
};
