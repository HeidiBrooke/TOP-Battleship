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
___CSS_LOADER_EXPORT___.push([module.id, "/* *{\n    border: solid 1px rgb(154, 173, 184);\n    border-radius: 20px;\n }  */\n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(11, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.unitl:hover{\n    background-color:rgb(117, 149, 168);\n}\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    width: 300px;\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n    box-shadow: 0 0 10px 2px #84ff94;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACC;;;KAGI;;CAEJ;IACG,sBAAsB;CACzB;;AAED;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB;;;0CAGsC;IACtC;gCAC4B;IAC5B,yCAAyC;IACzC,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,iDAAiD;AACrD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,eAAe;;AAEnB;AACA;IACI,0CAA0C;IAC1C,yCAAyC;IACzC,uCAAuC;AAC3C;;AAEA;IACI,wCAAwC;IACxC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,uCAAuC;IACvC,oCAAoC;;AAExC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mCAAmC;IACnC,WAAW;IACX,YAAY;IACZ,eAAe;IACf,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kCAAkC;IAClC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,mCAAmC;IACnC,mCAAmC;IACnC,+BAA+B;IAC/B,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,wCAAwC;IACxC,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,WAAW;AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n /* *{\n    border: solid 1px rgb(154, 173, 184);\n    border-radius: 20px;\n }  */\n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(11, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.unitl:hover{\n    background-color:rgb(117, 149, 168);\n}\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    width: 300px;\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n    box-shadow: 0 0 10px 2px #84ff94;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n\n"],"sourceRoot":""}]);
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







const drawLayout = (player) => {
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const log = (0,_GUIBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(null, 'l');
log.id = 'log';
const mainBoard = (0,_GUIBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(null, 'm');
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
const sub = document.querySelectorAll('[data-name="carrier"]');
sub[0].setAttribute('data-name', 'submarine');
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

function select(ev){
    const old = document.getElementsByClassName('selected');
    if(old[0] !== undefined){
        old[0].classList.remove('selected')
    }
    ev.target.classList.add('selected');
}

function rotate(ev){
    if(ev.key === 'r'){
        // if parent node is shiphold do, normal, other wise, get start coord
        // build a ship in opposite direction (horizontal or vertical), basically treat as a drop if it's already of the board.
        // if ship is valid overwrite
        const selected = document.getElementsByClassName('selected')[0].parentElement;
        let currentRotation = selected.style.transform;
        if((currentRotation === '')||(currentRotation === 'rotate(0deg)') ){
            currentRotation = 0;
            selected.style.transform = `rotate(90deg)`;
        }
        else{
            currentRotation = currentRotation.split('');
            let newRotation = currentRotation[7] + currentRotation[8];
            newRotation = Number(newRotation);
            newRotation -= 90;
            console.log(newRotation)
            selected.style.transform = `rotate(${newRotation}deg)`;
        }
    }  
}

function dragstart (ev) {
    (0,_manualDrag__WEBPACK_IMPORTED_MODULE_0__["default"])(ev.target)
    };

document.addEventListener('keydown', rotate)

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

const gameboard = (l) => {
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
  const printShips = (shipsArray) => {
    shipsArray.forEach(shipEl => {
      console.log(shipEl.name)
    })
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
      const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(len, coord, dir);
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

  return { rows, ships, placeShip, getShips, overlaps, match, receiveAttack, allSunk, removeShip, getShipByStart, getShipByName };
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
            let dir = 'r';
            if(isRotated){
                dir = 'd'
            }
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
        const isValidLoc = playerPlace(col1, row1, length, rotated, player, ball.dataset.name) 
        if(isValidLoc){
            ball.style.gridArea = `${row1}/${col1}/${row2}/${col2}`;
            board.appendChild(ball);
            info = [[row1, col1], length, rotated];
            console.log(ogParent.classList[0])
            if(ogParent.classList[0] !== 'shipHold'){
                player.removeShip(ball.dataset.name);
            }
            printShips(player.ships);
        }
      } else {
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



const ship = (l, startPoint, direction) => {
  const name = nameShip(l);
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

const player1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(10);
const computer = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(10);
(0,_GUIMain__WEBPACK_IMPORTED_MODULE_0__["default"])(player1);

//when a ship is changed (r) or picked up and moved
//AND new position is valid
//delete old ship, run new ship



// document.addEventListener("dropship", playerPlace);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxZQUFZO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksdURBQVU7QUFDZDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0U7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU56QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDbkxwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FtQztBQUNDOztBQUVwQztBQUNBOztBQUVBLGdCQUFnQixzREFBUztBQUN6QixpQkFBaUIsc0RBQVM7QUFDMUIsb0RBQVU7O0FBRVY7QUFDQTtBQUNBOzs7O0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlCb2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlNYWluLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL0dVSVNoaXAuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL21hbnVhbERyYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw2MDA7MCw4MDA7MSwzMDA7MSw0MDAmZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICp7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigxNTQsIDE3MywgMTg0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gfSAgKi9cXG5cXG4gKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gfVxcbiAgICBcXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDUyLCA1OCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgNDEsIDQ2KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoNzQsIDkwLCA5OSkgLCByZ2IoMzIsIDQxLCA0NikpO1xcbiAgICBmb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgKi9cXG4gICAgLyogY29sb3I6IHJnYigyMDIsIDIyNSwgMjM4KTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgKi9cXG4gICAgLyogYm9yZGVyOiBzb2xpZCA0cHggcmdiKDk0LCAxMTksIDEzMyk7ICovXFxuICAgIGNvbG9yOiByZ2IoMjAsIDE3LCAxNyk7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDI1cHgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b3BMYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNpZGVMYWJlbCB7XFxuICAgIGdyaWQtcm93OiAyLzEyO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGxVbml0LCAuc2xVbml0LCAuY29ybmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgXFxufVxcbi50bFVuaXR7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLnNsVW5pdHtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmNvcm5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5pbm5lckJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGdyaWQtcm93OiAyLzEyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgXFxufVxcblxcbi51bml0bCwgLnVuaXRte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc2LCAyMDAsIDIxNCk7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLnVuaXRsOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMTcsIDE0OSwgMTY4KTtcXG59XFxuXFxuLm1pc3MsIC5taXNzOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0OSwgMTYxLCAyMjYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaGl0LCAuaGl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMjgsIDEwMCwgMTAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxMDksIDEwOSk7XFxuICAgIC8qIGJvcmRlcjpyZ2IoMjI4LCAxMDAsIDEwMCk7ICovXFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5ob2xkZXJ7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uc2hpcCwgLnNoaXA6aG92ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDczLCAxMDYsIDEyNiwgNjAlKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDQ3LCA2MywgNzEpO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5kcmFnaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTYsIDIpO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OjI1cHg7XFxufVxcbi5zaGlwSG9sZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zaGlwSG9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggIzg0ZDRmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4ICM4NGZmOTQ7XFxufVxcblxcbi5yb3RhdGVkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uYW5jaG9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNDOzs7S0FHSTs7Q0FFSjtJQUNHLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qjs7OzBDQUdzQztJQUN0QztnQ0FDNEI7SUFDNUIseUNBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMseUNBQXlDO0lBQ3pDLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyx5Q0FBeUM7SUFDekMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHlDQUF5QztJQUN6QywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQix5Q0FBeUM7SUFDekMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNjAwOzAsODAwOzEsMzAwOzEsNDAwJmZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG4gLyogKntcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE1NCwgMTczLCAxODQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiB9ICAqL1xcblxcbiAqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiB9XFxuICAgIFxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNTIsIDU4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCA0MSwgNDYpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYig3NCwgOTAsIDk5KSAsIHJnYigzMiwgNDEsIDQ2KSk7XFxuICAgIGZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyAqL1xcbiAgICAvKiBjb2xvcjogcmdiKDIwMiwgMjI1LCAyMzgpO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDRweCByZ2IoOTQsIDExOSwgMTMzKTsgKi9cXG4gICAgY29sb3I6IHJnYigyMCwgMTcsIDE3KTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDI1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMjVweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvcExhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2lkZUxhYmVsIHtcXG4gICAgZ3JpZC1yb3c6IDIvMTI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50bFVuaXQsIC5zbFVuaXQsIC5jb3JuZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG59XFxuLnRsVW5pdHtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uc2xVbml0e1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uY29ybmVye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmlubmVyQm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZ3JpZC1yb3c6IDIvMTI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBcXG59XFxuXFxuLnVuaXRsLCAudW5pdG17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzYsIDIwMCwgMjE0KTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4udW5pdGw6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDExNywgMTQ5LCAxNjgpO1xcbn1cXG5cXG4ubWlzcywgLm1pc3M6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ5LCAxNjEsIDIyNik7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5oaXQsIC5oaXQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIyOCwgMTAwLCAxMDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDEwOSwgMTA5KTtcXG4gICAgLyogYm9yZGVyOnJnYigyMjgsIDEwMCwgMTAwKTsgKi9cXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmhvbGRlcntcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5zaGlwLCAuc2hpcDpob3ZlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNzMsIDEwNiwgMTI2LCA2MCUpO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNDcsIDYzLCA3MSk7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLmRyYWdob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5NiwgMik7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6MjVweDtcXG59XFxuLnNoaXBIb2xkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNoaXBIb2xkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCAjODRkNGZmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggIzg0ZmY5NDtcXG59XFxuXFxuLnJvdGF0ZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5hbmNob3Ige1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cbmZ1bmN0aW9uIGFkZEhvdmVyKGV2KSB7XG4gIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcbn1cbmZ1bmN0aW9uIHVuSG92ZXIoZXYpIHtcbiAgZXYudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcmVkXCIpO1xufVxuXG5mdW5jdGlvbiB1bnN0eWxlVGFyZ2V0KGV2KSB7XG4gIC8vY29uc29sZS5sb2coJ2ltIFVOdHJpZ2dlcmVkJylcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZXYudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnaG92ZXJcIik7XG59XG5cbmZ1bmN0aW9uIHN0eWxlVGFyZ2V0KGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vY29uc29sZS5sb2coJ2ltIHRyaWdnZXJlZCcpXG4gIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2hvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRsb2NhdGlvbihldikge1xuICBjb25zb2xlLmxvZygnYURyb3AgaGFwcGVuZWQhJylcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdW5zdHlsZVRhcmdldChldik7XG4gIGNvbnN0IGRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHJhZ0l0ZW1cIik7XG4gIGNvbnN0IG5vZGUgPSBkYXRhWzBdO1xuICBjb25zdCBsb2MgPSBldi50YXJnZXQuaWQuc3BsaXQoXCJcIik7XG4gIGNvbnN0IGNvbDEgPSBOdW1iZXIobG9jWzFdKSArIDI7XG4gIGNvbnN0IGNvbDIgPSBjb2wxICsgMTtcbiAgY29uc3Qgcm93MSA9IGFscGhhLmluZGV4T2YobG9jWzBdKSArIDI7XG4gIGNvbnN0IHJvdzIgPSByb3cxICsgMTtcbiAgbm9kZS5zdHlsZS5ncmlkQXJlYSA9IGAke3JvdzF9LyR7Y29sMX0vJHtyb3cyfS8ke2NvbDJ9YDtcbiAgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbn1cblxuY29uc3QgZHJhd0JvYXJkID0gKHBseXJWYWwsIHR5cGUpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuICBjb25zdCB0b3BMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQuYXBwZW5kQ2hpbGQodG9wTGFiZWwpO1xuICB0b3BMYWJlbC5jbGFzc0xpc3QuYWRkKFwidG9wTGFiZWxcIik7XG4gIGNvbnN0IHNpZGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQuYXBwZW5kQ2hpbGQoc2lkZUxhYmVsKTtcbiAgc2lkZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJzaWRlTGFiZWxcIik7XG4gIGNvbnN0IGlubmVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbm5lckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJpbm5lckJvYXJkXCIpO1xuICBncmlkLmFwcGVuZENoaWxkKGlubmVyQm9hcmQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gYCR7aX1sYDtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRsVW5pdFwiKTtcbiAgICB0b3BMYWJlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2kgKyAxfWA7XG4gICAgaSArPSAxO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBgJHtpfWxgO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2xVbml0XCIpO1xuICAgIHNpZGVMYWJlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2FscGhhW2ldfWA7XG4gICAgaSArPSAxO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYHVuaXQke3R5cGV9YCk7XG4gICAgICBpbm5lckJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuaWQgPSBgJHthbHBoYVtpXX0ke2p9JHt0eXBlfWA7XG4gICAgICAvLyBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgc3R5bGVUYXJnZXQpO1xuICAgICAgaWYgKHR5cGUgPT09IFwibVwiKSB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgc3R5bGVUYXJnZXQpO1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCB1bnN0eWxlVGFyZ2V0KTtcbiAgICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGdldGxvY2F0aW9uKTtcbiAgICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgc3R5bGVUYXJnZXQpO1xuICAgICAgICAvLyBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdW5zdHlsZVRhcmdldCk7XG4gICAgICAgIC8vIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3VzZVwiLCBnZXRsb2NhdGlvbik7XG4gICAgICB9XG4gICAgICBqICs9IDE7XG4gICAgfVxuICAgIGkgKz0gMTtcbiAgfVxuXG4gIGNvbnN0IGNvcm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQuYXBwZW5kQ2hpbGQoY29ybmVyKTtcbiAgY29ybmVyLmNsYXNzTGlzdC5hZGQoXCJjb3JuZXJcIik7XG5cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkcmF3Qm9hcmQ7XG4iLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IGRyYXdCb2FyZCBmcm9tIFwiLi9HVUlCb2FyZFwiO1xuaW1wb3J0IGRyYXdTaGlwcyBmcm9tIFwiLi9HVUlTaGlwXCI7XG5pbXBvcnQgbWFudWFsRHJhZyBmcm9tIFwiLi9tYW51YWxEcmFnXCI7XG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBkcmF3TGF5b3V0ID0gKHBsYXllcikgPT4ge1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbmNvbnN0IGxvZyA9IGRyYXdCb2FyZChudWxsLCAnbCcpO1xubG9nLmlkID0gJ2xvZyc7XG5jb25zdCBtYWluQm9hcmQgPSBkcmF3Qm9hcmQobnVsbCwgJ20nKTtcbm1haW5Cb2FyZC5pZCA9ICdtYWluQm9hcmQnO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkJvYXJkKTtcbmNvbnN0IHNoaXBzID0gZHJhd1NoaXBzKCk7XG5cbmNvbnN0IHNoaXBIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNoaXBIb2xkZXIuY2xhc3NMaXN0LmFkZCgnc2hpcEhvbGRlcicpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBIb2xkZXIpO1xuXG5zaGlwcy5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgY29uc3Qgc2hpcEhvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwSG9sZC5jbGFzc0xpc3QuYWRkKCdzaGlwSG9sZCcpXG4gICAgc2hpcEhvbGQuYXBwZW5kQ2hpbGQoc2hpcEVsKTtcbiAgICBzaGlwSG9sZC5zdHlsZS53aWR0aCA9IHNoaXBFbC5maXJzdENoaWxkLnN0eWxlLndpZHRoO1xuICAgIHNoaXBIb2xkZXIuYXBwZW5kQ2hpbGQoc2hpcEhvbGQpO1xuICAgIG1hbnVhbERyYWcoc2hpcEVsLCBwbGF5ZXIpO1xufSlcbmNvbnN0IHN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hbWU9XCJjYXJyaWVyXCJdJyk7XG5zdWJbMF0uc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCAnc3VibWFyaW5lJyk7XG59XG5cbi8vIGNvbnN0IG1pc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYTBsJyk7XG4vLyBtaXNzLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuXG4vLyBjb25zdCBoaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYTFsJyk7XG4vLyBoaXQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGRyYXdMYXlvdXQiLCJpbXBvcnQgbWFudWFsRHJhZyBmcm9tIFwiLi9tYW51YWxEcmFnXCI7XG5cbmZ1bmN0aW9uIGRyYWcoZXYpIHtcbiAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZXYudGFyZ2V0LmlkKTtcbiAgICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZ0l0ZW0nKTtcbiAgICBjb25zdCBub2RlID0gZXYudGFyZ2V0O1xuICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgICAgbm9kZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0sIDEpO1xuICB9XG5mdW5jdGlvbiBwbGFjZShldil7XG4gICAgY29uc3Qgbm9kZSA9IGV2LnRhcmdldDtcbiAgICBldi50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ0l0ZW0nKTtcbiAgICBzZXRUaW1lb3V0ICgoKSA9PiB7XG4gICAgICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9IFwiXCI7XG4gICAgICB9LCAxKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KGV2KXtcbiAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpO1xuICAgIGlmKG9sZFswXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgb2xkWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICB9XG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZShldil7XG4gICAgaWYoZXYua2V5ID09PSAncicpe1xuICAgICAgICAvLyBpZiBwYXJlbnQgbm9kZSBpcyBzaGlwaG9sZCBkbywgbm9ybWFsLCBvdGhlciB3aXNlLCBnZXQgc3RhcnQgY29vcmRcbiAgICAgICAgLy8gYnVpbGQgYSBzaGlwIGluIG9wcG9zaXRlIGRpcmVjdGlvbiAoaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCksIGJhc2ljYWxseSB0cmVhdCBhcyBhIGRyb3AgaWYgaXQncyBhbHJlYWR5IG9mIHRoZSBib2FyZC5cbiAgICAgICAgLy8gaWYgc2hpcCBpcyB2YWxpZCBvdmVyd3JpdGVcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBjdXJyZW50Um90YXRpb24gPSBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGlmKChjdXJyZW50Um90YXRpb24gPT09ICcnKXx8KGN1cnJlbnRSb3RhdGlvbiA9PT0gJ3JvdGF0ZSgwZGVnKScpICl7XG4gICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSAwO1xuICAgICAgICAgICAgc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSg5MGRlZylgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSBjdXJyZW50Um90YXRpb24uc3BsaXQoJycpO1xuICAgICAgICAgICAgbGV0IG5ld1JvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uWzddICsgY3VycmVudFJvdGF0aW9uWzhdO1xuICAgICAgICAgICAgbmV3Um90YXRpb24gPSBOdW1iZXIobmV3Um90YXRpb24pO1xuICAgICAgICAgICAgbmV3Um90YXRpb24gLT0gOTA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdSb3RhdGlvbilcbiAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtuZXdSb3RhdGlvbn1kZWcpYDtcbiAgICAgICAgfVxuICAgIH0gIFxufVxuXG5mdW5jdGlvbiBkcmFnc3RhcnQgKGV2KSB7XG4gICAgbWFudWFsRHJhZyhldi50YXJnZXQpXG4gICAgfTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHJvdGF0ZSlcblxuY29uc3QgbmFtZVNoaXAgPSAobCkgPT4ge1xuICAgIGlmIChsID09PSA1KXtcbiAgICAgIHJldHVybiAnY2Fycmllcic7XG4gICAgfVxuICAgIGlmIChsID09PSA0KXtcbiAgICAgIHJldHVybiAnYmF0dGxlc2hpcCc7XG4gICAgfVxuICAgIGlmIChsID09PSAzKXtcbiAgICAgIHJldHVybiAnY3J1aXNlcic7XG4gICAgfVxuICAgIGlmIChsID09PSAyKXtcbiAgICAgIHJldHVybiAnZGVzdHJveWVyJztcbiAgICB9XG4gICAgcmV0dXJuICdlcnJvcidcbiAgfVxuXG5jb25zdCBkcmF3U2hpcCA9IChsZW4pID0+IHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnYW5jaG9yJyk7XG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnZGF0YS1zaGlwJywgbGVuKTtcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lU2hpcChsZW4pKTtcbiAgICBjb25zdCBmYWtlc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZha2VzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAvLyBmYWtlc2hpcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgLy8gZmFrZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZyk7XG4gICAgLy8gZmFrZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHBsYWNlKTtcbiAgICAvLyBmYWtlc2hpcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzZWxlY3QpO1xuICAgIGZha2VzaGlwLnN0eWxlLndpZHRoID0gYCR7bGVuICogMjV9cHhgO1xuICAgIGFuY2hvci5hcHBlbmRDaGlsZChmYWtlc2hpcClcbiAgICAvLyBhbmNob3Iuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZyk7XG4gICAgLy8gYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBwbGFjZSk7XG4gICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzZWxlY3QpO1xuICAgIHJldHVybiBhbmNob3I7XG59XG5cbmNvbnN0IGRyYXdTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwZGl2cyA9IFtdO1xuICAgIHNoaXBkaXZzLnB1c2goZHJhd1NoaXAoNSkpO1xuICAgIHNoaXBkaXZzLnB1c2goZHJhd1NoaXAoNCkpO1xuICAgIHNoaXBkaXZzLnB1c2goZHJhd1NoaXAoMykpO1xuICAgIHNoaXBkaXZzLnB1c2goZHJhd1NoaXAoMykpO1xuICAgIHNoaXBkaXZzLnB1c2goZHJhd1NoaXAoMikpO1xuICAgIHJldHVybiBzaGlwZGl2cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJhd1NoaXBzXG5cblxuXG5cblxuIiwiaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5mdW5jdGlvbiBnZW5Sb3cobCkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgbCkge1xuICAgIGFycmF5LnB1c2goXCJFXCIpO1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUm93cyhsKSB7XG4gIGNvbnN0IHJvd3MgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IGwpIHtcbiAgICByb3dzLnB1c2goZ2VuUm93KGwpKTtcbiAgICBpICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJvd3M7XG59XG5cbmNvbnN0IGdhbWVib2FyZCA9IChsKSA9PiB7XG4gIGNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuICBjb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcbiAgY29uc3Qgcm93cyA9IGdlbmVyYXRlUm93cyhsKTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBzaGlwcztcblxuICBjb25zdCB2YWxpZExlbmd0aCA9IChsZW4pID0+IHtcbiAgICBsZXQgc2hpcFR5cGUgPSAwO1xuICAgIGdldFNoaXBzKCkuZm9yRWFjaCgoYVNoaXApID0+IHtcbiAgICAgIGlmIChhU2hpcC5sZW5ndGggPT09IGxlbikge1xuICAgICAgICBzaGlwVHlwZSArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxlbiA9PT0gMikge1xuICAgICAgaWYgKHNoaXBUeXBlID4gMSkge1xuICAgICAgICBjb25zb2xlLmxvZygnMiBzaGlwIGFscmVhZHkgb24gbG9nZ2VkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGVuID09PSAzKSB7XG4gICAgICBpZiAoc2hpcFR5cGUgPiAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcyIDMgc2hpcHMgYWxyZWFkeSBvbiBsb2dnZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsZW4gPT09IDUpIHtcbiAgICAgIGlmIChzaGlwVHlwZSA+IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJzIgMyBzaGlwcyBhbHJlYWR5IG9uIGxvZ2dlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICBpZiAobGVuID09PSA0KSB7XG4gICAgICBpZiAoc2hpcFR5cGUgPiAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCc0IHNoaXAgYWxyZWFkeSBvbiBsb2dnZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgbWF0Y2ggPSAoY29vcmQxLCBjb29yZDIpID0+IHtcbiAgICBpZiAoY29vcmQxWzBdID09PSBjb29yZDJbMF0gJiYgY29vcmQxWzFdID09PSBjb29yZDJbMV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcEJ5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgICAgaWYoc2hpcEVsLm5hbWUgPT09IG5hbWUpe1xuICAgICAgICByZXR1cm4gc2hpcEVsO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBvdmVybGFwcyA9IChhU2hpcCwgbmV3U2hpcCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkbyB0aGUgZm9sbG93aW5nIG92ZXJsYXA/JylcbiAgICBjb25zb2xlLmxvZyhhU2hpcC5uYW1lKTtcbiAgICBjb25zb2xlLmxvZyhuZXdTaGlwLm5hbWUpO1xuICAgIGlmKGFTaGlwLmxlbmd0aCA9PT0gbmV3U2hpcC5sZW5ndGgpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgb3ZlcmxhcCA9IGZhbHNlO1xuICAgIGFTaGlwLmNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT5cbiAgICAgIG5ld1NoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkcCkgPT4ge1xuICAgICAgICBpZiAobWF0Y2goY29vcmRwLCBjb29yZCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZm91bmQgb3ZlcmxhcCcpXG4gICAgICAgICAgY29uc29sZS5sb2coY29vcmRwLCBjb29yZClcbiAgICAgICAgICBvdmVybGFwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIG92ZXJsYXA7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTWF0cml4ID0gKGFTaGlwKSA9PiB7XG4gICAgY29uc29sZS5sb2coYVNoaXApXG4gICAgYVNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGFscGhhLmluZGV4T2YoY29vcmRbMF0pO1xuICAgICAgcm93c1tpbmRleF1bY29vcmRbMV1dID0gc2hpcHMuaW5kZXhPZihhU2hpcCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcCA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHRoZVNoaXA7XG4gICAgY29uc29sZS5sb2coYHJlbW92aW5nIGEgJHtuYW1lfSBmcm9tYClcbiAgICBjb25zb2xlLmxvZyhzaGlwcylcbiAgICBzaGlwcy5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBpZihzaGlwRWwubmFtZSA9PT0gbmFtZSl7XG4gICAgICAgIHRoZVNoaXAgPSBzaGlwRWw7XG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGVTaGlwKTtcbiAgICBpZiAodGhlU2hpcCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGNvbnN0IGluZGV4ID0gc2hpcHMuaW5kZXhPZih0aGVTaGlwKVxuICAgICAgc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjdXJyZW50U2hpcE5hbWVzID0gKHNoaXBzQXJyKSA9PiB7XG4gICAgY29uc3QgbmFtZXMgPSBbXTtcbiAgICBzaGlwc0Fyci5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBuYW1lcy5wdXNoKHNoaXBFbC5uYW1lKVxuICAgIH0pXG4gICAgcmV0dXJuIG5hbWVzO1xuICB9XG4gIGNvbnN0IHNoaXBFeGlzdHMgPSAobikgPT4ge1xuICAgIGNvbnN0IG5hbWVzID0gY3VycmVudFNoaXBOYW1lcyhzaGlwcyk7XG4gICAgaWYobmFtZXMuaW5jbHVkZXMobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBwcmludFNoaXBzID0gKHNoaXBzQXJyYXkpID0+IHtcbiAgICBzaGlwc0FycmF5LmZvckVhY2goc2hpcEVsID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHNoaXBFbC5uYW1lKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBwbGFjZVNoaXAgPSAobGVuLCBjb29yZCwgZGlyLCBuYW1lKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3BsYWNpbmcgc2hpcDonKTtcbiAgICBjb25zb2xlLmxvZyhuYW1lKVxuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHNoaXBzIGFyZTonKVxuICAgIGNvbnNvbGUubG9nKHByaW50U2hpcHMoc2hpcHMpKVxuXG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgLy9jaGVjayBpZiBzaGlwIGFscmVhZHkgZXhpc3RzLCBpZiBzbywgcmVtb3ZlIG9sZCBzaGlwXG4gICAgaWYgKHNoaXBFeGlzdHMobmFtZSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmluZyBzaGlwJyk7XG4gICAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICAgIHJlbW92ZVNoaXAobmFtZSk7XG4gICAgfVxuICAgIC8vdHJ5IG1ha2luZyBhIHNoaXAsIGlmIGl0IG1ha2VzIG9uZSwgY2hlY2sgaWYgaXQgb3ZlcmxhcHMsIGlmIGl0IGRvZXMsIGRvbid0IHB1c2ggaXQuIFxuICAgICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobGVuLCBjb29yZCwgZGlyKTtcbiAgICAgIGlmKG5ld1NoaXAgIT09IG51bGwpe1xuICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgIGlmKHNoaXBzLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgc2hpcHMuZm9yRWFjaCgoYVNoaXApID0+IHtcbiAgICAgICAgICAgIGlmIChvdmVybGFwcyhhU2hpcCwgbmV3U2hpcCkpIHtcbiAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTsgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmKHZhbGlkID09PSB0cnVlKXtcbiAgICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApOyBcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2hpcCBwdXNoZWQgd2FzOicpXG4gICAgICAgICAgY29uc29sZS5sb2cobmV3U2hpcC5uYW1lKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHVwZGF0ZU1hdHJpeChuZXdTaGlwKTtcbiAgICBcbiAgICByZXR1cm4gdmFsaWQ7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gYWxwaGEuaW5kZXhPZihjb29yZFswXSk7XG4gICAgY29uc3QgY3VycmVudFZhbCA9IHJvd3NbaW5kZXhdW2Nvb3JkWzFdXTtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRWYWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJvd3NbaW5kZXhdW2Nvb3JkWzFdXSA9IFwiSFwiO1xuICAgICAgc2hpcHNbY3VycmVudFZhbF0uaGl0KGNvb3JkKTtcbiAgICAgIHJldHVybiBcIkkgd29ya2VkXCI7XG4gICAgfVxuICAgIGlmIChjdXJyZW50VmFsID09PSBcIkVcIikge1xuICAgICAgcm93c1tpbmRleF1bY29vcmRbMV1dID0gXCJNXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcImFscmVhZHkgZmlyZWQgaGVyZS4gVHJ5IGFnYWluLlwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKGFTaGlwKSA9PiB7XG4gICAgICBpZiAoIWFTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwQnlTdGFydCA9IChjb29yZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIHNoaXAnKVxuICAgIHNoaXBzLmZvckVhY2goYVNoaXAgPT4ge1xuICAgICAgaWYoKGFTaGlwLmNvb3Jkc1swXVswXT09PSBjb29yZFswXSkgJiYgKGFTaGlwLmNvb3Jkc1swXVsxXT09PSBjb29yZFsxXSkpe1xuICAgICAgICByZXR1cm4gYVNoaXA7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7IHJvd3MsIHNoaXBzLCBwbGFjZVNoaXAsIGdldFNoaXBzLCBvdmVybGFwcywgbWF0Y2gsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmssIHJlbW92ZVNoaXAsIGdldFNoaXBCeVN0YXJ0LCBnZXRTaGlwQnlOYW1lIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7XG5cblxuIiwiY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG5jb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcblxuY29uc3QgcHJpbnRTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gIHNoaXBzQXJyYXkuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNoaXBFbC5uYW1lKVxuICB9KVxufVxuXG5jb25zdCByZW1vdmVTdHlsZSA9IChwcmV2aW91c0VsZW0pID0+IHtcbiAgICBjb25zdCBkcmFnbGVhdmUgPSBuZXcgRXZlbnQoXCJkcmFnbGVhdmVcIik7XG4gICAgcHJldmlvdXNFbGVtLmRpc3BhdGNoRXZlbnQoZHJhZ2xlYXZlKTtcbn1cblxuY29uc3Qgc3R5bGVOb2RlID0gKHRoZUVsZW0pID0+IHtcbiAgICBjb25zdCBkcmFnb3ZlciA9IG5ldyBFdmVudChcImRyYWdvdmVyXCIpO1xuICAgIHRoZUVsZW0uZGlzcGF0Y2hFdmVudChkcmFnb3Zlcik7XG4gICAgICAgIH1cblxuY29uc3QgcGxheWVyUGxhY2UgPSAoY29sMSwgcm93MSwgbGVuZ3RoLCByb3QsIHBsYXllciwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IG5hbWU7XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBjb2wxIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGFscGhhW3JvdzEgLSAyXTtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gW3JvdywgY29sXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGlzUm90YXRlZCA9IHJvdDtcbiAgICAgICAgICAgIGxldCBkaXIgPSAncic7XG4gICAgICAgICAgICBpZihpc1JvdGF0ZWQpe1xuICAgICAgICAgICAgICAgIGRpciA9ICdkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsaWQgPSBwbGF5ZXIucGxhY2VTaGlwKGxlbixjb29yZCxkaXIsbik7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICAgIH1cbi8vIGNvbnN0IHBsYWNlbWVudENoZWNrID0gKGxlbiwgcm90YXRlZCwgcm93MSwgY29sMSkgPT4ge1xuLy8gICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuLy8gICAgIGlmKHJvdGF0ZWQpe1xuLy8gICAgICAgICBpZihsZW4gPT09IDIpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCAxMSl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDMpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCAxMCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDQpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCA5KXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNSl7XG4vLyAgICAgICAgICAgICBpZiAocm93MSA8IDgpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICB9IFxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBpZihsZW4gPT09IDIpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCAxMSl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDMpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCAxMCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDQpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCA5KXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNSl7XG4vLyAgICAgICAgICAgICBpZiAoY29sMSA8IDgpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgLy9jb25zb2xlLmxvZyhsZW4sIHJvdGF0ZWQsIGNvbDEsIHJvdzEsIHZhbGlkKTtcbi8vICAgICByZXR1cm4gdmFsaWQ7XG4vLyB9XG5cbmNvbnN0IGlzUm90YXRlZCA9ICh2YWwpID0+IHtcbiAgICBpZih2YWwubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgaWYodmFsWzddICE9PSAnMCcpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBwaXhlbHMyTGVuZ3RoID0gKGxlbikgPT4ge1xuICAgIGlmKGxlbiA9PT0gJzEyNXB4Jyl7XG4gICAgICAgIHJldHVybiA1XG4gICAgfVxuICAgIGlmKGxlbiA9PT0gJzEwMHB4Jyl7XG4gICAgICAgIHJldHVybiA0XG4gICAgfVxuICAgIGlmKGxlbiA9PT0gJzc1cHgnKXtcbiAgICAgICAgcmV0dXJuIDNcbiAgICB9XG4gICAgaWYobGVuID09PSAnNTBweCcpe1xuICAgICAgICByZXR1cm4gMlxuICAgIH1cbn1cblxuLy8gY29uc3QgYWxsQXJlYXMgPSAoYXJyYXlPZkFuY2hvcnMpID0+IHtcbi8vICAgICBjb25zdCBhbGxzaGlwQXJlYXMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5cbi8vIH1cblxuLy8gY29uc3QgY2FsY0FyZWEgPSAoY29sMSwgcm93MSwgbGVuLCByb3RhdGVkKSA9PiB7XG4vLyAgICAgbGV0IGNvbCA9IGNvbDE7XG4vLyAgICAgbGV0IHJvdyA9IHJvdzE7XG4vLyAgICAgY29uc3QgYXJyYXlPZlRha2VuRWxlbXMgPSBbXTtcbi8vICAgICBjb25zdCBhcnJheU9mVGFrZW5JRHMgPSBbXTtcbi8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuLTE7KXtcbi8vICAgICAgICAgbGV0IGlkO1xuLy8gICAgICAgICBpZighcm90YXRlZCl7XG4vLyAgICAgICAgICAgICByb3cgPSBhbHBoYVtyb3ddO1xuLy8gICAgICAgICAgICAgaWQgPSBgJHtyb3d9JHtjb2wgKyAxfW1gXG4vLyAgICAgICAgIGFycmF5T2ZUYWtlbklEcy5wdXNoKGlkKTtcbi8vICAgICAgICAgY29sICs9IDE7fVxuLy8gICAgICAgICBlbHNle1xuLy8gICAgICAgICAgICAgY29uc3QgdGhlUm93ID0gYWxwaGFbcm93XTtcbi8vICAgICAgICAgICAgIGlkID0gYCR7dGhlUm93fSR7Y29sfW1gXG4vLyAgICAgICAgIGFycmF5T2ZUYWtlbklEcy5wdXNoKGlkKTtcbi8vICAgICAgICAgcm93ICs9IDE7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaSs9MTtcbi8vICAgICB9XG4vLyAgICAgYXJyYXlPZlRha2VuSURzLmZvckVhY2goaWQgPT4ge1xuLy8gICAgICAgICBjb25zdCBlbGVtID0gZ2V0RWxlbWVudEJ5SWQoaWQpO1xuLy8gICAgICAgICBhcnJheU9mVGFrZW5FbGVtcy5wdXNoKGVsZW0pO1xuLy8gICAgIH0pXG4vLyAgICAgcmV0dXJuIGFycmF5T2ZUYWtlbkVsZW1zO1xuLy8gfVxuXG4vLyBjb25zdCBpc1Rha2VuID0gKG5vZGUpID0+IHtcbi8vICAgICBpZihub2RlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCl7XG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gZmFsc2U7XG4vLyB9XG5cbmNvbnN0IG1hbnVhbERyYWcgPSAobm9kZSwgcGxheWVyKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQm9hcmRcIik7XG4gIGNvbnN0IGJhbGwgPSBub2RlO1xuICBjb25zdCBsZW5ndGggPSBwaXhlbHMyTGVuZ3RoKG5vZGUuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGgpO1xuICBcbi8vICAgbGV0IGluZGV4ID0gQXJyYXkoYmFsbC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKGJhbGwpO1xuXG4gIGJhbGwub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJkcmFnSXRlbVwiKTtcbiAgICAvLyAoMSkgc3RhcnQgdGhlIHByb2Nlc3NcbiAgICBjb25zdCBvZ1BhcmVudCA9IGJhbGwucGFyZW50RWxlbWVudDtcbiAgICBsZXQgcm90YXRlZCA9IG5vZGUuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCcnKTtcbiAgICByb3RhdGVkID0gaXNSb3RhdGVkKHJvdGF0ZWQpO1xuICAgIGJhbGwuc2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZWQnLCByb3RhdGVkKVxuICAgIC8vIGNvbnNvbGUubG9nKGxlbmd0aCwgcm90YXRlZClcbiAgICAvLyAoMikgcHJlcGFyZSB0byBtb3Zpbmc6IG1ha2UgYWJzb2x1dGUgYW5kIG9uIHRvcCBieSB6LWluZGV4XG4gICAgYmFsbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBiYWxsLnN0eWxlLnpJbmRleCA9IDEwMDA7XG5cbiAgICAvLyBtb3ZlIGl0IG91dCBvZiBhbnkgY3VycmVudCBwYXJlbnRzIGRpcmVjdGx5IGludG8gYm9keVxuICAgIC8vIHRvIG1ha2UgaXQgcG9zaXRpb25lZCByZWxhdGl2ZSB0byB0aGUgYm9keVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJhbGwpO1xuICAgIC8vIGJvYXJkLmFwcGVuZENoaWxkKGJhbGwpO1xuICAgIC8vIC4uLmFuZCBwdXQgdGhhdCBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgYmFsbCB1bmRlciB0aGUgY3Vyc29yXG4gICAgbGV0IGFuSUQ7XG4gICAgbGV0IHRoZUVsZW07XG4gICAgbGV0IHByZXZpb3VzRWxlbTtcbiAgICAvLyBjZW50ZXJzIHRoZSBiYWxsIGF0IChwYWdlWCwgcGFnZVkpIGNvb3JkaW5hdGVzXG4gICAgZnVuY3Rpb24gbW92ZUF0KHBhZ2VYLCBwYWdlWSkge1xuICAgICAgYmFsbC5zdHlsZS5sZWZ0ID0gYCR7cGFnZVggLSBiYWxsLm9mZnNldFdpZHRoIC8gMn1weGA7XG4gICAgICBiYWxsLnN0eWxlLnRvcCA9IGAke3BhZ2VZIC0gYmFsbC5vZmZzZXRIZWlnaHQgLyAyfXB4YDtcbiAgICAgIGNvbnN0IGRyb3BFbGVtTGlzdCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KHBhZ2VYLCBwYWdlWSk7XG5cbiAgICAgIGRyb3BFbGVtTGlzdC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGFzc2xpc3QnKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhBcnJheS5mcm9tKGVsZW0uY2xhc3NMaXN0KSlcbiAgICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJ1bml0bVwiKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGNvbnRhaW5zIGl0ISByZXR1cm4gSUQ6ICR7ZWxlbS5pZH1gKTtcbiAgICAgICAgICAgIGFuSUQgPSBlbGVtLmlkO1xuICAgICAgICAgICAgdGhlRWxlbSA9IGVsZW07XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHN0eWxlTm9kZSh0aGVFbGVtKSwgNTAwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocHJldmlvdXNFbGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGVsZW0uaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3ByZXZpb3VzRWxlbS5pZH0gdnMuICR7ZWxlbS5pZH1gKTtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNFbGVtICE9PSBlbGVtKSB7XG4gICAgICAgICAgICAgICAgICByZW1vdmVTdHlsZShwcmV2aW91c0VsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBwcmV2aW91c0VsZW0gPSB0aGVFbGVtO1xuICAgICAgLy8gc3R5bGVOb2RlKGRyb3BFbGVtKVxuICAgIH1cblxuICAgIG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXYpIHtcbiAgICAgIG1vdmVBdChldi5wYWdlWCwgZXYucGFnZVkpO1xuICAgICAgLy8gY29uc3QgdW5FbGVtID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RyYWdob3ZlcicpWzBdO1xuICAgICAgLy8gZHJvcEVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2hvdmVyJylcbiAgICB9XG5cbiAgICAvLyAoMykgbW92ZSB0aGUgYmFsbCBvbiBtb3VzZW1vdmVcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICBsZXQgaW5mbztcbiAgICAvLyAoNCkgZHJvcCB0aGUgYmFsbCwgcmVtb3ZlIHVubmVlZGVkIGhhbmRsZXJzXG4gICAgYmFsbC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk1PVVNFVVAhXCIpO1xuICAgICAgYmFsbC5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XG4gICAgICBiYWxsLnN0eWxlLmxlZnQgPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS50b3AgPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS56SW5kZXggPSBcIlwiO1xuICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ0l0ZW1cIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbklEKTtcbiAgICAgIGlmIChhbklEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJRCBXT1JLRUQhXCIpO1xuICAgICAgICBjb25zdCBsb2MgPSBhbklELnNwbGl0KFwiXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2MpO1xuICAgICAgICBjb25zdCBjb2wxID0gTnVtYmVyKGxvY1sxXSkgKyAyO1xuICAgICAgICBjb25zdCBjb2wyID0gY29sMSArIDE7XG4gICAgICAgIGNvbnN0IHJvdzEgPSBhbHBoYS5pbmRleE9mKGxvY1swXSkgKyAyO1xuICAgICAgICBjb25zdCByb3cyID0gcm93MSArIDE7XG4gICAgICAgIC8vIGNvbnN0IGRyb3BzaGlwID0gbmV3IEN1c3RvbUV2ZW50KFwiZHJvcHNoaXBcIix7IGRldGFpbDoge2NvbDogY29sMS0xLCByb3c6IChyb3cxLTIpLCBsZW46IGxlbmd0aCwgcm90OiByb3RhdGVkfX0gKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChkcm9wc2hpcClcbiAgICAgICAgLy8gY29uc3Qgbm90VGFrZW4gPSAoIWlzVGFrZW4odGhlRWxlbSkpO1xuICAgICAgICAvLyBjb25zdCB2YWxpZCA9IHBsYWNlbWVudENoZWNrKGxlbmd0aCwgcm90YXRlZCwgcm93MSwgY29sMSkgJiYgbm90VGFrZW47XG4gICAgICAgIGNvbnN0IGlzVmFsaWRMb2MgPSBwbGF5ZXJQbGFjZShjb2wxLCByb3cxLCBsZW5ndGgsIHJvdGF0ZWQsIHBsYXllciwgYmFsbC5kYXRhc2V0Lm5hbWUpIFxuICAgICAgICBpZihpc1ZhbGlkTG9jKXtcbiAgICAgICAgICAgIGJhbGwuc3R5bGUuZ3JpZEFyZWEgPSBgJHtyb3cxfS8ke2NvbDF9LyR7cm93Mn0vJHtjb2wyfWA7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAgICAgICAgIGluZm8gPSBbW3JvdzEsIGNvbDFdLCBsZW5ndGgsIHJvdGF0ZWRdO1xuICAgICAgICAgICAgY29uc29sZS5sb2cob2dQYXJlbnQuY2xhc3NMaXN0WzBdKVxuICAgICAgICAgICAgaWYob2dQYXJlbnQuY2xhc3NMaXN0WzBdICE9PSAnc2hpcEhvbGQnKXtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVtb3ZlU2hpcChiYWxsLmRhdGFzZXQubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmludFNoaXBzKHBsYXllci5zaGlwcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9nUGFyZW50LmFwcGVuZENoaWxkKGJhbGwpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAgIGNvbnN0IHN0eWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RyYWdob3ZlcicpO1xuICAgICAgQXJyYXkuZnJvbShzdHlsZWQpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHJlbW92ZVN0eWxlKGVsZW1lbnQpfSlcbiAgICAgIGJhbGwub25tb3VzZXVwID0gbnVsbDtcbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYW51YWxEcmFnO1xuXG4vL3doZW4gYSBzaGlwIHRoYXQgaGFzIGJlZW4gcGxhY2VkIGlzIHBpY2sgdXAgKHJlYWQgcGFyZW50IG5vZGUpIE9SIHJvdGF0ZWQhXG4vL3RoZW4gaWYgaXQgY3JlYXRlcyBhIHZhbGlkIHNoaXAsIG92ZXIgd3JpdGUgdGhlIG9sZCBzaGlwLlxuXG5cbiIsImZ1bmN0aW9uIHZhbGlkRW50cnkobGVuZ3RoLCBzdGFydFBvaW50LCBkaXJlY3Rpb24sIGFscGhhKSB7XG4gIGlmIChkaXJlY3Rpb24gPT09IFwiclwiKSB7XG4gICAgaWYgKHN0YXJ0UG9pbnRbMV0gKyBsZW5ndGggLSAxID4gMTApIHtcbiAgICAgIGNvbnNvbGUubG9nKHN0YXJ0UG9pbnRbMV0pXG4gICAgICBjb25zb2xlLmxvZyhzdGFydFBvaW50WzFdICsgbGVuZ3RoKVxuICAgICAgY29uc29sZS5sb2coJ2dvZXMgdG9vIGZhciByaWdodCcpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwidVwiKSB7XG4gICAgaWYgKGFscGhhLmluZGV4T2Yoc3RhcnRQb2ludFswXSkgLSBsZW5ndGggLSAxIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcImRcIikge1xuICAgIGlmIChhbHBoYS5pbmRleE9mKHN0YXJ0UG9pbnRbMF0pICsgbGVuZ3RoIC0gMSA+IDEwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwibFwiKSB7XG4gICAgaWYgKHN0YXJ0UG9pbnRbMV0gLSBsZW5ndGggPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJpZ2h0KGxlbmd0aCwgc3RhcnRQb2ludCkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBjb25zdCB4ID0gc3RhcnRQb2ludFswXTtcbiAgbGV0IHkgPSBzdGFydFBvaW50WzFdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYXJyYXkucHVzaChbeCwgeV0pO1xuICAgIHkgKz0gMTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gbGVmdChsZW5ndGgsIHN0YXJ0UG9pbnQpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgY29uc3QgeCA9IHN0YXJ0UG9pbnRbMF07XG4gIGxldCB5ID0gc3RhcnRQb2ludFsxXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGFycmF5LnB1c2goW3gsIHldKTtcbiAgICB5IC09IDE7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiB1cChsZW5ndGgsIHN0YXJ0UG9pbnQsIGFscGhhKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGxldCBpbmRleCA9IGFscGhhLmluZGV4T2Yoc3RhcnRQb2ludFswXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB4ID0gYWxwaGFbaW5kZXhdO1xuICAgIGNvbnN0IHkgPSBzdGFydFBvaW50WzFdO1xuICAgIGluZGV4IC09IDE7XG4gICAgYXJyYXkucHVzaChbeCwgeV0pO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gZG93bihsZW5ndGgsIHN0YXJ0UG9pbnQsIGFscGhhKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGxldCBpbmRleCA9IGFscGhhLmluZGV4T2Yoc3RhcnRQb2ludFswXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB4ID0gYWxwaGFbaW5kZXhdO1xuICAgIGNvbnN0IHkgPSBzdGFydFBvaW50WzFdO1xuICAgIGluZGV4ICs9IDE7XG4gICAgYXJyYXkucHVzaChbeCwgeV0pO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDb29yZGluYXRlcyhsZW5ndGgsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbiwgYWxwaGEpIHtcbiAgbGV0IGNvb3JkcztcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyXCIpIHtcbiAgICBjb29yZHMgPSByaWdodChsZW5ndGgsIHN0YXJ0UG9pbnQpO1xuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwidVwiKSB7XG4gICAgY29vcmRzID0gdXAobGVuZ3RoLCBzdGFydFBvaW50LCBhbHBoYSk7XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkXCIpIHtcbiAgICBjb29yZHMgPSBkb3duKGxlbmd0aCwgc3RhcnRQb2ludCwgYWxwaGEpO1xuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwibFwiKSB7XG4gICAgY29vcmRzID0gbGVmdChsZW5ndGgsIHN0YXJ0UG9pbnQpO1xuICB9XG4gIHJldHVybiBjb29yZHM7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSGl0TG9nKGwpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IGwpIHtcbiAgICBhcnJheS5wdXNoKDApO1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmNvbnN0IG5hbWVTaGlwID0gKGwpID0+IHtcbiAgaWYgKGwgPT09IDUpe1xuICAgIHJldHVybiAnY2Fycmllcic7XG4gIH1cbiAgaWYgKGwgPT09IDQpe1xuICAgIHJldHVybiAnYmF0dGxlc2hpcCc7XG4gIH1cbiAgaWYgKGwgPT09IDMpe1xuICAgIHJldHVybiAnY3J1aXNlcic7XG4gIH1cbiAgaWYgKGwgPT09IDIpe1xuICAgIHJldHVybiAnZGVzdHJveWVyJztcbiAgfVxuICByZXR1cm4gJ2Vycm9yJ1xufVxuXG5cblxuY29uc3Qgc2hpcCA9IChsLCBzdGFydFBvaW50LCBkaXJlY3Rpb24pID0+IHtcbiAgY29uc3QgbmFtZSA9IG5hbWVTaGlwKGwpO1xuICBjb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbiAgY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG4gIGNvbnN0IGlzVmFsaWQgPSB2YWxpZEVudHJ5KGwsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbiwgYWxwaGEpO1xuICBjb25zb2xlLmxvZyhpc1ZhbGlkKTtcbiAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBsZW5ndGggPSBsO1xuICBjb25zdCBjb29yZHMgPSBnZW5lcmF0ZUNvb3JkaW5hdGVzKGwsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbiwgYWxwaGEpO1xuICBjb25zdCBoaXRMb2cgPSBnZW5lcmF0ZUhpdExvZyhsKTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmICghaGl0TG9nLmluY2x1ZGVzKDApKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBjb25zdCBzdW5rID0gaXNTdW5rKCk7XG5cbiAgY29uc3QgZ2V0Q29vcmRzID0gKCkgPT4gY29vcmRzO1xuICBjb25zdCBnZXRIaXRsb2cgPSAoKSA9PiBoaXRMb2c7XG5cbiAgY29uc3QgaGl0ID0gKGNvb3JkUGFpcikgPT4ge1xuICAgIGxldCBpbmRleDtcbiAgICBjb29yZHMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgaWYgKGNvb3JkaW5hdGVbMF0gPT09IGNvb3JkUGFpclswXSAmJiBjb29yZGluYXRlWzFdID09PSBjb29yZFBhaXJbMV0pIHtcbiAgICAgICAgaW5kZXggPSBjb29yZHMuaW5kZXhPZihjb29yZGluYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGl0TG9nW2luZGV4XSA9IDE7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHNpbmsoKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICBoaXRMb2dbaV0gPSAxO1xuICAgICAgaSArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gaGl0TG9nO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGxlbmd0aCxcbiAgICBjb29yZHMsXG4gICAgaGl0TG9nLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgZ2V0Q29vcmRzLFxuICAgIGdldEhpdGxvZyxcbiAgICBzdW5rLFxuICAgIHNpbmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGRyYXdMYXlvdXQgZnJvbSBcIi4vR1VJTWFpblwiO1xuaW1wb3J0IGdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG5jb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcblxuY29uc3QgcGxheWVyMSA9IGdhbWVib2FyZCgxMCk7XG5jb25zdCBjb21wdXRlciA9IGdhbWVib2FyZCgxMCk7XG5kcmF3TGF5b3V0KHBsYXllcjEpO1xuXG4vL3doZW4gYSBzaGlwIGlzIGNoYW5nZWQgKHIpIG9yIHBpY2tlZCB1cCBhbmQgbW92ZWRcbi8vQU5EIG5ldyBwb3NpdGlvbiBpcyB2YWxpZFxuLy9kZWxldGUgb2xkIHNoaXAsIHJ1biBuZXcgc2hpcFxuXG5cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BzaGlwXCIsIHBsYXllclBsYWNlKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==