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
___CSS_LOADER_EXPORT___.push([module.id, "/* *{\n    border: solid 1px rgb(154, 173, 184);\n    border-radius: 20px;\n }  */\n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(11, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.unitl:hover{\n    background-color:rgb(117, 149, 168);\n}\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    width: 300px;\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n    box-shadow: 0 0 10px 2px #84ff94;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n.horizontal-shake {\n    box-shadow: 0 0 10px 2px #ff8484;\n    animation: horizontal-shaking 0.35s infinite;\n  }\n\n@keyframes horizontal-shaking {\n    0% { transform: translateX(0) }\n    25% { transform: translateX(3px) }\n    50% { transform: translateX(-3px) }\n    75% { transform: translateX(3px) }\n    100% { transform: translateX(0) }\n  }\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACC;;;KAGI;;CAEJ;IACG,sBAAsB;CACzB;;AAED;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB;;;0CAGsC;IACtC;gCAC4B;IAC5B,yCAAyC;IACzC,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,iDAAiD;AACrD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,eAAe;;AAEnB;AACA;IACI,0CAA0C;IAC1C,yCAAyC;IACzC,uCAAuC;AAC3C;;AAEA;IACI,wCAAwC;IACxC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,uCAAuC;IACvC,oCAAoC;;AAExC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mCAAmC;IACnC,WAAW;IACX,YAAY;IACZ,eAAe;IACf,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kCAAkC;IAClC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,mCAAmC;IACnC,mCAAmC;IACnC,+BAA+B;IAC/B,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,wCAAwC;IACxC,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,WAAW;AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,4CAA4C;EAC9C;;AAEF;IACI,KAAK,yBAAyB;IAC9B,MAAM,2BAA2B;IACjC,MAAM,4BAA4B;IAClC,MAAM,2BAA2B;IACjC,OAAO,yBAAyB;EAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n /* *{\n    border: solid 1px rgb(154, 173, 184);\n    border-radius: 20px;\n }  */\n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(11, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.unitl:hover{\n    background-color:rgb(117, 149, 168);\n}\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    width: 300px;\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n    box-shadow: 0 0 10px 2px #84ff94;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n.horizontal-shake {\n    box-shadow: 0 0 10px 2px #ff8484;\n    animation: horizontal-shaking 0.35s infinite;\n  }\n\n@keyframes horizontal-shaking {\n    0% { transform: translateX(0) }\n    25% { transform: translateX(3px) }\n    50% { transform: translateX(-3px) }\n    75% { transform: translateX(3px) }\n    100% { transform: translateX(0) }\n  }\n\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const alphas = "abcdefghij";
const alpha = alphas.split("");

const drawLayout = (player) => {
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
    const n = name;
    const col = col1 - 1;
    const row = alpha[row1 - 2];
    const coord = [row, col];
    const len = length;
    const isRotated = rot;
    let dir = 'r';
    if(isRotated){
        dir = 'd'
    }
    const valid = aPlayer.placeShip(len,coord,dir,n);
    return valid;
}

function rotate(ev){
    if(ev.key === 'r'){
        let valid;
        console.log('rotating');
        // if parent node is shiphold do, normal, other wise, get start coord
        // build a ship in opposite direction (horizontal or vertical), basically treat as a drop if it's already of the board.
        // if ship is valid overwrite
        const selected = document.getElementsByClassName('selected')[0].parentElement;
        let currentRotation = selected.style.transform;
        
        console.log(selected);
        if(selected.parentElement.getAttribute('class') === 'board'){
            const isRotated = selected.dataset.rotated;
            const length = Number(selected.dataset.ship);
                const gArea = selected.style.gridArea.split('');
                const col1 = Number(gArea[4]);
                console.log(col1);
                const row1 = Number(gArea[0]);
                console.log(row1);
                valid = playerPlace(col1, row1, length, isRotated, player, selected.dataset.name) 
        }
        if(valid) {
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
        }
        else{
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

      // updateMatrix(newShip);
    
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

  ball.onmousedown = function (event) {
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
        console.log('I WAS VALID')
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

      document.removeEventListener("mousemove", onMouseMove);
      const styled = document.getElementsByClassName('draghover');
      Array.from(styled).forEach(element => {
        removeStyle(element)})
      ball.onmouseup = null;
      return info;
    };
  };
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
    if (alpha.indexOf(startPoint[0]) + length - 1 > 10) {
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



const alphas = "abcdefghij";
const alpha = alphas.split("");

// const player = (num) => {
//     const playerNum = num;
//     const pGameboard = gameboard(10);
//     return {playerNum, pGameboard}
// };
// const player1 = player(1);
const player1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(10, 1);
const computer = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(10, 2);
(0,_GUIMain__WEBPACK_IMPORTED_MODULE_0__["default"])(player1);

//when a ship is changed (r) or picked up and moved
//AND new position is valid
//delete old ship, run new ship



// document.addEventListener("dropship", playerPlace);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxJQUFJLHVEQUFVO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpFOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL056QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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L3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlCb2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlNYWluLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL0dVSVNoaXAuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL21hbnVhbERyYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw2MDA7MCw4MDA7MSwzMDA7MSw0MDAmZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICp7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigxNTQsIDE3MywgMTg0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gfSAgKi9cXG5cXG4gKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gfVxcbiAgICBcXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDUyLCA1OCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgNDEsIDQ2KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoNzQsIDkwLCA5OSkgLCByZ2IoMzIsIDQxLCA0NikpO1xcbiAgICBmb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgKi9cXG4gICAgLyogY29sb3I6IHJnYigyMDIsIDIyNSwgMjM4KTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgKi9cXG4gICAgLyogYm9yZGVyOiBzb2xpZCA0cHggcmdiKDk0LCAxMTksIDEzMyk7ICovXFxuICAgIGNvbG9yOiByZ2IoMjAsIDE3LCAxNyk7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDI1cHgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b3BMYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNpZGVMYWJlbCB7XFxuICAgIGdyaWQtcm93OiAyLzEyO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGxVbml0LCAuc2xVbml0LCAuY29ybmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgXFxufVxcbi50bFVuaXR7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLnNsVW5pdHtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmNvcm5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5pbm5lckJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGdyaWQtcm93OiAyLzEyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgXFxufVxcblxcbi51bml0bCwgLnVuaXRte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc2LCAyMDAsIDIxNCk7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLnVuaXRsOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMTcsIDE0OSwgMTY4KTtcXG59XFxuXFxuLm1pc3MsIC5taXNzOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0OSwgMTYxLCAyMjYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaGl0LCAuaGl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMjgsIDEwMCwgMTAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxMDksIDEwOSk7XFxuICAgIC8qIGJvcmRlcjpyZ2IoMjI4LCAxMDAsIDEwMCk7ICovXFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5ob2xkZXJ7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uc2hpcCwgLnNoaXA6aG92ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDczLCAxMDYsIDEyNiwgNjAlKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDQ3LCA2MywgNzEpO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5kcmFnaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTYsIDIpO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OjI1cHg7XFxufVxcbi5zaGlwSG9sZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zaGlwSG9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggIzg0ZDRmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4ICM4NGZmOTQ7XFxufVxcblxcbi5yb3RhdGVkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uYW5jaG9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1zaGFrZSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCAjZmY4NDg0O1xcbiAgICBhbmltYXRpb246IGhvcml6b250YWwtc2hha2luZyAwLjM1cyBpbmZpbml0ZTtcXG4gIH1cXG5cXG5Aa2V5ZnJhbWVzIGhvcml6b250YWwtc2hha2luZyB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIH1cXG4gICAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgfVxcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgfVxcbiAgICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KSB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgfVxcbiAgfVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0M7OztLQUdJOztDQUVKO0lBQ0csc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCOzs7MENBR3NDO0lBQ3RDO2dDQUM0QjtJQUM1Qix5Q0FBeUM7SUFDekMsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTs7QUFFbkI7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyx5Q0FBeUM7SUFDekMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHlDQUF5QztJQUN6QywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLHlDQUF5QztJQUN6QywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMseUNBQXlDO0lBQ3pDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLHlDQUF5QztJQUN6QywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDRDQUE0QztFQUM5Qzs7QUFFRjtJQUNJLEtBQUsseUJBQXlCO0lBQzlCLE1BQU0sMkJBQTJCO0lBQ2pDLE1BQU0sNEJBQTRCO0lBQ2xDLE1BQU0sMkJBQTJCO0lBQ2pDLE9BQU8seUJBQXlCO0VBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw2MDA7MCw4MDA7MSwzMDA7MSw0MDAmZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbiAvKiAqe1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTU0LCAxNzMsIDE4NCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuIH0gICovXFxuXFxuICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuIH1cXG4gICAgXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA1MiwgNTgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDQxLCA0Nik7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggcmdiKDc0LCA5MCwgOTkpICwgcmdiKDMyLCA0MSwgNDYpKTtcXG4gICAgZm9udC1mYW1pbHk6J09wZW4gU2FucycsIHNhbnMtc2VyaWY7ICovXFxuICAgIC8qIGNvbG9yOiByZ2IoMjAyLCAyMjUsIDIzOCk7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7ICovXFxuICAgIC8qIGJvcmRlcjogc29saWQgNHB4IHJnYig5NCwgMTE5LCAxMzMpOyAqL1xcbiAgICBjb2xvcjogcmdiKDIwLCAxNywgMTcpO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmOyAqL1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMjVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAyNXB4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9wTGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zaWRlTGFiZWwge1xcbiAgICBncmlkLXJvdzogMi8xMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRsVW5pdCwgLnNsVW5pdCwgLmNvcm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIFxcbn1cXG4udGxVbml0e1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5zbFVuaXR7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5jb3JuZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaW5uZXJCb2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgICBncmlkLXJvdzogMi8xMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIFxcbn1cXG5cXG4udW5pdGwsIC51bml0bXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3NiwgMjAwLCAyMTQpO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi51bml0bDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTE3LCAxNDksIDE2OCk7XFxufVxcblxcbi5taXNzLCAubWlzczpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDksIDE2MSwgMjI2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmhpdCwgLmhpdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjI4LCAxMDAsIDEwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTA5LCAxMDkpO1xcbiAgICAvKiBib3JkZXI6cmdiKDIyOCwgMTAwLCAxMDApOyAqL1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaG9sZGVye1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLnNoaXAsIC5zaGlwOmhvdmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg3MywgMTA2LCAxMjYsIDYwJSk7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYig0NywgNjMsIDcxKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uZHJhZ2hvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk2LCAyKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDoyNXB4O1xcbn1cXG4uc2hpcEhvbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc2hpcEhvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4ICM4NGQ0ZmY7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCAjODRmZjk0O1xcbn1cXG5cXG4ucm90YXRlZCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmFuY2hvciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLmhvcml6b250YWwtc2hha2Uge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggI2ZmODQ4NDtcXG4gICAgYW5pbWF0aW9uOiBob3Jpem9udGFsLXNoYWtpbmcgMC4zNXMgaW5maW5pdGU7XFxuICB9XFxuXFxuQGtleWZyYW1lcyBob3Jpem9udGFsLXNoYWtpbmcge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB9XFxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIH1cXG4gICAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIH1cXG4gIH1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbmNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuXG5mdW5jdGlvbiBhZGRIb3Zlcihldikge1xuICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhvdmVyZWRcIik7XG59XG5mdW5jdGlvbiB1bkhvdmVyKGV2KSB7XG4gIGV2LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbn1cblxuZnVuY3Rpb24gdW5zdHlsZVRhcmdldChldikge1xuICAvL2NvbnNvbGUubG9nKCdpbSBVTnRyaWdnZXJlZCcpXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2hvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBzdHlsZVRhcmdldChldikge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL2NvbnNvbGUubG9nKCdpbSB0cmlnZ2VyZWQnKVxuICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZChcImRyYWdob3ZlclwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0bG9jYXRpb24oZXYpIHtcbiAgY29uc29sZS5sb2coJ2FEcm9wIGhhcHBlbmVkIScpXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHVuc3R5bGVUYXJnZXQoZXYpO1xuICBjb25zdCBkYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyYWdJdGVtXCIpO1xuICBjb25zdCBub2RlID0gZGF0YVswXTtcbiAgY29uc3QgbG9jID0gZXYudGFyZ2V0LmlkLnNwbGl0KFwiXCIpO1xuICBjb25zdCBjb2wxID0gTnVtYmVyKGxvY1sxXSkgKyAyO1xuICBjb25zdCBjb2wyID0gY29sMSArIDE7XG4gIGNvbnN0IHJvdzEgPSBhbHBoYS5pbmRleE9mKGxvY1swXSkgKyAyO1xuICBjb25zdCByb3cyID0gcm93MSArIDE7XG4gIG5vZGUuc3R5bGUuZ3JpZEFyZWEgPSBgJHtyb3cxfS8ke2NvbDF9LyR7cm93Mn0vJHtjb2wyfWA7XG4gIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbmNvbnN0IGRyYXdCb2FyZCA9IChwbHlyVmFsLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgaWYocGx5clZhbCAhPT0gbnVsbCl7XG4gICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheWVyJywgcGx5clZhbC5wTnVtKTtcbiAgfVxuICBcbiAgY29uc3QgdG9wTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKHRvcExhYmVsKTtcbiAgdG9wTGFiZWwuY2xhc3NMaXN0LmFkZChcInRvcExhYmVsXCIpO1xuICBjb25zdCBzaWRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKHNpZGVMYWJlbCk7XG4gIHNpZGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwic2lkZUxhYmVsXCIpO1xuICBjb25zdCBpbm5lckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5uZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiaW5uZXJCb2FyZFwiKTtcbiAgZ3JpZC5hcHBlbmRDaGlsZChpbm5lckJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyApIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IGAke2l9bGA7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0bFVuaXRcIik7XG4gICAgdG9wTGFiZWwuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBgJHtpICsgMX1gO1xuICAgIGkgKz0gMTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gYCR7aX1sYDtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNsVW5pdFwiKTtcbiAgICBzaWRlTGFiZWwuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBgJHthbHBoYVtpXX1gO1xuICAgIGkgKz0gMTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGB1bml0JHt0eXBlfWApO1xuICAgICAgaW5uZXJCb2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgZGl2LmlkID0gYCR7YWxwaGFbaV19JHtqfSR7dHlwZX1gO1xuICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHN0eWxlVGFyZ2V0KTtcbiAgICAgIGlmICh0eXBlID09PSBcIm1cIikge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHN0eWxlVGFyZ2V0KTtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgdW5zdHlsZVRhcmdldCk7XG4gICAgICAgIC8vIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBnZXRsb2NhdGlvbik7XG4gICAgICAgIC8vIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHN0eWxlVGFyZ2V0KTtcbiAgICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHVuc3R5bGVUYXJnZXQpO1xuICAgICAgICAvLyBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW91c2VcIiwgZ2V0bG9jYXRpb24pO1xuICAgICAgfVxuICAgICAgaiArPSAxO1xuICAgIH1cbiAgICBpICs9IDE7XG4gIH1cblxuICBjb25zdCBjb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKGNvcm5lcik7XG4gIGNvcm5lci5jbGFzc0xpc3QuYWRkKFwiY29ybmVyXCIpO1xuXG4gIHJldHVybiBncmlkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZHJhd0JvYXJkO1xuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBkcmF3Qm9hcmQgZnJvbSBcIi4vR1VJQm9hcmRcIjtcbmltcG9ydCBkcmF3U2hpcHMgZnJvbSBcIi4vR1VJU2hpcFwiO1xuaW1wb3J0IG1hbnVhbERyYWcgZnJvbSBcIi4vbWFudWFsRHJhZ1wiO1xuaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG5jb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcblxuY29uc3QgZHJhd0xheW91dCA9IChwbGF5ZXIpID0+IHtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5jb25zdCBsb2cgPSBkcmF3Qm9hcmQobnVsbCwgJ2wnKTtcbmxvZy5pZCA9ICdsb2cnO1xuLy8gY29uc3QgbnVtID0gcGxheWVyLnBsYXllck51bTtcbmNvbnN0IG1haW5Cb2FyZCA9IGRyYXdCb2FyZChwbGF5ZXIsICdtJyk7XG5tYWluQm9hcmQuaWQgPSAnbWFpbkJvYXJkJztcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2cpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Cb2FyZCk7XG5jb25zdCBzaGlwcyA9IGRyYXdTaGlwcygpO1xuXG5jb25zdCBzaGlwSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zaGlwSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3NoaXBIb2xkZXInKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwSG9sZGVyKTtcblxuc2hpcHMuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgIGNvbnN0IHNoaXBIb2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcEhvbGQuY2xhc3NMaXN0LmFkZCgnc2hpcEhvbGQnKVxuICAgIHNoaXBIb2xkLmFwcGVuZENoaWxkKHNoaXBFbCk7XG4gICAgc2hpcEhvbGQuc3R5bGUud2lkdGggPSBzaGlwRWwuZmlyc3RDaGlsZC5zdHlsZS53aWR0aDtcbiAgICBzaGlwSG9sZGVyLmFwcGVuZENoaWxkKHNoaXBIb2xkKTtcbiAgICBtYW51YWxEcmFnKHNoaXBFbCwgcGxheWVyKTtcbn0pXG5jb25zdCBzdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uYW1lPVwiY3J1aXNlclwiXScpO1xuc3ViWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgJ3N1Ym1hcmluZScpO1xuXG5cbmNvbnN0IHBsYXllclBsYWNlID0gKGNvbDEsIHJvdzEsIGxlbmd0aCwgcm90LCBhUGxheWVyLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgbiA9IG5hbWU7XG4gICAgY29uc3QgY29sID0gY29sMSAtIDE7XG4gICAgY29uc3Qgcm93ID0gYWxwaGFbcm93MSAtIDJdO1xuICAgIGNvbnN0IGNvb3JkID0gW3JvdywgY29sXTtcbiAgICBjb25zdCBsZW4gPSBsZW5ndGg7XG4gICAgY29uc3QgaXNSb3RhdGVkID0gcm90O1xuICAgIGxldCBkaXIgPSAncic7XG4gICAgaWYoaXNSb3RhdGVkKXtcbiAgICAgICAgZGlyID0gJ2QnXG4gICAgfVxuICAgIGNvbnN0IHZhbGlkID0gYVBsYXllci5wbGFjZVNoaXAobGVuLGNvb3JkLGRpcixuKTtcbiAgICByZXR1cm4gdmFsaWQ7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZShldil7XG4gICAgaWYoZXYua2V5ID09PSAncicpe1xuICAgICAgICBsZXQgdmFsaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyb3RhdGluZycpO1xuICAgICAgICAvLyBpZiBwYXJlbnQgbm9kZSBpcyBzaGlwaG9sZCBkbywgbm9ybWFsLCBvdGhlciB3aXNlLCBnZXQgc3RhcnQgY29vcmRcbiAgICAgICAgLy8gYnVpbGQgYSBzaGlwIGluIG9wcG9zaXRlIGRpcmVjdGlvbiAoaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCksIGJhc2ljYWxseSB0cmVhdCBhcyBhIGRyb3AgaWYgaXQncyBhbHJlYWR5IG9mIHRoZSBib2FyZC5cbiAgICAgICAgLy8gaWYgc2hpcCBpcyB2YWxpZCBvdmVyd3JpdGVcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBjdXJyZW50Um90YXRpb24gPSBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZCk7XG4gICAgICAgIGlmKHNlbGVjdGVkLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYm9hcmQnKXtcbiAgICAgICAgICAgIGNvbnN0IGlzUm90YXRlZCA9IHNlbGVjdGVkLmRhdGFzZXQucm90YXRlZDtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE51bWJlcihzZWxlY3RlZC5kYXRhc2V0LnNoaXApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdBcmVhID0gc2VsZWN0ZWQuc3R5bGUuZ3JpZEFyZWEuc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbDEgPSBOdW1iZXIoZ0FyZWFbNF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdzEgPSBOdW1iZXIoZ0FyZWFbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdzEpO1xuICAgICAgICAgICAgICAgIHZhbGlkID0gcGxheWVyUGxhY2UoY29sMSwgcm93MSwgbGVuZ3RoLCBpc1JvdGF0ZWQsIHBsYXllciwgc2VsZWN0ZWQuZGF0YXNldC5uYW1lKSBcbiAgICAgICAgfVxuICAgICAgICBpZih2YWxpZCkge1xuICAgICAgICAgICAgaWYoKGN1cnJlbnRSb3RhdGlvbiA9PT0gJycpfHwoY3VycmVudFJvdGF0aW9uID09PSAncm90YXRlKDBkZWcpJykgKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpYDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IGN1cnJlbnRSb3RhdGlvbi5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1JvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uWzddICsgY3VycmVudFJvdGF0aW9uWzhdO1xuICAgICAgICAgICAgICAgIG5ld1JvdGF0aW9uID0gTnVtYmVyKG5ld1JvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBuZXdSb3RhdGlvbiAtPSA5MDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdSb3RhdGlvbilcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bmV3Um90YXRpb259ZGVnKWA7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIHNlbGVjdGVkLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbC1zaGFrZScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FwcGx5aW5nIHNoYWtlJylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3NlbGVjdGVkLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbC1zaGFrZScpfSwgJzUwMCcpXG4gICAgICAgIH1cbiAgICB9ICBcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCByb3RhdGUpXG5cbn1cblxuLy8gY29uc3QgbWlzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhMGwnKTtcbi8vIG1pc3MuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG5cbi8vIGNvbnN0IGhpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhMWwnKTtcbi8vIGhpdC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZHJhd0xheW91dCIsImltcG9ydCBtYW51YWxEcmFnIGZyb20gXCIuL21hbnVhbERyYWdcIjtcblxuY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG5jb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcblxuY29uc3QgcHJpbnRTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgc2hpcHNBcnJheS5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzaGlwRWwubmFtZSlcbiAgICB9KVxuICB9XG5mdW5jdGlvbiBkcmFnKGV2KSB7XG4gICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIGV2LnRhcmdldC5pZCk7XG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdJdGVtJyk7XG4gICAgY29uc3Qgbm9kZSA9IGV2LnRhcmdldDtcbiAgICBzZXRUaW1lb3V0ICgoKSA9PiB7XG4gICAgICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB9LCAxKTtcbiAgfVxuXG5cbmZ1bmN0aW9uIHBsYWNlKGV2KXtcbiAgICBjb25zdCBub2RlID0gZXYudGFyZ2V0O1xuICAgIGV2LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnSXRlbScpO1xuICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgICAgbm9kZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjtcbiAgICAgIH0sIDEpO1xufVxuXG4vLyBjb25zdCBwbGF5ZXJQbGFjZSA9IChjb2wxLCByb3cxLCBsZW5ndGgsIHJvdCwgcGxheWVyLCBuYW1lKSA9PiB7XG4vLyAgICAgY29uc3QgbiA9IG5hbWU7XG4vLyAgICAgY29uc3QgY29sID0gY29sMSAtIDE7XG4vLyAgICAgY29uc3Qgcm93ID0gYWxwaGFbcm93MSAtIDJdO1xuLy8gICAgIGNvbnN0IGNvb3JkID0gW3JvdywgY29sXTtcbi8vICAgICBjb25zdCBsZW4gPSBsZW5ndGg7XG4vLyAgICAgY29uc3QgaXNSb3RhdGVkID0gcm90O1xuLy8gICAgIGxldCBkaXIgPSAncic7XG4vLyAgICAgaWYoaXNSb3RhdGVkKXtcbi8vICAgICAgICAgZGlyID0gJ2QnXG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHZhbGlkID0gcGxheWVyLnBsYWNlU2hpcChsZW4sY29vcmQsZGlyLG4pO1xuLy8gICAgIHJldHVybiB2YWxpZDtcbi8vIH1cblxuZnVuY3Rpb24gc2VsZWN0KGV2KXtcbiAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpO1xuICAgIGlmKG9sZFswXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgb2xkWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICB9XG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59XG5cbi8vIGZ1bmN0aW9uIHJvdGF0ZShldil7XG4vLyAgICAgaWYoZXYua2V5ID09PSAncicpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygncm90YXRpbmcnKTtcbi8vICAgICAgICAgLy8gaWYgcGFyZW50IG5vZGUgaXMgc2hpcGhvbGQgZG8sIG5vcm1hbCwgb3RoZXIgd2lzZSwgZ2V0IHN0YXJ0IGNvb3JkXG4vLyAgICAgICAgIC8vIGJ1aWxkIGEgc2hpcCBpbiBvcHBvc2l0ZSBkaXJlY3Rpb24gKGhvcml6b250YWwgb3IgdmVydGljYWwpLCBiYXNpY2FsbHkgdHJlYXQgYXMgYSBkcm9wIGlmIGl0J3MgYWxyZWFkeSBvZiB0aGUgYm9hcmQuXG4vLyAgICAgICAgIC8vIGlmIHNoaXAgaXMgdmFsaWQgb3ZlcndyaXRlXG4vLyAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKVswXS5wYXJlbnRFbGVtZW50O1xuLy8gICAgICAgICBsZXQgY3VycmVudFJvdGF0aW9uID0gc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtO1xuLy8gICAgICAgICBpZigoY3VycmVudFJvdGF0aW9uID09PSAnJyl8fChjdXJyZW50Um90YXRpb24gPT09ICdyb3RhdGUoMGRlZyknKSApe1xuLy8gICAgICAgICAgICAgY3VycmVudFJvdGF0aW9uID0gMDtcbi8vICAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpYDtcbi8vICAgICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgJ3RydWUnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNle1xuLy8gICAgICAgICAgICAgY3VycmVudFJvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uLnNwbGl0KCcnKTtcbi8vICAgICAgICAgICAgIGxldCBuZXdSb3RhdGlvbiA9IGN1cnJlbnRSb3RhdGlvbls3XSArIGN1cnJlbnRSb3RhdGlvbls4XTtcbi8vICAgICAgICAgICAgIG5ld1JvdGF0aW9uID0gTnVtYmVyKG5ld1JvdGF0aW9uKTtcbi8vICAgICAgICAgICAgIG5ld1JvdGF0aW9uIC09IDkwO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Um90YXRpb24pXG4vLyAgICAgICAgICAgICBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bmV3Um90YXRpb259ZGVnKWA7XG4vLyAgICAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlZCcsICd0cnVlJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQpO1xuLy8gICAgICAgICBpZihzZWxlY3RlZC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2JvYXJkJyl7XG4vLyAgICAgICAgICAgICBjb25zdCBpc1JvdGF0ZWQgPSBzZWxlY3RlZC5kYXRhc2V0LnJvdGF0ZWQ7XG4vLyAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBOdW1iZXIoc2VsZWN0ZWQuZGF0YXNldC5zaGlwKTtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBnQXJlYSA9IHNlbGVjdGVkLnN0eWxlLmdyaWRBcmVhLnNwbGl0KCcnKTtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBjb2wxID0gTnVtYmVyKGdBcmVhWzRdKSAtIDI7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sMSk7XG4vLyAgICAgICAgICAgICAgICAgY29uc3Qgcm93MSA9IE51bWJlcihnQXJlYVswXSkgLSAyO1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdzEpO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGFQbGF5ZXIgPSBzZWxlY3RlZC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucGxheWVyO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRMb2MgPSBwbGF5ZXJQbGFjZShjb2wxLCByb3cxLCBsZW5ndGgsIGlzUm90YXRlZCwgYVBsYXllciwgc2VsZWN0ZWQuZGF0YXNldC5uYW1lKSBcbi8vICAgICAgICAgICAgICAgICBpZihpc1ZhbGlkTG9jKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGFQbGF5ZXIucmVtb3ZlU2hpcChzZWxlY3RlZC5kYXRhc2V0Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgcHJpbnRTaGlwcyhhUGxheWVyLnNoaXBzKVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH0gIFxuLy8gfVxuXG5cbmZ1bmN0aW9uIGRyYWdzdGFydCAoZXYpIHtcbiAgICBtYW51YWxEcmFnKGV2LnRhcmdldClcbiAgICB9O1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcm90YXRlKVxuXG5jb25zdCBuYW1lU2hpcCA9IChsKSA9PiB7XG4gICAgaWYgKGwgPT09IDUpe1xuICAgICAgcmV0dXJuICdjYXJyaWVyJztcbiAgICB9XG4gICAgaWYgKGwgPT09IDQpe1xuICAgICAgcmV0dXJuICdiYXR0bGVzaGlwJztcbiAgICB9XG4gICAgaWYgKGwgPT09IDMpe1xuICAgICAgcmV0dXJuICdjcnVpc2VyJztcbiAgICB9XG4gICAgaWYgKGwgPT09IDIpe1xuICAgICAgcmV0dXJuICdkZXN0cm95ZXInO1xuICAgIH1cbiAgICByZXR1cm4gJ2Vycm9yJ1xuICB9XG5cbmNvbnN0IGRyYXdTaGlwID0gKGxlbikgPT4ge1xuICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdhbmNob3InKTtcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdkYXRhLXNoaXAnLCBsZW4pO1xuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWVTaGlwKGxlbikpO1xuICAgIGNvbnN0IGZha2VzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmFrZXNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgIC8vIGZha2VzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICAvLyBmYWtlc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnKTtcbiAgICAvLyBmYWtlc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgcGxhY2UpO1xuICAgIC8vIGZha2VzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNlbGVjdCk7XG4gICAgZmFrZXNoaXAuc3R5bGUud2lkdGggPSBgJHtsZW4gKiAyNX1weGA7XG4gICAgYW5jaG9yLmFwcGVuZENoaWxkKGZha2VzaGlwKVxuICAgIC8vIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnKTtcbiAgICAvLyBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHBsYWNlKTtcbiAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNlbGVjdCk7XG4gICAgcmV0dXJuIGFuY2hvcjtcbn1cblxuY29uc3QgZHJhd1NoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBkaXZzID0gW107XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCg1KSk7XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCg0KSk7XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCgzKSk7XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCgzKSk7XG4gICAgc2hpcGRpdnMucHVzaChkcmF3U2hpcCgyKSk7XG4gICAgcmV0dXJuIHNoaXBkaXZzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkcmF3U2hpcHNcblxuXG5cblxuXG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIGdlblJvdyhsKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKGkgPCBsKSB7XG4gICAgYXJyYXkucHVzaChcIkVcIik7XG4gICAgaSArPSAxO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSb3dzKGwpIHtcbiAgY29uc3Qgcm93cyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgbCkge1xuICAgIHJvd3MucHVzaChnZW5Sb3cobCkpO1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gcm93cztcbn1cblxuY29uc3QgZ2FtZWJvYXJkID0gKGwsIHB2YWwpID0+IHtcbiAgY29uc3QgcE51bSA9IHB2YWw7XG4gIGNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuICBjb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcbiAgY29uc3Qgcm93cyA9IGdlbmVyYXRlUm93cyhsKTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBzaGlwcztcblxuICBjb25zdCB2YWxpZExlbmd0aCA9IChsZW4pID0+IHtcbiAgICBsZXQgc2hpcFR5cGUgPSAwO1xuICAgIGdldFNoaXBzKCkuZm9yRWFjaCgoYVNoaXApID0+IHtcbiAgICAgIGlmIChhU2hpcC5sZW5ndGggPT09IGxlbikge1xuICAgICAgICBzaGlwVHlwZSArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxlbiA9PT0gMikge1xuICAgICAgaWYgKHNoaXBUeXBlID4gMSkge1xuICAgICAgICBjb25zb2xlLmxvZygnMiBzaGlwIGFscmVhZHkgb24gbG9nZ2VkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGVuID09PSAzKSB7XG4gICAgICBpZiAoc2hpcFR5cGUgPiAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcyIDMgc2hpcHMgYWxyZWFkeSBvbiBsb2dnZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsZW4gPT09IDUpIHtcbiAgICAgIGlmIChzaGlwVHlwZSA+IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJzIgMyBzaGlwcyBhbHJlYWR5IG9uIGxvZ2dlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICBpZiAobGVuID09PSA0KSB7XG4gICAgICBpZiAoc2hpcFR5cGUgPiAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCc0IHNoaXAgYWxyZWFkeSBvbiBsb2dnZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgbWF0Y2ggPSAoY29vcmQxLCBjb29yZDIpID0+IHtcbiAgICBpZiAoY29vcmQxWzBdID09PSBjb29yZDJbMF0gJiYgY29vcmQxWzFdID09PSBjb29yZDJbMV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcEJ5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgICAgaWYoc2hpcEVsLm5hbWUgPT09IG5hbWUpe1xuICAgICAgICByZXR1cm4gc2hpcEVsO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgY29uc3QgcHJpbnRTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gICAgc2hpcHNBcnJheS5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzaGlwRWwubmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKHNoaXBFbC5jb29yZHMpXG4gICAgfSlcbiAgfVxuICBjb25zdCBvdmVybGFwcyA9IChhU2hpcCwgbmV3U2hpcCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkbyB0aGUgZm9sbG93aW5nIG92ZXJsYXA/JylcbiAgICBjb25zb2xlLmxvZyhhU2hpcC5uYW1lKTtcbiAgICBjb25zb2xlLmxvZyhuZXdTaGlwLm5hbWUpO1xuICAgIGlmKGFTaGlwLmxlbmd0aCA9PT0gbmV3U2hpcC5sZW5ndGgpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgb3ZlcmxhcCA9IGZhbHNlO1xuICAgIGFTaGlwLmNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT5cbiAgICAgIG5ld1NoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkcCkgPT4ge1xuICAgICAgICBpZiAobWF0Y2goY29vcmRwLCBjb29yZCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZm91bmQgb3ZlcmxhcCcpXG4gICAgICAgICAgY29uc29sZS5sb2coY29vcmRwLCBjb29yZClcbiAgICAgICAgICBvdmVybGFwID0gdHJ1ZTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIG92ZXJsYXA7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTWF0cml4ID0gKGFTaGlwKSA9PiB7XG4gICAgY29uc29sZS5sb2coYVNoaXApXG4gICAgYVNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGFscGhhLmluZGV4T2YoY29vcmRbMF0pO1xuICAgICAgcm93c1tpbmRleF1bY29vcmRbMV1dID0gc2hpcHMuaW5kZXhPZihhU2hpcCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcCA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHRoZVNoaXA7XG4gICAgY29uc29sZS5sb2coYHJlbW92aW5nIGEgJHtuYW1lfSBmcm9tYClcbiAgICBjb25zb2xlLmxvZyhzaGlwcylcbiAgICBzaGlwcy5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBpZihzaGlwRWwubmFtZSA9PT0gbmFtZSl7XG4gICAgICAgIHRoZVNoaXAgPSBzaGlwRWw7XG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGVTaGlwKTtcbiAgICBpZiAodGhlU2hpcCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGNvbnN0IGluZGV4ID0gc2hpcHMuaW5kZXhPZih0aGVTaGlwKVxuICAgICAgc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcHJpbnRTaGlwcyhzaGlwcyk7XG4gIH1cblxuICBjb25zdCBjdXJyZW50U2hpcE5hbWVzID0gKHNoaXBzQXJyKSA9PiB7XG4gICAgY29uc3QgbmFtZXMgPSBbXTtcbiAgICBzaGlwc0Fyci5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBuYW1lcy5wdXNoKHNoaXBFbC5uYW1lKVxuICAgIH0pXG4gICAgcmV0dXJuIG5hbWVzO1xuICB9XG4gIGNvbnN0IHNoaXBFeGlzdHMgPSAobikgPT4ge1xuICAgIGNvbnN0IG5hbWVzID0gY3VycmVudFNoaXBOYW1lcyhzaGlwcyk7XG4gICAgaWYobmFtZXMuaW5jbHVkZXMobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcblxuICBjb25zdCBwbGFjZVNoaXAgPSAobGVuLCBjb29yZCwgZGlyLCBuYW1lKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3BsYWNpbmcgc2hpcDonKTtcbiAgICBjb25zb2xlLmxvZyhuYW1lKVxuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHNoaXBzIGFyZTonKVxuICAgIGNvbnNvbGUubG9nKHByaW50U2hpcHMoc2hpcHMpKVxuXG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgLy9jaGVjayBpZiBzaGlwIGFscmVhZHkgZXhpc3RzLCBpZiBzbywgcmVtb3ZlIG9sZCBzaGlwXG4gICAgaWYgKHNoaXBFeGlzdHMobmFtZSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmluZyBzaGlwJyk7XG4gICAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICAgIHJlbW92ZVNoaXAobmFtZSk7XG4gICAgfVxuICAgIC8vdHJ5IG1ha2luZyBhIHNoaXAsIGlmIGl0IG1ha2VzIG9uZSwgY2hlY2sgaWYgaXQgb3ZlcmxhcHMsIGlmIGl0IGRvZXMsIGRvbid0IHB1c2ggaXQuIFxuICAgICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobGVuLCBjb29yZCwgZGlyLCBuYW1lKTtcbiAgICAgIGlmKG5ld1NoaXAgIT09IG51bGwpe1xuICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgIGlmKHNoaXBzLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgc2hpcHMuZm9yRWFjaCgoYVNoaXApID0+IHtcbiAgICAgICAgICAgIGlmIChvdmVybGFwcyhhU2hpcCwgbmV3U2hpcCkpIHtcbiAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTsgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmKHZhbGlkID09PSB0cnVlKXtcbiAgICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApOyBcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2hpcCBwdXNoZWQgd2FzOicpXG4gICAgICAgICAgY29uc29sZS5sb2cobmV3U2hpcC5uYW1lKVxuICAgICAgICAgIHByaW50U2hpcHMoc2hpcHMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHVwZGF0ZU1hdHJpeChuZXdTaGlwKTtcbiAgICBcbiAgICByZXR1cm4gdmFsaWQ7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gYWxwaGEuaW5kZXhPZihjb29yZFswXSk7XG4gICAgY29uc3QgY3VycmVudFZhbCA9IHJvd3NbaW5kZXhdW2Nvb3JkWzFdXTtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRWYWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJvd3NbaW5kZXhdW2Nvb3JkWzFdXSA9IFwiSFwiO1xuICAgICAgc2hpcHNbY3VycmVudFZhbF0uaGl0KGNvb3JkKTtcbiAgICAgIHJldHVybiBcIkkgd29ya2VkXCI7XG4gICAgfVxuICAgIGlmIChjdXJyZW50VmFsID09PSBcIkVcIikge1xuICAgICAgcm93c1tpbmRleF1bY29vcmRbMV1dID0gXCJNXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcImFscmVhZHkgZmlyZWQgaGVyZS4gVHJ5IGFnYWluLlwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKGFTaGlwKSA9PiB7XG4gICAgICBpZiAoIWFTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwQnlTdGFydCA9IChjb29yZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIHNoaXAnKVxuICAgIHNoaXBzLmZvckVhY2goYVNoaXAgPT4ge1xuICAgICAgaWYoKGFTaGlwLmNvb3Jkc1swXVswXT09PSBjb29yZFswXSkgJiYgKGFTaGlwLmNvb3Jkc1swXVsxXT09PSBjb29yZFsxXSkpe1xuICAgICAgICByZXR1cm4gYVNoaXA7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7IHJvd3MsIHNoaXBzLCBwbGFjZVNoaXAsIGdldFNoaXBzLCBvdmVybGFwcywgbWF0Y2gsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmssIHJlbW92ZVNoaXAsIGdldFNoaXBCeVN0YXJ0LCBnZXRTaGlwQnlOYW1lLCBwTnVtIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7XG5cblxuIiwiY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG5jb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcblxuY29uc3QgcHJpbnRTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gIHNoaXBzQXJyYXkuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNoaXBFbC5uYW1lKVxuICB9KVxufVxuXG5jb25zdCByZW1vdmVTdHlsZSA9IChwcmV2aW91c0VsZW0pID0+IHtcbiAgICBjb25zdCBkcmFnbGVhdmUgPSBuZXcgRXZlbnQoXCJkcmFnbGVhdmVcIik7XG4gICAgcHJldmlvdXNFbGVtLmRpc3BhdGNoRXZlbnQoZHJhZ2xlYXZlKTtcbn1cblxuY29uc3Qgc3R5bGVOb2RlID0gKHRoZUVsZW0pID0+IHtcbiAgICBjb25zdCBkcmFnb3ZlciA9IG5ldyBFdmVudChcImRyYWdvdmVyXCIpO1xuICAgIHRoZUVsZW0uZGlzcGF0Y2hFdmVudChkcmFnb3Zlcik7XG4gICAgICAgIH1cblxuY29uc3QgcGxheWVyUGxhY2UgPSAoY29sMSwgcm93MSwgbGVuZ3RoLCByb3QsIHBsYXllciwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IG5hbWU7XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBjb2wxIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGFscGhhW3JvdzEgLSAyXTtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gW3JvdywgY29sXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGlzUm90YXRlZCA9IHJvdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlzUm90YXRlZCk7XG4gICAgICAgICAgICBsZXQgZGlyO1xuICAgICAgICAgICAgaWYoaXNSb3RhdGVkID09PSAndHJ1ZScpe1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXIgPSAnZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBkaXIgPSAncic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkaXIpO1xuICAgICAgICAgICAgY29uc3QgdmFsaWQgPSBwbGF5ZXIucGxhY2VTaGlwKGxlbixjb29yZCxkaXIsbik7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICAgIH1cbi8vIGNvbnN0IHBsYWNlbWVudENoZWNrID0gKGxlbiwgcm90YXRlZCwgcm93MSwgY29sMSkgPT4ge1xuLy8gICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuLy8gICAgIGlmKHJvdGF0ZWQpe1xuLy8gICAgICAgICBpZihsZW4gPT09IDIpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCAxMSl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDMpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCAxMCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDQpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCA5KXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNSl7XG4vLyAgICAgICAgICAgICBpZiAocm93MSA8IDgpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICB9IFxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBpZihsZW4gPT09IDIpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCAxMSl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDMpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCAxMCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDQpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCA5KXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNSl7XG4vLyAgICAgICAgICAgICBpZiAoY29sMSA8IDgpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgLy9jb25zb2xlLmxvZyhsZW4sIHJvdGF0ZWQsIGNvbDEsIHJvdzEsIHZhbGlkKTtcbi8vICAgICByZXR1cm4gdmFsaWQ7XG4vLyB9XG5cbmNvbnN0IGlzUm90YXRlZCA9ICh2YWwpID0+IHtcbiAgICBpZih2YWwubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgaWYodmFsWzddICE9PSAnMCcpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBwaXhlbHMyTGVuZ3RoID0gKGxlbikgPT4ge1xuICAgIGlmKGxlbiA9PT0gJzEyNXB4Jyl7XG4gICAgICAgIHJldHVybiA1XG4gICAgfVxuICAgIGlmKGxlbiA9PT0gJzEwMHB4Jyl7XG4gICAgICAgIHJldHVybiA0XG4gICAgfVxuICAgIGlmKGxlbiA9PT0gJzc1cHgnKXtcbiAgICAgICAgcmV0dXJuIDNcbiAgICB9XG4gICAgaWYobGVuID09PSAnNTBweCcpe1xuICAgICAgICByZXR1cm4gMlxuICAgIH1cbn1cblxuLy8gY29uc3QgYWxsQXJlYXMgPSAoYXJyYXlPZkFuY2hvcnMpID0+IHtcbi8vICAgICBjb25zdCBhbGxzaGlwQXJlYXMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5cbi8vIH1cblxuLy8gY29uc3QgY2FsY0FyZWEgPSAoY29sMSwgcm93MSwgbGVuLCByb3RhdGVkKSA9PiB7XG4vLyAgICAgbGV0IGNvbCA9IGNvbDE7XG4vLyAgICAgbGV0IHJvdyA9IHJvdzE7XG4vLyAgICAgY29uc3QgYXJyYXlPZlRha2VuRWxlbXMgPSBbXTtcbi8vICAgICBjb25zdCBhcnJheU9mVGFrZW5JRHMgPSBbXTtcbi8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuLTE7KXtcbi8vICAgICAgICAgbGV0IGlkO1xuLy8gICAgICAgICBpZighcm90YXRlZCl7XG4vLyAgICAgICAgICAgICByb3cgPSBhbHBoYVtyb3ddO1xuLy8gICAgICAgICAgICAgaWQgPSBgJHtyb3d9JHtjb2wgKyAxfW1gXG4vLyAgICAgICAgIGFycmF5T2ZUYWtlbklEcy5wdXNoKGlkKTtcbi8vICAgICAgICAgY29sICs9IDE7fVxuLy8gICAgICAgICBlbHNle1xuLy8gICAgICAgICAgICAgY29uc3QgdGhlUm93ID0gYWxwaGFbcm93XTtcbi8vICAgICAgICAgICAgIGlkID0gYCR7dGhlUm93fSR7Y29sfW1gXG4vLyAgICAgICAgIGFycmF5T2ZUYWtlbklEcy5wdXNoKGlkKTtcbi8vICAgICAgICAgcm93ICs9IDE7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaSs9MTtcbi8vICAgICB9XG4vLyAgICAgYXJyYXlPZlRha2VuSURzLmZvckVhY2goaWQgPT4ge1xuLy8gICAgICAgICBjb25zdCBlbGVtID0gZ2V0RWxlbWVudEJ5SWQoaWQpO1xuLy8gICAgICAgICBhcnJheU9mVGFrZW5FbGVtcy5wdXNoKGVsZW0pO1xuLy8gICAgIH0pXG4vLyAgICAgcmV0dXJuIGFycmF5T2ZUYWtlbkVsZW1zO1xuLy8gfVxuXG4vLyBjb25zdCBpc1Rha2VuID0gKG5vZGUpID0+IHtcbi8vICAgICBpZihub2RlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCl7XG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gZmFsc2U7XG4vLyB9XG5cbmNvbnN0IG1hbnVhbERyYWcgPSAobm9kZSwgcGxheWVyKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQm9hcmRcIik7XG4gIGNvbnN0IGJhbGwgPSBub2RlO1xuICBjb25zdCBsZW5ndGggPSBwaXhlbHMyTGVuZ3RoKG5vZGUuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGgpO1xuICBcbi8vICAgbGV0IGluZGV4ID0gQXJyYXkoYmFsbC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKGJhbGwpO1xuXG4gIGJhbGwub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJkcmFnSXRlbVwiKTtcbiAgICAvLyAoMSkgc3RhcnQgdGhlIHByb2Nlc3NcbiAgICBjb25zdCBvZ1BhcmVudCA9IGJhbGwucGFyZW50RWxlbWVudDtcbiAgICBjb25zb2xlLmxvZygnT0cgcGFyZW50IGlzOicpXG4gICAgY29uc29sZS5sb2cob2dQYXJlbnQpXG4gICAgbGV0IHJvdGF0ZWQgPSBub2RlLnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnJyk7XG4gICAgcm90YXRlZCA9IGlzUm90YXRlZChyb3RhdGVkKTtcbiAgICBiYWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgcm90YXRlZClcbiAgICAvLyBjb25zb2xlLmxvZyhsZW5ndGgsIHJvdGF0ZWQpXG4gICAgLy8gKDIpIHByZXBhcmUgdG8gbW92aW5nOiBtYWtlIGFic29sdXRlIGFuZCBvbiB0b3AgYnkgei1pbmRleFxuICAgIGJhbGwuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYmFsbC5zdHlsZS56SW5kZXggPSAxMDAwO1xuXG4gICAgLy8gbW92ZSBpdCBvdXQgb2YgYW55IGN1cnJlbnQgcGFyZW50cyBkaXJlY3RseSBpbnRvIGJvZHlcbiAgICAvLyB0byBtYWtlIGl0IHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8gdGhlIGJvZHlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChiYWxsKTtcbiAgICAvLyBib2FyZC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAvLyAuLi5hbmQgcHV0IHRoYXQgYWJzb2x1dGVseSBwb3NpdGlvbmVkIGJhbGwgdW5kZXIgdGhlIGN1cnNvclxuICAgIGxldCBhbklEO1xuICAgIGxldCB0aGVFbGVtO1xuICAgIGxldCBwcmV2aW91c0VsZW07XG4gICAgLy8gY2VudGVycyB0aGUgYmFsbCBhdCAocGFnZVgsIHBhZ2VZKSBjb29yZGluYXRlc1xuICAgIGZ1bmN0aW9uIG1vdmVBdChwYWdlWCwgcGFnZVkpIHtcbiAgICAgIGJhbGwuc3R5bGUubGVmdCA9IGAke3BhZ2VYIC0gYmFsbC5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xuICAgICAgYmFsbC5zdHlsZS50b3AgPSBgJHtwYWdlWSAtIGJhbGwub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XG4gICAgICBjb25zdCBkcm9wRWxlbUxpc3QgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChwYWdlWCwgcGFnZVkpO1xuXG4gICAgICBkcm9wRWxlbUxpc3QuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xhc3NsaXN0JylcbiAgICAgICAgLy8gY29uc29sZS5sb2coQXJyYXkuZnJvbShlbGVtLmNsYXNzTGlzdCkpXG4gICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidW5pdG1cIikpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBjb250YWlucyBpdCEgcmV0dXJuIElEOiAke2VsZW0uaWR9YCk7XG4gICAgICAgICAgICBhbklEID0gZWxlbS5pZDtcbiAgICAgICAgICAgIHRoZUVsZW0gPSBlbGVtO1xuICAgICAgICAgICAgc2V0VGltZW91dChzdHlsZU5vZGUodGhlRWxlbSksIDUwMClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHByZXZpb3VzRWxlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmIChlbGVtLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtwcmV2aW91c0VsZW0uaWR9IHZzLiAke2VsZW0uaWR9YCk7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzRWxlbSAhPT0gZWxlbSkge1xuICAgICAgICAgICAgICAgICAgcmVtb3ZlU3R5bGUocHJldmlvdXNFbGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcHJldmlvdXNFbGVtID0gdGhlRWxlbTtcbiAgICAgIC8vIHN0eWxlTm9kZShkcm9wRWxlbSlcbiAgICB9XG5cbiAgICBtb3ZlQXQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2KSB7XG4gICAgICBtb3ZlQXQoZXYucGFnZVgsIGV2LnBhZ2VZKTtcbiAgICAgIC8vIGNvbnN0IHVuRWxlbSA9ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcmFnaG92ZXInKVswXTtcbiAgICAgIC8vIGRyb3BFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdob3ZlcicpXG4gICAgfVxuXG4gICAgLy8gKDMpIG1vdmUgdGhlIGJhbGwgb24gbW91c2Vtb3ZlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgbGV0IGluZm87XG4gICAgLy8gKDQpIGRyb3AgdGhlIGJhbGwsIHJlbW92ZSB1bm5lZWRlZCBoYW5kbGVyc1xuICAgIGJhbGwub25tb3VzZXVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJNT1VTRVVQIVwiKTtcbiAgICAgIGJhbGwuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS5sZWZ0ID0gXCJcIjtcbiAgICAgIGJhbGwuc3R5bGUudG9wID0gXCJcIjtcbiAgICAgIGJhbGwuc3R5bGUuekluZGV4ID0gXCJcIjtcbiAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdJdGVtXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coYW5JRCk7XG4gICAgICBpZiAoYW5JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSUQgV09SS0VEIVwiKTtcbiAgICAgICAgY29uc3QgbG9jID0gYW5JRC5zcGxpdChcIlwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG9jKTtcbiAgICAgICAgY29uc3QgY29sMSA9IE51bWJlcihsb2NbMV0pICsgMjtcbiAgICAgICAgY29uc3QgY29sMiA9IGNvbDEgKyAxO1xuICAgICAgICBjb25zdCByb3cxID0gYWxwaGEuaW5kZXhPZihsb2NbMF0pICsgMjtcbiAgICAgICAgY29uc3Qgcm93MiA9IHJvdzEgKyAxO1xuICAgICAgICAvLyBjb25zdCBkcm9wc2hpcCA9IG5ldyBDdXN0b21FdmVudChcImRyb3BzaGlwXCIseyBkZXRhaWw6IHtjb2w6IGNvbDEtMSwgcm93OiAocm93MS0yKSwgbGVuOiBsZW5ndGgsIHJvdDogcm90YXRlZH19ICk7XG4gICAgICAgIC8vIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZHJvcHNoaXApXG4gICAgICAgIC8vIGNvbnN0IG5vdFRha2VuID0gKCFpc1Rha2VuKHRoZUVsZW0pKTtcbiAgICAgICAgLy8gY29uc3QgdmFsaWQgPSBwbGFjZW1lbnRDaGVjayhsZW5ndGgsIHJvdGF0ZWQsIHJvdzEsIGNvbDEpICYmIG5vdFRha2VuO1xuICAgICAgICBjb25zdCBhbVJvdGF0ZWQgPSBiYWxsLmRhdGFzZXQucm90YXRlZDtcbiAgICAgICAgY29uc3QgaXNWYWxpZExvYyA9IHBsYXllclBsYWNlKGNvbDEsIHJvdzEsIGxlbmd0aCwgYW1Sb3RhdGVkLCBwbGF5ZXIsIGJhbGwuZGF0YXNldC5uYW1lKSBcbiAgICAgICAgY29uc29sZS5sb2coJ0kgV0FTIFZBTElEJylcbiAgICAgICAgY29uc29sZS5sb2coaXNWYWxpZExvYylcbiAgICAgICAgaWYoaXNWYWxpZExvYyl7XG4gICAgICAgICAgY29uc29sZS5sb2coaXNWYWxpZExvYylcbiAgICAgICAgICAgIGJhbGwuc3R5bGUuZ3JpZEFyZWEgPSBgJHtyb3cxfS8ke2NvbDF9LyR7cm93Mn0vJHtjb2wyfWA7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAgICAgICAgIGluZm8gPSBbW3JvdzEsIGNvbDFdLCBsZW5ndGgsIHJvdGF0ZWRdO1xuICAgICAgICAgICAgLy8gaWYob2dQYXJlbnQuY2xhc3NMaXN0WzBdICE9PSAnc2hpcEhvbGQnKXtcbiAgICAgICAgICAgIC8vICAgICBwbGF5ZXIucmVtb3ZlU2hpcChiYWxsLmRhdGFzZXQubmFtZSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBwcmludFNoaXBzKHBsYXllci5zaGlwcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYHRoZSBvZyBwYXJlbnQgaXMgbm93OiAke29nUGFyZW50fWApXG4gICAgICAgICAgb2dQYXJlbnQuYXBwZW5kQ2hpbGQoYmFsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gXG5cbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgY29uc3Qgc3R5bGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJhZ2hvdmVyJyk7XG4gICAgICBBcnJheS5mcm9tKHN0eWxlZCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgcmVtb3ZlU3R5bGUoZWxlbWVudCl9KVxuICAgICAgYmFsbC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgcmV0dXJuIGluZm87XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hbnVhbERyYWc7XG5cbi8vd2hlbiBhIHNoaXAgdGhhdCBoYXMgYmVlbiBwbGFjZWQgaXMgcGljayB1cCAocmVhZCBwYXJlbnQgbm9kZSkgT1Igcm90YXRlZCFcbi8vdGhlbiBpZiBpdCBjcmVhdGVzIGEgdmFsaWQgc2hpcCwgb3ZlciB3cml0ZSB0aGUgb2xkIHNoaXAuXG5cblxuIiwiZnVuY3Rpb24gdmFsaWRFbnRyeShsZW5ndGgsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbiwgYWxwaGEpIHtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyXCIpIHtcbiAgICBpZiAoc3RhcnRQb2ludFsxXSArIGxlbmd0aCAtIDEgPiAxMCkge1xuICAgICAgY29uc29sZS5sb2coc3RhcnRQb2ludFsxXSlcbiAgICAgIGNvbnNvbGUubG9nKHN0YXJ0UG9pbnRbMV0gKyBsZW5ndGgpXG4gICAgICBjb25zb2xlLmxvZygnZ29lcyB0b28gZmFyIHJpZ2h0JylcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1XCIpIHtcbiAgICBpZiAoYWxwaGEuaW5kZXhPZihzdGFydFBvaW50WzBdKSAtIGxlbmd0aCAtIDEgPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwiZFwiKSB7XG4gICAgaWYgKGFscGhhLmluZGV4T2Yoc3RhcnRQb2ludFswXSkgKyBsZW5ndGggLSAxID4gMTApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsXCIpIHtcbiAgICBpZiAoc3RhcnRQb2ludFsxXSAtIGxlbmd0aCA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmlnaHQobGVuZ3RoLCBzdGFydFBvaW50KSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGNvbnN0IHggPSBzdGFydFBvaW50WzBdO1xuICBsZXQgeSA9IHN0YXJ0UG9pbnRbMV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhcnJheS5wdXNoKFt4LCB5XSk7XG4gICAgeSArPSAxO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBsZWZ0KGxlbmd0aCwgc3RhcnRQb2ludCkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBjb25zdCB4ID0gc3RhcnRQb2ludFswXTtcbiAgbGV0IHkgPSBzdGFydFBvaW50WzFdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYXJyYXkucHVzaChbeCwgeV0pO1xuICAgIHkgLT0gMTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHVwKGxlbmd0aCwgc3RhcnRQb2ludCwgYWxwaGEpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgbGV0IGluZGV4ID0gYWxwaGEuaW5kZXhPZihzdGFydFBvaW50WzBdKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHggPSBhbHBoYVtpbmRleF07XG4gICAgY29uc3QgeSA9IHN0YXJ0UG9pbnRbMV07XG4gICAgaW5kZXggLT0gMTtcbiAgICBhcnJheS5wdXNoKFt4LCB5XSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBkb3duKGxlbmd0aCwgc3RhcnRQb2ludCwgYWxwaGEpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgbGV0IGluZGV4ID0gYWxwaGEuaW5kZXhPZihzdGFydFBvaW50WzBdKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHggPSBhbHBoYVtpbmRleF07XG4gICAgY29uc3QgeSA9IHN0YXJ0UG9pbnRbMV07XG4gICAgaW5kZXggKz0gMTtcbiAgICBhcnJheS5wdXNoKFt4LCB5XSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvb3JkaW5hdGVzKGxlbmd0aCwgc3RhcnRQb2ludCwgZGlyZWN0aW9uLCBhbHBoYSkge1xuICBsZXQgY29vcmRzO1xuICBpZiAoZGlyZWN0aW9uID09PSBcInJcIikge1xuICAgIGNvb3JkcyA9IHJpZ2h0KGxlbmd0aCwgc3RhcnRQb2ludCk7XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1XCIpIHtcbiAgICBjb29yZHMgPSB1cChsZW5ndGgsIHN0YXJ0UG9pbnQsIGFscGhhKTtcbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcImRcIikge1xuICAgIGNvb3JkcyA9IGRvd24obGVuZ3RoLCBzdGFydFBvaW50LCBhbHBoYSk7XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsXCIpIHtcbiAgICBjb29yZHMgPSBsZWZ0KGxlbmd0aCwgc3RhcnRQb2ludCk7XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIaXRMb2cobCkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgbCkge1xuICAgIGFycmF5LnB1c2goMCk7XG4gICAgaSArPSAxO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuY29uc3QgbmFtZVNoaXAgPSAobCkgPT4ge1xuICBpZiAobCA9PT0gNSl7XG4gICAgcmV0dXJuICdjYXJyaWVyJztcbiAgfVxuICBpZiAobCA9PT0gNCl7XG4gICAgcmV0dXJuICdiYXR0bGVzaGlwJztcbiAgfVxuICBpZiAobCA9PT0gMyl7XG4gICAgcmV0dXJuICdjcnVpc2VyJztcbiAgfVxuICBpZiAobCA9PT0gMil7XG4gICAgcmV0dXJuICdkZXN0cm95ZXInO1xuICB9XG4gIHJldHVybiAnZXJyb3InXG59XG5cblxuXG5jb25zdCBzaGlwID0gKGwsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbiwgdGhlTmFtZSkgPT4ge1xuICBjb25zdCBuYW1lID0gdGhlTmFtZTtcbiAgY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG4gIGNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuICBjb25zdCBpc1ZhbGlkID0gdmFsaWRFbnRyeShsLCBzdGFydFBvaW50LCBkaXJlY3Rpb24sIGFscGhhKTtcbiAgY29uc29sZS5sb2coaXNWYWxpZCk7XG4gIGlmICghaXNWYWxpZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbGVuZ3RoID0gbDtcbiAgY29uc3QgY29vcmRzID0gZ2VuZXJhdGVDb29yZGluYXRlcyhsLCBzdGFydFBvaW50LCBkaXJlY3Rpb24sIGFscGhhKTtcbiAgY29uc3QgaGl0TG9nID0gZ2VuZXJhdGVIaXRMb2cobCk7XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoIWhpdExvZy5pbmNsdWRlcygwKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3Qgc3VuayA9IGlzU3VuaygpO1xuXG4gIGNvbnN0IGdldENvb3JkcyA9ICgpID0+IGNvb3JkcztcbiAgY29uc3QgZ2V0SGl0bG9nID0gKCkgPT4gaGl0TG9nO1xuXG4gIGNvbnN0IGhpdCA9IChjb29yZFBhaXIpID0+IHtcbiAgICBsZXQgaW5kZXg7XG4gICAgY29vcmRzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGlmIChjb29yZGluYXRlWzBdID09PSBjb29yZFBhaXJbMF0gJiYgY29vcmRpbmF0ZVsxXSA9PT0gY29vcmRQYWlyWzFdKSB7XG4gICAgICAgIGluZGV4ID0gY29vcmRzLmluZGV4T2YoY29vcmRpbmF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhpdExvZ1tpbmRleF0gPSAxO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBzaW5rKCkge1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgaGl0TG9nW2ldID0gMTtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGhpdExvZztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBsZW5ndGgsXG4gICAgY29vcmRzLFxuICAgIGhpdExvZyxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIGdldENvb3JkcyxcbiAgICBnZXRIaXRsb2csXG4gICAgc3VuayxcbiAgICBzaW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBkcmF3TGF5b3V0IGZyb20gXCIuL0dVSU1haW5cIjtcbmltcG9ydCBnYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cbi8vIGNvbnN0IHBsYXllciA9IChudW0pID0+IHtcbi8vICAgICBjb25zdCBwbGF5ZXJOdW0gPSBudW07XG4vLyAgICAgY29uc3QgcEdhbWVib2FyZCA9IGdhbWVib2FyZCgxMCk7XG4vLyAgICAgcmV0dXJuIHtwbGF5ZXJOdW0sIHBHYW1lYm9hcmR9XG4vLyB9O1xuLy8gY29uc3QgcGxheWVyMSA9IHBsYXllcigxKTtcbmNvbnN0IHBsYXllcjEgPSBnYW1lYm9hcmQoMTAsIDEpO1xuY29uc3QgY29tcHV0ZXIgPSBnYW1lYm9hcmQoMTAsIDIpO1xuZHJhd0xheW91dChwbGF5ZXIxKTtcblxuLy93aGVuIGEgc2hpcCBpcyBjaGFuZ2VkIChyKSBvciBwaWNrZWQgdXAgYW5kIG1vdmVkXG4vL0FORCBuZXcgcG9zaXRpb24gaXMgdmFsaWRcbi8vZGVsZXRlIG9sZCBzaGlwLCBydW4gbmV3IHNoaXBcblxuXG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wc2hpcFwiLCBwbGF5ZXJQbGFjZSk7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=