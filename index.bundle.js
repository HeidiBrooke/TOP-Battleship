/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    /* border: solid 1px rgb(154, 173, 184); */\n    /* border-radius: 20px; */\n } \n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    margin: 20px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#messageBoard {\n    /* padding: 8px; */\n    text-align: center;\n    justify-content: center;\n    width: 460px;\n    height: 40px;\n    font-size: 18px;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n\n.title {\n    text-align: center;\n    justify-content: center;\n    width: 460px;\n    font-size: 24px;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n#container {\n    border: solid 2px #84d4ff;\n    background-color: #deeff8;\n    border-radius: 16px;\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 300px;\n    grid-template-rows: 300px 300px;\n    row-gap: 20px;\n    align-items: end;\n    justify-items: center;\n    \n}\n\n#log {\n    grid-area: 1/2/2/3;\n}\n#mainBoard {\n    grid-area: 2/2/3/3;\n}\n\n#turnBoard {\n    display: none;\n}\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(12, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    background-color: white;\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    background-color: white;\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n.bottomLabel {\n    display: flex;\n    background-color: #84ff94;\n    width: 275px;\n    height: 25px;\n    grid-column: 1/13;\n    grid-row: 12/13;\n    font-size: 18px;\n    font-family: 'Roboto Condensed', sans-serif;\n    padding: 4px;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    background-color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.unitl:hover{\n    background-color:rgb(117, 149, 168);\n}\n\n.empty {\n    background-color: #84ff94;\n    background-color:rgb(130, 164, 184);\n}\n\n\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n\n.outerHold {\n    grid-area: 2/1/3/2;\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-right: 10px;\n    margin-left: 10px;\n    gap: 20px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    /* flex-wrap: wrap; */\n    gap: 16px;\n    /* width: 300px;\n    height: 72px; */\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n    box-shadow: 0 0 10px 2px #84ff94;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n.button {\n    padding: 8px;\n    width: 140px;\n    height: 50px;\n    background-color:rgb(176, 200, 214);\n    text-align: center;\n    font-size: 20px;\n    font-family: 'Roboto Condensed', sans-serif;\n    cursor: pointer;\n}\n#playAgain{\n    display: none;\n}\n\n.lock:hover, #playAgain:hover {\n    transform: scale(105%);\n}\n\n.hidden{\n    display: none;\n}\n\n.horizontal-shake {\n    box-shadow: 0 0 10px 2px #ff8484;\n    animation: horizontal-shaking 0.35s infinite;\n  }\n\n@keyframes horizontal-shaking {\n    0% { transform: translateX(0) }\n    25% { transform: translateX(3px) }\n    50% { transform: translateX(-3px) }\n    75% { transform: translateX(3px) }\n    100% { transform: translateX(0) }\n  }\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACC;IACG,0CAA0C;IAC1C,yBAAyB;CAC5B;;CAEA;IACG,sBAAsB;CACzB;;AAED;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT;;;0CAGsC;IACtC;gCAC4B;IAC5B,yCAAyC;IACzC,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,iDAAiD;AACrD;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,2CAA2C;AAC/C;;;AAGA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,2CAA2C;AAC/C;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,gCAAgC;IAChC,+BAA+B;IAC/B,aAAa;IACb,gBAAgB;IAChB,qBAAqB;;AAEzB;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,2CAA2C;IAC3C,YAAY;IACZ,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,eAAe;;AAEnB;AACA;IACI,0CAA0C;IAC1C,yCAAyC;IACzC,uCAAuC;AAC3C;;AAEA;IACI,wCAAwC;IACxC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,uCAAuC;IACvC,oCAAoC;;AAExC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mCAAmC;IACnC,WAAW;IACX,YAAY;IACZ,eAAe;IACf,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,yBAAyB;IACzB,mCAAmC;AACvC;;;;AAIA;IACI,kCAAkC;IAClC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,mCAAmC;IACnC,mCAAmC;IACnC,+BAA+B;IAC/B,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,wCAAwC;IACxC,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,sBAAsB;IACtB,qBAAqB;IACrB,kBAAkB;IAClB,iBAAiB;IACjB,SAAS;AACb;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;IACrB,SAAS;IACT;mBACe;AACnB;;AAEA;IACI,gCAAgC;IAChC,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;IAClB,eAAe;IACf,2CAA2C;IAC3C,eAAe;AACnB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,4CAA4C;EAC9C;;AAEF;IACI,KAAK,yBAAyB;IAC9B,MAAM,2BAA2B;IACjC,MAAM,4BAA4B;IAClC,MAAM,2BAA2B;IACjC,OAAO,yBAAyB;EAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n *{\n    /* border: solid 1px rgb(154, 173, 184); */\n    /* border-radius: 20px; */\n } \n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    margin: 20px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#messageBoard {\n    /* padding: 8px; */\n    text-align: center;\n    justify-content: center;\n    width: 460px;\n    height: 40px;\n    font-size: 18px;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n\n.title {\n    text-align: center;\n    justify-content: center;\n    width: 460px;\n    font-size: 24px;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n#container {\n    border: solid 2px #84d4ff;\n    background-color: #deeff8;\n    border-radius: 16px;\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 300px;\n    grid-template-rows: 300px 300px;\n    row-gap: 20px;\n    align-items: end;\n    justify-items: center;\n    \n}\n\n#log {\n    grid-area: 1/2/2/3;\n}\n#mainBoard {\n    grid-area: 2/2/3/3;\n}\n\n#turnBoard {\n    display: none;\n}\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(12, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    background-color: white;\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    background-color: white;\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n.bottomLabel {\n    display: flex;\n    background-color: #84ff94;\n    width: 275px;\n    height: 25px;\n    grid-column: 1/13;\n    grid-row: 12/13;\n    font-size: 18px;\n    font-family: 'Roboto Condensed', sans-serif;\n    padding: 4px;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    background-color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.unitl:hover{\n    background-color:rgb(117, 149, 168);\n}\n\n.empty {\n    background-color: #84ff94;\n    background-color:rgb(130, 164, 184);\n}\n\n\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n\n.outerHold {\n    grid-area: 2/1/3/2;\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-right: 10px;\n    margin-left: 10px;\n    gap: 20px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    /* flex-wrap: wrap; */\n    gap: 16px;\n    /* width: 300px;\n    height: 72px; */\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n    box-shadow: 0 0 10px 2px #84ff94;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n.button {\n    padding: 8px;\n    width: 140px;\n    height: 50px;\n    background-color:rgb(176, 200, 214);\n    text-align: center;\n    font-size: 20px;\n    font-family: 'Roboto Condensed', sans-serif;\n    cursor: pointer;\n}\n#playAgain{\n    display: none;\n}\n\n.lock:hover, #playAgain:hover {\n    transform: scale(105%);\n}\n\n.hidden{\n    display: none;\n}\n\n.horizontal-shake {\n    box-shadow: 0 0 10px 2px #ff8484;\n    animation: horizontal-shaking 0.35s infinite;\n  }\n\n@keyframes horizontal-shaking {\n    0% { transform: translateX(0) }\n    25% { transform: translateX(3px) }\n    50% { transform: translateX(-3px) }\n    75% { transform: translateX(3px) }\n    100% { transform: translateX(0) }\n  }\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ }),

/***/ "./src/GUIBoard.js":
/*!*************************!*\
  !*** ./src/GUIBoard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const alphas = "abcdefghij";
const alpha = alphas.split("");

function addHover(ev) {
  ev.target.classList.add("hovered");
}
function unHover(ev) {
  ev.target.classList.remove("hovered");
}

function unstyleTarget(ev) {
  //console.log('im UNtriggered')
  ev.preventDefault();
  ev.target.classList.remove("draghover");
}

function styleTarget(ev) {
  ev.preventDefault();
  //console.log('im triggered')
  ev.target.classList.add("draghover");
}

function getlocation(ev) {
  console.log('aDrop happened!')
  ev.preventDefault();
  unstyleTarget(ev);
  const data = document.getElementsByClassName("dragItem");
  const node = data[0];
  const loc = ev.target.id.split("");
  const col1 = Number(loc[1]) + 2;
  const col2 = col1 + 1;
  const row1 = alpha.indexOf(loc[0]) + 2;
  const row2 = row1 + 1;
  node.style.gridArea = `${row1}/${col1}/${row2}/${col2}`;
  ev.target.parentElement.parentElement.appendChild(node);
}

const drawBoard = (plyrVal, type) => {
  const grid = document.createElement("div");
  grid.classList.add("board");
  if(plyrVal !== null){
    grid.setAttribute('data-player', plyrVal.pNum);
  }
  
  const topLabel = document.createElement("div");
  grid.appendChild(topLabel);
  topLabel.classList.add("topLabel");
  const sideLabel = document.createElement("div");
  grid.appendChild(sideLabel);
  sideLabel.classList.add("sideLabel");
  const innerBoard = document.createElement("div");
  innerBoard.classList.add("innerBoard");
  grid.appendChild(innerBoard);
  const bottomLabel = document.createElement("div");
  bottomLabel.classList.add("bottomLabel");
  grid.appendChild(bottomLabel);

  for (let i = 0; i < 10; ) {
    const div = document.createElement("div");
    div.id = `${i}l`;
    div.classList.add("tlUnit");
    topLabel.appendChild(div);
    div.textContent = `${i + 1}`;
    i += 1;
  }

  for (let i = 0; i < 10; ) {
    const div = document.createElement("div");
    div.id = `${i}l`;
    div.classList.add("slUnit");
    sideLabel.appendChild(div);
    div.textContent = `${alpha[i]}`;
    i += 1;
  }

  for (let i = 0; i < 10; ) {
    for (let j = 0; j < 10; ) {
      const div = document.createElement("div");
      div.classList.add(`unit${type}`);
      innerBoard.appendChild(div);
      div.id = `${alpha[i]}${j}${type}`;
      // div.addEventListener('dragenter', styleTarget);
      if (type === "m") {
        div.addEventListener("dragover", styleTarget);
        div.addEventListener("dragleave", unstyleTarget);
        div.addEventListener("touchmove", styleTarget);
        div.addEventListener("touchleave", unstyleTarget);
        // div.addEventListener("drop", getlocation);
        // div.addEventListener("mouseover", styleTarget);
        // div.addEventListener("mouseleave", unstyleTarget);
        // div.addEventListener("mousemouse", getlocation);
      }
      j += 1;
    }
    i += 1;
  }

  const corner = document.createElement("div");
  grid.appendChild(corner);
  corner.classList.add("corner");

  return grid;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawBoard);


/***/ }),

/***/ "./src/GUIMain.js":
/*!************************!*\
  !*** ./src/GUIMain.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _GUIBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUIBoard */ "./src/GUIBoard.js");
/* harmony import */ var _GUIShip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GUIShip */ "./src/GUIShip.js");
/* harmony import */ var _manualDrag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manualDrag */ "./src/manualDrag.js");
/* harmony import */ var _touchDrag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./touchDrag */ "./src/touchDrag.js");
/* harmony import */ var _GUIRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GUIRender */ "./src/GUIRender.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");









const alphas = "abcdefghij";
const alpha = alphas.split("");


const drawLayout = (player, player2) => {
const container = document.getElementById('container')
const messageBoard = document.getElementById('messageBoard');
const log = (0,_GUIBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(null, 'l');
log.id = 'log';
// const num = player.playerNum;
const mainBoard = (0,_GUIBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(player, 'm');
mainBoard.id = 'mainBoard';
container.appendChild(log);
container.appendChild(mainBoard);
const ships = (0,_GUIShip__WEBPACK_IMPORTED_MODULE_2__["default"])();
const outerHold = document.createElement('div');
outerHold.classList.add('outerHold')
container.appendChild(outerHold)
const shipHolder = document.createElement('div');
shipHolder.classList.add('shipHolder');
outerHold.appendChild(shipHolder);
log.children[3].textContent = 'Enemy Board';
mainBoard.children[3].textContent = 'My Board';

// document.body.appendChild(shipHolder);

const lockShipsDown = () => {
    console.log('locking ships')
    if(player.ships.length !== 5){
        messageBoard.textContent = 'Please place all of you ships on the board!'
        return
    }
    const shipNodes = document.getElementsByClassName('anchor');
    Array.from(shipNodes).forEach(anchor => {
        anchor.firstChild.classList.remove('selected');
        anchor.firstChild.classList.add('hidden');
        anchor.replaceWith(anchor.cloneNode(true));
        anchor.classList.add('hidden');
        
    })
    const lockButton = document.getElementById('lockButton');
    lockButton.classList.remove('lock');
    lockButton.replaceWith(lockButton.cloneNode(true));
    const aShipHolder = document.getElementsByClassName('shipHolder')[0];
    aShipHolder.remove();
    player.updateMatrix();
    player2.updateMatrix();
    (0,_GUIRender__WEBPACK_IMPORTED_MODULE_5__["default"])(player, player2);
}

const lockShips = document.createElement('div');
lockShips.classList.add('button');
lockShips.classList.add('lock');
outerHold.appendChild(lockShips);
// document.body.appendChild(lockShips);
lockShips.textContent = 'LOCK SHIPS';
lockShips.setAttribute('id', 'lockButton');
lockShips.addEventListener('click', lockShipsDown)


ships.forEach(shipEl => {
    const shipHold = document.createElement('div');
    shipHold.classList.add('shipHold')
    shipHold.appendChild(shipEl);
    shipHold.style.width = shipEl.firstChild.style.width;
    shipHolder.appendChild(shipHold);
    (0,_manualDrag__WEBPACK_IMPORTED_MODULE_3__["default"])(shipEl, player);
    (0,_touchDrag__WEBPACK_IMPORTED_MODULE_4__["default"])(shipEl, player)
})
const sub = document.querySelectorAll('[data-name="cruiser"]');
sub[0].setAttribute('data-name', 'submarine');


const playerPlace = (col1, row1, length, rot, aPlayer, name) => {
    // console.log(`beginning rotated? ${rot}`)
    const n = name;
    const row = row1 +1 ;
    const col = alpha[col1];
    const coord = [col, row];
    const len = length;
    const isRotated = rot;
    let dir = 'r';
    if(isRotated === 'true'){
        dir = 'd'
    }
    // console.log(`direction is ${dir}`)
    const valid = aPlayer.placeShip(len,coord,dir,n);
    // console.log(`This was valid? ${valid}`)
    return valid;
}

function rotate(ev){
    if(ev.key === 'r'){
        let valid = true;
        const selected = document.getElementsByClassName('selected')[0].parentElement;
        let currentRotation = selected.style.transform;
        // console.log('rotating');
        if((currentRotation === '')||(currentRotation === 'rotate(0deg)') ){
            currentRotation = 0;
            selected.style.transform = `rotate(90deg)`;
            selected.setAttribute('data-rotated', 'true');
        }
        else{
            currentRotation = currentRotation.split('');
            let newRotation = currentRotation[7] + currentRotation[8];
            newRotation = Number(newRotation);
            newRotation -= 90;
            // console.log(newRotation)
            selected.style.transform = `rotate(${newRotation}deg)`;
            selected.setAttribute('data-rotated', 'false');
        }
        // if parent node is shiphold do, normal, other wise, get start coord
        // build a ship in opposite direction (horizontal or vertical), basically treat as a drop if it's already of the board.
        // if ship is valid overwrite
        
        
        // console.log(selected.parentElement);
        if(selected.parentElement.getAttribute('class') === 'board'){
            const isRotated = selected.dataset.rotated;
            const length = Number(selected.dataset.ship);
                const gArea = selected.style.gridArea.split('/');
                // console.log(gArea);
                const col1 = Number(gArea[0] -2);
                // const colNext = Number(gArea[5]);
                // console.log(col1);
                const row1 = Number(gArea[1] -2);
                // console.log(row1);
                valid = playerPlace(col1, row1, length, isRotated, player, selected.dataset.name) 
        }

        if(!valid) {
        currentRotation = selected.style.transform;
            if((currentRotation === '')||(currentRotation === 'rotate(0deg)') ){
                currentRotation = 0;
                selected.style.transform = `rotate(90deg)`;
                selected.setAttribute('data-rotated', 'true');
            }
            else{
                currentRotation = currentRotation.split('');
                let newRotation = currentRotation[7] + currentRotation[8];
                newRotation = Number(newRotation);
                newRotation -= 90;
                // console.log(newRotation)
                selected.style.transform = `rotate(${newRotation}deg)`;
                selected.setAttribute('data-rotated', 'false');
            }
            // console.log(selected.firstChild)
            selected.firstChild.classList.add('horizontal-shake');
            // console.log('applying shake')
            setTimeout(() => {selected.firstChild.classList.remove('horizontal-shake')}, '500')
        }
    }  
}
document.addEventListener('keydown', rotate)
}

// const miss = document.getElementById('a0l');
// miss.classList.add('miss')

// const hit = document.getElementById('a1l');
// hit.classList.add('hit');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawLayout);

/***/ }),

/***/ "./src/GUIRender.js":
/*!**************************!*\
  !*** ./src/GUIRender.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _GUIBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUIBoard */ "./src/GUIBoard.js");
/* harmony import */ var _GUIShip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GUIShip */ "./src/GUIShip.js");
/* harmony import */ var _manualDrag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manualDrag */ "./src/manualDrag.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








const alphas = "abcdefghij";
const alpha = alphas.split("");

const addStyles = (anNode, player) => {
    const aNode = anNode;
    const x = alpha.indexOf(aNode.id.split('')[0]);
    const y = aNode.id.split('')[1];
    const val = player.rows[x][y];
    if(val === 'M'){
        aNode.classList.add('miss')
    }
    if(val === 'H'){
        aNode.classList.add('hit')
    }
    if(val === 'E'){
        aNode.classList.add('empty')
    }
    else {
        aNode.textContent = val;
    }
}
const addStyles2 = (anNode, player) => {
    const aNode = anNode;
    const x = alpha.indexOf(aNode.id.split('')[0]);
    const y = aNode.id.split('')[1];
    const val = player.rows[x][y];
    if(val === 'M'){
        aNode.classList.add('miss')
    }
    if(val === 'H'){
        aNode.classList.add('hit')
    }
    // if(val === 'E'){
    //     aNode.classList.add('empty')
    // }
    // else {
    //     aNode.textContent = val;
    // }
}
const getPlayer = (player, player2, turn) => {
    if(player.pNum === turn){
        return player;
    }
        return player2;
}
const getOtherPlayer = (player, player2, turn) => {
    if(player.pNum !== turn){
        return player;
    }
        return player2;
}

const checkForWin = (playerUp, playerNext) => {
    if(playerNext.allSunk()){
        // document.getElementById('messageBoard').textContent = `All of ${playerNext.pNum}'s ships are sunk. ${playerUp.pNum} wins!`;
        document.getElementById('messageBoard').textContent = `All of computer's ships are sunk. You win!`;
        const gridUnits = document.getElementsByClassName('unitl');
        const moregridUnits = document.getElementsByClassName('unitm');
        Array.from(gridUnits).forEach(unit => {
            unit.replaceWith(unit.cloneNode(true));
        })  
        Array.from(moregridUnits).forEach(unit => {
            unit.replaceWith(unit.cloneNode(true));
        })
        const playAgain = document.getElementById('playAgain');
        playAgain.style.display = 'block';
        return true;
    }
    return false;
}
const renderWin = (player, player2) => {
const oldContainer = document.getElementById('container');
oldContainer.remove();
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const log = (0,_GUIBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(player2, 'l');
log.id = 'log';
// const num = player.playerNum;
const mainBoard = (0,_GUIBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(player, 'm');
mainBoard.id = 'mainBoard';
container.appendChild(log);
container.appendChild(mainBoard);

const units = document.getElementsByClassName('unitm');
Array.from(units).forEach(unit => {
    addStyles(unit, player);
})
const lunits = document.getElementsByClassName('unitl');
Array.from(lunits).forEach(unit => {
    addStyles2(unit, player2);
})

}

const render = (player, player2) => {    
    document.getElementById('messageBoard').textContent = 'Your turn!';
const playerNum = Number(document.getElementById('turnBoard').textContent);
const oldContainer = document.getElementById('container');
oldContainer.remove();
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const log = (0,_GUIBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(player2, 'l');
log.id = 'log';
// const num = player.playerNum;
const mainBoard = (0,_GUIBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(player, 'm');
mainBoard.id = 'mainBoard';
container.appendChild(log);
container.appendChild(mainBoard);
log.children[3].textContent = 'Enemy Board';
mainBoard.children[3].textContent = 'My Board';
const units = document.getElementsByClassName('unitm');
Array.from(units).forEach(unit => {
    addStyles(unit, player);
})
const lunits = document.getElementsByClassName('unitl');
    Array.from(lunits).forEach(unit => {
        addStyles2(unit, player2);
    })
    const attack = (e) => {
        // console.log('attacking')
        
        const playerNum = Number(document.getElementById('turnBoard').textContent);
        const playerUp = getPlayer(player, player2, playerNum);
        const otherPlayer = getOtherPlayer(player, player2, playerNum);
        const aNode = e.target;
        const x = aNode.id.split('')[0];
        const y = Number(aNode.id.split('')[1]);
        // console.log([x,y])
        const valid = otherPlayer.receiveAttack([x,y]);
        if(!valid){
            console.log('no es valido')
            document.getElementById('messageBoard').textContent = 'Already guesed. Try again.';
            return
        }
        document.getElementById('turnBoard').textContent = otherPlayer.pNum;
        // setTimeout(() => {
        //     render(player, player2)  
        // }, '5000')
        console.log(checkForWin(playerUp, otherPlayer));
        if(!checkForWin(playerUp, otherPlayer)){
            render(player, player2) 
        } 
        else {renderWin(player, player2)}
    }
    const enableUserAttack = () => {
        Array.from(lunits).forEach(unit => {
            unit.addEventListener('mousedown', attack);
            
        })
    }

const attackComp = () => {
        
        // console.log('Computer attacking')
        const playerNum = Number(document.getElementById('turnBoard').textContent);
        const playerUp = getPlayer(player, player2, playerNum);
        const otherPlayer = getOtherPlayer(player, player2, playerNum);
        const x = alphas[Math.floor(Math.random() * 10)];
        const y = Math.floor(Math.random() * 10);
        // console.log([x,y])
        const valid = otherPlayer.receiveAttack([x,y]);
        // console.log(valid);
        if(!valid){
            attackComp()
            
        }
        document.getElementById('turnBoard').textContent = otherPlayer.pNum;
        console.log(checkForWin(playerUp, otherPlayer));
        if(!checkForWin(playerUp, otherPlayer)){
            render(player, player2) 
        }
        else {renderWin(player, player2)}

          
    }



enableUserAttack()


const disableUserAttack = () => {
    const gridUnits = document.getElementsByClassName('unitl');
    // console.log('cloning units to remove event listeners')
    Array.from(gridUnits).forEach(unit => {
        unit.replaceWith(unit.cloneNode(true));
    })
}

if(playerNum === 2){
    document.getElementById('messageBoard').textContent = 'Computer attacking!';
    disableUserAttack();
    setTimeout(() => {
        attackComp() 
    }, '1000')
    ;
}
else{enableUserAttack()}


}






   


// const miss = document.getElementById('a0l');
// miss.classList.add('miss')

// const hit = document.getElementById('a1l');
// hit.classList.add('hit');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/GUIShip.js":
/*!************************!*\
  !*** ./src/GUIShip.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manualDrag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manualDrag */ "./src/manualDrag.js");


const alphas = "abcdefghij";
const alpha = alphas.split("");

const printShips = (shipsArray) => {
    shipsArray.forEach(shipEl => {
      console.log(shipEl.name)
    })
  }
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.classList.add('dragItem');
    const node = ev.target;
    setTimeout (() => {
        node.style.visibility = "hidden";
      }, 1);
  }

  function touchdrag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.classList.add('dragItem');
    const node = ev.target;
    setTimeout (() => {
        node.style.visibility = "hidden";
      }, 1);
  }


function place(ev){
    const node = ev.target;
    ev.target.classList.remove('dragItem');
    setTimeout (() => {
        node.style.visibility = "";
      }, 1);
}

// const playerPlace = (col1, row1, length, rot, player, name) => {
//     const n = name;
//     const col = col1 - 1;
//     const row = alpha[row1 - 2];
//     const coord = [row, col];
//     const len = length;
//     const isRotated = rot;
//     let dir = 'r';
//     if(isRotated){
//         dir = 'd'
//     }
//     const valid = player.placeShip(len,coord,dir,n);
//     return valid;
// }

function select(ev){
    const old = document.getElementsByClassName('selected');
    if(old[0] !== undefined){
        old[0].classList.remove('selected')
    }
    ev.target.classList.add('selected');
}

// function rotate(ev){
//     if(ev.key === 'r'){
//         console.log('rotating');
//         // if parent node is shiphold do, normal, other wise, get start coord
//         // build a ship in opposite direction (horizontal or vertical), basically treat as a drop if it's already of the board.
//         // if ship is valid overwrite
//         const selected = document.getElementsByClassName('selected')[0].parentElement;
//         let currentRotation = selected.style.transform;
//         if((currentRotation === '')||(currentRotation === 'rotate(0deg)') ){
//             currentRotation = 0;
//             selected.style.transform = `rotate(90deg)`;
//             selected.setAttribute('data-rotated', 'true');
//         }
//         else{
//             currentRotation = currentRotation.split('');
//             let newRotation = currentRotation[7] + currentRotation[8];
//             newRotation = Number(newRotation);
//             newRotation -= 90;
//             console.log(newRotation)
//             selected.style.transform = `rotate(${newRotation}deg)`;
//             selected.setAttribute('data-rotated', 'true');
//         }
//         console.log(selected);
//         if(selected.parentElement.getAttribute('class') === 'board'){
//             const isRotated = selected.dataset.rotated;
//             const length = Number(selected.dataset.ship);
//                 const gArea = selected.style.gridArea.split('');
//                 const col1 = Number(gArea[4]) - 2;
//                 console.log(col1);
//                 const row1 = Number(gArea[0]) - 2;
//                 console.log(row1);
//                 const aPlayer = selected.parentElement.dataset.player;
//                 const isValidLoc = playerPlace(col1, row1, length, isRotated, aPlayer, selected.dataset.name) 
//                 if(isValidLoc){
//                         aPlayer.removeShip(selected.dataset.name);
                    
//                     printShips(aPlayer.ships)
//                 }
//         }
//     }  
// }


function dragstart (ev) {
    (0,_manualDrag__WEBPACK_IMPORTED_MODULE_0__["default"])(ev.target)
    };

// document.addEventListener('keydown', rotate)

const nameShip = (l) => {
    if (l === 5){
      return 'carrier';
    }
    if (l === 4){
      return 'battleship';
    }
    if (l === 3){
      return 'cruiser';
    }
    if (l === 2){
      return 'destroyer';
    }
    return 'error'
  }

const drawShip = (len) => {
    const anchor = document.createElement('div');
    anchor.classList.add('anchor');
    anchor.setAttribute('data-ship', len);
    anchor.setAttribute('data-name', nameShip(len));
    const fakeship = document.createElement('div');
    fakeship.classList.add('ship');
    // fakeship.setAttribute('draggable', 'true');
    // fakeship.addEventListener('dragstart', drag);
    // fakeship.addEventListener('dragend', place);
    // fakeship.addEventListener('mousedown', select);
    fakeship.style.width = `${len * 25}px`;
    anchor.appendChild(fakeship)
    // anchor.setAttribute('draggable', 'true');
     anchor.addEventListener('dragstart', drag);
     anchor.addEventListener('touchstart', touchdrag);
     anchor.addEventListener('touchmove', touchdrag);
    // anchor.addEventListener('dragend', place);
     anchor.addEventListener('mousedown', select);
     anchor.addEventListener('touchmove', select)
    return anchor;
}



const drawShips = () => {
    const shipdivs = [];
    shipdivs.push(drawShip(5));
    shipdivs.push(drawShip(4));
    shipdivs.push(drawShip(3));
    shipdivs.push(drawShip(3));
    shipdivs.push(drawShip(2));
    return shipdivs;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawShips);







/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function genRow(l) {
  const array = [];
  let i = 0;
  while (i < l) {
    array.push("E");
    i += 1;
  }
  return array;
}

function generateRows(l) {
  const rows = [];
  let i = 0;
  while (i < l) {
    rows.push(genRow(l));
    i += 1;
  }
  return rows;
}

const gameboard = (l, pval) => {
  const pNum = pval;
  const alphas = "abcdefghij";
  const alpha = alphas.split("");
  const rows = generateRows(l);
  const ships = [];
  const getShips = () => ships;

  const validLength = (len) => {
    let shipType = 0;
    getShips().forEach((aShip) => {
      if (aShip.length === len) {
        shipType += 1;
      }
    });

    if (len === 2) {
      if (shipType > 1) {
        console.log('2 ship already on logged')
        return false;
      }
    }
    if (len === 3) {
      if (shipType > 2) {
        console.log('2 3 ships already on logged')
        return false;
      }
    }
    if (len === 5) {
      if (shipType > 1) {
        console.log('2 3 ships already on logged')
        return false;
      }
      }
    
    if (len === 4) {
      if (shipType > 1) {
        console.log('4 ship already on logged')
        return false;
      }
    }

    return true;
  };

  const match = (coord1, coord2) => {
    if (coord1[0] === coord2[0] && coord1[1] === coord2[1]) {
      return true;
    }
    return false;
  };

  const getShipByName = (name) => {
    ships.forEach(shipEl => {
      if(shipEl.name === name){
        return shipEl;
      }
    })
  }
  const printShips = (shipsArray) => {
    shipsArray.forEach(shipEl => {
      // console.log(shipEl.name)
      // console.log(shipEl.coords)
    })
  }
  const overlaps = (aShip, newShip) => {
    // console.log('do the following overlap?')
    // console.log(aShip.name);
    // console.log(newShip.name);
    // console.log('new ship is LOCATED at:')
    // console.log(newShip.coords)
    if(aShip.length === newShip.length){
      return false;
    }
    let overlap = false;
    aShip.coords.forEach((coord) =>
      newShip.coords.forEach((coordp) => {
        if (match(coordp, coord)) {
          console.log('found overlap')
          console.log(coordp, coord)
          overlap = true;
          
        }
      })
    );

    return overlap;
  };

  const placeShipInMatrix = (aShip) => {
    // console.log(aShip)
    aShip.coords.forEach((coord) => {
      const index = alpha.indexOf(coord[0]);
      // console.log(coord[0])
      rows[index][coord[1]] = ships.indexOf(aShip);
    });
  }
  const updateMatrix = () => {
    ships.forEach(shipEl => {
      placeShipInMatrix(shipEl)
    })
  };

  const removeShip = (name) => {
    let theShip;
    // console.log(`removing a ${name} from`)
    // console.log(ships)
    ships.forEach(shipEl => {
      if(shipEl.name === name){
        theShip = shipEl;
      }
    })
    // console.log(theShip);
    if (theShip !== undefined){
      const index = ships.indexOf(theShip)
      ships.splice(index, 1);
    }
    printShips(ships);
  }

  const currentShipNames = (shipsArr) => {
    const names = [];
    shipsArr.forEach(shipEl => {
      names.push(shipEl.name)
    })
    return names;
  }
  const shipExists = (n) => {
    const names = currentShipNames(ships);
    if(names.includes(n)){
      return true;
    }
    return false;
  }
  

  const placeShip = (len, coord, dir, name, comp) => {
    console.log('placing ship:');
    console.log(name)
    console.log('current ships are:')
    console.log(printShips(ships))
    let goodLength = validLength(len);
    let valid = false;
    //check if ship already exists, if so, remove old ship
    if(!comp){
      if (shipExists(name)) {
        // console.log('removing ship');
        // console.log(name);
        removeShip(name);
      }
    }
    //try making a ship, if it makes one, check if it overlaps, if it does, don't push it. 
      const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(len, coord, dir, name);
      if(newShip !== null){
        valid = true;
        if(ships.length !== 0){
          ships.forEach((aShip) => {
            if (overlaps(aShip, newShip)) {
              valid = false;  
            }
          });
        }
        if(valid === true){
          ships.push(newShip); 
          console.log('ship pushed was:')
          console.log(newShip.name)
          printShips(ships);
        }
      }

      // updateMatrix(newShip);
    
    return valid;
  };

  const receiveAttack = (coord) => {
    // console.log('received attack' + coord[0] + coord[1])
    const index = alpha.indexOf(coord[0]);
    const currentVal = rows[index][coord[1]];
    // console.log(currentVal)
    if (typeof currentVal === "number") {
      rows[index][coord[1]] = "H";
      ships[currentVal].hit(coord);
      return true;
    }
    if (currentVal === "E") {
      // console.log('current val was e')
      rows[index][coord[1]] = "M";
      return true;
    } 
      return false;
    }

  const allSunk = () => {
    let sunk = true;
    // console.log(`sunk is ${sunk}`)
    ships.forEach(aShip => {
      console.log(`${aShip.name} is sunk? ${aShip.sunk}`)
      console.log(`${aShip.name} hitlog is: ${aShip.hitLog}`)
      if (!aShip.isSunk()) {
        sunk = false;
      }
    });
    return sunk;
  };

  const getShipByStart = (coord) => {
    // console.log('getting ship')
    ships.forEach(aShip => {
      if((aShip.coords[0][0]=== coord[0]) && (aShip.coords[0][1]=== coord[1])){
        return aShip;
      }
    })
  }

  return { rows, ships, placeShip, getShips, overlaps, match, receiveAttack, allSunk, removeShip, getShipByStart, getShipByName, pNum, updateMatrix};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);




/***/ }),

/***/ "./src/manualDrag.js":
/*!***************************!*\
  !*** ./src/manualDrag.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const alphas = "abcdefghij";
const alpha = alphas.split("");

const printShips = (shipsArray) => {
  shipsArray.forEach(shipEl => {
    // console.log(shipEl.name)
  })
}

const removeStyle = (previousElem) => {
    const dragleave = new Event("dragleave");
    previousElem.dispatchEvent(dragleave);
    const touchleave = new Event("touchleave");
    previousElem.dispatchEvent(touchleave);
}

const styleNode = (theElem) => {
    const dragover = new Event("dragover");
    theElem.dispatchEvent(dragover);
    const touchover = new Event("touchmove");
    theElem.dispatchEvent(touchover);
        }

const playerPlace = (col1, row1, length, rot, player, name) => {
            const n = name;
            const col = col1 - 2;
            const row = alpha[row1 - 2];
            const coord = [row, col];
            const len = length;
            const isRotated = rot;
            // console.log(isRotated);
            let dir;
            if(isRotated === 'true'){
              
                dir = 'd';
            }
            else{
              dir = 'r';
            }
            // console.log(dir);
            const valid = player.placeShip(len,coord,dir,n);
            return valid;
        }
// const placementCheck = (len, rotated, row1, col1) => {
//     let valid = false;
//     if(rotated){
//         if(len === 2){
//             if (row1 < 11){
//                 valid = true;
//             } 
//         }
//         if(len === 3){
//             if (row1 < 10){
//                 valid = true;
//             } 
//         }
//         if(len === 4){
//             if (row1 < 9){
//                 valid = true;
//             } 
//         }
//         if(len === 5){
//             if (row1 < 8){
//                 valid = true;
//             } 
//         }
//     } 
//     else {
//         if(len === 2){
//             if (col1 < 11){
//                 valid = true;
//             } 
//         }
//         if(len === 3){
//             if (col1 < 10){
//                 valid = true;
//             } 
//         }
//         if(len === 4){
//             if (col1 < 9){
//                 valid = true;
//             } 
//         }
//         if(len === 5){
//             if (col1 < 8){
//                 valid = true;
//             } 
//         }
//     }
//     //console.log(len, rotated, col1, row1, valid);
//     return valid;
// }

const isRotated = (val) => {
    if(val.length !== 0){
        if(val[7] !== '0'){
            return true;
        }
    }
    return false;
}

const pixels2Length = (len) => {
    if(len === '125px'){
        return 5
    }
    if(len === '100px'){
        return 4
    }
    if(len === '75px'){
        return 3
    }
    if(len === '50px'){
        return 2
    }
}

// const allAreas = (arrayOfAnchors) => {
//     const allshipAreas = [null, null, null, null, null];

// }

// const calcArea = (col1, row1, len, rotated) => {
//     let col = col1;
//     let row = row1;
//     const arrayOfTakenElems = [];
//     const arrayOfTakenIDs = [];
//     for(let i = 0; i < len-1;){
//         let id;
//         if(!rotated){
//             row = alpha[row];
//             id = `${row}${col + 1}m`
//         arrayOfTakenIDs.push(id);
//         col += 1;}
//         else{
//             const theRow = alpha[row];
//             id = `${theRow}${col}m`
//         arrayOfTakenIDs.push(id);
//         row += 1;
//         }
//         i+=1;
//     }
//     arrayOfTakenIDs.forEach(id => {
//         const elem = getElementById(id);
//         arrayOfTakenElems.push(elem);
//     })
//     return arrayOfTakenElems;
// }

// const isTaken = (node) => {
//     if(node.children.length !== 0){
//         return true;
//     }
//     return false;
// }

const manualDrag = (node, player) => {
  const board = document.getElementById("mainBoard");
  const ball = node;
  const length = pixels2Length(node.children[0].style.width);
  
//   let index = Array(ball.parentElement.children).indexOf(ball);

   function dragItem (event) {
    ball.classList.add("dragItem");
    // (1) start the process
    const ogParent = ball.parentElement;
    // console.log('OG parent is:')
    // console.log(ogParent)
    let rotated = node.style.transform.split('');
    rotated = isRotated(rotated);
    ball.setAttribute('data-rotated', rotated)
    // console.log(length, rotated)
    // (2) prepare to moving: make absolute and on top by z-index
    ball.style.position = "absolute";
    ball.style.zIndex = 1000;

    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(ball);
    // board.appendChild(ball);
    // ...and put that absolutely positioned ball under the cursor
    let anID;
    let theElem;
    let previousElem;
    // centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
      ball.style.left = `${pageX - ball.offsetWidth / 2}px`;
      ball.style.top = `${pageY - ball.offsetHeight / 2}px`;
      const dropElemList = document.elementsFromPoint(pageX, pageY);

      dropElemList.forEach((elem) => {
        // console.log('classlist')
        // console.log(Array.from(elem.classList))
        if (elem.classList !== undefined) {
          if (elem.classList.contains("unitm")) {
            // console.log(`contains it! return ID: ${elem.id}`);
            anID = elem.id;
            theElem = elem;
            setTimeout(styleNode(theElem), 500)
            
            if (previousElem !== undefined) {
              if (elem.id !== undefined) {
                // console.log(`${previousElem.id} vs. ${elem.id}`);
                if (previousElem !== elem) {
                  removeStyle(previousElem);
                }
              }
            }
          }
        }
      });
      previousElem = theElem;
      // styleNode(dropElem)
    }

    moveAt(event.pageX, event.pageY);

    function onMouseMove(ev) {
      moveAt(ev.pageX, ev.pageY);
      // const unElem =  document.getElementsByClassName('draghover')[0];
      // dropElem.classList.remove('draghover')
    }

    // (3) move the ball on mousemove
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);
    let info;
    // (4) drop the ball, remove unneeded handlers
    ball.onmouseup = function () {
      // console.log("MOUSEUP!");
      ball.style.position = "";
      ball.style.left = "";
      ball.style.top = "";
      ball.style.zIndex = "";
      ball.classList.remove("dragItem");
      // console.log(anID);
      if (anID !== undefined) {
        // console.log("ID WORKED!");
        const loc = anID.split("");
        // console.log(loc);
        const col1 = Number(loc[1]) + 2;
        const col2 = col1 + 1;
        const row1 = alpha.indexOf(loc[0]) + 2;
        const row2 = row1 + 1;
        // const dropship = new CustomEvent("dropship",{ detail: {col: col1-1, row: (row1-2), len: length, rot: rotated}} );
        // document.dispatchEvent(dropship)
        // const notTaken = (!isTaken(theElem));
        // const valid = placementCheck(length, rotated, row1, col1) && notTaken;
        const amRotated = ball.dataset.rotated;
        const isValidLoc = playerPlace(col1, row1, length, amRotated, player, ball.dataset.name) 
        // console.log('WAs I VALID?')
        // console.log(isValidLoc)
        if(isValidLoc){
          // console.log(isValidLoc)
            ball.style.gridArea = `${row1}/${col1}/${row2}/${col2}`;
            board.appendChild(ball);
            info = [[row1, col1], length, rotated];
            // if(ogParent.classList[0] !== 'shipHold'){
            //     player.removeShip(ball.dataset.name);
            // }
            // printShips(player.ships);
        }
        else {
          // console.log(`the og parent is now: ${ogParent}`)
          ogParent.appendChild(ball);
        }
        
      } 
      else {
        // console.log(`the og parent is now: ${ogParent}`)
        ogParent.appendChild(ball);
      }

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onMouseMove);
      const styled = document.getElementsByClassName('draghover');
      Array.from(styled).forEach(element => {
        removeStyle(element)})
      ball.onmouseup = null;
      return info;
    };
  };
  ball.addEventListener('mousedown', dragItem)
  ball.addEventListener('touchstart', dragItem)
  ball.addEventListener('touchmove', dragItem)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manualDrag);

//when a ship that has been placed is pick up (read parent node) OR rotated!
//then if it creates a valid ship, over write the old ship.




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function validEntry(length, startPoint, direction, alpha) {
  // console.log(`start point is ${startPoint}`)
  if (direction === "r") {
    if (startPoint[1] + length > 10) {
      // console.log(startPoint[1])
      // console.log(startPoint[1] + length)
      // console.log('goes too far right')
      return false;
    }
  }
  if (direction === "u") {
    if (alpha.indexOf(startPoint[0]) - length - 1 < 0) {
      return false;
    }
  }
  if (direction === "d") {
    console.log(alpha.indexOf
      (startPoint[0]))
      console.log(alpha.indexOf
        (startPoint[0])+length )
    if (alpha.indexOf(startPoint[0]) + length  > 10) {
      console.log(alpha.indexOf
        (startPoint[0]))
        console.log(alpha.indexOf
          (startPoint[0])+length )
      console.log('goes too far down')
      return false;
    }
  }
  if (direction === "l") {
    if (startPoint[1] - length < 0) {
      return false;
    }
  }

  return true;
}

function right(length, startPoint) {
  // console.log('RIGHT')
  const array = [];
  const x = startPoint[0];
  let y = startPoint[1];
  for (let i = 0; i < length; i += 1) {
    array.push([x, y]);
    y += 1;
  }

  return array;
}

function left(length, startPoint) {
  const array = [];
  const x = startPoint[0];
  let y = startPoint[1];
  for (let i = 0; i < length; i += 1) {
    array.push([x, y]);
    y -= 1;
  }
  return array;
}

function up(length, startPoint, alpha) {
  const array = [];
  let index = alpha.indexOf(startPoint[0]);
  for (let i = 0; i < length; i += 1) {
    const x = alpha[index];
    const y = startPoint[1];
    index -= 1;
    array.push([x, y]);
  }
  return array;
}

function down(length, startPoint, alpha) {
  console.log('DOwN')
  const array = [];
  let index = alpha.indexOf(startPoint[0]);
  for (let i = 0; i < length; i += 1) {
    const x = alpha[index];
    const y = startPoint[1];
    index += 1;
    array.push([x, y]);
  }
  return array;
}

function generateCoordinates(length, startPoint, direction, alpha) {
  let coords;
  if (direction === "r") {
    coords = right(length, startPoint);
  }
  if (direction === "u") {
    coords = up(length, startPoint, alpha);
  }
  if (direction === "d") {
    coords = down(length, startPoint, alpha);
  }
  if (direction === "l") {
    coords = left(length, startPoint);
  }
  return coords;
}

function generateHitLog(l) {
  const array = [];
  let i = 0;
  while (i < l) {
    array.push(0);
    i += 1;
  }
  return array;
}

const nameShip = (l) => {
  if (l === 5){
    return 'carrier';
  }
  if (l === 4){
    return 'battleship';
  }
  if (l === 3){
    return 'cruiser';
  }
  if (l === 2){
    return 'destroyer';
  }
  return 'error'
}



const ship = (l, startPoint, direction, theName) => {
  const name = theName;
  const alphas = "abcdefghij";
  const alpha = alphas.split("");
  const isValid = validEntry(l, startPoint, direction, alpha);
  // console.log(isValid);
  if (!isValid) {
    return null;
  }

  const length = l;
  const coords = generateCoordinates(l, startPoint, direction, alpha);
  const hitLog = generateHitLog(l);
  const isSunk = () => {
    // console.log(`hitlog is ${hitLog}`);
    if (!hitLog.includes(0)) {
      // console.log('hitlog did not inclue a zero')
      return true;
    }
    return false;
  };
  const sunk = isSunk();

  const getCoords = () => coords;
  const getHitlog = () => hitLog;

  const hit = (coordPair) => {
    let index;
    coords.forEach((coordinate) => {
      if (coordinate[0] === coordPair[0] && coordinate[1] === coordPair[1]) {
        index = coords.indexOf(coordinate);
      }
    });
    if (index !== undefined) {
      hitLog[index] = 1;
    }
  };

  function sink() {
    let i = 0;
    while (i < length) {
      hitLog[i] = 1;
      i += 1;
    }
    return hitLog;
  }

  return {
    name,
    length,
    coords,
    hitLog,
    hit,
    isSunk,
    getCoords,
    getHitlog,
    sunk,
    sink,
    nameShip
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);


/***/ }),

/***/ "./src/touchDrag.js":
/*!**************************!*\
  !*** ./src/touchDrag.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const alphas = "abcdefghij";
const alpha = alphas.split("");

const printShips = (shipsArray) => {
  shipsArray.forEach(shipEl => {
    // console.log(shipEl.name)
  })
}

const removeStyle = (previousElem) => {
    const dragleave = new Event("dragleave");
    previousElem.dispatchEvent(dragleave);
    const touchleave = new Event("touchleave");
    previousElem.dispatchEvent(touchleave);
}

const styleNode = (theElem) => {
    const dragover = new Event("dragover");
    theElem.dispatchEvent(dragover);
    const touchover = new Event("touchmove");
    theElem.dispatchEvent(touchover);
        }

const playerPlace = (col1, row1, length, rot, player, name) => {
            const n = name;
            const col = col1 - 2;
            const row = alpha[row1 - 2];
            const coord = [row, col];
            const len = length;
            const isRotated = rot;
            // console.log(isRotated);
            let dir;
            if(isRotated === 'true'){
              
                dir = 'd';
            }
            else{
              dir = 'r';
            }
            // console.log(dir);
            const valid = player.placeShip(len,coord,dir,n);
            return valid;
        }
// const placementCheck = (len, rotated, row1, col1) => {
//     let valid = false;
//     if(rotated){
//         if(len === 2){
//             if (row1 < 11){
//                 valid = true;
//             } 
//         }
//         if(len === 3){
//             if (row1 < 10){
//                 valid = true;
//             } 
//         }
//         if(len === 4){
//             if (row1 < 9){
//                 valid = true;
//             } 
//         }
//         if(len === 5){
//             if (row1 < 8){
//                 valid = true;
//             } 
//         }
//     } 
//     else {
//         if(len === 2){
//             if (col1 < 11){
//                 valid = true;
//             } 
//         }
//         if(len === 3){
//             if (col1 < 10){
//                 valid = true;
//             } 
//         }
//         if(len === 4){
//             if (col1 < 9){
//                 valid = true;
//             } 
//         }
//         if(len === 5){
//             if (col1 < 8){
//                 valid = true;
//             } 
//         }
//     }
//     //console.log(len, rotated, col1, row1, valid);
//     return valid;
// }

const isRotated = (val) => {
    if(val.length !== 0){
        if(val[7] !== '0'){
            return true;
        }
    }
    return false;
}

const pixels2Length = (len) => {
    if(len === '125px'){
        return 5
    }
    if(len === '100px'){
        return 4
    }
    if(len === '75px'){
        return 3
    }
    if(len === '50px'){
        return 2
    }
}

// const allAreas = (arrayOfAnchors) => {
//     const allshipAreas = [null, null, null, null, null];

// }

// const calcArea = (col1, row1, len, rotated) => {
//     let col = col1;
//     let row = row1;
//     const arrayOfTakenElems = [];
//     const arrayOfTakenIDs = [];
//     for(let i = 0; i < len-1;){
//         let id;
//         if(!rotated){
//             row = alpha[row];
//             id = `${row}${col + 1}m`
//         arrayOfTakenIDs.push(id);
//         col += 1;}
//         else{
//             const theRow = alpha[row];
//             id = `${theRow}${col}m`
//         arrayOfTakenIDs.push(id);
//         row += 1;
//         }
//         i+=1;
//     }
//     arrayOfTakenIDs.forEach(id => {
//         const elem = getElementById(id);
//         arrayOfTakenElems.push(elem);
//     })
//     return arrayOfTakenElems;
// }

// const isTaken = (node) => {
//     if(node.children.length !== 0){
//         return true;
//     }
//     return false;
// }

const manualDrag = (node, player) => {
  const board = document.getElementById("mainBoard");
  const ball = node;
  const length = pixels2Length(node.children[0].style.width);
  
//   let index = Array(ball.parentElement.children).indexOf(ball);

   function dragItem (event) {
    const touchLocation = event.targetTouches[0];
    ball.classList.add("dragItem");
    // (1) start the process
    const ogParent = ball.parentElement;
    // console.log('OG parent is:')
    // console.log(ogParent)
    let rotated = node.style.transform.split('');
    rotated = isRotated(rotated);
    ball.setAttribute('data-rotated', rotated)
    // console.log(length, rotated)
    // (2) prepare to moving: make absolute and on top by z-index
    ball.style.position = "absolute";
    ball.style.zIndex = 1000;

    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(ball);
    // board.appendChild(ball);
    // ...and put that absolutely positioned ball under the cursor
    let anID;
    let theElem;
    let previousElem;
    // centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
      ball.style.left = `${touchLocation.pageX}px`;
      ball.style.top = `${touchLocation.pageY}px`;
      const dropElemList = document.elementsFromPoint(pageX, pageY);

      dropElemList.forEach((elem) => {
        // console.log('classlist')
        // console.log(Array.from(elem.classList))
        if (elem.classList !== undefined) {
          if (elem.classList.contains("unitm")) {
            // console.log(`contains it! return ID: ${elem.id}`);
            anID = elem.id;
            theElem = elem;
            setTimeout(styleNode(theElem), 500)
            
            if (previousElem !== undefined) {
              if (elem.id !== undefined) {
                // console.log(`${previousElem.id} vs. ${elem.id}`);
                if (previousElem !== elem) {
                  removeStyle(previousElem);
                }
              }
            }
          }
        }
      });
      previousElem = theElem;
      // styleNode(dropElem)
    }

    moveAt(event.pageX, event.pageY);

    function onMouseMove(ev) {
      moveAt(ev.pageX, ev.pageY);
      // const unElem =  document.getElementsByClassName('draghover')[0];
      // dropElem.classList.remove('draghover')
    }

    // (3) move the ball on mousemove
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);
    let info;
    // (4) drop the ball, remove unneeded handlers
    ball.onmouseup = function () {
      // console.log("MOUSEUP!");
      ball.style.position = "";
      ball.style.left = "";
      ball.style.top = "";
      ball.style.zIndex = "";
      ball.classList.remove("dragItem");
      // console.log(anID);
      if (anID !== undefined) {
        // console.log("ID WORKED!");
        const loc = anID.split("");
        // console.log(loc);
        const col1 = Number(loc[1]) + 2;
        const col2 = col1 + 1;
        const row1 = alpha.indexOf(loc[0]) + 2;
        const row2 = row1 + 1;
        // const dropship = new CustomEvent("dropship",{ detail: {col: col1-1, row: (row1-2), len: length, rot: rotated}} );
        // document.dispatchEvent(dropship)
        // const notTaken = (!isTaken(theElem));
        // const valid = placementCheck(length, rotated, row1, col1) && notTaken;
        const amRotated = ball.dataset.rotated;
        const isValidLoc = playerPlace(col1, row1, length, amRotated, player, ball.dataset.name) 
        // console.log('WAs I VALID?')
        // console.log(isValidLoc)
        if(isValidLoc){
          // console.log(isValidLoc)
            ball.style.gridArea = `${row1}/${col1}/${row2}/${col2}`;
            board.appendChild(ball);
            info = [[row1, col1], length, rotated];
            // if(ogParent.classList[0] !== 'shipHold'){
            //     player.removeShip(ball.dataset.name);
            // }
            // printShips(player.ships);
        }
        else {
          // console.log(`the og parent is now: ${ogParent}`)
          ogParent.appendChild(ball);
        }
        
      } 
      else {
        // console.log(`the og parent is now: ${ogParent}`)
        ogParent.appendChild(ball);
      }

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onMouseMove);
      const styled = document.getElementsByClassName('draghover');
      Array.from(styled).forEach(element => {
        removeStyle(element)})
      ball.onmouseup = null;
      return info;
    };
  };
  ball.addEventListener('mousedown', dragItem)
  ball.addEventListener('touchstart', dragItem)
  ball.addEventListener('touchmove', dragItem)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manualDrag);

//when a ship that has been placed is pick up (read parent node) OR rotated!
//then if it creates a valid ship, over write the old ship.




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
/* harmony import */ var _GUIMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GUIMain */ "./src/GUIMain.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _GUIRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GUIRender */ "./src/GUIRender.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");





const alphas = "abcdefghij";
const alpha = alphas.split("");

const printShips = (shipsArray) => {
    shipsArray.forEach(shipEl => {
      console.log(shipEl.name)
      console.log(shipEl.coords)
    })
  }

// const player = (num) => {
//     const playerNum = num;
//     const pGameboard = gameboard(10);
//     return {playerNum, pGameboard}
// };
// const player1 = player(1);
const replay = () => {
    Array.from(document.body.children).forEach(el => {
        el.remove();
    })
    initialDraw();
}

const initialDraw = () => {
    const turnBoard = document.createElement('div');
    turnBoard.setAttribute('id', 'turnBoard');
    turnBoard.textContent = '1';
    document.body.appendChild(turnBoard);
    const title = document.createElement('div');
    title.classList.add('title');
    document.body.appendChild(title);
    title.textContent = 'BATTLESHOOP';
    const messageBoard = document.createElement('div');
    messageBoard.setAttribute('id', 'messageBoard');
    messageBoard.textContent = 'Place your ships. Press R key to rotate. When finished lock your ships in to begin the game.';
    document.body.appendChild(messageBoard);
    const playAgain = document.createElement('div');
            document.body.appendChild(playAgain);
            playAgain.classList.add('button');
            playAgain.setAttribute('id', 'playAgain');
            playAgain.textContent = 'PLAY AGAIN';
            playAgain.addEventListener('mousedown', replay);
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container)



const player1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(10, 1);
const computer = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(10, 2);


const nameShip = (l) => {
    if (l === 5){
      return 'carrier';
    }
    if (l === 4){
      return 'battleship';
    }
    if (l === 3){
      return 'cruiser';
    }
    if (l === 2){
      return 'destroyer';
    }
    return 'error'
  }
const genRandomCoord = () => {
    const x = alphas[Math.floor(Math.random() * 10)];
    const y = Math.floor(Math.random() * 9);
    return [x,y];
}
const genRandomDir = () => {
    let dir = Math.floor(Math.random() * 2);
    if(dir === 1){
        dir = 'd'
    }
    else{
        dir = 'r'
    }
    return dir;
}

const placeCompShip = (l) => {
    const coord = genRandomCoord();
    const dir = genRandomDir();
    const valid = computer.placeShip(l, coord, dir, nameShip(l), true)
    console.log(valid);
    console.log(l, coord, dir, nameShip(l))
    if(!valid){
        placeCompShip(l);
    }
}


    placeCompShip(5)
    placeCompShip(4)
    placeCompShip(3)
    placeCompShip(3)
    placeCompShip(2)

       
    

printShips(computer.ships);
(0,_GUIMain__WEBPACK_IMPORTED_MODULE_0__["default"])(player1, computer);

}

initialDraw()







//when a ship is changed (r) or picked up and moved
//AND new position is valid
//delete old ship, run new ship



// document.addEventListener("dropship", playerPlace);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixZQUFZLDRCQUE0QixZQUFZLDZCQUE2QixZQUFZLDRCQUE0QixhQUFhLDBCQUEwQixLQUFLLGFBQWEsZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxPQUFPLE1BQU0sT0FBTyxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLE1BQU0sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxpQkFBaUIsa0JBQWtCLGtCQUFrQixrQkFBa0Isa0JBQWtCLDBHQUEwRyxNQUFNLE1BQU0sTUFBTSxNQUFNLDhDQUE4QyxNQUFNLE1BQU0sTUFBTSxNQUFNLG9DQUFvQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixLQUFLLCtDQUErQyxnQ0FBZ0MsT0FBTyxPQUFPLDZCQUE2QixJQUFJLGNBQWMsbUJBQW1CLG1CQUFtQixvQkFBb0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsMkNBQTJDLHdDQUF3Qyw0RUFBNEUsMkNBQTJDLHFDQUFxQyxpQ0FBaUMsZ0RBQWdELCtCQUErQixzQkFBc0IsMEJBQTBCLDhCQUE4QixzREFBc0QsS0FBSyxtQkFBbUIsdUJBQXVCLDJCQUEyQiw4QkFBOEIsbUJBQW1CLG1CQUFtQixzQkFBc0Isa0RBQWtELEdBQUcsY0FBYyx5QkFBeUIsOEJBQThCLG1CQUFtQixzQkFBc0Isa0RBQWtELEdBQUcsZ0JBQWdCLGdDQUFnQyxnQ0FBZ0MsMEJBQTBCLG9CQUFvQixvQkFBb0IsdUNBQXVDLHNDQUFzQyxvQkFBb0IsdUJBQXVCLDRCQUE0QixTQUFTLFVBQVUseUJBQXlCLEdBQUcsY0FBYyx5QkFBeUIsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsVUFBVSxvQkFBb0IsOENBQThDLDJDQUEyQywwQkFBMEIsNEJBQTRCLEdBQUcsZUFBZSw4QkFBOEIsd0JBQXdCLG9CQUFvQiw4Q0FBOEMsbUJBQW1CLEdBQUcsZ0JBQWdCLDhCQUE4QixxQkFBcUIsdUJBQXVCLG9CQUFvQiwyQ0FBMkMsNkJBQTZCLDhCQUE4QixHQUFHLGdCQUFnQixvQkFBb0IsZ0NBQWdDLG1CQUFtQixtQkFBbUIsd0JBQXdCLHNCQUFzQixzQkFBc0Isa0RBQWtELG1CQUFtQiw0QkFBNEIsOEJBQThCLDBCQUEwQixHQUFHLCtCQUErQiw4QkFBOEIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsa0JBQWtCLG1CQUFtQixzQkFBc0IsU0FBUyxVQUFVLGlEQUFpRCxnREFBZ0QsOENBQThDLEdBQUcsWUFBWSwrQ0FBK0MsZ0RBQWdELGlEQUFpRCxHQUFHLFlBQVksdUJBQXVCLG9CQUFvQiwwQ0FBMEMsR0FBRyxpQkFBaUIsd0JBQXdCLHFCQUFxQixvQkFBb0IsOENBQThDLDJDQUEyQyxTQUFTLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QiwwQ0FBMEMsa0JBQWtCLG1CQUFtQixzQkFBc0IsZ0RBQWdELGlEQUFpRCxHQUFHLGlCQUFpQiwwQ0FBMEMsR0FBRyxZQUFZLGdDQUFnQywwQ0FBMEMsR0FBRywyQkFBMkIseUNBQXlDLGdEQUFnRCxpREFBaUQsR0FBRyxxQkFBcUIsMENBQTBDLDBDQUEwQyxvQ0FBb0Msa0RBQWtELGlEQUFpRCxHQUFHLFlBQVksbUJBQW1CLG1CQUFtQixHQUFHLHVCQUF1Qix5QkFBeUIsb0JBQW9CLCtDQUErQyx3Q0FBd0MsbUJBQW1CLEdBQUcsZ0JBQWdCLHlDQUF5QyxrQkFBa0Isa0JBQWtCLEdBQUcsZ0JBQWdCLHlCQUF5QixvQkFBb0IsaUJBQWlCLDZCQUE2Qiw0QkFBNEIseUJBQXlCLHdCQUF3QixnQkFBZ0IsR0FBRyxhQUFhLG9CQUFvQixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2Qiw0QkFBNEIsMEJBQTBCLGtCQUFrQixzQkFBc0Isb0JBQW9CLEtBQUssZUFBZSx1Q0FBdUMsdUNBQXVDLEdBQUcsY0FBYywrQkFBK0IsR0FBRyxhQUFhLHlCQUF5QixrQkFBa0IsbUJBQW1CLEdBQUcsYUFBYSxtQkFBbUIsbUJBQW1CLG1CQUFtQiwwQ0FBMEMseUJBQXlCLHNCQUFzQixrREFBa0Qsc0JBQXNCLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxtQ0FBbUMsNkJBQTZCLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyx1QkFBdUIsdUNBQXVDLG1EQUFtRCxLQUFLLG1DQUFtQyxXQUFXLDBCQUEwQixZQUFZLDRCQUE0QixZQUFZLDZCQUE2QixZQUFZLDRCQUE0QixhQUFhLDBCQUEwQixLQUFLLHlCQUF5QjtBQUNwa2M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUs7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQSx5QkFBeUIsTUFBTTtBQUMvQjtBQUNBOztBQUVBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0EsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0E7O0FBRUEsa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBLGtCQUFrQixTQUFTLEVBQUUsRUFBRSxFQUFFLEtBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R1c7QUFDRDtBQUNEO0FBQ0k7QUFDRjtBQUNHO0FBQ2I7QUFDTTs7QUFFaEM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBUztBQUNyQjtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0RBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBVTtBQUNkLElBQUksc0RBQVM7QUFDYixDQUFDO0FBQ0Q7QUFDQTs7O0FBR0E7QUFDQSx5Q0FBeUMsSUFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxJQUFJO0FBQ3ZDO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFlBQVk7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxZQUFZO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseURBQXlEO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNLcUI7QUFDRDtBQUNEO0FBQ0k7QUFDWjtBQUNNOzs7QUFHaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJFQUEyRSxnQkFBZ0IscUJBQXFCLGVBQWU7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQVM7QUFDckI7QUFDQTtBQUNBLGtCQUFrQixxREFBUztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQVM7QUFDckI7QUFDQTtBQUNBLGtCQUFrQixxREFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7Ozs7OztBQU9BOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ2xPdUI7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFlBQVk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLElBQUksdURBQVU7QUFDZDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLRTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNC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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbE1wQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvREFBVTs7QUFFVjs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7Ozs7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL0dVSUJvYXJkLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL0dVSU1haW4uanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvR1VJUmVuZGVyLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL0dVSVNoaXAuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL21hbnVhbERyYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy90b3VjaERyYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNjAwOzAsODAwOzEsMzAwOzEsNDAwJmZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTU0LCAxNzMsIDE4NCk7ICovXFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXFxuIH0gXFxuXFxuICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuIH1cXG4gICAgXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNTIsIDU4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCA0MSwgNDYpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYig3NCwgOTAsIDk5KSAsIHJnYigzMiwgNDEsIDQ2KSk7XFxuICAgIGZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyAqL1xcbiAgICAvKiBjb2xvcjogcmdiKDIwMiwgMjI1LCAyMzgpO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDRweCByZ2IoOTQsIDExOSwgMTMzKTsgKi9cXG4gICAgY29sb3I6IHJnYigyMCwgMTcsIDE3KTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuI21lc3NhZ2VCb2FyZCB7XFxuICAgIC8qIHBhZGRpbmc6IDhweDsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQ2MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLnRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQ2MHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjODRkNGZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlZmY4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMDBweCAzMDBweDtcXG4gICAgcm93LWdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuI2xvZyB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuI21haW5Cb2FyZCB7XFxuICAgIGdyaWQtYXJlYTogMi8yLzMvMztcXG59XFxuXFxuI3R1cm5Cb2FyZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDI1cHgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b3BMYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zaWRlTGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1yb3c6IDIvMTI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5ib3R0b21MYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NGZmOTQ7XFxuICAgIHdpZHRoOiAyNzVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8xMztcXG4gICAgZ3JpZC1yb3c6IDEyLzEzO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRsVW5pdCwgLnNsVW5pdCwgLmNvcm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG59XFxuLnRsVW5pdHtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uc2xVbml0e1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uY29ybmVye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmlubmVyQm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZ3JpZC1yb3c6IDIvMTI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBcXG59XFxuXFxuLnVuaXRsLCAudW5pdG17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzYsIDIwMCwgMjE0KTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4udW5pdGw6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDExNywgMTQ5LCAxNjgpO1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRmZjk0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMzAsIDE2NCwgMTg0KTtcXG59XFxuXFxuXFxuXFxuLm1pc3MsIC5taXNzOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0OSwgMTYxLCAyMjYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaGl0LCAuaGl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMjgsIDEwMCwgMTAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxMDksIDEwOSk7XFxuICAgIC8qIGJvcmRlcjpyZ2IoMjI4LCAxMDAsIDEwMCk7ICovXFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5ob2xkZXJ7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uc2hpcCwgLnNoaXA6aG92ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDczLCAxMDYsIDEyNiwgNjAlKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDQ3LCA2MywgNzEpO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5kcmFnaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTYsIDIpO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OjI1cHg7XFxufVxcblxcbi5vdXRlckhvbGQge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uc2hpcEhvbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc2hpcEhvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxuICAgIGdhcDogMTZweDtcXG4gICAgLyogd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDcycHg7ICovXFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCAjODRkNGZmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggIzg0ZmY5NDtcXG59XFxuXFxuLnJvdGF0ZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5hbmNob3Ige1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzYsIDIwMCwgMjE0KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3BsYXlBZ2FpbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxvY2s6aG92ZXIsICNwbGF5QWdhaW46aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwNSUpO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1zaGFrZSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCAjZmY4NDg0O1xcbiAgICBhbmltYXRpb246IGhvcml6b250YWwtc2hha2luZyAwLjM1cyBpbmZpbml0ZTtcXG4gIH1cXG5cXG5Aa2V5ZnJhbWVzIGhvcml6b250YWwtc2hha2luZyB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIH1cXG4gICAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgfVxcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgfVxcbiAgICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KSB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgfVxcbiAgfVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0M7SUFDRywwQ0FBMEM7SUFDMUMseUJBQXlCO0NBQzVCOztDQUVBO0lBQ0csc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Q7OzswQ0FHc0M7SUFDdEM7Z0NBQzRCO0lBQzVCLHlDQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFB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QVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyw0Q0FBNEM7RUFDOUM7O0FBRUY7SUFDSSxLQUFLLHlCQUF5QjtJQUM5QixNQUFNLDJCQUEyQjtJQUNqQyxNQUFNLDRCQUE0QjtJQUNsQyxNQUFNLDJCQUEyQjtJQUNqQyxPQUFPLHlCQUF5QjtFQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNjAwOzAsODAwOzEsMzAwOzEsNDAwJmZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG4gKntcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE1NCwgMTczLCAxODQpOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyMHB4OyAqL1xcbiB9IFxcblxcbiAqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiB9XFxuICAgIFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDUyLCA1OCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgNDEsIDQ2KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoNzQsIDkwLCA5OSkgLCByZ2IoMzIsIDQxLCA0NikpO1xcbiAgICBmb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgKi9cXG4gICAgLyogY29sb3I6IHJnYigyMDIsIDIyNSwgMjM4KTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgKi9cXG4gICAgLyogYm9yZGVyOiBzb2xpZCA0cHggcmdiKDk0LCAxMTksIDEzMyk7ICovXFxuICAgIGNvbG9yOiByZ2IoMjAsIDE3LCAxNyk7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbiNtZXNzYWdlQm9hcmQge1xcbiAgICAvKiBwYWRkaW5nOiA4cHg7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0NjBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi50aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0NjBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzg0ZDRmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZWZmODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHggMzAwcHg7XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbiNsb2cge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxufVxcbiNtYWluQm9hcmQge1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxufVxcblxcbiN0dXJuQm9hcmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMjVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAyNXB4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9wTGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2lkZUxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGdyaWQtcm93OiAyLzEyO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYm90dG9tTGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRmZjk0O1xcbiAgICB3aWR0aDogMjc1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICAgIGdyaWQtcm93OiAxMi8xMztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50bFVuaXQsIC5zbFVuaXQsIC5jb3JuZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgXFxufVxcbi50bFVuaXR7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLnNsVW5pdHtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmNvcm5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5pbm5lckJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGdyaWQtcm93OiAyLzEyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgXFxufVxcblxcbi51bml0bCwgLnVuaXRte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc2LCAyMDAsIDIxNCk7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLnVuaXRsOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMTcsIDE0OSwgMTY4KTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0ZmY5NDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTMwLCAxNjQsIDE4NCk7XFxufVxcblxcblxcblxcbi5taXNzLCAubWlzczpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDksIDE2MSwgMjI2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmhpdCwgLmhpdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjI4LCAxMDAsIDEwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTA5LCAxMDkpO1xcbiAgICAvKiBib3JkZXI6cmdiKDIyOCwgMTAwLCAxMDApOyAqL1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaG9sZGVye1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLnNoaXAsIC5zaGlwOmhvdmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg3MywgMTA2LCAxMjYsIDYwJSk7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYig0NywgNjMsIDcxKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uZHJhZ2hvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk2LCAyKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDoyNXB4O1xcbn1cXG5cXG4ub3V0ZXJIb2xkIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLnNoaXBIb2xkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNoaXBIb2xkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIC8qIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA3MnB4OyAqL1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggIzg0ZDRmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4ICM4NGZmOTQ7XFxufVxcblxcbi5yb3RhdGVkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uYW5jaG9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc2LCAyMDAsIDIxNCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNwbGF5QWdhaW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5sb2NrOmhvdmVyLCAjcGxheUFnYWluOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDUlKTtcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvcml6b250YWwtc2hha2Uge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggI2ZmODQ4NDtcXG4gICAgYW5pbWF0aW9uOiBob3Jpem9udGFsLXNoYWtpbmcgMC4zNXMgaW5maW5pdGU7XFxuICB9XFxuXFxuQGtleWZyYW1lcyBob3Jpem9udGFsLXNoYWtpbmcge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB9XFxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIH1cXG4gICAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIH1cXG4gIH1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbmNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuXG5mdW5jdGlvbiBhZGRIb3Zlcihldikge1xuICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhvdmVyZWRcIik7XG59XG5mdW5jdGlvbiB1bkhvdmVyKGV2KSB7XG4gIGV2LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbn1cblxuZnVuY3Rpb24gdW5zdHlsZVRhcmdldChldikge1xuICAvL2NvbnNvbGUubG9nKCdpbSBVTnRyaWdnZXJlZCcpXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2hvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBzdHlsZVRhcmdldChldikge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL2NvbnNvbGUubG9nKCdpbSB0cmlnZ2VyZWQnKVxuICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZChcImRyYWdob3ZlclwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0bG9jYXRpb24oZXYpIHtcbiAgY29uc29sZS5sb2coJ2FEcm9wIGhhcHBlbmVkIScpXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHVuc3R5bGVUYXJnZXQoZXYpO1xuICBjb25zdCBkYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyYWdJdGVtXCIpO1xuICBjb25zdCBub2RlID0gZGF0YVswXTtcbiAgY29uc3QgbG9jID0gZXYudGFyZ2V0LmlkLnNwbGl0KFwiXCIpO1xuICBjb25zdCBjb2wxID0gTnVtYmVyKGxvY1sxXSkgKyAyO1xuICBjb25zdCBjb2wyID0gY29sMSArIDE7XG4gIGNvbnN0IHJvdzEgPSBhbHBoYS5pbmRleE9mKGxvY1swXSkgKyAyO1xuICBjb25zdCByb3cyID0gcm93MSArIDE7XG4gIG5vZGUuc3R5bGUuZ3JpZEFyZWEgPSBgJHtyb3cxfS8ke2NvbDF9LyR7cm93Mn0vJHtjb2wyfWA7XG4gIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbmNvbnN0IGRyYXdCb2FyZCA9IChwbHlyVmFsLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgaWYocGx5clZhbCAhPT0gbnVsbCl7XG4gICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheWVyJywgcGx5clZhbC5wTnVtKTtcbiAgfVxuICBcbiAgY29uc3QgdG9wTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKHRvcExhYmVsKTtcbiAgdG9wTGFiZWwuY2xhc3NMaXN0LmFkZChcInRvcExhYmVsXCIpO1xuICBjb25zdCBzaWRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKHNpZGVMYWJlbCk7XG4gIHNpZGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwic2lkZUxhYmVsXCIpO1xuICBjb25zdCBpbm5lckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5uZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiaW5uZXJCb2FyZFwiKTtcbiAgZ3JpZC5hcHBlbmRDaGlsZChpbm5lckJvYXJkKTtcbiAgY29uc3QgYm90dG9tTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib3R0b21MYWJlbC5jbGFzc0xpc3QuYWRkKFwiYm90dG9tTGFiZWxcIik7XG4gIGdyaWQuYXBwZW5kQ2hpbGQoYm90dG9tTGFiZWwpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gYCR7aX1sYDtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRsVW5pdFwiKTtcbiAgICB0b3BMYWJlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2kgKyAxfWA7XG4gICAgaSArPSAxO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBgJHtpfWxgO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2xVbml0XCIpO1xuICAgIHNpZGVMYWJlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2FscGhhW2ldfWA7XG4gICAgaSArPSAxO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYHVuaXQke3R5cGV9YCk7XG4gICAgICBpbm5lckJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuaWQgPSBgJHthbHBoYVtpXX0ke2p9JHt0eXBlfWA7XG4gICAgICAvLyBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgc3R5bGVUYXJnZXQpO1xuICAgICAgaWYgKHR5cGUgPT09IFwibVwiKSB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgc3R5bGVUYXJnZXQpO1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCB1bnN0eWxlVGFyZ2V0KTtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgc3R5bGVUYXJnZXQpO1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobGVhdmVcIiwgdW5zdHlsZVRhcmdldCk7XG4gICAgICAgIC8vIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBnZXRsb2NhdGlvbik7XG4gICAgICAgIC8vIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHN0eWxlVGFyZ2V0KTtcbiAgICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHVuc3R5bGVUYXJnZXQpO1xuICAgICAgICAvLyBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW91c2VcIiwgZ2V0bG9jYXRpb24pO1xuICAgICAgfVxuICAgICAgaiArPSAxO1xuICAgIH1cbiAgICBpICs9IDE7XG4gIH1cblxuICBjb25zdCBjb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKGNvcm5lcik7XG4gIGNvcm5lci5jbGFzc0xpc3QuYWRkKFwiY29ybmVyXCIpO1xuXG4gIHJldHVybiBncmlkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZHJhd0JvYXJkO1xuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBkcmF3Qm9hcmQgZnJvbSBcIi4vR1VJQm9hcmRcIjtcbmltcG9ydCBkcmF3U2hpcHMgZnJvbSBcIi4vR1VJU2hpcFwiO1xuaW1wb3J0IG1hbnVhbERyYWcgZnJvbSBcIi4vbWFudWFsRHJhZ1wiO1xuaW1wb3J0IHRvdWNoRHJhZyBmcm9tICcuL3RvdWNoRHJhZyc7XG5pbXBvcnQgcmVuZGVyQm9hcmRzIGZyb20gJy4vR1VJUmVuZGVyJztcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cblxuY29uc3QgZHJhd0xheW91dCA9IChwbGF5ZXIsIHBsYXllcjIpID0+IHtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuY29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2VCb2FyZCcpO1xuY29uc3QgbG9nID0gZHJhd0JvYXJkKG51bGwsICdsJyk7XG5sb2cuaWQgPSAnbG9nJztcbi8vIGNvbnN0IG51bSA9IHBsYXllci5wbGF5ZXJOdW07XG5jb25zdCBtYWluQm9hcmQgPSBkcmF3Qm9hcmQocGxheWVyLCAnbScpO1xubWFpbkJvYXJkLmlkID0gJ21haW5Cb2FyZCc7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobG9nKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQm9hcmQpO1xuY29uc3Qgc2hpcHMgPSBkcmF3U2hpcHMoKTtcbmNvbnN0IG91dGVySG9sZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xub3V0ZXJIb2xkLmNsYXNzTGlzdC5hZGQoJ291dGVySG9sZCcpXG5jb250YWluZXIuYXBwZW5kQ2hpbGQob3V0ZXJIb2xkKVxuY29uc3Qgc2hpcEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2hpcEhvbGRlci5jbGFzc0xpc3QuYWRkKCdzaGlwSG9sZGVyJyk7XG5vdXRlckhvbGQuYXBwZW5kQ2hpbGQoc2hpcEhvbGRlcik7XG5sb2cuY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSAnRW5lbXkgQm9hcmQnO1xubWFpbkJvYXJkLmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gJ015IEJvYXJkJztcblxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaGlwSG9sZGVyKTtcblxuY29uc3QgbG9ja1NoaXBzRG93biA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbG9ja2luZyBzaGlwcycpXG4gICAgaWYocGxheWVyLnNoaXBzLmxlbmd0aCAhPT0gNSl7XG4gICAgICAgIG1lc3NhZ2VCb2FyZC50ZXh0Q29udGVudCA9ICdQbGVhc2UgcGxhY2UgYWxsIG9mIHlvdSBzaGlwcyBvbiB0aGUgYm9hcmQhJ1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2hpcE5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW5jaG9yJyk7XG4gICAgQXJyYXkuZnJvbShzaGlwTm9kZXMpLmZvckVhY2goYW5jaG9yID0+IHtcbiAgICAgICAgYW5jaG9yLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgYW5jaG9yLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGFuY2hvci5yZXBsYWNlV2l0aChhbmNob3IuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBcbiAgICB9KVxuICAgIGNvbnN0IGxvY2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ja0J1dHRvbicpO1xuICAgIGxvY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICAgIGxvY2tCdXR0b24ucmVwbGFjZVdpdGgobG9ja0J1dHRvbi5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGNvbnN0IGFTaGlwSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2hpcEhvbGRlcicpWzBdO1xuICAgIGFTaGlwSG9sZGVyLnJlbW92ZSgpO1xuICAgIHBsYXllci51cGRhdGVNYXRyaXgoKTtcbiAgICBwbGF5ZXIyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIHJlbmRlckJvYXJkcyhwbGF5ZXIsIHBsYXllcjIpO1xufVxuXG5jb25zdCBsb2NrU2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvY2tTaGlwcy5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbmxvY2tTaGlwcy5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG5vdXRlckhvbGQuYXBwZW5kQ2hpbGQobG9ja1NoaXBzKTtcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9ja1NoaXBzKTtcbmxvY2tTaGlwcy50ZXh0Q29udGVudCA9ICdMT0NLIFNISVBTJztcbmxvY2tTaGlwcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2tCdXR0b24nKTtcbmxvY2tTaGlwcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvY2tTaGlwc0Rvd24pXG5cblxuc2hpcHMuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgIGNvbnN0IHNoaXBIb2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcEhvbGQuY2xhc3NMaXN0LmFkZCgnc2hpcEhvbGQnKVxuICAgIHNoaXBIb2xkLmFwcGVuZENoaWxkKHNoaXBFbCk7XG4gICAgc2hpcEhvbGQuc3R5bGUud2lkdGggPSBzaGlwRWwuZmlyc3RDaGlsZC5zdHlsZS53aWR0aDtcbiAgICBzaGlwSG9sZGVyLmFwcGVuZENoaWxkKHNoaXBIb2xkKTtcbiAgICBtYW51YWxEcmFnKHNoaXBFbCwgcGxheWVyKTtcbiAgICB0b3VjaERyYWcoc2hpcEVsLCBwbGF5ZXIpXG59KVxuY29uc3Qgc3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmFtZT1cImNydWlzZXJcIl0nKTtcbnN1YlswXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsICdzdWJtYXJpbmUnKTtcblxuXG5jb25zdCBwbGF5ZXJQbGFjZSA9IChjb2wxLCByb3cxLCBsZW5ndGgsIHJvdCwgYVBsYXllciwgbmFtZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBiZWdpbm5pbmcgcm90YXRlZD8gJHtyb3R9YClcbiAgICBjb25zdCBuID0gbmFtZTtcbiAgICBjb25zdCByb3cgPSByb3cxICsxIDtcbiAgICBjb25zdCBjb2wgPSBhbHBoYVtjb2wxXTtcbiAgICBjb25zdCBjb29yZCA9IFtjb2wsIHJvd107XG4gICAgY29uc3QgbGVuID0gbGVuZ3RoO1xuICAgIGNvbnN0IGlzUm90YXRlZCA9IHJvdDtcbiAgICBsZXQgZGlyID0gJ3InO1xuICAgIGlmKGlzUm90YXRlZCA9PT0gJ3RydWUnKXtcbiAgICAgICAgZGlyID0gJ2QnXG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKGBkaXJlY3Rpb24gaXMgJHtkaXJ9YClcbiAgICBjb25zdCB2YWxpZCA9IGFQbGF5ZXIucGxhY2VTaGlwKGxlbixjb29yZCxkaXIsbik7XG4gICAgLy8gY29uc29sZS5sb2coYFRoaXMgd2FzIHZhbGlkPyAke3ZhbGlkfWApXG4gICAgcmV0dXJuIHZhbGlkO1xufVxuXG5mdW5jdGlvbiByb3RhdGUoZXYpe1xuICAgIGlmKGV2LmtleSA9PT0gJ3InKXtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBjdXJyZW50Um90YXRpb24gPSBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyb3RhdGluZycpO1xuICAgICAgICBpZigoY3VycmVudFJvdGF0aW9uID09PSAnJyl8fChjdXJyZW50Um90YXRpb24gPT09ICdyb3RhdGUoMGRlZyknKSApe1xuICAgICAgICAgICAgY3VycmVudFJvdGF0aW9uID0gMDtcbiAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpYDtcbiAgICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY3VycmVudFJvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGxldCBuZXdSb3RhdGlvbiA9IGN1cnJlbnRSb3RhdGlvbls3XSArIGN1cnJlbnRSb3RhdGlvbls4XTtcbiAgICAgICAgICAgIG5ld1JvdGF0aW9uID0gTnVtYmVyKG5ld1JvdGF0aW9uKTtcbiAgICAgICAgICAgIG5ld1JvdGF0aW9uIC09IDkwO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3Um90YXRpb24pXG4gICAgICAgICAgICBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bmV3Um90YXRpb259ZGVnKWA7XG4gICAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlZCcsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHBhcmVudCBub2RlIGlzIHNoaXBob2xkIGRvLCBub3JtYWwsIG90aGVyIHdpc2UsIGdldCBzdGFydCBjb29yZFxuICAgICAgICAvLyBidWlsZCBhIHNoaXAgaW4gb3Bwb3NpdGUgZGlyZWN0aW9uIChob3Jpem9udGFsIG9yIHZlcnRpY2FsKSwgYmFzaWNhbGx5IHRyZWF0IGFzIGEgZHJvcCBpZiBpdCdzIGFscmVhZHkgb2YgdGhlIGJvYXJkLlxuICAgICAgICAvLyBpZiBzaGlwIGlzIHZhbGlkIG92ZXJ3cml0ZVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkLnBhcmVudEVsZW1lbnQpO1xuICAgICAgICBpZihzZWxlY3RlZC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2JvYXJkJyl7XG4gICAgICAgICAgICBjb25zdCBpc1JvdGF0ZWQgPSBzZWxlY3RlZC5kYXRhc2V0LnJvdGF0ZWQ7XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBOdW1iZXIoc2VsZWN0ZWQuZGF0YXNldC5zaGlwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnQXJlYSA9IHNlbGVjdGVkLnN0eWxlLmdyaWRBcmVhLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZ0FyZWEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbDEgPSBOdW1iZXIoZ0FyZWFbMF0gLTIpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNvbE5leHQgPSBOdW1iZXIoZ0FyZWFbNV0pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdzEgPSBOdW1iZXIoZ0FyZWFbMV0gLTIpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJvdzEpO1xuICAgICAgICAgICAgICAgIHZhbGlkID0gcGxheWVyUGxhY2UoY29sMSwgcm93MSwgbGVuZ3RoLCBpc1JvdGF0ZWQsIHBsYXllciwgc2VsZWN0ZWQuZGF0YXNldC5uYW1lKSBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF2YWxpZCkge1xuICAgICAgICBjdXJyZW50Um90YXRpb24gPSBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgICAgICBpZigoY3VycmVudFJvdGF0aW9uID09PSAnJyl8fChjdXJyZW50Um90YXRpb24gPT09ICdyb3RhdGUoMGRlZyknKSApe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSg5MGRlZylgO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY3VycmVudFJvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uLnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Um90YXRpb24gPSBjdXJyZW50Um90YXRpb25bN10gKyBjdXJyZW50Um90YXRpb25bOF07XG4gICAgICAgICAgICAgICAgbmV3Um90YXRpb24gPSBOdW1iZXIobmV3Um90YXRpb24pO1xuICAgICAgICAgICAgICAgIG5ld1JvdGF0aW9uIC09IDkwO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1JvdGF0aW9uKVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtuZXdSb3RhdGlvbn1kZWcpYDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWQuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIHNlbGVjdGVkLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbC1zaGFrZScpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FwcGx5aW5nIHNoYWtlJylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3NlbGVjdGVkLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbC1zaGFrZScpfSwgJzUwMCcpXG4gICAgICAgIH1cbiAgICB9ICBcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCByb3RhdGUpXG59XG5cbi8vIGNvbnN0IG1pc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYTBsJyk7XG4vLyBtaXNzLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuXG4vLyBjb25zdCBoaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYTFsJyk7XG4vLyBoaXQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGRyYXdMYXlvdXQiLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IGRyYXdCb2FyZCBmcm9tIFwiLi9HVUlCb2FyZFwiO1xuaW1wb3J0IGRyYXdTaGlwcyBmcm9tIFwiLi9HVUlTaGlwXCI7XG5pbXBvcnQgbWFudWFsRHJhZyBmcm9tIFwiLi9tYW51YWxEcmFnXCI7XG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5cbmNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cbmNvbnN0IGFkZFN0eWxlcyA9IChhbk5vZGUsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGFOb2RlID0gYW5Ob2RlO1xuICAgIGNvbnN0IHggPSBhbHBoYS5pbmRleE9mKGFOb2RlLmlkLnNwbGl0KCcnKVswXSk7XG4gICAgY29uc3QgeSA9IGFOb2RlLmlkLnNwbGl0KCcnKVsxXTtcbiAgICBjb25zdCB2YWwgPSBwbGF5ZXIucm93c1t4XVt5XTtcbiAgICBpZih2YWwgPT09ICdNJyl7XG4gICAgICAgIGFOb2RlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgIH1cbiAgICBpZih2YWwgPT09ICdIJyl7XG4gICAgICAgIGFOb2RlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgfVxuICAgIGlmKHZhbCA9PT0gJ0UnKXtcbiAgICAgICAgYU5vZGUuY2xhc3NMaXN0LmFkZCgnZW1wdHknKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYU5vZGUudGV4dENvbnRlbnQgPSB2YWw7XG4gICAgfVxufVxuY29uc3QgYWRkU3R5bGVzMiA9IChhbk5vZGUsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGFOb2RlID0gYW5Ob2RlO1xuICAgIGNvbnN0IHggPSBhbHBoYS5pbmRleE9mKGFOb2RlLmlkLnNwbGl0KCcnKVswXSk7XG4gICAgY29uc3QgeSA9IGFOb2RlLmlkLnNwbGl0KCcnKVsxXTtcbiAgICBjb25zdCB2YWwgPSBwbGF5ZXIucm93c1t4XVt5XTtcbiAgICBpZih2YWwgPT09ICdNJyl7XG4gICAgICAgIGFOb2RlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgIH1cbiAgICBpZih2YWwgPT09ICdIJyl7XG4gICAgICAgIGFOb2RlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgfVxuICAgIC8vIGlmKHZhbCA9PT0gJ0UnKXtcbiAgICAvLyAgICAgYU5vZGUuY2xhc3NMaXN0LmFkZCgnZW1wdHknKVxuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgICAgYU5vZGUudGV4dENvbnRlbnQgPSB2YWw7XG4gICAgLy8gfVxufVxuY29uc3QgZ2V0UGxheWVyID0gKHBsYXllciwgcGxheWVyMiwgdHVybikgPT4ge1xuICAgIGlmKHBsYXllci5wTnVtID09PSB0dXJuKXtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG4gICAgICAgIHJldHVybiBwbGF5ZXIyO1xufVxuY29uc3QgZ2V0T3RoZXJQbGF5ZXIgPSAocGxheWVyLCBwbGF5ZXIyLCB0dXJuKSA9PiB7XG4gICAgaWYocGxheWVyLnBOdW0gIT09IHR1cm4pe1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH1cbiAgICAgICAgcmV0dXJuIHBsYXllcjI7XG59XG5cbmNvbnN0IGNoZWNrRm9yV2luID0gKHBsYXllclVwLCBwbGF5ZXJOZXh0KSA9PiB7XG4gICAgaWYocGxheWVyTmV4dC5hbGxTdW5rKCkpe1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZUJvYXJkJykudGV4dENvbnRlbnQgPSBgQWxsIG9mICR7cGxheWVyTmV4dC5wTnVtfSdzIHNoaXBzIGFyZSBzdW5rLiAke3BsYXllclVwLnBOdW19IHdpbnMhYDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2VCb2FyZCcpLnRleHRDb250ZW50ID0gYEFsbCBvZiBjb21wdXRlcidzIHNoaXBzIGFyZSBzdW5rLiBZb3Ugd2luIWA7XG4gICAgICAgIGNvbnN0IGdyaWRVbml0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VuaXRsJyk7XG4gICAgICAgIGNvbnN0IG1vcmVncmlkVW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1bml0bScpO1xuICAgICAgICBBcnJheS5mcm9tKGdyaWRVbml0cykuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgICAgIHVuaXQucmVwbGFjZVdpdGgodW5pdC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KSAgXG4gICAgICAgIEFycmF5LmZyb20obW9yZWdyaWRVbml0cykuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgICAgIHVuaXQucmVwbGFjZVdpdGgodW5pdC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBwbGF5QWdhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheUFnYWluJyk7XG4gICAgICAgIHBsYXlBZ2Fpbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmNvbnN0IHJlbmRlcldpbiA9IChwbGF5ZXIsIHBsYXllcjIpID0+IHtcbmNvbnN0IG9sZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbm9sZENvbnRhaW5lci5yZW1vdmUoKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5jb25zdCBsb2cgPSBkcmF3Qm9hcmQocGxheWVyMiwgJ2wnKTtcbmxvZy5pZCA9ICdsb2cnO1xuLy8gY29uc3QgbnVtID0gcGxheWVyLnBsYXllck51bTtcbmNvbnN0IG1haW5Cb2FyZCA9IGRyYXdCb2FyZChwbGF5ZXIsICdtJyk7XG5tYWluQm9hcmQuaWQgPSAnbWFpbkJvYXJkJztcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2cpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Cb2FyZCk7XG5cbmNvbnN0IHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdG0nKTtcbkFycmF5LmZyb20odW5pdHMpLmZvckVhY2godW5pdCA9PiB7XG4gICAgYWRkU3R5bGVzKHVuaXQsIHBsYXllcik7XG59KVxuY29uc3QgbHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdGwnKTtcbkFycmF5LmZyb20obHVuaXRzKS5mb3JFYWNoKHVuaXQgPT4ge1xuICAgIGFkZFN0eWxlczIodW5pdCwgcGxheWVyMik7XG59KVxuXG59XG5cbmNvbnN0IHJlbmRlciA9IChwbGF5ZXIsIHBsYXllcjIpID0+IHsgICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2VCb2FyZCcpLnRleHRDb250ZW50ID0gJ1lvdXIgdHVybiEnO1xuY29uc3QgcGxheWVyTnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuQm9hcmQnKS50ZXh0Q29udGVudCk7XG5jb25zdCBvbGRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5vbGRDb250YWluZXIucmVtb3ZlKCk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5pZCA9ICdjb250YWluZXInO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuY29uc3QgbG9nID0gZHJhd0JvYXJkKHBsYXllcjIsICdsJyk7XG5sb2cuaWQgPSAnbG9nJztcbi8vIGNvbnN0IG51bSA9IHBsYXllci5wbGF5ZXJOdW07XG5jb25zdCBtYWluQm9hcmQgPSBkcmF3Qm9hcmQocGxheWVyLCAnbScpO1xubWFpbkJvYXJkLmlkID0gJ21haW5Cb2FyZCc7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobG9nKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQm9hcmQpO1xubG9nLmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gJ0VuZW15IEJvYXJkJztcbm1haW5Cb2FyZC5jaGlsZHJlblszXS50ZXh0Q29udGVudCA9ICdNeSBCb2FyZCc7XG5jb25zdCB1bml0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VuaXRtJyk7XG5BcnJheS5mcm9tKHVuaXRzKS5mb3JFYWNoKHVuaXQgPT4ge1xuICAgIGFkZFN0eWxlcyh1bml0LCBwbGF5ZXIpO1xufSlcbmNvbnN0IGx1bml0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VuaXRsJyk7XG4gICAgQXJyYXkuZnJvbShsdW5pdHMpLmZvckVhY2godW5pdCA9PiB7XG4gICAgICAgIGFkZFN0eWxlczIodW5pdCwgcGxheWVyMik7XG4gICAgfSlcbiAgICBjb25zdCBhdHRhY2sgPSAoZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYXR0YWNraW5nJylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYXllck51bSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybkJvYXJkJykudGV4dENvbnRlbnQpO1xuICAgICAgICBjb25zdCBwbGF5ZXJVcCA9IGdldFBsYXllcihwbGF5ZXIsIHBsYXllcjIsIHBsYXllck51bSk7XG4gICAgICAgIGNvbnN0IG90aGVyUGxheWVyID0gZ2V0T3RoZXJQbGF5ZXIocGxheWVyLCBwbGF5ZXIyLCBwbGF5ZXJOdW0pO1xuICAgICAgICBjb25zdCBhTm9kZSA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCB4ID0gYU5vZGUuaWQuc3BsaXQoJycpWzBdO1xuICAgICAgICBjb25zdCB5ID0gTnVtYmVyKGFOb2RlLmlkLnNwbGl0KCcnKVsxXSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFt4LHldKVxuICAgICAgICBjb25zdCB2YWxpZCA9IG90aGVyUGxheWVyLnJlY2VpdmVBdHRhY2soW3gseV0pO1xuICAgICAgICBpZighdmFsaWQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGVzIHZhbGlkbycpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZUJvYXJkJykudGV4dENvbnRlbnQgPSAnQWxyZWFkeSBndWVzZWQuIFRyeSBhZ2Fpbi4nO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm5Cb2FyZCcpLnRleHRDb250ZW50ID0gb3RoZXJQbGF5ZXIucE51bTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICByZW5kZXIocGxheWVyLCBwbGF5ZXIyKSAgXG4gICAgICAgIC8vIH0sICc1MDAwJylcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tGb3JXaW4ocGxheWVyVXAsIG90aGVyUGxheWVyKSk7XG4gICAgICAgIGlmKCFjaGVja0ZvcldpbihwbGF5ZXJVcCwgb3RoZXJQbGF5ZXIpKXtcbiAgICAgICAgICAgIHJlbmRlcihwbGF5ZXIsIHBsYXllcjIpIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtyZW5kZXJXaW4ocGxheWVyLCBwbGF5ZXIyKX1cbiAgICB9XG4gICAgY29uc3QgZW5hYmxlVXNlckF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgQXJyYXkuZnJvbShsdW5pdHMpLmZvckVhY2godW5pdCA9PiB7XG4gICAgICAgICAgICB1bml0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGF0dGFjayk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG5cbmNvbnN0IGF0dGFja0NvbXAgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29tcHV0ZXIgYXR0YWNraW5nJylcbiAgICAgICAgY29uc3QgcGxheWVyTnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuQm9hcmQnKS50ZXh0Q29udGVudCk7XG4gICAgICAgIGNvbnN0IHBsYXllclVwID0gZ2V0UGxheWVyKHBsYXllciwgcGxheWVyMiwgcGxheWVyTnVtKTtcbiAgICAgICAgY29uc3Qgb3RoZXJQbGF5ZXIgPSBnZXRPdGhlclBsYXllcihwbGF5ZXIsIHBsYXllcjIsIHBsYXllck51bSk7XG4gICAgICAgIGNvbnN0IHggPSBhbHBoYXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coW3gseV0pXG4gICAgICAgIGNvbnN0IHZhbGlkID0gb3RoZXJQbGF5ZXIucmVjZWl2ZUF0dGFjayhbeCx5XSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbGlkKTtcbiAgICAgICAgaWYoIXZhbGlkKXtcbiAgICAgICAgICAgIGF0dGFja0NvbXAoKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm5Cb2FyZCcpLnRleHRDb250ZW50ID0gb3RoZXJQbGF5ZXIucE51bTtcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tGb3JXaW4ocGxheWVyVXAsIG90aGVyUGxheWVyKSk7XG4gICAgICAgIGlmKCFjaGVja0ZvcldpbihwbGF5ZXJVcCwgb3RoZXJQbGF5ZXIpKXtcbiAgICAgICAgICAgIHJlbmRlcihwbGF5ZXIsIHBsYXllcjIpIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge3JlbmRlcldpbihwbGF5ZXIsIHBsYXllcjIpfVxuXG4gICAgICAgICAgXG4gICAgfVxuXG5cblxuZW5hYmxlVXNlckF0dGFjaygpXG5cblxuY29uc3QgZGlzYWJsZVVzZXJBdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZFVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdGwnKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2xvbmluZyB1bml0cyB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXJzJylcbiAgICBBcnJheS5mcm9tKGdyaWRVbml0cykuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgdW5pdC5yZXBsYWNlV2l0aCh1bml0LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfSlcbn1cblxuaWYocGxheWVyTnVtID09PSAyKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZUJvYXJkJykudGV4dENvbnRlbnQgPSAnQ29tcHV0ZXIgYXR0YWNraW5nISc7XG4gICAgZGlzYWJsZVVzZXJBdHRhY2soKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXR0YWNrQ29tcCgpIFxuICAgIH0sICcxMDAwJylcbiAgICA7XG59XG5lbHNle2VuYWJsZVVzZXJBdHRhY2soKX1cblxuXG59XG5cblxuXG5cblxuXG4gICBcblxuXG4vLyBjb25zdCBtaXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2EwbCcpO1xuLy8gbWlzcy5jbGFzc0xpc3QuYWRkKCdtaXNzJylcblxuLy8gY29uc3QgaGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ExbCcpO1xuLy8gaGl0LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXIiLCJpbXBvcnQgbWFudWFsRHJhZyBmcm9tIFwiLi9tYW51YWxEcmFnXCI7XG5cbmNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cbmNvbnN0IHByaW50U2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIHNoaXBzQXJyYXkuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgICAgY29uc29sZS5sb2coc2hpcEVsLm5hbWUpXG4gICAgfSlcbiAgfVxuZnVuY3Rpb24gZHJhZyhldikge1xuICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBldi50YXJnZXQuaWQpO1xuICAgIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnSXRlbScpO1xuICAgIGNvbnN0IG5vZGUgPSBldi50YXJnZXQ7XG4gICAgc2V0VGltZW91dCAoKCkgPT4ge1xuICAgICAgICBub2RlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgfSwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaGRyYWcoZXYpIHtcbiAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZXYudGFyZ2V0LmlkKTtcbiAgICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZ0l0ZW0nKTtcbiAgICBjb25zdCBub2RlID0gZXYudGFyZ2V0O1xuICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgICAgbm9kZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0sIDEpO1xuICB9XG5cblxuZnVuY3Rpb24gcGxhY2UoZXYpe1xuICAgIGNvbnN0IG5vZGUgPSBldi50YXJnZXQ7XG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdJdGVtJyk7XG4gICAgc2V0VGltZW91dCAoKCkgPT4ge1xuICAgICAgICBub2RlLnN0eWxlLnZpc2liaWxpdHkgPSBcIlwiO1xuICAgICAgfSwgMSk7XG59XG5cbi8vIGNvbnN0IHBsYXllclBsYWNlID0gKGNvbDEsIHJvdzEsIGxlbmd0aCwgcm90LCBwbGF5ZXIsIG5hbWUpID0+IHtcbi8vICAgICBjb25zdCBuID0gbmFtZTtcbi8vICAgICBjb25zdCBjb2wgPSBjb2wxIC0gMTtcbi8vICAgICBjb25zdCByb3cgPSBhbHBoYVtyb3cxIC0gMl07XG4vLyAgICAgY29uc3QgY29vcmQgPSBbcm93LCBjb2xdO1xuLy8gICAgIGNvbnN0IGxlbiA9IGxlbmd0aDtcbi8vICAgICBjb25zdCBpc1JvdGF0ZWQgPSByb3Q7XG4vLyAgICAgbGV0IGRpciA9ICdyJztcbi8vICAgICBpZihpc1JvdGF0ZWQpe1xuLy8gICAgICAgICBkaXIgPSAnZCdcbi8vICAgICB9XG4vLyAgICAgY29uc3QgdmFsaWQgPSBwbGF5ZXIucGxhY2VTaGlwKGxlbixjb29yZCxkaXIsbik7XG4vLyAgICAgcmV0dXJuIHZhbGlkO1xuLy8gfVxuXG5mdW5jdGlvbiBzZWxlY3QoZXYpe1xuICAgIGNvbnN0IG9sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdGVkJyk7XG4gICAgaWYob2xkWzBdICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBvbGRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgIH1cbiAgICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn1cblxuLy8gZnVuY3Rpb24gcm90YXRlKGV2KXtcbi8vICAgICBpZihldi5rZXkgPT09ICdyJyl7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdyb3RhdGluZycpO1xuLy8gICAgICAgICAvLyBpZiBwYXJlbnQgbm9kZSBpcyBzaGlwaG9sZCBkbywgbm9ybWFsLCBvdGhlciB3aXNlLCBnZXQgc3RhcnQgY29vcmRcbi8vICAgICAgICAgLy8gYnVpbGQgYSBzaGlwIGluIG9wcG9zaXRlIGRpcmVjdGlvbiAoaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCksIGJhc2ljYWxseSB0cmVhdCBhcyBhIGRyb3AgaWYgaXQncyBhbHJlYWR5IG9mIHRoZSBib2FyZC5cbi8vICAgICAgICAgLy8gaWYgc2hpcCBpcyB2YWxpZCBvdmVyd3JpdGVcbi8vICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdLnBhcmVudEVsZW1lbnQ7XG4vLyAgICAgICAgIGxldCBjdXJyZW50Um90YXRpb24gPSBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm07XG4vLyAgICAgICAgIGlmKChjdXJyZW50Um90YXRpb24gPT09ICcnKXx8KGN1cnJlbnRSb3RhdGlvbiA9PT0gJ3JvdGF0ZSgwZGVnKScpICl7XG4vLyAgICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSAwO1xuLy8gICAgICAgICAgICAgc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSg5MGRlZylgO1xuLy8gICAgICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZWQnLCAndHJ1ZScpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2V7XG4vLyAgICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSBjdXJyZW50Um90YXRpb24uc3BsaXQoJycpO1xuLy8gICAgICAgICAgICAgbGV0IG5ld1JvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uWzddICsgY3VycmVudFJvdGF0aW9uWzhdO1xuLy8gICAgICAgICAgICAgbmV3Um90YXRpb24gPSBOdW1iZXIobmV3Um90YXRpb24pO1xuLy8gICAgICAgICAgICAgbmV3Um90YXRpb24gLT0gOTA7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdSb3RhdGlvbilcbi8vICAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtuZXdSb3RhdGlvbn1kZWcpYDtcbi8vICAgICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgJ3RydWUnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZCk7XG4vLyAgICAgICAgIGlmKHNlbGVjdGVkLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYm9hcmQnKXtcbi8vICAgICAgICAgICAgIGNvbnN0IGlzUm90YXRlZCA9IHNlbGVjdGVkLmRhdGFzZXQucm90YXRlZDtcbi8vICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE51bWJlcihzZWxlY3RlZC5kYXRhc2V0LnNoaXApO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGdBcmVhID0gc2VsZWN0ZWQuc3R5bGUuZ3JpZEFyZWEuc3BsaXQoJycpO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNvbDEgPSBOdW1iZXIoZ0FyZWFbNF0pIC0gMjtcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb2wxKTtcbi8vICAgICAgICAgICAgICAgICBjb25zdCByb3cxID0gTnVtYmVyKGdBcmVhWzBdKSAtIDI7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm93MSk7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgYVBsYXllciA9IHNlbGVjdGVkLnBhcmVudEVsZW1lbnQuZGF0YXNldC5wbGF5ZXI7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgaXNWYWxpZExvYyA9IHBsYXllclBsYWNlKGNvbDEsIHJvdzEsIGxlbmd0aCwgaXNSb3RhdGVkLCBhUGxheWVyLCBzZWxlY3RlZC5kYXRhc2V0Lm5hbWUpIFxuLy8gICAgICAgICAgICAgICAgIGlmKGlzVmFsaWRMb2Mpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYVBsYXllci5yZW1vdmVTaGlwKHNlbGVjdGVkLmRhdGFzZXQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICBwcmludFNoaXBzKGFQbGF5ZXIuc2hpcHMpXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfSAgXG4vLyB9XG5cblxuZnVuY3Rpb24gZHJhZ3N0YXJ0IChldikge1xuICAgIG1hbnVhbERyYWcoZXYudGFyZ2V0KVxuICAgIH07XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCByb3RhdGUpXG5cbmNvbnN0IG5hbWVTaGlwID0gKGwpID0+IHtcbiAgICBpZiAobCA9PT0gNSl7XG4gICAgICByZXR1cm4gJ2NhcnJpZXInO1xuICAgIH1cbiAgICBpZiAobCA9PT0gNCl7XG4gICAgICByZXR1cm4gJ2JhdHRsZXNoaXAnO1xuICAgIH1cbiAgICBpZiAobCA9PT0gMyl7XG4gICAgICByZXR1cm4gJ2NydWlzZXInO1xuICAgIH1cbiAgICBpZiAobCA9PT0gMil7XG4gICAgICByZXR1cm4gJ2Rlc3Ryb3llcic7XG4gICAgfVxuICAgIHJldHVybiAnZXJyb3InXG4gIH1cblxuY29uc3QgZHJhd1NoaXAgPSAobGVuKSA9PiB7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2FuY2hvcicpO1xuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcCcsIGxlbik7XG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZVNoaXAobGVuKSk7XG4gICAgY29uc3QgZmFrZXNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmYWtlc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgLy8gZmFrZXNoaXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgIC8vIGZha2VzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgIC8vIGZha2VzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBwbGFjZSk7XG4gICAgLy8gZmFrZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2VsZWN0KTtcbiAgICBmYWtlc2hpcC5zdHlsZS53aWR0aCA9IGAke2xlbiAqIDI1fXB4YDtcbiAgICBhbmNob3IuYXBwZW5kQ2hpbGQoZmFrZXNoaXApXG4gICAgLy8gYW5jaG9yLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoZHJhZyk7XG4gICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaGRyYWcpO1xuICAgIC8vIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgcGxhY2UpO1xuICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2VsZWN0KTtcbiAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHNlbGVjdClcbiAgICByZXR1cm4gYW5jaG9yO1xufVxuXG5cblxuY29uc3QgZHJhd1NoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBkaXZzID0gW107XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCg1KSk7XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCg0KSk7XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCgzKSk7XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCgzKSk7XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCgyKSk7XG4gICAgcmV0dXJuIHNoaXBkaXZzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkcmF3U2hpcHNcblxuXG5cblxuXG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIGdlblJvdyhsKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKGkgPCBsKSB7XG4gICAgYXJyYXkucHVzaChcIkVcIik7XG4gICAgaSArPSAxO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSb3dzKGwpIHtcbiAgY29uc3Qgcm93cyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgbCkge1xuICAgIHJvd3MucHVzaChnZW5Sb3cobCkpO1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gcm93cztcbn1cblxuY29uc3QgZ2FtZWJvYXJkID0gKGwsIHB2YWwpID0+IHtcbiAgY29uc3QgcE51bSA9IHB2YWw7XG4gIGNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuICBjb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcbiAgY29uc3Qgcm93cyA9IGdlbmVyYXRlUm93cyhsKTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBzaGlwcztcblxuICBjb25zdCB2YWxpZExlbmd0aCA9IChsZW4pID0+IHtcbiAgICBsZXQgc2hpcFR5cGUgPSAwO1xuICAgIGdldFNoaXBzKCkuZm9yRWFjaCgoYVNoaXApID0+IHtcbiAgICAgIGlmIChhU2hpcC5sZW5ndGggPT09IGxlbikge1xuICAgICAgICBzaGlwVHlwZSArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxlbiA9PT0gMikge1xuICAgICAgaWYgKHNoaXBUeXBlID4gMSkge1xuICAgICAgICBjb25zb2xlLmxvZygnMiBzaGlwIGFscmVhZHkgb24gbG9nZ2VkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGVuID09PSAzKSB7XG4gICAgICBpZiAoc2hpcFR5cGUgPiAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcyIDMgc2hpcHMgYWxyZWFkeSBvbiBsb2dnZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsZW4gPT09IDUpIHtcbiAgICAgIGlmIChzaGlwVHlwZSA+IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJzIgMyBzaGlwcyBhbHJlYWR5IG9uIGxvZ2dlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICBpZiAobGVuID09PSA0KSB7XG4gICAgICBpZiAoc2hpcFR5cGUgPiAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCc0IHNoaXAgYWxyZWFkeSBvbiBsb2dnZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgbWF0Y2ggPSAoY29vcmQxLCBjb29yZDIpID0+IHtcbiAgICBpZiAoY29vcmQxWzBdID09PSBjb29yZDJbMF0gJiYgY29vcmQxWzFdID09PSBjb29yZDJbMV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcEJ5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgICAgaWYoc2hpcEVsLm5hbWUgPT09IG5hbWUpe1xuICAgICAgICByZXR1cm4gc2hpcEVsO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgY29uc3QgcHJpbnRTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgc2hpcHNBcnJheS5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaGlwRWwubmFtZSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXBFbC5jb29yZHMpXG4gICAgfSlcbiAgfVxuICBjb25zdCBvdmVybGFwcyA9IChhU2hpcCwgbmV3U2hpcCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdkbyB0aGUgZm9sbG93aW5nIG92ZXJsYXA/JylcbiAgICAvLyBjb25zb2xlLmxvZyhhU2hpcC5uYW1lKTtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdTaGlwLm5hbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKCduZXcgc2hpcCBpcyBMT0NBVEVEIGF0OicpXG4gICAgLy8gY29uc29sZS5sb2cobmV3U2hpcC5jb29yZHMpXG4gICAgaWYoYVNoaXAubGVuZ3RoID09PSBuZXdTaGlwLmxlbmd0aCl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBvdmVybGFwID0gZmFsc2U7XG4gICAgYVNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PlxuICAgICAgbmV3U2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmRwKSA9PiB7XG4gICAgICAgIGlmIChtYXRjaChjb29yZHAsIGNvb3JkKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3VuZCBvdmVybGFwJylcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZHAsIGNvb3JkKVxuICAgICAgICAgIG92ZXJsYXAgPSB0cnVlO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gb3ZlcmxhcDtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBJbk1hdHJpeCA9IChhU2hpcCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGFTaGlwKVxuICAgIGFTaGlwLmNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBhbHBoYS5pbmRleE9mKGNvb3JkWzBdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3JkWzBdKVxuICAgICAgcm93c1tpbmRleF1bY29vcmRbMV1dID0gc2hpcHMuaW5kZXhPZihhU2hpcCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdXBkYXRlTWF0cml4ID0gKCkgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goc2hpcEVsID0+IHtcbiAgICAgIHBsYWNlU2hpcEluTWF0cml4KHNoaXBFbClcbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNoaXAgPSAobmFtZSkgPT4ge1xuICAgIGxldCB0aGVTaGlwO1xuICAgIC8vIGNvbnNvbGUubG9nKGByZW1vdmluZyBhICR7bmFtZX0gZnJvbWApXG4gICAgLy8gY29uc29sZS5sb2coc2hpcHMpXG4gICAgc2hpcHMuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgICAgaWYoc2hpcEVsLm5hbWUgPT09IG5hbWUpe1xuICAgICAgICB0aGVTaGlwID0gc2hpcEVsO1xuICAgICAgfVxuICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2codGhlU2hpcCk7XG4gICAgaWYgKHRoZVNoaXAgIT09IHVuZGVmaW5lZCl7XG4gICAgICBjb25zdCBpbmRleCA9IHNoaXBzLmluZGV4T2YodGhlU2hpcClcbiAgICAgIHNoaXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHByaW50U2hpcHMoc2hpcHMpO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFNoaXBOYW1lcyA9IChzaGlwc0FycikgPT4ge1xuICAgIGNvbnN0IG5hbWVzID0gW107XG4gICAgc2hpcHNBcnIuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgICAgbmFtZXMucHVzaChzaGlwRWwubmFtZSlcbiAgICB9KVxuICAgIHJldHVybiBuYW1lcztcbiAgfVxuICBjb25zdCBzaGlwRXhpc3RzID0gKG4pID0+IHtcbiAgICBjb25zdCBuYW1lcyA9IGN1cnJlbnRTaGlwTmFtZXMoc2hpcHMpO1xuICAgIGlmKG5hbWVzLmluY2x1ZGVzKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGxlbiwgY29vcmQsIGRpciwgbmFtZSwgY29tcCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdwbGFjaW5nIHNoaXA6Jyk7XG4gICAgY29uc29sZS5sb2cobmFtZSlcbiAgICBjb25zb2xlLmxvZygnY3VycmVudCBzaGlwcyBhcmU6JylcbiAgICBjb25zb2xlLmxvZyhwcmludFNoaXBzKHNoaXBzKSlcbiAgICBsZXQgZ29vZExlbmd0aCA9IHZhbGlkTGVuZ3RoKGxlbik7XG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgLy9jaGVjayBpZiBzaGlwIGFscmVhZHkgZXhpc3RzLCBpZiBzbywgcmVtb3ZlIG9sZCBzaGlwXG4gICAgaWYoIWNvbXApe1xuICAgICAgaWYgKHNoaXBFeGlzdHMobmFtZSkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIHNoaXAnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmFtZSk7XG4gICAgICAgIHJlbW92ZVNoaXAobmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vdHJ5IG1ha2luZyBhIHNoaXAsIGlmIGl0IG1ha2VzIG9uZSwgY2hlY2sgaWYgaXQgb3ZlcmxhcHMsIGlmIGl0IGRvZXMsIGRvbid0IHB1c2ggaXQuIFxuICAgICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobGVuLCBjb29yZCwgZGlyLCBuYW1lKTtcbiAgICAgIGlmKG5ld1NoaXAgIT09IG51bGwpe1xuICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgIGlmKHNoaXBzLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgc2hpcHMuZm9yRWFjaCgoYVNoaXApID0+IHtcbiAgICAgICAgICAgIGlmIChvdmVybGFwcyhhU2hpcCwgbmV3U2hpcCkpIHtcbiAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTsgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmKHZhbGlkID09PSB0cnVlKXtcbiAgICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApOyBcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2hpcCBwdXNoZWQgd2FzOicpXG4gICAgICAgICAgY29uc29sZS5sb2cobmV3U2hpcC5uYW1lKVxuICAgICAgICAgIHByaW50U2hpcHMoc2hpcHMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHVwZGF0ZU1hdHJpeChuZXdTaGlwKTtcbiAgICBcbiAgICByZXR1cm4gdmFsaWQ7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZWNlaXZlZCBhdHRhY2snICsgY29vcmRbMF0gKyBjb29yZFsxXSlcbiAgICBjb25zdCBpbmRleCA9IGFscGhhLmluZGV4T2YoY29vcmRbMF0pO1xuICAgIGNvbnN0IGN1cnJlbnRWYWwgPSByb3dzW2luZGV4XVtjb29yZFsxXV07XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFZhbClcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRWYWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJvd3NbaW5kZXhdW2Nvb3JkWzFdXSA9IFwiSFwiO1xuICAgICAgc2hpcHNbY3VycmVudFZhbF0uaGl0KGNvb3JkKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFZhbCA9PT0gXCJFXCIpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50IHZhbCB3YXMgZScpXG4gICAgICByb3dzW2luZGV4XVtjb29yZFsxXV0gPSBcIk1cIjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IHN1bmsgPSB0cnVlO1xuICAgIC8vIGNvbnNvbGUubG9nKGBzdW5rIGlzICR7c3Vua31gKVxuICAgIHNoaXBzLmZvckVhY2goYVNoaXAgPT4ge1xuICAgICAgY29uc29sZS5sb2coYCR7YVNoaXAubmFtZX0gaXMgc3Vuaz8gJHthU2hpcC5zdW5rfWApXG4gICAgICBjb25zb2xlLmxvZyhgJHthU2hpcC5uYW1lfSBoaXRsb2cgaXM6ICR7YVNoaXAuaGl0TG9nfWApXG4gICAgICBpZiAoIWFTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3VuaztcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwQnlTdGFydCA9IChjb29yZCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdnZXR0aW5nIHNoaXAnKVxuICAgIHNoaXBzLmZvckVhY2goYVNoaXAgPT4ge1xuICAgICAgaWYoKGFTaGlwLmNvb3Jkc1swXVswXT09PSBjb29yZFswXSkgJiYgKGFTaGlwLmNvb3Jkc1swXVsxXT09PSBjb29yZFsxXSkpe1xuICAgICAgICByZXR1cm4gYVNoaXA7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7IHJvd3MsIHNoaXBzLCBwbGFjZVNoaXAsIGdldFNoaXBzLCBvdmVybGFwcywgbWF0Y2gsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmssIHJlbW92ZVNoaXAsIGdldFNoaXBCeVN0YXJ0LCBnZXRTaGlwQnlOYW1lLCBwTnVtLCB1cGRhdGVNYXRyaXh9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkO1xuXG5cbiIsImNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cbmNvbnN0IHByaW50U2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICBzaGlwc0FycmF5LmZvckVhY2goc2hpcEVsID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwRWwubmFtZSlcbiAgfSlcbn1cblxuY29uc3QgcmVtb3ZlU3R5bGUgPSAocHJldmlvdXNFbGVtKSA9PiB7XG4gICAgY29uc3QgZHJhZ2xlYXZlID0gbmV3IEV2ZW50KFwiZHJhZ2xlYXZlXCIpO1xuICAgIHByZXZpb3VzRWxlbS5kaXNwYXRjaEV2ZW50KGRyYWdsZWF2ZSk7XG4gICAgY29uc3QgdG91Y2hsZWF2ZSA9IG5ldyBFdmVudChcInRvdWNobGVhdmVcIik7XG4gICAgcHJldmlvdXNFbGVtLmRpc3BhdGNoRXZlbnQodG91Y2hsZWF2ZSk7XG59XG5cbmNvbnN0IHN0eWxlTm9kZSA9ICh0aGVFbGVtKSA9PiB7XG4gICAgY29uc3QgZHJhZ292ZXIgPSBuZXcgRXZlbnQoXCJkcmFnb3ZlclwiKTtcbiAgICB0aGVFbGVtLmRpc3BhdGNoRXZlbnQoZHJhZ292ZXIpO1xuICAgIGNvbnN0IHRvdWNob3ZlciA9IG5ldyBFdmVudChcInRvdWNobW92ZVwiKTtcbiAgICB0aGVFbGVtLmRpc3BhdGNoRXZlbnQodG91Y2hvdmVyKTtcbiAgICAgICAgfVxuXG5jb25zdCBwbGF5ZXJQbGFjZSA9IChjb2wxLCByb3cxLCBsZW5ndGgsIHJvdCwgcGxheWVyLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuID0gbmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGNvbDEgLSAyO1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gYWxwaGFbcm93MSAtIDJdO1xuICAgICAgICAgICAgY29uc3QgY29vcmQgPSBbcm93LCBjb2xdO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gbGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgaXNSb3RhdGVkID0gcm90O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXNSb3RhdGVkKTtcbiAgICAgICAgICAgIGxldCBkaXI7XG4gICAgICAgICAgICBpZihpc1JvdGF0ZWQgPT09ICd0cnVlJyl7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRpciA9ICdkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIGRpciA9ICdyJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRpcik7XG4gICAgICAgICAgICBjb25zdCB2YWxpZCA9IHBsYXllci5wbGFjZVNoaXAobGVuLGNvb3JkLGRpcixuKTtcbiAgICAgICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgICAgfVxuLy8gY29uc3QgcGxhY2VtZW50Q2hlY2sgPSAobGVuLCByb3RhdGVkLCByb3cxLCBjb2wxKSA9PiB7XG4vLyAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4vLyAgICAgaWYocm90YXRlZCl7XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gMil7XG4vLyAgICAgICAgICAgICBpZiAocm93MSA8IDExKXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gMyl7XG4vLyAgICAgICAgICAgICBpZiAocm93MSA8IDEwKXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNCl7XG4vLyAgICAgICAgICAgICBpZiAocm93MSA8IDkpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYobGVuID09PSA1KXtcbi8vICAgICAgICAgICAgIGlmIChyb3cxIDwgOCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgIH0gXG4vLyAgICAgZWxzZSB7XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gMil7XG4vLyAgICAgICAgICAgICBpZiAoY29sMSA8IDExKXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gMyl7XG4vLyAgICAgICAgICAgICBpZiAoY29sMSA8IDEwKXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNCl7XG4vLyAgICAgICAgICAgICBpZiAoY29sMSA8IDkpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYobGVuID09PSA1KXtcbi8vICAgICAgICAgICAgIGlmIChjb2wxIDwgOCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICAvL2NvbnNvbGUubG9nKGxlbiwgcm90YXRlZCwgY29sMSwgcm93MSwgdmFsaWQpO1xuLy8gICAgIHJldHVybiB2YWxpZDtcbi8vIH1cblxuY29uc3QgaXNSb3RhdGVkID0gKHZhbCkgPT4ge1xuICAgIGlmKHZhbC5sZW5ndGggIT09IDApe1xuICAgICAgICBpZih2YWxbN10gIT09ICcwJyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IHBpeGVsczJMZW5ndGggPSAobGVuKSA9PiB7XG4gICAgaWYobGVuID09PSAnMTI1cHgnKXtcbiAgICAgICAgcmV0dXJuIDVcbiAgICB9XG4gICAgaWYobGVuID09PSAnMTAwcHgnKXtcbiAgICAgICAgcmV0dXJuIDRcbiAgICB9XG4gICAgaWYobGVuID09PSAnNzVweCcpe1xuICAgICAgICByZXR1cm4gM1xuICAgIH1cbiAgICBpZihsZW4gPT09ICc1MHB4Jyl7XG4gICAgICAgIHJldHVybiAyXG4gICAgfVxufVxuXG4vLyBjb25zdCBhbGxBcmVhcyA9IChhcnJheU9mQW5jaG9ycykgPT4ge1xuLy8gICAgIGNvbnN0IGFsbHNoaXBBcmVhcyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXTtcblxuLy8gfVxuXG4vLyBjb25zdCBjYWxjQXJlYSA9IChjb2wxLCByb3cxLCBsZW4sIHJvdGF0ZWQpID0+IHtcbi8vICAgICBsZXQgY29sID0gY29sMTtcbi8vICAgICBsZXQgcm93ID0gcm93MTtcbi8vICAgICBjb25zdCBhcnJheU9mVGFrZW5FbGVtcyA9IFtdO1xuLy8gICAgIGNvbnN0IGFycmF5T2ZUYWtlbklEcyA9IFtdO1xuLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW4tMTspe1xuLy8gICAgICAgICBsZXQgaWQ7XG4vLyAgICAgICAgIGlmKCFyb3RhdGVkKXtcbi8vICAgICAgICAgICAgIHJvdyA9IGFscGhhW3Jvd107XG4vLyAgICAgICAgICAgICBpZCA9IGAke3Jvd30ke2NvbCArIDF9bWBcbi8vICAgICAgICAgYXJyYXlPZlRha2VuSURzLnB1c2goaWQpO1xuLy8gICAgICAgICBjb2wgKz0gMTt9XG4vLyAgICAgICAgIGVsc2V7XG4vLyAgICAgICAgICAgICBjb25zdCB0aGVSb3cgPSBhbHBoYVtyb3ddO1xuLy8gICAgICAgICAgICAgaWQgPSBgJHt0aGVSb3d9JHtjb2x9bWBcbi8vICAgICAgICAgYXJyYXlPZlRha2VuSURzLnB1c2goaWQpO1xuLy8gICAgICAgICByb3cgKz0gMTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpKz0xO1xuLy8gICAgIH1cbi8vICAgICBhcnJheU9mVGFrZW5JRHMuZm9yRWFjaChpZCA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGVsZW0gPSBnZXRFbGVtZW50QnlJZChpZCk7XG4vLyAgICAgICAgIGFycmF5T2ZUYWtlbkVsZW1zLnB1c2goZWxlbSk7XG4vLyAgICAgfSlcbi8vICAgICByZXR1cm4gYXJyYXlPZlRha2VuRWxlbXM7XG4vLyB9XG5cbi8vIGNvbnN0IGlzVGFrZW4gPSAobm9kZSkgPT4ge1xuLy8gICAgIGlmKG5vZGUuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKXtcbi8vICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBmYWxzZTtcbi8vIH1cblxuY29uc3QgbWFudWFsRHJhZyA9IChub2RlLCBwbGF5ZXIpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Cb2FyZFwiKTtcbiAgY29uc3QgYmFsbCA9IG5vZGU7XG4gIGNvbnN0IGxlbmd0aCA9IHBpeGVsczJMZW5ndGgobm9kZS5jaGlsZHJlblswXS5zdHlsZS53aWR0aCk7XG4gIFxuLy8gICBsZXQgaW5kZXggPSBBcnJheShiYWxsLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pLmluZGV4T2YoYmFsbCk7XG5cbiAgIGZ1bmN0aW9uIGRyYWdJdGVtIChldmVudCkge1xuICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcImRyYWdJdGVtXCIpO1xuICAgIC8vICgxKSBzdGFydCB0aGUgcHJvY2Vzc1xuICAgIGNvbnN0IG9nUGFyZW50ID0gYmFsbC5wYXJlbnRFbGVtZW50O1xuICAgIC8vIGNvbnNvbGUubG9nKCdPRyBwYXJlbnQgaXM6JylcbiAgICAvLyBjb25zb2xlLmxvZyhvZ1BhcmVudClcbiAgICBsZXQgcm90YXRlZCA9IG5vZGUuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCcnKTtcbiAgICByb3RhdGVkID0gaXNSb3RhdGVkKHJvdGF0ZWQpO1xuICAgIGJhbGwuc2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZWQnLCByb3RhdGVkKVxuICAgIC8vIGNvbnNvbGUubG9nKGxlbmd0aCwgcm90YXRlZClcbiAgICAvLyAoMikgcHJlcGFyZSB0byBtb3Zpbmc6IG1ha2UgYWJzb2x1dGUgYW5kIG9uIHRvcCBieSB6LWluZGV4XG4gICAgYmFsbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBiYWxsLnN0eWxlLnpJbmRleCA9IDEwMDA7XG5cbiAgICAvLyBtb3ZlIGl0IG91dCBvZiBhbnkgY3VycmVudCBwYXJlbnRzIGRpcmVjdGx5IGludG8gYm9keVxuICAgIC8vIHRvIG1ha2UgaXQgcG9zaXRpb25lZCByZWxhdGl2ZSB0byB0aGUgYm9keVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJhbGwpO1xuICAgIC8vIGJvYXJkLmFwcGVuZENoaWxkKGJhbGwpO1xuICAgIC8vIC4uLmFuZCBwdXQgdGhhdCBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgYmFsbCB1bmRlciB0aGUgY3Vyc29yXG4gICAgbGV0IGFuSUQ7XG4gICAgbGV0IHRoZUVsZW07XG4gICAgbGV0IHByZXZpb3VzRWxlbTtcbiAgICAvLyBjZW50ZXJzIHRoZSBiYWxsIGF0IChwYWdlWCwgcGFnZVkpIGNvb3JkaW5hdGVzXG4gICAgZnVuY3Rpb24gbW92ZUF0KHBhZ2VYLCBwYWdlWSkge1xuICAgICAgYmFsbC5zdHlsZS5sZWZ0ID0gYCR7cGFnZVggLSBiYWxsLm9mZnNldFdpZHRoIC8gMn1weGA7XG4gICAgICBiYWxsLnN0eWxlLnRvcCA9IGAke3BhZ2VZIC0gYmFsbC5vZmZzZXRIZWlnaHQgLyAyfXB4YDtcbiAgICAgIGNvbnN0IGRyb3BFbGVtTGlzdCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KHBhZ2VYLCBwYWdlWSk7XG5cbiAgICAgIGRyb3BFbGVtTGlzdC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGFzc2xpc3QnKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhBcnJheS5mcm9tKGVsZW0uY2xhc3NMaXN0KSlcbiAgICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJ1bml0bVwiKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGNvbnRhaW5zIGl0ISByZXR1cm4gSUQ6ICR7ZWxlbS5pZH1gKTtcbiAgICAgICAgICAgIGFuSUQgPSBlbGVtLmlkO1xuICAgICAgICAgICAgdGhlRWxlbSA9IGVsZW07XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHN0eWxlTm9kZSh0aGVFbGVtKSwgNTAwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocHJldmlvdXNFbGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGVsZW0uaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3ByZXZpb3VzRWxlbS5pZH0gdnMuICR7ZWxlbS5pZH1gKTtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNFbGVtICE9PSBlbGVtKSB7XG4gICAgICAgICAgICAgICAgICByZW1vdmVTdHlsZShwcmV2aW91c0VsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBwcmV2aW91c0VsZW0gPSB0aGVFbGVtO1xuICAgICAgLy8gc3R5bGVOb2RlKGRyb3BFbGVtKVxuICAgIH1cblxuICAgIG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXYpIHtcbiAgICAgIG1vdmVBdChldi5wYWdlWCwgZXYucGFnZVkpO1xuICAgICAgLy8gY29uc3QgdW5FbGVtID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RyYWdob3ZlcicpWzBdO1xuICAgICAgLy8gZHJvcEVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2hvdmVyJylcbiAgICB9XG5cbiAgICAvLyAoMykgbW92ZSB0aGUgYmFsbCBvbiBtb3VzZW1vdmVcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICBsZXQgaW5mbztcbiAgICAvLyAoNCkgZHJvcCB0aGUgYmFsbCwgcmVtb3ZlIHVubmVlZGVkIGhhbmRsZXJzXG4gICAgYmFsbC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk1PVVNFVVAhXCIpO1xuICAgICAgYmFsbC5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XG4gICAgICBiYWxsLnN0eWxlLmxlZnQgPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS50b3AgPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS56SW5kZXggPSBcIlwiO1xuICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ0l0ZW1cIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbklEKTtcbiAgICAgIGlmIChhbklEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJRCBXT1JLRUQhXCIpO1xuICAgICAgICBjb25zdCBsb2MgPSBhbklELnNwbGl0KFwiXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2MpO1xuICAgICAgICBjb25zdCBjb2wxID0gTnVtYmVyKGxvY1sxXSkgKyAyO1xuICAgICAgICBjb25zdCBjb2wyID0gY29sMSArIDE7XG4gICAgICAgIGNvbnN0IHJvdzEgPSBhbHBoYS5pbmRleE9mKGxvY1swXSkgKyAyO1xuICAgICAgICBjb25zdCByb3cyID0gcm93MSArIDE7XG4gICAgICAgIC8vIGNvbnN0IGRyb3BzaGlwID0gbmV3IEN1c3RvbUV2ZW50KFwiZHJvcHNoaXBcIix7IGRldGFpbDoge2NvbDogY29sMS0xLCByb3c6IChyb3cxLTIpLCBsZW46IGxlbmd0aCwgcm90OiByb3RhdGVkfX0gKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChkcm9wc2hpcClcbiAgICAgICAgLy8gY29uc3Qgbm90VGFrZW4gPSAoIWlzVGFrZW4odGhlRWxlbSkpO1xuICAgICAgICAvLyBjb25zdCB2YWxpZCA9IHBsYWNlbWVudENoZWNrKGxlbmd0aCwgcm90YXRlZCwgcm93MSwgY29sMSkgJiYgbm90VGFrZW47XG4gICAgICAgIGNvbnN0IGFtUm90YXRlZCA9IGJhbGwuZGF0YXNldC5yb3RhdGVkO1xuICAgICAgICBjb25zdCBpc1ZhbGlkTG9jID0gcGxheWVyUGxhY2UoY29sMSwgcm93MSwgbGVuZ3RoLCBhbVJvdGF0ZWQsIHBsYXllciwgYmFsbC5kYXRhc2V0Lm5hbWUpIFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnV0FzIEkgVkFMSUQ/JylcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXNWYWxpZExvYylcbiAgICAgICAgaWYoaXNWYWxpZExvYyl7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coaXNWYWxpZExvYylcbiAgICAgICAgICAgIGJhbGwuc3R5bGUuZ3JpZEFyZWEgPSBgJHtyb3cxfS8ke2NvbDF9LyR7cm93Mn0vJHtjb2wyfWA7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAgICAgICAgIGluZm8gPSBbW3JvdzEsIGNvbDFdLCBsZW5ndGgsIHJvdGF0ZWRdO1xuICAgICAgICAgICAgLy8gaWYob2dQYXJlbnQuY2xhc3NMaXN0WzBdICE9PSAnc2hpcEhvbGQnKXtcbiAgICAgICAgICAgIC8vICAgICBwbGF5ZXIucmVtb3ZlU2hpcChiYWxsLmRhdGFzZXQubmFtZSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBwcmludFNoaXBzKHBsYXllci5zaGlwcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYHRoZSBvZyBwYXJlbnQgaXMgbm93OiAke29nUGFyZW50fWApXG4gICAgICAgICAgb2dQYXJlbnQuYXBwZW5kQ2hpbGQoYmFsbCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGUgb2cgcGFyZW50IGlzIG5vdzogJHtvZ1BhcmVudH1gKVxuICAgICAgICBvZ1BhcmVudC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAgIGNvbnN0IHN0eWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RyYWdob3ZlcicpO1xuICAgICAgQXJyYXkuZnJvbShzdHlsZWQpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHJlbW92ZVN0eWxlKGVsZW1lbnQpfSlcbiAgICAgIGJhbGwub25tb3VzZXVwID0gbnVsbDtcbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH07XG4gIH07XG4gIGJhbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ0l0ZW0pXG4gIGJhbGwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGRyYWdJdGVtKVxuICBiYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdJdGVtKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFudWFsRHJhZztcblxuLy93aGVuIGEgc2hpcCB0aGF0IGhhcyBiZWVuIHBsYWNlZCBpcyBwaWNrIHVwIChyZWFkIHBhcmVudCBub2RlKSBPUiByb3RhdGVkIVxuLy90aGVuIGlmIGl0IGNyZWF0ZXMgYSB2YWxpZCBzaGlwLCBvdmVyIHdyaXRlIHRoZSBvbGQgc2hpcC5cblxuXG4iLCJmdW5jdGlvbiB2YWxpZEVudHJ5KGxlbmd0aCwgc3RhcnRQb2ludCwgZGlyZWN0aW9uLCBhbHBoYSkge1xuICAvLyBjb25zb2xlLmxvZyhgc3RhcnQgcG9pbnQgaXMgJHtzdGFydFBvaW50fWApXG4gIGlmIChkaXJlY3Rpb24gPT09IFwiclwiKSB7XG4gICAgaWYgKHN0YXJ0UG9pbnRbMV0gKyBsZW5ndGggPiAxMCkge1xuICAgICAgLy8gY29uc29sZS5sb2coc3RhcnRQb2ludFsxXSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0UG9pbnRbMV0gKyBsZW5ndGgpXG4gICAgICAvLyBjb25zb2xlLmxvZygnZ29lcyB0b28gZmFyIHJpZ2h0JylcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1XCIpIHtcbiAgICBpZiAoYWxwaGEuaW5kZXhPZihzdGFydFBvaW50WzBdKSAtIGxlbmd0aCAtIDEgPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwiZFwiKSB7XG4gICAgY29uc29sZS5sb2coYWxwaGEuaW5kZXhPZlxuICAgICAgKHN0YXJ0UG9pbnRbMF0pKVxuICAgICAgY29uc29sZS5sb2coYWxwaGEuaW5kZXhPZlxuICAgICAgICAoc3RhcnRQb2ludFswXSkrbGVuZ3RoIClcbiAgICBpZiAoYWxwaGEuaW5kZXhPZihzdGFydFBvaW50WzBdKSArIGxlbmd0aCAgPiAxMCkge1xuICAgICAgY29uc29sZS5sb2coYWxwaGEuaW5kZXhPZlxuICAgICAgICAoc3RhcnRQb2ludFswXSkpXG4gICAgICAgIGNvbnNvbGUubG9nKGFscGhhLmluZGV4T2ZcbiAgICAgICAgICAoc3RhcnRQb2ludFswXSkrbGVuZ3RoIClcbiAgICAgIGNvbnNvbGUubG9nKCdnb2VzIHRvbyBmYXIgZG93bicpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwibFwiKSB7XG4gICAgaWYgKHN0YXJ0UG9pbnRbMV0gLSBsZW5ndGggPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJpZ2h0KGxlbmd0aCwgc3RhcnRQb2ludCkge1xuICAvLyBjb25zb2xlLmxvZygnUklHSFQnKVxuICBjb25zdCBhcnJheSA9IFtdO1xuICBjb25zdCB4ID0gc3RhcnRQb2ludFswXTtcbiAgbGV0IHkgPSBzdGFydFBvaW50WzFdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYXJyYXkucHVzaChbeCwgeV0pO1xuICAgIHkgKz0gMTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gbGVmdChsZW5ndGgsIHN0YXJ0UG9pbnQpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgY29uc3QgeCA9IHN0YXJ0UG9pbnRbMF07XG4gIGxldCB5ID0gc3RhcnRQb2ludFsxXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGFycmF5LnB1c2goW3gsIHldKTtcbiAgICB5IC09IDE7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiB1cChsZW5ndGgsIHN0YXJ0UG9pbnQsIGFscGhhKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGxldCBpbmRleCA9IGFscGhhLmluZGV4T2Yoc3RhcnRQb2ludFswXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB4ID0gYWxwaGFbaW5kZXhdO1xuICAgIGNvbnN0IHkgPSBzdGFydFBvaW50WzFdO1xuICAgIGluZGV4IC09IDE7XG4gICAgYXJyYXkucHVzaChbeCwgeV0pO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gZG93bihsZW5ndGgsIHN0YXJ0UG9pbnQsIGFscGhhKSB7XG4gIGNvbnNvbGUubG9nKCdET3dOJylcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgbGV0IGluZGV4ID0gYWxwaGEuaW5kZXhPZihzdGFydFBvaW50WzBdKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHggPSBhbHBoYVtpbmRleF07XG4gICAgY29uc3QgeSA9IHN0YXJ0UG9pbnRbMV07XG4gICAgaW5kZXggKz0gMTtcbiAgICBhcnJheS5wdXNoKFt4LCB5XSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvb3JkaW5hdGVzKGxlbmd0aCwgc3RhcnRQb2ludCwgZGlyZWN0aW9uLCBhbHBoYSkge1xuICBsZXQgY29vcmRzO1xuICBpZiAoZGlyZWN0aW9uID09PSBcInJcIikge1xuICAgIGNvb3JkcyA9IHJpZ2h0KGxlbmd0aCwgc3RhcnRQb2ludCk7XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1XCIpIHtcbiAgICBjb29yZHMgPSB1cChsZW5ndGgsIHN0YXJ0UG9pbnQsIGFscGhhKTtcbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcImRcIikge1xuICAgIGNvb3JkcyA9IGRvd24obGVuZ3RoLCBzdGFydFBvaW50LCBhbHBoYSk7XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsXCIpIHtcbiAgICBjb29yZHMgPSBsZWZ0KGxlbmd0aCwgc3RhcnRQb2ludCk7XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIaXRMb2cobCkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgbCkge1xuICAgIGFycmF5LnB1c2goMCk7XG4gICAgaSArPSAxO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuY29uc3QgbmFtZVNoaXAgPSAobCkgPT4ge1xuICBpZiAobCA9PT0gNSl7XG4gICAgcmV0dXJuICdjYXJyaWVyJztcbiAgfVxuICBpZiAobCA9PT0gNCl7XG4gICAgcmV0dXJuICdiYXR0bGVzaGlwJztcbiAgfVxuICBpZiAobCA9PT0gMyl7XG4gICAgcmV0dXJuICdjcnVpc2VyJztcbiAgfVxuICBpZiAobCA9PT0gMil7XG4gICAgcmV0dXJuICdkZXN0cm95ZXInO1xuICB9XG4gIHJldHVybiAnZXJyb3InXG59XG5cblxuXG5jb25zdCBzaGlwID0gKGwsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbiwgdGhlTmFtZSkgPT4ge1xuICBjb25zdCBuYW1lID0gdGhlTmFtZTtcbiAgY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG4gIGNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuICBjb25zdCBpc1ZhbGlkID0gdmFsaWRFbnRyeShsLCBzdGFydFBvaW50LCBkaXJlY3Rpb24sIGFscGhhKTtcbiAgLy8gY29uc29sZS5sb2coaXNWYWxpZCk7XG4gIGlmICghaXNWYWxpZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbGVuZ3RoID0gbDtcbiAgY29uc3QgY29vcmRzID0gZ2VuZXJhdGVDb29yZGluYXRlcyhsLCBzdGFydFBvaW50LCBkaXJlY3Rpb24sIGFscGhhKTtcbiAgY29uc3QgaGl0TG9nID0gZ2VuZXJhdGVIaXRMb2cobCk7XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhgaGl0bG9nIGlzICR7aGl0TG9nfWApO1xuICAgIGlmICghaGl0TG9nLmluY2x1ZGVzKDApKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaGl0bG9nIGRpZCBub3QgaW5jbHVlIGEgemVybycpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBjb25zdCBzdW5rID0gaXNTdW5rKCk7XG5cbiAgY29uc3QgZ2V0Q29vcmRzID0gKCkgPT4gY29vcmRzO1xuICBjb25zdCBnZXRIaXRsb2cgPSAoKSA9PiBoaXRMb2c7XG5cbiAgY29uc3QgaGl0ID0gKGNvb3JkUGFpcikgPT4ge1xuICAgIGxldCBpbmRleDtcbiAgICBjb29yZHMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgaWYgKGNvb3JkaW5hdGVbMF0gPT09IGNvb3JkUGFpclswXSAmJiBjb29yZGluYXRlWzFdID09PSBjb29yZFBhaXJbMV0pIHtcbiAgICAgICAgaW5kZXggPSBjb29yZHMuaW5kZXhPZihjb29yZGluYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGl0TG9nW2luZGV4XSA9IDE7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHNpbmsoKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICBoaXRMb2dbaV0gPSAxO1xuICAgICAgaSArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gaGl0TG9nO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGxlbmd0aCxcbiAgICBjb29yZHMsXG4gICAgaGl0TG9nLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgZ2V0Q29vcmRzLFxuICAgIGdldEhpdGxvZyxcbiAgICBzdW5rLFxuICAgIHNpbmssXG4gICAgbmFtZVNoaXBcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXA7XG4iLCJjb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbmNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuXG5jb25zdCBwcmludFNoaXBzID0gKHNoaXBzQXJyYXkpID0+IHtcbiAgc2hpcHNBcnJheS5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coc2hpcEVsLm5hbWUpXG4gIH0pXG59XG5cbmNvbnN0IHJlbW92ZVN0eWxlID0gKHByZXZpb3VzRWxlbSkgPT4ge1xuICAgIGNvbnN0IGRyYWdsZWF2ZSA9IG5ldyBFdmVudChcImRyYWdsZWF2ZVwiKTtcbiAgICBwcmV2aW91c0VsZW0uZGlzcGF0Y2hFdmVudChkcmFnbGVhdmUpO1xuICAgIGNvbnN0IHRvdWNobGVhdmUgPSBuZXcgRXZlbnQoXCJ0b3VjaGxlYXZlXCIpO1xuICAgIHByZXZpb3VzRWxlbS5kaXNwYXRjaEV2ZW50KHRvdWNobGVhdmUpO1xufVxuXG5jb25zdCBzdHlsZU5vZGUgPSAodGhlRWxlbSkgPT4ge1xuICAgIGNvbnN0IGRyYWdvdmVyID0gbmV3IEV2ZW50KFwiZHJhZ292ZXJcIik7XG4gICAgdGhlRWxlbS5kaXNwYXRjaEV2ZW50KGRyYWdvdmVyKTtcbiAgICBjb25zdCB0b3VjaG92ZXIgPSBuZXcgRXZlbnQoXCJ0b3VjaG1vdmVcIik7XG4gICAgdGhlRWxlbS5kaXNwYXRjaEV2ZW50KHRvdWNob3Zlcik7XG4gICAgICAgIH1cblxuY29uc3QgcGxheWVyUGxhY2UgPSAoY29sMSwgcm93MSwgbGVuZ3RoLCByb3QsIHBsYXllciwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IG5hbWU7XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBjb2wxIC0gMjtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGFscGhhW3JvdzEgLSAyXTtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gW3JvdywgY29sXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGlzUm90YXRlZCA9IHJvdDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzUm90YXRlZCk7XG4gICAgICAgICAgICBsZXQgZGlyO1xuICAgICAgICAgICAgaWYoaXNSb3RhdGVkID09PSAndHJ1ZScpe1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXIgPSAnZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBkaXIgPSAncic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXIpO1xuICAgICAgICAgICAgY29uc3QgdmFsaWQgPSBwbGF5ZXIucGxhY2VTaGlwKGxlbixjb29yZCxkaXIsbik7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICAgIH1cbi8vIGNvbnN0IHBsYWNlbWVudENoZWNrID0gKGxlbiwgcm90YXRlZCwgcm93MSwgY29sMSkgPT4ge1xuLy8gICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuLy8gICAgIGlmKHJvdGF0ZWQpe1xuLy8gICAgICAgICBpZihsZW4gPT09IDIpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCAxMSl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDMpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCAxMCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDQpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCA5KXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNSl7XG4vLyAgICAgICAgICAgICBpZiAocm93MSA8IDgpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICB9IFxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBpZihsZW4gPT09IDIpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCAxMSl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDMpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCAxMCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDQpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCA5KXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNSl7XG4vLyAgICAgICAgICAgICBpZiAoY29sMSA8IDgpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgLy9jb25zb2xlLmxvZyhsZW4sIHJvdGF0ZWQsIGNvbDEsIHJvdzEsIHZhbGlkKTtcbi8vICAgICByZXR1cm4gdmFsaWQ7XG4vLyB9XG5cbmNvbnN0IGlzUm90YXRlZCA9ICh2YWwpID0+IHtcbiAgICBpZih2YWwubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgaWYodmFsWzddICE9PSAnMCcpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBwaXhlbHMyTGVuZ3RoID0gKGxlbikgPT4ge1xuICAgIGlmKGxlbiA9PT0gJzEyNXB4Jyl7XG4gICAgICAgIHJldHVybiA1XG4gICAgfVxuICAgIGlmKGxlbiA9PT0gJzEwMHB4Jyl7XG4gICAgICAgIHJldHVybiA0XG4gICAgfVxuICAgIGlmKGxlbiA9PT0gJzc1cHgnKXtcbiAgICAgICAgcmV0dXJuIDNcbiAgICB9XG4gICAgaWYobGVuID09PSAnNTBweCcpe1xuICAgICAgICByZXR1cm4gMlxuICAgIH1cbn1cblxuLy8gY29uc3QgYWxsQXJlYXMgPSAoYXJyYXlPZkFuY2hvcnMpID0+IHtcbi8vICAgICBjb25zdCBhbGxzaGlwQXJlYXMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5cbi8vIH1cblxuLy8gY29uc3QgY2FsY0FyZWEgPSAoY29sMSwgcm93MSwgbGVuLCByb3RhdGVkKSA9PiB7XG4vLyAgICAgbGV0IGNvbCA9IGNvbDE7XG4vLyAgICAgbGV0IHJvdyA9IHJvdzE7XG4vLyAgICAgY29uc3QgYXJyYXlPZlRha2VuRWxlbXMgPSBbXTtcbi8vICAgICBjb25zdCBhcnJheU9mVGFrZW5JRHMgPSBbXTtcbi8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuLTE7KXtcbi8vICAgICAgICAgbGV0IGlkO1xuLy8gICAgICAgICBpZighcm90YXRlZCl7XG4vLyAgICAgICAgICAgICByb3cgPSBhbHBoYVtyb3ddO1xuLy8gICAgICAgICAgICAgaWQgPSBgJHtyb3d9JHtjb2wgKyAxfW1gXG4vLyAgICAgICAgIGFycmF5T2ZUYWtlbklEcy5wdXNoKGlkKTtcbi8vICAgICAgICAgY29sICs9IDE7fVxuLy8gICAgICAgICBlbHNle1xuLy8gICAgICAgICAgICAgY29uc3QgdGhlUm93ID0gYWxwaGFbcm93XTtcbi8vICAgICAgICAgICAgIGlkID0gYCR7dGhlUm93fSR7Y29sfW1gXG4vLyAgICAgICAgIGFycmF5T2ZUYWtlbklEcy5wdXNoKGlkKTtcbi8vICAgICAgICAgcm93ICs9IDE7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaSs9MTtcbi8vICAgICB9XG4vLyAgICAgYXJyYXlPZlRha2VuSURzLmZvckVhY2goaWQgPT4ge1xuLy8gICAgICAgICBjb25zdCBlbGVtID0gZ2V0RWxlbWVudEJ5SWQoaWQpO1xuLy8gICAgICAgICBhcnJheU9mVGFrZW5FbGVtcy5wdXNoKGVsZW0pO1xuLy8gICAgIH0pXG4vLyAgICAgcmV0dXJuIGFycmF5T2ZUYWtlbkVsZW1zO1xuLy8gfVxuXG4vLyBjb25zdCBpc1Rha2VuID0gKG5vZGUpID0+IHtcbi8vICAgICBpZihub2RlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCl7XG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gZmFsc2U7XG4vLyB9XG5cbmNvbnN0IG1hbnVhbERyYWcgPSAobm9kZSwgcGxheWVyKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQm9hcmRcIik7XG4gIGNvbnN0IGJhbGwgPSBub2RlO1xuICBjb25zdCBsZW5ndGggPSBwaXhlbHMyTGVuZ3RoKG5vZGUuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGgpO1xuICBcbi8vICAgbGV0IGluZGV4ID0gQXJyYXkoYmFsbC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKGJhbGwpO1xuXG4gICBmdW5jdGlvbiBkcmFnSXRlbSAoZXZlbnQpIHtcbiAgICBjb25zdCB0b3VjaExvY2F0aW9uID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcbiAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJkcmFnSXRlbVwiKTtcbiAgICAvLyAoMSkgc3RhcnQgdGhlIHByb2Nlc3NcbiAgICBjb25zdCBvZ1BhcmVudCA9IGJhbGwucGFyZW50RWxlbWVudDtcbiAgICAvLyBjb25zb2xlLmxvZygnT0cgcGFyZW50IGlzOicpXG4gICAgLy8gY29uc29sZS5sb2cob2dQYXJlbnQpXG4gICAgbGV0IHJvdGF0ZWQgPSBub2RlLnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnJyk7XG4gICAgcm90YXRlZCA9IGlzUm90YXRlZChyb3RhdGVkKTtcbiAgICBiYWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgcm90YXRlZClcbiAgICAvLyBjb25zb2xlLmxvZyhsZW5ndGgsIHJvdGF0ZWQpXG4gICAgLy8gKDIpIHByZXBhcmUgdG8gbW92aW5nOiBtYWtlIGFic29sdXRlIGFuZCBvbiB0b3AgYnkgei1pbmRleFxuICAgIGJhbGwuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYmFsbC5zdHlsZS56SW5kZXggPSAxMDAwO1xuXG4gICAgLy8gbW92ZSBpdCBvdXQgb2YgYW55IGN1cnJlbnQgcGFyZW50cyBkaXJlY3RseSBpbnRvIGJvZHlcbiAgICAvLyB0byBtYWtlIGl0IHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8gdGhlIGJvZHlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChiYWxsKTtcbiAgICAvLyBib2FyZC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAvLyAuLi5hbmQgcHV0IHRoYXQgYWJzb2x1dGVseSBwb3NpdGlvbmVkIGJhbGwgdW5kZXIgdGhlIGN1cnNvclxuICAgIGxldCBhbklEO1xuICAgIGxldCB0aGVFbGVtO1xuICAgIGxldCBwcmV2aW91c0VsZW07XG4gICAgLy8gY2VudGVycyB0aGUgYmFsbCBhdCAocGFnZVgsIHBhZ2VZKSBjb29yZGluYXRlc1xuICAgIGZ1bmN0aW9uIG1vdmVBdChwYWdlWCwgcGFnZVkpIHtcbiAgICAgIGJhbGwuc3R5bGUubGVmdCA9IGAke3RvdWNoTG9jYXRpb24ucGFnZVh9cHhgO1xuICAgICAgYmFsbC5zdHlsZS50b3AgPSBgJHt0b3VjaExvY2F0aW9uLnBhZ2VZfXB4YDtcbiAgICAgIGNvbnN0IGRyb3BFbGVtTGlzdCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KHBhZ2VYLCBwYWdlWSk7XG5cbiAgICAgIGRyb3BFbGVtTGlzdC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGFzc2xpc3QnKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhBcnJheS5mcm9tKGVsZW0uY2xhc3NMaXN0KSlcbiAgICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJ1bml0bVwiKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGNvbnRhaW5zIGl0ISByZXR1cm4gSUQ6ICR7ZWxlbS5pZH1gKTtcbiAgICAgICAgICAgIGFuSUQgPSBlbGVtLmlkO1xuICAgICAgICAgICAgdGhlRWxlbSA9IGVsZW07XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHN0eWxlTm9kZSh0aGVFbGVtKSwgNTAwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocHJldmlvdXNFbGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGVsZW0uaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3ByZXZpb3VzRWxlbS5pZH0gdnMuICR7ZWxlbS5pZH1gKTtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNFbGVtICE9PSBlbGVtKSB7XG4gICAgICAgICAgICAgICAgICByZW1vdmVTdHlsZShwcmV2aW91c0VsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBwcmV2aW91c0VsZW0gPSB0aGVFbGVtO1xuICAgICAgLy8gc3R5bGVOb2RlKGRyb3BFbGVtKVxuICAgIH1cblxuICAgIG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXYpIHtcbiAgICAgIG1vdmVBdChldi5wYWdlWCwgZXYucGFnZVkpO1xuICAgICAgLy8gY29uc3QgdW5FbGVtID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RyYWdob3ZlcicpWzBdO1xuICAgICAgLy8gZHJvcEVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2hvdmVyJylcbiAgICB9XG5cbiAgICAvLyAoMykgbW92ZSB0aGUgYmFsbCBvbiBtb3VzZW1vdmVcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICBsZXQgaW5mbztcbiAgICAvLyAoNCkgZHJvcCB0aGUgYmFsbCwgcmVtb3ZlIHVubmVlZGVkIGhhbmRsZXJzXG4gICAgYmFsbC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk1PVVNFVVAhXCIpO1xuICAgICAgYmFsbC5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XG4gICAgICBiYWxsLnN0eWxlLmxlZnQgPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS50b3AgPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS56SW5kZXggPSBcIlwiO1xuICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ0l0ZW1cIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbklEKTtcbiAgICAgIGlmIChhbklEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJRCBXT1JLRUQhXCIpO1xuICAgICAgICBjb25zdCBsb2MgPSBhbklELnNwbGl0KFwiXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2MpO1xuICAgICAgICBjb25zdCBjb2wxID0gTnVtYmVyKGxvY1sxXSkgKyAyO1xuICAgICAgICBjb25zdCBjb2wyID0gY29sMSArIDE7XG4gICAgICAgIGNvbnN0IHJvdzEgPSBhbHBoYS5pbmRleE9mKGxvY1swXSkgKyAyO1xuICAgICAgICBjb25zdCByb3cyID0gcm93MSArIDE7XG4gICAgICAgIC8vIGNvbnN0IGRyb3BzaGlwID0gbmV3IEN1c3RvbUV2ZW50KFwiZHJvcHNoaXBcIix7IGRldGFpbDoge2NvbDogY29sMS0xLCByb3c6IChyb3cxLTIpLCBsZW46IGxlbmd0aCwgcm90OiByb3RhdGVkfX0gKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChkcm9wc2hpcClcbiAgICAgICAgLy8gY29uc3Qgbm90VGFrZW4gPSAoIWlzVGFrZW4odGhlRWxlbSkpO1xuICAgICAgICAvLyBjb25zdCB2YWxpZCA9IHBsYWNlbWVudENoZWNrKGxlbmd0aCwgcm90YXRlZCwgcm93MSwgY29sMSkgJiYgbm90VGFrZW47XG4gICAgICAgIGNvbnN0IGFtUm90YXRlZCA9IGJhbGwuZGF0YXNldC5yb3RhdGVkO1xuICAgICAgICBjb25zdCBpc1ZhbGlkTG9jID0gcGxheWVyUGxhY2UoY29sMSwgcm93MSwgbGVuZ3RoLCBhbVJvdGF0ZWQsIHBsYXllciwgYmFsbC5kYXRhc2V0Lm5hbWUpIFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnV0FzIEkgVkFMSUQ/JylcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXNWYWxpZExvYylcbiAgICAgICAgaWYoaXNWYWxpZExvYyl7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coaXNWYWxpZExvYylcbiAgICAgICAgICAgIGJhbGwuc3R5bGUuZ3JpZEFyZWEgPSBgJHtyb3cxfS8ke2NvbDF9LyR7cm93Mn0vJHtjb2wyfWA7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAgICAgICAgIGluZm8gPSBbW3JvdzEsIGNvbDFdLCBsZW5ndGgsIHJvdGF0ZWRdO1xuICAgICAgICAgICAgLy8gaWYob2dQYXJlbnQuY2xhc3NMaXN0WzBdICE9PSAnc2hpcEhvbGQnKXtcbiAgICAgICAgICAgIC8vICAgICBwbGF5ZXIucmVtb3ZlU2hpcChiYWxsLmRhdGFzZXQubmFtZSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBwcmludFNoaXBzKHBsYXllci5zaGlwcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYHRoZSBvZyBwYXJlbnQgaXMgbm93OiAke29nUGFyZW50fWApXG4gICAgICAgICAgb2dQYXJlbnQuYXBwZW5kQ2hpbGQoYmFsbCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGUgb2cgcGFyZW50IGlzIG5vdzogJHtvZ1BhcmVudH1gKVxuICAgICAgICBvZ1BhcmVudC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAgIGNvbnN0IHN0eWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RyYWdob3ZlcicpO1xuICAgICAgQXJyYXkuZnJvbShzdHlsZWQpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHJlbW92ZVN0eWxlKGVsZW1lbnQpfSlcbiAgICAgIGJhbGwub25tb3VzZXVwID0gbnVsbDtcbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH07XG4gIH07XG4gIGJhbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ0l0ZW0pXG4gIGJhbGwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGRyYWdJdGVtKVxuICBiYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdJdGVtKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFudWFsRHJhZztcblxuLy93aGVuIGEgc2hpcCB0aGF0IGhhcyBiZWVuIHBsYWNlZCBpcyBwaWNrIHVwIChyZWFkIHBhcmVudCBub2RlKSBPUiByb3RhdGVkIVxuLy90aGVuIGlmIGl0IGNyZWF0ZXMgYSB2YWxpZCBzaGlwLCBvdmVyIHdyaXRlIHRoZSBvbGQgc2hpcC5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZHJhd0xheW91dCBmcm9tIFwiLi9HVUlNYWluXCI7XG5pbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9HVUlSZW5kZXJcIjtcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG5jb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcblxuY29uc3QgcHJpbnRTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgc2hpcHNBcnJheS5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzaGlwRWwubmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKHNoaXBFbC5jb29yZHMpXG4gICAgfSlcbiAgfVxuXG4vLyBjb25zdCBwbGF5ZXIgPSAobnVtKSA9PiB7XG4vLyAgICAgY29uc3QgcGxheWVyTnVtID0gbnVtO1xuLy8gICAgIGNvbnN0IHBHYW1lYm9hcmQgPSBnYW1lYm9hcmQoMTApO1xuLy8gICAgIHJldHVybiB7cGxheWVyTnVtLCBwR2FtZWJvYXJkfVxuLy8gfTtcbi8vIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoMSk7XG5jb25zdCByZXBsYXkgPSAoKSA9PiB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgfSlcbiAgICBpbml0aWFsRHJhdygpO1xufVxuXG5jb25zdCBpbml0aWFsRHJhdyA9ICgpID0+IHtcbiAgICBjb25zdCB0dXJuQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0dXJuQm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICd0dXJuQm9hcmQnKTtcbiAgICB0dXJuQm9hcmQudGV4dENvbnRlbnQgPSAnMSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0dXJuQm9hcmQpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSE9PUCc7XG4gICAgY29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVzc2FnZUJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZUJvYXJkJyk7XG4gICAgbWVzc2FnZUJvYXJkLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgc2hpcHMuIFByZXNzIFIga2V5IHRvIHJvdGF0ZS4gV2hlbiBmaW5pc2hlZCBsb2NrIHlvdXIgc2hpcHMgaW4gdG8gYmVnaW4gdGhlIGdhbWUuJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VCb2FyZCk7XG4gICAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG4gICAgICAgICAgICBwbGF5QWdhaW4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBwbGF5QWdhaW4uc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5QWdhaW4nKTtcbiAgICAgICAgICAgIHBsYXlBZ2Fpbi50ZXh0Q29udGVudCA9ICdQTEFZIEFHQUlOJztcbiAgICAgICAgICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCByZXBsYXkpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5pZCA9ICdjb250YWluZXInO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuXG5cblxuY29uc3QgcGxheWVyMSA9IGdhbWVib2FyZCgxMCwgMSk7XG5jb25zdCBjb21wdXRlciA9IGdhbWVib2FyZCgxMCwgMik7XG5cblxuY29uc3QgbmFtZVNoaXAgPSAobCkgPT4ge1xuICAgIGlmIChsID09PSA1KXtcbiAgICAgIHJldHVybiAnY2Fycmllcic7XG4gICAgfVxuICAgIGlmIChsID09PSA0KXtcbiAgICAgIHJldHVybiAnYmF0dGxlc2hpcCc7XG4gICAgfVxuICAgIGlmIChsID09PSAzKXtcbiAgICAgIHJldHVybiAnY3J1aXNlcic7XG4gICAgfVxuICAgIGlmIChsID09PSAyKXtcbiAgICAgIHJldHVybiAnZGVzdHJveWVyJztcbiAgICB9XG4gICAgcmV0dXJuICdlcnJvcidcbiAgfVxuY29uc3QgZ2VuUmFuZG9tQ29vcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgeCA9IGFscGhhc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICByZXR1cm4gW3gseV07XG59XG5jb25zdCBnZW5SYW5kb21EaXIgPSAoKSA9PiB7XG4gICAgbGV0IGRpciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIGlmKGRpciA9PT0gMSl7XG4gICAgICAgIGRpciA9ICdkJ1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBkaXIgPSAncidcbiAgICB9XG4gICAgcmV0dXJuIGRpcjtcbn1cblxuY29uc3QgcGxhY2VDb21wU2hpcCA9IChsKSA9PiB7XG4gICAgY29uc3QgY29vcmQgPSBnZW5SYW5kb21Db29yZCgpO1xuICAgIGNvbnN0IGRpciA9IGdlblJhbmRvbURpcigpO1xuICAgIGNvbnN0IHZhbGlkID0gY29tcHV0ZXIucGxhY2VTaGlwKGwsIGNvb3JkLCBkaXIsIG5hbWVTaGlwKGwpLCB0cnVlKVxuICAgIGNvbnNvbGUubG9nKHZhbGlkKTtcbiAgICBjb25zb2xlLmxvZyhsLCBjb29yZCwgZGlyLCBuYW1lU2hpcChsKSlcbiAgICBpZighdmFsaWQpe1xuICAgICAgICBwbGFjZUNvbXBTaGlwKGwpO1xuICAgIH1cbn1cblxuXG4gICAgcGxhY2VDb21wU2hpcCg1KVxuICAgIHBsYWNlQ29tcFNoaXAoNClcbiAgICBwbGFjZUNvbXBTaGlwKDMpXG4gICAgcGxhY2VDb21wU2hpcCgzKVxuICAgIHBsYWNlQ29tcFNoaXAoMilcblxuICAgICAgIFxuICAgIFxuXG5wcmludFNoaXBzKGNvbXB1dGVyLnNoaXBzKTtcbmRyYXdMYXlvdXQocGxheWVyMSwgY29tcHV0ZXIpO1xuXG59XG5cbmluaXRpYWxEcmF3KClcblxuXG5cblxuXG5cblxuLy93aGVuIGEgc2hpcCBpcyBjaGFuZ2VkIChyKSBvciBwaWNrZWQgdXAgYW5kIG1vdmVkXG4vL0FORCBuZXcgcG9zaXRpb24gaXMgdmFsaWRcbi8vZGVsZXRlIG9sZCBzaGlwLCBydW4gbmV3IHNoaXBcblxuXG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wc2hpcFwiLCBwbGF5ZXJQbGFjZSk7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=