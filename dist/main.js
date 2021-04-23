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

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/* \n(The MIT License)\nCopyright (c) 2014-2021 Halász Ádám <adam@aimform.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, mac, networkInterfaces; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n\n//# sourceURL=webpack://ToDo-List/./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/components/common.js":
/*!**********************************!*\
  !*** ./src/components/common.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateSelect\": () => (/* binding */ populateSelect),\n/* harmony export */   \"getValue\": () => (/* binding */ getValue),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n\r\nconst storage = [];\r\n\r\nconst selectElement = document.querySelector('select');\r\n\r\nconst populateSelect = () => {\r\n  selectElement.textContent = '';\r\n  storage.map((project) => {\r\n    const optionElement = `<option value=${project.id}>${project.name}</option>`;\r\n    selectElement.insertAdjacentHTML('afterbegin', optionElement);\r\n  });\r\n}\r\n\r\nconst getValue = () => {\r\n  const value = selectElement.value;\r\n  return value;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/common.js?");

/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\n\r\nvar uniqid = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this.name = name; \r\n    this.container = document.querySelector('.render-projects');\r\n    this.tasks = [];\r\n  }\r\n\r\n  addProject() {\r\n    _common__WEBPACK_IMPORTED_MODULE_0__.storage.push({\r\n      id: uniqid(),\r\n      name: this.name,\r\n      tasks: this.tasks,\r\n    })\r\n  }\r\n\r\n  renderProject() {\r\n    this.container.textContent = '';\r\n    this.addProject();\r\n    const contPj = _common__WEBPACK_IMPORTED_MODULE_0__.storage.map(item => `<h2>${item.name}</h2>\r\n                                       `);\r\n    this.container.insertAdjacentHTML('afterbegin', contPj);\r\n    console.log(_common__WEBPACK_IMPORTED_MODULE_0__.storage);\r\n  }\r\n}\r\n// <button class=\"todo-btn\">Create Task</button> \n\n//# sourceURL=webpack://ToDo-List/./src/components/project.js?");

/***/ }),

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/components/project.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/components/todos.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createProject() {\r\n  const newProject = document.querySelector('#new-project');\r\n  newProject.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    const nameInput = document.querySelector('.project_name').value;\r\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.default(nameInput);\r\n    newProject.renderProject();\r\n    (0,_common__WEBPACK_IMPORTED_MODULE_2__.populateSelect)();\r\n  });\r\n}\r\n\r\nfunction createTodo() {\r\n  const btnTodo = document.querySelectorAll('.create-button');\r\n  btnTodo.forEach(btn => {\r\n    btn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      const projectId = (0,_common__WEBPACK_IMPORTED_MODULE_2__.getValue)();\r\n      const projectIndex = _common__WEBPACK_IMPORTED_MODULE_2__.storage.findIndex(\r\n        (item) => item.id === projectId);\r\n      const project = _common__WEBPACK_IMPORTED_MODULE_2__.storage[projectIndex];\r\n      const newTitle = document.querySelector('#title').value;\r\n      const newDescp = document.querySelector('#description').value;\r\n      const newTodo = new _todos__WEBPACK_IMPORTED_MODULE_1__.default(newTitle, newDescp);\r\n      newTodo.addTodo(project, { title: newTitle, description: newDescp });\r\n      newTodo.renderTodo(project);\r\n    })\r\n  })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/render.js?");

/***/ }),

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todos)\n/* harmony export */ });\n\r\nclass Todos {\r\n  constructor(title, description, date) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.date = date;\r\n    this.todoList = document.getElementById('todo-list-container');\r\n  }\r\n\r\n  addTodo(project, task) {\r\n    project.tasks.push(task);\r\n  }\r\n\r\n  renderTodo(project) {\r\n    this.todoList.textContent = '';\r\n    const contTodo = project.tasks.map(item => `<ul class=\"todoCard\">\r\n                                                <li>${item.title}</li>\r\n                                                <li>${item.description}</li>\r\n                                                <li><button class=\"todo-delete\">Delete</button></li>\r\n                                                <li><button class=\"todo-edit\">Edit</button></li>\r\n                                                </ul>`);\r\n    this.todoList.insertAdjacentHTML('afterbegin', contTodo);\r\n    console.log(project)\r\n  }\r\n}\n\n//# sourceURL=webpack://ToDo-List/./src/components/todos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/render */ \"./src/components/render.js\");\n\r\n\r\n(0,_components_render__WEBPACK_IMPORTED_MODULE_0__.createProject)();\r\n(0,_components_render__WEBPACK_IMPORTED_MODULE_0__.createTodo)();\r\n\n\n//# sourceURL=webpack://ToDo-List/./src/index.js?");

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