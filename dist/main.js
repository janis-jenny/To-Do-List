/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/common.js":
/*!**********************************!*\
  !*** ./src/components/common.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateSelect\": () => (/* binding */ populateSelect),\n/* harmony export */   \"getValue\": () => (/* binding */ getValue),\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage),\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\nvar storage = [];\nvar selectElement = document.querySelector('select');\n\nvar populateSelect = function populateSelect() {\n  selectElement.textContent = '';\n  var populate = storage.map(function (project) {\n    var optionElement = \"<option value=\".concat(project.id, \">\").concat(project.name, \"</option>\");\n    selectElement.insertAdjacentHTML('afterbegin', optionElement);\n    return populate;\n  });\n};\n\nvar getValue = function getValue() {\n  var value = selectElement.value;\n  return value;\n};\n\nvar setLocalStorage = function setLocalStorage() {\n  window.localStorage.setItem('todos', JSON.stringify(storage));\n};\n\nvar getLocalStorage = function getLocalStorage() {\n  var colletion = JSON.parse(window.localStorage.getItem('todos'));\n\n  if (colletion) {\n    colletion.forEach(function (el) {\n      storage.push(el);\n    });\n  }\n};\n\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/common.js?");

/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar uniqid = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n\nvar Project = /*#__PURE__*/function () {\n  function Project(name) {\n    _classCallCheck(this, Project);\n\n    this.name = name;\n    this.tasks = [];\n  }\n\n  _createClass(Project, [{\n    key: \"addProject\",\n    value: function addProject() {\n      _common__WEBPACK_IMPORTED_MODULE_0__.storage.push({\n        id: uniqid(),\n        name: this.name,\n        tasks: this.tasks\n      });\n      console.log(_common__WEBPACK_IMPORTED_MODULE_0__.storage);\n    }\n  }, {\n    key: \"renderProject\",\n    value: function renderProject() {\n      this.addProject();\n    }\n  }]);\n\n  return Project;\n}();\n\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/project.js?");

/***/ }),

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/components/project.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/components/todos.js\");\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTasks */ \"./src/components/renderTasks.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\n\n\n\n\n\nvar createProject = function createProject() {\n  var newProject = document.querySelector('#new-project');\n  newProject.addEventListener('click', function (e) {\n    e.preventDefault();\n    var nameInput = document.querySelector('.project_name').value;\n    var newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.default(nameInput);\n    newProject.renderProject();\n    (0,_common__WEBPACK_IMPORTED_MODULE_3__.populateSelect)();\n    var projectsContainer = document.getElementById('projects');\n    displayProjects(projectsContainer);\n  });\n};\n\nfunction createTodo() {\n  var btnTodo = document.querySelectorAll('.create-button');\n  btnTodo.forEach(function (btn) {\n    btn.addEventListener('click', function (e) {\n      e.preventDefault();\n      var projectId = (0,_common__WEBPACK_IMPORTED_MODULE_3__.getValue)();\n      var projectIndex = _common__WEBPACK_IMPORTED_MODULE_3__.storage.findIndex(function (item) {\n        return item.id === projectId;\n      });\n      var project = _common__WEBPACK_IMPORTED_MODULE_3__.storage[projectIndex];\n      var newTitle = document.querySelector('#title').value;\n      var newDescp = document.querySelector('#description').value;\n      var newDate = document.querySelector('#date').value;\n      var newPriority = document.querySelector('#priority-list').value;\n      var newTodo = new _todos__WEBPACK_IMPORTED_MODULE_1__.default(newTitle, newDescp, newDate, newPriority);\n      console.log('hereeee');\n      console.log(newTodo);\n      (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__.addTodo)(project, {\n        title: newTitle,\n        description: newDescp,\n        date: newDate,\n        priority: newPriority\n      });\n      displayTasks();\n    });\n  });\n}\n\nvar displayProjects = function displayProjects(container) {\n  console.log('AQUI');\n  console.log(_common__WEBPACK_IMPORTED_MODULE_3__.storage);\n  container.innerHTML = '';\n  _common__WEBPACK_IMPORTED_MODULE_3__.storage.map(function (item) {\n    var h2 = \"<h2 data-id=\".concat(item.id, \" class=\\\"project-name\\\">\").concat(item.name, \"</h2>\");\n    container.insertAdjacentHTML('afterbegin', h2);\n  });\n};\n\nvar displayTasks = function displayTasks() {\n  var todoRender = document.querySelectorAll('.project-name');\n  todoRender.forEach(function (btn) {\n    btn.addEventListener('click', function (e) {\n      e.preventDefault();\n      var projectId = e.target.dataset.id;\n      var projectIndex = _common__WEBPACK_IMPORTED_MODULE_3__.storage.findIndex(function (item) {\n        return item.id === projectId;\n      });\n      var project = _common__WEBPACK_IMPORTED_MODULE_3__.storage[projectIndex];\n      console.log('HEREEE.!!!');\n      console.log(project);\n      var todoContainer = document.getElementById('todo-list-container');\n      todoContainer.innerHTML = '';\n      (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__.todoCard)(project, todoContainer);\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/render.js?");

/***/ }),

/***/ "./src/components/renderTasks.js":
/*!***************************************!*\
  !*** ./src/components/renderTasks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"todoCard\": () => (/* binding */ todoCard)\n/* harmony export */ });\nvar addTodo = function addTodo(project, task) {\n  project.tasks.push(task);\n};\n\nvar todoCard = function todoCard(project, container) {\n  /*   console.log('HEREEE');\r\n    console.log(project); */\n  console.log(container);\n  var contTodo = project.tasks.map(function (item) {\n    return \"<div class=\\\"todoCard\\\">\\n                                              <h5>\".concat(item.title, \"</h5>\\n                                              <p>\").concat(item.description, \"</p>\\n                                              <span>\").concat(item.date, \"</span>\\n                                              <span>\").concat(item.priority, \"</span>\\n                                              <div><button class=\\\"todo-delete\\\">Delete</button></div>\\n                                              <div><button class=\\\"todo-edit\\\">Edit</button></div>\\n                                              </div>\");\n  });\n  container.insertAdjacentHTML('afterbegin', contTodo);\n};\n\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/renderTasks.js?");

/***/ }),

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todos)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Todos = function Todos(title, description, date, priority) {\n  _classCallCheck(this, Todos);\n\n  this.title = title;\n  this.description = description;\n  this.date = date;\n  this.priority = priority;\n}\n/* addTodo(project, task) {\n  project.tasks.push(task);\n} */\n\n/*  renderTodo(project, container) {\n   todoCard(project, container);\n } */\n;\n\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/todos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common */ \"./src/components/common.js\");\n/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/render */ \"./src/components/render.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/project */ \"./src/components/project.js\");\n\n\n\n(0,_components_render__WEBPACK_IMPORTED_MODULE_1__.createProject)();\n(0,_components_render__WEBPACK_IMPORTED_MODULE_1__.createTodo)();\nvar firstProject = new _components_project__WEBPACK_IMPORTED_MODULE_2__.default('default');\nfirstProject.renderProject();\nvar projectContainer = document.getElementById('projects');\n(0,_components_render__WEBPACK_IMPORTED_MODULE_1__.displayProjects)(projectContainer);\n(0,_components_common__WEBPACK_IMPORTED_MODULE_0__.populateSelect)();\n\n//# sourceURL=webpack://ToDo-List/./src/index.js?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/* \n(The MIT License)\nCopyright (c) 2014-2021 Halász Ádám <adam@aimform.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, mac, networkInterfaces; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n\n//# sourceURL=webpack://ToDo-List/./node_modules/uniqid/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;