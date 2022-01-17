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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Lato\", sans-serif;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  background-color: orange;\n  height: 100%;\n}\n\n#header {\n  background-color: lightblue;\n  height: 50px;\n  font-size: 36px;\n  padding-left: 20px;\n}\n\n#footer {\n  background-color: lightblue;\n  height: 36px;\n  font-size: 24px;\n  padding-left: 20px;\n}\n\n#content {\n  background-color: lightgray;\n  display: flex;\n}\n\n/* Fixed sidenav, full height */\n.sidenav {\n  height: 100%;\n  width: 200px;\n  /* position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0; */\n  background-color: #111;\n  overflow-x: hidden;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n/* On mouse-over */\n.sidenav a:hover, .dropdown-btn:hover {\n  color: #f1f1f1;\n}\n\n/* Style the sidenav links and the dropdown button */\n.sidenav a, .dropdown-btn {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 20px;\n  color: #818181;\n  display: block;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  outline: none;\n}\n\n/* On mouse-over */\n.sidenav a:hover, .dropdown-btn:hover {\n  color: #f1f1f1;\n}\n\n/* Main content */\n.main {\n  margin-left: 25px; /* Same as the width of the sidenav */\n  font-size: 20px; /* Increased text to enable scrolling */\n  padding: 0px 10px;\n}\n\n/* Add an active class to the active dropdown button */\n.active {\n  background-color: green;\n  color: white;\n}\n\n/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\n.dropdown-container {\n  display: none;\n  background-color: #262626;\n  padding-left: 8px;\n}\n\n.dropdown-container * {\n  margin-top: 5px;\n  color: white;\n}\n\n.dropdown-container button {\n  color: black;\n}\n\n/* Optional: Style the caret down icon */\n.fa-caret-down {\n  float: right;\n  padding-right: 8px;\n}\n\n/* Some media queries for responsiveness */\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n\n/* The popup form - hidden by default */\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 150px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n\n/* Add styles to the form container */\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n/* Full-width input fields */\n.form-container input[type=text] {\n  width: 100%;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* When the inputs get focus, do something */\n.form-container input[type=text]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n.form-container .btn {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom:10px;\n  opacity: 0.8;\n}\n\n/* Add a red background color to the cancel button */\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n\n#to-do-holder {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n#to-do-holder div {\n  border: solid black 2px;\n  border-radius: 25px;\n  margin: 5px;\n  padding: 0px 15px;\n}\n\n.main h1 {\n  text-align: center;\n}\n\n#to-do-holder button {\n  border-radius: 25px;\n  height: 80px;\n  min-width: 80px;\n  font-size: 60px;\n  align-self: center;\n  margin: 15px;\n}\n\n#to-do-holder button:hover {\n  background-color: rgb(230, 255, 194);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,aAAa;AACf;;AAEA,+BAA+B;AAC/B;EACE,YAAY;EACZ,YAAY;EACZ;;;YAGU;EACV,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA,kBAAkB;AAClB;EACE,cAAc;AAChB;;AAEA,oDAAoD;AACpD;EACE,yBAAyB;EACzB,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,aAAa;AACf;;AAEA,kBAAkB;AAClB;EACE,cAAc;AAChB;;AAEA,iBAAiB;AACjB;EACE,iBAAiB,EAAE,qCAAqC;EACxD,eAAe,EAAE,uCAAuC;EACxD,iBAAiB;AACnB;;AAEA,sDAAsD;AACtD;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA,wJAAwJ;AACxJ;EACE,aAAa;EACb,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA,wCAAwC;AACxC;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA,0CAA0C;AAC1C;EACE,UAAU,iBAAiB,CAAC;EAC5B,YAAY,eAAe,CAAC;AAC9B;;AAEA,uCAAuC;AACvC;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,YAAY;EACZ,yBAAyB;EACzB,UAAU;AACZ;;AAEA,qCAAqC;AACrC;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;AACzB;;AAEA,4BAA4B;AAC5B;EACE,WAAW;EACX,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;AACrB;;AAEA,4CAA4C;AAC5C;EACE,sBAAsB;EACtB,aAAa;AACf;;AAEA,4CAA4C;AAC5C;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,YAAY;AACd;;AAEA,oDAAoD;AACpD;EACE,qBAAqB;AACvB;;AAEA,sCAAsC;AACtC;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["body {\n  font-family: \"Lato\", sans-serif;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  background-color: orange;\n  height: 100%;\n}\n\n#header {\n  background-color: lightblue;\n  height: 50px;\n  font-size: 36px;\n  padding-left: 20px;\n}\n\n#footer {\n  background-color: lightblue;\n  height: 36px;\n  font-size: 24px;\n  padding-left: 20px;\n}\n\n#content {\n  background-color: lightgray;\n  display: flex;\n}\n\n/* Fixed sidenav, full height */\n.sidenav {\n  height: 100%;\n  width: 200px;\n  /* position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0; */\n  background-color: #111;\n  overflow-x: hidden;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n/* On mouse-over */\n.sidenav a:hover, .dropdown-btn:hover {\n  color: #f1f1f1;\n}\n\n/* Style the sidenav links and the dropdown button */\n.sidenav a, .dropdown-btn {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 20px;\n  color: #818181;\n  display: block;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  outline: none;\n}\n\n/* On mouse-over */\n.sidenav a:hover, .dropdown-btn:hover {\n  color: #f1f1f1;\n}\n\n/* Main content */\n.main {\n  margin-left: 25px; /* Same as the width of the sidenav */\n  font-size: 20px; /* Increased text to enable scrolling */\n  padding: 0px 10px;\n}\n\n/* Add an active class to the active dropdown button */\n.active {\n  background-color: green;\n  color: white;\n}\n\n/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\n.dropdown-container {\n  display: none;\n  background-color: #262626;\n  padding-left: 8px;\n}\n\n.dropdown-container * {\n  margin-top: 5px;\n  color: white;\n}\n\n.dropdown-container button {\n  color: black;\n}\n\n/* Optional: Style the caret down icon */\n.fa-caret-down {\n  float: right;\n  padding-right: 8px;\n}\n\n/* Some media queries for responsiveness */\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n\n/* The popup form - hidden by default */\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 150px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n\n/* Add styles to the form container */\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n/* Full-width input fields */\n.form-container input[type=text] {\n  width: 100%;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* When the inputs get focus, do something */\n.form-container input[type=text]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n.form-container .btn {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom:10px;\n  opacity: 0.8;\n}\n\n/* Add a red background color to the cancel button */\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n\n#to-do-holder {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n#to-do-holder div {\n  border: solid black 2px;\n  border-radius: 25px;\n  margin: 5px;\n  padding: 0px 15px;\n}\n\n.main h1 {\n  text-align: center;\n}\n\n#to-do-holder button {\n  border-radius: 25px;\n  height: 80px;\n  min-width: 80px;\n  font-size: 60px;\n  align-self: center;\n  margin: 15px;\n}\n\n#to-do-holder button:hover {\n  background-color: rgb(230, 255, 194);\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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

/***/ "./src/projectDOM.js":
/*!***************************!*\
  !*** ./src/projectDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateListeners": () => (/* binding */ activateListeners)
/* harmony export */ });
/* harmony import */ var _projectHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectHandler */ "./src/projectHandler.js");


function dropDown(){
    let dropdown = document.getElementsByClassName("dropdown-btn");
    let i;

    for (i = 0; i < dropdown.length; i++) {
    //dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    //});
    }
}

function openForm() {
    let form = document.getElementById("myForm")
    form.style.display = "block";
  }
  
  function closeForm() {
    let form = document.getElementById("myForm")
    _clearForm();
    form.style.display = "none";
  }

  function _clearForm(){
    const forms = document.getElementsByClassName('input');
    for(let i=0;i<forms.length;i++){
        forms[i].value = "";
    }
  }

function createProject(){
    let input  = document.getElementById('project-name');
    let name = input.value;
    (0,_projectHandler__WEBPACK_IMPORTED_MODULE_0__.newProject)(name);
    _clearForm();
    closeForm();
}

  function activateListeners(){
    const dropDownBtn = document.getElementById('dropdown-btn');
    dropDownBtn.addEventListener('click', dropDown);
    const newProject = document.getElementById('new-project');
    const cancelNewProject = document.getElementById('cancel-project');
    newProject.addEventListener('click', openForm);
    cancelNewProject.addEventListener('click', closeForm);
    const addBtn = document.getElementById('add-project');
    addBtn.addEventListener('click', createProject);
}



/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "displayToDo": () => (/* binding */ displayToDo)
/* harmony export */ });
/* harmony import */ var _toDoHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoHandler */ "./src/toDoHandler.js");


function newProject(name) {
    let project = {
        name: name,
        todos: [],
    }
    projects.push(project);
    _addProjectToPage(project);
    return project;
}

function newToDo(title, description, dueDate, priority){
    let toDo = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority,
    }

    return toDo;
}

function _addProjectToPage(project){
    const container = document.getElementById('dropdown-container');
    let addProject = document.createElement('a');
        let addProjectWrapper = document.createElement('div');
        addProject.textContent = project.name;
        //addProject.classList.add(project.name);
        addProject.addEventListener('click', function(){
            displayToDo(project)
        });
        addProjectWrapper.appendChild(addProject);
        container.appendChild(addProjectWrapper);
}

function displayToDo(project){
    const container = document.getElementById('to-do-holder');
    const projectHeading = document.getElementById('to-do-heading');
    projectHeading.textContent = project.name;
    _removeAllChildNodes(container);
    // const projectTitle = document.createElement('div');
    // projectTitle.textContent = project.name;
    // container.appendChild(projectTitle);
    let addNewTaskBtn = document.createElement('button');
    addNewTaskBtn.textContent = "+";
    addNewTaskBtn.addEventListener('click', function(){
        (0,_toDoHandler__WEBPACK_IMPORTED_MODULE_0__.addToDo)(project)//toDoHandler.js
    });
    _appendToDoNodes(project, container);
    container.appendChild(addNewTaskBtn);
}


function _appendToDoNodes(project, container){
    console.log(project.todos);
    for(let i = 0; i<project.todos.length;i++){
        let todo = project.todos[i];
        if(todo.title !== null && todo.dueDate !== null){
            let toDo = document.createElement('div');
            let heading = document.createElement('h1');
            heading.textContent = todo.title;
            let date = document.createElement('h2');
            date.textContent = todo.dueDate;
            toDo.appendChild(heading);
            toDo.appendChild(date);
            container.appendChild(toDo);
        }
    }
}

function _removeAllChildNodes(parent) {
    //console.log(parent.firstChild);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let projects = [];

(function testingValues(){
    let gamingToDo = newToDo("Play", "gotta game", "tomorrow", 5);
let gamingToDo2 = newToDo("Play", "gotta game", "tomorrow", 5);
let gamingToDo3 = newToDo("Play", "gotta game", "tomorrow", 5);
let gamingToDo4 = newToDo("Play", "gotta game", "tomorrow", 5);
let gaming = newProject("Gaming");
let chores = newProject("Chores");
gaming.todos.push(gamingToDo);
gaming.todos.push(gamingToDo2);
gaming.todos.push(gamingToDo3);
gaming.todos.push(gamingToDo4);
})();




/***/ }),

/***/ "./src/toDoDOM.js":
/*!************************!*\
  !*** ./src/toDoDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "activateListeners": () => (/* binding */ activateListeners)
/* harmony export */ });
/* harmony import */ var _toDoHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoHandler */ "./src/toDoHandler.js");
 
 
 function openForm() {
        let form = document.getElementById("to-do-form")
        form.style.display = "block";
    }
    
    function closeForm() {
        let form = document.getElementById("to-do-form")
        _clearForm();
        form.style.display = "none";
    }

    function _clearForm(){
        const forms = document.getElementsByClassName('input');
        for(let i=0;i<forms.length;i++){
            forms[i].value = "";
        }
    }

    function createToDo(project){
        (0,_toDoHandler__WEBPACK_IMPORTED_MODULE_0__.newToDo)(project);
        _clearForm();
        closeForm();
    }

    function activateListeners(project){
        const cancelNewToDo = document.getElementById('cancel-to-do');
        cancelNewToDo.addEventListener('click', closeForm);
        const addBtn = document.getElementById('add-to-do');
       // addBtn.addEventListener('click', createToDo);
        addBtn.addEventListener('click', function(){
            createToDo(project)
        });
    }



/***/ }),

/***/ "./src/toDoHandler.js":
/*!****************************!*\
  !*** ./src/toDoHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDo": () => (/* binding */ addToDo),
/* harmony export */   "newToDo": () => (/* binding */ newToDo)
/* harmony export */ });
/* harmony import */ var _toDoDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoDOM */ "./src/toDoDOM.js");
/* harmony import */ var _projectHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectHandler */ "./src/projectHandler.js");



function newToDo(project){
    let nameField  = document.getElementById('to-do-name');
    let descriptionField  = document.getElementById('to-do-description');
    let dateField  = document.getElementById('to-do-date');
    let priorityField  = document.getElementById('to-do-priority');

    let toDo = {
        title: nameField.value,
        description: descriptionField.value,
        dueDate: dateField.value,
        priority: priorityField.value,
    }

    console.log(project.todos)
    console.log(toDo);
    
    project.todos.push(toDo);
    (0,_projectHandler__WEBPACK_IMPORTED_MODULE_1__.displayToDo)(project);
}

function addToDo(project) {
    (0,_toDoDOM__WEBPACK_IMPORTED_MODULE_0__.openForm)();//toDoDOM.js
    (0,_toDoDOM__WEBPACK_IMPORTED_MODULE_0__.activateListeners)(project);//toDoDom.js
}

//function 



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDOM */ "./src/projectDOM.js");
//import {headerFooter} from "./headerFooter.js";


//import {populateProjects} from './domUpdates';

(0,_projectDOM__WEBPACK_IMPORTED_MODULE_1__.activateListeners)();
//populateProjects();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDbENxRDtBQUNUOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQVc7QUFDZjs7QUFFQTtBQUNBLElBQUksa0RBQVEsR0FBRztBQUNmLElBQUksMkRBQWlCLFVBQVU7QUFDL0I7O0FBRUE7Ozs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsVUFBVSxjQUFjO0FBQ0g7QUFDMkI7QUFDaEQsVUFBVSxrQkFBa0I7O0FBRTVCLDhEQUFpQjtBQUNqQixxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0RE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNmb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBGaXhlZCBzaWRlbmF2LCBmdWxsIGhlaWdodCAqL1xcbi5zaWRlbmF2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIC8qIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIE9uIG1vdXNlLW92ZXIgKi9cXG4uc2lkZW5hdiBhOmhvdmVyLCAuZHJvcGRvd24tYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgc2lkZW5hdiBsaW5rcyBhbmQgdGhlIGRyb3Bkb3duIGJ1dHRvbiAqL1xcbi5zaWRlbmF2IGEsIC5kcm9wZG93bi1idG4ge1xcbiAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjODE4MTgxO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogT24gbW91c2Utb3ZlciAqL1xcbi5zaWRlbmF2IGE6aG92ZXIsIC5kcm9wZG93bi1idG46aG92ZXIge1xcbiAgY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi8qIE1haW4gY29udGVudCAqL1xcbi5tYWluIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4OyAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZW5hdiAqL1xcbiAgZm9udC1zaXplOiAyMHB4OyAvKiBJbmNyZWFzZWQgdGV4dCB0byBlbmFibGUgc2Nyb2xsaW5nICovXFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuXFxuLyogQWRkIGFuIGFjdGl2ZSBjbGFzcyB0byB0aGUgYWN0aXZlIGRyb3Bkb3duIGJ1dHRvbiAqL1xcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIERyb3Bkb3duIGNvbnRhaW5lciAoaGlkZGVuIGJ5IGRlZmF1bHQpLiBPcHRpb25hbDogYWRkIGEgbGlnaHRlciBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzb21lIGxlZnQgcGFkZGluZyB0byBjaGFuZ2UgdGhlIGRlc2lnbiBvZiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xcbi5kcm9wZG93bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRhaW5lciAqIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRhaW5lciBidXR0b24ge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBPcHRpb25hbDogU3R5bGUgdGhlIGNhcmV0IGRvd24gaWNvbiAqL1xcbi5mYS1jYXJldC1kb3duIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcXG59XFxuXFxuLyogU29tZSBtZWRpYSBxdWVyaWVzIGZvciByZXNwb25zaXZlbmVzcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xcbiAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cXG4gIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XFxufVxcblxcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4uZm9ybS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcXG4gIHotaW5kZXg6IDk7XFxufVxcblxcbi8qIEFkZCBzdHlsZXMgdG8gdGhlIGZvcm0gY29udGFpbmVyICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG4vKiBXaGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzLCBkbyBzb21ldGhpbmcgKi9cXG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvbG9naW4gYnV0dG9uICovXFxuLmZvcm0tY29udGFpbmVyIC5idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciAuY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyB0byBidXR0b25zICovXFxuLmZvcm0tY29udGFpbmVyIC5idG46aG92ZXIsIC5vcGVuLWJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jdG8tZG8taG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbiN0by1kby1ob2xkZXIgZGl2IHtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMHB4IDE1cHg7XFxufVxcblxcbi5tYWluIGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RvLWRvLWhvbGRlciBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGhlaWdodDogODBweDtcXG4gIG1pbi13aWR0aDogODBweDtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuI3RvLWRvLWhvbGRlciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjU1LCAxOTQpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaOzs7WUFHVTtFQUNWLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLG9EQUFvRDtBQUNwRDtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxpQkFBaUIsRUFBRSxxQ0FBcUM7RUFDeEQsZUFBZSxFQUFFLHVDQUF1QztFQUN4RCxpQkFBaUI7QUFDbkI7O0FBRUEsc0RBQXNEO0FBQ3REO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQSx3SkFBd0o7QUFDeEo7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsd0NBQXdDO0FBQ3hDO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxVQUFVLGlCQUFpQixDQUFDO0VBQzVCLFlBQVksZUFBZSxDQUFDO0FBQzlCOztBQUVBLHVDQUF1QztBQUN2QztFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWix5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBLHFDQUFxQztBQUNyQztFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBLDRDQUE0QztBQUM1QztFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQSxvREFBb0Q7QUFDcEQ7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGhlaWdodDogMzZweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogRml4ZWQgc2lkZW5hdiwgZnVsbCBoZWlnaHQgKi9cXG4uc2lkZW5hdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMjAwcHg7XFxuICAvKiBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiBPbiBtb3VzZS1vdmVyICovXFxuLnNpZGVuYXYgYTpob3ZlciwgLmRyb3Bkb3duLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLyogU3R5bGUgdGhlIHNpZGVuYXYgbGlua3MgYW5kIHRoZSBkcm9wZG93biBidXR0b24gKi9cXG4uc2lkZW5hdiBhLCAuZHJvcGRvd24tYnRuIHtcXG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzgxODE4MTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIE9uIG1vdXNlLW92ZXIgKi9cXG4uc2lkZW5hdiBhOmhvdmVyLCAuZHJvcGRvd24tYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgKi9cXG4ubWFpbiB7XFxuICBtYXJnaW4tbGVmdDogMjVweDsgLyogU2FtZSBhcyB0aGUgd2lkdGggb2YgdGhlIHNpZGVuYXYgKi9cXG4gIGZvbnQtc2l6ZTogMjBweDsgLyogSW5jcmVhc2VkIHRleHQgdG8gZW5hYmxlIHNjcm9sbGluZyAqL1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxufVxcblxcbi8qIEFkZCBhbiBhY3RpdmUgY2xhc3MgdG8gdGhlIGFjdGl2ZSBkcm9wZG93biBidXR0b24gKi9cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBEcm9wZG93biBjb250YWluZXIgKGhpZGRlbiBieSBkZWZhdWx0KS4gT3B0aW9uYWw6IGFkZCBhIGxpZ2h0ZXIgYmFja2dyb3VuZCBjb2xvciBhbmQgc29tZSBsZWZ0IHBhZGRpbmcgdG8gY2hhbmdlIHRoZSBkZXNpZ24gb2YgdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cXG4uZHJvcGRvd24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxufVxcblxcbi5kcm9wZG93bi1jb250YWluZXIgKiB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kcm9wZG93bi1jb250YWluZXIgYnV0dG9uIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogT3B0aW9uYWw6IFN0eWxlIHRoZSBjYXJldCBkb3duIGljb24gKi9cXG4uZmEtY2FyZXQtZG93biB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxufVxcblxcbi8qIFNvbWUgbWVkaWEgcXVlcmllcyBmb3IgcmVzcG9uc2l2ZW5lc3MgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcXG4gIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XFxuICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxcbn1cXG5cXG4vKiBUaGUgcG9wdXAgZm9ybSAtIGhpZGRlbiBieSBkZWZhdWx0ICovXFxuLmZvcm0tcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XFxuICB6LWluZGV4OiA5O1xcbn1cXG5cXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuLyogV2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cywgZG8gc29tZXRoaW5nICovXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0L2xvZ2luIGJ1dHRvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciAuYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206MTBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGNhbmNlbCBidXR0b24gKi9cXG4uZm9ybS1jb250YWluZXIgLmNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIEFkZCBzb21lIGhvdmVyIGVmZmVjdHMgdG8gYnV0dG9ucyAqL1xcbi5mb3JtLWNvbnRhaW5lciAuYnRuOmhvdmVyLCAub3Blbi1idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI3RvLWRvLWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4jdG8tZG8taG9sZGVyIGRpdiB7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xcbn1cXG5cXG4ubWFpbiBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0by1kby1ob2xkZXIgYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDE1cHg7XFxufVxcblxcbiN0by1kby1ob2xkZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDI1NSwgMTk0KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge25ld1Byb2plY3R9IGZyb20gJy4vcHJvamVjdEhhbmRsZXInO1xuXG5mdW5jdGlvbiBkcm9wRG93bigpe1xuICAgIGxldCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1idG5cIik7XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZHJvcGRvd24ubGVuZ3RoOyBpKyspIHtcbiAgICAvL2Ryb3Bkb3duW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgdmFyIGRyb3Bkb3duQ29udGVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgICAvL30pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb3BlbkZvcm0oKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKVxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuICBcbiAgZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIilcbiAgICBfY2xlYXJGb3JtKCk7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBmdW5jdGlvbiBfY2xlYXJGb3JtKCl7XG4gICAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnB1dCcpO1xuICAgIGZvcihsZXQgaT0wO2k8Zm9ybXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGZvcm1zW2ldLnZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpe1xuICAgIGxldCBpbnB1dCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XG4gICAgbGV0IG5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgICBuZXdQcm9qZWN0KG5hbWUpO1xuICAgIF9jbGVhckZvcm0oKTtcbiAgICBjbG9zZUZvcm0oKTtcbn1cblxuICBmdW5jdGlvbiBhY3RpdmF0ZUxpc3RlbmVycygpe1xuICAgIGNvbnN0IGRyb3BEb3duQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duLWJ0bicpO1xuICAgIGRyb3BEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZHJvcERvd24pO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKTtcbiAgICBjb25zdCBjYW5jZWxOZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1wcm9qZWN0Jyk7XG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Gb3JtKTtcbiAgICBjYW5jZWxOZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QnKTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KTtcbn1cblxuZXhwb3J0IHthY3RpdmF0ZUxpc3RlbmVyc307IiwiaW1wb3J0IHthZGRUb0RvfSBmcm9tICcuL3RvRG9IYW5kbGVyJztcblxuZnVuY3Rpb24gbmV3UHJvamVjdChuYW1lKSB7XG4gICAgbGV0IHByb2plY3QgPSB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHRvZG9zOiBbXSxcbiAgICB9XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBfYWRkUHJvamVjdFRvUGFnZShwcm9qZWN0KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gbmV3VG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KXtcbiAgICBsZXQgdG9EbyA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgIH1cblxuICAgIHJldHVybiB0b0RvO1xufVxuXG5mdW5jdGlvbiBfYWRkUHJvamVjdFRvUGFnZShwcm9qZWN0KXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24tY29udGFpbmVyJyk7XG4gICAgbGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxldCBhZGRQcm9qZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAvL2FkZFByb2plY3QuY2xhc3NMaXN0LmFkZChwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGRpc3BsYXlUb0RvKHByb2plY3QpXG4gICAgICAgIH0pO1xuICAgICAgICBhZGRQcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RXcmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvRG8ocHJvamVjdCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWRvLWhvbGRlcicpO1xuICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWRvLWhlYWRpbmcnKTtcbiAgICBwcm9qZWN0SGVhZGluZy50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBfcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250YWluZXIpO1xuICAgIC8vIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBsZXQgYWRkTmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICBhZGROZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgYWRkVG9Ebyhwcm9qZWN0KS8vdG9Eb0hhbmRsZXIuanNcbiAgICB9KTtcbiAgICBfYXBwZW5kVG9Eb05vZGVzKHByb2plY3QsIGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE5ld1Rhc2tCdG4pO1xufVxuXG5cbmZ1bmN0aW9uIF9hcHBlbmRUb0RvTm9kZXMocHJvamVjdCwgY29udGFpbmVyKXtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRvZG9zKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpPHByb2plY3QudG9kb3MubGVuZ3RoO2krKyl7XG4gICAgICAgIGxldCB0b2RvID0gcHJvamVjdC50b2Rvc1tpXTtcbiAgICAgICAgaWYodG9kby50aXRsZSAhPT0gbnVsbCAmJiB0b2RvLmR1ZURhdGUgIT09IG51bGwpe1xuICAgICAgICAgICAgbGV0IHRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIHRvRG8uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgICAgICB0b0RvLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG8pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICAvL2NvbnNvbGUubG9nKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG4oZnVuY3Rpb24gdGVzdGluZ1ZhbHVlcygpe1xuICAgIGxldCBnYW1pbmdUb0RvID0gbmV3VG9EbyhcIlBsYXlcIiwgXCJnb3R0YSBnYW1lXCIsIFwidG9tb3Jyb3dcIiwgNSk7XG5sZXQgZ2FtaW5nVG9EbzIgPSBuZXdUb0RvKFwiUGxheVwiLCBcImdvdHRhIGdhbWVcIiwgXCJ0b21vcnJvd1wiLCA1KTtcbmxldCBnYW1pbmdUb0RvMyA9IG5ld1RvRG8oXCJQbGF5XCIsIFwiZ290dGEgZ2FtZVwiLCBcInRvbW9ycm93XCIsIDUpO1xubGV0IGdhbWluZ1RvRG80ID0gbmV3VG9EbyhcIlBsYXlcIiwgXCJnb3R0YSBnYW1lXCIsIFwidG9tb3Jyb3dcIiwgNSk7XG5sZXQgZ2FtaW5nID0gbmV3UHJvamVjdChcIkdhbWluZ1wiKTtcbmxldCBjaG9yZXMgPSBuZXdQcm9qZWN0KFwiQ2hvcmVzXCIpO1xuZ2FtaW5nLnRvZG9zLnB1c2goZ2FtaW5nVG9Ebyk7XG5nYW1pbmcudG9kb3MucHVzaChnYW1pbmdUb0RvMik7XG5nYW1pbmcudG9kb3MucHVzaChnYW1pbmdUb0RvMyk7XG5nYW1pbmcudG9kb3MucHVzaChnYW1pbmdUb0RvNCk7XG59KSgpO1xuXG5cbmV4cG9ydHtuZXdQcm9qZWN0LCBkaXNwbGF5VG9Eb307IiwiIGltcG9ydCB7IG5ld1RvRG8gfSBmcm9tIFwiLi90b0RvSGFuZGxlclwiO1xuIFxuIGZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG8tZG8tZm9ybVwiKVxuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvLWRvLWZvcm1cIilcbiAgICAgICAgX2NsZWFyRm9ybSgpO1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY2xlYXJGb3JtKCl7XG4gICAgICAgIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5wdXQnKTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxmb3Jtcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGZvcm1zW2ldLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvRG8ocHJvamVjdCl7XG4gICAgICAgIG5ld1RvRG8ocHJvamVjdCk7XG4gICAgICAgIF9jbGVhckZvcm0oKTtcbiAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVMaXN0ZW5lcnMocHJvamVjdCl7XG4gICAgICAgIGNvbnN0IGNhbmNlbE5ld1RvRG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLXRvLWRvJyk7XG4gICAgICAgIGNhbmNlbE5ld1RvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xuICAgICAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvLWRvJyk7XG4gICAgICAgLy8gYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVG9Ebyk7XG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjcmVhdGVUb0RvKHByb2plY3QpXG4gICAgICAgIH0pO1xuICAgIH1cblxuZXhwb3J0IHtvcGVuRm9ybSwgYWN0aXZhdGVMaXN0ZW5lcnN9OyIsImltcG9ydCB7YWN0aXZhdGVMaXN0ZW5lcnMsIG9wZW5Gb3JtfSBmcm9tICcuL3RvRG9ET00nXG5pbXBvcnQge2Rpc3BsYXlUb0RvfSBmcm9tICcuL3Byb2plY3RIYW5kbGVyJ1xuXG5mdW5jdGlvbiBuZXdUb0RvKHByb2plY3Qpe1xuICAgIGxldCBuYW1lRmllbGQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWRvLW5hbWUnKTtcbiAgICBsZXQgZGVzY3JpcHRpb25GaWVsZCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZG8tZGVzY3JpcHRpb24nKTtcbiAgICBsZXQgZGF0ZUZpZWxkICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0by1kby1kYXRlJyk7XG4gICAgbGV0IHByaW9yaXR5RmllbGQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWRvLXByaW9yaXR5Jyk7XG5cbiAgICBsZXQgdG9EbyA9IHtcbiAgICAgICAgdGl0bGU6IG5hbWVGaWVsZC52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uRmllbGQudmFsdWUsXG4gICAgICAgIGR1ZURhdGU6IGRhdGVGaWVsZC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5RmllbGQudmFsdWUsXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cocHJvamVjdC50b2RvcylcbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcbiAgICBcbiAgICBwcm9qZWN0LnRvZG9zLnB1c2godG9Ebyk7XG4gICAgZGlzcGxheVRvRG8ocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvRG8ocHJvamVjdCkge1xuICAgIG9wZW5Gb3JtKCk7Ly90b0RvRE9NLmpzXG4gICAgYWN0aXZhdGVMaXN0ZW5lcnMocHJvamVjdCk7Ly90b0RvRG9tLmpzXG59XG5cbi8vZnVuY3Rpb24gXG5cbmV4cG9ydCB7YWRkVG9EbywgbmV3VG9Eb307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IHtoZWFkZXJGb290ZXJ9IGZyb20gXCIuL2hlYWRlckZvb3Rlci5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBhY3RpdmF0ZUxpc3RlbmVyc30gZnJvbSAnLi9wcm9qZWN0RE9NJztcbi8vaW1wb3J0IHtwb3B1bGF0ZVByb2plY3RzfSBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuXG5hY3RpdmF0ZUxpc3RlbmVycygpO1xuLy9wb3B1bGF0ZVByb2plY3RzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9