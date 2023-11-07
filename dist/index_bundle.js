/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Computer = /*#__PURE__*/function () {\n  function Computer() {\n    _classCallCheck(this, Computer);\n    this.turn = false;\n  }\n  _createClass(Computer, [{\n    key: \"computerCheckAttack\",\n    value: function computerCheckAttack(x, y) {\n      if (x < 0 || x > 10 || y < 0 || y > 10) {\n        return;\n      }\n    }\n  }, {\n    key: \"generateRandomNumber\",\n    value: function generateRandomNumber() {\n      var x = Math.floor(Math.random() * 10);\n      var y = Math.floor(Math.random() * 10);\n      return {\n        x: x,\n        y: y\n      };\n    }\n  }, {\n    key: \"checkRepeatHits\",\n    value: function checkRepeatHits(x, y, shotsArray) {\n      var coordinates = [x, y];\n      var hitsRepeat = shotsArray.some(function (coords) {\n        return coords[0] === x && coords[1] === y;\n      });\n      if (hitsRepeat === true) {\n        console.log('you hit this already');\n      } else return coordinates;\n    }\n  }, {\n    key: \"computerSendAttack\",\n    value: function computerSendAttack(x, y) {\n      shotsArray.push([x, y]);\n      this.computerCheckAttack(x, y);\n      this.checkRepeatHits(x, y, shotsArray);\n      var computerAttack = this.board.board[x][y];\n    }\n  }]);\n  return Computer;\n}();\nvar shotsArray = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Computer);\n\n//# sourceURL=webpack://battleship/./src/computer.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard),\n/* harmony export */   renderComputerBoard: () => (/* binding */ renderComputerBoard),\n/* harmony export */   renderComputerShips: () => (/* binding */ renderComputerShips),\n/* harmony export */   renderPlayerShips: () => (/* binding */ renderPlayerShips)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\n//console.log(computerGameboard, 'this is game')\n\nfunction renderBoard() {\n  //create rows\n  //cells for each row\n  //they need unique identifiers, classes, target ids so they can be selected\n  var boardContainer = document.querySelector('.boardcontainer');\n  for (var i = 0; i < 10; i++) {\n    var row = document.createElement('div');\n    row.classList.add('row');\n    row.id = \"row-\".concat(i);\n    boardContainer.appendChild(row);\n    for (var j = 0; j < 10; j++) {\n      var cell = document.createElement('div');\n      cell.classList.add('cell');\n      cell.id = \"cell-\".concat(i, \"-\").concat(j);\n      row.appendChild(cell);\n    }\n  }\n}\nfunction renderComputerBoard() {\n  var boardContainer = document.querySelector('.computerboardcontainer');\n  for (var i = 0; i < 10; i++) {\n    var row = document.createElement('div');\n    row.classList.add('computerrow');\n    row.id = \"computerrow-\".concat(i);\n    boardContainer.appendChild(row);\n    for (var j = 0; j < 10; j++) {\n      var cell = document.createElement('div');\n      cell.classList.add('computercell');\n      cell.id = \"computercell-\".concat(i, \"-\").concat(j);\n      row.appendChild(cell);\n    }\n  }\n}\nfunction renderPlayerShips() {\n  _ship_js__WEBPACK_IMPORTED_MODULE_0__.playerShipsArray.forEach(function (ship) {\n    var x = ship.x;\n    var y = ship.y;\n    var length = ship.length;\n    var orientation = ship.orientation;\n    for (var i = 0; i < length; i++) {\n      var shipElement = document.createElement('div');\n      shipElement.classList.add('ship');\n      shipElement.id = \"ship-\".concat(x, \"-\").concat(y, \"-\").concat(i);\n\n      // Calculate the position based on orientation\n      if (orientation === 'horizontal') {\n        //place ships in cells\n        var cell = document.getElementById(\"cell-\".concat(x, \"-\").concat(y + i));\n        if (cell) {\n          cell.appendChild(shipElement);\n        } else {\n          console.log(\"Cell-\".concat(x, \"-\").concat(y, \" doesn't exist or is already filled\"));\n        }\n      } else if (orientation === 'vertical') {\n        var _cell = document.getElementById(\"cell-\".concat(x + i, \"-\").concat(y));\n        if (_cell) {\n          _cell.appendChild(shipElement);\n        } else if (_cell === false) {\n          return;\n        }\n      }\n    }\n  });\n}\nfunction renderComputerShips() {\n  _ship_js__WEBPACK_IMPORTED_MODULE_0__.computerShipsArray.forEach(function (ship) {\n    var x = ship.x;\n    var y = ship.y;\n    var length = ship.length;\n    var orientation = ship.orientation;\n    for (var i = 0; i < length; i++) {\n      var shipElement = document.createElement('div');\n      shipElement.classList.add('computership');\n      shipElement.id = \"computership-\".concat(x, \"-\").concat(y, \"-\").concat(i);\n\n      // Calculate the position based on orientation\n      if (orientation === 'horizontal') {\n        //place ships in cells\n        var cell = document.getElementById(\"computercell-\".concat(x, \"-\").concat(y + i));\n        if (cell) {\n          cell.appendChild(shipElement);\n        } else {\n          console.log(\"ComputerCell-\".concat(x, \"-\").concat(y, \" doesn't exist or is already filled\"));\n        }\n      } else if (orientation === 'vertical') {\n        var _cell2 = document.getElementById(\"computercell-\".concat(x + i, \"-\").concat(y));\n        if (_cell2) {\n          _cell2.appendChild(shipElement);\n        } else if (_cell2 === false) {\n          return;\n        }\n      }\n    }\n  });\n}\n\n//render hits, check each cell \n//need cell coordinates\n//need attack coordinates ( i have a shots array?)\n//need to see if they match\n//if they match change style of square\n\n//cell coords, const getelementbyid computercellxy or queryselectorall for classname\n//can i get results from shots array in here...\n\n//currently trying to import computer gameboard so i can manipulate it individually\n\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   game: () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computer.js */ \"./src/computer.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/*The game loop should set up a new game by creating Players \nand Gameboards. For now just\n populate each Gameboard with predetermined coordinates.\n You can implement a system for allowing players to place their ships later.*/\n\n\n\n\n\n\nfunction game() {\n  //create the players\n  var player = new _player_js__WEBPACK_IMPORTED_MODULE_4__.Player('jon');\n  var computer = new _computer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n  //create the ships\n  var playerShips = [new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3, 0, false, 1, 3, 'horizontal'), new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4, 0, false, 5, 8, 'vertical'), new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3, 0, false, 3, 4, 'horizontal')];\n  var computerShips = [new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3, 0, false, 1, 3, 'horizontal'), new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4, 0, false, 2, 4, 'horizontal'), new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3, 0, false, 5, 9, 'vertical')];\n\n  //place ships on the board\n  _ship_js__WEBPACK_IMPORTED_MODULE_2__.playerShipsArray.push.apply(_ship_js__WEBPACK_IMPORTED_MODULE_2__.playerShipsArray, playerShips);\n  _ship_js__WEBPACK_IMPORTED_MODULE_2__.computerShipsArray.push.apply(_ship_js__WEBPACK_IMPORTED_MODULE_2__.computerShipsArray, computerShips);\n\n  //create the gameboards for the players and place ships on the board\n  var playerGameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.gameBoard();\n  playerGameboard.placeShips(playerShips);\n  var computerGameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.gameBoard();\n  computerGameboard.placeShips(computerShips);\n  console.log(computerGameboard.hitShots, 'this is computerboard outside attackscope');\n\n  //render the board and ships onto the DOM\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderBoard)();\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderComputerBoard)();\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderPlayerShips)();\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderComputerShips)();\n\n  //begin the game\n  player.sendAttack();\n  player.setAttackHandler(function (x, y) {\n    computerGameboard.receiveAttack(computerShips, x, y);\n    for (var i = 0; i < computerShips.length; i++) {}\n  });\n}\ngame();\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameBoard: () => (/* binding */ gameBoard)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar gameBoard = /*#__PURE__*/function () {\n  function gameBoard() {\n    _classCallCheck(this, gameBoard);\n    this.board = this.createBoard();\n    this.missedAttacks = [];\n    this.hitShots = [];\n  }\n  _createClass(gameBoard, [{\n    key: \"createBoard\",\n    value: function createBoard() {\n      var board = [];\n      var rows = 10;\n      var columns = 10;\n      for (var x = 0; x < rows; x++) {\n        board[x] = [];\n        for (var y = 0; y < columns; y++) {\n          board[x][y] = '.';\n        }\n      }\n      return board;\n    }\n  }, {\n    key: \"placeShips\",\n    value: function placeShips(ships) {\n      var _this = this;\n      ships.forEach(function (ship) {\n        var x = ship.x,\n          y = ship.y,\n          orientation = ship.orientation;\n        if (orientation === 'horizontal') {\n          for (var i = 0; i < ship.length; i++) {\n            _this.board[ship.x][ship.y + i] = ship;\n          }\n        } else if (orientation === 'vertical') {\n          for (var _i = 0; _i < ship.length; _i++) {\n            _this.board[ship.x + _i][ship.y] = ship;\n          }\n        }\n      });\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(ships, x, y) {\n      var _this2 = this;\n      var isHit = false;\n      ships.forEach(function (ship) {\n        for (var i = 0; i < ship.length; i++) {\n          if (ship.orientation === 'horizontal' && ship.x == x && ship.y + i == y) {\n            // Hit on a horizontal ship\n            ship.shipWasHit();\n            ship.shipWasSunk(ship);\n            isHit = true;\n            _this2.hitShots.push(x, y);\n            console.log(_this2.hitShots, 'this is hit shots');\n            return _this2.hitShots;\n          } else if (ship.orientation === 'vertical' && ship.x + i == x && ship.y == y) {\n            // Hit on a vertical ship\n            ship.shipWasHit();\n            ship.shipWasSunk(ship);\n            isHit = true;\n            _this2.hitShots.push(x, y);\n            console.log(_this2.hitShots, 'this is hit shots');\n            return _this2.hitShots;\n          }\n        }\n      });\n      if (!isHit) {\n        // If there was no hit, record the miss\n        this.missedAttacks.push(x, y);\n        console.log(this.missedAttacks, 'this is missed shots');\n        return this.missedAttacks;\n      }\n    }\n  }, {\n    key: \"allShipsSunk\",\n    value: function allShipsSunk(ships) {\n      var allShipsSunk = false;\n      var shipsSunk = ships.filter(function (ship) {\n        return ship.shipWasSunk() === true;\n      });\n      if (shipsSunk.length !== ships.length) {\n        allShipsSunk = false;\n        return allShipsSunk;\n      } else if (shipsSunk.length === ships.length) {\n        allShipsSunk = true;\n        return allShipsSunk;\n      }\n    }\n  }]);\n  return gameBoard;\n}();\nvar missedShotsArray = [];\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer.js */ \"./src/computer.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Player = /*#__PURE__*/function () {\n  function Player(name) {\n    _classCallCheck(this, Player);\n    this.name = name;\n    this.turn = true;\n    this.handleAttack = function () {\n      x, y;\n    }; // Define handleAttack as a callback property\n  }\n  _createClass(Player, [{\n    key: \"setAttackHandler\",\n    value: function setAttackHandler(coords) {\n      this.handleAttack = coords; // Set the handleAttack callback\n    }\n  }, {\n    key: \"checkAttack\",\n    value: function checkAttack(x, y) {\n      if (x < 0 || x > 10 || y < 0 || y > 10) {\n        return; // Invalid attack, outside the 10x10 grid\n      }\n    }\n  }, {\n    key: \"sendAttack\",\n    value: function sendAttack() {\n      var _this = this;\n      var cells = document.querySelectorAll('.computercell');\n      cells.forEach(function (cell) {\n        cell.addEventListener('click', function () {\n          var shipElement = cell.querySelector('.computership');\n          if (shipElement) {\n            shipElement.style.backgroundColor = 'blue';\n          }\n          var attack = cell.id;\n          var strSplit = attack.split('-');\n          var x = strSplit[1];\n          var y = strSplit[2];\n          _this.handleAttack(x, y);\n        });\n      });\n    }\n  }]);\n  return Player;\n}();\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerShipsArray: () => (/* binding */ computerShipsArray),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   playerShipsArray: () => (/* binding */ playerShipsArray)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Ship = /*#__PURE__*/function () {\n  function Ship(length, numberOfHits, isSunk, x, y, orientation) {\n    _classCallCheck(this, Ship);\n    this.length = length;\n    this.numberOfHits = numberOfHits;\n    this.isSunk = isSunk;\n    this.x = x;\n    this.y = y;\n    this.orientation = orientation;\n  }\n  _createClass(Ship, [{\n    key: \"shipWasHit\",\n    value: function shipWasHit() {\n      // if ship was hit\n      this.numberOfHits++;\n      console.log(this.numberOfHits, 'this is the # of hits');\n      return this.numberOfHits;\n    }\n  }, {\n    key: \"shipWasSunk\",\n    value: function shipWasSunk() {\n      if (this.numberOfHits === this.length) {\n        console.log(Ship, 'this ship is sunk');\n        this.isSunk = true;\n      } else {\n        console.log(Ship, 'this ship is not sunk');\n        this.isSunk = false;\n      }\n      return this.isSunk;\n    }\n  }]);\n  return Ship;\n}();\nvar playerShipsArray = [];\nvar computerShipsArray = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background: #0b043c;\n}\n\n.title {\n    color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.playerboardname {\n    display: flex;\n    color: white;\n    justify-content: center;\n}\n\n.gridcontainer {\n    display: grid;\n    justify-content: center;\n}\n\n.flexcontainer {\n    display: flex;\n    justify-content: center;\n    gap: 5vw;\n}\n\n.boardcontainer {\n    border: 2px solid;\n    border-image-slice: 1;\n    border-image-source: linear-gradient(-45deg, #00d9ff, #fff);\n    box-sizing: content-box;\n}\n\n.computerboardname {\n    display: flex;\n    color: white;\n    justify-content: center;\n}\n\n.computergridcontainer {\n    display: grid;\n    justify-content: center;\n}\n\n.computerboardcontainer {\n    border: 2px solid;\n    border-image-slice: 1;\n    border-image-source: linear-gradient(-45deg, #00d9ff, #fff);\n    box-sizing: content-box;\n}\n\n.row {\n    display: flex; /* Apply grid display to rows */\n    grid-template-columns: repeat(11, 1fr);\n    border: 1px solid black;\n}\n\n.cell {\n    height: 2vw;\n    width: 2vw;\n    display: inline-block; /* Use inline-block for cells */\n    border: 1px solid gray;\n}\n\n.computerrow {\n    display: flex; /* Apply grid display to rows */\n    grid-template-columns: repeat(11, 1fr);\n    border: 1px solid black;\n}\n\n.computercell {\n    background-color: #0b043c;\n    height: 2vw;\n    width: 2vw;\n    display: inline-block; /* Use inline-block for cells */\n    border: 1px solid gray;\n}\n\n.ship {\n    width: 2vw; /* Make the ship as wide as the cell */\n    height: 2vw; /* Make the ship as tall as the cell */\n    background-color: red; /* Example background color for ships */\n    display: inline-block;\n}\n\n.computership {\n    width: 2vw; /* Make the ship as wide as the cell */\n    height: 2vw; /* Make the ship as tall as the cell */\n    background-color: red; /* Example background color for ships */\n    display: inline-block;\n}\n\n#attack {\n    background-color: blue;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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