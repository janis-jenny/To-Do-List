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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateSelect\": () => (/* binding */ populateSelect),\n/* harmony export */   \"getValue\": () => (/* binding */ getValue),\n/* harmony export */   \"getIndex\": () => (/* binding */ getIndex),\n/* harmony export */   \"storage\": () => (/* binding */ storage),\n/* harmony export */   \"hideTodoForm\": () => (/* binding */ hideTodoForm),\n/* harmony export */   \"displayTodoForm\": () => (/* binding */ displayTodoForm),\n/* harmony export */   \"cancelButton\": () => (/* binding */ cancelButton)\n/* harmony export */ });\nvar storage = [];\nvar selectElement = document.querySelector('select');\n\nvar populateSelect = function populateSelect() {\n  selectElement.textContent = '';\n  var populate = storage.map(function (project) {\n    var optionElement = \"<option value=\".concat(project.id, \">\").concat(project.name, \"</option>\");\n    selectElement.insertAdjacentHTML('afterbegin', optionElement);\n    return populate;\n  });\n};\n\nvar getValue = function getValue() {\n  var value = selectElement.value;\n  return value;\n};\n\nvar getIndex = function getIndex(id) {\n  return storage.findIndex(function (project) {\n    return project.id === id;\n  });\n};\n\nvar displayTodoForm = function displayTodoForm(element) {\n  return element.classList.remove('d-none');\n};\n\nvar hideTodoForm = function hideTodoForm(element) {\n  return element.classList.add('d-none');\n};\n\nvar cancelButton = function cancelButton(element) {\n  var cancel = document.querySelectorAll('.cancel-button');\n  cancel.forEach(function (btn) {\n    btn.addEventListener('click', function (e) {\n      e.preventDefault();\n      element.classList.add('d-none');\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/common.js?");

/***/ }),

/***/ "./src/components/localStorage.js":
/*!****************************************!*\
  !*** ./src/components/localStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage),\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\n\n\nvar setLocalStorage = function setLocalStorage() {\n  window.localStorage.setItem('todos', JSON.stringify(_common__WEBPACK_IMPORTED_MODULE_0__.storage));\n};\n\nvar getLocalStorage = function getLocalStorage() {\n  var colletion = JSON.parse(window.localStorage.getItem('todos'));\n  console.log('local stprage');\n  console.log(colletion);\n\n  if (colletion) {\n    colletion.forEach(function (el) {\n      _common__WEBPACK_IMPORTED_MODULE_0__.storage.push(el);\n    });\n  }\n};\n\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/localStorage.js?");

/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/components/localStorage.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar uniqid = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n\nvar Project = /*#__PURE__*/function () {\n  function Project(name) {\n    _classCallCheck(this, Project);\n\n    this.name = name;\n    this.tasks = [];\n  }\n\n  _createClass(Project, [{\n    key: \"addProject\",\n    value: function addProject() {\n      _common__WEBPACK_IMPORTED_MODULE_0__.storage.push({\n        id: uniqid(),\n        name: this.name,\n        tasks: this.tasks\n      });\n      (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();\n    }\n  }, {\n    key: \"renderProject\",\n    value: function renderProject() {\n      this.addProject();\n    }\n  }]);\n\n  return Project;\n}();\n\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/project.js?");

/***/ }),

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks),\n/* harmony export */   \"showTaskForm\": () => (/* binding */ showTaskForm),\n/* harmony export */   \"showProjectForm\": () => (/* binding */ showProjectForm)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/components/project.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/components/todos.js\");\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTasks */ \"./src/components/renderTasks.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ \"./src/components/common.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ \"./src/components/localStorage.js\");\n\n\n\n\n\n\nvar uniqid = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n\nvar deleteProject = function deleteProject() {\n  var btnDelete = document.querySelectorAll('.delete-btn');\n  btnDelete.forEach(function (btn) {\n    btn.addEventListener('click', function (e) {\n      e.preventDefault();\n      var projectIndex = (0,_common__WEBPACK_IMPORTED_MODULE_3__.getIndex)(e.target.id);\n      console.log('New Storage is:');\n      console.log(_common__WEBPACK_IMPORTED_MODULE_3__.storage);\n      _common__WEBPACK_IMPORTED_MODULE_3__.storage.splice(+projectIndex, 1);\n      (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)();\n      var projectsContainer = document.querySelector('.project-name');\n      var todoWrapper = document.querySelector('.todo-wrapper');\n      projectsContainer.remove();\n      todoWrapper.remove();\n    });\n  });\n};\n\nvar deleteTask = function deleteTask(projectIndex) {\n  var btnDelete = document.querySelectorAll('.todo-delete');\n  btnDelete.forEach(function (btn) {\n    btn.addEventListener('click', function (e) {\n      e.preventDefault();\n      var taskId = e.target.id;\n      var taskIndex = projectIndex.tasks.findIndex(function (task) {\n        return task.id === taskId;\n      });\n      console.log('New Tasks is:');\n      console.log(taskId);\n      console.log(taskIndex);\n      projectIndex.tasks.splice(+taskIndex, 1);\n      (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)();\n      var currentTodo = document.querySelector('.todoCard');\n      currentTodo.remove();\n    });\n  });\n};\n\nvar displayProjects = function displayProjects(container) {\n  container.innerHTML = '';\n  _common__WEBPACK_IMPORTED_MODULE_3__.storage.map(function (item) {\n    var h2 = \"<h2 data-id=\".concat(item.id, \" class=\\\"project-name\\\">\").concat(item.name, \"\\n                <span><button id=\").concat(item.id, \" class=\\\"delete-btn\\\">Delete</button></span></h2>\");\n    container.insertAdjacentHTML('afterbegin', h2);\n    return h2;\n  });\n  deleteProject();\n};\n\nvar displayTasks = function displayTasks() {\n  var todoRender = document.querySelectorAll('.project-name');\n  todoRender.forEach(function (btn) {\n    btn.addEventListener('click', function (e) {\n      e.preventDefault();\n      var projectId = e.target.dataset.id;\n      var projectIndex = (0,_common__WEBPACK_IMPORTED_MODULE_3__.getIndex)(projectId);\n      var project = _common__WEBPACK_IMPORTED_MODULE_3__.storage[projectIndex];\n      var taskContainer = document.querySelector('#todo-list-container');\n      taskContainer.dataset.id = projectId;\n      taskContainer.innerHTML = '';\n      var todoWrapper = document.createElement('div');\n      todoWrapper.classList.add('todo-wrapper');\n      taskContainer.append(todoWrapper);\n      (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__.todoCard)(project, todoWrapper);\n      var todoForm = document.querySelector('.todos-form-container');\n      (0,_common__WEBPACK_IMPORTED_MODULE_3__.cancelButton)(todoForm);\n      deleteTask(project);\n    });\n  });\n};\n\nvar createProject = function createProject() {\n  var newProject = document.querySelector('#new-project');\n  newProject.addEventListener('click', function (e) {\n    e.preventDefault();\n    var nameInput = document.querySelector('.project_name').value;\n    var newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.default(nameInput);\n    newProject.renderProject();\n    (0,_common__WEBPACK_IMPORTED_MODULE_3__.populateSelect)();\n    var projectsContainer = document.getElementById('projects');\n    displayProjects(projectsContainer);\n    var projectForm = document.querySelector('.project-form');\n    (0,_common__WEBPACK_IMPORTED_MODULE_3__.hideTodoForm)(projectForm);\n  });\n};\n\nvar createTodo = function createTodo() {\n  var btnTodo = document.querySelectorAll('.create-button');\n  btnTodo.forEach(function (btn) {\n    btn.addEventListener('click', function (e) {\n      e.preventDefault();\n      var projectId = (0,_common__WEBPACK_IMPORTED_MODULE_3__.getValue)();\n      var projectIndex = (0,_common__WEBPACK_IMPORTED_MODULE_3__.getIndex)(projectId);\n      var project = _common__WEBPACK_IMPORTED_MODULE_3__.storage[projectIndex];\n      var id = uniqid();\n      var newTitle = document.querySelector('#title').value;\n      var newDescp = document.querySelector('#description').value;\n      var newDate = document.querySelector('#date').value;\n      var newPriority = document.querySelector('#priority-list').value;\n      var newTodo = new _todos__WEBPACK_IMPORTED_MODULE_1__.default(id, newTitle, newDescp, newDate, newPriority);\n      console.log('hereeee');\n      console.log(newTodo);\n      (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__.addTodo)(project, {\n        id: id,\n        title: newTitle,\n        description: newDescp,\n        date: newDate,\n        priority: newPriority\n      });\n      displayTasks();\n      var todoForm = document.querySelector('.todos-form-container');\n      (0,_common__WEBPACK_IMPORTED_MODULE_3__.hideTodoForm)(todoForm);\n    });\n  });\n};\n\nvar showTaskForm = function showTaskForm() {\n  var todoForm = document.querySelector('.todos-form-container');\n  var addTask = document.querySelector('.add-task-btn');\n  addTask.addEventListener('click', function (e) {\n    e.preventDefault();\n    (0,_common__WEBPACK_IMPORTED_MODULE_3__.displayTodoForm)(todoForm);\n  });\n  (0,_common__WEBPACK_IMPORTED_MODULE_3__.cancelButton)(todoForm);\n};\n\nvar showProjectForm = function showProjectForm() {\n  var projectForm = document.querySelector('.project-form');\n  var addProject = document.querySelector('#create-project');\n  addProject.addEventListener('click', function (e) {\n    e.preventDefault();\n    (0,_common__WEBPACK_IMPORTED_MODULE_3__.displayTodoForm)(projectForm);\n  });\n  (0,_common__WEBPACK_IMPORTED_MODULE_3__.cancelButton)(projectForm);\n};\n/* window.addEventListener('DOMContentLoaded', () => {\n  getLocalStorage();\n}); */\n\n\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/render.js?");

/***/ }),

/***/ "./src/components/renderTasks.js":
/*!***************************************!*\
  !*** ./src/components/renderTasks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"todoCard\": () => (/* binding */ todoCard)\n/* harmony export */ });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/components/localStorage.js\");\n\n\nvar addTodo = function addTodo(project, task) {\n  /*   console.log('AQUIIII');\n    console.log(project); */\n  project.tasks.push(task);\n  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\n};\n\nvar todoCard = function todoCard(project, container) {\n  var contTodo = project.tasks.map(function (item) {\n    return \"<div class=\\\"todoCard\\\" id=\\\"container-\".concat(item.id, \"\\\">\\n                                              <h5>\").concat(item.title, \"</h5>\\n                                              <p>\").concat(item.description, \"</p>\\n                                              <span>\").concat(item.date, \"</span>\\n                                              <span>\").concat(item.priority, \"</span>\\n                                              <div><button class=\\\"todo-delete\\\" id=\\\"\").concat(item.id, \"\\\">Delete</button></div>\\n                                              <div><button class=\\\"todo-edit\\\" id=\\\"edit-\").concat(item.id, \"\\\">Edit</button></div>\\n                                              </div>\");\n  });\n  container.insertAdjacentHTML('afterbegin', contTodo);\n};\n\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/renderTasks.js?");

/***/ }),

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todos)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Todos = function Todos(id, title, description, date, priority) {\n  _classCallCheck(this, Todos);\n\n  this.id = id;\n  this.title = title;\n  this.description = description;\n  this.date = date;\n  this.priority = priority;\n};\n\n\n\n//# sourceURL=webpack://ToDo-List/./src/components/todos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common */ \"./src/components/common.js\");\n/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/render */ \"./src/components/render.js\");\n/* harmony import */ var _css_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/stylesheet.css */ \"./src/css/stylesheet.css\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/project */ \"./src/components/project.js\");\n/* harmony import */ var _components_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/localStorage */ \"./src/components/localStorage.js\");\n\n\n\n\n\nvar projectContainer = document.getElementById('projects');\n(0,_components_render__WEBPACK_IMPORTED_MODULE_1__.createProject)();\n(0,_components_render__WEBPACK_IMPORTED_MODULE_1__.createTodo)();\n(0,_components_render__WEBPACK_IMPORTED_MODULE_1__.displayProjects)(projectContainer);\n(0,_components_common__WEBPACK_IMPORTED_MODULE_0__.populateSelect)();\n(0,_components_render__WEBPACK_IMPORTED_MODULE_1__.displayTasks)();\n(0,_components_render__WEBPACK_IMPORTED_MODULE_1__.showTaskForm)();\n(0,_components_render__WEBPACK_IMPORTED_MODULE_1__.showProjectForm)();\nwindow.addEventListener('DOMContentLoaded', function () {\n  // solo se ejecuta una vez\n  projectContainer.innerText = '';\n  (0,_components_localStorage__WEBPACK_IMPORTED_MODULE_4__.getLocalStorage)();\n\n  if (_components_common__WEBPACK_IMPORTED_MODULE_0__.storage.length === 0) {\n    var firstProject = new _components_project__WEBPACK_IMPORTED_MODULE_3__.default('default');\n    firstProject.renderProject();\n    (0,_components_render__WEBPACK_IMPORTED_MODULE_1__.displayProjects)(projectContainer);\n  } else {\n    (0,_components_render__WEBPACK_IMPORTED_MODULE_1__.displayProjects)(projectContainer);\n  }\n});\n\n//# sourceURL=webpack://ToDo-List/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/stylesheet.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/stylesheet.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  outline: none;\\r\\n  font-family: 'Fredoka One', sans-serif;\\r\\n}\\r\\n\\r\\n#new-form {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: block;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ToDo-List/./src/css/stylesheet.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ToDo-List/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/stylesheet.css":
/*!********************************!*\
  !*** ./src/css/stylesheet.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./stylesheet.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/stylesheet.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://ToDo-List/./src/css/stylesheet.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ToDo-List/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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