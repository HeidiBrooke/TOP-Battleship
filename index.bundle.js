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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    /* border: solid 1px rgb(154, 173, 184); */\n    /* border-radius: 20px; */\n } \n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    margin: 20px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#messageBoard {\n    /* padding: 8px; */\n    text-align: center;\n    justify-content: center;\n    width: 460px;\n    height: 40px;\n    font-size: 18px;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n\n.title {\n    text-align: center;\n    justify-content: center;\n    width: 460px;\n    font-size: 24px;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n#container {\n    border: solid 2px #84d4ff;\n    background-color: #deeff8;\n    border-radius: 16px;\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 300px;\n    grid-template-rows: 300px 300px;\n    row-gap: 20px;\n    align-items: end;\n    justify-items: center;\n    \n}\n\n#log {\n    grid-area: 1/2/2/3;\n}\n#mainBoard {\n    grid-area: 2/2/3/3;\n}\n\n#turnBoard {\n    display: none;\n}\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(12, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    background-color: white;\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    background-color: white;\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n.bottomLabel {\n    display: flex;\n    background-color: #84ff94;\n    width: 275px;\n    height: 25px;\n    grid-column: 1/13;\n    grid-row: 12/13;\n    font-size: 18px;\n    font-family: 'Roboto Condensed', sans-serif;\n    padding: 4px;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    background-color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.unitl:hover{\n    background-color:rgb(117, 149, 168);\n}\n\n.empty {\n    background-color: #84ff94;\n    background-color:rgb(130, 164, 184);\n}\n\n\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n\n.outerHold {\n    grid-area: 2/1/3/2;\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-right: 10px;\n    margin-left: 10px;\n    gap: 20px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    /* flex-wrap: wrap; */\n    gap: 16px;\n    /* width: 300px;\n    height: 72px; */\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n    box-shadow: 0 0 10px 2px #84ff94;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n.button {\n    padding: 8px;\n    width: 140px;\n    height: 50px;\n    background-color:rgb(176, 200, 214);\n    text-align: center;\n    font-size: 20px;\n    font-family: 'Roboto Condensed', sans-serif;\n    cursor: pointer;\n}\n#playAgain{\n    display: none;\n}\n\n.lock:hover, #playAgain:hover {\n    transform: scale(105%);\n}\n\n.hidden{\n    display: none;\n}\n\n.horizontal-shake {\n    box-shadow: 0 0 10px 2px #ff8484;\n    animation: horizontal-shaking 0.35s infinite;\n  }\n\n@keyframes horizontal-shaking {\n    0% { transform: translateX(0) }\n    25% { transform: translateX(3px) }\n    50% { transform: translateX(-3px) }\n    75% { transform: translateX(3px) }\n    100% { transform: translateX(0) }\n  }\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n *{\n    /* border: solid 1px rgb(154, 173, 184); */\n    /* border-radius: 20px; */\n } \n\n *{\n    box-sizing: border-box;\n }\n    \nbody {\n    margin: 20px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    /* background-color: rgb(41, 52, 58);\n    background-color: rgb(32, 41, 46);\n    background-image: radial-gradient( rgb(74, 90, 99) , rgb(32, 41, 46));\n    font-family:'Open Sans', sans-serif; */\n    /* color: rgb(202, 225, 238);\n    color: rgb(255, 255, 255); */\n    /* border: solid 4px rgb(94, 119, 133); */\n    color: rgb(20, 17, 17);\n    font-size: 48px;\n    align-items: center;\n    justify-content: center;\n    /* font-family: 'Roboto Condensed', sans-serif; */\n}\n\n#messageBoard {\n    /* padding: 8px; */\n    text-align: center;\n    justify-content: center;\n    width: 460px;\n    height: 40px;\n    font-size: 18px;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n\n.title {\n    text-align: center;\n    justify-content: center;\n    width: 460px;\n    font-size: 24px;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n#container {\n    border: solid 2px #84d4ff;\n    background-color: #deeff8;\n    border-radius: 16px;\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 300px;\n    grid-template-rows: 300px 300px;\n    row-gap: 20px;\n    align-items: end;\n    justify-items: center;\n    \n}\n\n#log {\n    grid-area: 1/2/2/3;\n}\n#mainBoard {\n    grid-area: 2/2/3/3;\n}\n\n#turnBoard {\n    display: none;\n}\n.board {\n    display: grid;\n    grid-template-columns: repeat(11, 25px);\n    grid-template-rows: repeat(12, 25px);\n    align-items: center;\n    align-content: center;\n}\n\n.topLabel {\n    background-color: white;\n    grid-column: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    border: none;\n}\n\n.sideLabel {\n    background-color: white;\n    grid-row: 2/12;\n    grid-column: 1/2;\n    display: grid;\n    grid-template-rows: repeat(10, 25px);\n    flex-direction: column;\n    justify-content: center;\n}\n.bottomLabel {\n    display: flex;\n    background-color: #84ff94;\n    width: 275px;\n    height: 25px;\n    grid-column: 1/13;\n    grid-row: 12/13;\n    font-size: 18px;\n    font-family: 'Roboto Condensed', sans-serif;\n    padding: 4px;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n}\n\n.tlUnit, .slUnit, .corner {\n    background-color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    \n}\n.tlUnit{\n    border-bottom: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-top: solid 1px rgb(94, 119, 133);\n}\n\n.slUnit{\n    border-left: solid 1px rgb(94, 119, 133);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.corner{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    border: solid 1px rgb(94, 119, 133);\n}\n\n.innerBoard {\n    grid-column: 2/12;\n    grid-row: 2/12;\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n    \n}\n\n.unitl, .unitm{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:rgb(176, 200, 214);\n    width: 25px;\n    height: 25px;\n    font-size: 14px;\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.unitl:hover{\n    background-color:rgb(117, 149, 168);\n}\n\n.empty {\n    background-color: #84ff94;\n    background-color:rgb(130, 164, 184);\n}\n\n\n\n.miss, .miss:hover{\n    background-color:rgb(49, 161, 226);\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.hit, .hit:hover{\n    background-color:rgb(228, 100, 100);\n    background-color:rgb(255, 109, 109);\n    /* border:rgb(228, 100, 100); */\n    border-right: solid 1px rgb(94, 119, 133);\n    border-bottom: solid 1px rgb(94, 119, 133);\n}\n\n.holder{\n    width: 125px;\n    height: 25px;\n}\n\n.ship, .ship:hover{\n    position: absolute;\n    display: flex;\n    background-color:rgba(73, 106, 126, 60%);\n    border: solid 2px rgb(47, 63, 71);\n    height: 25px;\n}\n\n.draghover {\n    background-color: rgb(255, 196, 2);\n    width: 25px;\n    height:25px;\n}\n\n.outerHold {\n    grid-area: 2/1/3/2;\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-right: 10px;\n    margin-left: 10px;\n    gap: 20px;\n}\n.shipHold {\n    display: flex;\n}\n.shipHolder{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    /* flex-wrap: wrap; */\n    gap: 16px;\n    /* width: 300px;\n    height: 72px; */\n}\n\n.selected {\n    box-shadow: 0 0 10px 2px #84d4ff;\n    box-shadow: 0 0 10px 2px #84ff94;\n}\n\n.rotated {\n    transform: rotate(90deg);\n}\n\n.anchor {\n    position: relative;\n    width: 25px;\n    height: 25px;\n}\n\n.button {\n    padding: 8px;\n    width: 140px;\n    height: 50px;\n    background-color:rgb(176, 200, 214);\n    text-align: center;\n    font-size: 20px;\n    font-family: 'Roboto Condensed', sans-serif;\n    cursor: pointer;\n}\n#playAgain{\n    display: none;\n}\n\n.lock:hover, #playAgain:hover {\n    transform: scale(105%);\n}\n\n.hidden{\n    display: none;\n}\n\n.horizontal-shake {\n    box-shadow: 0 0 10px 2px #ff8484;\n    animation: horizontal-shaking 0.35s infinite;\n  }\n\n@keyframes horizontal-shaking {\n    0% { transform: translateX(0) }\n    25% { transform: translateX(3px) }\n    50% { transform: translateX(-3px) }\n    75% { transform: translateX(3px) }\n    100% { transform: translateX(0) }\n  }\n\n\n"],"sourceRoot":""}]);
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
    (0,_GUIRender__WEBPACK_IMPORTED_MODULE_4__["default"])(player, player2);
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
}

const styleNode = (theElem) => {
    const dragover = new Event("dragover");
    theElem.dispatchEvent(dragover);
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
    title.textContent = 'BATTLESHIP';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixZQUFZLDRCQUE0QixZQUFZLDZCQUE2QixZQUFZLDRCQUE0QixhQUFhLDBCQUEwQixLQUFLLGFBQWEsZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxPQUFPLE1BQU0sT0FBTyxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxNQUFNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBLHFCQUFxQixZQUFZLFdBQVcsV0FBVztBQUN2RCxxQkFBcUIsWUFBWSxhQUFhLGFBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFB6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJLEVBQUUsUUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPLEVBQUUsSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQsMEJBQTBCLDhCQUE4QjtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFFBQVE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQixNQUFNLFFBQVE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxTQUFTLHdEQUF3RDtBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFNBQVM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7O0FBRTFCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1JBO0FBQ0EsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ2xNcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQztBQUNDO0FBQ0g7QUFDUDs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsZ0JBQWdCLHNEQUFTO0FBQ3pCLGlCQUFpQixzREFBUzs7O0FBRzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0RBQVU7O0FBRVY7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBOzs7O0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlCb2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlNYWluLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL0dVSVJlbmRlci5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9HVUlTaGlwLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9tYW51YWxEcmFnLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNjAwOzAsODAwOzEsMzAwOzEsNDAwJmZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTU0LCAxNzMsIDE4NCk7ICovXFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXFxuIH0gXFxuXFxuICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuIH1cXG4gICAgXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNTIsIDU4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCA0MSwgNDYpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYig3NCwgOTAsIDk5KSAsIHJnYigzMiwgNDEsIDQ2KSk7XFxuICAgIGZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyAqL1xcbiAgICAvKiBjb2xvcjogcmdiKDIwMiwgMjI1LCAyMzgpO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDRweCByZ2IoOTQsIDExOSwgMTMzKTsgKi9cXG4gICAgY29sb3I6IHJnYigyMCwgMTcsIDE3KTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuI21lc3NhZ2VCb2FyZCB7XFxuICAgIC8qIHBhZGRpbmc6IDhweDsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQ2MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLnRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQ2MHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjODRkNGZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlZmY4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMDBweCAzMDBweDtcXG4gICAgcm93LWdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuI2xvZyB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuI21haW5Cb2FyZCB7XFxuICAgIGdyaWQtYXJlYTogMi8yLzMvMztcXG59XFxuXFxuI3R1cm5Cb2FyZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDI1cHgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b3BMYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zaWRlTGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1yb3c6IDIvMTI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5ib3R0b21MYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NGZmOTQ7XFxuICAgIHdpZHRoOiAyNzVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8xMztcXG4gICAgZ3JpZC1yb3c6IDEyLzEzO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRsVW5pdCwgLnNsVW5pdCwgLmNvcm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG59XFxuLnRsVW5pdHtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uc2xVbml0e1xcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uY29ybmVye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmlubmVyQm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZ3JpZC1yb3c6IDIvMTI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBcXG59XFxuXFxuLnVuaXRsLCAudW5pdG17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzYsIDIwMCwgMjE0KTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4udW5pdGw6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDExNywgMTQ5LCAxNjgpO1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRmZjk0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMzAsIDE2NCwgMTg0KTtcXG59XFxuXFxuXFxuXFxuLm1pc3MsIC5taXNzOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0OSwgMTYxLCAyMjYpO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaGl0LCAuaGl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMjgsIDEwMCwgMTAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxMDksIDEwOSk7XFxuICAgIC8qIGJvcmRlcjpyZ2IoMjI4LCAxMDAsIDEwMCk7ICovXFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5ob2xkZXJ7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uc2hpcCwgLnNoaXA6aG92ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDczLCAxMDYsIDEyNiwgNjAlKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDQ3LCA2MywgNzEpO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5kcmFnaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTYsIDIpO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OjI1cHg7XFxufVxcblxcbi5vdXRlckhvbGQge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uc2hpcEhvbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc2hpcEhvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxuICAgIGdhcDogMTZweDtcXG4gICAgLyogd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDcycHg7ICovXFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCAjODRkNGZmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggIzg0ZmY5NDtcXG59XFxuXFxuLnJvdGF0ZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5hbmNob3Ige1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzYsIDIwMCwgMjE0KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3BsYXlBZ2FpbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxvY2s6aG92ZXIsICNwbGF5QWdhaW46aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwNSUpO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1zaGFrZSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCAjZmY4NDg0O1xcbiAgICBhbmltYXRpb246IGhvcml6b250YWwtc2hha2luZyAwLjM1cyBpbmZpbml0ZTtcXG4gIH1cXG5cXG5Aa2V5ZnJhbWVzIGhvcml6b250YWwtc2hha2luZyB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIH1cXG4gICAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgfVxcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgfVxcbiAgICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KSB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgfVxcbiAgfVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0M7SUFDRywwQ0FBMEM7SUFDMUMseUJBQXlCO0NBQzVCOztDQUVBO0lBQ0csc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Q7OzswQ0FHc0M7SUFDdEM7Z0NBQzRCO0lBQzVCLHlDQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsMkNB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QkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyw0Q0FBNEM7RUFDOUM7O0FBRUY7SUFDSSxLQUFLLHlCQUF5QjtJQUM5QixNQUFNLDJCQUEyQjtJQUNqQyxNQUFNLDRCQUE0QjtJQUNsQyxNQUFNLDJCQUEyQjtJQUNqQyxPQUFPLHlCQUF5QjtFQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNjAwOzAsODAwOzEsMzAwOzEsNDAwJmZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG4gKntcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE1NCwgMTczLCAxODQpOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyMHB4OyAqL1xcbiB9IFxcblxcbiAqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiB9XFxuICAgIFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDUyLCA1OCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgNDEsIDQ2KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoNzQsIDkwLCA5OSkgLCByZ2IoMzIsIDQxLCA0NikpO1xcbiAgICBmb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgKi9cXG4gICAgLyogY29sb3I6IHJnYigyMDIsIDIyNSwgMjM4KTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgKi9cXG4gICAgLyogYm9yZGVyOiBzb2xpZCA0cHggcmdiKDk0LCAxMTksIDEzMyk7ICovXFxuICAgIGNvbG9yOiByZ2IoMjAsIDE3LCAxNyk7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbiNtZXNzYWdlQm9hcmQge1xcbiAgICAvKiBwYWRkaW5nOiA4cHg7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0NjBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi50aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0NjBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzg0ZDRmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZWZmODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHggMzAwcHg7XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbiNsb2cge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxufVxcbiNtYWluQm9hcmQge1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxufVxcblxcbiN0dXJuQm9hcmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMjVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAyNXB4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9wTGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2lkZUxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGdyaWQtcm93OiAyLzEyO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYm90dG9tTGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRmZjk0O1xcbiAgICB3aWR0aDogMjc1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICAgIGdyaWQtcm93OiAxMi8xMztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50bFVuaXQsIC5zbFVuaXQsIC5jb3JuZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgXFxufVxcbi50bFVuaXR7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLnNsVW5pdHtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmNvcm5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxufVxcblxcbi5pbm5lckJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGdyaWQtcm93OiAyLzEyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG4gICAgXFxufVxcblxcbi51bml0bCwgLnVuaXRte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc2LCAyMDAsIDIxNCk7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLnVuaXRsOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMTcsIDE0OSwgMTY4KTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0ZmY5NDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTMwLCAxNjQsIDE4NCk7XFxufVxcblxcblxcblxcbi5taXNzLCAubWlzczpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDksIDE2MSwgMjI2KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDk0LCAxMTksIDEzMyk7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG59XFxuXFxuLmhpdCwgLmhpdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjI4LCAxMDAsIDEwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTA5LCAxMDkpO1xcbiAgICAvKiBib3JkZXI6cmdiKDIyOCwgMTAwLCAxMDApOyAqL1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoOTQsIDExOSwgMTMzKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig5NCwgMTE5LCAxMzMpO1xcbn1cXG5cXG4uaG9sZGVye1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLnNoaXAsIC5zaGlwOmhvdmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg3MywgMTA2LCAxMjYsIDYwJSk7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYig0NywgNjMsIDcxKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uZHJhZ2hvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk2LCAyKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDoyNXB4O1xcbn1cXG5cXG4ub3V0ZXJIb2xkIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLnNoaXBIb2xkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNoaXBIb2xkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIC8qIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA3MnB4OyAqL1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggIzg0ZDRmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4ICM4NGZmOTQ7XFxufVxcblxcbi5yb3RhdGVkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uYW5jaG9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc2LCAyMDAsIDIxNCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNwbGF5QWdhaW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5sb2NrOmhvdmVyLCAjcGxheUFnYWluOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDUlKTtcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvcml6b250YWwtc2hha2Uge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggI2ZmODQ4NDtcXG4gICAgYW5pbWF0aW9uOiBob3Jpem9udGFsLXNoYWtpbmcgMC4zNXMgaW5maW5pdGU7XFxuICB9XFxuXFxuQGtleWZyYW1lcyBob3Jpem9udGFsLXNoYWtpbmcge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB9XFxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpIH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIH1cXG4gICAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCkgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIH1cXG4gIH1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhbHBoYXMgPSBcImFiY2RlZmdoaWpcIjtcbmNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuXG5mdW5jdGlvbiBhZGRIb3Zlcihldikge1xuICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhvdmVyZWRcIik7XG59XG5mdW5jdGlvbiB1bkhvdmVyKGV2KSB7XG4gIGV2LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbn1cblxuZnVuY3Rpb24gdW5zdHlsZVRhcmdldChldikge1xuICAvL2NvbnNvbGUubG9nKCdpbSBVTnRyaWdnZXJlZCcpXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2hvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBzdHlsZVRhcmdldChldikge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL2NvbnNvbGUubG9nKCdpbSB0cmlnZ2VyZWQnKVxuICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZChcImRyYWdob3ZlclwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0bG9jYXRpb24oZXYpIHtcbiAgY29uc29sZS5sb2coJ2FEcm9wIGhhcHBlbmVkIScpXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHVuc3R5bGVUYXJnZXQoZXYpO1xuICBjb25zdCBkYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyYWdJdGVtXCIpO1xuICBjb25zdCBub2RlID0gZGF0YVswXTtcbiAgY29uc3QgbG9jID0gZXYudGFyZ2V0LmlkLnNwbGl0KFwiXCIpO1xuICBjb25zdCBjb2wxID0gTnVtYmVyKGxvY1sxXSkgKyAyO1xuICBjb25zdCBjb2wyID0gY29sMSArIDE7XG4gIGNvbnN0IHJvdzEgPSBhbHBoYS5pbmRleE9mKGxvY1swXSkgKyAyO1xuICBjb25zdCByb3cyID0gcm93MSArIDE7XG4gIG5vZGUuc3R5bGUuZ3JpZEFyZWEgPSBgJHtyb3cxfS8ke2NvbDF9LyR7cm93Mn0vJHtjb2wyfWA7XG4gIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbmNvbnN0IGRyYXdCb2FyZCA9IChwbHlyVmFsLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgaWYocGx5clZhbCAhPT0gbnVsbCl7XG4gICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheWVyJywgcGx5clZhbC5wTnVtKTtcbiAgfVxuICBcbiAgY29uc3QgdG9wTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKHRvcExhYmVsKTtcbiAgdG9wTGFiZWwuY2xhc3NMaXN0LmFkZChcInRvcExhYmVsXCIpO1xuICBjb25zdCBzaWRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmFwcGVuZENoaWxkKHNpZGVMYWJlbCk7XG4gIHNpZGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwic2lkZUxhYmVsXCIpO1xuICBjb25zdCBpbm5lckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5uZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiaW5uZXJCb2FyZFwiKTtcbiAgZ3JpZC5hcHBlbmRDaGlsZChpbm5lckJvYXJkKTtcbiAgY29uc3QgYm90dG9tTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib3R0b21MYWJlbC5jbGFzc0xpc3QuYWRkKFwiYm90dG9tTGFiZWxcIik7XG4gIGdyaWQuYXBwZW5kQ2hpbGQoYm90dG9tTGFiZWwpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gYCR7aX1sYDtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRsVW5pdFwiKTtcbiAgICB0b3BMYWJlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2kgKyAxfWA7XG4gICAgaSArPSAxO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBgJHtpfWxgO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2xVbml0XCIpO1xuICAgIHNpZGVMYWJlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2FscGhhW2ldfWA7XG4gICAgaSArPSAxO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYHVuaXQke3R5cGV9YCk7XG4gICAgICBpbm5lckJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuaWQgPSBgJHthbHBoYVtpXX0ke2p9JHt0eXBlfWA7XG4gICAgICAvLyBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgc3R5bGVUYXJnZXQpO1xuICAgICAgaWYgKHR5cGUgPT09IFwibVwiKSB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgc3R5bGVUYXJnZXQpO1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCB1bnN0eWxlVGFyZ2V0KTtcbiAgICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGdldGxvY2F0aW9uKTtcbiAgICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgc3R5bGVUYXJnZXQpO1xuICAgICAgICAvLyBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdW5zdHlsZVRhcmdldCk7XG4gICAgICAgIC8vIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3VzZVwiLCBnZXRsb2NhdGlvbik7XG4gICAgICB9XG4gICAgICBqICs9IDE7XG4gICAgfVxuICAgIGkgKz0gMTtcbiAgfVxuXG4gIGNvbnN0IGNvcm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQuYXBwZW5kQ2hpbGQoY29ybmVyKTtcbiAgY29ybmVyLmNsYXNzTGlzdC5hZGQoXCJjb3JuZXJcIik7XG5cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkcmF3Qm9hcmQ7XG4iLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IGRyYXdCb2FyZCBmcm9tIFwiLi9HVUlCb2FyZFwiO1xuaW1wb3J0IGRyYXdTaGlwcyBmcm9tIFwiLi9HVUlTaGlwXCI7XG5pbXBvcnQgbWFudWFsRHJhZyBmcm9tIFwiLi9tYW51YWxEcmFnXCI7XG5pbXBvcnQgcmVuZGVyQm9hcmRzIGZyb20gJy4vR1VJUmVuZGVyJztcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cblxuY29uc3QgZHJhd0xheW91dCA9IChwbGF5ZXIsIHBsYXllcjIpID0+IHtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuY29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2VCb2FyZCcpO1xuY29uc3QgbG9nID0gZHJhd0JvYXJkKG51bGwsICdsJyk7XG5sb2cuaWQgPSAnbG9nJztcbi8vIGNvbnN0IG51bSA9IHBsYXllci5wbGF5ZXJOdW07XG5jb25zdCBtYWluQm9hcmQgPSBkcmF3Qm9hcmQocGxheWVyLCAnbScpO1xubWFpbkJvYXJkLmlkID0gJ21haW5Cb2FyZCc7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobG9nKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQm9hcmQpO1xuY29uc3Qgc2hpcHMgPSBkcmF3U2hpcHMoKTtcbmNvbnN0IG91dGVySG9sZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xub3V0ZXJIb2xkLmNsYXNzTGlzdC5hZGQoJ291dGVySG9sZCcpXG5jb250YWluZXIuYXBwZW5kQ2hpbGQob3V0ZXJIb2xkKVxuY29uc3Qgc2hpcEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2hpcEhvbGRlci5jbGFzc0xpc3QuYWRkKCdzaGlwSG9sZGVyJyk7XG5vdXRlckhvbGQuYXBwZW5kQ2hpbGQoc2hpcEhvbGRlcik7XG5sb2cuY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSAnRW5lbXkgQm9hcmQnO1xubWFpbkJvYXJkLmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gJ015IEJvYXJkJztcblxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaGlwSG9sZGVyKTtcblxuY29uc3QgbG9ja1NoaXBzRG93biA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbG9ja2luZyBzaGlwcycpXG4gICAgaWYocGxheWVyLnNoaXBzLmxlbmd0aCAhPT0gNSl7XG4gICAgICAgIG1lc3NhZ2VCb2FyZC50ZXh0Q29udGVudCA9ICdQbGVhc2UgcGxhY2UgYWxsIG9mIHlvdSBzaGlwcyBvbiB0aGUgYm9hcmQhJ1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2hpcE5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW5jaG9yJyk7XG4gICAgQXJyYXkuZnJvbShzaGlwTm9kZXMpLmZvckVhY2goYW5jaG9yID0+IHtcbiAgICAgICAgYW5jaG9yLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgYW5jaG9yLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGFuY2hvci5yZXBsYWNlV2l0aChhbmNob3IuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBcbiAgICB9KVxuICAgIGNvbnN0IGxvY2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ja0J1dHRvbicpO1xuICAgIGxvY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICAgIGxvY2tCdXR0b24ucmVwbGFjZVdpdGgobG9ja0J1dHRvbi5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGNvbnN0IGFTaGlwSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2hpcEhvbGRlcicpWzBdO1xuICAgIGFTaGlwSG9sZGVyLnJlbW92ZSgpO1xuICAgIHBsYXllci51cGRhdGVNYXRyaXgoKTtcbiAgICBwbGF5ZXIyLnVwZGF0ZU1hdHJpeCgpO1xuICAgIHJlbmRlckJvYXJkcyhwbGF5ZXIsIHBsYXllcjIpO1xufVxuXG5jb25zdCBsb2NrU2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvY2tTaGlwcy5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbmxvY2tTaGlwcy5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG5vdXRlckhvbGQuYXBwZW5kQ2hpbGQobG9ja1NoaXBzKTtcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9ja1NoaXBzKTtcbmxvY2tTaGlwcy50ZXh0Q29udGVudCA9ICdMT0NLIFNISVBTJztcbmxvY2tTaGlwcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2tCdXR0b24nKTtcbmxvY2tTaGlwcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvY2tTaGlwc0Rvd24pXG5cblxuc2hpcHMuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgIGNvbnN0IHNoaXBIb2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcEhvbGQuY2xhc3NMaXN0LmFkZCgnc2hpcEhvbGQnKVxuICAgIHNoaXBIb2xkLmFwcGVuZENoaWxkKHNoaXBFbCk7XG4gICAgc2hpcEhvbGQuc3R5bGUud2lkdGggPSBzaGlwRWwuZmlyc3RDaGlsZC5zdHlsZS53aWR0aDtcbiAgICBzaGlwSG9sZGVyLmFwcGVuZENoaWxkKHNoaXBIb2xkKTtcbiAgICBtYW51YWxEcmFnKHNoaXBFbCwgcGxheWVyKTtcbn0pXG5jb25zdCBzdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uYW1lPVwiY3J1aXNlclwiXScpO1xuc3ViWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgJ3N1Ym1hcmluZScpO1xuXG5cbmNvbnN0IHBsYXllclBsYWNlID0gKGNvbDEsIHJvdzEsIGxlbmd0aCwgcm90LCBhUGxheWVyLCBuYW1lKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYGJlZ2lubmluZyByb3RhdGVkPyAke3JvdH1gKVxuICAgIGNvbnN0IG4gPSBuYW1lO1xuICAgIGNvbnN0IHJvdyA9IHJvdzEgKzEgO1xuICAgIGNvbnN0IGNvbCA9IGFscGhhW2NvbDFdO1xuICAgIGNvbnN0IGNvb3JkID0gW2NvbCwgcm93XTtcbiAgICBjb25zdCBsZW4gPSBsZW5ndGg7XG4gICAgY29uc3QgaXNSb3RhdGVkID0gcm90O1xuICAgIGxldCBkaXIgPSAncic7XG4gICAgaWYoaXNSb3RhdGVkID09PSAndHJ1ZScpe1xuICAgICAgICBkaXIgPSAnZCdcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coYGRpcmVjdGlvbiBpcyAke2Rpcn1gKVxuICAgIGNvbnN0IHZhbGlkID0gYVBsYXllci5wbGFjZVNoaXAobGVuLGNvb3JkLGRpcixuKTtcbiAgICAvLyBjb25zb2xlLmxvZyhgVGhpcyB3YXMgdmFsaWQ/ICR7dmFsaWR9YClcbiAgICByZXR1cm4gdmFsaWQ7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZShldil7XG4gICAgaWYoZXYua2V5ID09PSAncicpe1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdGVkJylbMF0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IGN1cnJlbnRSb3RhdGlvbiA9IHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JvdGF0aW5nJyk7XG4gICAgICAgIGlmKChjdXJyZW50Um90YXRpb24gPT09ICcnKXx8KGN1cnJlbnRSb3RhdGlvbiA9PT0gJ3JvdGF0ZSgwZGVnKScpICl7XG4gICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSAwO1xuICAgICAgICAgICAgc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSg5MGRlZylgO1xuICAgICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZWQnLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSBjdXJyZW50Um90YXRpb24uc3BsaXQoJycpO1xuICAgICAgICAgICAgbGV0IG5ld1JvdGF0aW9uID0gY3VycmVudFJvdGF0aW9uWzddICsgY3VycmVudFJvdGF0aW9uWzhdO1xuICAgICAgICAgICAgbmV3Um90YXRpb24gPSBOdW1iZXIobmV3Um90YXRpb24pO1xuICAgICAgICAgICAgbmV3Um90YXRpb24gLT0gOTA7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdSb3RhdGlvbilcbiAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtuZXdSb3RhdGlvbn1kZWcpYDtcbiAgICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgcGFyZW50IG5vZGUgaXMgc2hpcGhvbGQgZG8sIG5vcm1hbCwgb3RoZXIgd2lzZSwgZ2V0IHN0YXJ0IGNvb3JkXG4gICAgICAgIC8vIGJ1aWxkIGEgc2hpcCBpbiBvcHBvc2l0ZSBkaXJlY3Rpb24gKGhvcml6b250YWwgb3IgdmVydGljYWwpLCBiYXNpY2FsbHkgdHJlYXQgYXMgYSBkcm9wIGlmIGl0J3MgYWxyZWFkeSBvZiB0aGUgYm9hcmQuXG4gICAgICAgIC8vIGlmIHNoaXAgaXMgdmFsaWQgb3ZlcndyaXRlXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIGlmKHNlbGVjdGVkLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYm9hcmQnKXtcbiAgICAgICAgICAgIGNvbnN0IGlzUm90YXRlZCA9IHNlbGVjdGVkLmRhdGFzZXQucm90YXRlZDtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE51bWJlcihzZWxlY3RlZC5kYXRhc2V0LnNoaXApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdBcmVhID0gc2VsZWN0ZWQuc3R5bGUuZ3JpZEFyZWEuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhnQXJlYSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sMSA9IE51bWJlcihnQXJlYVswXSAtMik7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY29sTmV4dCA9IE51bWJlcihnQXJlYVs1XSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sMSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93MSA9IE51bWJlcihnQXJlYVsxXSAtMik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocm93MSk7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSBwbGF5ZXJQbGFjZShjb2wxLCByb3cxLCBsZW5ndGgsIGlzUm90YXRlZCwgcGxheWVyLCBzZWxlY3RlZC5kYXRhc2V0Lm5hbWUpIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXZhbGlkKSB7XG4gICAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgICAgIGlmKChjdXJyZW50Um90YXRpb24gPT09ICcnKXx8KGN1cnJlbnRSb3RhdGlvbiA9PT0gJ3JvdGF0ZSgwZGVnKScpICl7XG4gICAgICAgICAgICAgICAgY3VycmVudFJvdGF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKDkwZGVnKWA7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjdXJyZW50Um90YXRpb24gPSBjdXJyZW50Um90YXRpb24uc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdSb3RhdGlvbiA9IGN1cnJlbnRSb3RhdGlvbls3XSArIGN1cnJlbnRSb3RhdGlvbls4XTtcbiAgICAgICAgICAgICAgICBuZXdSb3RhdGlvbiA9IE51bWJlcihuZXdSb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgbmV3Um90YXRpb24gLT0gOTA7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3Um90YXRpb24pXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke25ld1JvdGF0aW9ufWRlZylgO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZC5maXJzdENoaWxkKVxuICAgICAgICAgICAgc2VsZWN0ZWQuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsLXNoYWtlJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXBwbHlpbmcgc2hha2UnKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7c2VsZWN0ZWQuZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsLXNoYWtlJyl9LCAnNTAwJylcbiAgICAgICAgfVxuICAgIH0gIFxufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHJvdGF0ZSlcbn1cblxuLy8gY29uc3QgbWlzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhMGwnKTtcbi8vIG1pc3MuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG5cbi8vIGNvbnN0IGhpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhMWwnKTtcbi8vIGhpdC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZHJhd0xheW91dCIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgZHJhd0JvYXJkIGZyb20gXCIuL0dVSUJvYXJkXCI7XG5pbXBvcnQgZHJhd1NoaXBzIGZyb20gXCIuL0dVSVNoaXBcIjtcbmltcG9ydCBtYW51YWxEcmFnIGZyb20gXCIuL21hbnVhbERyYWdcIjtcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7XG5cblxuY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG5jb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcblxuY29uc3QgYWRkU3R5bGVzID0gKGFuTm9kZSwgcGxheWVyKSA9PiB7XG4gICAgY29uc3QgYU5vZGUgPSBhbk5vZGU7XG4gICAgY29uc3QgeCA9IGFscGhhLmluZGV4T2YoYU5vZGUuaWQuc3BsaXQoJycpWzBdKTtcbiAgICBjb25zdCB5ID0gYU5vZGUuaWQuc3BsaXQoJycpWzFdO1xuICAgIGNvbnN0IHZhbCA9IHBsYXllci5yb3dzW3hdW3ldO1xuICAgIGlmKHZhbCA9PT0gJ00nKXtcbiAgICAgICAgYU5vZGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgfVxuICAgIGlmKHZhbCA9PT0gJ0gnKXtcbiAgICAgICAgYU5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICB9XG4gICAgaWYodmFsID09PSAnRScpe1xuICAgICAgICBhTm9kZS5jbGFzc0xpc3QuYWRkKCdlbXB0eScpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhTm9kZS50ZXh0Q29udGVudCA9IHZhbDtcbiAgICB9XG59XG5jb25zdCBhZGRTdHlsZXMyID0gKGFuTm9kZSwgcGxheWVyKSA9PiB7XG4gICAgY29uc3QgYU5vZGUgPSBhbk5vZGU7XG4gICAgY29uc3QgeCA9IGFscGhhLmluZGV4T2YoYU5vZGUuaWQuc3BsaXQoJycpWzBdKTtcbiAgICBjb25zdCB5ID0gYU5vZGUuaWQuc3BsaXQoJycpWzFdO1xuICAgIGNvbnN0IHZhbCA9IHBsYXllci5yb3dzW3hdW3ldO1xuICAgIGlmKHZhbCA9PT0gJ00nKXtcbiAgICAgICAgYU5vZGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgfVxuICAgIGlmKHZhbCA9PT0gJ0gnKXtcbiAgICAgICAgYU5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICB9XG4gICAgLy8gaWYodmFsID09PSAnRScpe1xuICAgIC8vICAgICBhTm9kZS5jbGFzc0xpc3QuYWRkKCdlbXB0eScpXG4gICAgLy8gfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgICBhTm9kZS50ZXh0Q29udGVudCA9IHZhbDtcbiAgICAvLyB9XG59XG5jb25zdCBnZXRQbGF5ZXIgPSAocGxheWVyLCBwbGF5ZXIyLCB0dXJuKSA9PiB7XG4gICAgaWYocGxheWVyLnBOdW0gPT09IHR1cm4pe1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH1cbiAgICAgICAgcmV0dXJuIHBsYXllcjI7XG59XG5jb25zdCBnZXRPdGhlclBsYXllciA9IChwbGF5ZXIsIHBsYXllcjIsIHR1cm4pID0+IHtcbiAgICBpZihwbGF5ZXIucE51bSAhPT0gdHVybil7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfVxuICAgICAgICByZXR1cm4gcGxheWVyMjtcbn1cblxuY29uc3QgY2hlY2tGb3JXaW4gPSAocGxheWVyVXAsIHBsYXllck5leHQpID0+IHtcbiAgICBpZihwbGF5ZXJOZXh0LmFsbFN1bmsoKSl7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlQm9hcmQnKS50ZXh0Q29udGVudCA9IGBBbGwgb2YgJHtwbGF5ZXJOZXh0LnBOdW19J3Mgc2hpcHMgYXJlIHN1bmsuICR7cGxheWVyVXAucE51bX0gd2lucyFgO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZUJvYXJkJykudGV4dENvbnRlbnQgPSBgQWxsIG9mIGNvbXB1dGVyJ3Mgc2hpcHMgYXJlIHN1bmsuIFlvdSB3aW4hYDtcbiAgICAgICAgY29uc3QgZ3JpZFVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdGwnKTtcbiAgICAgICAgY29uc3QgbW9yZWdyaWRVbml0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VuaXRtJyk7XG4gICAgICAgIEFycmF5LmZyb20oZ3JpZFVuaXRzKS5mb3JFYWNoKHVuaXQgPT4ge1xuICAgICAgICAgICAgdW5pdC5yZXBsYWNlV2l0aCh1bml0LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH0pICBcbiAgICAgICAgQXJyYXkuZnJvbShtb3JlZ3JpZFVuaXRzKS5mb3JFYWNoKHVuaXQgPT4ge1xuICAgICAgICAgICAgdW5pdC5yZXBsYWNlV2l0aCh1bml0LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5QWdhaW4nKTtcbiAgICAgICAgcGxheUFnYWluLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuY29uc3QgcmVuZGVyV2luID0gKHBsYXllciwgcGxheWVyMikgPT4ge1xuY29uc3Qgb2xkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xub2xkQ29udGFpbmVyLnJlbW92ZSgpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbmNvbnN0IGxvZyA9IGRyYXdCb2FyZChwbGF5ZXIyLCAnbCcpO1xubG9nLmlkID0gJ2xvZyc7XG4vLyBjb25zdCBudW0gPSBwbGF5ZXIucGxheWVyTnVtO1xuY29uc3QgbWFpbkJvYXJkID0gZHJhd0JvYXJkKHBsYXllciwgJ20nKTtcbm1haW5Cb2FyZC5pZCA9ICdtYWluQm9hcmQnO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkJvYXJkKTtcblxuY29uc3QgdW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1bml0bScpO1xuQXJyYXkuZnJvbSh1bml0cykuZm9yRWFjaCh1bml0ID0+IHtcbiAgICBhZGRTdHlsZXModW5pdCwgcGxheWVyKTtcbn0pXG5jb25zdCBsdW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1bml0bCcpO1xuQXJyYXkuZnJvbShsdW5pdHMpLmZvckVhY2godW5pdCA9PiB7XG4gICAgYWRkU3R5bGVzMih1bml0LCBwbGF5ZXIyKTtcbn0pXG5cbn1cblxuY29uc3QgcmVuZGVyID0gKHBsYXllciwgcGxheWVyMikgPT4geyAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZUJvYXJkJykudGV4dENvbnRlbnQgPSAnWW91ciB0dXJuISc7XG5jb25zdCBwbGF5ZXJOdW0gPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm5Cb2FyZCcpLnRleHRDb250ZW50KTtcbmNvbnN0IG9sZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbm9sZENvbnRhaW5lci5yZW1vdmUoKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5jb25zdCBsb2cgPSBkcmF3Qm9hcmQocGxheWVyMiwgJ2wnKTtcbmxvZy5pZCA9ICdsb2cnO1xuLy8gY29uc3QgbnVtID0gcGxheWVyLnBsYXllck51bTtcbmNvbnN0IG1haW5Cb2FyZCA9IGRyYXdCb2FyZChwbGF5ZXIsICdtJyk7XG5tYWluQm9hcmQuaWQgPSAnbWFpbkJvYXJkJztcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2cpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Cb2FyZCk7XG5sb2cuY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSAnRW5lbXkgQm9hcmQnO1xubWFpbkJvYXJkLmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gJ015IEJvYXJkJztcbmNvbnN0IHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdG0nKTtcbkFycmF5LmZyb20odW5pdHMpLmZvckVhY2godW5pdCA9PiB7XG4gICAgYWRkU3R5bGVzKHVuaXQsIHBsYXllcik7XG59KVxuY29uc3QgbHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdGwnKTtcbiAgICBBcnJheS5mcm9tKGx1bml0cykuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgYWRkU3R5bGVzMih1bml0LCBwbGF5ZXIyKTtcbiAgICB9KVxuICAgIGNvbnN0IGF0dGFjayA9IChlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdHRhY2tpbmcnKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcGxheWVyTnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuQm9hcmQnKS50ZXh0Q29udGVudCk7XG4gICAgICAgIGNvbnN0IHBsYXllclVwID0gZ2V0UGxheWVyKHBsYXllciwgcGxheWVyMiwgcGxheWVyTnVtKTtcbiAgICAgICAgY29uc3Qgb3RoZXJQbGF5ZXIgPSBnZXRPdGhlclBsYXllcihwbGF5ZXIsIHBsYXllcjIsIHBsYXllck51bSk7XG4gICAgICAgIGNvbnN0IGFOb2RlID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHggPSBhTm9kZS5pZC5zcGxpdCgnJylbMF07XG4gICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoYU5vZGUuaWQuc3BsaXQoJycpWzFdKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coW3gseV0pXG4gICAgICAgIGNvbnN0IHZhbGlkID0gb3RoZXJQbGF5ZXIucmVjZWl2ZUF0dGFjayhbeCx5XSk7XG4gICAgICAgIGlmKCF2YWxpZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZXMgdmFsaWRvJylcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlQm9hcmQnKS50ZXh0Q29udGVudCA9ICdBbHJlYWR5IGd1ZXNlZC4gVHJ5IGFnYWluLic7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybkJvYXJkJykudGV4dENvbnRlbnQgPSBvdGhlclBsYXllci5wTnVtO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgIHJlbmRlcihwbGF5ZXIsIHBsYXllcjIpICBcbiAgICAgICAgLy8gfSwgJzUwMDAnKVxuICAgICAgICBjb25zb2xlLmxvZyhjaGVja0ZvcldpbihwbGF5ZXJVcCwgb3RoZXJQbGF5ZXIpKTtcbiAgICAgICAgaWYoIWNoZWNrRm9yV2luKHBsYXllclVwLCBvdGhlclBsYXllcikpe1xuICAgICAgICAgICAgcmVuZGVyKHBsYXllciwgcGxheWVyMikgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge3JlbmRlcldpbihwbGF5ZXIsIHBsYXllcjIpfVxuICAgIH1cbiAgICBjb25zdCBlbmFibGVVc2VyQXR0YWNrID0gKCkgPT4ge1xuICAgICAgICBBcnJheS5mcm9tKGx1bml0cykuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgICAgIHVuaXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgYXR0YWNrKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbmNvbnN0IGF0dGFja0NvbXAgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29tcHV0ZXIgYXR0YWNraW5nJylcbiAgICAgICAgY29uc3QgcGxheWVyTnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuQm9hcmQnKS50ZXh0Q29udGVudCk7XG4gICAgICAgIGNvbnN0IHBsYXllclVwID0gZ2V0UGxheWVyKHBsYXllciwgcGxheWVyMiwgcGxheWVyTnVtKTtcbiAgICAgICAgY29uc3Qgb3RoZXJQbGF5ZXIgPSBnZXRPdGhlclBsYXllcihwbGF5ZXIsIHBsYXllcjIsIHBsYXllck51bSk7XG4gICAgICAgIGNvbnN0IHggPSBhbHBoYXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coW3gseV0pXG4gICAgICAgIGNvbnN0IHZhbGlkID0gb3RoZXJQbGF5ZXIucmVjZWl2ZUF0dGFjayhbeCx5XSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbGlkKTtcbiAgICAgICAgaWYoIXZhbGlkKXtcbiAgICAgICAgICAgIGF0dGFja0NvbXAoKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm5Cb2FyZCcpLnRleHRDb250ZW50ID0gb3RoZXJQbGF5ZXIucE51bTtcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tGb3JXaW4ocGxheWVyVXAsIG90aGVyUGxheWVyKSk7XG4gICAgICAgIGlmKCFjaGVja0ZvcldpbihwbGF5ZXJVcCwgb3RoZXJQbGF5ZXIpKXtcbiAgICAgICAgICAgIHJlbmRlcihwbGF5ZXIsIHBsYXllcjIpIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge3JlbmRlcldpbihwbGF5ZXIsIHBsYXllcjIpfVxuXG4gICAgICAgICAgXG4gICAgfVxuXG5cblxuZW5hYmxlVXNlckF0dGFjaygpXG5cblxuY29uc3QgZGlzYWJsZVVzZXJBdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZFVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdGwnKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2xvbmluZyB1bml0cyB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXJzJylcbiAgICBBcnJheS5mcm9tKGdyaWRVbml0cykuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgdW5pdC5yZXBsYWNlV2l0aCh1bml0LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfSlcbn1cblxuaWYocGxheWVyTnVtID09PSAyKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZUJvYXJkJykudGV4dENvbnRlbnQgPSAnQ29tcHV0ZXIgYXR0YWNraW5nISc7XG4gICAgZGlzYWJsZVVzZXJBdHRhY2soKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXR0YWNrQ29tcCgpIFxuICAgIH0sICcxMDAwJylcbiAgICA7XG59XG5lbHNle2VuYWJsZVVzZXJBdHRhY2soKX1cblxuXG59XG5cblxuXG5cblxuXG4gICBcblxuXG4vLyBjb25zdCBtaXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2EwbCcpO1xuLy8gbWlzcy5jbGFzc0xpc3QuYWRkKCdtaXNzJylcblxuLy8gY29uc3QgaGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ExbCcpO1xuLy8gaGl0LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXIiLCJpbXBvcnQgbWFudWFsRHJhZyBmcm9tIFwiLi9tYW51YWxEcmFnXCI7XG5cbmNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cbmNvbnN0IHByaW50U2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIHNoaXBzQXJyYXkuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgICAgY29uc29sZS5sb2coc2hpcEVsLm5hbWUpXG4gICAgfSlcbiAgfVxuZnVuY3Rpb24gZHJhZyhldikge1xuICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBldi50YXJnZXQuaWQpO1xuICAgIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnSXRlbScpO1xuICAgIGNvbnN0IG5vZGUgPSBldi50YXJnZXQ7XG4gICAgc2V0VGltZW91dCAoKCkgPT4ge1xuICAgICAgICBub2RlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgfSwgMSk7XG4gIH1cblxuXG5mdW5jdGlvbiBwbGFjZShldil7XG4gICAgY29uc3Qgbm9kZSA9IGV2LnRhcmdldDtcbiAgICBldi50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ0l0ZW0nKTtcbiAgICBzZXRUaW1lb3V0ICgoKSA9PiB7XG4gICAgICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9IFwiXCI7XG4gICAgICB9LCAxKTtcbn1cblxuLy8gY29uc3QgcGxheWVyUGxhY2UgPSAoY29sMSwgcm93MSwgbGVuZ3RoLCByb3QsIHBsYXllciwgbmFtZSkgPT4ge1xuLy8gICAgIGNvbnN0IG4gPSBuYW1lO1xuLy8gICAgIGNvbnN0IGNvbCA9IGNvbDEgLSAxO1xuLy8gICAgIGNvbnN0IHJvdyA9IGFscGhhW3JvdzEgLSAyXTtcbi8vICAgICBjb25zdCBjb29yZCA9IFtyb3csIGNvbF07XG4vLyAgICAgY29uc3QgbGVuID0gbGVuZ3RoO1xuLy8gICAgIGNvbnN0IGlzUm90YXRlZCA9IHJvdDtcbi8vICAgICBsZXQgZGlyID0gJ3InO1xuLy8gICAgIGlmKGlzUm90YXRlZCl7XG4vLyAgICAgICAgIGRpciA9ICdkJ1xuLy8gICAgIH1cbi8vICAgICBjb25zdCB2YWxpZCA9IHBsYXllci5wbGFjZVNoaXAobGVuLGNvb3JkLGRpcixuKTtcbi8vICAgICByZXR1cm4gdmFsaWQ7XG4vLyB9XG5cbmZ1bmN0aW9uIHNlbGVjdChldil7XG4gICAgY29uc3Qgb2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKTtcbiAgICBpZihvbGRbMF0gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIG9sZFswXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgfVxuICAgIGV2LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuXG4vLyBmdW5jdGlvbiByb3RhdGUoZXYpe1xuLy8gICAgIGlmKGV2LmtleSA9PT0gJ3InKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3JvdGF0aW5nJyk7XG4vLyAgICAgICAgIC8vIGlmIHBhcmVudCBub2RlIGlzIHNoaXBob2xkIGRvLCBub3JtYWwsIG90aGVyIHdpc2UsIGdldCBzdGFydCBjb29yZFxuLy8gICAgICAgICAvLyBidWlsZCBhIHNoaXAgaW4gb3Bwb3NpdGUgZGlyZWN0aW9uIChob3Jpem9udGFsIG9yIHZlcnRpY2FsKSwgYmFzaWNhbGx5IHRyZWF0IGFzIGEgZHJvcCBpZiBpdCdzIGFscmVhZHkgb2YgdGhlIGJvYXJkLlxuLy8gICAgICAgICAvLyBpZiBzaGlwIGlzIHZhbGlkIG92ZXJ3cml0ZVxuLy8gICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdGVkJylbMF0ucGFyZW50RWxlbWVudDtcbi8vICAgICAgICAgbGV0IGN1cnJlbnRSb3RhdGlvbiA9IHNlbGVjdGVkLnN0eWxlLnRyYW5zZm9ybTtcbi8vICAgICAgICAgaWYoKGN1cnJlbnRSb3RhdGlvbiA9PT0gJycpfHwoY3VycmVudFJvdGF0aW9uID09PSAncm90YXRlKDBkZWcpJykgKXtcbi8vICAgICAgICAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IDA7XG4vLyAgICAgICAgICAgICBzZWxlY3RlZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKDkwZGVnKWA7XG4vLyAgICAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlZCcsICd0cnVlJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZXtcbi8vICAgICAgICAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IGN1cnJlbnRSb3RhdGlvbi5zcGxpdCgnJyk7XG4vLyAgICAgICAgICAgICBsZXQgbmV3Um90YXRpb24gPSBjdXJyZW50Um90YXRpb25bN10gKyBjdXJyZW50Um90YXRpb25bOF07XG4vLyAgICAgICAgICAgICBuZXdSb3RhdGlvbiA9IE51bWJlcihuZXdSb3RhdGlvbik7XG4vLyAgICAgICAgICAgICBuZXdSb3RhdGlvbiAtPSA5MDtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1JvdGF0aW9uKVxuLy8gICAgICAgICAgICAgc2VsZWN0ZWQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke25ld1JvdGF0aW9ufWRlZylgO1xuLy8gICAgICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZWQnLCAndHJ1ZScpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkKTtcbi8vICAgICAgICAgaWYoc2VsZWN0ZWQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdib2FyZCcpe1xuLy8gICAgICAgICAgICAgY29uc3QgaXNSb3RhdGVkID0gc2VsZWN0ZWQuZGF0YXNldC5yb3RhdGVkO1xuLy8gICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gTnVtYmVyKHNlbGVjdGVkLmRhdGFzZXQuc2hpcCk7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZ0FyZWEgPSBzZWxlY3RlZC5zdHlsZS5ncmlkQXJlYS5zcGxpdCgnJyk7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgY29sMSA9IE51bWJlcihnQXJlYVs0XSkgLSAyO1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbDEpO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHJvdzEgPSBOdW1iZXIoZ0FyZWFbMF0pIC0gMjtcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cxKTtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBhUGxheWVyID0gc2VsZWN0ZWQucGFyZW50RWxlbWVudC5kYXRhc2V0LnBsYXllcjtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBpc1ZhbGlkTG9jID0gcGxheWVyUGxhY2UoY29sMSwgcm93MSwgbGVuZ3RoLCBpc1JvdGF0ZWQsIGFQbGF5ZXIsIHNlbGVjdGVkLmRhdGFzZXQubmFtZSkgXG4vLyAgICAgICAgICAgICAgICAgaWYoaXNWYWxpZExvYyl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBhUGxheWVyLnJlbW92ZVNoaXAoc2VsZWN0ZWQuZGF0YXNldC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgIHByaW50U2hpcHMoYVBsYXllci5zaGlwcylcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9ICBcbi8vIH1cblxuXG5mdW5jdGlvbiBkcmFnc3RhcnQgKGV2KSB7XG4gICAgbWFudWFsRHJhZyhldi50YXJnZXQpXG4gICAgfTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHJvdGF0ZSlcblxuY29uc3QgbmFtZVNoaXAgPSAobCkgPT4ge1xuICAgIGlmIChsID09PSA1KXtcbiAgICAgIHJldHVybiAnY2Fycmllcic7XG4gICAgfVxuICAgIGlmIChsID09PSA0KXtcbiAgICAgIHJldHVybiAnYmF0dGxlc2hpcCc7XG4gICAgfVxuICAgIGlmIChsID09PSAzKXtcbiAgICAgIHJldHVybiAnY3J1aXNlcic7XG4gICAgfVxuICAgIGlmIChsID09PSAyKXtcbiAgICAgIHJldHVybiAnZGVzdHJveWVyJztcbiAgICB9XG4gICAgcmV0dXJuICdlcnJvcidcbiAgfVxuXG5jb25zdCBkcmF3U2hpcCA9IChsZW4pID0+IHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnYW5jaG9yJyk7XG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnZGF0YS1zaGlwJywgbGVuKTtcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lU2hpcChsZW4pKTtcbiAgICBjb25zdCBmYWtlc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZha2VzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAvLyBmYWtlc2hpcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgLy8gZmFrZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZyk7XG4gICAgLy8gZmFrZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHBsYWNlKTtcbiAgICAvLyBmYWtlc2hpcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzZWxlY3QpO1xuICAgIGZha2VzaGlwLnN0eWxlLndpZHRoID0gYCR7bGVuICogMjV9cHhgO1xuICAgIGFuY2hvci5hcHBlbmRDaGlsZChmYWtlc2hpcClcbiAgICAvLyBhbmNob3Iuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZyk7XG4gICAgLy8gYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBwbGFjZSk7XG4gICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzZWxlY3QpO1xuICAgIHJldHVybiBhbmNob3I7XG59XG5cblxuXG5jb25zdCBkcmF3U2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcGRpdnMgPSBbXTtcbiAgICBzaGlwZGl2cy5wdXNoKGRyYXdTaGlwKDUpKTtcbiAgICBzaGlwZGl2cy5wdXNoKGRyYXdTaGlwKDQpKTtcbiAgICBzaGlwZGl2cy5wdXNoKGRyYXdTaGlwKDMpKTtcbiAgICBzaGlwZGl2cy5wdXNoKGRyYXdTaGlwKDMpKTtcbiAgICBzaGlwZGl2cy5wdXNoKGRyYXdTaGlwKDIpKTtcbiAgICByZXR1cm4gc2hpcGRpdnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyYXdTaGlwc1xuXG5cblxuXG5cbiIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZnVuY3Rpb24gZ2VuUm93KGwpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IGwpIHtcbiAgICBhcnJheS5wdXNoKFwiRVwiKTtcbiAgICBpICs9IDE7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJvd3MobCkge1xuICBjb25zdCByb3dzID0gW107XG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKGkgPCBsKSB7XG4gICAgcm93cy5wdXNoKGdlblJvdyhsKSk7XG4gICAgaSArPSAxO1xuICB9XG4gIHJldHVybiByb3dzO1xufVxuXG5jb25zdCBnYW1lYm9hcmQgPSAobCwgcHZhbCkgPT4ge1xuICBjb25zdCBwTnVtID0gcHZhbDtcbiAgY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG4gIGNvbnN0IGFscGhhID0gYWxwaGFzLnNwbGl0KFwiXCIpO1xuICBjb25zdCByb3dzID0gZ2VuZXJhdGVSb3dzKGwpO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHNoaXBzO1xuXG4gIGNvbnN0IHZhbGlkTGVuZ3RoID0gKGxlbikgPT4ge1xuICAgIGxldCBzaGlwVHlwZSA9IDA7XG4gICAgZ2V0U2hpcHMoKS5mb3JFYWNoKChhU2hpcCkgPT4ge1xuICAgICAgaWYgKGFTaGlwLmxlbmd0aCA9PT0gbGVuKSB7XG4gICAgICAgIHNoaXBUeXBlICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGVuID09PSAyKSB7XG4gICAgICBpZiAoc2hpcFR5cGUgPiAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcyIHNoaXAgYWxyZWFkeSBvbiBsb2dnZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsZW4gPT09IDMpIHtcbiAgICAgIGlmIChzaGlwVHlwZSA+IDIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJzIgMyBzaGlwcyBhbHJlYWR5IG9uIGxvZ2dlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxlbiA9PT0gNSkge1xuICAgICAgaWYgKHNoaXBUeXBlID4gMSkge1xuICAgICAgICBjb25zb2xlLmxvZygnMiAzIHNoaXBzIGFscmVhZHkgb24gbG9nZ2VkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgfVxuICAgIFxuICAgIGlmIChsZW4gPT09IDQpIHtcbiAgICAgIGlmIChzaGlwVHlwZSA+IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJzQgc2hpcCBhbHJlYWR5IG9uIGxvZ2dlZCcpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBtYXRjaCA9IChjb29yZDEsIGNvb3JkMikgPT4ge1xuICAgIGlmIChjb29yZDFbMF0gPT09IGNvb3JkMlswXSAmJiBjb29yZDFbMV0gPT09IGNvb3JkMlsxXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwQnlOYW1lID0gKG5hbWUpID0+IHtcbiAgICBzaGlwcy5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBpZihzaGlwRWwubmFtZSA9PT0gbmFtZSl7XG4gICAgICAgIHJldHVybiBzaGlwRWw7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBjb25zdCBwcmludFNoaXBzID0gKHNoaXBzQXJyYXkpID0+IHtcbiAgICBzaGlwc0FycmF5LmZvckVhY2goc2hpcEVsID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXBFbC5uYW1lKVxuICAgICAgLy8gY29uc29sZS5sb2coc2hpcEVsLmNvb3JkcylcbiAgICB9KVxuICB9XG4gIGNvbnN0IG92ZXJsYXBzID0gKGFTaGlwLCBuZXdTaGlwKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RvIHRoZSBmb2xsb3dpbmcgb3ZlcmxhcD8nKVxuICAgIC8vIGNvbnNvbGUubG9nKGFTaGlwLm5hbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKG5ld1NoaXAubmFtZSk7XG4gICAgLy8gY29uc29sZS5sb2coJ25ldyBzaGlwIGlzIExPQ0FURUQgYXQ6JylcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdTaGlwLmNvb3JkcylcbiAgICBpZihhU2hpcC5sZW5ndGggPT09IG5ld1NoaXAubGVuZ3RoKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IG92ZXJsYXAgPSBmYWxzZTtcbiAgICBhU2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmQpID0+XG4gICAgICBuZXdTaGlwLmNvb3Jkcy5mb3JFYWNoKChjb29yZHApID0+IHtcbiAgICAgICAgaWYgKG1hdGNoKGNvb3JkcCwgY29vcmQpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZvdW5kIG92ZXJsYXAnKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3JkcCwgY29vcmQpXG4gICAgICAgICAgb3ZlcmxhcCA9IHRydWU7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBvdmVybGFwO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcEluTWF0cml4ID0gKGFTaGlwKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYVNoaXApXG4gICAgYVNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGFscGhhLmluZGV4T2YoY29vcmRbMF0pO1xuICAgICAgLy8gY29uc29sZS5sb2coY29vcmRbMF0pXG4gICAgICByb3dzW2luZGV4XVtjb29yZFsxXV0gPSBzaGlwcy5pbmRleE9mKGFTaGlwKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB1cGRhdGVNYXRyaXggPSAoKSA9PiB7XG4gICAgc2hpcHMuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgICAgcGxhY2VTaGlwSW5NYXRyaXgoc2hpcEVsKVxuICAgIH0pXG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcCA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHRoZVNoaXA7XG4gICAgLy8gY29uc29sZS5sb2coYHJlbW92aW5nIGEgJHtuYW1lfSBmcm9tYClcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwcylcbiAgICBzaGlwcy5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBpZihzaGlwRWwubmFtZSA9PT0gbmFtZSl7XG4gICAgICAgIHRoZVNoaXAgPSBzaGlwRWw7XG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBjb25zb2xlLmxvZyh0aGVTaGlwKTtcbiAgICBpZiAodGhlU2hpcCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGNvbnN0IGluZGV4ID0gc2hpcHMuaW5kZXhPZih0aGVTaGlwKVxuICAgICAgc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcHJpbnRTaGlwcyhzaGlwcyk7XG4gIH1cblxuICBjb25zdCBjdXJyZW50U2hpcE5hbWVzID0gKHNoaXBzQXJyKSA9PiB7XG4gICAgY29uc3QgbmFtZXMgPSBbXTtcbiAgICBzaGlwc0Fyci5mb3JFYWNoKHNoaXBFbCA9PiB7XG4gICAgICBuYW1lcy5wdXNoKHNoaXBFbC5uYW1lKVxuICAgIH0pXG4gICAgcmV0dXJuIG5hbWVzO1xuICB9XG4gIGNvbnN0IHNoaXBFeGlzdHMgPSAobikgPT4ge1xuICAgIGNvbnN0IG5hbWVzID0gY3VycmVudFNoaXBOYW1lcyhzaGlwcyk7XG4gICAgaWYobmFtZXMuaW5jbHVkZXMobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcblxuICBjb25zdCBwbGFjZVNoaXAgPSAobGVuLCBjb29yZCwgZGlyLCBuYW1lLCBjb21wKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3BsYWNpbmcgc2hpcDonKTtcbiAgICBjb25zb2xlLmxvZyhuYW1lKVxuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHNoaXBzIGFyZTonKVxuICAgIGNvbnNvbGUubG9nKHByaW50U2hpcHMoc2hpcHMpKVxuICAgIGxldCBnb29kTGVuZ3RoID0gdmFsaWRMZW5ndGgobGVuKTtcbiAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAvL2NoZWNrIGlmIHNoaXAgYWxyZWFkeSBleGlzdHMsIGlmIHNvLCByZW1vdmUgb2xkIHNoaXBcbiAgICBpZighY29tcCl7XG4gICAgICBpZiAoc2hpcEV4aXN0cyhuYW1lKSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVtb3Zpbmcgc2hpcCcpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICAgICAgcmVtb3ZlU2hpcChuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy90cnkgbWFraW5nIGEgc2hpcCwgaWYgaXQgbWFrZXMgb25lLCBjaGVjayBpZiBpdCBvdmVybGFwcywgaWYgaXQgZG9lcywgZG9uJ3QgcHVzaCBpdC4gXG4gICAgICBjb25zdCBuZXdTaGlwID0gc2hpcChsZW4sIGNvb3JkLCBkaXIsIG5hbWUpO1xuICAgICAgaWYobmV3U2hpcCAhPT0gbnVsbCl7XG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgaWYoc2hpcHMubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICBzaGlwcy5mb3JFYWNoKChhU2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKG92ZXJsYXBzKGFTaGlwLCBuZXdTaGlwKSkge1xuICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodmFsaWQgPT09IHRydWUpe1xuICAgICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7IFxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzaGlwIHB1c2hlZCB3YXM6JylcbiAgICAgICAgICBjb25zb2xlLmxvZyhuZXdTaGlwLm5hbWUpXG4gICAgICAgICAgcHJpbnRTaGlwcyhzaGlwcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRlTWF0cml4KG5ld1NoaXApO1xuICAgIFxuICAgIHJldHVybiB2YWxpZDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlY2VpdmVkIGF0dGFjaycgKyBjb29yZFswXSArIGNvb3JkWzFdKVxuICAgIGNvbnN0IGluZGV4ID0gYWxwaGEuaW5kZXhPZihjb29yZFswXSk7XG4gICAgY29uc3QgY3VycmVudFZhbCA9IHJvd3NbaW5kZXhdW2Nvb3JkWzFdXTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VmFsKVxuICAgIGlmICh0eXBlb2YgY3VycmVudFZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcm93c1tpbmRleF1bY29vcmRbMV1dID0gXCJIXCI7XG4gICAgICBzaGlwc1tjdXJyZW50VmFsXS5oaXQoY29vcmQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChjdXJyZW50VmFsID09PSBcIkVcIikge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2N1cnJlbnQgdmFsIHdhcyBlJylcbiAgICAgIHJvd3NbaW5kZXhdW2Nvb3JkWzFdXSA9IFwiTVwiO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICBsZXQgc3VuayA9IHRydWU7XG4gICAgLy8gY29uc29sZS5sb2coYHN1bmsgaXMgJHtzdW5rfWApXG4gICAgc2hpcHMuZm9yRWFjaChhU2hpcCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgJHthU2hpcC5uYW1lfSBpcyBzdW5rPyAke2FTaGlwLnN1bmt9YClcbiAgICAgIGNvbnNvbGUubG9nKGAke2FTaGlwLm5hbWV9IGhpdGxvZyBpczogJHthU2hpcC5oaXRMb2d9YClcbiAgICAgIGlmICghYVNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgc3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdW5rO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBCeVN0YXJ0ID0gKGNvb3JkKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2dldHRpbmcgc2hpcCcpXG4gICAgc2hpcHMuZm9yRWFjaChhU2hpcCA9PiB7XG4gICAgICBpZigoYVNoaXAuY29vcmRzWzBdWzBdPT09IGNvb3JkWzBdKSAmJiAoYVNoaXAuY29vcmRzWzBdWzFdPT09IGNvb3JkWzFdKSl7XG4gICAgICAgIHJldHVybiBhU2hpcDtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHsgcm93cywgc2hpcHMsIHBsYWNlU2hpcCwgZ2V0U2hpcHMsIG92ZXJsYXBzLCBtYXRjaCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuaywgcmVtb3ZlU2hpcCwgZ2V0U2hpcEJ5U3RhcnQsIGdldFNoaXBCeU5hbWUsIHBOdW0sIHVwZGF0ZU1hdHJpeH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7XG5cblxuIiwiY29uc3QgYWxwaGFzID0gXCJhYmNkZWZnaGlqXCI7XG5jb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcblxuY29uc3QgcHJpbnRTaGlwcyA9IChzaGlwc0FycmF5KSA9PiB7XG4gIHNoaXBzQXJyYXkuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBFbC5uYW1lKVxuICB9KVxufVxuXG5jb25zdCByZW1vdmVTdHlsZSA9IChwcmV2aW91c0VsZW0pID0+IHtcbiAgICBjb25zdCBkcmFnbGVhdmUgPSBuZXcgRXZlbnQoXCJkcmFnbGVhdmVcIik7XG4gICAgcHJldmlvdXNFbGVtLmRpc3BhdGNoRXZlbnQoZHJhZ2xlYXZlKTtcbn1cblxuY29uc3Qgc3R5bGVOb2RlID0gKHRoZUVsZW0pID0+IHtcbiAgICBjb25zdCBkcmFnb3ZlciA9IG5ldyBFdmVudChcImRyYWdvdmVyXCIpO1xuICAgIHRoZUVsZW0uZGlzcGF0Y2hFdmVudChkcmFnb3Zlcik7XG4gICAgICAgIH1cblxuY29uc3QgcGxheWVyUGxhY2UgPSAoY29sMSwgcm93MSwgbGVuZ3RoLCByb3QsIHBsYXllciwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IG5hbWU7XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBjb2wxIC0gMjtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGFscGhhW3JvdzEgLSAyXTtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gW3JvdywgY29sXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGlzUm90YXRlZCA9IHJvdDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzUm90YXRlZCk7XG4gICAgICAgICAgICBsZXQgZGlyO1xuICAgICAgICAgICAgaWYoaXNSb3RhdGVkID09PSAndHJ1ZScpe1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXIgPSAnZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBkaXIgPSAncic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXIpO1xuICAgICAgICAgICAgY29uc3QgdmFsaWQgPSBwbGF5ZXIucGxhY2VTaGlwKGxlbixjb29yZCxkaXIsbik7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICAgIH1cbi8vIGNvbnN0IHBsYWNlbWVudENoZWNrID0gKGxlbiwgcm90YXRlZCwgcm93MSwgY29sMSkgPT4ge1xuLy8gICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuLy8gICAgIGlmKHJvdGF0ZWQpe1xuLy8gICAgICAgICBpZihsZW4gPT09IDIpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCAxMSl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDMpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCAxMCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDQpe1xuLy8gICAgICAgICAgICAgaWYgKHJvdzEgPCA5KXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNSl7XG4vLyAgICAgICAgICAgICBpZiAocm93MSA8IDgpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICB9IFxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBpZihsZW4gPT09IDIpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCAxMSl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDMpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCAxMCl7XG4vLyAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfSBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihsZW4gPT09IDQpe1xuLy8gICAgICAgICAgICAgaWYgKGNvbDEgPCA5KXtcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9IFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmKGxlbiA9PT0gNSl7XG4vLyAgICAgICAgICAgICBpZiAoY29sMSA8IDgpe1xuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH0gXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgLy9jb25zb2xlLmxvZyhsZW4sIHJvdGF0ZWQsIGNvbDEsIHJvdzEsIHZhbGlkKTtcbi8vICAgICByZXR1cm4gdmFsaWQ7XG4vLyB9XG5cbmNvbnN0IGlzUm90YXRlZCA9ICh2YWwpID0+IHtcbiAgICBpZih2YWwubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgaWYodmFsWzddICE9PSAnMCcpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBwaXhlbHMyTGVuZ3RoID0gKGxlbikgPT4ge1xuICAgIGlmKGxlbiA9PT0gJzEyNXB4Jyl7XG4gICAgICAgIHJldHVybiA1XG4gICAgfVxuICAgIGlmKGxlbiA9PT0gJzEwMHB4Jyl7XG4gICAgICAgIHJldHVybiA0XG4gICAgfVxuICAgIGlmKGxlbiA9PT0gJzc1cHgnKXtcbiAgICAgICAgcmV0dXJuIDNcbiAgICB9XG4gICAgaWYobGVuID09PSAnNTBweCcpe1xuICAgICAgICByZXR1cm4gMlxuICAgIH1cbn1cblxuLy8gY29uc3QgYWxsQXJlYXMgPSAoYXJyYXlPZkFuY2hvcnMpID0+IHtcbi8vICAgICBjb25zdCBhbGxzaGlwQXJlYXMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5cbi8vIH1cblxuLy8gY29uc3QgY2FsY0FyZWEgPSAoY29sMSwgcm93MSwgbGVuLCByb3RhdGVkKSA9PiB7XG4vLyAgICAgbGV0IGNvbCA9IGNvbDE7XG4vLyAgICAgbGV0IHJvdyA9IHJvdzE7XG4vLyAgICAgY29uc3QgYXJyYXlPZlRha2VuRWxlbXMgPSBbXTtcbi8vICAgICBjb25zdCBhcnJheU9mVGFrZW5JRHMgPSBbXTtcbi8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuLTE7KXtcbi8vICAgICAgICAgbGV0IGlkO1xuLy8gICAgICAgICBpZighcm90YXRlZCl7XG4vLyAgICAgICAgICAgICByb3cgPSBhbHBoYVtyb3ddO1xuLy8gICAgICAgICAgICAgaWQgPSBgJHtyb3d9JHtjb2wgKyAxfW1gXG4vLyAgICAgICAgIGFycmF5T2ZUYWtlbklEcy5wdXNoKGlkKTtcbi8vICAgICAgICAgY29sICs9IDE7fVxuLy8gICAgICAgICBlbHNle1xuLy8gICAgICAgICAgICAgY29uc3QgdGhlUm93ID0gYWxwaGFbcm93XTtcbi8vICAgICAgICAgICAgIGlkID0gYCR7dGhlUm93fSR7Y29sfW1gXG4vLyAgICAgICAgIGFycmF5T2ZUYWtlbklEcy5wdXNoKGlkKTtcbi8vICAgICAgICAgcm93ICs9IDE7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaSs9MTtcbi8vICAgICB9XG4vLyAgICAgYXJyYXlPZlRha2VuSURzLmZvckVhY2goaWQgPT4ge1xuLy8gICAgICAgICBjb25zdCBlbGVtID0gZ2V0RWxlbWVudEJ5SWQoaWQpO1xuLy8gICAgICAgICBhcnJheU9mVGFrZW5FbGVtcy5wdXNoKGVsZW0pO1xuLy8gICAgIH0pXG4vLyAgICAgcmV0dXJuIGFycmF5T2ZUYWtlbkVsZW1zO1xuLy8gfVxuXG4vLyBjb25zdCBpc1Rha2VuID0gKG5vZGUpID0+IHtcbi8vICAgICBpZihub2RlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCl7XG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gZmFsc2U7XG4vLyB9XG5cbmNvbnN0IG1hbnVhbERyYWcgPSAobm9kZSwgcGxheWVyKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQm9hcmRcIik7XG4gIGNvbnN0IGJhbGwgPSBub2RlO1xuICBjb25zdCBsZW5ndGggPSBwaXhlbHMyTGVuZ3RoKG5vZGUuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGgpO1xuICBcbi8vICAgbGV0IGluZGV4ID0gQXJyYXkoYmFsbC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKGJhbGwpO1xuXG4gICBmdW5jdGlvbiBkcmFnSXRlbSAoZXZlbnQpIHtcbiAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJkcmFnSXRlbVwiKTtcbiAgICAvLyAoMSkgc3RhcnQgdGhlIHByb2Nlc3NcbiAgICBjb25zdCBvZ1BhcmVudCA9IGJhbGwucGFyZW50RWxlbWVudDtcbiAgICAvLyBjb25zb2xlLmxvZygnT0cgcGFyZW50IGlzOicpXG4gICAgLy8gY29uc29sZS5sb2cob2dQYXJlbnQpXG4gICAgbGV0IHJvdGF0ZWQgPSBub2RlLnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnJyk7XG4gICAgcm90YXRlZCA9IGlzUm90YXRlZChyb3RhdGVkKTtcbiAgICBiYWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGVkJywgcm90YXRlZClcbiAgICAvLyBjb25zb2xlLmxvZyhsZW5ndGgsIHJvdGF0ZWQpXG4gICAgLy8gKDIpIHByZXBhcmUgdG8gbW92aW5nOiBtYWtlIGFic29sdXRlIGFuZCBvbiB0b3AgYnkgei1pbmRleFxuICAgIGJhbGwuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYmFsbC5zdHlsZS56SW5kZXggPSAxMDAwO1xuXG4gICAgLy8gbW92ZSBpdCBvdXQgb2YgYW55IGN1cnJlbnQgcGFyZW50cyBkaXJlY3RseSBpbnRvIGJvZHlcbiAgICAvLyB0byBtYWtlIGl0IHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8gdGhlIGJvZHlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChiYWxsKTtcbiAgICAvLyBib2FyZC5hcHBlbmRDaGlsZChiYWxsKTtcbiAgICAvLyAuLi5hbmQgcHV0IHRoYXQgYWJzb2x1dGVseSBwb3NpdGlvbmVkIGJhbGwgdW5kZXIgdGhlIGN1cnNvclxuICAgIGxldCBhbklEO1xuICAgIGxldCB0aGVFbGVtO1xuICAgIGxldCBwcmV2aW91c0VsZW07XG4gICAgLy8gY2VudGVycyB0aGUgYmFsbCBhdCAocGFnZVgsIHBhZ2VZKSBjb29yZGluYXRlc1xuICAgIGZ1bmN0aW9uIG1vdmVBdChwYWdlWCwgcGFnZVkpIHtcbiAgICAgIGJhbGwuc3R5bGUubGVmdCA9IGAke3BhZ2VYIC0gYmFsbC5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xuICAgICAgYmFsbC5zdHlsZS50b3AgPSBgJHtwYWdlWSAtIGJhbGwub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XG4gICAgICBjb25zdCBkcm9wRWxlbUxpc3QgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChwYWdlWCwgcGFnZVkpO1xuXG4gICAgICBkcm9wRWxlbUxpc3QuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xhc3NsaXN0JylcbiAgICAgICAgLy8gY29uc29sZS5sb2coQXJyYXkuZnJvbShlbGVtLmNsYXNzTGlzdCkpXG4gICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidW5pdG1cIikpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBjb250YWlucyBpdCEgcmV0dXJuIElEOiAke2VsZW0uaWR9YCk7XG4gICAgICAgICAgICBhbklEID0gZWxlbS5pZDtcbiAgICAgICAgICAgIHRoZUVsZW0gPSBlbGVtO1xuICAgICAgICAgICAgc2V0VGltZW91dChzdHlsZU5vZGUodGhlRWxlbSksIDUwMClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHByZXZpb3VzRWxlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmIChlbGVtLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtwcmV2aW91c0VsZW0uaWR9IHZzLiAke2VsZW0uaWR9YCk7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzRWxlbSAhPT0gZWxlbSkge1xuICAgICAgICAgICAgICAgICAgcmVtb3ZlU3R5bGUocHJldmlvdXNFbGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcHJldmlvdXNFbGVtID0gdGhlRWxlbTtcbiAgICAgIC8vIHN0eWxlTm9kZShkcm9wRWxlbSlcbiAgICB9XG5cbiAgICBtb3ZlQXQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2KSB7XG4gICAgICBtb3ZlQXQoZXYucGFnZVgsIGV2LnBhZ2VZKTtcbiAgICAgIC8vIGNvbnN0IHVuRWxlbSA9ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcmFnaG92ZXInKVswXTtcbiAgICAgIC8vIGRyb3BFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdob3ZlcicpXG4gICAgfVxuXG4gICAgLy8gKDMpIG1vdmUgdGhlIGJhbGwgb24gbW91c2Vtb3ZlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgbGV0IGluZm87XG4gICAgLy8gKDQpIGRyb3AgdGhlIGJhbGwsIHJlbW92ZSB1bm5lZWRlZCBoYW5kbGVyc1xuICAgIGJhbGwub25tb3VzZXVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJNT1VTRVVQIVwiKTtcbiAgICAgIGJhbGwuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuICAgICAgYmFsbC5zdHlsZS5sZWZ0ID0gXCJcIjtcbiAgICAgIGJhbGwuc3R5bGUudG9wID0gXCJcIjtcbiAgICAgIGJhbGwuc3R5bGUuekluZGV4ID0gXCJcIjtcbiAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdJdGVtXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coYW5JRCk7XG4gICAgICBpZiAoYW5JRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSUQgV09SS0VEIVwiKTtcbiAgICAgICAgY29uc3QgbG9jID0gYW5JRC5zcGxpdChcIlwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG9jKTtcbiAgICAgICAgY29uc3QgY29sMSA9IE51bWJlcihsb2NbMV0pICsgMjtcbiAgICAgICAgY29uc3QgY29sMiA9IGNvbDEgKyAxO1xuICAgICAgICBjb25zdCByb3cxID0gYWxwaGEuaW5kZXhPZihsb2NbMF0pICsgMjtcbiAgICAgICAgY29uc3Qgcm93MiA9IHJvdzEgKyAxO1xuICAgICAgICAvLyBjb25zdCBkcm9wc2hpcCA9IG5ldyBDdXN0b21FdmVudChcImRyb3BzaGlwXCIseyBkZXRhaWw6IHtjb2w6IGNvbDEtMSwgcm93OiAocm93MS0yKSwgbGVuOiBsZW5ndGgsIHJvdDogcm90YXRlZH19ICk7XG4gICAgICAgIC8vIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZHJvcHNoaXApXG4gICAgICAgIC8vIGNvbnN0IG5vdFRha2VuID0gKCFpc1Rha2VuKHRoZUVsZW0pKTtcbiAgICAgICAgLy8gY29uc3QgdmFsaWQgPSBwbGFjZW1lbnRDaGVjayhsZW5ndGgsIHJvdGF0ZWQsIHJvdzEsIGNvbDEpICYmIG5vdFRha2VuO1xuICAgICAgICBjb25zdCBhbVJvdGF0ZWQgPSBiYWxsLmRhdGFzZXQucm90YXRlZDtcbiAgICAgICAgY29uc3QgaXNWYWxpZExvYyA9IHBsYXllclBsYWNlKGNvbDEsIHJvdzEsIGxlbmd0aCwgYW1Sb3RhdGVkLCBwbGF5ZXIsIGJhbGwuZGF0YXNldC5uYW1lKSBcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1dBcyBJIFZBTElEPycpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlzVmFsaWRMb2MpXG4gICAgICAgIGlmKGlzVmFsaWRMb2Mpe1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzVmFsaWRMb2MpXG4gICAgICAgICAgICBiYWxsLnN0eWxlLmdyaWRBcmVhID0gYCR7cm93MX0vJHtjb2wxfS8ke3JvdzJ9LyR7Y29sMn1gO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYmFsbCk7XG4gICAgICAgICAgICBpbmZvID0gW1tyb3cxLCBjb2wxXSwgbGVuZ3RoLCByb3RhdGVkXTtcbiAgICAgICAgICAgIC8vIGlmKG9nUGFyZW50LmNsYXNzTGlzdFswXSAhPT0gJ3NoaXBIb2xkJyl7XG4gICAgICAgICAgICAvLyAgICAgcGxheWVyLnJlbW92ZVNoaXAoYmFsbC5kYXRhc2V0Lm5hbWUpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gcHJpbnRTaGlwcyhwbGF5ZXIuc2hpcHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGUgb2cgcGFyZW50IGlzIG5vdzogJHtvZ1BhcmVudH1gKVxuICAgICAgICAgIG9nUGFyZW50LmFwcGVuZENoaWxkKGJhbGwpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSBcbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgdGhlIG9nIHBhcmVudCBpcyBub3c6ICR7b2dQYXJlbnR9YClcbiAgICAgICAgb2dQYXJlbnQuYXBwZW5kQ2hpbGQoYmFsbCk7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgY29uc3Qgc3R5bGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJhZ2hvdmVyJyk7XG4gICAgICBBcnJheS5mcm9tKHN0eWxlZCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgcmVtb3ZlU3R5bGUoZWxlbWVudCl9KVxuICAgICAgYmFsbC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgcmV0dXJuIGluZm87XG4gICAgfTtcbiAgfTtcbiAgYmFsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnSXRlbSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hbnVhbERyYWc7XG5cbi8vd2hlbiBhIHNoaXAgdGhhdCBoYXMgYmVlbiBwbGFjZWQgaXMgcGljayB1cCAocmVhZCBwYXJlbnQgbm9kZSkgT1Igcm90YXRlZCFcbi8vdGhlbiBpZiBpdCBjcmVhdGVzIGEgdmFsaWQgc2hpcCwgb3ZlciB3cml0ZSB0aGUgb2xkIHNoaXAuXG5cblxuIiwiZnVuY3Rpb24gdmFsaWRFbnRyeShsZW5ndGgsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbiwgYWxwaGEpIHtcbiAgLy8gY29uc29sZS5sb2coYHN0YXJ0IHBvaW50IGlzICR7c3RhcnRQb2ludH1gKVxuICBpZiAoZGlyZWN0aW9uID09PSBcInJcIikge1xuICAgIGlmIChzdGFydFBvaW50WzFdICsgbGVuZ3RoID4gMTApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0UG9pbnRbMV0pXG4gICAgICAvLyBjb25zb2xlLmxvZyhzdGFydFBvaW50WzFdICsgbGVuZ3RoKVxuICAgICAgLy8gY29uc29sZS5sb2coJ2dvZXMgdG9vIGZhciByaWdodCcpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwidVwiKSB7XG4gICAgaWYgKGFscGhhLmluZGV4T2Yoc3RhcnRQb2ludFswXSkgLSBsZW5ndGggLSAxIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcImRcIikge1xuICAgIGNvbnNvbGUubG9nKGFscGhhLmluZGV4T2ZcbiAgICAgIChzdGFydFBvaW50WzBdKSlcbiAgICAgIGNvbnNvbGUubG9nKGFscGhhLmluZGV4T2ZcbiAgICAgICAgKHN0YXJ0UG9pbnRbMF0pK2xlbmd0aCApXG4gICAgaWYgKGFscGhhLmluZGV4T2Yoc3RhcnRQb2ludFswXSkgKyBsZW5ndGggID4gMTApIHtcbiAgICAgIGNvbnNvbGUubG9nKGFscGhhLmluZGV4T2ZcbiAgICAgICAgKHN0YXJ0UG9pbnRbMF0pKVxuICAgICAgICBjb25zb2xlLmxvZyhhbHBoYS5pbmRleE9mXG4gICAgICAgICAgKHN0YXJ0UG9pbnRbMF0pK2xlbmd0aCApXG4gICAgICBjb25zb2xlLmxvZygnZ29lcyB0b28gZmFyIGRvd24nKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoZGlyZWN0aW9uID09PSBcImxcIikge1xuICAgIGlmIChzdGFydFBvaW50WzFdIC0gbGVuZ3RoIDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByaWdodChsZW5ndGgsIHN0YXJ0UG9pbnQpIHtcbiAgLy8gY29uc29sZS5sb2coJ1JJR0hUJylcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgY29uc3QgeCA9IHN0YXJ0UG9pbnRbMF07XG4gIGxldCB5ID0gc3RhcnRQb2ludFsxXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGFycmF5LnB1c2goW3gsIHldKTtcbiAgICB5ICs9IDE7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGxlZnQobGVuZ3RoLCBzdGFydFBvaW50KSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGNvbnN0IHggPSBzdGFydFBvaW50WzBdO1xuICBsZXQgeSA9IHN0YXJ0UG9pbnRbMV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhcnJheS5wdXNoKFt4LCB5XSk7XG4gICAgeSAtPSAxO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gdXAobGVuZ3RoLCBzdGFydFBvaW50LCBhbHBoYSkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBsZXQgaW5kZXggPSBhbHBoYS5pbmRleE9mKHN0YXJ0UG9pbnRbMF0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgeCA9IGFscGhhW2luZGV4XTtcbiAgICBjb25zdCB5ID0gc3RhcnRQb2ludFsxXTtcbiAgICBpbmRleCAtPSAxO1xuICAgIGFycmF5LnB1c2goW3gsIHldKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGRvd24obGVuZ3RoLCBzdGFydFBvaW50LCBhbHBoYSkge1xuICBjb25zb2xlLmxvZygnRE93TicpXG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGxldCBpbmRleCA9IGFscGhhLmluZGV4T2Yoc3RhcnRQb2ludFswXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB4ID0gYWxwaGFbaW5kZXhdO1xuICAgIGNvbnN0IHkgPSBzdGFydFBvaW50WzFdO1xuICAgIGluZGV4ICs9IDE7XG4gICAgYXJyYXkucHVzaChbeCwgeV0pO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDb29yZGluYXRlcyhsZW5ndGgsIHN0YXJ0UG9pbnQsIGRpcmVjdGlvbiwgYWxwaGEpIHtcbiAgbGV0IGNvb3JkcztcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyXCIpIHtcbiAgICBjb29yZHMgPSByaWdodChsZW5ndGgsIHN0YXJ0UG9pbnQpO1xuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwidVwiKSB7XG4gICAgY29vcmRzID0gdXAobGVuZ3RoLCBzdGFydFBvaW50LCBhbHBoYSk7XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkXCIpIHtcbiAgICBjb29yZHMgPSBkb3duKGxlbmd0aCwgc3RhcnRQb2ludCwgYWxwaGEpO1xuICB9XG4gIGlmIChkaXJlY3Rpb24gPT09IFwibFwiKSB7XG4gICAgY29vcmRzID0gbGVmdChsZW5ndGgsIHN0YXJ0UG9pbnQpO1xuICB9XG4gIHJldHVybiBjb29yZHM7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSGl0TG9nKGwpIHtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IGwpIHtcbiAgICBhcnJheS5wdXNoKDApO1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmNvbnN0IG5hbWVTaGlwID0gKGwpID0+IHtcbiAgaWYgKGwgPT09IDUpe1xuICAgIHJldHVybiAnY2Fycmllcic7XG4gIH1cbiAgaWYgKGwgPT09IDQpe1xuICAgIHJldHVybiAnYmF0dGxlc2hpcCc7XG4gIH1cbiAgaWYgKGwgPT09IDMpe1xuICAgIHJldHVybiAnY3J1aXNlcic7XG4gIH1cbiAgaWYgKGwgPT09IDIpe1xuICAgIHJldHVybiAnZGVzdHJveWVyJztcbiAgfVxuICByZXR1cm4gJ2Vycm9yJ1xufVxuXG5cblxuY29uc3Qgc2hpcCA9IChsLCBzdGFydFBvaW50LCBkaXJlY3Rpb24sIHRoZU5hbWUpID0+IHtcbiAgY29uc3QgbmFtZSA9IHRoZU5hbWU7XG4gIGNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuICBjb25zdCBhbHBoYSA9IGFscGhhcy5zcGxpdChcIlwiKTtcbiAgY29uc3QgaXNWYWxpZCA9IHZhbGlkRW50cnkobCwgc3RhcnRQb2ludCwgZGlyZWN0aW9uLCBhbHBoYSk7XG4gIC8vIGNvbnNvbGUubG9nKGlzVmFsaWQpO1xuICBpZiAoIWlzVmFsaWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aCA9IGw7XG4gIGNvbnN0IGNvb3JkcyA9IGdlbmVyYXRlQ29vcmRpbmF0ZXMobCwgc3RhcnRQb2ludCwgZGlyZWN0aW9uLCBhbHBoYSk7XG4gIGNvbnN0IGhpdExvZyA9IGdlbmVyYXRlSGl0TG9nKGwpO1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYGhpdGxvZyBpcyAke2hpdExvZ31gKTtcbiAgICBpZiAoIWhpdExvZy5pbmNsdWRlcygwKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2hpdGxvZyBkaWQgbm90IGluY2x1ZSBhIHplcm8nKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3Qgc3VuayA9IGlzU3VuaygpO1xuXG4gIGNvbnN0IGdldENvb3JkcyA9ICgpID0+IGNvb3JkcztcbiAgY29uc3QgZ2V0SGl0bG9nID0gKCkgPT4gaGl0TG9nO1xuXG4gIGNvbnN0IGhpdCA9IChjb29yZFBhaXIpID0+IHtcbiAgICBsZXQgaW5kZXg7XG4gICAgY29vcmRzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGlmIChjb29yZGluYXRlWzBdID09PSBjb29yZFBhaXJbMF0gJiYgY29vcmRpbmF0ZVsxXSA9PT0gY29vcmRQYWlyWzFdKSB7XG4gICAgICAgIGluZGV4ID0gY29vcmRzLmluZGV4T2YoY29vcmRpbmF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhpdExvZ1tpbmRleF0gPSAxO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBzaW5rKCkge1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgaGl0TG9nW2ldID0gMTtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGhpdExvZztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBsZW5ndGgsXG4gICAgY29vcmRzLFxuICAgIGhpdExvZyxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIGdldENvb3JkcyxcbiAgICBnZXRIaXRsb2csXG4gICAgc3VuayxcbiAgICBzaW5rLFxuICAgIG5hbWVTaGlwXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGRyYXdMYXlvdXQgZnJvbSBcIi4vR1VJTWFpblwiO1xuaW1wb3J0IGdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vR1VJUmVuZGVyXCI7XG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IGFscGhhcyA9IFwiYWJjZGVmZ2hpalwiO1xuY29uc3QgYWxwaGEgPSBhbHBoYXMuc3BsaXQoXCJcIik7XG5cbmNvbnN0IHByaW50U2hpcHMgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIHNoaXBzQXJyYXkuZm9yRWFjaChzaGlwRWwgPT4ge1xuICAgICAgY29uc29sZS5sb2coc2hpcEVsLm5hbWUpXG4gICAgICBjb25zb2xlLmxvZyhzaGlwRWwuY29vcmRzKVxuICAgIH0pXG4gIH1cblxuLy8gY29uc3QgcGxheWVyID0gKG51bSkgPT4ge1xuLy8gICAgIGNvbnN0IHBsYXllck51bSA9IG51bTtcbi8vICAgICBjb25zdCBwR2FtZWJvYXJkID0gZ2FtZWJvYXJkKDEwKTtcbi8vICAgICByZXR1cm4ge3BsYXllck51bSwgcEdhbWVib2FyZH1cbi8vIH07XG4vLyBjb25zdCBwbGF5ZXIxID0gcGxheWVyKDEpO1xuY29uc3QgcmVwbGF5ID0gKCkgPT4ge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jaGlsZHJlbikuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnJlbW92ZSgpO1xuICAgIH0pXG4gICAgaW5pdGlhbERyYXcoKTtcbn1cblxuY29uc3QgaW5pdGlhbERyYXcgPSAoKSA9PiB7XG4gICAgY29uc3QgdHVybkJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHVybkJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAndHVybkJvYXJkJyk7XG4gICAgdHVybkJvYXJkLnRleHRDb250ZW50ID0gJzEnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodHVybkJvYXJkKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gICAgY29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVzc2FnZUJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZUJvYXJkJyk7XG4gICAgbWVzc2FnZUJvYXJkLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgc2hpcHMuIFByZXNzIFIga2V5IHRvIHJvdGF0ZS4gV2hlbiBmaW5pc2hlZCBsb2NrIHlvdXIgc2hpcHMgaW4gdG8gYmVnaW4gdGhlIGdhbWUuJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VCb2FyZCk7XG4gICAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG4gICAgICAgICAgICBwbGF5QWdhaW4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBwbGF5QWdhaW4uc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5QWdhaW4nKTtcbiAgICAgICAgICAgIHBsYXlBZ2Fpbi50ZXh0Q29udGVudCA9ICdQTEFZIEFHQUlOJztcbiAgICAgICAgICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCByZXBsYXkpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5pZCA9ICdjb250YWluZXInO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuXG5cblxuY29uc3QgcGxheWVyMSA9IGdhbWVib2FyZCgxMCwgMSk7XG5jb25zdCBjb21wdXRlciA9IGdhbWVib2FyZCgxMCwgMik7XG5cblxuY29uc3QgbmFtZVNoaXAgPSAobCkgPT4ge1xuICAgIGlmIChsID09PSA1KXtcbiAgICAgIHJldHVybiAnY2Fycmllcic7XG4gICAgfVxuICAgIGlmIChsID09PSA0KXtcbiAgICAgIHJldHVybiAnYmF0dGxlc2hpcCc7XG4gICAgfVxuICAgIGlmIChsID09PSAzKXtcbiAgICAgIHJldHVybiAnY3J1aXNlcic7XG4gICAgfVxuICAgIGlmIChsID09PSAyKXtcbiAgICAgIHJldHVybiAnZGVzdHJveWVyJztcbiAgICB9XG4gICAgcmV0dXJuICdlcnJvcidcbiAgfVxuY29uc3QgZ2VuUmFuZG9tQ29vcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgeCA9IGFscGhhc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICByZXR1cm4gW3gseV07XG59XG5jb25zdCBnZW5SYW5kb21EaXIgPSAoKSA9PiB7XG4gICAgbGV0IGRpciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIGlmKGRpciA9PT0gMSl7XG4gICAgICAgIGRpciA9ICdkJ1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBkaXIgPSAncidcbiAgICB9XG4gICAgcmV0dXJuIGRpcjtcbn1cblxuY29uc3QgcGxhY2VDb21wU2hpcCA9IChsKSA9PiB7XG4gICAgY29uc3QgY29vcmQgPSBnZW5SYW5kb21Db29yZCgpO1xuICAgIGNvbnN0IGRpciA9IGdlblJhbmRvbURpcigpO1xuICAgIGNvbnN0IHZhbGlkID0gY29tcHV0ZXIucGxhY2VTaGlwKGwsIGNvb3JkLCBkaXIsIG5hbWVTaGlwKGwpLCB0cnVlKVxuICAgIGNvbnNvbGUubG9nKHZhbGlkKTtcbiAgICBjb25zb2xlLmxvZyhsLCBjb29yZCwgZGlyLCBuYW1lU2hpcChsKSlcbiAgICBpZighdmFsaWQpe1xuICAgICAgICBwbGFjZUNvbXBTaGlwKGwpO1xuICAgIH1cbn1cblxuXG4gICAgcGxhY2VDb21wU2hpcCg1KVxuICAgIHBsYWNlQ29tcFNoaXAoNClcbiAgICBwbGFjZUNvbXBTaGlwKDMpXG4gICAgcGxhY2VDb21wU2hpcCgzKVxuICAgIHBsYWNlQ29tcFNoaXAoMilcblxuICAgICAgIFxuICAgIFxuXG5wcmludFNoaXBzKGNvbXB1dGVyLnNoaXBzKTtcbmRyYXdMYXlvdXQocGxheWVyMSwgY29tcHV0ZXIpO1xuXG59XG5cbmluaXRpYWxEcmF3KClcblxuXG5cblxuXG5cblxuLy93aGVuIGEgc2hpcCBpcyBjaGFuZ2VkIChyKSBvciBwaWNrZWQgdXAgYW5kIG1vdmVkXG4vL0FORCBuZXcgcG9zaXRpb24gaXMgdmFsaWRcbi8vZGVsZXRlIG9sZCBzaGlwLCBydW4gbmV3IHNoaXBcblxuXG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wc2hpcFwiLCBwbGF5ZXJQbGFjZSk7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=