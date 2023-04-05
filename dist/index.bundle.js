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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    /* border: solid 1px rgb(154, 173, 184); */\n    /* border-radius: 20px; */\n } \n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(11, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.unitl:hover{\n    background-color:rgb(117, 149, 168);\n}\n\n.empty {\n    background-color: #84ff94;\n}\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    width: 300px;\n    height: 72px;\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n    box-shadow: 0 0 10px 2px #84ff94;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n.button {\n    padding: 8px;\n    width: 100px;\n    /* height: 50px; */\n    background-color:rgb(176, 200, 214);\n    text-align: center;\n    font-size: 20px;\n    font-family: 'Roboto Condensed', sans-serif;\n    cursor: pointer;\n}\n\n.lock:hover {\n    transform: scale(105%);\n}\n\n.hidden{\n    display: none;\n}\n\n.horizontal-shake {\n    box-shadow: 0 0 10px 2px #ff8484;\n    animation: horizontal-shaking 0.35s infinite;\n  }\n\n@keyframes horizontal-shaking {\n    0% { transform: translateX(0) }\n    25% { transform: translateX(3px) }\n    50% { transform: translateX(-3px) }\n    75% { transform: translateX(3px) }\n    100% { transform: translateX(0) }\n  }\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACC;IACG,0CAA0C;IAC1C,yBAAyB;CAC5B;;CAEA;IACG,sBAAsB;CACzB;;AAED;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB;;;0CAGsC;IACtC;gCAC4B;IAC5B,yCAAyC;IACzC,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,iDAAiD;AACrD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,eAAe;;AAEnB;AACA;IACI,0CAA0C;IAC1C,yCAAyC;IACzC,uCAAuC;AAC3C;;AAEA;IACI,wCAAwC;IACxC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,uCAAuC;IACvC,oCAAoC;;AAExC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mCAAmC;IACnC,WAAW;IACX,YAAY;IACZ,eAAe;IACf,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kCAAkC;IAClC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,mCAAmC;IACnC,mCAAmC;IACnC,+BAA+B;IAC/B,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,wCAAwC;IACxC,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,WAAW;AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mCAAmC;IACnC,kBAAkB;IAClB,eAAe;IACf,2CAA2C;IAC3C,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,4CAA4C;EAC9C;;AAEF;IACI,KAAK,yBAAyB;IAC9B,MAAM,2BAA2B;IACjC,MAAM,4BAA4B;IAClC,MAAM,2BAA2B;IACjC,OAAO,yBAAyB;EAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n *{\n    /* border: solid 1px rgb(154, 173, 184); */\n    /* border-radius: 20px; */\n } \n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(11, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.unitl:hover{\n    background-color:rgb(117, 149, 168);\n}\n\n.empty {\n    background-color: #84ff94;\n}\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    width: 300px;\n    height: 72px;\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n    box-shadow: 0 0 10px 2px #84ff94;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n.button {\n    padding: 8px;\n    width: 100px;\n    /* height: 50px; */\n    background-color:rgb(176, 200, 214);\n    text-align: center;\n    font-size: 20px;\n    font-family: 'Roboto Condensed', sans-serif;\n    cursor: pointer;\n}\n\n.lock:hover {\n    transform: scale(105%);\n}\n\n.hidden{\n    display: none;\n}\n\n.horizontal-shake {\n    box-shadow: 0 0 10px 2px #ff8484;\n    animation: horizontal-shaking 0.35s infinite;\n  }\n\n@keyframes horizontal-shaking {\n    0% { transform: translateX(0) }\n    25% { transform: translateX(3px) }\n    50% { transform: translateX(-3px) }\n    75% { transform: translateX(3px) }\n    100% { transform: translateX(0) }\n  }\n\n\n"],"sourceRoot":""}]);
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
    console.log('locking ships')
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
    (0,_GUIRender__WEBPACK_IMPORTED_MODULE_4__["default"])(player, player2)
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
    console.log(`beginning rotated? ${rot}`)
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
    console.log(`direction is ${dir}`)
    const valid = aPlayer.placeShip(len,coord,dir,n);
    console.log(`This was valid? ${valid}`)
    return valid;
}

function rotate(ev){
    if(ev.key === 'r'){
        let valid = true;
        const selected = document.getElementsByClassName('selected')[0].parentElement;
        let currentRotation = selected.style.transform;
        console.log('rotating');
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
            console.log(newRotation)
            selected.style.transform = `rotate(${newRotation}deg)`;
            selected.setAttribute('data-rotated', 'false');
        }
        // if parent node is shiphold do, normal, other wise, get start coord
        // build a ship in opposite direction (horizontal or vertical), basically treat as a drop if it's already of the board.
        // if ship is valid overwrite
        
        
        console.log(selected.parentElement);
        if(selected.parentElement.getAttribute('class') === 'board'){
            const isRotated = selected.dataset.rotated;
            const length = Number(selected.dataset.ship);
                const gArea = selected.style.gridArea.split('/');
                console.log(gArea);
                const col1 = Number(gArea[0] -2);
                // const colNext = Number(gArea[5]);
                console.log(col1);
                const row1 = Number(gArea[1] -2);
                console.log(row1);
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
                console.log(newRotation)
                selected.style.transform = `rotate(${newRotation}deg)`;
                selected.setAttribute('data-rotated', 'false');
            }
            console.log(selected.firstChild)
            selected.firstChild.classList.add('horizontal-shake');
            console.log('applying shake')
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
    if(val === 'E'){
        aNode.classList.add('empty')
    }
    else {
        aNode.textContent = val;
    }
}



const render = (player, player2) => {
const oldContainer = document.getElementById('container');
oldContainer.remove();
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

const units = document.getElementsByClassName('unitm');
Array.from(units).forEach(unit => {
    addStyles(unit, player);
})

const lunits = document.getElementsByClassName('unitl');
Array.from(lunits).forEach(unit => {
    addStyles2(unit, player2);
})

const messageBoard = document.createElement('div');
messageBoard.setAttribute('id', 'messageBoard');
container.appendChild(messageBoard);
messageBoard.textContent = player.pNum;
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
      console.log(shipEl.name)
      console.log(shipEl.coords)
    })
  }
  const overlaps = (aShip, newShip) => {
    console.log('do the following overlap?')
    console.log(aShip.name);
    console.log(newShip.name);
    console.log('new ship is LOCATED at:')
    console.log(newShip.coords)
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

  const updateMatrix = (aShip) => {
    console.log(aShip)
    aShip.coords.forEach((coord) => {
      const index = alpha.indexOf(coord[0]);
      console.log(coord[0])
      rows[index][coord[1]] = ships.indexOf(aShip);
    });
  };

  const removeShip = (name) => {
    let theShip;
    console.log(`removing a ${name} from`)
    console.log(ships)
    ships.forEach(shipEl => {
      if(shipEl.name === name){
        theShip = shipEl;
      }
    })
    console.log(theShip);
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
    console.log('placing ship:');
    console.log(name)
    console.log('current ships are:')
    console.log(printShips(ships))

    let valid = false;
    //check if ship already exists, if so, remove old ship
    if (shipExists(name)) {
      console.log('removing ship');
      console.log(name);
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
          console.log('ship pushed was:')
          console.log(newShip.name)
          printShips(ships);
        }
      }

      updateMatrix(newShip);
    
    return valid;
  };

  const receiveAttack = (coord) => {
    const index = alpha.indexOf(coord[0]);
    const currentVal = rows[index][coord[1]];
    if (typeof currentVal === "number") {
      rows[index][coord[1]] = "H";
      ships[currentVal].hit(coord);
      return "I worked";
    }
    if (currentVal === "E") {
      rows[index][coord[1]] = "M";
    } else {
      return "already fired here. Try again.";
    }
  };

  const allSunk = () => {
    ships.forEach((aShip) => {
      if (!aShip.isSunk()) {
        return false;
      }
    });
    return true;
  };

  const getShipByStart = (coord) => {
    console.log('getting ship')
    ships.forEach(aShip => {
      if((aShip.coords[0][0]=== coord[0]) && (aShip.coords[0][1]=== coord[1])){
        return aShip;
      }
    })
  }

  return { rows, ships, placeShip, getShips, overlaps, match, receiveAttack, allSunk, removeShip, getShipByStart, getShipByName, pNum };
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
    console.log(shipEl.name)
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
            console.log(isRotated);
            let dir;
            if(isRotated === 'true'){
              
                dir = 'd';
            }
            else{
              dir = 'r';
            }
            console.log(dir);
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
    console.log('OG parent is:')
    console.log(ogParent)
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
        console.log('WAs I VALID?')
        console.log(isValidLoc)
        if(isValidLoc){
          console.log(isValidLoc)
            ball.style.gridArea = `${row1}/${col1}/${row2}/${col2}`;
            board.appendChild(ball);
            info = [[row1, col1], length, rotated];
            // if(ogParent.classList[0] !== 'shipHold'){
            //     player.removeShip(ball.dataset.name);
            // }
            // printShips(player.ships);
        }
        else {
          console.log(`the og parent is now: ${ogParent}`)
          ogParent.appendChild(ball);
        }
        
      } 
      else {
        console.log(`the og parent is now: ${ogParent}`)
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
  console.log(`start point is ${startPoint}`)
  if (direction === "r") {
    if (startPoint[1] + length - 1 > 10) {
      console.log(startPoint[1])
      console.log(startPoint[1] + length)
      console.log('goes too far right')
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
  console.log('RIGHT')
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
  console.log(isValid);
  if (!isValid) {
    return null;
  }

  const length = l;
  const coords = generateCoordinates(l, startPoint, direction, alpha);
  const hitLog = generateHitLog(l);
  const isSunk = () => {
    if (!hitLog.includes(0)) {
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
      console.log(shipEl.name)
    })
  }



// const player = (num) => {
//     const playerNum = num;
//     const pGameboard = gameboard(10);
//     return {playerNum, pGameboard}
// };
// const player1 = player(1);

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
const units = document.getElementsByClassName('unitl');


const getOtherplayer = (aPlayer) => {
    players.forEach(plyr => {
        if(plyr !== aPlayer){
            console.log(plyr)
            return plyr;
        }
    })
}
const attack = (e) => {
    console.log('attacing')
    const playerNum = Number(document.getElementById('messageBoard').textContent);
    const playerUp = players[playerNum];
    const otherPlayer = getOtherplayer(playerUp);
    const aNode = e.target;
    const x = alpha.indexOf(aNode.id.split('')[0]);
    const y = aNode.id.split('')[1];
    otherPlayer.receiveAttack([x,y])
    ;(0,_GUIRender__WEBPACK_IMPORTED_MODULE_2__["default"])(playerUp, otherPlayer);
}
Array.from(units).forEach(unit => {
    unit.addEventListener('mousedown', attack);
})

//when a ship is changed (r) or picked up and moved
//AND new position is valid
//delete old ship, run new ship



// document.addEventListener("dropship", playerPlace);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFlBQVk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLElBQUksdURBQVU7QUFDZDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BKRTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xPekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSSxFQUFFLFFBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTyxFQUFFLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwy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QyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQW1DO0FBQ0M7QUFDSDs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQSxnQkFBZ0Isc0RBQVM7QUFDekIsaUJBQWlCLHNEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQVU7QUFDVjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOzs7O0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlCb2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlNYWluLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL0dVSVJlbmRlci5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlTaGlwLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9tYW51YWxEcmFnLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNjAwOzAsODAwOzEsMzAwOzEsNDAwJmZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTU0LCAxNzMsIDE4NCk7ICovXFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXFxuIH0gXFxuXFxuICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuIH1cXG4gICAgXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA1MiwgNTgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDQxLCA0Nik7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggcmdiKDc0LCA5MCwgOTkpICwgcmdiKDMyLCA0MSwgNDYpKTtcXG4gICAgZm9udC1mYW1pbHk6J09wZW4gU2FucycsIHNhbnMtc2VyaWY7ICovXFxuICAgIC8qIGNvbG9yOiByZ2IoMjAyLCAyMjUsIDIzOCk7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7ICovXFxuICAgIC8qIGJvcmRlcjogc29saWQgNHB4IHJnYig5NCwgMTE5LCAxMzMpOyAqL1xcbiAgICBjb2xvcjogcmdiKDIwLCAxNywgMTcpO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmOyAqL1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMjVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAyNXB4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9wTGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zaWRlTGFiZWwge1xcbiAgICBncmlkLXJvdzogMi8xMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRsVW5pdCwgLnNsVW5pdCwgLmNvcm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIFxcbn1cXG4udGxVbml0e1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5zbFVuaXR7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5jb3JuZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaW5uZXJCb2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgICBncmlkLXJvdzogMi8xMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIFxcbn1cXG5cXG4udW5pdGwsIC51bml0bXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3NiwgMjAwLCAyMTQpO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi51bml0bDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTE3LCAxNDksIDE2OCk7XFxufVxcblxcbi5lbXB0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NGZmOTQ7XFxufVxcblxcbi5taXNzLCAubWlzczpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDksIDE2MSwgMjI2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmhpdCwgLmhpdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjI4LCAxMDAsIDEwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTA5LCAxMDkpO1xcbiAgICAvKiBib3JkZXI6cmdiKDIyOCwgMTAwLCAxMDApOyAqL1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaG9sZGVye1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLnNoaXAsIC5zaGlwOmhvdmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg3MywgMTA2LCAxMjYsIDYwJSk7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYig0NywgNjMsIDcxKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uZHJhZ2hvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk2LCAyKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDoyNXB4O1xcbn1cXG4uc2hpcEhvbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc2hpcEhvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggIzg0ZDRmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4ICM4NGZmOTQ7XFxufVxcblxcbi5yb3RhdGVkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uYW5jaG9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIC8qIGhlaWdodDogNTBweDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc2LCAyMDAsIDIxNCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2NrOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDUlKTtcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvcml6b250YWwtc2hha2Uge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggI2ZmODQ4NDtcXG4gICAgYW5pbWF0aW9uOiBob3Jpem9udGFsLXNoYWtpbmcgMC4zNXMgaW5maW5pdGU7XFxuICB9XFxuXFxuQGtleWZyYW1lcyBob3Jpem9udGFsLXNoYWtpbmcge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB9XFxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIH1cXG4gICAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIH1cXG4gIH1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNDO0lBQ0csMENBQTBDO0lBQzFDLHlCQUF5QjtDQUM1Qjs7Q0FFQTtJQUNHLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qjs7OzBDQUdzQztJQUN0QztnQ0FDNEI7SUFDNUIseUNBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMseUNBQXlDO0lBQ3pDLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyx5Q0FBeUM7SUFDekMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHlDQUF5QztJQUN6QywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQix5Q0FBeUM7SUFDekMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwyQ0FBMkM7SUFDM0MsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsNENBQTRDO0VBQzlDOztBQUVGO0lBQ0ksS0FBSyx5QkFBeUI7SUFDOUIsTUFBTSwyQkFBMkI7SUFDakMsTUFBTSw0QkFBNEI7SUFDbEMsTUFBTSwyQkFBMkI7SUFDakMsT0FBTyx5QkFBeUI7RUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDYwMDswLDgwMDsxLDMwMDsxLDQwMCZmYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuICp7XFxuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IHJnYigxNTQsIDE3MywgMTg0KTsgKi9cXG4gICAgLyogYm9yZGVyLXJhZGl1czogMjBweDsgKi9cXG4gfSBcXG5cXG4gKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gfVxcbiAgICBcXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDUyLCA1OCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgNDEsIDQ2KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoNzQsIDkwLCA5OSkgLCByZ2IoMzIsIDQxLCA0NikpO1xcbiAgICBmb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgKi9cXG4gICAgLyogY29sb3I6IHJnYigyMDIsIDIyNSwgMjM4KTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgKi9cXG4gICAgLyogYm9yZGVyOiBzb2xpZCA0cHggcmdiKDk0LCAxMTksIDEzMyk7ICovXFxuICAgIGNvbG9yOiByZ2IoMjAsIDE3LCAxNyk7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDI1cHgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b3BMYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNpZGVMYWJlbCB7XFxuICAgIGdyaWQtcm93OiAyLzEyO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGxVbml0LCAuc2xVbml0LCAuY29ybmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgXFxufVxcbi50bFVuaXR7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLnNsVW5pdHtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmNvcm5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5pbm5lckJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGdyaWQtcm93OiAyLzEyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgXFxufVxcblxcbi51bml0bCwgLnVuaXRte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc2LCAyMDAsIDIxNCk7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLnVuaXRsOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMTcsIDE0OSwgMTY4KTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0ZmY5NDtcXG59XFxuXFxuLm1pc3MsIC5taXNzOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0OSwgMTYxLCAyMjYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaGl0LCAuaGl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMjgsIDEwMCwgMTAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxMDksIDEwOSk7XFxuICAgIC8qIGJvcmRlcjpyZ2IoMjI4LCAxMDAsIDEwMCk7ICovXFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5ob2xkZXJ7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uc2hpcCwgLnNoaXA6aG92ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDczLCAxMDYsIDEyNiwgNjAlKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDQ3LCA2MywgNzEpO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5kcmFnaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTYsIDIpO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OjI1cHg7XFxufVxcbi5zaGlwSG9sZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zaGlwSG9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDcycHg7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCAjODRkNGZmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggIzg0ZmY5NDtcXG59XFxuXFxuLnJvdGF0ZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5hbmNob3Ige1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgLyogaGVpZ2h0OiA1MHB4OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzYsIDIwMCwgMjE0KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvY2s6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwNSUpO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1zaGFrZSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCAjZmY4NDg0O1xcbiAgICBhbmltYXRpb246IGhvcml6b250YWwtc2hha2luZyAwLjM1cyBpbmZpbml0ZTtcXG4gIH1cXG5cXG5Aa2V5ZnJhbWVzIGhvcml6b250YWwtc2hha2luZyB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIH1cXG4gICAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgfVxcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgfVxcbiAgICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KSB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgfVxcbiAgfVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cbmZ1bmN0aW9uIGFkZEhvdmVyKGV2KSB7XG4gIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcbn1cbmZ1bmN0aW9uIHVuSG92ZXIoZXYpIHtcbiAgZXYudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcmVkXCIpO1xufVxuXG5mdW5jdGlvbiB1bnN0eWxlVGFyZ2V0KGV2KSB7XG4gIC8vY29uc29sZS5sb2coJ2ltIFVOdHJpZ2dlcmVkJylcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZXYudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnaG92ZXJcIik7XG59XG5cbmZ1bmN0aW9uIHN0eWxlVGFyZ2V0KGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vY29uc29sZS5sb2coJ2ltIHRyaWdnZXJlZCcpXG4gIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2hvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRsb2NhdGlvbihldikge1xuICBjb25zb2xlLmxvZygnYURyb3AgaGFwcGVuZWQhJylcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdW5zdHlsZVRhcmdldChldik7XG4gIGNvbnN0IGRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHJhZ0l0ZW1cIik7XG4gIGNvbnN0IG5vZGUgPSBkYXRhWzBdO1xuICBjb25zdCBsb2MgPSBldi50YXJnZXQuaWQuc3BsaXQoXCJcIik7XG4gIGNvbnN0IGNvbDEgPSBOdW1iZXIobG9jWzFdKSArIDI7XG4gIGNvbnN0IGNvbDIgPSBjb2wxICsgMTtcbiAgY29uc3Qgcm93MSA9IGFscGhhLmluZGV4T2YobG9jWzBdKSArIDI7XG4gIGNvbnN0IHJvdzIgPSByb3cxICsgMTtcbiAgbm9kZS5zdHlsZS5ncmlkQXJlYSA9IGAke3JvdzF9LyR7Y29sMX0vJHtyb3cyfS8ke2NvbDJ9YDtcbiAgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbn1cblxuY29uc3QgZHJhd0JvYXJkID0gKHBseXJWYWwsIHR5cGUpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuICBpZihwbHlyVmFsICE9PSBudWxsKXtcbiAgICBncmlkLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGF5ZXInLCBwbHlyVmFsLnBOdW0pO1xuICB9XG4gIFxuICBjb25zdCB0b3BMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQuYXBwZW5kQ2hpbGQodG9wTGFiZWwpO1xuICB0b3BMYWJlbC5jbGFzc0xpc3QuYWRkKFwidG9wTGFiZWxcIik7XG4gIGNvbnN0IHNpZGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQuYXBwZW5kQ2hpbGQoc2lkZUxhYmVsKTtcbiAgc2lkZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJzaWRlTGFiZWxcIik7XG4gIGNvbnN0IGlubmVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbm5lckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJpbm5lckJvYXJkXCIpO1xuICBncmlkLmFwcGVuZENoaWxkKGlubmVyQm9hcmQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gYCR7aX1sYDtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRsVW5pdFwiKTtcbiAgICB0b3BMYWJlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2kgKyAxfWA7XG4gICAgaSArPSAxO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBgJHtpfWxgO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2xVbml0XCIpO1xuICAgIHNpZGVMYWJlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2FscGhhW2ldfWA7XG4gICAgaSArPSAxO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYHVuaXQke3R5cGV9YCk7XG4gICAgICBpbm5lckJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuaWQgPSBgJHthbHBoYVtpXX0ke2p9JHt0eXBlfWA7XG4gICAgICAvLyBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgc3R5bGVUYXJnZXQpO1xuICAgICAgaWYgKHR5cGUgPT09IFwibVwiKSB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgc3R5bGVUYXJnZXQpO1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCB1bnN0eWxlVGFyZ2V0KTtcbiAgICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGdldGxvY2F0aW9uKTtcbiAgICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgc3R5bGVUYXJnZXQpO1xuICAgICAgICAvLyBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdW5zdHlsZVRhcmdldCk7XG4gICAgICAgIC8vIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3VzZVwiLCBnZXRsb2NhdGlvbik7XG4gICAgICB9XG4gICAgICBqICs9IDE7XG4gICAgfVxuICAgIGkgKz0gMTtcbiAgfVxuXG4gIGNvbnN0IGNvcm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQuYXBwZW5kQ2hpbGQoY29ybmVyKTtcbiAgY29ybmVyLmNsYXNzTGlzdC5hZGQoXCJjb3JuZXJcIik7XG5cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkcmF3Qm9hcmQ7XG4iLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IGRyYXdCb2FyZCBmcm9tIFwiLi9HVUlCb2FyZFwiO1xuaW1wb3J0IGRyYXdTaGlwcyBmcm9tIFwiLi9HVUlTaGlwXCI7XG5pbXBvcnQgbWFudWFsRHJhZyBmcm9tIFwiLi9tYW51YWxEcmFnXCI7XG5pbXBvcnQgcmVuZGVyQm9hcmRzIGZyb20gJy4vR1VJUmVuZGVyJztcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cblxuY29uc3QgZHJhd0xheW91dCA9IChwbGF5ZXIsIHBsYXllcjIpID0+IHtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5jb25zdCBsb2cgPSBkcmF3Qm9hcmQobnVsbCwgJ2wnKTtcbmxvZy5pZCA9ICdsb2cnO1xuLy8gY29uc3QgbnVtID0gcGxheWVyLnBsYXllck51bTtcbmNvbnN0IG1haW5Cb2FyZCA9IGRyYXdCb2FyZChwbGF5ZXIsICdtJyk7XG5tYWluQm9hcmQuaWQgPSAnbWFpbkJvYXJkJztcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2cpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Cb2FyZCk7XG5jb25zdCBzaGlwcyA9IGRyYXdTaGlwcygpO1xuXG5jb25zdCBzaGlwSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zaGlwSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3NoaXBIb2xkZXInKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwSG9sZGVyKTtcblxuY29uc3QgbG9ja1NoaXBzRG93biA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbG9ja2luZyBzaGlwcycpXG4gICAgY29uc3Qgc2hpcE5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW5jaG9yJyk7XG4gICAgQXJyYXkuZnJvbShzaGlwTm9kZXMpLmZvckVhY2goYW5jaG9yID0+IHtcbiAgICAgICAgYW5jaG9yLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgYW5jaG9yLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGFuY2hvci5yZXBsYWNlV2l0aChhbmNob3IuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBcbiAgICB9KVxuICAgIGNvbnN0IGxvY2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ja0J1dHRvbicpO1xuICAgIGxvY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICAgIGxvY2tCdXR0b24ucmVwbGFjZVdpdGgobG9ja0J1dHRvbi5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGNvbnN0IGFTaGlwSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2hpcEhvbGRlcicpWzBdO1xuICAgIGNvbnN0IGFDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgYUNvbnRhaW5lci5yZW1vdmVDaGlsZChhU2hpcEhvbGRlcik7XG4gICAgcmVuZGVyQm9hcmRzKHBsYXllciwgcGxheWVyMilcbn1cblxuY29uc3QgbG9ja1NoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sb2NrU2hpcHMuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG5sb2NrU2hpcHMuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2tTaGlwcyk7XG5sb2NrU2hpcHMudGV4dENvbnRlbnQgPSAnTE9DSyBTSElQUyc7XG5sb2NrU2hpcHMuc2V0QXR0cmlidXRlKCdpZCcsICdsb2NrQnV0dG9uJyk7XG5sb2NrU2hpcHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2NrU2hpcHNEb3duKVxuXG5cbnNoaXBzLmZvckVhY2goc2hpcEVsID0+IHtcbiAgICBjb25zdCBzaGlwSG9sZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBIb2xkLmNsYXNzTGlzdC5hZGQoJ3NoaXBIb2xkJylcbiAgICBzaGlwSG9sZC5hcHBlbmRDaGlsZChzaGlwRWwpO1xuICAgIHNoaXBIb2xkLnN0eWxlLndpZHRoID0gc2hpcEVsLmZpcnN0Q2hpbGQuc3R5bGUud2lkdGg7XG4gICAgc2hpcEhvbGRlci5hcHBlbmRDaGlsZChzaGlwSG9sZCk7XG4gICAgbWFudWFsRHJhZyhzaGlwRWwsIHBsYXllcik7XG59KVxuY29uc3Qgc3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmFtZT1cImNydWlzZXJcIl0nKTtcbnN1YlswXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsICdzdWJtYXJpbmUnKTtcblxuXG5jb25zdCBwbGF5ZXJQbGFjZSA9IChjb2wxLCByb3cxLCBsZW5ndGgsIHJvdCwgYVBsYXllciwgbmFtZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBiZWdpbm5pbmcgcm90YXRlZD8gJHtyb3R9YClcbiAgICBjb25zdCBuID0gbmFtZTtcbiAgICBjb25zdCByb3cgPSByb3cxICsxIDtcbiAgICBjb25zdCBjb2wgPSBhbHBoYVtjb2wxXTtcbiAgICBjb25zdCBjb29yZCA9IFtjb2wsIHJvd107XG4gICAgY29uc3QgbGVuID0gbGVuZ3RoO1xuICAgIGNvbnN0IGlzUm90YXRlZCA9IHJvdDtcbiAgICBsZXQgZGlyID0gJ3InO1xuICAgIGlmKGlzUm90YXRlZCA9PT0gJ3RydWUnKXtcbiAgICAgICAgZGlyID0gJ2QnXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBkaXJlY3Rpb24gaXMgJHtkaXJ9YClcbiAgICBjb25zdCB2YWxpZCA9IGFQbGF5ZXIucGxhY2VTaGlwKGxlbixjb29yZCxkaXIsbik7XG4gICAgY29uc29sZS5sb2coYFRoaXMgd2FzIHZhbGlkPyAke3ZhbGlkfWApXG4gICAgcmV0dXJuIHZhbGlkO1xufVxuXG5mdW5jdGlvbiByb3RhdGUoZXYpe1xuICAgIGlmKGV2LmtleSA9PT0gJ3InKXtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBjdXJyZW50Um90YXRpb24gPSBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGNvbnNvbGUubG9nKCdyb3RhdGluZycpO1xuICAgICAgICBpZigoY3VycmVudFJvdGF0aW9uID09PSAnJyl8fChjdXJyZW50Um90YXRpb24gPT09ICdyb3RhdGUoMGRlZyknKSApe1xuICAgICAgICAgICAgY3VycmVudFJvdGF0aW9uID0gMDtcbiAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpYDtcbiAgICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY3VycmVudFJvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGxldCBuZXdSb3RhdGlvbiA9IGN1cnJlbnRSb3RhdGlvbls3XSArIGN1cnJlbnRSb3RhdGlvbls4XTtcbiAgICAgICAgICAgIG5ld1JvdGF0aW9uID0gTnVtYmVyKG5ld1JvdGF0aW9uKTtcbiAgICAgICAgICAgIG5ld1JvdGF0aW9uIC09IDkwO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Um90YXRpb24pXG4gICAgICAgICAgICBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bmV3Um90YXRpb259ZGVnKWA7XG4gICAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlZCcsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHBhcmVudCBub2RlIGlzIHNoaXBob2xkIGRvLCBub3JtYWwsIG90aGVyIHdpc2UsIGdldCBzdGFydCBjb29yZFxuICAgICAgICAvLyBidWlsZCBhIHNoaXAgaW4gb3Bwb3NpdGUgZGlyZWN0aW9uIChob3Jpem9udGFsIG9yIHZlcnRpY2FsKSwgYmFzaWNhbGx5IHRyZWF0IGFzIGEgZHJvcCBpZiBpdCdzIGFscmVhZHkgb2YgdGhlIGJvYXJkLlxuICAgICAgICAvLyBpZiBzaGlwIGlzIHZhbGlkIG92ZXJ3cml0ZVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkLnBhcmVudEVsZW1lbnQpO1xuICAgICAgICBpZihzZWxlY3RlZC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2JvYXJkJyl7XG4gICAgICAgICAgICBjb25zdCBpc1JvdGF0ZWQgPSBzZWxlY3RlZC5kYXRhc2V0LnJvdGF0ZWQ7XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBOdW1iZXIoc2VsZWN0ZWQuZGF0YXNldC5zaGlwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnQXJlYSA9IHNlbGVjdGVkLnN0eWxlLmdyaWRBcmVhLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ0FyZWEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbDEgPSBOdW1iZXIoZ0FyZWFbMF0gLTIpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNvbE5leHQgPSBOdW1iZXIoZ0FyZWFbNV0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdzEgPSBOdW1iZXIoZ0FyZWFbMV0gLTIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdzEpO1xuICAgICAgICAgICAgICAgIHZhbGlkID0gcGxheWVyUGxhY2UoY29sMSwgcm93MSwgbGVuZ3RoLCBpc1JvdGF0ZWQsIHBsYXllciwgc2VsZWN0ZWQuZGF0YXNldC5uYW1lKSBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF2YWxpZCkge1xuICAgICAgICBjdXJyZW50Um90YXRpb24gPSBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgICAgICBpZigoY3VycmVudFJvdGF0aW9uID09PSAnJyl8fChjdXJyZW50Um90YXRpb24gPT09ICdyb3RhdGUoMGRlZyknKSApe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSg5MGRlZylgO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY3VycmVudFJvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uLnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Um90YXRpb24gPSBjdXJyZW50Um90YXRpb25bN10gKyBjdXJyZW50Um90YXRpb25bOF07XG4gICAgICAgICAgICAgICAgbmV3Um90YXRpb24gPSBOdW1iZXIobmV3Um90YXRpb24pO1xuICAgICAgICAgICAgICAgIG5ld1JvdGF0aW9uIC09IDkwO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1JvdGF0aW9uKVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtuZXdSb3RhdGlvbn1kZWcpYDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIHNlbGVjdGVkLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbC1zaGFrZScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FwcGx5aW5nIHNoYWtlJylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3NlbGVjdGVkLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbC1zaGFrZScpfSwgJzUwMCcpXG4gICAgICAgIH1cbiAgICB9ICBcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCByb3RhdGUpXG59XG5cbi8vIGNvbnN0IG1pc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYTBsJyk7XG4vLyBtaXNzLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuXG4vLyBjb25zdCBoaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYTFsJyk7XG4vLyBoaXQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGRyYXdMYXlvdXQiLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IGRyYXdCb2FyZCBmcm9tIFwiLi9HVUlCb2FyZFwiO1xuaW1wb3J0IGRyYXdTaGlwcyBmcm9tIFwiLi9HVUlTaGlwXCI7XG5pbXBvcnQgbWFudWFsRHJhZyBmcm9tIFwiLi9tYW51YWxEcmFnXCI7XG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbmNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuXG5jb25zdCBhZGRTdHlsZXMgPSAoYW5Ob2RlLCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBhTm9kZSA9IGFuTm9kZTtcbiAgICBjb25zdCB4ID0gYWxwaGEuaW5kZXhPZihhTm9kZS5pZC5zcGxpdCgnJylbMF0pO1xuICAgIGNvbnN0IHkgPSBhTm9kZS5pZC5zcGxpdCgnJylbMV07XG4gICAgY29uc3QgdmFsID0gcGxheWVyLnJvd3NbeF1beV07XG4gICAgaWYodmFsID09PSAnTScpe1xuICAgICAgICBhTm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICB9XG4gICAgaWYodmFsID09PSAnSCcpe1xuICAgICAgICBhTm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgIH1cbiAgICBpZih2YWwgPT09ICdFJyl7XG4gICAgICAgIGFOb2RlLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFOb2RlLnRleHRDb250ZW50ID0gdmFsO1xuICAgIH1cbn1cbmNvbnN0IGFkZFN0eWxlczIgPSAoYW5Ob2RlLCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBhTm9kZSA9IGFuTm9kZTtcbiAgICBjb25zdCB4ID0gYWxwaGEuaW5kZXhPZihhTm9kZS5pZC5zcGxpdCgnJylbMF0pO1xuICAgIGNvbnN0IHkgPSBhTm9kZS5pZC5zcGxpdCgnJylbMV07XG4gICAgY29uc3QgdmFsID0gcGxheWVyLnJvd3NbeF1beV07XG4gICAgaWYodmFsID09PSAnTScpe1xuICAgICAgICBhTm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICB9XG4gICAgaWYodmFsID09PSAnSCcpe1xuICAgICAgICBhTm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgIH1cbiAgICBpZih2YWwgPT09ICdFJyl7XG4gICAgICAgIGFOb2RlLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFOb2RlLnRleHRDb250ZW50ID0gdmFsO1xuICAgIH1cbn1cblxuXG5cbmNvbnN0IHJlbmRlciA9IChwbGF5ZXIsIHBsYXllcjIpID0+IHtcbmNvbnN0IG9sZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbm9sZENvbnRhaW5lci5yZW1vdmUoKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5jb25zdCBsb2cgPSBkcmF3Qm9hcmQobnVsbCwgJ2wnKTtcbmxvZy5pZCA9ICdsb2cnO1xuLy8gY29uc3QgbnVtID0gcGxheWVyLnBsYXllck51bTtcbmNvbnN0IG1haW5Cb2FyZCA9IGRyYXdCb2FyZChwbGF5ZXIsICdtJyk7XG5tYWluQm9hcmQuaWQgPSAnbWFpbkJvYXJkJztcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2cpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Cb2FyZCk7XG5cbmNvbnN0IHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdG0nKTtcbkFycmF5LmZyb20odW5pdHMpLmZvckVhY2godW5pdCA9PiB7XG4gICAgYWRkU3R5bGVzKHVuaXQsIHBsYXllcik7XG59KVxuXG5jb25zdCBsdW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1bml0bCcpO1xuQXJyYXkuZnJvbShsdW5pdHMpLmZvckVhY2godW5pdCA9PiB7XG4gICAgYWRkU3R5bGVzMih1bml0LCBwbGF5ZXIyKTtcbn0pXG5cbmNvbnN0IG1lc3NhZ2VCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVzc2FnZUJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZUJvYXJkJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUJvYXJkKTtcbm1lc3NhZ2VCb2FyZC50ZXh0Q29udGVudCA9IHBsYXllci5wTnVtO1xufVxuXG5cbi8vIGNvbnN0IG1pc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYTBsJyk7XG4vLyBtaXNzLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuXG4vLyBjb25zdCBoaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYTFsJyk7XG4vLyBoaXQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlciIsImltcG9ydCBtYW51YWxEcmFnIGZyb20gXCIuL21hbnVhbERyYWdcIjtcblxuY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG5jb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcblxuY29uc3QgcHJpbnRTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgc2hpcHNBcnJheS5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzaGlwRWwubmFtZSlcbiAgICB9KVxuICB9XG5mdW5jdGlvbiBkcmFnKGV2KSB7XG4gICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIGV2LnRhcmdldC5pZCk7XG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdJdGVtJyk7XG4gICAgY29uc3Qgbm9kZSA9IGV2LnRhcmdldDtcbiAgICBzZXRUaW1lb3V0ICgoKSA9PiB7XG4gICAgICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB9LCAxKTtcbiAgfVxuXG5cbmZ1bmN0aW9uIHBsYWNlKGV2KXtcbiAgICBjb25zdCBub2RlID0gZXYudGFyZ2V0O1xuICAgIGV2LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnSXRlbScpO1xuICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgICAgbm9kZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjtcbiAgICAgIH0sIDEpO1xufVxuXG4vLyBjb25zdCBwbGF5ZXJQbGFjZSA9IChjb2wxLCByb3cxLCBsZW5ndGgsIHJvdCwgcGxheWVyLCBuYW1lKSA9PiB7XG4vLyAgICAgY29uc3QgbiA9IG5hbWU7XG4vLyAgICAgY29uc3QgY29sID0gY29sMSAtIDE7XG4vLyAgICAgY29uc3Qgcm93ID0gYWxwaGFbcm93MSAtIDJdO1xuLy8gICAgIGNvbnN0IGNvb3JkID0gW3JvdywgY29sXTtcbi8vICAgICBjb25zdCBsZW4gPSBsZW5ndGg7XG4vLyAgICAgY29uc3QgaXNSb3RhdGVkID0gcm90O1xuLy8gICAgIGxldCBkaXIgPSAncic7XG4vLyAgICAgaWYoaXNSb3RhdGVkKXtcbi8vICAgICAgICAgZGlyID0gJ2QnXG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHZhbGlkID0gcGxheWVyLnBsYWNlU2hpcChsZW4sY29vcmQsZGlyLG4pO1xuLy8gICAgIHJldHVybiB2YWxpZDtcbi8vIH1cblxuZnVuY3Rpb24gc2VsZWN0KGV2KXtcbiAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpO1xuICAgIGlmKG9sZFswXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgb2xkWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICB9XG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59XG5cbi8vIGZ1bmN0aW9uIHJvdGF0ZShldil7XG4vLyAgICAgaWYoZXYua2V5ID09PSAncicpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygncm90YXRpbmcnKTtcbi8vICAgICAgICAgLy8gaWYgcGFyZW50IG5vZGUgaXMgc2hpcGhvbGQgZG8sIG5vcm1hbCwgb3RoZXIgd2lzZSwgZ2V0IHN0YXJ0IGNvb3JkXG4vLyAgICAgICAgIC8vIGJ1aWxkIGEgc2hpcCBpbiBvcHBvc2l0ZSBkaXJlY3Rpb24gKGhvcml6b250YWwgb3IgdmVydGljYWwpLCBiYXNpY2FsbHkgdHJlYXQgYXMgYSBkcm9wIGlmIGl0J3MgYWxyZWFkeSBvZiB0aGUgYm9hcmQuXG4vLyAgICAgICAgIC8vIGlmIHNoaXAgaXMgdmFsaWQgb3ZlcndyaXRlXG4vLyAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKVswXS5wYXJlbnRFbGVtZW50O1xuLy8gICAgICAgICBsZXQgY3VycmVudFJvdGF0aW9uID0gc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtO1xuLy8gICAgICAgICBpZigoY3VycmVudFJvdGF0aW9uID09PSAnJyl8fChjdXJyZW50Um90YXRpb24gPT09ICdyb3RhdGUoMGRlZyknKSApe1xuLy8gICAgICAgICAgICAgY3VycmVudFJvdGF0aW9uID0gMDtcbi8vICAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpYDtcbi8vICAgICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgJ3RydWUnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNle1xuLy8gICAgICAgICAgICAgY3VycmVudFJvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uLnNwbGl0KCcnKTtcbi8vICAgICAgICAgICAgIGxldCBuZXdSb3RhdGlvbiA9IGN1cnJlbnRSb3RhdGlvbls3XSArIGN1cnJlbnRSb3RhdGlvbls4XTtcbi8vICAgICAgICAgICAgIG5ld1JvdGF0aW9uID0gTnVtYmVyKG5ld1JvdGF0aW9uKTtcbi8vICAgICAgICAgICAgIG5ld1JvdGF0aW9uIC09IDkwO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Um90YXRpb24pXG4vLyAgICAgICAgICAgICBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bmV3Um90YXRpb259ZGVnKWA7XG4vLyAgICAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlZCcsICd0cnVlJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQpO1xuLy8gICAgICAgICBpZihzZWxlY3RlZC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2JvYXJkJyl7XG4vLyAgICAgICAgICAgICBjb25zdCBpc1JvdGF0ZWQgPSBzZWxlY3RlZC5kYXRhc2V0LnJvdGF0ZWQ7XG4vLyAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBOdW1iZXIoc2VsZWN0ZWQuZGF0YXNldC5zaGlwKTtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBnQXJlYSA9IHNlbGVjdGVkLnN0eWxlLmdyaWRBcmVhLnNwbGl0KCcnKTtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBjb2wxID0gTnVtYmVyKGdBcmVhWzRdKSAtIDI7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sMSk7XG4vLyAgICAgICAgICAgICAgICAgY29uc3Qgcm93MSA9IE51bWJlcihnQXJlYVswXSkgLSAyO1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdzEpO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGFQbGF5ZXIgPSBzZWxlY3RlZC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucGxheWVyO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRMb2MgPSBwbGF5ZXJQbGFjZShjb2wxLCByb3cxLCBsZW5ndGgsIGlzUm90YXRlZCwgYVBsYXllciwgc2VsZWN0ZWQuZGF0YXNldC5uYW1lKSBcbi8vICAgICAgICAgICAgICAgICBpZihpc1ZhbGlkTG9jKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGFQbGF5ZXIucmVtb3ZlU2hpcChzZWxlY3RlZC5kYXRhc2V0Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgcHJpbnRTaGlwcyhhUGxheWVyLnNoaXBzKVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH0gIFxuLy8gfVxuXG5cbmZ1bmN0aW9uIGRyYWdzdGFydCAoZXYpIHtcbiAgICBtYW51YWxEcmFnKGV2LnRhcmdldClcbiAgICB9O1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcm90YXRlKVxuXG5jb25zdCBuYW1lU2hpcCA9IChsKSA9PiB7XG4gICAgaWYgKGwgPT09IDUpe1xuICAgICAgcmV0dXJuICdjYXJyaWVyJztcbiAgICB9XG4gICAgaWYgKGwgPT09IDQpe1xuICAgICAgcmV0dXJuICdiYXR0bGVzaGlwJztcbiAgICB9XG4gICAgaWYgKGwgPT09IDMpe1xuICAgICAgcmV0dXJuICdjcnVpc2VyJztcbiAgICB9XG4gICAgaWYgKGwgPT09IDIpe1xuICAgICAgcmV0dXJuICdkZXN0cm95ZXInO1xuICAgIH1cbiAgICByZXR1cm4gJ2Vycm9yJ1xuICB9XG5cbmNvbnN0IGRyYXdTaGlwID0gKGxlbikgPT4ge1xuICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdhbmNob3InKTtcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdkYXRhLXNoaXAnLCBsZW4pO1xuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWVTaGlwKGxlbikpO1xuICAgIGNvbnN0IGZha2VzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmFrZXNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgIC8vIGZha2VzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICAvLyBmYWtlc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnKTtcbiAgICAvLyBmYWtlc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgcGxhY2UpO1xuICAgIC8vIGZha2VzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNlbGVjdCk7XG4gICAgZmFrZXNoaXAuc3R5bGUud2lkdGggPSBgJHtsZW4gKiAyNX1weGA7XG4gICAgYW5jaG9yLmFwcGVuZENoaWxkKGZha2VzaGlwKVxuICAgIC8vIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnKTtcbiAgICAvLyBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHBsYWNlKTtcbiAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNlbGVjdCk7XG4gICAgcmV0dXJuIGFuY2hvcjtcbn1cblxuXG5cbmNvbnN0IGRyYXdTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwZGl2cyA9IFtdO1xuICAgIHNoaXBkaXZzLnB1c2goZHJhd1NoaXAoNSkpO1xuICAgIHNoaXBkaXZzLnB1c2goZHJhd1NoaXAoNCkpO1xuICAgIHNoaXBkaXZzLnB1c2goZHJhd1NoaXAoMykpO1xuICAgIHNoaXBkaXZzLnB1c2goZHJhd1NoaXAoMykpO1xuICAgIHNoaXBkaXZzLnB1c2goZHJhd1NoaXAoMikpO1xuICAgIHJldHVybiBzaGlwZGl2cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJhd1NoaXBzXG5cblxuXG5cblxuIiwiaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5mdW5jdGlvbiBnZW5Sb3cobCkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgbCkge1xuICAgIGFycmF5LnB1c2goXCJFXCIpO1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUm93cyhsKSB7XG4gIGNvbnN0IHJvd3MgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IGwpIHtcbiAgICByb3dzLnB1c2goZ2VuUm93KGwpKTtcbiAgICBpICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJvd3M7XG59XG5cbmNvbnN0IGdhbWVib2FyZCA9IChsLCBwdmFsKSA9PiB7XG4gIGNvbnN0IHBOdW0gPSBwdmFsO1xuICBjb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbiAgY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG4gIGNvbnN0IHJvd3MgPSBnZW5lcmF0ZVJvd3MobCk7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gc2hpcHM7XG5cbiAgY29uc3QgdmFsaWRMZW5ndGggPSAobGVuKSA9PiB7XG4gICAgbGV0IHNoaXBUeXBlID0gMDtcbiAgICBnZXRTaGlwcygpLmZvckVhY2goKGFTaGlwKSA9PiB7XG4gICAgICBpZiAoYVNoaXAubGVuZ3RoID09PSBsZW4pIHtcbiAgICAgICAgc2hpcFR5cGUgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsZW4gPT09IDIpIHtcbiAgICAgIGlmIChzaGlwVHlwZSA+IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJzIgc2hpcCBhbHJlYWR5IG9uIGxvZ2dlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxlbiA9PT0gMykge1xuICAgICAgaWYgKHNoaXBUeXBlID4gMikge1xuICAgICAgICBjb25zb2xlLmxvZygnMiAzIHNoaXBzIGFscmVhZHkgb24gbG9nZ2VkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGVuID09PSA1KSB7XG4gICAgICBpZiAoc2hpcFR5cGUgPiAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcyIDMgc2hpcHMgYWxyZWFkeSBvbiBsb2dnZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgaWYgKGxlbiA9PT0gNCkge1xuICAgICAgaWYgKHNoaXBUeXBlID4gMSkge1xuICAgICAgICBjb25zb2xlLmxvZygnNCBzaGlwIGFscmVhZHkgb24gbG9nZ2VkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IG1hdGNoID0gKGNvb3JkMSwgY29vcmQyKSA9PiB7XG4gICAgaWYgKGNvb3JkMVswXSA9PT0gY29vcmQyWzBdICYmIGNvb3JkMVsxXSA9PT0gY29vcmQyWzFdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBCeU5hbWUgPSAobmFtZSkgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goc2hpcEVsID0+IHtcbiAgICAgIGlmKHNoaXBFbC5uYW1lID09PSBuYW1lKXtcbiAgICAgICAgcmV0dXJuIHNoaXBFbDtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGNvbnN0IHByaW50U2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIHNoaXBzQXJyYXkuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgICAgY29uc29sZS5sb2coc2hpcEVsLm5hbWUpXG4gICAgICBjb25zb2xlLmxvZyhzaGlwRWwuY29vcmRzKVxuICAgIH0pXG4gIH1cbiAgY29uc3Qgb3ZlcmxhcHMgPSAoYVNoaXAsIG5ld1NoaXApID0+IHtcbiAgICBjb25zb2xlLmxvZygnZG8gdGhlIGZvbGxvd2luZyBvdmVybGFwPycpXG4gICAgY29uc29sZS5sb2coYVNoaXAubmFtZSk7XG4gICAgY29uc29sZS5sb2cobmV3U2hpcC5uYW1lKTtcbiAgICBjb25zb2xlLmxvZygnbmV3IHNoaXAgaXMgTE9DQVRFRCBhdDonKVxuICAgIGNvbnNvbGUubG9nKG5ld1NoaXAuY29vcmRzKVxuICAgIGlmKGFTaGlwLmxlbmd0aCA9PT0gbmV3U2hpcC5sZW5ndGgpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgb3ZlcmxhcCA9IGZhbHNlO1xuICAgIGFTaGlwLmNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT5cbiAgICAgIG5ld1NoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkcCkgPT4ge1xuICAgICAgICBpZiAobWF0Y2goY29vcmRwLCBjb29yZCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZm91bmQgb3ZlcmxhcCcpXG4gICAgICAgICAgY29uc29sZS5sb2coY29vcmRwLCBjb29yZClcbiAgICAgICAgICBvdmVybGFwID0gdHJ1ZTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIG92ZXJsYXA7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTWF0cml4ID0gKGFTaGlwKSA9PiB7XG4gICAgY29uc29sZS5sb2coYVNoaXApXG4gICAgYVNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGFscGhhLmluZGV4T2YoY29vcmRbMF0pO1xuICAgICAgY29uc29sZS5sb2coY29vcmRbMF0pXG4gICAgICByb3dzW2luZGV4XVtjb29yZFsxXV0gPSBzaGlwcy5pbmRleE9mKGFTaGlwKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdGhlU2hpcDtcbiAgICBjb25zb2xlLmxvZyhgcmVtb3ZpbmcgYSAke25hbWV9IGZyb21gKVxuICAgIGNvbnNvbGUubG9nKHNoaXBzKVxuICAgIHNoaXBzLmZvckVhY2goc2hpcEVsID0+IHtcbiAgICAgIGlmKHNoaXBFbC5uYW1lID09PSBuYW1lKXtcbiAgICAgICAgdGhlU2hpcCA9IHNoaXBFbDtcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoZVNoaXApO1xuICAgIGlmICh0aGVTaGlwICE9PSB1bmRlZmluZWQpe1xuICAgICAgY29uc3QgaW5kZXggPSBzaGlwcy5pbmRleE9mKHRoZVNoaXApXG4gICAgICBzaGlwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBwcmludFNoaXBzKHNoaXBzKTtcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRTaGlwTmFtZXMgPSAoc2hpcHNBcnIpID0+IHtcbiAgICBjb25zdCBuYW1lcyA9IFtdO1xuICAgIHNoaXBzQXJyLmZvckVhY2goc2hpcEVsID0+IHtcbiAgICAgIG5hbWVzLnB1c2goc2hpcEVsLm5hbWUpXG4gICAgfSlcbiAgICByZXR1cm4gbmFtZXM7XG4gIH1cbiAgY29uc3Qgc2hpcEV4aXN0cyA9IChuKSA9PiB7XG4gICAgY29uc3QgbmFtZXMgPSBjdXJyZW50U2hpcE5hbWVzKHNoaXBzKTtcbiAgICBpZihuYW1lcy5pbmNsdWRlcyhuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChsZW4sIGNvb3JkLCBkaXIsIG5hbWUpID0+IHtcbiAgICBjb25zb2xlLmxvZygncGxhY2luZyBzaGlwOicpO1xuICAgIGNvbnNvbGUubG9nKG5hbWUpXG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnQgc2hpcHMgYXJlOicpXG4gICAgY29uc29sZS5sb2cocHJpbnRTaGlwcyhzaGlwcykpXG5cbiAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAvL2NoZWNrIGlmIHNoaXAgYWxyZWFkeSBleGlzdHMsIGlmIHNvLCByZW1vdmUgb2xkIHNoaXBcbiAgICBpZiAoc2hpcEV4aXN0cyhuYW1lKSkge1xuICAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nIHNoaXAnKTtcbiAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgcmVtb3ZlU2hpcChuYW1lKTtcbiAgICB9XG4gICAgLy90cnkgbWFraW5nIGEgc2hpcCwgaWYgaXQgbWFrZXMgb25lLCBjaGVjayBpZiBpdCBvdmVybGFwcywgaWYgaXQgZG9lcywgZG9uJ3QgcHVzaCBpdC4gXG4gICAgICBjb25zdCBuZXdTaGlwID0gc2hpcChsZW4sIGNvb3JkLCBkaXIsIG5hbWUpO1xuICAgICAgaWYobmV3U2hpcCAhPT0gbnVsbCl7XG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgaWYoc2hpcHMubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICBzaGlwcy5mb3JFYWNoKChhU2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKG92ZXJsYXBzKGFTaGlwLCBuZXdTaGlwKSkge1xuICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsaWQgPT09IHRydWUpe1xuICAgICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7IFxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzaGlwIHB1c2hlZCB3YXM6JylcbiAgICAgICAgICBjb25zb2xlLmxvZyhuZXdTaGlwLm5hbWUpXG4gICAgICAgICAgcHJpbnRTaGlwcyhzaGlwcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdXBkYXRlTWF0cml4KG5ld1NoaXApO1xuICAgIFxuICAgIHJldHVybiB2YWxpZDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBhbHBoYS5pbmRleE9mKGNvb3JkWzBdKTtcbiAgICBjb25zdCBjdXJyZW50VmFsID0gcm93c1tpbmRleF1bY29vcmRbMV1dO1xuICAgIGlmICh0eXBlb2YgY3VycmVudFZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcm93c1tpbmRleF1bY29vcmRbMV1dID0gXCJIXCI7XG4gICAgICBzaGlwc1tjdXJyZW50VmFsXS5oaXQoY29vcmQpO1xuICAgICAgcmV0dXJuIFwiSSB3b3JrZWRcIjtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRWYWwgPT09IFwiRVwiKSB7XG4gICAgICByb3dzW2luZGV4XVtjb29yZFsxXV0gPSBcIk1cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiYWxyZWFkeSBmaXJlZCBoZXJlLiBUcnkgYWdhaW4uXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaCgoYVNoaXApID0+IHtcbiAgICAgIGlmICghYVNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBCeVN0YXJ0ID0gKGNvb3JkKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2dldHRpbmcgc2hpcCcpXG4gICAgc2hpcHMuZm9yRWFjaChhU2hpcCA9PiB7XG4gICAgICBpZigoYVNoaXAuY29vcmRzWzBdWzBdPT09IGNvb3JkWzBdKSAmJiAoYVNoaXAuY29vcmRzWzBdWzFdPT09IGNvb3JkWzFdKSl7XG4gICAgICAgIHJldHVybiBhU2hpcDtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHsgcm93cywgc2hpcHMsIHBsYWNlU2hpcCwgZ2V0U2hpcHMsIG92ZXJsYXBzLCBtYXRjaCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuaywgcmVtb3ZlU2hpcCwgZ2V0U2hpcEJ5U3RhcnQsIGdldFNoaXBCeU5hbWUsIHBOdW0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDtcblxuXG4iLCJjb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbmNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuXG5jb25zdCBwcmludFNoaXBzID0gKHNoaXBzQXJyYXkpID0+IHtcbiAgc2hpcHNBcnJheS5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgY29uc29sZS5sb2coc2hpcEVsLm5hbWUpXG4gIH0pXG59XG5cbmNvbnN0IHJlbW92ZVN0eWxlID0gKHByZXZpb3VzRWxlbSkgPT4ge1xuICAgIGNvbnN0IGRyYWdsZWF2ZSA9IG5ldyBFdmVudChcImRyYWdsZWF2ZVwiKTtcbiAgICBwcmV2aW91c0VsZW0uZGlzcGF0Y2hFdmVudChkcmFnbGVhdmUpO1xufVxuXG5jb25zdCBzdHlsZU5vZGUgPSAodGhlRWxlbSkgPT4ge1xuICAgIGNvbnN0IGRyYWdvdmVyID0gbmV3IEV2ZW50KFwiZHJhZ292ZXJcIik7XG4gICAgdGhlRWxlbS5kaXNwYXRjaEV2ZW50KGRyYWdvdmVyKTtcbiAgICAgICAgfVxuXG5jb25zdCBwbGF5ZXJQbGFjZSA9IChjb2wxLCByb3cxLCBsZW5ndGgsIHJvdCwgcGxheWVyLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuID0gbmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGNvbDEgLSAxO1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gYWxwaGFbcm93MSAtIDJdO1xuICAgICAgICAgICAgY29uc3QgY29vcmQgPSBbcm93LCBjb2xdO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gbGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgaXNSb3RhdGVkID0gcm90O1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXNSb3RhdGVkKTtcbiAgICAgICAgICAgIGxldCBkaXI7XG4gICAgICAgICAgICBpZihpc1JvdGF0ZWQgPT09ICd0cnVlJyl7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRpciA9ICdkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIGRpciA9ICdyJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpcik7XG4gICAgICAgICAgICBjb25zdCB2YWxpZCA9IHBsYXllci5wbGFjZVNoaXAobGVuLGNvb3JkLGRpcixuKTtcbiAgICAgICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgICAgfVxuLy8gY29uc3QgcGxhY2VtZW50Q2hlY2sgPSAobGVuLCByb3RhdGVkLCByb3cxLCBjb2wxKSA9PiB7XG4vLyAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4vLyAgICAgaWYocm90YXRlZCl7XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gMil7XG4vLyAgICAgICAgICAgICBpZiAocm93MSA8IDExKXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gMyl7XG4vLyAgICAgICAgICAgICBpZiAocm93MSA8IDEwKXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNCl7XG4vLyAgICAgICAgICAgICBpZiAocm93MSA8IDkpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYobGVuID09PSA1KXtcbi8vICAgICAgICAgICAgIGlmIChyb3cxIDwgOCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgIH0gXG4vLyAgICAgZWxzZSB7XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gMil7XG4vLyAgICAgICAgICAgICBpZiAoY29sMSA8IDExKXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gMyl7XG4vLyAgICAgICAgICAgICBpZiAoY29sMSA8IDEwKXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNCl7XG4vLyAgICAgICAgICAgICBpZiAoY29sMSA8IDkpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYobGVuID09PSA1KXtcbi8vICAgICAgICAgICAgIGlmIChjb2wxIDwgOCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICAvL2NvbnNvbGUubG9nKGxlbiwgcm90YXRlZCwgY29sMSwgcm93MSwgdmFsaWQpO1xuLy8gICAgIHJldHVybiB2YWxpZDtcbi8vIH1cblxuY29uc3QgaXNSb3RhdGVkID0gKHZhbCkgPT4ge1xuICAgIGlmKHZhbC5sZW5ndGggIT09IDApe1xuICAgICAgICBpZih2YWxbN10gIT09ICcwJyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IHBpeGVsczJMZW5ndGggPSAobGVuKSA9PiB7XG4gICAgaWYobGVuID09PSAnMTI1cHgnKXtcbiAgICAgICAgcmV0dXJuIDVcbiAgICB9XG4gICAgaWYobGVuID09PSAnMTAwcHgnKXtcbiAgICAgICAgcmV0dXJuIDRcbiAgICB9XG4gICAgaWYobGVuID09PSAnNzVweCcpe1xuICAgICAgICByZXR1cm4gM1xuICAgIH1cbiAgICBpZihsZW4gPT09ICc1MHB4Jyl7XG4gICAgICAgIHJldHVybiAyXG4gICAgfVxufVxuXG4vLyBjb25zdCBhbGxBcmVhcyA9IChhcnJheU9mQW5jaG9ycykgPT4ge1xuLy8gICAgIGNvbnN0IGFsbHNoaXBBcmVhcyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXTtcblxuLy8gfVxuXG4vLyBjb25zdCBjYWxjQXJlYSA9IChjb2wxLCByb3cxLCBsZW4sIHJvdGF0ZWQpID0+IHtcbi8vICAgICBsZXQgY29sID0gY29sMTtcbi8vICAgICBsZXQgcm93ID0gcm93MTtcbi8vICAgICBjb25zdCBhcnJheU9mVGFrZW5FbGVtcyA9IFtdO1xuLy8gICAgIGNvbnN0IGFycmF5T2ZUYWtlbklEcyA9IFtdO1xuLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW4tMTspe1xuLy8gICAgICAgICBsZXQgaWQ7XG4vLyAgICAgICAgIGlmKCFyb3RhdGVkKXtcbi8vICAgICAgICAgICAgIHJvdyA9IGFscGhhW3Jvd107XG4vLyAgICAgICAgICAgICBpZCA9IGAke3Jvd30ke2NvbCArIDF9bWBcbi8vICAgICAgICAgYXJyYXlPZlRha2VuSURzLnB1c2goaWQpO1xuLy8gICAgICAgICBjb2wgKz0gMTt9XG4vLyAgICAgICAgIGVsc2V7XG4vLyAgICAgICAgICAgICBjb25zdCB0aGVSb3cgPSBhbHBoYVtyb3ddO1xuLy8gICAgICAgICAgICAgaWQgPSBgJHt0aGVSb3d9JHtjb2x9bWBcbi8vICAgICAgICAgYXJyYXlPZlRha2VuSURzLnB1c2goaWQpO1xuLy8gICAgICAgICByb3cgKz0gMTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpKz0xO1xuLy8gICAgIH1cbi8vICAgICBhcnJheU9mVGFrZW5JRHMuZm9yRWFjaChpZCA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGVsZW0gPSBnZXRFbGVtZW50QnlJZChpZCk7XG4vLyAgICAgICAgIGFycmF5T2ZUYWtlbkVsZW1zLnB1c2goZWxlbSk7XG4vLyAgICAgfSlcbi8vICAgICByZXR1cm4gYXJyYXlPZlRha2VuRWxlbXM7XG4vLyB9XG5cbi8vIGNvbnN0IGlzVGFrZW4gPSAobm9kZSkgPT4ge1xuLy8gICAgIGlmKG5vZGUuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKXtcbi8vICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBmYWxzZTtcbi8vIH1cblxuY29uc3QgbWFudWFsRHJhZyA9IChub2RlLCBwbGF5ZXIpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Cb2FyZFwiKTtcbiAgY29uc3QgYmFsbCA9IG5vZGU7XG4gIGNvbnN0IGxlbmd0aCA9IHBpeGVsczJMZW5ndGgobm9kZS5jaGlsZHJlblswXS5zdHlsZS53aWR0aCk7XG4gIFxuLy8gICBsZXQgaW5kZXggPSBBcnJheShiYWxsLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pLmluZGV4T2YoYmFsbCk7XG5cbiAgIGZ1bmN0aW9uIGRyYWdJdGVtIChldmVudCkge1xuICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcImRyYWdJdGVtXCIpO1xuICAgIC8vICgxKSBzdGFydCB0aGUgcHJvY2Vzc1xuICAgIGNvbnN0IG9nUGFyZW50ID0gYmFsbC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnNvbGUubG9nKCdPRyBwYXJlbnQgaXM6JylcbiAgICBjb25zb2xlLmxvZyhvZ1BhcmVudClcbiAgICBsZXQgcm90YXRlZCA9IG5vZGUuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCcnKTtcbiAgICByb3RhdGVkID0gaXNSb3RhdGVkKHJvdGF0ZWQpO1xuICAgIGJhbGwuc2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZWQnLCByb3RhdGVkKVxuICAgIC8vIGNvbnNvbGUubG9nKGxlbmd0aCwgcm90YXRlZClcbiAgICAvLyAoMikgcHJlcGFyZSB0byBtb3Zpbmc6IG1ha2UgYWJzb2x1dGUgYW5kIG9uIHRvcCBieSB6LWluZGV4XG4gICAgYmFsbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBiYWxsLnN0eWxlLnpJbmRleCA9IDEwMDA7XG5cbiAgICAvLyBtb3ZlIGl0IG91dCBvZiBhbnkgY3VycmVudCBwYXJlbnRzIGRpcmVjdGx5IGludG8gYm9keVxuICAgIC8vIHRvIG1ha2UgaXQgcG9zaXRpb25lZCByZWxhdGl2ZSB0byB0aGUgYm9keVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJhbGwpO1xuICAgIC8vIGJvYXJkLmFwcGVuZENoaWxkKGJhbGwpO1xuICAgIC8vIC4uLmFuZCBwdXQgdGhhdCBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgYmFsbCB1bmRlciB0aGUgY3Vyc29yXG4gICAgbGV0IGFuSUQ7XG4gICAgbGV0IHRoZUVsZW07XG4gICAgbGV0IHByZXZpb3VzRWxlbTtcbiAgICAvLyBjZW50ZXJzIHRoZSBiYWxsIGF0IChwYWdlWCwgcGFnZVkpIGNvb3JkaW5hdGVzXG4gICAgZnVuY3Rpb24gbW92ZUF0KHBhZ2VYLCBwYWdlWSkge1xuICAgICAgYmFsbC5zdHlsZS5sZWZ0ID0gYCR7cGFnZVggLSBiYWxsLm9mZnNldFdpZHRoIC8gMn1weGA7XG4gICAgICBiYWxsLnN0eWxlLnRvcCA9IGAke3BhZ2VZIC0gYmFsbC5vZmZzZXRIZWlnaHQgLyAyfXB4YDtcbiAgICAgIGNvbnN0IGRyb3BFbGVtTGlzdCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KHBhZ2VYLCBwYWdlWSk7XG5cbiAgICAgIGRyb3BFbGVtTGlzdC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGFzc2xpc3QnKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhBcnJheS5mcm9tKGVsZW0uY2xhc3NMaXN0KSlcbiAgICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJ1bml0bVwiKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGNvbnRhaW5zIGl0ISByZXR1cm4gSUQ6ICR7ZWxlbS5pZH1gKTtcbiAgICAgICAgICAgIGFuSUQgPSBlbGVtLmlkO1xuICAgICAgICAgICAgdGhlRWxlbSA9IGVsZW07XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHN0eWxlTm9kZSh0aGVFbGVtKSwgNTAwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocHJldmlvdXNFbGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGVsZW0uaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3ByZXZpb3VzRWxlbS5pZH0gdnMuICR7ZWxlbS5pZH1gKTtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNFbGVtICE9PSBlbGVtKSB7XG4gICAgICAgICAgICAgICAgICByZW1vdmVTdHlsZShwcmV2aW91c0VsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBwcmV2aW91c0VsZW0gPSB0aGVFbGVtO1xuICAgICAgLy8gc3R5bGVOb2RlKGRyb3BFbGVtKVxuICAgIH1cblxuICAgIG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXYpIHtcbiAgICAgIG1vdmVBdChldi5wYWdlWCwgZXYucGFnZVkpO1xuICAgICAgLy8gY29uc3QgdW5FbGVtID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RyYWdob3ZlcicpWzBdO1xuICAgICAgLy8gZHJvcEVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2hvdmVyJylcbiAgICB9XG5cbiAgICAvLyAoMykgbW92ZSB0aGUgYmFsbCBvbiBtb3VzZW1vdmVcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICBsZXQgaW5mbztcbiAgICAvLyAoNCkgZHJvcCB0aGUgYmFsbCwgcmVtb3ZlIHVubmVlZGVkIGhhbmRsZXJzXG4gICAgYmFsbC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk1PVVNFVVAhXCIpO1xuICAgICAgYmFsbC5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XG4gICAgICBiYWxsLnN0eWxlLmxlZnQgPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS50b3AgPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS56SW5kZXggPSBcIlwiO1xuICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ0l0ZW1cIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbklEKTtcbiAgICAgIGlmIChhbklEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJRCBXT1JLRUQhXCIpO1xuICAgICAgICBjb25zdCBsb2MgPSBhbklELnNwbGl0KFwiXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2MpO1xuICAgICAgICBjb25zdCBjb2wxID0gTnVtYmVyKGxvY1sxXSkgKyAyO1xuICAgICAgICBjb25zdCBjb2wyID0gY29sMSArIDE7XG4gICAgICAgIGNvbnN0IHJvdzEgPSBhbHBoYS5pbmRleE9mKGxvY1swXSkgKyAyO1xuICAgICAgICBjb25zdCByb3cyID0gcm93MSArIDE7XG4gICAgICAgIC8vIGNvbnN0IGRyb3BzaGlwID0gbmV3IEN1c3RvbUV2ZW50KFwiZHJvcHNoaXBcIix7IGRldGFpbDoge2NvbDogY29sMS0xLCByb3c6IChyb3cxLTIpLCBsZW46IGxlbmd0aCwgcm90OiByb3RhdGVkfX0gKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChkcm9wc2hpcClcbiAgICAgICAgLy8gY29uc3Qgbm90VGFrZW4gPSAoIWlzVGFrZW4odGhlRWxlbSkpO1xuICAgICAgICAvLyBjb25zdCB2YWxpZCA9IHBsYWNlbWVudENoZWNrKGxlbmd0aCwgcm90YXRlZCwgcm93MSwgY29sMSkgJiYgbm90VGFrZW47XG4gICAgICAgIGNvbnN0IGFtUm90YXRlZCA9IGJhbGwuZGF0YXNldC5yb3RhdGVkO1xuICAgICAgICBjb25zdCBpc1ZhbGlkTG9jID0gcGxheWVyUGxhY2UoY29sMSwgcm93MSwgbGVuZ3RoLCBhbVJvdGF0ZWQsIHBsYXllciwgYmFsbC5kYXRhc2V0Lm5hbWUpIFxuICAgICAgICBjb25zb2xlLmxvZygnV0FzIEkgVkFMSUQ/JylcbiAgICAgICAgY29uc29sZS5sb2coaXNWYWxpZExvYylcbiAgICAgICAgaWYoaXNWYWxpZExvYyl7XG4gICAgICAgICAgY29uc29sZS5sb2coaXNWYWxpZExvYylcbiAgICAgICAgICAgIGJhbGwuc3R5bGUuZ3JpZEFyZWEgPSBgJHtyb3cxfS8ke2NvbDF9LyR7cm93Mn0vJHtjb2wyfWA7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAgICAgICAgIGluZm8gPSBbW3JvdzEsIGNvbDFdLCBsZW5ndGgsIHJvdGF0ZWRdO1xuICAgICAgICAgICAgLy8gaWYob2dQYXJlbnQuY2xhc3NMaXN0WzBdICE9PSAnc2hpcEhvbGQnKXtcbiAgICAgICAgICAgIC8vICAgICBwbGF5ZXIucmVtb3ZlU2hpcChiYWxsLmRhdGFzZXQubmFtZSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBwcmludFNoaXBzKHBsYXllci5zaGlwcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYHRoZSBvZyBwYXJlbnQgaXMgbm93OiAke29nUGFyZW50fWApXG4gICAgICAgICAgb2dQYXJlbnQuYXBwZW5kQ2hpbGQoYmFsbCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGUgb2cgcGFyZW50IGlzIG5vdzogJHtvZ1BhcmVudH1gKVxuICAgICAgICBvZ1BhcmVudC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICBjb25zdCBzdHlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcmFnaG92ZXInKTtcbiAgICAgIEFycmF5LmZyb20oc3R5bGVkKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICByZW1vdmVTdHlsZShlbGVtZW50KX0pXG4gICAgICBiYWxsLm9ubW91c2V1cCA9IG51bGw7XG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9O1xuICB9O1xuICBiYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRyYWdJdGVtKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFudWFsRHJhZztcblxuLy93aGVuIGEgc2hpcCB0aGF0IGhhcyBiZWVuIHBsYWNlZCBpcyBwaWNrIHVwIChyZWFkIHBhcmVudCBub2RlKSBPUiByb3RhdGVkIVxuLy90aGVuIGlmIGl0IGNyZWF0ZXMgYSB2YWxpZCBzaGlwLCBvdmVyIHdyaXRlIHRoZSBvbGQgc2hpcC5cblxuXG4iLCJmdW5jdGlvbiB2YWxpZEVudHJ5KGxlbmd0aCwgc3RhcnRQb2ludCwgZGlyZWN0aW9uLCBhbHBoYSkge1xuICBjb25zb2xlLmxvZyhgc3RhcnQgcG9pbnQgaXMgJHtzdGFydFBvaW50fWApXG4gIGlmIChkaXJlY3Rpb24gPT09IFwiclwiKSB7XG4gICAgaWYgKHN0YXJ0UG9pbnRbMV0gKyBsZW5ndGggLSAxID4gMTApIHtcbiAgICAgIGNvbnNvbGUubG9nKHN0YXJ0UG9pbnRbMV0pXG4gICAgICBjb25zb2xlLmxvZyhzdGFydFBvaW50WzFdICsgbGVuZ3RoKVxuICAgICAgY29uc29sZS5sb2coJ2dvZXMgdG9vIGZhciByaWdodCcpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwidVwiKSB7XG4gICAgaWYgKGFscGhhLmluZGV4T2Yoc3RhcnRQb2ludFswXSkgLSBsZW5ndGggLSAxIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcImRcIikge1xuICAgIGNvbnNvbGUubG9nKGFscGhhLmluZGV4T2ZcbiAgICAgIChzdGFydFBvaW50WzBdKSlcbiAgICAgIGNvbnNvbGUubG9nKGFscGhhLmluZGV4T2ZcbiAgICAgICAgKHN0YXJ0UG9pbnRbMF0pK2xlbmd0aCApXG4gICAgaWYgKGFscGhhLmluZGV4T2Yoc3RhcnRQb2ludFswXSkgKyBsZW5ndGggID4gMTApIHtcbiAgICAgIGNvbnNvbGUubG9nKGFscGhhLmluZGV4T2ZcbiAgICAgICAgKHN0YXJ0UG9pbnRbMF0pKVxuICAgICAgICBjb25zb2xlLmxvZyhhbHBoYS5pbmRleE9mXG4gICAgICAgICAgKHN0YXJ0UG9pbnRbMF0pK2xlbmd0aCApXG4gICAgICBjb25zb2xlLmxvZygnZ29lcyB0b28gZmFyIGRvd24nKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcImxcIikge1xuICAgIGlmIChzdGFydFBvaW50WzFdIC0gbGVuZ3RoIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByaWdodChsZW5ndGgsIHN0YXJ0UG9pbnQpIHtcbiAgY29uc29sZS5sb2coJ1JJR0hUJylcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgY29uc3QgeCA9IHN0YXJ0UG9pbnRbMF07XG4gIGxldCB5ID0gc3RhcnRQb2ludFsxXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGFycmF5LnB1c2goW3gsIHldKTtcbiAgICB5ICs9IDE7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGxlZnQobGVuZ3RoLCBzdGFydFBvaW50KSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGNvbnN0IHggPSBzdGFydFBvaW50WzBdO1xuICBsZXQgeSA9IHN0YXJ0UG9pbnRbMV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhcnJheS5wdXNoKFt4LCB5XSk7XG4gICAgeSAtPSAxO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gdXAobGVuZ3RoLCBzdGFydFBvaW50LCBhbHBoYSkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBsZXQgaW5kZXggPSBhbHBoYS5pbmRleE9mKHN0YXJ0UG9pbnRbMF0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgeCA9IGFscGhhW2luZGV4XTtcbiAgICBjb25zdCB5ID0gc3RhcnRQb2ludFsxXTtcbiAgICBpbmRleCAtPSAxO1xuICAgIGFycmF5LnB1c2goW3gsIHldKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGRvd24obGVuZ3RoLCBzdGFydFBvaW50LCBhbHBoYSkge1xuICBjb25zb2xlLmxvZygnRE93TicpXG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGxldCBpbmRleCA9IGFscGhhLmluZGV4T2Yoc3RhcnRQb2ludFswXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB4ID0gYWxwaGFbaW5kZXhdO1xuICAgIGNvbnN0IHkgPSBzdGFydFBvaW50WzFdO1xuICAgIGluZGV4ICs9IDE7XG4gICAgYXJyYXkucHVzaChbeCwgeV0pO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDb29yZGluYXRlcyhsZW5ndGgsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbiwgYWxwaGEpIHtcbiAgbGV0IGNvb3JkcztcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyXCIpIHtcbiAgICBjb29yZHMgPSByaWdodChsZW5ndGgsIHN0YXJ0UG9pbnQpO1xuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwidVwiKSB7XG4gICAgY29vcmRzID0gdXAobGVuZ3RoLCBzdGFydFBvaW50LCBhbHBoYSk7XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkXCIpIHtcbiAgICBjb29yZHMgPSBkb3duKGxlbmd0aCwgc3RhcnRQb2ludCwgYWxwaGEpO1xuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwibFwiKSB7XG4gICAgY29vcmRzID0gbGVmdChsZW5ndGgsIHN0YXJ0UG9pbnQpO1xuICB9XG4gIHJldHVybiBjb29yZHM7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSGl0TG9nKGwpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IGwpIHtcbiAgICBhcnJheS5wdXNoKDApO1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmNvbnN0IG5hbWVTaGlwID0gKGwpID0+IHtcbiAgaWYgKGwgPT09IDUpe1xuICAgIHJldHVybiAnY2Fycmllcic7XG4gIH1cbiAgaWYgKGwgPT09IDQpe1xuICAgIHJldHVybiAnYmF0dGxlc2hpcCc7XG4gIH1cbiAgaWYgKGwgPT09IDMpe1xuICAgIHJldHVybiAnY3J1aXNlcic7XG4gIH1cbiAgaWYgKGwgPT09IDIpe1xuICAgIHJldHVybiAnZGVzdHJveWVyJztcbiAgfVxuICByZXR1cm4gJ2Vycm9yJ1xufVxuXG5cblxuY29uc3Qgc2hpcCA9IChsLCBzdGFydFBvaW50LCBkaXJlY3Rpb24sIHRoZU5hbWUpID0+IHtcbiAgY29uc3QgbmFtZSA9IHRoZU5hbWU7XG4gIGNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuICBjb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcbiAgY29uc3QgaXNWYWxpZCA9IHZhbGlkRW50cnkobCwgc3RhcnRQb2ludCwgZGlyZWN0aW9uLCBhbHBoYSk7XG4gIGNvbnNvbGUubG9nKGlzVmFsaWQpO1xuICBpZiAoIWlzVmFsaWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aCA9IGw7XG4gIGNvbnN0IGNvb3JkcyA9IGdlbmVyYXRlQ29vcmRpbmF0ZXMobCwgc3RhcnRQb2ludCwgZGlyZWN0aW9uLCBhbHBoYSk7XG4gIGNvbnN0IGhpdExvZyA9IGdlbmVyYXRlSGl0TG9nKGwpO1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKCFoaXRMb2cuaW5jbHVkZXMoMCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IHN1bmsgPSBpc1N1bmsoKTtcblxuICBjb25zdCBnZXRDb29yZHMgPSAoKSA9PiBjb29yZHM7XG4gIGNvbnN0IGdldEhpdGxvZyA9ICgpID0+IGhpdExvZztcblxuICBjb25zdCBoaXQgPSAoY29vcmRQYWlyKSA9PiB7XG4gICAgbGV0IGluZGV4O1xuICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBpZiAoY29vcmRpbmF0ZVswXSA9PT0gY29vcmRQYWlyWzBdICYmIGNvb3JkaW5hdGVbMV0gPT09IGNvb3JkUGFpclsxXSkge1xuICAgICAgICBpbmRleCA9IGNvb3Jkcy5pbmRleE9mKGNvb3JkaW5hdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoaXRMb2dbaW5kZXhdID0gMTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2luaygpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgIGhpdExvZ1tpXSA9IDE7XG4gICAgICBpICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBoaXRMb2c7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgbGVuZ3RoLFxuICAgIGNvb3JkcyxcbiAgICBoaXRMb2csXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBnZXRDb29yZHMsXG4gICAgZ2V0SGl0bG9nLFxuICAgIHN1bmssXG4gICAgc2luayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZHJhd0xheW91dCBmcm9tIFwiLi9HVUlNYWluXCI7XG5pbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9HVUlSZW5kZXJcIjtcblxuY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG5jb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcblxuY29uc3QgcHJpbnRTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgc2hpcHNBcnJheS5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzaGlwRWwubmFtZSlcbiAgICB9KVxuICB9XG5cblxuXG4vLyBjb25zdCBwbGF5ZXIgPSAobnVtKSA9PiB7XG4vLyAgICAgY29uc3QgcGxheWVyTnVtID0gbnVtO1xuLy8gICAgIGNvbnN0IHBHYW1lYm9hcmQgPSBnYW1lYm9hcmQoMTApO1xuLy8gICAgIHJldHVybiB7cGxheWVyTnVtLCBwR2FtZWJvYXJkfVxuLy8gfTtcbi8vIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoMSk7XG5cbmNvbnN0IHBsYXllcjEgPSBnYW1lYm9hcmQoMTAsIDEpO1xuY29uc3QgY29tcHV0ZXIgPSBnYW1lYm9hcmQoMTAsIDIpO1xuY29uc3QgcGxheWVycyA9IFtwbGF5ZXIxLCBjb21wdXRlcl07XG5jb21wdXRlci5wbGFjZVNoaXAoNSwgWydhJywwXSwgJ3InLCAnY2FycmllcicpXG5jb21wdXRlci5wbGFjZVNoaXAoNCwgWydiJywxXSwgJ3InLCAnYmF0dGxlc2hpcCcpXG5jb21wdXRlci5wbGFjZVNoaXAoMywgWydjJywxXSwgJ3InLCAnc3VibWFyaW5lJylcbmNvbXB1dGVyLnBsYWNlU2hpcCgzLCBbJ2QnLDFdLCAncicsICdjcnVpc2VyJylcbmNvbXB1dGVyLnBsYWNlU2hpcCgyLCBbJ2UnLDJdLCAncicsICdkZXN0cm95ZXInKVxucHJpbnRTaGlwcyhjb21wdXRlci5zaGlwcyk7XG5kcmF3TGF5b3V0KHBsYXllcjEsIGNvbXB1dGVyKTtcbmNvbnN0IHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdGwnKTtcblxuXG5jb25zdCBnZXRPdGhlcnBsYXllciA9IChhUGxheWVyKSA9PiB7XG4gICAgcGxheWVycy5mb3JFYWNoKHBseXIgPT4ge1xuICAgICAgICBpZihwbHlyICE9PSBhUGxheWVyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBseXIpXG4gICAgICAgICAgICByZXR1cm4gcGx5cjtcbiAgICAgICAgfVxuICAgIH0pXG59XG5jb25zdCBhdHRhY2sgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhdHRhY2luZycpXG4gICAgY29uc3QgcGxheWVyTnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlQm9hcmQnKS50ZXh0Q29udGVudCk7XG4gICAgY29uc3QgcGxheWVyVXAgPSBwbGF5ZXJzW3BsYXllck51bV07XG4gICAgY29uc3Qgb3RoZXJQbGF5ZXIgPSBnZXRPdGhlcnBsYXllcihwbGF5ZXJVcCk7XG4gICAgY29uc3QgYU5vZGUgPSBlLnRhcmdldDtcbiAgICBjb25zdCB4ID0gYWxwaGEuaW5kZXhPZihhTm9kZS5pZC5zcGxpdCgnJylbMF0pO1xuICAgIGNvbnN0IHkgPSBhTm9kZS5pZC5zcGxpdCgnJylbMV07XG4gICAgb3RoZXJQbGF5ZXIucmVjZWl2ZUF0dGFjayhbeCx5XSlcbiAgICByZW5kZXIocGxheWVyVXAsIG90aGVyUGxheWVyKTtcbn1cbkFycmF5LmZyb20odW5pdHMpLmZvckVhY2godW5pdCA9PiB7XG4gICAgdW5pdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBhdHRhY2spO1xufSlcblxuLy93aGVuIGEgc2hpcCBpcyBjaGFuZ2VkIChyKSBvciBwaWNrZWQgdXAgYW5kIG1vdmVkXG4vL0FORCBuZXcgcG9zaXRpb24gaXMgdmFsaWRcbi8vZGVsZXRlIG9sZCBzaGlwLCBydW4gbmV3IHNoaXBcblxuXG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wc2hpcFwiLCBwbGF5ZXJQbGFjZSk7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=