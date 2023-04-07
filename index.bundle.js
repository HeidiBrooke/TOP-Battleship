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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    /* border: solid 1px rgb(154, 173, 184); */\n    /* border-radius: 20px; */\n } \n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(11, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.unitl:hover{\n    background-color:rgb(117, 149, 168);\n}\n\n.empty {\n    background-color: #84ff94;\n}\n\n#messageBoard {\n    width: 300px;\n    font-size: 18px;\n}\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    width: 300px;\n    height: 72px;\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n    box-shadow: 0 0 10px 2px #84ff94;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n.button {\n    padding: 8px;\n    width: 100px;\n    /* height: 50px; */\n    background-color:rgb(176, 200, 214);\n    text-align: center;\n    font-size: 20px;\n    font-family: 'Roboto Condensed', sans-serif;\n    cursor: pointer;\n}\n\n.lock:hover {\n    transform: scale(105%);\n}\n\n.hidden{\n    display: none;\n}\n\n.horizontal-shake {\n    box-shadow: 0 0 10px 2px #ff8484;\n    animation: horizontal-shaking 0.35s infinite;\n  }\n\n@keyframes horizontal-shaking {\n    0% { transform: translateX(0) }\n    25% { transform: translateX(3px) }\n    50% { transform: translateX(-3px) }\n    75% { transform: translateX(3px) }\n    100% { transform: translateX(0) }\n  }\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACC;IACG,0CAA0C;IAC1C,yBAAyB;CAC5B;;CAEA;IACG,sBAAsB;CACzB;;AAED;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB;;;0CAGsC;IACtC;gCAC4B;IAC5B,yCAAyC;IACzC,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,iDAAiD;AACrD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,eAAe;;AAEnB;AACA;IACI,0CAA0C;IAC1C,yCAAyC;IACzC,uCAAuC;AAC3C;;AAEA;IACI,wCAAwC;IACxC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,uCAAuC;IACvC,oCAAoC;;AAExC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mCAAmC;IACnC,WAAW;IACX,YAAY;IACZ,eAAe;IACf,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,mCAAmC;IACnC,mCAAmC;IACnC,+BAA+B;IAC/B,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,wCAAwC;IACxC,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,WAAW;AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mCAAmC;IACnC,kBAAkB;IAClB,eAAe;IACf,2CAA2C;IAC3C,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,4CAA4C;EAC9C;;AAEF;IACI,KAAK,yBAAyB;IAC9B,MAAM,2BAA2B;IACjC,MAAM,4BAA4B;IAClC,MAAM,2BAA2B;IACjC,OAAO,yBAAyB;EAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n *{\n    /* border: solid 1px rgb(154, 173, 184); */\n    /* border-radius: 20px; */\n } \n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(11, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.unitl:hover{\n    background-color:rgb(117, 149, 168);\n}\n\n.empty {\n    background-color: #84ff94;\n}\n\n#messageBoard {\n    width: 300px;\n    font-size: 18px;\n}\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    width: 300px;\n    height: 72px;\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n    box-shadow: 0 0 10px 2px #84ff94;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n.button {\n    padding: 8px;\n    width: 100px;\n    /* height: 50px; */\n    background-color:rgb(176, 200, 214);\n    text-align: center;\n    font-size: 20px;\n    font-family: 'Roboto Condensed', sans-serif;\n    cursor: pointer;\n}\n\n.lock:hover {\n    transform: scale(105%);\n}\n\n.hidden{\n    display: none;\n}\n\n.horizontal-shake {\n    box-shadow: 0 0 10px 2px #ff8484;\n    animation: horizontal-shaking 0.35s infinite;\n  }\n\n@keyframes horizontal-shaking {\n    0% { transform: translateX(0) }\n    25% { transform: translateX(3px) }\n    50% { transform: translateX(-3px) }\n    75% { transform: translateX(3px) }\n    100% { transform: translateX(0) }\n  }\n\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _GUIRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GUIRender */ "./src/GUIRender.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








const alphas = "abcdefghij";
const alpha = alphas.split("");


const drawLayout = (player, player2) => {
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const log = (0,_GUIBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(null, 'l');
log.id = 'log';
// const num = player.playerNum;
const mainBoard = (0,_GUIBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(player, 'm');
mainBoard.id = 'mainBoard';
container.appendChild(log);
container.appendChild(mainBoard);
const ships = (0,_GUIShip__WEBPACK_IMPORTED_MODULE_2__["default"])();

const shipHolder = document.createElement('div');
shipHolder.classList.add('shipHolder');
container.appendChild(shipHolder);

const lockShipsDown = () => {
    // console.log('locking ships')
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
    const aContainer = document.getElementById('container');
    aContainer.removeChild(aShipHolder);
    player.updateMatrix();
    player2.updateMatrix();
    (0,_GUIRender__WEBPACK_IMPORTED_MODULE_4__["default"])(player, player2);

}

const lockShips = document.createElement('div');
lockShips.classList.add('button');
lockShips.classList.add('lock');
container.appendChild(lockShips);
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
    // console.log(playerNext.allSunk())
    if(playerNext.allSunk()){
        document.getElementById('messageBoard').textContent = `All of ${playerNext.pNum}'s ships are sunk. ${playerUp.pNum} wins!`;
        const gridUnits = document.getElementsByClassName('unitl');
        const moregridUnits = document.getElementsByClassName('unitm');
        Array.from(gridUnits).forEach(unit => {
            unit.replaceWith(unit.cloneNode(true));
        })  
        Array.from(moregridUnits).forEach(unit => {
            unit.replaceWith(unit.cloneNode(true));
        })
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
    // console.log(player)
    // console.log(player2)
    document.getElementById('messageBoard').textContent = ''
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
        if(!checkForWin(playerUp, otherPlayer)){
            render(player, player2) 
        }
        else {renderWin(player, player2)}

          
    }
const playerNum = Number(document.getElementById('turnBoard').textContent);
if(playerNum === 2){
    document.getElementById('messageBoard').textContent = 'computer attacking';
    setTimeout(() => {
        attackComp() 
    }, '1000')
    ;
}
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
    if(!checkForWin(playerUp, otherPlayer)){
        render(player, player2) 
    } 
    else {renderWin(player, player2)}
}
const lunits = document.getElementsByClassName('unitl');
Array.from(lunits).forEach(unit => {
    addStyles2(unit, player2);
    unit.addEventListener('mousedown', attack);
})
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
    // anchor.addEventListener('dragend', place);
     anchor.addEventListener('mousedown', select);
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
      rows[index][coord[1]-1] = ships.indexOf(aShip);
    });
  }
  const updateMatrix = (aShip) => {
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
  

  const placeShip = (len, coord, dir, name) => {
    // console.log('placing ship:');
    // console.log(name)
    // console.log('current ships are:')
    // console.log(printShips(ships))

    let valid = false;
    //check if ship already exists, if so, remove old ship
    if (shipExists(name)) {
      // console.log('removing ship');
      // console.log(name);
      removeShip(name);
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
          // console.log('ship pushed was:')
          // console.log(newShip.name)
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
      // console.log(`${aShip.name} is sunk? ${aShip.sunk}`)
      // console.log(`${aShip.name} hitlog is: ${aShip.hitLog}`)
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
}

const styleNode = (theElem) => {
    const dragover = new Event("dragover");
    theElem.dispatchEvent(dragover);
        }

const playerPlace = (col1, row1, length, rot, player, name) => {
            const n = name;
            const col = col1 - 1;
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
      const styled = document.getElementsByClassName('draghover');
      Array.from(styled).forEach(element => {
        removeStyle(element)})
      ball.onmouseup = null;
      return info;
    };
  };
  ball.addEventListener('mousedown', dragItem)
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
    if (startPoint[1] + length - 1 > 10) {
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
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);


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




const alphas = "abcdefghij";
const alpha = alphas.split("");

const printShips = (shipsArray) => {
    shipsArray.forEach(shipEl => {
    //   console.log(shipEl.name)
    //   console.log(shipEl.sunk)
    })
  }



// const player = (num) => {
//     const playerNum = num;
//     const pGameboard = gameboard(10);
//     return {playerNum, pGameboard}
// };
// const player1 = player(1);
const turnBoard = document.createElement('div');
turnBoard.setAttribute('id', 'turnBoard');
turnBoard.textContent = '1';
document.body.appendChild(turnBoard);
const messageBoard = document.createElement('div');
messageBoard.setAttribute('id', 'messageBoard');
messageBoard.textContent = 'place your ships. Press R key to rotate. when finished lock your ships in to begin the game.';
document.body.appendChild(messageBoard);
const player1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(10, 1);
const computer = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(10, 2);
const players = [player1, computer];
computer.placeShip(5, ['a',0], 'r', 'carrier')
computer.placeShip(4, ['b',1], 'r', 'battleship')
computer.placeShip(3, ['c',1], 'r', 'submarine')
computer.placeShip(3, ['d',1], 'r', 'cruiser')
computer.placeShip(2, ['e',2], 'r', 'destroyer')
printShips(computer.ships);
(0,_GUIMain__WEBPACK_IMPORTED_MODULE_0__["default"])(player1, computer);








//when a ship is changed (r) or picked up and moved
//AND new position is valid
//delete old ship, run new ship



// document.addEventListener("dropship", playerPlace);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBUztBQUNyQjtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFTO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7QUFPQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN6TXVCOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFlBQVk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLElBQUksdURBQVU7QUFDZDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BKRTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBLHdCQUF3QixZQUFZLFdBQVcsV0FBVztBQUMxRCx3QkFBd0IsWUFBWSxhQUFhLGFBQWE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOU96QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJLEVBQUUsUUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPLEVBQUUsSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQsMEJBQTBCLDhCQUE4QjtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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eUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FtQztBQUNDO0FBQ0g7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVM7QUFDekIsaUJBQWlCLHNEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQVU7Ozs7Ozs7OztBQVNWO0FBQ0E7QUFDQTs7OztBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvR1VJQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvR1VJTWFpbi5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvR1VJU2hpcC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvbWFudWFsRHJhZy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDYwMDswLDgwMDsxLDMwMDsxLDQwMCZmYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE1NCwgMTczLCAxODQpOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyMHB4OyAqL1xcbiB9IFxcblxcbiAqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiB9XFxuICAgIFxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNTIsIDU4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCA0MSwgNDYpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYig3NCwgOTAsIDk5KSAsIHJnYigzMiwgNDEsIDQ2KSk7XFxuICAgIGZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyAqL1xcbiAgICAvKiBjb2xvcjogcmdiKDIwMiwgMjI1LCAyMzgpO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDRweCByZ2IoOTQsIDExOSwgMTMzKTsgKi9cXG4gICAgY29sb3I6IHJnYigyMCwgMTcsIDE3KTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDI1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMjVweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvcExhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2lkZUxhYmVsIHtcXG4gICAgZ3JpZC1yb3c6IDIvMTI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50bFVuaXQsIC5zbFVuaXQsIC5jb3JuZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG59XFxuLnRsVW5pdHtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uc2xVbml0e1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uY29ybmVye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmlubmVyQm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZ3JpZC1yb3c6IDIvMTI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBcXG59XFxuXFxuLnVuaXRsLCAudW5pdG17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzYsIDIwMCwgMjE0KTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4udW5pdGw6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDExNywgMTQ5LCAxNjgpO1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRmZjk0O1xcbn1cXG5cXG4jbWVzc2FnZUJvYXJkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5taXNzLCAubWlzczpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDksIDE2MSwgMjI2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmhpdCwgLmhpdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjI4LCAxMDAsIDEwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTA5LCAxMDkpO1xcbiAgICAvKiBib3JkZXI6cmdiKDIyOCwgMTAwLCAxMDApOyAqL1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaG9sZGVye1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLnNoaXAsIC5zaGlwOmhvdmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg3MywgMTA2LCAxMjYsIDYwJSk7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYig0NywgNjMsIDcxKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uZHJhZ2hvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk2LCAyKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDoyNXB4O1xcbn1cXG4uc2hpcEhvbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc2hpcEhvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggIzg0ZDRmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4ICM4NGZmOTQ7XFxufVxcblxcbi5yb3RhdGVkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uYW5jaG9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIC8qIGhlaWdodDogNTBweDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc2LCAyMDAsIDIxNCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2NrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDUlKTtcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvcml6b250YWwtc2hha2Uge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggI2ZmODQ4NDtcXG4gICAgYW5pbWF0aW9uOiBob3Jpem9udGFsLXNoYWtpbmcgMC4zNXMgaW5maW5pdGU7XFxuICB9XFxuXFxuQGtleWZyYW1lcyBob3Jpem9udGFsLXNoYWtpbmcge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB9XFxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIH1cXG4gICAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIH1cXG4gIH1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpb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aW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNjAwOzAsODAwOzEsMzAwOzEsNDAwJmZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG4gKntcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE1NCwgMTczLCAxODQpOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyMHB4OyAqL1xcbiB9IFxcblxcbiAqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiB9XFxuICAgIFxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNTIsIDU4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCA0MSwgNDYpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYig3NCwgOTAsIDk5KSAsIHJnYigzMiwgNDEsIDQ2KSk7XFxuICAgIGZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyAqL1xcbiAgICAvKiBjb2xvcjogcmdiKDIwMiwgMjI1LCAyMzgpO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDRweCByZ2IoOTQsIDExOSwgMTMzKTsgKi9cXG4gICAgY29sb3I6IHJnYigyMCwgMTcsIDE3KTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDI1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMjVweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvcExhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2lkZUxhYmVsIHtcXG4gICAgZ3JpZC1yb3c6IDIvMTI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50bFVuaXQsIC5zbFVuaXQsIC5jb3JuZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG59XFxuLnRsVW5pdHtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uc2xVbml0e1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uY29ybmVye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmlubmVyQm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZ3JpZC1yb3c6IDIvMTI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBcXG59XFxuXFxuLnVuaXRsLCAudW5pdG17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzYsIDIwMCwgMjE0KTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4udW5pdGw6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDExNywgMTQ5LCAxNjgpO1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRmZjk0O1xcbn1cXG5cXG4jbWVzc2FnZUJvYXJkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5taXNzLCAubWlzczpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDksIDE2MSwgMjI2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmhpdCwgLmhpdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjI4LCAxMDAsIDEwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTA5LCAxMDkpO1xcbiAgICAvKiBib3JkZXI6cmdiKDIyOCwgMTAwLCAxMDApOyAqL1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaG9sZGVye1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLnNoaXAsIC5zaGlwOmhvdmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg3MywgMTA2LCAxMjYsIDYwJSk7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYig0NywgNjMsIDcxKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uZHJhZ2hvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk2LCAyKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDoyNXB4O1xcbn1cXG4uc2hpcEhvbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc2hpcEhvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggIzg0ZDRmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4ICM4NGZmOTQ7XFxufVxcblxcbi5yb3RhdGVkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uYW5jaG9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIC8qIGhlaWdodDogNTBweDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc2LCAyMDAsIDIxNCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2NrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDUlKTtcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvcml6b250YWwtc2hha2Uge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggI2ZmODQ4NDtcXG4gICAgYW5pbWF0aW9uOiBob3Jpem9udGFsLXNoYWtpbmcgMC4zNXMgaW5maW5pdGU7XFxuICB9XFxuXFxuQGtleWZyYW1lcyBob3Jpem9udGFsLXNoYWtpbmcge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB9XFxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIH1cXG4gICAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIH1cXG4gIH1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbmNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuXG5mdW5jdGlvbiBhZGRIb3Zlcihldikge1xuICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhvdmVyZWRcIik7XG59XG5mdW5jdGlvbiB1bkhvdmVyKGV2KSB7XG4gIGV2LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbn1cblxuZnVuY3Rpb24gdW5zdHlsZVRhcmdldChldikge1xuICAvL2NvbnNvbGUubG9nKCdpbSBVTnRyaWdnZXJlZCcpXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2hvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBzdHlsZVRhcmdldChldikge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL2NvbnNvbGUubG9nKCdpbSB0cmlnZ2VyZWQnKVxuICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZChcImRyYWdob3ZlclwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0bG9jYXRpb24oZXYpIHtcbiAgY29uc29sZS5sb2coJ2FEcm9wIGhhcHBlbmVkIScpXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHVuc3R5bGVUYXJnZXQoZXYpO1xuICBjb25zdCBkYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyYWdJdGVtXCIpO1xuICBjb25zdCBub2RlID0gZGF0YVswXTtcbiAgY29uc3QgbG9jID0gZXYudGFyZ2V0LmlkLnNwbGl0KFwiXCIpO1xuICBjb25zdCBjb2wxID0gTnVtYmVyKGxvY1sxXSkgKyAyO1xuICBjb25zdCBjb2wyID0gY29sMSArIDE7XG4gIGNvbnN0IHJvdzEgPSBhbHBoYS5pbmRleE9mKGxvY1swXSkgKyAyO1xuICBjb25zdCByb3cyID0gcm93MSArIDE7XG4gIG5vZGUuc3R5bGUuZ3JpZEFyZWEgPSBgJHtyb3cxfS8ke2NvbDF9LyR7cm93Mn0vJHtjb2wyfWA7XG4gIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbmNvbnN0IGRyYXdCb2FyZCA9IChwbHlyVmFsLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgaWYocGx5clZhbCAhPT0gbnVsbCl7XG4gICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheWVyJywgcGx5clZhbC5wTnVtKTtcbiAgfVxuICBcbiAgY29uc3QgdG9wTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKHRvcExhYmVsKTtcbiAgdG9wTGFiZWwuY2xhc3NMaXN0LmFkZChcInRvcExhYmVsXCIpO1xuICBjb25zdCBzaWRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKHNpZGVMYWJlbCk7XG4gIHNpZGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwic2lkZUxhYmVsXCIpO1xuICBjb25zdCBpbm5lckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5uZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiaW5uZXJCb2FyZFwiKTtcbiAgZ3JpZC5hcHBlbmRDaGlsZChpbm5lckJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyApIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IGAke2l9bGA7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0bFVuaXRcIik7XG4gICAgdG9wTGFiZWwuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBgJHtpICsgMX1gO1xuICAgIGkgKz0gMTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gYCR7aX1sYDtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNsVW5pdFwiKTtcbiAgICBzaWRlTGFiZWwuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBgJHthbHBoYVtpXX1gO1xuICAgIGkgKz0gMTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGB1bml0JHt0eXBlfWApO1xuICAgICAgaW5uZXJCb2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgZGl2LmlkID0gYCR7YWxwaGFbaV19JHtqfSR7dHlwZX1gO1xuICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHN0eWxlVGFyZ2V0KTtcbiAgICAgIGlmICh0eXBlID09PSBcIm1cIikge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHN0eWxlVGFyZ2V0KTtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgdW5zdHlsZVRhcmdldCk7XG4gICAgICAgIC8vIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBnZXRsb2NhdGlvbik7XG4gICAgICAgIC8vIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHN0eWxlVGFyZ2V0KTtcbiAgICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHVuc3R5bGVUYXJnZXQpO1xuICAgICAgICAvLyBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW91c2VcIiwgZ2V0bG9jYXRpb24pO1xuICAgICAgfVxuICAgICAgaiArPSAxO1xuICAgIH1cbiAgICBpICs9IDE7XG4gIH1cblxuICBjb25zdCBjb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKGNvcm5lcik7XG4gIGNvcm5lci5jbGFzc0xpc3QuYWRkKFwiY29ybmVyXCIpO1xuXG4gIHJldHVybiBncmlkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZHJhd0JvYXJkO1xuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBkcmF3Qm9hcmQgZnJvbSBcIi4vR1VJQm9hcmRcIjtcbmltcG9ydCBkcmF3U2hpcHMgZnJvbSBcIi4vR1VJU2hpcFwiO1xuaW1wb3J0IG1hbnVhbERyYWcgZnJvbSBcIi4vbWFudWFsRHJhZ1wiO1xuaW1wb3J0IHJlbmRlckJvYXJkcyBmcm9tICcuL0dVSVJlbmRlcic7XG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbmNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuXG5cbmNvbnN0IGRyYXdMYXlvdXQgPSAocGxheWVyLCBwbGF5ZXIyKSA9PiB7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5pZCA9ICdjb250YWluZXInO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuY29uc3QgbG9nID0gZHJhd0JvYXJkKG51bGwsICdsJyk7XG5sb2cuaWQgPSAnbG9nJztcbi8vIGNvbnN0IG51bSA9IHBsYXllci5wbGF5ZXJOdW07XG5jb25zdCBtYWluQm9hcmQgPSBkcmF3Qm9hcmQocGxheWVyLCAnbScpO1xubWFpbkJvYXJkLmlkID0gJ21haW5Cb2FyZCc7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobG9nKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQm9hcmQpO1xuY29uc3Qgc2hpcHMgPSBkcmF3U2hpcHMoKTtcblxuY29uc3Qgc2hpcEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2hpcEhvbGRlci5jbGFzc0xpc3QuYWRkKCdzaGlwSG9sZGVyJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcEhvbGRlcik7XG5cbmNvbnN0IGxvY2tTaGlwc0Rvd24gPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvY2tpbmcgc2hpcHMnKVxuICAgIGNvbnN0IHNoaXBOb2RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FuY2hvcicpO1xuICAgIEFycmF5LmZyb20oc2hpcE5vZGVzKS5mb3JFYWNoKGFuY2hvciA9PiB7XG4gICAgICAgIGFuY2hvci5maXJzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGFuY2hvci5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBhbmNob3IucmVwbGFjZVdpdGgoYW5jaG9yLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgXG4gICAgfSlcbiAgICBjb25zdCBsb2NrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2tCdXR0b24nKTtcbiAgICBsb2NrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgICBsb2NrQnV0dG9uLnJlcGxhY2VXaXRoKGxvY2tCdXR0b24uY2xvbmVOb2RlKHRydWUpKTtcbiAgICBjb25zdCBhU2hpcEhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NoaXBIb2xkZXInKVswXTtcbiAgICBjb25zdCBhQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIGFDb250YWluZXIucmVtb3ZlQ2hpbGQoYVNoaXBIb2xkZXIpO1xuICAgIHBsYXllci51cGRhdGVNYXRyaXgoKTtcbiAgICBwbGF5ZXIyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIHJlbmRlckJvYXJkcyhwbGF5ZXIsIHBsYXllcjIpO1xuXG59XG5cbmNvbnN0IGxvY2tTaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubG9ja1NoaXBzLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xubG9ja1NoaXBzLmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NrU2hpcHMpO1xubG9ja1NoaXBzLnRleHRDb250ZW50ID0gJ0xPQ0sgU0hJUFMnO1xubG9ja1NoaXBzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9ja0J1dHRvbicpO1xubG9ja1NoaXBzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9ja1NoaXBzRG93bilcblxuXG5zaGlwcy5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgY29uc3Qgc2hpcEhvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwSG9sZC5jbGFzc0xpc3QuYWRkKCdzaGlwSG9sZCcpXG4gICAgc2hpcEhvbGQuYXBwZW5kQ2hpbGQoc2hpcEVsKTtcbiAgICBzaGlwSG9sZC5zdHlsZS53aWR0aCA9IHNoaXBFbC5maXJzdENoaWxkLnN0eWxlLndpZHRoO1xuICAgIHNoaXBIb2xkZXIuYXBwZW5kQ2hpbGQoc2hpcEhvbGQpO1xuICAgIG1hbnVhbERyYWcoc2hpcEVsLCBwbGF5ZXIpO1xufSlcbmNvbnN0IHN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hbWU9XCJjcnVpc2VyXCJdJyk7XG5zdWJbMF0uc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCAnc3VibWFyaW5lJyk7XG5cblxuY29uc3QgcGxheWVyUGxhY2UgPSAoY29sMSwgcm93MSwgbGVuZ3RoLCByb3QsIGFQbGF5ZXIsIG5hbWUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhgYmVnaW5uaW5nIHJvdGF0ZWQ/ICR7cm90fWApXG4gICAgY29uc3QgbiA9IG5hbWU7XG4gICAgY29uc3Qgcm93ID0gcm93MSArMSA7XG4gICAgY29uc3QgY29sID0gYWxwaGFbY29sMV07XG4gICAgY29uc3QgY29vcmQgPSBbY29sLCByb3ddO1xuICAgIGNvbnN0IGxlbiA9IGxlbmd0aDtcbiAgICBjb25zdCBpc1JvdGF0ZWQgPSByb3Q7XG4gICAgbGV0IGRpciA9ICdyJztcbiAgICBpZihpc1JvdGF0ZWQgPT09ICd0cnVlJyl7XG4gICAgICAgIGRpciA9ICdkJ1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhgZGlyZWN0aW9uIGlzICR7ZGlyfWApXG4gICAgY29uc3QgdmFsaWQgPSBhUGxheWVyLnBsYWNlU2hpcChsZW4sY29vcmQsZGlyLG4pO1xuICAgIC8vIGNvbnNvbGUubG9nKGBUaGlzIHdhcyB2YWxpZD8gJHt2YWxpZH1gKVxuICAgIHJldHVybiB2YWxpZDtcbn1cblxuZnVuY3Rpb24gcm90YXRlKGV2KXtcbiAgICBpZihldi5rZXkgPT09ICdyJyl7XG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKVswXS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBsZXQgY3VycmVudFJvdGF0aW9uID0gc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncm90YXRpbmcnKTtcbiAgICAgICAgaWYoKGN1cnJlbnRSb3RhdGlvbiA9PT0gJycpfHwoY3VycmVudFJvdGF0aW9uID09PSAncm90YXRlKDBkZWcpJykgKXtcbiAgICAgICAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IDA7XG4gICAgICAgICAgICBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKDkwZGVnKWA7XG4gICAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlZCcsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IGN1cnJlbnRSb3RhdGlvbi5zcGxpdCgnJyk7XG4gICAgICAgICAgICBsZXQgbmV3Um90YXRpb24gPSBjdXJyZW50Um90YXRpb25bN10gKyBjdXJyZW50Um90YXRpb25bOF07XG4gICAgICAgICAgICBuZXdSb3RhdGlvbiA9IE51bWJlcihuZXdSb3RhdGlvbik7XG4gICAgICAgICAgICBuZXdSb3RhdGlvbiAtPSA5MDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1JvdGF0aW9uKVxuICAgICAgICAgICAgc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke25ld1JvdGF0aW9ufWRlZylgO1xuICAgICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBwYXJlbnQgbm9kZSBpcyBzaGlwaG9sZCBkbywgbm9ybWFsLCBvdGhlciB3aXNlLCBnZXQgc3RhcnQgY29vcmRcbiAgICAgICAgLy8gYnVpbGQgYSBzaGlwIGluIG9wcG9zaXRlIGRpcmVjdGlvbiAoaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCksIGJhc2ljYWxseSB0cmVhdCBhcyBhIGRyb3AgaWYgaXQncyBhbHJlYWR5IG9mIHRoZSBib2FyZC5cbiAgICAgICAgLy8gaWYgc2hpcCBpcyB2YWxpZCBvdmVyd3JpdGVcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgaWYoc2VsZWN0ZWQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdib2FyZCcpe1xuICAgICAgICAgICAgY29uc3QgaXNSb3RhdGVkID0gc2VsZWN0ZWQuZGF0YXNldC5yb3RhdGVkO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gTnVtYmVyKHNlbGVjdGVkLmRhdGFzZXQuc2hpcCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ0FyZWEgPSBzZWxlY3RlZC5zdHlsZS5ncmlkQXJlYS5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdBcmVhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wxID0gTnVtYmVyKGdBcmVhWzBdIC0yKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjb2xOZXh0ID0gTnVtYmVyKGdBcmVhWzVdKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2wxKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3cxID0gTnVtYmVyKGdBcmVhWzFdIC0yKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3cxKTtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHBsYXllclBsYWNlKGNvbDEsIHJvdzEsIGxlbmd0aCwgaXNSb3RhdGVkLCBwbGF5ZXIsIHNlbGVjdGVkLmRhdGFzZXQubmFtZSkgXG4gICAgICAgIH1cblxuICAgICAgICBpZighdmFsaWQpIHtcbiAgICAgICAgY3VycmVudFJvdGF0aW9uID0gc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICAgICAgaWYoKGN1cnJlbnRSb3RhdGlvbiA9PT0gJycpfHwoY3VycmVudFJvdGF0aW9uID09PSAncm90YXRlKDBkZWcpJykgKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpYDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IGN1cnJlbnRSb3RhdGlvbi5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1JvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uWzddICsgY3VycmVudFJvdGF0aW9uWzhdO1xuICAgICAgICAgICAgICAgIG5ld1JvdGF0aW9uID0gTnVtYmVyKG5ld1JvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBuZXdSb3RhdGlvbiAtPSA5MDtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdSb3RhdGlvbilcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bmV3Um90YXRpb259ZGVnKWA7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICBzZWxlY3RlZC5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwtc2hha2UnKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhcHBseWluZyBzaGFrZScpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtzZWxlY3RlZC5maXJzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwtc2hha2UnKX0sICc1MDAnKVxuICAgICAgICB9XG4gICAgfSAgXG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcm90YXRlKVxufVxuXG4vLyBjb25zdCBtaXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2EwbCcpO1xuLy8gbWlzcy5jbGFzc0xpc3QuYWRkKCdtaXNzJylcblxuLy8gY29uc3QgaGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ExbCcpO1xuLy8gaGl0LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuXG5leHBvcnQgZGVmYXVsdCBkcmF3TGF5b3V0IiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBkcmF3Qm9hcmQgZnJvbSBcIi4vR1VJQm9hcmRcIjtcbmltcG9ydCBkcmF3U2hpcHMgZnJvbSBcIi4vR1VJU2hpcFwiO1xuaW1wb3J0IG1hbnVhbERyYWcgZnJvbSBcIi4vbWFudWFsRHJhZ1wiO1xuaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJztcblxuXG5jb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbmNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuXG5jb25zdCBhZGRTdHlsZXMgPSAoYW5Ob2RlLCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBhTm9kZSA9IGFuTm9kZTtcbiAgICBjb25zdCB4ID0gYWxwaGEuaW5kZXhPZihhTm9kZS5pZC5zcGxpdCgnJylbMF0pO1xuICAgIGNvbnN0IHkgPSBhTm9kZS5pZC5zcGxpdCgnJylbMV07XG4gICAgY29uc3QgdmFsID0gcGxheWVyLnJvd3NbeF1beV07XG4gICAgaWYodmFsID09PSAnTScpe1xuICAgICAgICBhTm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICB9XG4gICAgaWYodmFsID09PSAnSCcpe1xuICAgICAgICBhTm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgIH1cbiAgICBpZih2YWwgPT09ICdFJyl7XG4gICAgICAgIGFOb2RlLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFOb2RlLnRleHRDb250ZW50ID0gdmFsO1xuICAgIH1cbn1cbmNvbnN0IGFkZFN0eWxlczIgPSAoYW5Ob2RlLCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBhTm9kZSA9IGFuTm9kZTtcbiAgICBjb25zdCB4ID0gYWxwaGEuaW5kZXhPZihhTm9kZS5pZC5zcGxpdCgnJylbMF0pO1xuICAgIGNvbnN0IHkgPSBhTm9kZS5pZC5zcGxpdCgnJylbMV07XG4gICAgY29uc3QgdmFsID0gcGxheWVyLnJvd3NbeF1beV07XG4gICAgaWYodmFsID09PSAnTScpe1xuICAgICAgICBhTm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICB9XG4gICAgaWYodmFsID09PSAnSCcpe1xuICAgICAgICBhTm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgIH1cbiAgICAvLyBpZih2YWwgPT09ICdFJyl7XG4gICAgLy8gICAgIGFOb2RlLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JylcbiAgICAvLyB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICAgIGFOb2RlLnRleHRDb250ZW50ID0gdmFsO1xuICAgIC8vIH1cbn1cbmNvbnN0IGdldFBsYXllciA9IChwbGF5ZXIsIHBsYXllcjIsIHR1cm4pID0+IHtcbiAgICBpZihwbGF5ZXIucE51bSA9PT0gdHVybil7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfVxuICAgICAgICByZXR1cm4gcGxheWVyMjtcbn1cbmNvbnN0IGdldE90aGVyUGxheWVyID0gKHBsYXllciwgcGxheWVyMiwgdHVybikgPT4ge1xuICAgIGlmKHBsYXllci5wTnVtICE9PSB0dXJuKXtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG4gICAgICAgIHJldHVybiBwbGF5ZXIyO1xufVxuXG5jb25zdCBjaGVja0ZvcldpbiA9IChwbGF5ZXJVcCwgcGxheWVyTmV4dCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllck5leHQuYWxsU3VuaygpKVxuICAgIGlmKHBsYXllck5leHQuYWxsU3VuaygpKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2VCb2FyZCcpLnRleHRDb250ZW50ID0gYEFsbCBvZiAke3BsYXllck5leHQucE51bX0ncyBzaGlwcyBhcmUgc3Vuay4gJHtwbGF5ZXJVcC5wTnVtfSB3aW5zIWA7XG4gICAgICAgIGNvbnN0IGdyaWRVbml0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VuaXRsJyk7XG4gICAgICAgIGNvbnN0IG1vcmVncmlkVW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1bml0bScpO1xuICAgICAgICBBcnJheS5mcm9tKGdyaWRVbml0cykuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgICAgIHVuaXQucmVwbGFjZVdpdGgodW5pdC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KSAgXG4gICAgICAgIEFycmF5LmZyb20obW9yZWdyaWRVbml0cykuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgICAgIHVuaXQucmVwbGFjZVdpdGgodW5pdC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuY29uc3QgcmVuZGVyV2luID0gKHBsYXllciwgcGxheWVyMikgPT4ge1xuICAgIGNvbnN0IG9sZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbm9sZENvbnRhaW5lci5yZW1vdmUoKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5jb25zdCBsb2cgPSBkcmF3Qm9hcmQocGxheWVyMiwgJ2wnKTtcbmxvZy5pZCA9ICdsb2cnO1xuLy8gY29uc3QgbnVtID0gcGxheWVyLnBsYXllck51bTtcbmNvbnN0IG1haW5Cb2FyZCA9IGRyYXdCb2FyZChwbGF5ZXIsICdtJyk7XG5tYWluQm9hcmQuaWQgPSAnbWFpbkJvYXJkJztcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2cpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Cb2FyZCk7XG5cbmNvbnN0IHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdG0nKTtcbkFycmF5LmZyb20odW5pdHMpLmZvckVhY2godW5pdCA9PiB7XG4gICAgYWRkU3R5bGVzKHVuaXQsIHBsYXllcik7XG59KVxuY29uc3QgbHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdGwnKTtcbkFycmF5LmZyb20obHVuaXRzKS5mb3JFYWNoKHVuaXQgPT4ge1xuICAgIGFkZFN0eWxlczIodW5pdCwgcGxheWVyMik7XG59KVxuXG59XG5cbmNvbnN0IHJlbmRlciA9IChwbGF5ZXIsIHBsYXllcjIpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIpXG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyMilcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZUJvYXJkJykudGV4dENvbnRlbnQgPSAnJ1xuY29uc3QgYXR0YWNrQ29tcCA9ICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbXB1dGVyIGF0dGFja2luZycpXG4gICAgICAgIGNvbnN0IHBsYXllck51bSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybkJvYXJkJykudGV4dENvbnRlbnQpO1xuICAgICAgICBjb25zdCBwbGF5ZXJVcCA9IGdldFBsYXllcihwbGF5ZXIsIHBsYXllcjIsIHBsYXllck51bSk7XG4gICAgICAgIGNvbnN0IG90aGVyUGxheWVyID0gZ2V0T3RoZXJQbGF5ZXIocGxheWVyLCBwbGF5ZXIyLCBwbGF5ZXJOdW0pO1xuICAgICAgICBjb25zdCB4ID0gYWxwaGFzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFt4LHldKVxuICAgICAgICBjb25zdCB2YWxpZCA9IG90aGVyUGxheWVyLnJlY2VpdmVBdHRhY2soW3gseV0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWxpZCk7XG4gICAgICAgIGlmKCF2YWxpZCl7XG4gICAgICAgICAgICBhdHRhY2tDb21wKClcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuQm9hcmQnKS50ZXh0Q29udGVudCA9IG90aGVyUGxheWVyLnBOdW07XG4gICAgICAgIGlmKCFjaGVja0ZvcldpbihwbGF5ZXJVcCwgb3RoZXJQbGF5ZXIpKXtcbiAgICAgICAgICAgIHJlbmRlcihwbGF5ZXIsIHBsYXllcjIpIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge3JlbmRlcldpbihwbGF5ZXIsIHBsYXllcjIpfVxuXG4gICAgICAgICAgXG4gICAgfVxuY29uc3QgcGxheWVyTnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuQm9hcmQnKS50ZXh0Q29udGVudCk7XG5pZihwbGF5ZXJOdW0gPT09IDIpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlQm9hcmQnKS50ZXh0Q29udGVudCA9ICdjb21wdXRlciBhdHRhY2tpbmcnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhdHRhY2tDb21wKCkgXG4gICAgfSwgJzEwMDAnKVxuICAgIDtcbn1cbmNvbnN0IG9sZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbm9sZENvbnRhaW5lci5yZW1vdmUoKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5jb25zdCBsb2cgPSBkcmF3Qm9hcmQocGxheWVyMiwgJ2wnKTtcbmxvZy5pZCA9ICdsb2cnO1xuLy8gY29uc3QgbnVtID0gcGxheWVyLnBsYXllck51bTtcbmNvbnN0IG1haW5Cb2FyZCA9IGRyYXdCb2FyZChwbGF5ZXIsICdtJyk7XG5tYWluQm9hcmQuaWQgPSAnbWFpbkJvYXJkJztcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2cpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Cb2FyZCk7XG5cbmNvbnN0IHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdG0nKTtcbkFycmF5LmZyb20odW5pdHMpLmZvckVhY2godW5pdCA9PiB7XG4gICAgYWRkU3R5bGVzKHVuaXQsIHBsYXllcik7XG59KVxuXG5cblxuY29uc3QgYXR0YWNrID0gKGUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnYXR0YWNraW5nJylcbiAgICBcbiAgICBjb25zdCBwbGF5ZXJOdW0gPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm5Cb2FyZCcpLnRleHRDb250ZW50KTtcbiAgICBjb25zdCBwbGF5ZXJVcCA9IGdldFBsYXllcihwbGF5ZXIsIHBsYXllcjIsIHBsYXllck51bSk7XG4gICAgY29uc3Qgb3RoZXJQbGF5ZXIgPSBnZXRPdGhlclBsYXllcihwbGF5ZXIsIHBsYXllcjIsIHBsYXllck51bSk7XG4gICAgY29uc3QgYU5vZGUgPSBlLnRhcmdldDtcbiAgICBjb25zdCB4ID0gYU5vZGUuaWQuc3BsaXQoJycpWzBdO1xuICAgIGNvbnN0IHkgPSBOdW1iZXIoYU5vZGUuaWQuc3BsaXQoJycpWzFdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhbeCx5XSlcbiAgICBjb25zdCB2YWxpZCA9IG90aGVyUGxheWVyLnJlY2VpdmVBdHRhY2soW3gseV0pO1xuICAgIGlmKCF2YWxpZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdubyBlcyB2YWxpZG8nKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZUJvYXJkJykudGV4dENvbnRlbnQgPSAnQWxyZWFkeSBndWVzZWQuIFRyeSBhZ2Fpbi4nO1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm5Cb2FyZCcpLnRleHRDb250ZW50ID0gb3RoZXJQbGF5ZXIucE51bTtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgcmVuZGVyKHBsYXllciwgcGxheWVyMikgIFxuICAgIC8vIH0sICc1MDAwJylcbiAgICBpZighY2hlY2tGb3JXaW4ocGxheWVyVXAsIG90aGVyUGxheWVyKSl7XG4gICAgICAgIHJlbmRlcihwbGF5ZXIsIHBsYXllcjIpIFxuICAgIH0gXG4gICAgZWxzZSB7cmVuZGVyV2luKHBsYXllciwgcGxheWVyMil9XG59XG5jb25zdCBsdW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1bml0bCcpO1xuQXJyYXkuZnJvbShsdW5pdHMpLmZvckVhY2godW5pdCA9PiB7XG4gICAgYWRkU3R5bGVzMih1bml0LCBwbGF5ZXIyKTtcbiAgICB1bml0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGF0dGFjayk7XG59KVxufVxuXG5cblxuXG5cblxuICAgXG5cblxuLy8gY29uc3QgbWlzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhMGwnKTtcbi8vIG1pc3MuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG5cbi8vIGNvbnN0IGhpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhMWwnKTtcbi8vIGhpdC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyIiwiaW1wb3J0IG1hbnVhbERyYWcgZnJvbSBcIi4vbWFudWFsRHJhZ1wiO1xuXG5jb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbmNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuXG5jb25zdCBwcmludFNoaXBzID0gKHNoaXBzQXJyYXkpID0+IHtcbiAgICBzaGlwc0FycmF5LmZvckVhY2goc2hpcEVsID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHNoaXBFbC5uYW1lKVxuICAgIH0pXG4gIH1cbmZ1bmN0aW9uIGRyYWcoZXYpIHtcbiAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZXYudGFyZ2V0LmlkKTtcbiAgICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZ0l0ZW0nKTtcbiAgICBjb25zdCBub2RlID0gZXYudGFyZ2V0O1xuICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgICAgbm9kZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0sIDEpO1xuICB9XG5cblxuZnVuY3Rpb24gcGxhY2UoZXYpe1xuICAgIGNvbnN0IG5vZGUgPSBldi50YXJnZXQ7XG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdJdGVtJyk7XG4gICAgc2V0VGltZW91dCAoKCkgPT4ge1xuICAgICAgICBub2RlLnN0eWxlLnZpc2liaWxpdHkgPSBcIlwiO1xuICAgICAgfSwgMSk7XG59XG5cbi8vIGNvbnN0IHBsYXllclBsYWNlID0gKGNvbDEsIHJvdzEsIGxlbmd0aCwgcm90LCBwbGF5ZXIsIG5hbWUpID0+IHtcbi8vICAgICBjb25zdCBuID0gbmFtZTtcbi8vICAgICBjb25zdCBjb2wgPSBjb2wxIC0gMTtcbi8vICAgICBjb25zdCByb3cgPSBhbHBoYVtyb3cxIC0gMl07XG4vLyAgICAgY29uc3QgY29vcmQgPSBbcm93LCBjb2xdO1xuLy8gICAgIGNvbnN0IGxlbiA9IGxlbmd0aDtcbi8vICAgICBjb25zdCBpc1JvdGF0ZWQgPSByb3Q7XG4vLyAgICAgbGV0IGRpciA9ICdyJztcbi8vICAgICBpZihpc1JvdGF0ZWQpe1xuLy8gICAgICAgICBkaXIgPSAnZCdcbi8vICAgICB9XG4vLyAgICAgY29uc3QgdmFsaWQgPSBwbGF5ZXIucGxhY2VTaGlwKGxlbixjb29yZCxkaXIsbik7XG4vLyAgICAgcmV0dXJuIHZhbGlkO1xuLy8gfVxuXG5mdW5jdGlvbiBzZWxlY3QoZXYpe1xuICAgIGNvbnN0IG9sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdGVkJyk7XG4gICAgaWYob2xkWzBdICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBvbGRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgIH1cbiAgICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn1cblxuLy8gZnVuY3Rpb24gcm90YXRlKGV2KXtcbi8vICAgICBpZihldi5rZXkgPT09ICdyJyl7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdyb3RhdGluZycpO1xuLy8gICAgICAgICAvLyBpZiBwYXJlbnQgbm9kZSBpcyBzaGlwaG9sZCBkbywgbm9ybWFsLCBvdGhlciB3aXNlLCBnZXQgc3RhcnQgY29vcmRcbi8vICAgICAgICAgLy8gYnVpbGQgYSBzaGlwIGluIG9wcG9zaXRlIGRpcmVjdGlvbiAoaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCksIGJhc2ljYWxseSB0cmVhdCBhcyBhIGRyb3AgaWYgaXQncyBhbHJlYWR5IG9mIHRoZSBib2FyZC5cbi8vICAgICAgICAgLy8gaWYgc2hpcCBpcyB2YWxpZCBvdmVyd3JpdGVcbi8vICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdLnBhcmVudEVsZW1lbnQ7XG4vLyAgICAgICAgIGxldCBjdXJyZW50Um90YXRpb24gPSBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm07XG4vLyAgICAgICAgIGlmKChjdXJyZW50Um90YXRpb24gPT09ICcnKXx8KGN1cnJlbnRSb3RhdGlvbiA9PT0gJ3JvdGF0ZSgwZGVnKScpICl7XG4vLyAgICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSAwO1xuLy8gICAgICAgICAgICAgc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSg5MGRlZylgO1xuLy8gICAgICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZWQnLCAndHJ1ZScpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2V7XG4vLyAgICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSBjdXJyZW50Um90YXRpb24uc3BsaXQoJycpO1xuLy8gICAgICAgICAgICAgbGV0IG5ld1JvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uWzddICsgY3VycmVudFJvdGF0aW9uWzhdO1xuLy8gICAgICAgICAgICAgbmV3Um90YXRpb24gPSBOdW1iZXIobmV3Um90YXRpb24pO1xuLy8gICAgICAgICAgICAgbmV3Um90YXRpb24gLT0gOTA7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdSb3RhdGlvbilcbi8vICAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtuZXdSb3RhdGlvbn1kZWcpYDtcbi8vICAgICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgJ3RydWUnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZCk7XG4vLyAgICAgICAgIGlmKHNlbGVjdGVkLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYm9hcmQnKXtcbi8vICAgICAgICAgICAgIGNvbnN0IGlzUm90YXRlZCA9IHNlbGVjdGVkLmRhdGFzZXQucm90YXRlZDtcbi8vICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE51bWJlcihzZWxlY3RlZC5kYXRhc2V0LnNoaXApO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGdBcmVhID0gc2VsZWN0ZWQuc3R5bGUuZ3JpZEFyZWEuc3BsaXQoJycpO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNvbDEgPSBOdW1iZXIoZ0FyZWFbNF0pIC0gMjtcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb2wxKTtcbi8vICAgICAgICAgICAgICAgICBjb25zdCByb3cxID0gTnVtYmVyKGdBcmVhWzBdKSAtIDI7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm93MSk7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgYVBsYXllciA9IHNlbGVjdGVkLnBhcmVudEVsZW1lbnQuZGF0YXNldC5wbGF5ZXI7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgaXNWYWxpZExvYyA9IHBsYXllclBsYWNlKGNvbDEsIHJvdzEsIGxlbmd0aCwgaXNSb3RhdGVkLCBhUGxheWVyLCBzZWxlY3RlZC5kYXRhc2V0Lm5hbWUpIFxuLy8gICAgICAgICAgICAgICAgIGlmKGlzVmFsaWRMb2Mpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYVBsYXllci5yZW1vdmVTaGlwKHNlbGVjdGVkLmRhdGFzZXQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICBwcmludFNoaXBzKGFQbGF5ZXIuc2hpcHMpXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfSAgXG4vLyB9XG5cblxuZnVuY3Rpb24gZHJhZ3N0YXJ0IChldikge1xuICAgIG1hbnVhbERyYWcoZXYudGFyZ2V0KVxuICAgIH07XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCByb3RhdGUpXG5cbmNvbnN0IG5hbWVTaGlwID0gKGwpID0+IHtcbiAgICBpZiAobCA9PT0gNSl7XG4gICAgICByZXR1cm4gJ2NhcnJpZXInO1xuICAgIH1cbiAgICBpZiAobCA9PT0gNCl7XG4gICAgICByZXR1cm4gJ2JhdHRsZXNoaXAnO1xuICAgIH1cbiAgICBpZiAobCA9PT0gMyl7XG4gICAgICByZXR1cm4gJ2NydWlzZXInO1xuICAgIH1cbiAgICBpZiAobCA9PT0gMil7XG4gICAgICByZXR1cm4gJ2Rlc3Ryb3llcic7XG4gICAgfVxuICAgIHJldHVybiAnZXJyb3InXG4gIH1cblxuY29uc3QgZHJhd1NoaXAgPSAobGVuKSA9PiB7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2FuY2hvcicpO1xuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcCcsIGxlbik7XG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZVNoaXAobGVuKSk7XG4gICAgY29uc3QgZmFrZXNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmYWtlc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgLy8gZmFrZXNoaXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgIC8vIGZha2VzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgIC8vIGZha2VzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBwbGFjZSk7XG4gICAgLy8gZmFrZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2VsZWN0KTtcbiAgICBmYWtlc2hpcC5zdHlsZS53aWR0aCA9IGAke2xlbiAqIDI1fXB4YDtcbiAgICBhbmNob3IuYXBwZW5kQ2hpbGQoZmFrZXNoaXApXG4gICAgLy8gYW5jaG9yLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgIC8vIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgcGxhY2UpO1xuICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2VsZWN0KTtcbiAgICByZXR1cm4gYW5jaG9yO1xufVxuXG5cblxuY29uc3QgZHJhd1NoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBkaXZzID0gW107XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCg1KSk7XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCg0KSk7XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCgzKSk7XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCgzKSk7XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCgyKSk7XG4gICAgcmV0dXJuIHNoaXBkaXZzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkcmF3U2hpcHNcblxuXG5cblxuXG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIGdlblJvdyhsKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKGkgPCBsKSB7XG4gICAgYXJyYXkucHVzaChcIkVcIik7XG4gICAgaSArPSAxO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSb3dzKGwpIHtcbiAgY29uc3Qgcm93cyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgbCkge1xuICAgIHJvd3MucHVzaChnZW5Sb3cobCkpO1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gcm93cztcbn1cblxuY29uc3QgZ2FtZWJvYXJkID0gKGwsIHB2YWwpID0+IHtcbiAgY29uc3QgcE51bSA9IHB2YWw7XG4gIGNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuICBjb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcbiAgY29uc3Qgcm93cyA9IGdlbmVyYXRlUm93cyhsKTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBzaGlwcztcblxuICBjb25zdCB2YWxpZExlbmd0aCA9IChsZW4pID0+IHtcbiAgICBsZXQgc2hpcFR5cGUgPSAwO1xuICAgIGdldFNoaXBzKCkuZm9yRWFjaCgoYVNoaXApID0+IHtcbiAgICAgIGlmIChhU2hpcC5sZW5ndGggPT09IGxlbikge1xuICAgICAgICBzaGlwVHlwZSArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxlbiA9PT0gMikge1xuICAgICAgaWYgKHNoaXBUeXBlID4gMSkge1xuICAgICAgICBjb25zb2xlLmxvZygnMiBzaGlwIGFscmVhZHkgb24gbG9nZ2VkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGVuID09PSAzKSB7XG4gICAgICBpZiAoc2hpcFR5cGUgPiAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcyIDMgc2hpcHMgYWxyZWFkeSBvbiBsb2dnZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsZW4gPT09IDUpIHtcbiAgICAgIGlmIChzaGlwVHlwZSA+IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJzIgMyBzaGlwcyBhbHJlYWR5IG9uIGxvZ2dlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICBpZiAobGVuID09PSA0KSB7XG4gICAgICBpZiAoc2hpcFR5cGUgPiAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCc0IHNoaXAgYWxyZWFkeSBvbiBsb2dnZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgbWF0Y2ggPSAoY29vcmQxLCBjb29yZDIpID0+IHtcbiAgICBpZiAoY29vcmQxWzBdID09PSBjb29yZDJbMF0gJiYgY29vcmQxWzFdID09PSBjb29yZDJbMV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcEJ5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgICAgaWYoc2hpcEVsLm5hbWUgPT09IG5hbWUpe1xuICAgICAgICByZXR1cm4gc2hpcEVsO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgY29uc3QgcHJpbnRTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgc2hpcHNBcnJheS5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaGlwRWwubmFtZSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXBFbC5jb29yZHMpXG4gICAgfSlcbiAgfVxuICBjb25zdCBvdmVybGFwcyA9IChhU2hpcCwgbmV3U2hpcCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdkbyB0aGUgZm9sbG93aW5nIG92ZXJsYXA/JylcbiAgICAvLyBjb25zb2xlLmxvZyhhU2hpcC5uYW1lKTtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdTaGlwLm5hbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKCduZXcgc2hpcCBpcyBMT0NBVEVEIGF0OicpXG4gICAgLy8gY29uc29sZS5sb2cobmV3U2hpcC5jb29yZHMpXG4gICAgaWYoYVNoaXAubGVuZ3RoID09PSBuZXdTaGlwLmxlbmd0aCl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBvdmVybGFwID0gZmFsc2U7XG4gICAgYVNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PlxuICAgICAgbmV3U2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmRwKSA9PiB7XG4gICAgICAgIGlmIChtYXRjaChjb29yZHAsIGNvb3JkKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3VuZCBvdmVybGFwJylcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZHAsIGNvb3JkKVxuICAgICAgICAgIG92ZXJsYXAgPSB0cnVlO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gb3ZlcmxhcDtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBJbk1hdHJpeCA9IChhU2hpcCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGFTaGlwKVxuICAgIGFTaGlwLmNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBhbHBoYS5pbmRleE9mKGNvb3JkWzBdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3JkWzBdKVxuICAgICAgcm93c1tpbmRleF1bY29vcmRbMV0tMV0gPSBzaGlwcy5pbmRleE9mKGFTaGlwKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB1cGRhdGVNYXRyaXggPSAoYVNoaXApID0+IHtcbiAgICBzaGlwcy5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBwbGFjZVNoaXBJbk1hdHJpeChzaGlwRWwpXG4gICAgfSlcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdGhlU2hpcDtcbiAgICAvLyBjb25zb2xlLmxvZyhgcmVtb3ZpbmcgYSAke25hbWV9IGZyb21gKVxuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBzKVxuICAgIHNoaXBzLmZvckVhY2goc2hpcEVsID0+IHtcbiAgICAgIGlmKHNoaXBFbC5uYW1lID09PSBuYW1lKXtcbiAgICAgICAgdGhlU2hpcCA9IHNoaXBFbDtcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIGNvbnNvbGUubG9nKHRoZVNoaXApO1xuICAgIGlmICh0aGVTaGlwICE9PSB1bmRlZmluZWQpe1xuICAgICAgY29uc3QgaW5kZXggPSBzaGlwcy5pbmRleE9mKHRoZVNoaXApXG4gICAgICBzaGlwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBwcmludFNoaXBzKHNoaXBzKTtcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRTaGlwTmFtZXMgPSAoc2hpcHNBcnIpID0+IHtcbiAgICBjb25zdCBuYW1lcyA9IFtdO1xuICAgIHNoaXBzQXJyLmZvckVhY2goc2hpcEVsID0+IHtcbiAgICAgIG5hbWVzLnB1c2goc2hpcEVsLm5hbWUpXG4gICAgfSlcbiAgICByZXR1cm4gbmFtZXM7XG4gIH1cbiAgY29uc3Qgc2hpcEV4aXN0cyA9IChuKSA9PiB7XG4gICAgY29uc3QgbmFtZXMgPSBjdXJyZW50U2hpcE5hbWVzKHNoaXBzKTtcbiAgICBpZihuYW1lcy5pbmNsdWRlcyhuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChsZW4sIGNvb3JkLCBkaXIsIG5hbWUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygncGxhY2luZyBzaGlwOicpO1xuICAgIC8vIGNvbnNvbGUubG9nKG5hbWUpXG4gICAgLy8gY29uc29sZS5sb2coJ2N1cnJlbnQgc2hpcHMgYXJlOicpXG4gICAgLy8gY29uc29sZS5sb2cocHJpbnRTaGlwcyhzaGlwcykpXG5cbiAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAvL2NoZWNrIGlmIHNoaXAgYWxyZWFkeSBleGlzdHMsIGlmIHNvLCByZW1vdmUgb2xkIHNoaXBcbiAgICBpZiAoc2hpcEV4aXN0cyhuYW1lKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIHNoaXAnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgcmVtb3ZlU2hpcChuYW1lKTtcbiAgICB9XG4gICAgLy90cnkgbWFraW5nIGEgc2hpcCwgaWYgaXQgbWFrZXMgb25lLCBjaGVjayBpZiBpdCBvdmVybGFwcywgaWYgaXQgZG9lcywgZG9uJ3QgcHVzaCBpdC4gXG4gICAgICBjb25zdCBuZXdTaGlwID0gc2hpcChsZW4sIGNvb3JkLCBkaXIsIG5hbWUpO1xuICAgICAgaWYobmV3U2hpcCAhPT0gbnVsbCl7XG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgaWYoc2hpcHMubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICBzaGlwcy5mb3JFYWNoKChhU2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKG92ZXJsYXBzKGFTaGlwLCBuZXdTaGlwKSkge1xuICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsaWQgPT09IHRydWUpe1xuICAgICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7IFxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzaGlwIHB1c2hlZCB3YXM6JylcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdTaGlwLm5hbWUpXG4gICAgICAgICAgcHJpbnRTaGlwcyhzaGlwcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRlTWF0cml4KG5ld1NoaXApO1xuICAgIFxuICAgIHJldHVybiB2YWxpZDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlY2VpdmVkIGF0dGFjaycgKyBjb29yZFswXSArIGNvb3JkWzFdKVxuICAgIGNvbnN0IGluZGV4ID0gYWxwaGEuaW5kZXhPZihjb29yZFswXSk7XG4gICAgY29uc3QgY3VycmVudFZhbCA9IHJvd3NbaW5kZXhdW2Nvb3JkWzFdXTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VmFsKVxuICAgIGlmICh0eXBlb2YgY3VycmVudFZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcm93c1tpbmRleF1bY29vcmRbMV1dID0gXCJIXCI7XG4gICAgICBzaGlwc1tjdXJyZW50VmFsXS5oaXQoY29vcmQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChjdXJyZW50VmFsID09PSBcIkVcIikge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2N1cnJlbnQgdmFsIHdhcyBlJylcbiAgICAgIHJvd3NbaW5kZXhdW2Nvb3JkWzFdXSA9IFwiTVwiO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICBsZXQgc3VuayA9IHRydWU7XG4gICAgLy8gY29uc29sZS5sb2coYHN1bmsgaXMgJHtzdW5rfWApXG4gICAgc2hpcHMuZm9yRWFjaChhU2hpcCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgJHthU2hpcC5uYW1lfSBpcyBzdW5rPyAke2FTaGlwLnN1bmt9YClcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAke2FTaGlwLm5hbWV9IGhpdGxvZyBpczogJHthU2hpcC5oaXRMb2d9YClcbiAgICAgIGlmICghYVNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgc3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdW5rO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBCeVN0YXJ0ID0gKGNvb3JkKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2dldHRpbmcgc2hpcCcpXG4gICAgc2hpcHMuZm9yRWFjaChhU2hpcCA9PiB7XG4gICAgICBpZigoYVNoaXAuY29vcmRzWzBdWzBdPT09IGNvb3JkWzBdKSAmJiAoYVNoaXAuY29vcmRzWzBdWzFdPT09IGNvb3JkWzFdKSl7XG4gICAgICAgIHJldHVybiBhU2hpcDtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHsgcm93cywgc2hpcHMsIHBsYWNlU2hpcCwgZ2V0U2hpcHMsIG92ZXJsYXBzLCBtYXRjaCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuaywgcmVtb3ZlU2hpcCwgZ2V0U2hpcEJ5U3RhcnQsIGdldFNoaXBCeU5hbWUsIHBOdW0sIHVwZGF0ZU1hdHJpeH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7XG5cblxuIiwiY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG5jb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcblxuY29uc3QgcHJpbnRTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gIHNoaXBzQXJyYXkuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBFbC5uYW1lKVxuICB9KVxufVxuXG5jb25zdCByZW1vdmVTdHlsZSA9IChwcmV2aW91c0VsZW0pID0+IHtcbiAgICBjb25zdCBkcmFnbGVhdmUgPSBuZXcgRXZlbnQoXCJkcmFnbGVhdmVcIik7XG4gICAgcHJldmlvdXNFbGVtLmRpc3BhdGNoRXZlbnQoZHJhZ2xlYXZlKTtcbn1cblxuY29uc3Qgc3R5bGVOb2RlID0gKHRoZUVsZW0pID0+IHtcbiAgICBjb25zdCBkcmFnb3ZlciA9IG5ldyBFdmVudChcImRyYWdvdmVyXCIpO1xuICAgIHRoZUVsZW0uZGlzcGF0Y2hFdmVudChkcmFnb3Zlcik7XG4gICAgICAgIH1cblxuY29uc3QgcGxheWVyUGxhY2UgPSAoY29sMSwgcm93MSwgbGVuZ3RoLCByb3QsIHBsYXllciwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IG5hbWU7XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBjb2wxIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGFscGhhW3JvdzEgLSAyXTtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gW3JvdywgY29sXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGlzUm90YXRlZCA9IHJvdDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzUm90YXRlZCk7XG4gICAgICAgICAgICBsZXQgZGlyO1xuICAgICAgICAgICAgaWYoaXNSb3RhdGVkID09PSAndHJ1ZScpe1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXIgPSAnZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBkaXIgPSAncic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXIpO1xuICAgICAgICAgICAgY29uc3QgdmFsaWQgPSBwbGF5ZXIucGxhY2VTaGlwKGxlbixjb29yZCxkaXIsbik7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICAgIH1cbi8vIGNvbnN0IHBsYWNlbWVudENoZWNrID0gKGxlbiwgcm90YXRlZCwgcm93MSwgY29sMSkgPT4ge1xuLy8gICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuLy8gICAgIGlmKHJvdGF0ZWQpe1xuLy8gICAgICAgICBpZihsZW4gPT09IDIpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCAxMSl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDMpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCAxMCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDQpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCA5KXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNSl7XG4vLyAgICAgICAgICAgICBpZiAocm93MSA8IDgpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICB9IFxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBpZihsZW4gPT09IDIpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCAxMSl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDMpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCAxMCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDQpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCA5KXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNSl7XG4vLyAgICAgICAgICAgICBpZiAoY29sMSA8IDgpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgLy9jb25zb2xlLmxvZyhsZW4sIHJvdGF0ZWQsIGNvbDEsIHJvdzEsIHZhbGlkKTtcbi8vICAgICByZXR1cm4gdmFsaWQ7XG4vLyB9XG5cbmNvbnN0IGlzUm90YXRlZCA9ICh2YWwpID0+IHtcbiAgICBpZih2YWwubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgaWYodmFsWzddICE9PSAnMCcpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBwaXhlbHMyTGVuZ3RoID0gKGxlbikgPT4ge1xuICAgIGlmKGxlbiA9PT0gJzEyNXB4Jyl7XG4gICAgICAgIHJldHVybiA1XG4gICAgfVxuICAgIGlmKGxlbiA9PT0gJzEwMHB4Jyl7XG4gICAgICAgIHJldHVybiA0XG4gICAgfVxuICAgIGlmKGxlbiA9PT0gJzc1cHgnKXtcbiAgICAgICAgcmV0dXJuIDNcbiAgICB9XG4gICAgaWYobGVuID09PSAnNTBweCcpe1xuICAgICAgICByZXR1cm4gMlxuICAgIH1cbn1cblxuLy8gY29uc3QgYWxsQXJlYXMgPSAoYXJyYXlPZkFuY2hvcnMpID0+IHtcbi8vICAgICBjb25zdCBhbGxzaGlwQXJlYXMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5cbi8vIH1cblxuLy8gY29uc3QgY2FsY0FyZWEgPSAoY29sMSwgcm93MSwgbGVuLCByb3RhdGVkKSA9PiB7XG4vLyAgICAgbGV0IGNvbCA9IGNvbDE7XG4vLyAgICAgbGV0IHJvdyA9IHJvdzE7XG4vLyAgICAgY29uc3QgYXJyYXlPZlRha2VuRWxlbXMgPSBbXTtcbi8vICAgICBjb25zdCBhcnJheU9mVGFrZW5JRHMgPSBbXTtcbi8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuLTE7KXtcbi8vICAgICAgICAgbGV0IGlkO1xuLy8gICAgICAgICBpZighcm90YXRlZCl7XG4vLyAgICAgICAgICAgICByb3cgPSBhbHBoYVtyb3ddO1xuLy8gICAgICAgICAgICAgaWQgPSBgJHtyb3d9JHtjb2wgKyAxfW1gXG4vLyAgICAgICAgIGFycmF5T2ZUYWtlbklEcy5wdXNoKGlkKTtcbi8vICAgICAgICAgY29sICs9IDE7fVxuLy8gICAgICAgICBlbHNle1xuLy8gICAgICAgICAgICAgY29uc3QgdGhlUm93ID0gYWxwaGFbcm93XTtcbi8vICAgICAgICAgICAgIGlkID0gYCR7dGhlUm93fSR7Y29sfW1gXG4vLyAgICAgICAgIGFycmF5T2ZUYWtlbklEcy5wdXNoKGlkKTtcbi8vICAgICAgICAgcm93ICs9IDE7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaSs9MTtcbi8vICAgICB9XG4vLyAgICAgYXJyYXlPZlRha2VuSURzLmZvckVhY2goaWQgPT4ge1xuLy8gICAgICAgICBjb25zdCBlbGVtID0gZ2V0RWxlbWVudEJ5SWQoaWQpO1xuLy8gICAgICAgICBhcnJheU9mVGFrZW5FbGVtcy5wdXNoKGVsZW0pO1xuLy8gICAgIH0pXG4vLyAgICAgcmV0dXJuIGFycmF5T2ZUYWtlbkVsZW1zO1xuLy8gfVxuXG4vLyBjb25zdCBpc1Rha2VuID0gKG5vZGUpID0+IHtcbi8vICAgICBpZihub2RlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCl7XG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gZmFsc2U7XG4vLyB9XG5cbmNvbnN0IG1hbnVhbERyYWcgPSAobm9kZSwgcGxheWVyKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQm9hcmRcIik7XG4gIGNvbnN0IGJhbGwgPSBub2RlO1xuICBjb25zdCBsZW5ndGggPSBwaXhlbHMyTGVuZ3RoKG5vZGUuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGgpO1xuICBcbi8vICAgbGV0IGluZGV4ID0gQXJyYXkoYmFsbC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKGJhbGwpO1xuXG4gICBmdW5jdGlvbiBkcmFnSXRlbSAoZXZlbnQpIHtcbiAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJkcmFnSXRlbVwiKTtcbiAgICAvLyAoMSkgc3RhcnQgdGhlIHByb2Nlc3NcbiAgICBjb25zdCBvZ1BhcmVudCA9IGJhbGwucGFyZW50RWxlbWVudDtcbiAgICAvLyBjb25zb2xlLmxvZygnT0cgcGFyZW50IGlzOicpXG4gICAgLy8gY29uc29sZS5sb2cob2dQYXJlbnQpXG4gICAgbGV0IHJvdGF0ZWQgPSBub2RlLnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnJyk7XG4gICAgcm90YXRlZCA9IGlzUm90YXRlZChyb3RhdGVkKTtcbiAgICBiYWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgcm90YXRlZClcbiAgICAvLyBjb25zb2xlLmxvZyhsZW5ndGgsIHJvdGF0ZWQpXG4gICAgLy8gKDIpIHByZXBhcmUgdG8gbW92aW5nOiBtYWtlIGFic29sdXRlIGFuZCBvbiB0b3AgYnkgei1pbmRleFxuICAgIGJhbGwuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYmFsbC5zdHlsZS56SW5kZXggPSAxMDAwO1xuXG4gICAgLy8gbW92ZSBpdCBvdXQgb2YgYW55IGN1cnJlbnQgcGFyZW50cyBkaXJlY3RseSBpbnRvIGJvZHlcbiAgICAvLyB0byBtYWtlIGl0IHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8gdGhlIGJvZHlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChiYWxsKTtcbiAgICAvLyBib2FyZC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAvLyAuLi5hbmQgcHV0IHRoYXQgYWJzb2x1dGVseSBwb3NpdGlvbmVkIGJhbGwgdW5kZXIgdGhlIGN1cnNvclxuICAgIGxldCBhbklEO1xuICAgIGxldCB0aGVFbGVtO1xuICAgIGxldCBwcmV2aW91c0VsZW07XG4gICAgLy8gY2VudGVycyB0aGUgYmFsbCBhdCAocGFnZVgsIHBhZ2VZKSBjb29yZGluYXRlc1xuICAgIGZ1bmN0aW9uIG1vdmVBdChwYWdlWCwgcGFnZVkpIHtcbiAgICAgIGJhbGwuc3R5bGUubGVmdCA9IGAke3BhZ2VYIC0gYmFsbC5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xuICAgICAgYmFsbC5zdHlsZS50b3AgPSBgJHtwYWdlWSAtIGJhbGwub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XG4gICAgICBjb25zdCBkcm9wRWxlbUxpc3QgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChwYWdlWCwgcGFnZVkpO1xuXG4gICAgICBkcm9wRWxlbUxpc3QuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xhc3NsaXN0JylcbiAgICAgICAgLy8gY29uc29sZS5sb2coQXJyYXkuZnJvbShlbGVtLmNsYXNzTGlzdCkpXG4gICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidW5pdG1cIikpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBjb250YWlucyBpdCEgcmV0dXJuIElEOiAke2VsZW0uaWR9YCk7XG4gICAgICAgICAgICBhbklEID0gZWxlbS5pZDtcbiAgICAgICAgICAgIHRoZUVsZW0gPSBlbGVtO1xuICAgICAgICAgICAgc2V0VGltZW91dChzdHlsZU5vZGUodGhlRWxlbSksIDUwMClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHByZXZpb3VzRWxlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmIChlbGVtLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtwcmV2aW91c0VsZW0uaWR9IHZzLiAke2VsZW0uaWR9YCk7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzRWxlbSAhPT0gZWxlbSkge1xuICAgICAgICAgICAgICAgICAgcmVtb3ZlU3R5bGUocHJldmlvdXNFbGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcHJldmlvdXNFbGVtID0gdGhlRWxlbTtcbiAgICAgIC8vIHN0eWxlTm9kZShkcm9wRWxlbSlcbiAgICB9XG5cbiAgICBtb3ZlQXQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2KSB7XG4gICAgICBtb3ZlQXQoZXYucGFnZVgsIGV2LnBhZ2VZKTtcbiAgICAgIC8vIGNvbnN0IHVuRWxlbSA9ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcmFnaG92ZXInKVswXTtcbiAgICAgIC8vIGRyb3BFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdob3ZlcicpXG4gICAgfVxuXG4gICAgLy8gKDMpIG1vdmUgdGhlIGJhbGwgb24gbW91c2Vtb3ZlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgbGV0IGluZm87XG4gICAgLy8gKDQpIGRyb3AgdGhlIGJhbGwsIHJlbW92ZSB1bm5lZWRlZCBoYW5kbGVyc1xuICAgIGJhbGwub25tb3VzZXVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJNT1VTRVVQIVwiKTtcbiAgICAgIGJhbGwuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS5sZWZ0ID0gXCJcIjtcbiAgICAgIGJhbGwuc3R5bGUudG9wID0gXCJcIjtcbiAgICAgIGJhbGwuc3R5bGUuekluZGV4ID0gXCJcIjtcbiAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdJdGVtXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coYW5JRCk7XG4gICAgICBpZiAoYW5JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSUQgV09SS0VEIVwiKTtcbiAgICAgICAgY29uc3QgbG9jID0gYW5JRC5zcGxpdChcIlwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG9jKTtcbiAgICAgICAgY29uc3QgY29sMSA9IE51bWJlcihsb2NbMV0pICsgMjtcbiAgICAgICAgY29uc3QgY29sMiA9IGNvbDEgKyAxO1xuICAgICAgICBjb25zdCByb3cxID0gYWxwaGEuaW5kZXhPZihsb2NbMF0pICsgMjtcbiAgICAgICAgY29uc3Qgcm93MiA9IHJvdzEgKyAxO1xuICAgICAgICAvLyBjb25zdCBkcm9wc2hpcCA9IG5ldyBDdXN0b21FdmVudChcImRyb3BzaGlwXCIseyBkZXRhaWw6IHtjb2w6IGNvbDEtMSwgcm93OiAocm93MS0yKSwgbGVuOiBsZW5ndGgsIHJvdDogcm90YXRlZH19ICk7XG4gICAgICAgIC8vIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZHJvcHNoaXApXG4gICAgICAgIC8vIGNvbnN0IG5vdFRha2VuID0gKCFpc1Rha2VuKHRoZUVsZW0pKTtcbiAgICAgICAgLy8gY29uc3QgdmFsaWQgPSBwbGFjZW1lbnRDaGVjayhsZW5ndGgsIHJvdGF0ZWQsIHJvdzEsIGNvbDEpICYmIG5vdFRha2VuO1xuICAgICAgICBjb25zdCBhbVJvdGF0ZWQgPSBiYWxsLmRhdGFzZXQucm90YXRlZDtcbiAgICAgICAgY29uc3QgaXNWYWxpZExvYyA9IHBsYXllclBsYWNlKGNvbDEsIHJvdzEsIGxlbmd0aCwgYW1Sb3RhdGVkLCBwbGF5ZXIsIGJhbGwuZGF0YXNldC5uYW1lKSBcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1dBcyBJIFZBTElEPycpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlzVmFsaWRMb2MpXG4gICAgICAgIGlmKGlzVmFsaWRMb2Mpe1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzVmFsaWRMb2MpXG4gICAgICAgICAgICBiYWxsLnN0eWxlLmdyaWRBcmVhID0gYCR7cm93MX0vJHtjb2wxfS8ke3JvdzJ9LyR7Y29sMn1gO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYmFsbCk7XG4gICAgICAgICAgICBpbmZvID0gW1tyb3cxLCBjb2wxXSwgbGVuZ3RoLCByb3RhdGVkXTtcbiAgICAgICAgICAgIC8vIGlmKG9nUGFyZW50LmNsYXNzTGlzdFswXSAhPT0gJ3NoaXBIb2xkJyl7XG4gICAgICAgICAgICAvLyAgICAgcGxheWVyLnJlbW92ZVNoaXAoYmFsbC5kYXRhc2V0Lm5hbWUpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gcHJpbnRTaGlwcyhwbGF5ZXIuc2hpcHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGUgb2cgcGFyZW50IGlzIG5vdzogJHtvZ1BhcmVudH1gKVxuICAgICAgICAgIG9nUGFyZW50LmFwcGVuZENoaWxkKGJhbGwpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSBcbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgdGhlIG9nIHBhcmVudCBpcyBub3c6ICR7b2dQYXJlbnR9YClcbiAgICAgICAgb2dQYXJlbnQuYXBwZW5kQ2hpbGQoYmFsbCk7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgY29uc3Qgc3R5bGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJhZ2hvdmVyJyk7XG4gICAgICBBcnJheS5mcm9tKHN0eWxlZCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgcmVtb3ZlU3R5bGUoZWxlbWVudCl9KVxuICAgICAgYmFsbC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgcmV0dXJuIGluZm87XG4gICAgfTtcbiAgfTtcbiAgYmFsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnSXRlbSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hbnVhbERyYWc7XG5cbi8vd2hlbiBhIHNoaXAgdGhhdCBoYXMgYmVlbiBwbGFjZWQgaXMgcGljayB1cCAocmVhZCBwYXJlbnQgbm9kZSkgT1Igcm90YXRlZCFcbi8vdGhlbiBpZiBpdCBjcmVhdGVzIGEgdmFsaWQgc2hpcCwgb3ZlciB3cml0ZSB0aGUgb2xkIHNoaXAuXG5cblxuIiwiZnVuY3Rpb24gdmFsaWRFbnRyeShsZW5ndGgsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbiwgYWxwaGEpIHtcbiAgLy8gY29uc29sZS5sb2coYHN0YXJ0IHBvaW50IGlzICR7c3RhcnRQb2ludH1gKVxuICBpZiAoZGlyZWN0aW9uID09PSBcInJcIikge1xuICAgIGlmIChzdGFydFBvaW50WzFdICsgbGVuZ3RoIC0gMSA+IDEwKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzdGFydFBvaW50WzFdKVxuICAgICAgLy8gY29uc29sZS5sb2coc3RhcnRQb2ludFsxXSArIGxlbmd0aClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnb2VzIHRvbyBmYXIgcmlnaHQnKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcInVcIikge1xuICAgIGlmIChhbHBoYS5pbmRleE9mKHN0YXJ0UG9pbnRbMF0pIC0gbGVuZ3RoIC0gMSA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkXCIpIHtcbiAgICBjb25zb2xlLmxvZyhhbHBoYS5pbmRleE9mXG4gICAgICAoc3RhcnRQb2ludFswXSkpXG4gICAgICBjb25zb2xlLmxvZyhhbHBoYS5pbmRleE9mXG4gICAgICAgIChzdGFydFBvaW50WzBdKStsZW5ndGggKVxuICAgIGlmIChhbHBoYS5pbmRleE9mKHN0YXJ0UG9pbnRbMF0pICsgbGVuZ3RoICA+IDEwKSB7XG4gICAgICBjb25zb2xlLmxvZyhhbHBoYS5pbmRleE9mXG4gICAgICAgIChzdGFydFBvaW50WzBdKSlcbiAgICAgICAgY29uc29sZS5sb2coYWxwaGEuaW5kZXhPZlxuICAgICAgICAgIChzdGFydFBvaW50WzBdKStsZW5ndGggKVxuICAgICAgY29uc29sZS5sb2coJ2dvZXMgdG9vIGZhciBkb3duJylcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsXCIpIHtcbiAgICBpZiAoc3RhcnRQb2ludFsxXSAtIGxlbmd0aCA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmlnaHQobGVuZ3RoLCBzdGFydFBvaW50KSB7XG4gIC8vIGNvbnNvbGUubG9nKCdSSUdIVCcpXG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGNvbnN0IHggPSBzdGFydFBvaW50WzBdO1xuICBsZXQgeSA9IHN0YXJ0UG9pbnRbMV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhcnJheS5wdXNoKFt4LCB5XSk7XG4gICAgeSArPSAxO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBsZWZ0KGxlbmd0aCwgc3RhcnRQb2ludCkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBjb25zdCB4ID0gc3RhcnRQb2ludFswXTtcbiAgbGV0IHkgPSBzdGFydFBvaW50WzFdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYXJyYXkucHVzaChbeCwgeV0pO1xuICAgIHkgLT0gMTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHVwKGxlbmd0aCwgc3RhcnRQb2ludCwgYWxwaGEpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgbGV0IGluZGV4ID0gYWxwaGEuaW5kZXhPZihzdGFydFBvaW50WzBdKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHggPSBhbHBoYVtpbmRleF07XG4gICAgY29uc3QgeSA9IHN0YXJ0UG9pbnRbMV07XG4gICAgaW5kZXggLT0gMTtcbiAgICBhcnJheS5wdXNoKFt4LCB5XSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBkb3duKGxlbmd0aCwgc3RhcnRQb2ludCwgYWxwaGEpIHtcbiAgY29uc29sZS5sb2coJ0RPd04nKVxuICBjb25zdCBhcnJheSA9IFtdO1xuICBsZXQgaW5kZXggPSBhbHBoYS5pbmRleE9mKHN0YXJ0UG9pbnRbMF0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgeCA9IGFscGhhW2luZGV4XTtcbiAgICBjb25zdCB5ID0gc3RhcnRQb2ludFsxXTtcbiAgICBpbmRleCArPSAxO1xuICAgIGFycmF5LnB1c2goW3gsIHldKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29vcmRpbmF0ZXMobGVuZ3RoLCBzdGFydFBvaW50LCBkaXJlY3Rpb24sIGFscGhhKSB7XG4gIGxldCBjb29yZHM7XG4gIGlmIChkaXJlY3Rpb24gPT09IFwiclwiKSB7XG4gICAgY29vcmRzID0gcmlnaHQobGVuZ3RoLCBzdGFydFBvaW50KTtcbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcInVcIikge1xuICAgIGNvb3JkcyA9IHVwKGxlbmd0aCwgc3RhcnRQb2ludCwgYWxwaGEpO1xuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwiZFwiKSB7XG4gICAgY29vcmRzID0gZG93bihsZW5ndGgsIHN0YXJ0UG9pbnQsIGFscGhhKTtcbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcImxcIikge1xuICAgIGNvb3JkcyA9IGxlZnQobGVuZ3RoLCBzdGFydFBvaW50KTtcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhpdExvZyhsKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKGkgPCBsKSB7XG4gICAgYXJyYXkucHVzaCgwKTtcbiAgICBpICs9IDE7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5jb25zdCBuYW1lU2hpcCA9IChsKSA9PiB7XG4gIGlmIChsID09PSA1KXtcbiAgICByZXR1cm4gJ2NhcnJpZXInO1xuICB9XG4gIGlmIChsID09PSA0KXtcbiAgICByZXR1cm4gJ2JhdHRsZXNoaXAnO1xuICB9XG4gIGlmIChsID09PSAzKXtcbiAgICByZXR1cm4gJ2NydWlzZXInO1xuICB9XG4gIGlmIChsID09PSAyKXtcbiAgICByZXR1cm4gJ2Rlc3Ryb3llcic7XG4gIH1cbiAgcmV0dXJuICdlcnJvcidcbn1cblxuXG5cbmNvbnN0IHNoaXAgPSAobCwgc3RhcnRQb2ludCwgZGlyZWN0aW9uLCB0aGVOYW1lKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSB0aGVOYW1lO1xuICBjb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbiAgY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG4gIGNvbnN0IGlzVmFsaWQgPSB2YWxpZEVudHJ5KGwsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbiwgYWxwaGEpO1xuICAvLyBjb25zb2xlLmxvZyhpc1ZhbGlkKTtcbiAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBsZW5ndGggPSBsO1xuICBjb25zdCBjb29yZHMgPSBnZW5lcmF0ZUNvb3JkaW5hdGVzKGwsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbiwgYWxwaGEpO1xuICBjb25zdCBoaXRMb2cgPSBnZW5lcmF0ZUhpdExvZyhsKTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBoaXRsb2cgaXMgJHtoaXRMb2d9YCk7XG4gICAgaWYgKCFoaXRMb2cuaW5jbHVkZXMoMCkpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdoaXRsb2cgZGlkIG5vdCBpbmNsdWUgYSB6ZXJvJylcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IHN1bmsgPSBpc1N1bmsoKTtcblxuICBjb25zdCBnZXRDb29yZHMgPSAoKSA9PiBjb29yZHM7XG4gIGNvbnN0IGdldEhpdGxvZyA9ICgpID0+IGhpdExvZztcblxuICBjb25zdCBoaXQgPSAoY29vcmRQYWlyKSA9PiB7XG4gICAgbGV0IGluZGV4O1xuICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBpZiAoY29vcmRpbmF0ZVswXSA9PT0gY29vcmRQYWlyWzBdICYmIGNvb3JkaW5hdGVbMV0gPT09IGNvb3JkUGFpclsxXSkge1xuICAgICAgICBpbmRleCA9IGNvb3Jkcy5pbmRleE9mKGNvb3JkaW5hdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoaXRMb2dbaW5kZXhdID0gMTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2luaygpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgIGhpdExvZ1tpXSA9IDE7XG4gICAgICBpICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBoaXRMb2c7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgbGVuZ3RoLFxuICAgIGNvb3JkcyxcbiAgICBoaXRMb2csXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBnZXRDb29yZHMsXG4gICAgZ2V0SGl0bG9nLFxuICAgIHN1bmssXG4gICAgc2luayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZHJhd0xheW91dCBmcm9tIFwiLi9HVUlNYWluXCI7XG5pbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9HVUlSZW5kZXJcIjtcblxuY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG5jb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcblxuY29uc3QgcHJpbnRTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgc2hpcHNBcnJheS5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhzaGlwRWwubmFtZSlcbiAgICAvLyAgIGNvbnNvbGUubG9nKHNoaXBFbC5zdW5rKVxuICAgIH0pXG4gIH1cblxuXG5cbi8vIGNvbnN0IHBsYXllciA9IChudW0pID0+IHtcbi8vICAgICBjb25zdCBwbGF5ZXJOdW0gPSBudW07XG4vLyAgICAgY29uc3QgcEdhbWVib2FyZCA9IGdhbWVib2FyZCgxMCk7XG4vLyAgICAgcmV0dXJuIHtwbGF5ZXJOdW0sIHBHYW1lYm9hcmR9XG4vLyB9O1xuLy8gY29uc3QgcGxheWVyMSA9IHBsYXllcigxKTtcbmNvbnN0IHR1cm5Cb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudHVybkJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAndHVybkJvYXJkJyk7XG50dXJuQm9hcmQudGV4dENvbnRlbnQgPSAnMSc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHR1cm5Cb2FyZCk7XG5jb25zdCBtZXNzYWdlQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lc3NhZ2VCb2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2VCb2FyZCcpO1xubWVzc2FnZUJvYXJkLnRleHRDb250ZW50ID0gJ3BsYWNlIHlvdXIgc2hpcHMuIFByZXNzIFIga2V5IHRvIHJvdGF0ZS4gd2hlbiBmaW5pc2hlZCBsb2NrIHlvdXIgc2hpcHMgaW4gdG8gYmVnaW4gdGhlIGdhbWUuJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZUJvYXJkKTtcbmNvbnN0IHBsYXllcjEgPSBnYW1lYm9hcmQoMTAsIDEpO1xuY29uc3QgY29tcHV0ZXIgPSBnYW1lYm9hcmQoMTAsIDIpO1xuY29uc3QgcGxheWVycyA9IFtwbGF5ZXIxLCBjb21wdXRlcl07XG5jb21wdXRlci5wbGFjZVNoaXAoNSwgWydhJywwXSwgJ3InLCAnY2FycmllcicpXG5jb21wdXRlci5wbGFjZVNoaXAoNCwgWydiJywxXSwgJ3InLCAnYmF0dGxlc2hpcCcpXG5jb21wdXRlci5wbGFjZVNoaXAoMywgWydjJywxXSwgJ3InLCAnc3VibWFyaW5lJylcbmNvbXB1dGVyLnBsYWNlU2hpcCgzLCBbJ2QnLDFdLCAncicsICdjcnVpc2VyJylcbmNvbXB1dGVyLnBsYWNlU2hpcCgyLCBbJ2UnLDJdLCAncicsICdkZXN0cm95ZXInKVxucHJpbnRTaGlwcyhjb21wdXRlci5zaGlwcyk7XG5kcmF3TGF5b3V0KHBsYXllcjEsIGNvbXB1dGVyKTtcblxuXG5cblxuXG5cblxuXG4vL3doZW4gYSBzaGlwIGlzIGNoYW5nZWQgKHIpIG9yIHBpY2tlZCB1cCBhbmQgbW92ZWRcbi8vQU5EIG5ldyBwb3NpdGlvbiBpcyB2YWxpZFxuLy9kZWxldGUgb2xkIHNoaXAsIHJ1biBuZXcgc2hpcFxuXG5cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BzaGlwXCIsIHBsYXllclBsYWNlKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==