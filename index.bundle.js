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
___CSS_LOADER_EXPORT___.push([module.id, "/* *{\n    border: solid 1px rgb(154, 173, 184);\n    border-radius: 20px;\n }  */\n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(11, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n/* .unitl:hover, .unitm:hover{\n    background-color:rgb(117, 149, 168);\n} */\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    width: 300px;\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACC;;;KAGI;;CAEJ;IACG,sBAAsB;CACzB;;AAED;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB;;;0CAGsC;IACtC;gCAC4B;IAC5B,yCAAyC;IACzC,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,iDAAiD;AACrD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,eAAe;;AAEnB;AACA;IACI,0CAA0C;IAC1C,yCAAyC;IACzC,uCAAuC;AAC3C;;AAEA;IACI,wCAAwC;IACxC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,uCAAuC;IACvC,oCAAoC;;AAExC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mCAAmC;IACnC,WAAW;IACX,YAAY;IACZ,eAAe;IACf,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;;GAEG;;AAEH;IACI,kCAAkC;IAClC,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,mCAAmC;IACnC,mCAAmC;IACnC,+BAA+B;IAC/B,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,wCAAwC;IACxC,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,WAAW;AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n /* *{\n    border: solid 1px rgb(154, 173, 184);\n    border-radius: 20px;\n }  */\n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(11, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n/* .unitl:hover, .unitm:hover{\n    background-color:rgb(117, 149, 168);\n} */\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    width: 300px;\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n\n"],"sourceRoot":""}]);
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
  console.log('im UNtriggered')
  ev.preventDefault();
  ev.target.classList.remove("draghover");
}

function styleTarget(ev) {
  ev.preventDefault();
  console.log('im triggered')
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
/* harmony import */ var _GUIBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GUIBoard */ "./src/GUIBoard.js");
/* harmony import */ var _GUIShip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUIShip */ "./src/GUIShip.js");
/* harmony import */ var _manualDrag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manualDrag */ "./src/manualDrag.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const drawLayout = () => {
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const log = (0,_GUIBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(null, 'l');
log.id = 'log';
const mainBoard = (0,_GUIBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(null, 'm');
mainBoard.id = 'mainBoard';
container.appendChild(log);
container.appendChild(mainBoard);
const ships = (0,_GUIShip__WEBPACK_IMPORTED_MODULE_1__["default"])();
const shipHolder = document.createElement('div');
shipHolder.classList.add('shipHolder');
container.appendChild(shipHolder);

ships.forEach(shipEl => {
    const shipHold = document.createElement('div');
    shipHold.classList.add('shipHold')
    shipHold.appendChild(shipEl);
    shipHold.style.width = shipEl.firstChild.style.width;
    shipHolder.appendChild(shipHold);
    (0,_manualDrag__WEBPACK_IMPORTED_MODULE_2__["default"])(shipEl);
})
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

const drawShip = (len) => {
    const anchor = document.createElement('div');
    anchor.classList.add('anchor');
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

const removeStyle = (previousElem) => {
    const dragleave = new Event("dragleave");
    previousElem.dispatchEvent(dragleave);
}
const styleNode = (theElem) => {
    const dragover = new Event("dragover");
    theElem.dispatchEvent(dragover);
        }

const manualDrag = (node) => {
  const board = document.getElementById("mainBoard");
  const ball = node;
  const ogParent = ball.parentElement;
  let index = Array(ball.parentElement.children).indexOf(ball);

  ball.onmousedown = function (event) {
    ball.classList.add("dragItem");
    // (1) start the process

    // (2) prepare to moving: make absolute and on top by z-index
    ball.style.position = "absolute";
    ball.style.zIndex = 1000;

    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(ball);
    // board.appendChild(ball);
    // ...and put that absolutely positioned ball under the cursor

    let dropElem;
    let dropElem1;
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
            //console.log(`contains it! return ID: ${elem.id}`);
            anID = elem.id;
            theElem = elem;
            setTimeout(styleNode(theElem), 500)
            
            if (previousElem !== undefined) {
              if (elem.id !== undefined) {
                console.log(`${previousElem.id} vs. ${elem.id}`);
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
      //dropElem.classList.remove('draghover')
    }

    // (3) move the ball on mousemove
    document.addEventListener("mousemove", onMouseMove);

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
        console.log(loc);
        const col1 = Number(loc[1]) + 2;
        const col2 = col1 + 1;
        const row1 = alpha.indexOf(loc[0]) + 2;
        const row2 = row1 + 1;

        ball.style.gridArea = `${row1}/${col1}/${row2}/${col2}`;
        board.appendChild(ball);
      } else {
        ogParent.appendChild(ball);
      }

      document.removeEventListener("mousemove", onMouseMove);
      const styled = document.getElementsByClassName('draghover');
      Array.from(styled).forEach(element => {
        removeStyle(element)})
      ball.onmouseup = null;
    };
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manualDrag);


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
    if (startPoint[1] + length - 1 > 9) {
      return false;
    }
  }
  if (direction === "u") {
    if (alpha.indexOf(startPoint[0]) - length - 1 < 0) {
      return false;
    }
  }
  if (direction === "d") {
    if (alpha.indexOf(startPoint[0]) + length - 1 > 9) {
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

const ship = (l, startPoint, direction) => {
  const alphas = "abcdefghij";
  const alpha = alphas.split("");
  if (!validEntry(l, startPoint, direction, alpha)) {
    return "Ship goes out of bounds. Try again";
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


(0,_GUIMain__WEBPACK_IMPORTED_MODULE_0__["default"])();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlILE1BQU0sTUFBTSxNQUFNLE1BQU0sOENBQThDLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0NBQW9DLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQzNVO0FBQ0EsK0NBQStDLDJDQUEyQywwQkFBMEIsTUFBTSxTQUFTLDZCQUE2QixJQUFJLGNBQWMsbUJBQW1CLG9CQUFvQixvQkFBb0IsNkJBQTZCLDJDQUEyQyx3Q0FBd0MsNEVBQTRFLDJDQUEyQyxxQ0FBcUMsaUNBQWlDLGdEQUFnRCwrQkFBK0Isc0JBQXNCLDBCQUEwQiw4QkFBOEIsc0RBQXNELEtBQUssZ0JBQWdCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsWUFBWSxvQkFBb0IsOENBQThDLDJDQUEyQywwQkFBMEIsNEJBQTRCLEdBQUcsZUFBZSx3QkFBd0Isb0JBQW9CLDhDQUE4QyxtQkFBbUIsR0FBRyxnQkFBZ0IscUJBQXFCLHVCQUF1QixvQkFBb0IsMkNBQTJDLDZCQUE2Qiw4QkFBOEIsR0FBRywrQkFBK0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsa0JBQWtCLG1CQUFtQixzQkFBc0IsU0FBUyxVQUFVLGlEQUFpRCxnREFBZ0QsOENBQThDLEdBQUcsWUFBWSwrQ0FBK0MsZ0RBQWdELGlEQUFpRCxHQUFHLFlBQVksdUJBQXVCLG9CQUFvQiwwQ0FBMEMsR0FBRyxpQkFBaUIsd0JBQXdCLHFCQUFxQixvQkFBb0IsOENBQThDLDJDQUEyQyxTQUFTLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QiwwQ0FBMEMsa0JBQWtCLG1CQUFtQixzQkFBc0IsZ0RBQWdELGlEQUFpRCxHQUFHLGtDQUFrQywwQ0FBMEMsSUFBSSx5QkFBeUIseUNBQXlDLGdEQUFnRCxpREFBaUQsR0FBRyxxQkFBcUIsMENBQTBDLDBDQUEwQyxvQ0FBb0Msa0RBQWtELGlEQUFpRCxHQUFHLFlBQVksbUJBQW1CLG1CQUFtQixHQUFHLHVCQUF1Qix5QkFBeUIsb0JBQW9CLCtDQUErQyx3Q0FBd0MsbUJBQW1CLEdBQUcsZ0JBQWdCLHlDQUF5QyxrQkFBa0Isa0JBQWtCLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxjQUFjLG9CQUFvQixzQkFBc0IsZ0JBQWdCLG1CQUFtQixHQUFHLGVBQWUsdUNBQXVDLEdBQUcsY0FBYywrQkFBK0IsR0FBRyxhQUFhLHlCQUF5QixrQkFBa0IsbUJBQW1CLEdBQUcsYUFBYSxrRkFBa0YsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxPQUFPLE1BQU0sT0FBTyxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSwwR0FBMEcsTUFBTSxNQUFNLE1BQU0sTUFBTSw4Q0FBOEMsTUFBTSxNQUFNLE1BQU0sTUFBTSxvQ0FBb0MsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxxQkFBcUIsUUFBUSwyQ0FBMkMsMEJBQTBCLE1BQU0sU0FBUyw2QkFBNkIsSUFBSSxjQUFjLG1CQUFtQixvQkFBb0Isb0JBQW9CLDZCQUE2QiwyQ0FBMkMsd0NBQXdDLDRFQUE0RSwyQ0FBMkMscUNBQXFDLGlDQUFpQyxnREFBZ0QsK0JBQStCLHNCQUFzQiwwQkFBMEIsOEJBQThCLHNEQUFzRCxLQUFLLGdCQUFnQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLFlBQVksb0JBQW9CLDhDQUE4QywyQ0FBMkMsMEJBQTBCLDRCQUE0QixHQUFHLGVBQWUsd0JBQXdCLG9CQUFvQiw4Q0FBOEMsbUJBQW1CLEdBQUcsZ0JBQWdCLHFCQUFxQix1QkFBdUIsb0JBQW9CLDJDQUEyQyw2QkFBNkIsOEJBQThCLEdBQUcsK0JBQStCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGtCQUFrQixtQkFBbUIsc0JBQXNCLFNBQVMsVUFBVSxpREFBaUQsZ0RBQWdELDhDQUE4QyxHQUFHLFlBQVksK0NBQStDLGdEQUFnRCxpREFBaUQsR0FBRyxZQUFZLHVCQUF1QixvQkFBb0IsMENBQTBDLEdBQUcsaUJBQWlCLHdCQUF3QixxQkFBcUIsb0JBQW9CLDhDQUE4QywyQ0FBMkMsU0FBUyxtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMENBQTBDLGtCQUFrQixtQkFBbUIsc0JBQXNCLGdEQUFnRCxpREFBaUQsR0FBRyxrQ0FBa0MsMENBQTBDLElBQUkseUJBQXlCLHlDQUF5QyxnREFBZ0QsaURBQWlELEdBQUcscUJBQXFCLDBDQUEwQywwQ0FBMEMsb0NBQW9DLGtEQUFrRCxpREFBaUQsR0FBRyxZQUFZLG1CQUFtQixtQkFBbUIsR0FBRyx1QkFBdUIseUJBQXlCLG9CQUFvQiwrQ0FBK0Msd0NBQXdDLG1CQUFtQixHQUFHLGdCQUFnQix5Q0FBeUMsa0JBQWtCLGtCQUFrQixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsY0FBYyxvQkFBb0Isc0JBQXNCLGdCQUFnQixtQkFBbUIsR0FBRyxlQUFlLHVDQUF1QyxHQUFHLGNBQWMsK0JBQStCLEdBQUcsYUFBYSx5QkFBeUIsa0JBQWtCLG1CQUFtQixHQUFHLHlCQUF5QjtBQUN0aVI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUs7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBO0FBQ0EseUJBQXlCLE1BQU07QUFDL0I7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUztBQUNsQztBQUNBOztBQUVBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQSxrQkFBa0IsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRlU7QUFDRDtBQUNJO0FBQ1o7QUFDTTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFTO0FBQ3JCO0FBQ0Esa0JBQWtCLHFEQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0RBQVM7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVU7QUFDZCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ3VCOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsWUFBWTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx1REFBVTtBQUNkOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RCwwQkFBMEIsOEJBQThCO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCLE1BQU0sUUFBUTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLO0FBQzlEO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakgxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQzFKcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FtQzs7QUFFbkMsb0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlCb2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlNYWluLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL0dVSVNoaXAuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvbWFudWFsRHJhZy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDYwMDswLDgwMDsxLDMwMDsxLDQwMCZmYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogKntcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE1NCwgMTczLCAxODQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiB9ICAqL1xcblxcbiAqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiB9XFxuICAgIFxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNTIsIDU4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCA0MSwgNDYpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYig3NCwgOTAsIDk5KSAsIHJnYigzMiwgNDEsIDQ2KSk7XFxuICAgIGZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyAqL1xcbiAgICAvKiBjb2xvcjogcmdiKDIwMiwgMjI1LCAyMzgpO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDRweCByZ2IoOTQsIDExOSwgMTMzKTsgKi9cXG4gICAgY29sb3I6IHJnYigyMCwgMTcsIDE3KTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDI1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMjVweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvcExhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2lkZUxhYmVsIHtcXG4gICAgZ3JpZC1yb3c6IDIvMTI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50bFVuaXQsIC5zbFVuaXQsIC5jb3JuZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG59XFxuLnRsVW5pdHtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uc2xVbml0e1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uY29ybmVye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmlubmVyQm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZ3JpZC1yb3c6IDIvMTI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBcXG59XFxuXFxuLnVuaXRsLCAudW5pdG17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzYsIDIwMCwgMjE0KTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4vKiAudW5pdGw6aG92ZXIsIC51bml0bTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTE3LCAxNDksIDE2OCk7XFxufSAqL1xcblxcbi5taXNzLCAubWlzczpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDksIDE2MSwgMjI2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmhpdCwgLmhpdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjI4LCAxMDAsIDEwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTA5LCAxMDkpO1xcbiAgICAvKiBib3JkZXI6cmdiKDIyOCwgMTAwLCAxMDApOyAqL1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaG9sZGVye1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLnNoaXAsIC5zaGlwOmhvdmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg3MywgMTA2LCAxMjYsIDYwJSk7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYig0NywgNjMsIDcxKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uZHJhZ2hvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk2LCAyKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDoyNXB4O1xcbn1cXG4uc2hpcEhvbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc2hpcEhvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4ICM4NGQ0ZmY7XFxufVxcblxcbi5yb3RhdGVkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uYW5jaG9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNDOzs7S0FHSTs7Q0FFSjtJQUNHLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qjs7OzBDQUdzQztJQUN0QztnQ0FDNEI7SUFDNUIseUNBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMseUNBQXlDO0lBQ3pDLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyx5Q0FBeUM7SUFDekMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsMENBQTBDO0FBQzlDOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksa0NBQWtDO0lBQ2xDLHlDQUF5QztJQUN6QywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQix5Q0FBeUM7SUFDekMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw2MDA7MCw4MDA7MSwzMDA7MSw0MDAmZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbiAvKiAqe1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTU0LCAxNzMsIDE4NCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuIH0gICovXFxuXFxuICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuIH1cXG4gICAgXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA1MiwgNTgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDQxLCA0Nik7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggcmdiKDc0LCA5MCwgOTkpICwgcmdiKDMyLCA0MSwgNDYpKTtcXG4gICAgZm9udC1mYW1pbHk6J09wZW4gU2FucycsIHNhbnMtc2VyaWY7ICovXFxuICAgIC8qIGNvbG9yOiByZ2IoMjAyLCAyMjUsIDIzOCk7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7ICovXFxuICAgIC8qIGJvcmRlcjogc29saWQgNHB4IHJnYig5NCwgMTE5LCAxMzMpOyAqL1xcbiAgICBjb2xvcjogcmdiKDIwLCAxNywgMTcpO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmOyAqL1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMjVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAyNXB4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9wTGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zaWRlTGFiZWwge1xcbiAgICBncmlkLXJvdzogMi8xMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRsVW5pdCwgLnNsVW5pdCwgLmNvcm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIFxcbn1cXG4udGxVbml0e1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5zbFVuaXR7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5jb3JuZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaW5uZXJCb2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgICBncmlkLXJvdzogMi8xMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIFxcbn1cXG5cXG4udW5pdGwsIC51bml0bXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3NiwgMjAwLCAyMTQpO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi8qIC51bml0bDpob3ZlciwgLnVuaXRtOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMTcsIDE0OSwgMTY4KTtcXG59ICovXFxuXFxuLm1pc3MsIC5taXNzOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0OSwgMTYxLCAyMjYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaGl0LCAuaGl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMjgsIDEwMCwgMTAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxMDksIDEwOSk7XFxuICAgIC8qIGJvcmRlcjpyZ2IoMjI4LCAxMDAsIDEwMCk7ICovXFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5ob2xkZXJ7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uc2hpcCwgLnNoaXA6aG92ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDczLCAxMDYsIDEyNiwgNjAlKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDQ3LCA2MywgNzEpO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5kcmFnaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTYsIDIpO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OjI1cHg7XFxufVxcbi5zaGlwSG9sZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zaGlwSG9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggIzg0ZDRmZjtcXG59XFxuXFxuLnJvdGF0ZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5hbmNob3Ige1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cbmZ1bmN0aW9uIGFkZEhvdmVyKGV2KSB7XG4gIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcbn1cbmZ1bmN0aW9uIHVuSG92ZXIoZXYpIHtcbiAgZXYudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcmVkXCIpO1xufVxuXG5mdW5jdGlvbiB1bnN0eWxlVGFyZ2V0KGV2KSB7XG4gIGNvbnNvbGUubG9nKCdpbSBVTnRyaWdnZXJlZCcpXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2hvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBzdHlsZVRhcmdldChldikge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZygnaW0gdHJpZ2dlcmVkJylcbiAgZXYudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkcmFnaG92ZXJcIik7XG59XG5cbmZ1bmN0aW9uIGdldGxvY2F0aW9uKGV2KSB7XG4gICAgY29uc29sZS5sb2coJ2FEcm9wIGhhcHBlbmVkIScpXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHVuc3R5bGVUYXJnZXQoZXYpO1xuICBjb25zdCBkYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyYWdJdGVtXCIpO1xuICBjb25zdCBub2RlID0gZGF0YVswXTtcbiAgY29uc3QgbG9jID0gZXYudGFyZ2V0LmlkLnNwbGl0KFwiXCIpO1xuICBjb25zdCBjb2wxID0gTnVtYmVyKGxvY1sxXSkgKyAyO1xuICBjb25zdCBjb2wyID0gY29sMSArIDE7XG4gIGNvbnN0IHJvdzEgPSBhbHBoYS5pbmRleE9mKGxvY1swXSkgKyAyO1xuICBjb25zdCByb3cyID0gcm93MSArIDE7XG4gIG5vZGUuc3R5bGUuZ3JpZEFyZWEgPSBgJHtyb3cxfS8ke2NvbDF9LyR7cm93Mn0vJHtjb2wyfWA7XG4gIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbmNvbnN0IGRyYXdCb2FyZCA9IChwbHlyVmFsLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgY29uc3QgdG9wTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKHRvcExhYmVsKTtcbiAgdG9wTGFiZWwuY2xhc3NMaXN0LmFkZChcInRvcExhYmVsXCIpO1xuICBjb25zdCBzaWRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKHNpZGVMYWJlbCk7XG4gIHNpZGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwic2lkZUxhYmVsXCIpO1xuICBjb25zdCBpbm5lckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5uZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiaW5uZXJCb2FyZFwiKTtcbiAgZ3JpZC5hcHBlbmRDaGlsZChpbm5lckJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyApIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IGAke2l9bGA7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0bFVuaXRcIik7XG4gICAgdG9wTGFiZWwuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBgJHtpICsgMX1gO1xuICAgIGkgKz0gMTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gYCR7aX1sYDtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNsVW5pdFwiKTtcbiAgICBzaWRlTGFiZWwuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBgJHthbHBoYVtpXX1gO1xuICAgIGkgKz0gMTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGB1bml0JHt0eXBlfWApO1xuICAgICAgaW5uZXJCb2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgZGl2LmlkID0gYCR7YWxwaGFbaV19JHtqfSR7dHlwZX1gO1xuICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHN0eWxlVGFyZ2V0KTtcbiAgICAgIGlmICh0eXBlID09PSBcIm1cIikge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHN0eWxlVGFyZ2V0KTtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgdW5zdHlsZVRhcmdldCk7XG4gICAgICAgIC8vIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBnZXRsb2NhdGlvbik7XG4gICAgICAgIC8vIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHN0eWxlVGFyZ2V0KTtcbiAgICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHVuc3R5bGVUYXJnZXQpO1xuICAgICAgICAvLyBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW91c2VcIiwgZ2V0bG9jYXRpb24pO1xuICAgICAgfVxuICAgICAgaiArPSAxO1xuICAgIH1cbiAgICBpICs9IDE7XG4gIH1cblxuICBjb25zdCBjb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKGNvcm5lcik7XG4gIGNvcm5lci5jbGFzc0xpc3QuYWRkKFwiY29ybmVyXCIpO1xuXG4gIHJldHVybiBncmlkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZHJhd0JvYXJkO1xuIiwiaW1wb3J0IGRyYXdCb2FyZCBmcm9tIFwiLi9HVUlCb2FyZFwiO1xuaW1wb3J0IGRyYXdTaGlwcyBmcm9tIFwiLi9HVUlTaGlwXCI7XG5pbXBvcnQgbWFudWFsRHJhZyBmcm9tIFwiLi9tYW51YWxEcmFnXCI7XG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBkcmF3TGF5b3V0ID0gKCkgPT4ge1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbmNvbnN0IGxvZyA9IGRyYXdCb2FyZChudWxsLCAnbCcpO1xubG9nLmlkID0gJ2xvZyc7XG5jb25zdCBtYWluQm9hcmQgPSBkcmF3Qm9hcmQobnVsbCwgJ20nKTtcbm1haW5Cb2FyZC5pZCA9ICdtYWluQm9hcmQnO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkJvYXJkKTtcbmNvbnN0IHNoaXBzID0gZHJhd1NoaXBzKCk7XG5jb25zdCBzaGlwSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zaGlwSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3NoaXBIb2xkZXInKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwSG9sZGVyKTtcblxuc2hpcHMuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgIGNvbnN0IHNoaXBIb2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcEhvbGQuY2xhc3NMaXN0LmFkZCgnc2hpcEhvbGQnKVxuICAgIHNoaXBIb2xkLmFwcGVuZENoaWxkKHNoaXBFbCk7XG4gICAgc2hpcEhvbGQuc3R5bGUud2lkdGggPSBzaGlwRWwuZmlyc3RDaGlsZC5zdHlsZS53aWR0aDtcbiAgICBzaGlwSG9sZGVyLmFwcGVuZENoaWxkKHNoaXBIb2xkKTtcbiAgICBtYW51YWxEcmFnKHNoaXBFbCk7XG59KVxufVxuXG4vLyBjb25zdCBtaXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2EwbCcpO1xuLy8gbWlzcy5jbGFzc0xpc3QuYWRkKCdtaXNzJylcblxuLy8gY29uc3QgaGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ExbCcpO1xuLy8gaGl0LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuXG5leHBvcnQgZGVmYXVsdCBkcmF3TGF5b3V0IiwiaW1wb3J0IG1hbnVhbERyYWcgZnJvbSBcIi4vbWFudWFsRHJhZ1wiO1xuXG5mdW5jdGlvbiBkcmFnKGV2KSB7XG4gICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIGV2LnRhcmdldC5pZCk7XG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdJdGVtJyk7XG4gICAgY29uc3Qgbm9kZSA9IGV2LnRhcmdldDtcbiAgICBzZXRUaW1lb3V0ICgoKSA9PiB7XG4gICAgICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB9LCAxKTtcbiAgfVxuZnVuY3Rpb24gcGxhY2UoZXYpe1xuICAgIGNvbnN0IG5vZGUgPSBldi50YXJnZXQ7XG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdJdGVtJyk7XG4gICAgc2V0VGltZW91dCAoKCkgPT4ge1xuICAgICAgICBub2RlLnN0eWxlLnZpc2liaWxpdHkgPSBcIlwiO1xuICAgICAgfSwgMSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdChldil7XG4gICAgY29uc3Qgb2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKTtcbiAgICBpZihvbGRbMF0gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIG9sZFswXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgfVxuICAgIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiByb3RhdGUoZXYpe1xuICAgIGlmKGV2LmtleSA9PT0gJ3InKXtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBjdXJyZW50Um90YXRpb24gPSBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGlmKChjdXJyZW50Um90YXRpb24gPT09ICcnKXx8KGN1cnJlbnRSb3RhdGlvbiA9PT0gJ3JvdGF0ZSgwZGVnKScpICl7XG4gICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSAwO1xuICAgICAgICAgICAgc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSg5MGRlZylgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSBjdXJyZW50Um90YXRpb24uc3BsaXQoJycpO1xuICAgICAgICAgICAgbGV0IG5ld1JvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uWzddICsgY3VycmVudFJvdGF0aW9uWzhdO1xuICAgICAgICAgICAgbmV3Um90YXRpb24gPSBOdW1iZXIobmV3Um90YXRpb24pO1xuICAgICAgICAgICAgbmV3Um90YXRpb24gLT0gOTA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdSb3RhdGlvbilcbiAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtuZXdSb3RhdGlvbn1kZWcpYDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSAgXG59XG5cbmZ1bmN0aW9uIGRyYWdzdGFydCAoZXYpIHtcbiAgICBtYW51YWxEcmFnKGV2LnRhcmdldClcbiAgICB9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcm90YXRlKVxuXG5jb25zdCBkcmF3U2hpcCA9IChsZW4pID0+IHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnYW5jaG9yJyk7XG4gICAgY29uc3QgZmFrZXNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmYWtlc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgLy8gZmFrZXNoaXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgIC8vIGZha2VzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgIC8vIGZha2VzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBwbGFjZSk7XG4gICAgLy8gZmFrZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2VsZWN0KTtcbiAgICBmYWtlc2hpcC5zdHlsZS53aWR0aCA9IGAke2xlbiAqIDI1fXB4YDtcbiAgICBhbmNob3IuYXBwZW5kQ2hpbGQoZmFrZXNoaXApXG4gICAgLy8gYW5jaG9yLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgIC8vIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgcGxhY2UpO1xuICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2VsZWN0KTtcbiAgICByZXR1cm4gYW5jaG9yO1xufVxuXG5jb25zdCBkcmF3U2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcGRpdnMgPSBbXTtcbiAgICBzaGlwZGl2cy5wdXNoKGRyYXdTaGlwKDUpKTtcbiAgICBzaGlwZGl2cy5wdXNoKGRyYXdTaGlwKDQpKTtcbiAgICBzaGlwZGl2cy5wdXNoKGRyYXdTaGlwKDMpKTtcbiAgICBzaGlwZGl2cy5wdXNoKGRyYXdTaGlwKDMpKTtcbiAgICBzaGlwZGl2cy5wdXNoKGRyYXdTaGlwKDIpKTtcbiAgICByZXR1cm4gc2hpcGRpdnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyYXdTaGlwc1xuXG5cblxuXG5cbiIsImNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cbmNvbnN0IHJlbW92ZVN0eWxlID0gKHByZXZpb3VzRWxlbSkgPT4ge1xuICAgIGNvbnN0IGRyYWdsZWF2ZSA9IG5ldyBFdmVudChcImRyYWdsZWF2ZVwiKTtcbiAgICBwcmV2aW91c0VsZW0uZGlzcGF0Y2hFdmVudChkcmFnbGVhdmUpO1xufVxuY29uc3Qgc3R5bGVOb2RlID0gKHRoZUVsZW0pID0+IHtcbiAgICBjb25zdCBkcmFnb3ZlciA9IG5ldyBFdmVudChcImRyYWdvdmVyXCIpO1xuICAgIHRoZUVsZW0uZGlzcGF0Y2hFdmVudChkcmFnb3Zlcik7XG4gICAgICAgIH1cblxuY29uc3QgbWFudWFsRHJhZyA9IChub2RlKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQm9hcmRcIik7XG4gIGNvbnN0IGJhbGwgPSBub2RlO1xuICBjb25zdCBvZ1BhcmVudCA9IGJhbGwucGFyZW50RWxlbWVudDtcbiAgbGV0IGluZGV4ID0gQXJyYXkoYmFsbC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKGJhbGwpO1xuXG4gIGJhbGwub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJkcmFnSXRlbVwiKTtcbiAgICAvLyAoMSkgc3RhcnQgdGhlIHByb2Nlc3NcblxuICAgIC8vICgyKSBwcmVwYXJlIHRvIG1vdmluZzogbWFrZSBhYnNvbHV0ZSBhbmQgb24gdG9wIGJ5IHotaW5kZXhcbiAgICBiYWxsLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGJhbGwuc3R5bGUuekluZGV4ID0gMTAwMDtcblxuICAgIC8vIG1vdmUgaXQgb3V0IG9mIGFueSBjdXJyZW50IHBhcmVudHMgZGlyZWN0bHkgaW50byBib2R5XG4gICAgLy8gdG8gbWFrZSBpdCBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvIHRoZSBib2R5XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYmFsbCk7XG4gICAgLy8gYm9hcmQuYXBwZW5kQ2hpbGQoYmFsbCk7XG4gICAgLy8gLi4uYW5kIHB1dCB0aGF0IGFic29sdXRlbHkgcG9zaXRpb25lZCBiYWxsIHVuZGVyIHRoZSBjdXJzb3JcblxuICAgIGxldCBkcm9wRWxlbTtcbiAgICBsZXQgZHJvcEVsZW0xO1xuICAgIGxldCBhbklEO1xuICAgIGxldCB0aGVFbGVtO1xuICAgIGxldCBwcmV2aW91c0VsZW07XG4gICAgLy8gY2VudGVycyB0aGUgYmFsbCBhdCAocGFnZVgsIHBhZ2VZKSBjb29yZGluYXRlc1xuICAgIGZ1bmN0aW9uIG1vdmVBdChwYWdlWCwgcGFnZVkpIHtcbiAgICAgIGJhbGwuc3R5bGUubGVmdCA9IGAke3BhZ2VYIC0gYmFsbC5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xuICAgICAgYmFsbC5zdHlsZS50b3AgPSBgJHtwYWdlWSAtIGJhbGwub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XG4gICAgICBjb25zdCBkcm9wRWxlbUxpc3QgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChwYWdlWCwgcGFnZVkpO1xuXG4gICAgICBkcm9wRWxlbUxpc3QuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xhc3NsaXN0JylcbiAgICAgICAgLy8gY29uc29sZS5sb2coQXJyYXkuZnJvbShlbGVtLmNsYXNzTGlzdCkpXG4gICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidW5pdG1cIikpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGNvbnRhaW5zIGl0ISByZXR1cm4gSUQ6ICR7ZWxlbS5pZH1gKTtcbiAgICAgICAgICAgIGFuSUQgPSBlbGVtLmlkO1xuICAgICAgICAgICAgdGhlRWxlbSA9IGVsZW07XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHN0eWxlTm9kZSh0aGVFbGVtKSwgNTAwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocHJldmlvdXNFbGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGVsZW0uaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3ByZXZpb3VzRWxlbS5pZH0gdnMuICR7ZWxlbS5pZH1gKTtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNFbGVtICE9PSBlbGVtKSB7XG4gICAgICAgICAgICAgICAgICByZW1vdmVTdHlsZShwcmV2aW91c0VsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBwcmV2aW91c0VsZW0gPSB0aGVFbGVtO1xuXG4gICAgICAvLyBzdHlsZU5vZGUoZHJvcEVsZW0pXG4gICAgfVxuXG4gICAgbW92ZUF0KGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldikge1xuICAgICAgbW92ZUF0KGV2LnBhZ2VYLCBldi5wYWdlWSk7XG4gICAgICAvLyBjb25zdCB1bkVsZW0gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJhZ2hvdmVyJylbMF07XG4gICAgICAvL2Ryb3BFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdob3ZlcicpXG4gICAgfVxuXG4gICAgLy8gKDMpIG1vdmUgdGhlIGJhbGwgb24gbW91c2Vtb3ZlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG5cbiAgICAvLyAoNCkgZHJvcCB0aGUgYmFsbCwgcmVtb3ZlIHVubmVlZGVkIGhhbmRsZXJzXG4gICAgYmFsbC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk1PVVNFVVAhXCIpO1xuICAgICAgYmFsbC5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XG4gICAgICBiYWxsLnN0eWxlLmxlZnQgPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS50b3AgPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS56SW5kZXggPSBcIlwiO1xuICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ0l0ZW1cIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbklEKTtcbiAgICAgIGlmIChhbklEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJRCBXT1JLRUQhXCIpO1xuICAgICAgICBjb25zdCBsb2MgPSBhbklELnNwbGl0KFwiXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2MpO1xuICAgICAgICBjb25zdCBjb2wxID0gTnVtYmVyKGxvY1sxXSkgKyAyO1xuICAgICAgICBjb25zdCBjb2wyID0gY29sMSArIDE7XG4gICAgICAgIGNvbnN0IHJvdzEgPSBhbHBoYS5pbmRleE9mKGxvY1swXSkgKyAyO1xuICAgICAgICBjb25zdCByb3cyID0gcm93MSArIDE7XG5cbiAgICAgICAgYmFsbC5zdHlsZS5ncmlkQXJlYSA9IGAke3JvdzF9LyR7Y29sMX0vJHtyb3cyfS8ke2NvbDJ9YDtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYmFsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZ1BhcmVudC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICBjb25zdCBzdHlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcmFnaG92ZXInKTtcbiAgICAgIEFycmF5LmZyb20oc3R5bGVkKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICByZW1vdmVTdHlsZShlbGVtZW50KX0pXG4gICAgICBiYWxsLm9ubW91c2V1cCA9IG51bGw7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hbnVhbERyYWc7XG4iLCJmdW5jdGlvbiB2YWxpZEVudHJ5KGxlbmd0aCwgc3RhcnRQb2ludCwgZGlyZWN0aW9uLCBhbHBoYSkge1xuICBpZiAoZGlyZWN0aW9uID09PSBcInJcIikge1xuICAgIGlmIChzdGFydFBvaW50WzFdICsgbGVuZ3RoIC0gMSA+IDkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1XCIpIHtcbiAgICBpZiAoYWxwaGEuaW5kZXhPZihzdGFydFBvaW50WzBdKSAtIGxlbmd0aCAtIDEgPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwiZFwiKSB7XG4gICAgaWYgKGFscGhhLmluZGV4T2Yoc3RhcnRQb2ludFswXSkgKyBsZW5ndGggLSAxID4gOSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcImxcIikge1xuICAgIGlmIChzdGFydFBvaW50WzFdIC0gbGVuZ3RoIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByaWdodChsZW5ndGgsIHN0YXJ0UG9pbnQpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgY29uc3QgeCA9IHN0YXJ0UG9pbnRbMF07XG4gIGxldCB5ID0gc3RhcnRQb2ludFsxXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGFycmF5LnB1c2goW3gsIHldKTtcbiAgICB5ICs9IDE7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGxlZnQobGVuZ3RoLCBzdGFydFBvaW50KSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGNvbnN0IHggPSBzdGFydFBvaW50WzBdO1xuICBsZXQgeSA9IHN0YXJ0UG9pbnRbMV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhcnJheS5wdXNoKFt4LCB5XSk7XG4gICAgeSAtPSAxO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gdXAobGVuZ3RoLCBzdGFydFBvaW50LCBhbHBoYSkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBsZXQgaW5kZXggPSBhbHBoYS5pbmRleE9mKHN0YXJ0UG9pbnRbMF0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgeCA9IGFscGhhW2luZGV4XTtcbiAgICBjb25zdCB5ID0gc3RhcnRQb2ludFsxXTtcbiAgICBpbmRleCAtPSAxO1xuICAgIGFycmF5LnB1c2goW3gsIHldKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGRvd24obGVuZ3RoLCBzdGFydFBvaW50LCBhbHBoYSkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBsZXQgaW5kZXggPSBhbHBoYS5pbmRleE9mKHN0YXJ0UG9pbnRbMF0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgeCA9IGFscGhhW2luZGV4XTtcbiAgICBjb25zdCB5ID0gc3RhcnRQb2ludFsxXTtcbiAgICBpbmRleCArPSAxO1xuICAgIGFycmF5LnB1c2goW3gsIHldKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29vcmRpbmF0ZXMobGVuZ3RoLCBzdGFydFBvaW50LCBkaXJlY3Rpb24sIGFscGhhKSB7XG4gIGxldCBjb29yZHM7XG4gIGlmIChkaXJlY3Rpb24gPT09IFwiclwiKSB7XG4gICAgY29vcmRzID0gcmlnaHQobGVuZ3RoLCBzdGFydFBvaW50KTtcbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcInVcIikge1xuICAgIGNvb3JkcyA9IHVwKGxlbmd0aCwgc3RhcnRQb2ludCwgYWxwaGEpO1xuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwiZFwiKSB7XG4gICAgY29vcmRzID0gZG93bihsZW5ndGgsIHN0YXJ0UG9pbnQsIGFscGhhKTtcbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcImxcIikge1xuICAgIGNvb3JkcyA9IGxlZnQobGVuZ3RoLCBzdGFydFBvaW50KTtcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhpdExvZyhsKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKGkgPCBsKSB7XG4gICAgYXJyYXkucHVzaCgwKTtcbiAgICBpICs9IDE7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5jb25zdCBzaGlwID0gKGwsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbikgPT4ge1xuICBjb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbiAgY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG4gIGlmICghdmFsaWRFbnRyeShsLCBzdGFydFBvaW50LCBkaXJlY3Rpb24sIGFscGhhKSkge1xuICAgIHJldHVybiBcIlNoaXAgZ29lcyBvdXQgb2YgYm91bmRzLiBUcnkgYWdhaW5cIjtcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aCA9IGw7XG4gIGNvbnN0IGNvb3JkcyA9IGdlbmVyYXRlQ29vcmRpbmF0ZXMobCwgc3RhcnRQb2ludCwgZGlyZWN0aW9uLCBhbHBoYSk7XG4gIGNvbnN0IGhpdExvZyA9IGdlbmVyYXRlSGl0TG9nKGwpO1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKCFoaXRMb2cuaW5jbHVkZXMoMCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IHN1bmsgPSBpc1N1bmsoKTtcblxuICBjb25zdCBnZXRDb29yZHMgPSAoKSA9PiBjb29yZHM7XG4gIGNvbnN0IGdldEhpdGxvZyA9ICgpID0+IGhpdExvZztcblxuICBjb25zdCBoaXQgPSAoY29vcmRQYWlyKSA9PiB7XG4gICAgbGV0IGluZGV4O1xuICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBpZiAoY29vcmRpbmF0ZVswXSA9PT0gY29vcmRQYWlyWzBdICYmIGNvb3JkaW5hdGVbMV0gPT09IGNvb3JkUGFpclsxXSkge1xuICAgICAgICBpbmRleCA9IGNvb3Jkcy5pbmRleE9mKGNvb3JkaW5hdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoaXRMb2dbaW5kZXhdID0gMTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2luaygpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgIGhpdExvZ1tpXSA9IDE7XG4gICAgICBpICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBoaXRMb2c7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICBjb29yZHMsXG4gICAgaGl0TG9nLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgZ2V0Q29vcmRzLFxuICAgIGdldEhpdGxvZyxcbiAgICBzdW5rLFxuICAgIHNpbmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGRyYXdMYXlvdXQgZnJvbSBcIi4vR1VJTWFpblwiO1xuXG5kcmF3TGF5b3V0KCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9