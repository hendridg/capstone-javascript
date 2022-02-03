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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Quicksand', 'Courier New', Courier, monospace;\\n}\\n\\nbody {\\n  background: #fafafa;\\n}\\n\\nh5 {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.container {\\n  height: 100vh;\\n  max-width: 60rem;\\n  margin: 0 auto;\\n  display: grid;\\n  grid-template-columns: 0.3fr 2.4fr 0.3fr;\\n  grid-template-rows: 0.3fr 2.4fr 0.3fr;\\n  gap: 0.125rem 0.0125rem;\\n  grid-auto-flow: row;\\n  grid-template-areas:\\n    '. header .'\\n    '. main .'\\n    '. footer .';\\n}\\n\\nheader {\\n  grid-area: header;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: 2px #dbdbdb solid;\\n}\\n\\nfooter {\\n  grid-area: footer;\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  border-top: 2px #dbdbdb solid;\\n}\\n\\nmain {\\n  margin-top: 1rem;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-template-rows: 1fr 1fr 1fr;\\n  gap: 0.5rem 0.5rem;\\n  grid-auto-flow: row;\\n  grid-template-areas:\\n    '. . .'\\n    '. . .'\\n    '. . .';\\n  grid-area: main;\\n}\\n\\n.nav-bar-list {\\n  padding: 0;\\n  list-style: none;\\n  display: flex;\\n}\\n\\nli {\\n  margin-left: 5rem;\\n  cursor: pointer;\\n}\\n\\nli:hover {\\n  border-bottom: 2px solid #333;\\n  font-weight: bold;\\n}\\n\\n.selected {\\n  font-weight: bold;\\n  border-bottom: 2px solid #333;\\n}\\n\\n/* card foods styles */\\n\\n.card-food {\\n  display: grid;\\n  grid-template-columns: 1fr 1.4fr 0.6fr;\\n  grid-template-rows: 2fr 0.4fr 0.2fr;\\n  gap: 0;\\n  grid-template-areas:\\n    'card-img card-img card-img'\\n    'card-title card-title card-title'\\n    'btn-recipe . btn-liked';\\n  border: #dbdbdb 1px solid;\\n}\\n\\n.card-img {\\n  overflow: hidden;\\n  box-sizing: border-box;\\n  grid-area: card-img;\\n}\\n\\n.img-food {\\n  width: 100%;\\n  min-height: 250px;\\n  object-fit: cover;\\n}\\n\\n.card-title {\\n  grid-area: card-title;\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  padding: 0.2rem;\\n}\\n\\n.btn-recipe {\\n  background: rgb(221, 21, 21);\\n  border: none;\\n  color: white;\\n  font-weight: bold;\\n  padding: 0.1rem 0.4rem;\\n  cursor: pointer;\\n}\\n\\n/* .btn-liked {\\n  grid-area: btn-liked;\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: flex-end;\\n  padding: 0.2rem;\\n} */\\n\\n.btn-liked {\\n  background: white;\\n  border: none;\\n  color: rgb(221, 21, 21);\\n  font-weight: bold;\\n  font-size: 10px;\\n  padding: 0.1rem 0rem;\\n  cursor: pointer;\\n}\\n\\n.no-grid {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n}\\n\\n.hiden {\\n  display: none !important;\\n}\\n\\n.popuptext {\\n  display: flex;\\n  flex-direction: column;\\n  flex-grow: 1;\\n  width: 100%;\\n\\n  /* height: 70vh; */\\n  background-color: rgb(177 142 142);\\n  color: rgb(56 26 26);\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 8px 0;\\n}\\n\\n.popuptext button {\\n  cursor: pointer;\\n  align-self: flex-end;\\n  margin: 10px 20px;\\n  padding: 5px;\\n  font-weight: bold;\\n  background-color: rgb(177 142 142);\\n  color: rgb(56 26 26);\\n  border: none;\\n  font-size: xx-large;\\n}\\n\\n/* Toggle this class when clicking on the popup container */\\n.show {\\n  animation: fadeIn 1s;\\n  animation: fadeIn 1s;\\n}\\n\\n/* Add animation (fade in the popup) */\\n@keyframes fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-javascript/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-javascript/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createPopup.js":
/*!****************************!*\
  !*** ./src/createPopup.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getItemData)\n/* harmony export */ });\n/* harmony import */ var _hidenItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hidenItems.js */ \"./src/hidenItems.js\");\n/* harmony import */ var _display_coments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-coments.js */ \"./src/display-coments.js\");\n\n\n\nconst mainCont = document.querySelector('.container-food-cards');\n\nconst closePopup = (elem) => {\n  mainCont.classList.toggle('no-grid');\n  (0,_hidenItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  mainCont.removeChild(elem);\n};\n\n// function to display popup\nconst createPopup = (details, msgDat) => {\n  const myPopup = document.createElement('div');\n  const popupButon = document.createElement('button');\n  const itemdata = document.createElement('div');\n  const messageContainer = document.createElement('div');\n  (0,_display_coments_js__WEBPACK_IMPORTED_MODULE_1__.displayComents)(msgDat, messageContainer);\n\n  itemdata.innerHTML = `<img src=\"${details.strMealThumb}\" width=\"250px\"><h2>${details.strMeal}</h2><p><strong>Ingredients:</strong> ${details.strIngredient1}, ${details.strIngredient2}, ${details.strIngredient3}, ${details.strIngredient4}, ${details.strIngredient5}</p>`;\n  itemdata.id = details.idMeal;\n  myPopup.id = 'myPopup';\n  popupButon.innerHTML = 'X';\n  popupButon.addEventListener('click', () => closePopup(myPopup));\n  myPopup.classList.add('popuptext');\n  myPopup.classList.toggle('show');\n  mainCont.classList.toggle('no-grid');\n  myPopup.appendChild(popupButon);\n  myPopup.appendChild(itemdata);\n  myPopup.appendChild(messageContainer);\n  mainCont.appendChild(myPopup);\n};\n\n// function to get each element data\nconst getItemData = async (id) => {\n  const foodItemDataURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\n  const request = new Request(foodItemDataURL + id);\n  const response = await fetch(request);\n  const responseJson = await response.json();\n  const responsInfo = responseJson.meals[0];\n\n  const messageData = await (0,_display_coments_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(id);\n\n  createPopup(responsInfo, messageData);\n};\n\n\n\n//# sourceURL=webpack://capstone-javascript/./src/createPopup.js?");

/***/ }),

/***/ "./src/display-coments.js":
/*!********************************!*\
  !*** ./src/display-coments.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayComents\": () => (/* binding */ displayComents),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\nconst displayComents = (arr, container) => {\n  const title = document.createElement('h3');\n  title.innerHTML = 'Comments:';\n  container.appendChild(title);\n  const messageData = document.createElement('div');\n  if (!arr.error) {\n    arr.forEach((element) => {\n      const messItem = document.createElement('div');\n      messItem.innerHTML = `\n      <span>${element.creation_date} - <strong>${element.username}:</strong> ${element.comment}</span><hr width=\"250px\">`;\n      messageData.appendChild(messItem);\n    });\n  } else {\n    messageData.innerHTML = '<span>Any Comments Yet</span><hr width=\"250px\">';\n  }\n  container.appendChild(messageData);\n};\n\n// function to get all messages\nconst getComments = async (id) => {\n  const getMessagesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments?item_id=';\n  const request = new Request(getMessagesLink + id);\n  const response = await fetch(request);\n  const responseJson = await response.json();\n\n  return responseJson;\n};\n\n\n\n//# sourceURL=webpack://capstone-javascript/./src/display-coments.js?");

/***/ }),

/***/ "./src/getDataFood.js":
/*!****************************!*\
  !*** ./src/getDataFood.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCounter\": () => (/* binding */ displayCounter),\n/* harmony export */   \"default\": () => (/* binding */ getAllData)\n/* harmony export */ });\n/* harmony import */ var _createPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopup.js */ \"./src/createPopup.js\");\n/* harmony import */ var _hidenItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hidenItems.js */ \"./src/hidenItems.js\");\n/* harmony import */ var _likeDataApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeDataApi.js */ \"./src/likeDataApi.js\");\n/* harmony import */ var _images_heart_fill_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/heart-fill.svg */ \"./src/images/heart-fill.svg\");\n\n\n\n\n\n// function display an array of objects\nconst displayData = (arr) => {\n  const board = document.querySelector('.container-food-cards');\n  board.innerHTML = '';\n  arr.forEach((food) => {\n    const item = document.createElement('article');\n    item.id = food.idMeal;\n\n    item.classList.add('card-food');\n    item.innerHTML = `\n        <div class=\"card-title\">\n          <h5>${food.strMeal}</h5>\n        </div>        \n        <button type=\"button\" class=\"btn-recipe\">Recipe</button>\n        <div>        \n        </div>\n          <button type=\"button\" class=\"btn-liked\">Like</button>\n        <div class=\"card-img\">\n         <img src=\"${food.strMealThumb}\" class=\"img-food\">        \n        </div>     \n    `;\n\n    const btnRecipeElement = item.querySelector('.btn-recipe');\n    const btnLikedElement = item.querySelector('.btn-liked');\n    const printLike = (data) => {\n      const likesReturned = data.find(\n        // eslint-disable-next-line comma-dangle\n        (element) => element.item_id === food.idMeal\n      );\n      btnLikedElement.innerHTML =\n        likesReturned !== undefined\n          ? `(${likesReturned.likes}) <i class=\"fa fa-heart-fill\"></i>`\n          : 'Like (0)';\n    };\n    (0,_likeDataApi_js__WEBPACK_IMPORTED_MODULE_2__.getLikesToItems)()\n      .then(printLike)\n      .catch((e) => console.log(e));\n\n    btnRecipeElement.addEventListener('click', () => {\n      (0,_createPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(food.idMeal);\n      (0,_hidenItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    btnLikedElement.addEventListener('click', () => {\n      (0,_likeDataApi_js__WEBPACK_IMPORTED_MODULE_2__.addLikeToItem)(food.idMeal);\n      (0,_likeDataApi_js__WEBPACK_IMPORTED_MODULE_2__.getLikesToItems)()\n        .then(printLike)\n        .catch((e) => console.log(e));\n    });\n    board.appendChild(item);\n  });\n};\n\nconst displayCounter = (typeFoodSelected, count) => {\n  typeFoodSelected.innerHTML = `${typeFoodSelected.textContent} (${count})`;\n};\n\n// function to get images and title\nconst getAllData = async (url, typeFoodSelected) => {\n  const request = new Request(url);\n  const response = await fetch(request);\n  const responseJson = await response.json();\n  const responseInfo = responseJson.meals;\n  displayCounter(typeFoodSelected, responseInfo.length);\n  displayData(responseInfo);\n};\n\n\n\n\n//# sourceURL=webpack://capstone-javascript/./src/getDataFood.js?");

/***/ }),

/***/ "./src/hidenItems.js":
/*!***************************!*\
  !*** ./src/hidenItems.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hidenItems)\n/* harmony export */ });\nconst hidenItems = () => {\n  const items = document.querySelectorAll('.card-food');\n  items.forEach((e) => {\n    e.classList.toggle('hiden');\n  });\n};\n\n\n\n//# sourceURL=webpack://capstone-javascript/./src/hidenItems.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _getDataFood_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDataFood.js */ \"./src/getDataFood.js\");\n\n\n\n// eslint-disable-next-line operator-linebreak\nconst [liBeefElement, liPastaElement, liSeafoodElement] =\n  document.querySelectorAll('li');\nlet typeFoodSelected = liBeefElement;\n// links to get data from food api\nconst allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';\nconst allPastaURL = `\n  https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta`;\nconst allSeafoodURL = `\n  https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;\n\n// link to likes and message store api\n// const projectID = 'cq8n4ydnTGepOHztUKmY';\n// const likesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/likes/';\n// const postMessageLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments';\n\nliBeefElement.addEventListener('click', () => {\n  typeFoodSelected = liBeefElement;\n  liBeefElement.classList.add('selected');\n  liPastaElement.classList.remove('selected');\n  liSeafoodElement.classList.remove('selected');\n  typeFoodSelected.textContent = 'Beef';\n  liPastaElement.textContent = 'Pasta';\n  liSeafoodElement.textContent = 'Seafood';\n  (0,_getDataFood_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allBeefURL, typeFoodSelected);\n});\n\nliPastaElement.addEventListener('click', () => {\n  typeFoodSelected = liPastaElement;\n  liPastaElement.classList.add('selected');\n  liBeefElement.classList.remove('selected');\n  liSeafoodElement.classList.remove('selected');\n  typeFoodSelected.textContent = 'Pasta';\n  liBeefElement.textContent = 'Beef';\n  liSeafoodElement.textContent = 'Seafood';\n  (0,_getDataFood_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allPastaURL, typeFoodSelected);\n});\n\nliSeafoodElement.addEventListener('click', () => {\n  typeFoodSelected = liSeafoodElement;\n  liSeafoodElement.classList.add('selected');\n  liBeefElement.classList.remove('selected');\n  liPastaElement.classList.remove('selected');\n  typeFoodSelected.textContent = 'Seafood';\n  liBeefElement.textContent = 'Beef';\n  liPastaElement.textContent = 'Past';\n  (0,_getDataFood_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allSeafoodURL, typeFoodSelected);\n});\n\n(0,_getDataFood_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allBeefURL, typeFoodSelected);\n\n\n//# sourceURL=webpack://capstone-javascript/./src/index.js?");

/***/ }),

/***/ "./src/likeDataApi.js":
/*!****************************!*\
  !*** ./src/likeDataApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLikeToItem\": () => (/* binding */ addLikeToItem),\n/* harmony export */   \"getLikesToItems\": () => (/* binding */ getLikesToItems)\n/* harmony export */ });\n// link to likes and message store api\nconst projectID = 'cq8n4ydnTGepOHztUKmY';\nconst likesLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${projectID}/likes/`;\n\nconst addLikeToItem = async (itemId) => {\n  const request = new Request(likesLink);\n  const response = await fetch(request, {\n    method: 'POST', // *GET, POST, PUT, DELETE, etc.\n    mode: 'cors', // no-cors, *cors, same-origin\n    body: JSON.stringify({ item_id: `${itemId}` }),\n    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached\n    credentials: 'same-origin', // include, *same-origin, omit\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  return response;\n};\n\nconst getLikesToItems = async () => {\n  const response = await fetch(likesLink);\n  const data = await response.json();\n  return data;\n};\n\n\n//# sourceURL=webpack://capstone-javascript/./src/likeDataApi.js?");

/***/ }),

/***/ "./src/images/heart-fill.svg":
/*!***********************************!*\
  !*** ./src/images/heart-fill.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8210321a309154abb33f.svg\";\n\n//# sourceURL=webpack://capstone-javascript/./src/images/heart-fill.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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