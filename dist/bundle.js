/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Computer = /*#__PURE__*/function () {
  function Computer(computer) {
    _classCallCheck(this, Computer);
    this.computer = computer;
  }

  /*createComputerGameboard() {
      const computerGameboard = new gameBoard(); //create gameboard using gameboard class
      computerGameboard.placeShips(shipsArray); //place ships on computer gameboard
      console.log(computerGameboard, 'this is computerboard');
  }*/
  _createClass(Computer, [{
    key: "computerCheckAttack",
    value: function computerCheckAttack(x, y) {
      if (x < 0 || x > 10 || y < 0 || y > 10) {
        return; // Invalid attack, outside the 10x10 grid
      }
    }
  }, {
    key: "generateRandomNumber",
    value: function generateRandomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }
  }, {
    key: "checkRepeatHits",
    value: function checkRepeatHits(x, y, shotsArray) {
      var coordinates = [x, y];
      var hitsRepeat = shotsArray.some(function (coords) {
        return coords[0] === x && coords[1] === y;
      });
      console.log(coordinates, 'these are the coordinates');
      console.log(shotsArray, 'these are the shots array');
      console.log(hitsRepeat, 'this is hits repeat');
    }
  }, {
    key: "computerSendAttack",
    value: function computerSendAttack(x, y) {
      shotsArray.push([x, y]);
      this.computerCheckAttack(x, y); // Provide x and y as arguments
      this.checkRepeatHits(x, y, shotsArray); // Pass shotsArray as an argument
      var computerAttack = _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.gameboard1.board[x][y];
    }
  }]);
  return Computer;
}();
var shotsArray = [];
var computer1 = new Computer();
computer1.computerSendAttack(1, 2);

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderBoard: () => (/* binding */ renderBoard)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");

function renderBoard() {
  //create rows
  //cells for each row
  //they need unique identifiers, classes, target ids so they can be selected
  var boardContainer = document.querySelector('.boardcontainer');
  for (var i = 0; i < 10; i++) {
    // Change the loop limit to 10 for a 10x10 board.
    var row = document.createElement('div');
    row.classList.add('row');
    row.id = "row-".concat(i);
    boardContainer.appendChild(row); // Append the row to the board container.

    for (var j = 0; j < 10; j++) {
      // Create cells for each column in the row.
      var cell = document.createElement('div');
      cell.classList.add('cell');
      cell.id = "cell-".concat(i, "-").concat(j); // You can use the cell's id to represent its coordinates.
      row.appendChild(cell); // Append the cell to the row.
    }
  }
}



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameBoard: () => (/* binding */ gameBoard),
/* harmony export */   gameboard1: () => (/* binding */ gameboard1)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var gameBoard = /*#__PURE__*/function () {
  function gameBoard() {
    _classCallCheck(this, gameBoard);
    this.board = this.createBoard();
  }
  _createClass(gameBoard, [{
    key: "createBoard",
    value: function createBoard() {
      var board = [];
      var rows = 10;
      var columns = 10;
      for (var x = 0; x < rows; x++) {
        board[x] = [];
        for (var y = 0; y < columns; y++) {
          board[x][y] = '.';
        }
      }
      return board;
    }
  }, {
    key: "placeShips",
    value: function placeShips(ships) {
      var _this = this;
      ships.forEach(function (ship) {
        _this.board[ship.x][ship.y] = ship;
      });
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(ships, x, y) {
      var _this2 = this;
      var isHit = false;
      ships.forEach(function (ship) {
        if (_this2.board[x][y] === _this2.board[ship.x][ship.y]) {
          ship.shipWasHit();
          ship.shipWasSunk(ship);
          isHit = true;
        }
      });
      if (!isHit) {
        // If there was no hit, record the miss
        missedShotsArray.push(x, y);
        console.log(missedShotsArray, 'this is missed shots');
      }
    }
  }, {
    key: "allShipsSunk",
    value: function allShipsSunk(ships) {
      var allShipsSunk = false;
      var shipsSunk = ships.filter(function (ship) {
        return ship.shipWasSunk() === true;
      });
      if (shipsSunk.length !== ships.length) {
        allShipsSunk = false;
        return allShipsSunk;
      } else if (shipsSunk.length === ships.length) {
        allShipsSunk = true;
        return allShipsSunk;
      }
    }
  }]);
  return gameBoard;
}();
var missedShotsArray = [];
var gameboard1 = new gameBoard();
gameboard1.placeShips(_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipsArray);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   player1: () => (/* binding */ player1)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Player = /*#__PURE__*/function () {
  //attack method
  //
  function Player(player) {
    _classCallCheck(this, Player);
    this.player = player;
  }
  _createClass(Player, [{
    key: "createPlayerGameboard",
    value: function createPlayerGameboard() {
      var playerGameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.gameBoard();
      playerGameboard.placeShips(_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipsArray);
    }
  }, {
    key: "checkAttack",
    value: function checkAttack(x, y) {
      if (x < 0 || x > 10 || y < 0 || y > 10) {
        return; // Invalid attack, outside the 10x10 grid
      }
    }
  }, {
    key: "sendAttack",
    value: function sendAttack(x, y) {
      this.checkAttack(x, y);
      var attack = _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.gameboard1.board[x][y];
    }
  }]);
  return Player;
}();
var player1 = new Player();
player1.createPlayerGameboard();
player1.sendAttack(1, 0);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   shipsArray: () => (/* binding */ shipsArray)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Ship = /*#__PURE__*/function () {
  function Ship(length, numberOfHits, isSunk, x, y) {
    _classCallCheck(this, Ship);
    this.length = length;
    this.numberOfHits = numberOfHits;
    this.isSunk = isSunk;
    this.x = x;
    this.y = y;
  }
  _createClass(Ship, [{
    key: "shipWasHit",
    value: function shipWasHit() {
      // if ship was hit
      this.numberOfHits++;
      console.log(this.numberOfHits, 'this is the # of hits');
      return this.numberOfHits;
    }
  }, {
    key: "shipWasSunk",
    value: function shipWasSunk() {
      if (this.numberOfHits === this.length) {
        console.log(Ship, 'this ship is sunk');
        this.isSunk = true;
      } else {
        console.log(Ship, 'this ship is not sunk');
        this.isSunk = false;
      }
      return this.isSunk;
    }
  }]);
  return Ship;
}();
var shipsArray = [];
var ship1 = new Ship(4, 0, false, 4, 0);
var ship2 = new Ship(4, 0, false, 3, 1);
var ship3 = new Ship(3, 0, false, 5, 9);
shipsArray.push(ship1, ship2, ship3);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.row {
    height: 10px;
    width: 10px;
    border: 1px solid black;
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B","sourcesContent":[".row {\n    height: 10px;\n    width: 10px;\n    border: 1px solid black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer.js */ "./src/computer.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");







(0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderBoard)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0c7QUFDSTtBQUNHO0FBQ0E7QUFDWDtBQUNRO0FBRXBDNUMsb0RBQVcsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXB1dGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoaXBzQXJyYXksIFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmQxLCBnYW1lQm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5cbmNsYXNzIENvbXB1dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wdXRlcikge1xuICAgICAgICB0aGlzLmNvbXB1dGVyID0gY29tcHV0ZXI7XG4gICAgfVxuXG4gICAgLypjcmVhdGVDb21wdXRlckdhbWVib2FyZCgpIHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBuZXcgZ2FtZUJvYXJkKCk7IC8vY3JlYXRlIGdhbWVib2FyZCB1c2luZyBnYW1lYm9hcmQgY2xhc3NcbiAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwcyhzaGlwc0FycmF5KTsgLy9wbGFjZSBzaGlwcyBvbiBjb21wdXRlciBnYW1lYm9hcmRcbiAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJHYW1lYm9hcmQsICd0aGlzIGlzIGNvbXB1dGVyYm9hcmQnKTtcbiAgICB9Ki9cblxuICAgIGNvbXB1dGVyQ2hlY2tBdHRhY2soeCwgeSkge1xuICAgICAgICBpZiAoeCA8IDAgfHwgeCA+IDEwIHx8IHkgPCAwIHx8IHkgPiAxMCkge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBJbnZhbGlkIGF0dGFjaywgb3V0c2lkZSB0aGUgMTB4MTAgZ3JpZFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdlbmVyYXRlUmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pOyAvLyBUaGUgbWF4aW11bSBpcyBpbmNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxuICAgICAgfVxuXG4gICAgY2hlY2tSZXBlYXRIaXRzKHgsIHksIHNob3RzQXJyYXkpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbeCwgeV07XG4gICAgICAgIGNvbnN0IGhpdHNSZXBlYXQgPSBzaG90c0FycmF5LnNvbWUoKGNvb3JkcykgPT4gY29vcmRzWzBdID09PSB4ICYmIGNvb3Jkc1sxXSA9PT0geSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzLCAndGhlc2UgYXJlIHRoZSBjb29yZGluYXRlcycpO1xuICAgICAgICBjb25zb2xlLmxvZyhzaG90c0FycmF5LCAndGhlc2UgYXJlIHRoZSBzaG90cyBhcnJheScpO1xuICAgICAgICBjb25zb2xlLmxvZyhoaXRzUmVwZWF0LCAndGhpcyBpcyBoaXRzIHJlcGVhdCcpO1xuICAgICAgfVxuXG4gICAgY29tcHV0ZXJTZW5kQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgc2hvdHNBcnJheS5wdXNoKFt4LCB5XSk7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDaGVja0F0dGFjayh4LCB5KTsgLy8gUHJvdmlkZSB4IGFuZCB5IGFzIGFyZ3VtZW50c1xuICAgICAgICB0aGlzLmNoZWNrUmVwZWF0SGl0cyh4LCB5LCBzaG90c0FycmF5KTsgLy8gUGFzcyBzaG90c0FycmF5IGFzIGFuIGFyZ3VtZW50XG4gICAgICAgIGxldCBjb21wdXRlckF0dGFjayA9IGdhbWVib2FyZDEuYm9hcmRbeF1beV07XG4gICAgfVxufVxuY29uc3Qgc2hvdHNBcnJheSA9IFtdXG5jb25zdCBjb21wdXRlcjEgPSBuZXcgQ29tcHV0ZXIoKTtcbmNvbXB1dGVyMS5jb21wdXRlclNlbmRBdHRhY2soMSwgMik7ICIsImltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuXG5mdW5jdGlvbiByZW5kZXJCb2FyZCgpIHtcbiAgICAvL2NyZWF0ZSByb3dzXG4gICAgLy9jZWxscyBmb3IgZWFjaCByb3dcbiAgICAvL3RoZXkgbmVlZCB1bmlxdWUgaWRlbnRpZmllcnMsIGNsYXNzZXMsIHRhcmdldCBpZHMgc28gdGhleSBjYW4gYmUgc2VsZWN0ZWRcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZGNvbnRhaW5lcicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vIENoYW5nZSB0aGUgbG9vcCBsaW1pdCB0byAxMCBmb3IgYSAxMHgxMCBib2FyZC5cbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgcm93LmlkID0gYHJvdy0ke2l9YDtcbiAgICAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTsgLy8gQXBwZW5kIHRoZSByb3cgdG8gdGhlIGJvYXJkIGNvbnRhaW5lci5cbiAgICBcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7IC8vIENyZWF0ZSBjZWxscyBmb3IgZWFjaCBjb2x1bW4gaW4gdGhlIHJvdy5cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgY2VsbC5pZCA9IGBjZWxsLSR7aX0tJHtqfWA7IC8vIFlvdSBjYW4gdXNlIHRoZSBjZWxsJ3MgaWQgdG8gcmVwcmVzZW50IGl0cyBjb29yZGluYXRlcy5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTsgLy8gQXBwZW5kIHRoZSBjZWxsIHRvIHRoZSByb3cuXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IHtcbiAgICByZW5kZXJCb2FyZCwgXG59IiwiaW1wb3J0IHsgc2hpcHNBcnJheSwgU2hpcCB9ICBmcm9tICcuL3NoaXAuanMnXG5pbXBvcnQgeyBwbGF5ZXIxLCBQbGF5ZXIgfSBmcm9tICcuL3BsYXllci5qcydcblxuY2xhc3MgZ2FtZUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUJvYXJkKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQm9hcmQoKSB7XG4gICAgbGV0IGJvYXJkID0gW107XG4gICAgbGV0IHJvd3MgPSAxMDtcbiAgICBsZXQgY29sdW1ucyA9IDEwOyBcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgcm93czsgeCsrKSB7XG4gICAgICAgIGJvYXJkW3hdID0gW107XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY29sdW1uczsgeSsrKSB7XG4gICAgICAgICAgICBib2FyZFt4XVt5XSA9ICcuJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwcyhzaGlwcykge1xuICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgdGhpcy5ib2FyZFtzaGlwLnhdW3NoaXAueV0gPSBzaGlwO1xuICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhzaGlwcywgeCwgeSkge1xuICAgICAgICBsZXQgaXNIaXQgPSBmYWxzZTsgXG4gICAgXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldID09PSB0aGlzLmJvYXJkW3NoaXAueF1bc2hpcC55XSkge1xuICAgICAgICAgICAgICAgIHNoaXAuc2hpcFdhc0hpdCgpO1xuICAgICAgICAgICAgICAgIHNoaXAuc2hpcFdhc1N1bmsoc2hpcCk7XG4gICAgICAgICAgICAgICAgaXNIaXQgPSB0cnVlOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGlmICghaXNIaXQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIHdhcyBubyBoaXQsIHJlY29yZCB0aGUgbWlzc1xuICAgICAgICAgICAgbWlzc2VkU2hvdHNBcnJheS5wdXNoKHgsIHkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWlzc2VkU2hvdHNBcnJheSwgJ3RoaXMgaXMgbWlzc2VkIHNob3RzJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsbFNoaXBzU3VuayhzaGlwcykge1xuICAgICAgICBsZXQgYWxsU2hpcHNTdW5rID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaGlwc1N1bmsgPSBzaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAuc2hpcFdhc1N1bmsoKSA9PT0gdHJ1ZSlcblxuICAgICAgICBpZiAoc2hpcHNTdW5rLmxlbmd0aCAhPT0gc2hpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhbGxTaGlwc1N1bmsgPSBmYWxzZTsgXG4gICAgICAgICAgICByZXR1cm4gYWxsU2hpcHNTdW5rXG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcHNTdW5rLmxlbmd0aCA9PT0gc2hpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhbGxTaGlwc1N1bmsgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGFsbFNoaXBzU3Vua1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgbWlzc2VkU2hvdHNBcnJheSA9IFtdO1xuY29uc3QgZ2FtZWJvYXJkMSA9IG5ldyBnYW1lQm9hcmQoKVxuZ2FtZWJvYXJkMS5wbGFjZVNoaXBzKHNoaXBzQXJyYXkpO1xuXG5leHBvcnQgeyBnYW1lYm9hcmQxLCBnYW1lQm9hcmQgfSIsImltcG9ydCB7IHNoaXBzQXJyYXksIFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmQxLCBnYW1lQm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgLy9hdHRhY2sgbWV0aG9kXG4gICAgLy9cbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlUGxheWVyR2FtZWJvYXJkKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBuZXcgZ2FtZUJvYXJkKCk7XG4gICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXBzKHNoaXBzQXJyYXkpO1xuICAgIH1cblxuICAgIGNoZWNrQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPCAwIHx8IHggPiAxMCB8fCB5IDwgMCB8fCB5ID4gMTApIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gSW52YWxpZCBhdHRhY2ssIG91dHNpZGUgdGhlIDEweDEwIGdyaWRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbmRBdHRhY2soeCwgeSkge1xuICAgICAgICB0aGlzLmNoZWNrQXR0YWNrKHgsIHkpO1xuICAgICAgICBsZXQgYXR0YWNrID0gZ2FtZWJvYXJkMS5ib2FyZFt4XVt5XTtcbiAgICB9XG59XG5jb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcigpO1xucGxheWVyMS5jcmVhdGVQbGF5ZXJHYW1lYm9hcmQoKTtcbnBsYXllcjEuc2VuZEF0dGFjaygxLCAwKTtcblxuZXhwb3J0IHsgcGxheWVyMSwgUGxheWVyIH07IiwiY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBudW1iZXJPZkhpdHMsIGlzU3VuaywgeCwgeSkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgPSBudW1iZXJPZkhpdHM7XG4gICAgICAgIHRoaXMuaXNTdW5rID0gaXNTdW5rO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuICAgIHNoaXBXYXNIaXQoKSB7XG4gICAgICAgIC8vIGlmIHNoaXAgd2FzIGhpdFxuICAgICAgICB0aGlzLm51bWJlck9mSGl0cysrXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubnVtYmVyT2ZIaXRzLCAndGhpcyBpcyB0aGUgIyBvZiBoaXRzJyk7XG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlck9mSGl0c1xuICAgIH1cblxuICAgIHNoaXBXYXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5udW1iZXJPZkhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhTaGlwLCAndGhpcyBzaGlwIGlzIHN1bmsnKTtcbiAgICAgICAgICAgIHRoaXMuaXNTdW5rID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFNoaXAsICd0aGlzIHNoaXAgaXMgbm90IHN1bmsnKTtcbiAgICAgICAgICAgIHRoaXMuaXNTdW5rID0gZmFsc2U7XG4gICAgICAgIH0gcmV0dXJuIHRoaXMuaXNTdW5rO1xuICAgIH1cbn1cblxuY29uc3Qgc2hpcHNBcnJheSA9IFtdXG5jb25zdCBzaGlwMSA9IG5ldyBTaGlwKDQsIDAsIGZhbHNlLCA0LCAwKVxuY29uc3Qgc2hpcDIgPSBuZXcgU2hpcCg0LCAwLCBmYWxzZSwgMywgMSlcbmNvbnN0IHNoaXAzID0gbmV3IFNoaXAoMywgMCwgZmFsc2UsIDUsIDkpXG5zaGlwc0FycmF5LnB1c2goc2hpcDEsIHNoaXAyLCBzaGlwMyk7XG5cbmV4cG9ydCB7IHNoaXBzQXJyYXksIFNoaXAgfSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucm93IHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm93IHtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJ1xuaW1wb3J0IENvbXB1dGVyIGZyb20gJy4vY29tcHV0ZXIuanMnXG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCB7IHJlbmRlckJvYXJkIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJ1xuaW1wb3J0IHJlbmRlciBmcm9tICdkb20tc2VyaWFsaXplcic7XG5cbnJlbmRlckJvYXJkKCk7Il0sIm5hbWVzIjpbInNoaXBzQXJyYXkiLCJTaGlwIiwiZ2FtZWJvYXJkMSIsImdhbWVCb2FyZCIsIkNvbXB1dGVyIiwiY29tcHV0ZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXB1dGVyQ2hlY2tBdHRhY2siLCJ4IiwieSIsImdlbmVyYXRlUmFuZG9tTnVtYmVyIiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsImNoZWNrUmVwZWF0SGl0cyIsInNob3RzQXJyYXkiLCJjb29yZGluYXRlcyIsImhpdHNSZXBlYXQiLCJzb21lIiwiY29vcmRzIiwiY29uc29sZSIsImxvZyIsImNvbXB1dGVyU2VuZEF0dGFjayIsInB1c2giLCJjb21wdXRlckF0dGFjayIsImJvYXJkIiwiY29tcHV0ZXIxIiwicmVuZGVyQm9hcmQiLCJib2FyZENvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImkiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJjb25jYXQiLCJhcHBlbmRDaGlsZCIsImoiLCJjZWxsIiwicGxheWVyMSIsIlBsYXllciIsImNyZWF0ZUJvYXJkIiwicm93cyIsImNvbHVtbnMiLCJwbGFjZVNoaXBzIiwic2hpcHMiLCJfdGhpcyIsImZvckVhY2giLCJzaGlwIiwicmVjZWl2ZUF0dGFjayIsIl90aGlzMiIsImlzSGl0Iiwic2hpcFdhc0hpdCIsInNoaXBXYXNTdW5rIiwibWlzc2VkU2hvdHNBcnJheSIsImFsbFNoaXBzU3VuayIsInNoaXBzU3VuayIsImZpbHRlciIsImxlbmd0aCIsInBsYXllciIsImNyZWF0ZVBsYXllckdhbWVib2FyZCIsInBsYXllckdhbWVib2FyZCIsImNoZWNrQXR0YWNrIiwic2VuZEF0dGFjayIsImF0dGFjayIsIm51bWJlck9mSGl0cyIsImlzU3VuayIsInNoaXAxIiwic2hpcDIiLCJzaGlwMyIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=