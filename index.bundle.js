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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cookBanner3.jpg */ \"./src/assets/cookBanner3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\r\\nbody {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Quicksand', 'Courier New', Courier, monospace;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #fafafa;\\r\\n}\\r\\n\\r\\nh5,\\r\\nh4 {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\np {\\r\\n  margin-left: 20px;\\r\\n  margin-right: 20px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  height: 100vh;\\r\\n  max-width: 60rem;\\r\\n  margin: 0 auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: 0.3fr 2.4fr 0.3fr;\\r\\n  grid-template-rows: 0.3fr 2.4fr 0.3fr;\\r\\n  gap: 0.125rem 0.0125rem;\\r\\n  grid-auto-flow: row;\\r\\n  grid-template-areas:\\r\\n    '. header .'\\r\\n    '. main .'\\r\\n    '. footer .';\\r\\n}\\r\\n\\r\\nheader {\\r\\n  grid-area: header;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: flex-end;\\r\\n  border-bottom: 2px #dbdbdb solid;\\r\\n  color: #333;\\r\\n  height: 100px;\\r\\n  background: no-repeat center/100% url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  grid-area: footer;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  border-top: 2px #dbdbdb solid;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  margin: 1rem 0;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  grid-template-rows: 1fr 1fr 1fr;\\r\\n  gap: 0.5rem 0.5rem;\\r\\n  grid-auto-flow: row;\\r\\n  grid-template-areas:\\r\\n    '. . .'\\r\\n    '. . .'\\r\\n    '. . .';\\r\\n  grid-area: main;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  display: flex;\\r\\n  margin: 5px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.logo * {\\r\\n  padding: 10px;\\r\\n  margin: 0;\\r\\n  font-family: 'Brush Script MT', cursive;\\r\\n}\\r\\n\\r\\n.nav-bar-list {\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\nli {\\r\\n  margin-left: 5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n  border-bottom: 2px solid #333;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n  font-weight: bold;\\r\\n  border-bottom: 2px solid #333;\\r\\n}\\r\\n\\r\\n/* card foods styles */\\r\\n\\r\\n.card-food {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1.4fr 0.6fr;\\r\\n  grid-template-rows: 2fr 0.4fr 0.2fr;\\r\\n  gap: 0;\\r\\n  grid-template-areas:\\r\\n    'card-img card-img card-img'\\r\\n    'card-title card-title card-title'\\r\\n    'btn-recipe . btn-liked';\\r\\n  border: #dbdbdb 1px solid;\\r\\n}\\r\\n\\r\\n.card-img {\\r\\n  overflow: hidden;\\r\\n  box-sizing: border-box;\\r\\n  grid-area: card-img;\\r\\n}\\r\\n\\r\\n.img-food {\\r\\n  width: 100%;\\r\\n  min-height: 250px;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n.card-title {\\r\\n  grid-area: card-title;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: flex-start;\\r\\n  padding: 0.2rem;\\r\\n}\\r\\n\\r\\n.btn-recipe {\\r\\n  background: rgb(221, 21, 21);\\r\\n  border: none;\\r\\n  color: white;\\r\\n  font-weight: bold;\\r\\n  padding: 0.1rem 0.4rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.btn-liked {\\r\\n  cursor: pointer;\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n  justify-content: space-around;\\r\\n  background: white;\\r\\n  border: none;\\r\\n  color: rgb(221, 21, 21);\\r\\n  font-weight: bold;\\r\\n  font-size: 0.8em;\\r\\n  padding: 0.1rem 0.2rem;\\r\\n}\\r\\n\\r\\n.no-grid {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.hiden {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n.popuptext {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  flex-grow: 1;\\r\\n  width: 100%;\\r\\n  background-color: #f6e0c0;\\r\\n  color: #333;\\r\\n  border-radius: 6px;\\r\\n  padding: 8px 0;\\r\\n}\\r\\n\\r\\n.popuptext button {\\r\\n  cursor: pointer;\\r\\n  align-self: flex-end;\\r\\n  margin: 10px 20px;\\r\\n  padding: 5px;\\r\\n  font-weight: bold;\\r\\n  background-color: #f6e0c0;\\r\\n  color: #333;\\r\\n  border: none;\\r\\n  font-size: xx-large;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  animation: fadeIn 1s;\\r\\n}\\r\\n\\r\\n.recipe {\\r\\n  height: 140px;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.mesgFormContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.mesgContent {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.mesgContent input,\\r\\n.mesgContent textarea {\\r\\n  margin-bottom: 10px;\\r\\n  color: #333;\\r\\n  border-radius: 6px;\\r\\n  font-size: medium;\\r\\n}\\r\\n\\r\\n.mesgContent input[type='button'] {\\r\\n  background-color: #f6e0c0;\\r\\n  border: 1px solid #333;\\r\\n  font-weight: bold;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\ntextarea:focus,\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.mesgContent div {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.aligCener {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n/* width */\\r\\n::-webkit-scrollbar {\\r\\n  width: 5px;\\r\\n}\\r\\n\\r\\n/* Track */\\r\\n::-webkit-scrollbar-track {\\r\\n  background: #f3d4a6;\\r\\n}\\r\\n\\r\\n/* Handle */\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: #333;\\r\\n}\\r\\n\\r\\n/* Handle on hover */\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background: #555;\\r\\n}\\r\\n\\r\\n/* Add animation (fade in the popup) */\\r\\n@keyframes fadeIn {\\r\\n  from {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes fadeIn {\\r\\n  from {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 767px) {\\r\\n  header {\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    height: 100%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-javascript/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/css-loader/dist/runtime/getUrl.js?");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_cookBanner3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/cookBanner3.jpg */ \"./src/assets/cookBanner3.jpg\");\n/* harmony import */ var _modules_getDataFood_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getDataFood.js */ \"./src/modules/getDataFood.js\");\n\r\n\r\n\r\n\r\n// eslint-disable-next-line operator-linebreak\r\nconst [liBeefElement, liPastaElement, liSeafoodElement] =\r\n  document.querySelectorAll('li');\r\nlet typeFoodSelected = liBeefElement;\r\n// links to get data from food api\r\nconst allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';\r\nconst allPastaURL = `\r\n  https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta`;\r\nconst allSeafoodURL = `\r\n  https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;\r\n\r\nliBeefElement.addEventListener('click', () => {\r\n  typeFoodSelected = liBeefElement;\r\n  liBeefElement.classList.add('selected');\r\n  liPastaElement.classList.remove('selected');\r\n  liSeafoodElement.classList.remove('selected');\r\n  typeFoodSelected.textContent = 'Beef';\r\n  liPastaElement.textContent = 'Pasta';\r\n  liSeafoodElement.textContent = 'Seafood';\r\n  (0,_modules_getDataFood_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(allBeefURL, typeFoodSelected);\r\n});\r\n\r\nliPastaElement.addEventListener('click', () => {\r\n  typeFoodSelected = liPastaElement;\r\n  liPastaElement.classList.add('selected');\r\n  liBeefElement.classList.remove('selected');\r\n  liSeafoodElement.classList.remove('selected');\r\n  typeFoodSelected.textContent = 'Pasta';\r\n  liBeefElement.textContent = 'Beef';\r\n  liSeafoodElement.textContent = 'Seafood';\r\n  (0,_modules_getDataFood_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(allPastaURL, typeFoodSelected);\r\n});\r\n\r\nliSeafoodElement.addEventListener('click', () => {\r\n  typeFoodSelected = liSeafoodElement;\r\n  liSeafoodElement.classList.add('selected');\r\n  liBeefElement.classList.remove('selected');\r\n  liPastaElement.classList.remove('selected');\r\n  typeFoodSelected.textContent = 'Seafood';\r\n  liBeefElement.textContent = 'Beef';\r\n  liPastaElement.textContent = 'Past';\r\n  (0,_modules_getDataFood_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(allSeafoodURL, typeFoodSelected);\r\n});\r\n\r\n(0,_modules_getDataFood_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(allBeefURL, typeFoodSelected);\r\n\r\n// logo immage create\r\nconst logoImage = new Image();\r\nlogoImage.src = _assets_cookBanner3_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n\n\n//# sourceURL=webpack://capstone-javascript/./src/index.js?");

/***/ }),

/***/ "./src/modules/createPopup.js":
/*!************************************!*\
  !*** ./src/modules/createPopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getItemData)\n/* harmony export */ });\n/* harmony import */ var _hidenItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hidenItems.js */ \"./src/modules/hidenItems.js\");\n/* harmony import */ var _displayComents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComents.js */ \"./src/modules/displayComents.js\");\n/* harmony import */ var _newComent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newComent.js */ \"./src/modules/newComent.js\");\n\r\n\r\n\r\n\r\nconst mainCont = document.querySelector('.container-food-cards');\r\n\r\nconst closePopup = (elem) => {\r\n  mainCont.classList.toggle('no-grid');\r\n  (0,_hidenItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  mainCont.removeChild(elem);\r\n};\r\n\r\n// function to display popup\r\nconst createPopup = (details, msgDat) => {\r\n  const myPopup = document.createElement('div');\r\n  const popupButon = document.createElement('button');\r\n  const itemdata = document.createElement('div');\r\n  itemdata.classList.add('mesgFormContainer');\r\n  const messageContainer = document.createElement('div');\r\n  messageContainer.id = 'mesgContainer';\r\n  messageContainer.classList.add('mesgFormContainer');\r\n  const newMessCont = document.createElement('div');\r\n  newMessCont.classList.add('mesgFormContainer');\r\n  (0,_displayComents_js__WEBPACK_IMPORTED_MODULE_1__.displayComents)(msgDat, messageContainer);\r\n  (0,_newComent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newMessCont, details.idMeal);\r\n\r\n  itemdata.innerHTML = `<img src=\"${details.strMealThumb}\" width=\"250px\"><h2>${details.strMeal}</h2><h4>Ingredients:</h4><p>${details.strIngredient1}, ${details.strIngredient2}, ${details.strIngredient3}, ${details.strIngredient4}, ${details.strIngredient5}</p><h4>Recipe:</h4>\r\n  <p class=\"recipe\">${details.strInstructions}</p>`;\r\n  itemdata.id = details.idMeal;\r\n  myPopup.id = 'myPopup';\r\n  popupButon.innerHTML = 'X';\r\n  popupButon.addEventListener('click', () => closePopup(myPopup));\r\n  myPopup.classList.add('popuptext');\r\n  myPopup.classList.toggle('show');\r\n  mainCont.classList.toggle('no-grid');\r\n  myPopup.appendChild(popupButon);\r\n  myPopup.appendChild(itemdata);\r\n  myPopup.appendChild(messageContainer);\r\n  myPopup.appendChild(newMessCont);\r\n  mainCont.appendChild(myPopup);\r\n};\r\n\r\n// function to get each element data\r\nconst getItemData = async (id) => {\r\n  const foodItemDataURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\r\n  const request = new Request(foodItemDataURL + id);\r\n  const response = await fetch(request);\r\n  const responseJson = await response.json();\r\n  const responsInfo = responseJson.meals[0];\r\n\r\n  const messageData = await (0,_displayComents_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(id);\r\n\r\n  createPopup(responsInfo, messageData);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://capstone-javascript/./src/modules/createPopup.js?");

/***/ }),

/***/ "./src/modules/displayComents.js":
/*!***************************************!*\
  !*** ./src/modules/displayComents.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayComents\": () => (/* binding */ displayComents),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"countComment\": () => (/* binding */ countComment)\n/* harmony export */ });\nconst countComment = (arr, title) => {\r\n  const counter = ` (${arr.length})`;\r\n  title.innerHTML += counter;\r\n};\r\n\r\nconst displayComents = (arr, container) => {\r\n  container.innerHTML = '';\r\n  const title = document.createElement('h3');\r\n  title.innerHTML = 'Comments';\r\n  container.appendChild(title);\r\n  const messageData = document.createElement('div');\r\n  messageData.classList.add('mesgContent');\r\n  if (!arr.error) {\r\n    countComment(arr, title);\r\n    arr.forEach((element) => {\r\n      const messItem = document.createElement('div');\r\n      messItem.innerHTML = `\r\n      <span>${element.creation_date} - <strong>${element.username}:</strong> ${element.comment}</span><hr/>`;\r\n      messageData.appendChild(messItem);\r\n    });\r\n  } else {\r\n    title.innerText += ' (0)';\r\n    messageData.innerHTML = '<span>Any Comments Yet</span><hr width=\"250px\">';\r\n  }\r\n  container.appendChild(messageData);\r\n};\r\n\r\n// function to get all messages\r\nconst getComments = async (id) => {\r\n  const getMessagesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments?item_id=';\r\n  const request = new Request(getMessagesLink + id);\r\n  const response = await fetch(request);\r\n  const responseJson = await response.json();\r\n  return responseJson;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://capstone-javascript/./src/modules/displayComents.js?");

/***/ }),

/***/ "./src/modules/getDataFood.js":
/*!************************************!*\
  !*** ./src/modules/getDataFood.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCounter\": () => (/* binding */ displayCounter),\n/* harmony export */   \"default\": () => (/* binding */ getAllData)\n/* harmony export */ });\n/* harmony import */ var _createPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopup.js */ \"./src/modules/createPopup.js\");\n/* harmony import */ var _hidenItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hidenItems.js */ \"./src/modules/hidenItems.js\");\n/* harmony import */ var _likeDataApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeDataApi.js */ \"./src/modules/likeDataApi.js\");\n\r\n\r\n\r\n\r\n// function display an array of objects\r\nconst displayData = (arr) => {\r\n  const board = document.querySelector('.container-food-cards');\r\n  board.innerHTML = '';\r\n  arr.forEach((food) => {\r\n    const item = document.createElement('article');\r\n    item.id = food.idMeal;\r\n\r\n    item.classList.add('card-food');\r\n    item.innerHTML = `\r\n        <div class=\"card-title\">\r\n          <h5>${food.strMeal}</h5>\r\n        </div>        \r\n        <button type=\"button\" class=\"btn-recipe\">Recipe</button>\r\n        <div>        \r\n        </div>\r\n        <div class=\"btn-liked\">\r\n          Like\r\n        </div>\r\n        <div class=\"card-img\">\r\n         <img src=\"${food.strMealThumb}\" class=\"img-food\">        \r\n        </div>     \r\n    `;\r\n\r\n    const btnRecipeElement = item.querySelector('.btn-recipe');\r\n    const btnLikedElement = item.querySelector('.btn-liked');\r\n    const printLike = (data) => {\r\n      const likesReturned = data.find(\r\n        // eslint-disable-next-line comma-dangle\r\n        (element) => element.item_id === food.idMeal\r\n      );\r\n      // eslint-disable-next-line operator-linebreak\r\n      btnLikedElement.innerHTML =\r\n        likesReturned !== undefined\r\n          ? `<i class=\"fas fa-heart\"></i> (${likesReturned.likes})`\r\n          : '<i class=\"far fa-heart\"></i> (0)';\r\n    };\r\n    (0,_likeDataApi_js__WEBPACK_IMPORTED_MODULE_2__.getLikesToItems)()\r\n      .then(printLike)\r\n      .catch((e) => console.log(e));\r\n\r\n    btnRecipeElement.addEventListener('click', () => {\r\n      (0,_createPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(food.idMeal);\r\n      (0,_hidenItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n    btnLikedElement.addEventListener('click', () => {\r\n      (0,_likeDataApi_js__WEBPACK_IMPORTED_MODULE_2__.addLikeToItem)(food.idMeal);\r\n      (0,_likeDataApi_js__WEBPACK_IMPORTED_MODULE_2__.getLikesToItems)()\r\n        .then(printLike)\r\n        .catch((e) => console.log(e));\r\n    });\r\n    board.appendChild(item);\r\n  });\r\n};\r\n\r\nconst displayCounter = (typeFoodSelected, count) => {\r\n  typeFoodSelected.innerHTML = `${typeFoodSelected.textContent} (${count})`;\r\n};\r\n\r\n// function to get images and title\r\nconst getAllData = async (url, typeFoodSelected) => {\r\n  const request = new Request(url);\r\n  const response = await fetch(request);\r\n  const responseJson = await response.json();\r\n  const responseInfo = responseJson.meals;\r\n  displayCounter(typeFoodSelected, responseInfo.length);\r\n  displayData(responseInfo);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://capstone-javascript/./src/modules/getDataFood.js?");

/***/ }),

/***/ "./src/modules/hidenItems.js":
/*!***********************************!*\
  !*** ./src/modules/hidenItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hidenItems)\n/* harmony export */ });\nconst hidenItems = () => {\r\n  const items = document.querySelectorAll('.card-food');\r\n  items.forEach((e) => {\r\n    e.classList.toggle('hiden');\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://capstone-javascript/./src/modules/hidenItems.js?");

/***/ }),

/***/ "./src/modules/likeDataApi.js":
/*!************************************!*\
  !*** ./src/modules/likeDataApi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLikeToItem\": () => (/* binding */ addLikeToItem),\n/* harmony export */   \"getLikesToItems\": () => (/* binding */ getLikesToItems)\n/* harmony export */ });\n// link to likes and message store api\r\nconst projectID = 'cq8n4ydnTGepOHztUKmY';\r\nconst likesLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${projectID}/likes/`;\r\n\r\nconst addLikeToItem = async (itemId) => {\r\n  const request = new Request(likesLink);\r\n  const response = await fetch(request, {\r\n    method: 'POST', // *GET, POST, PUT, DELETE, etc.\r\n    mode: 'cors', // no-cors, *cors, same-origin\r\n    body: JSON.stringify({ item_id: `${itemId}` }),\r\n    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached\r\n    credentials: 'same-origin', // include, *same-origin, omit\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  return response;\r\n};\r\n\r\nconst getLikesToItems = async () => {\r\n  const response = await fetch(likesLink);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\n\n//# sourceURL=webpack://capstone-javascript/./src/modules/likeDataApi.js?");

/***/ }),

/***/ "./src/modules/newComent.js":
/*!**********************************!*\
  !*** ./src/modules/newComent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newMessageForm)\n/* harmony export */ });\n/* harmony import */ var _displayComents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComents.js */ \"./src/modules/displayComents.js\");\n\r\n\r\n// function to post element\r\nconst postNewMessage = async (id, name, text) => {\r\n  const postMessageLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments';\r\n  const request = new Request(postMessageLink);\r\n  const data = {\r\n    method: 'POST',\r\n    headers: {\r\n      Accept: 'application/json',\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: name,\r\n      comment: text,\r\n    }),\r\n  };\r\n\r\n  await fetch(request, data);\r\n  const arr = await (0,_displayComents_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\r\n  const container = document.getElementById('mesgContainer');\r\n  (0,_displayComents_js__WEBPACK_IMPORTED_MODULE_0__.displayComents)(arr, container);\r\n};\r\n\r\nconst newMessage = (id, user, message) => {\r\n  if (user.value !== '' && message.value !== '') {\r\n    postNewMessage(id, user.value, message.value);\r\n    user.value = '';\r\n    message.value = '';\r\n  }\r\n};\r\n\r\nconst newMessageForm = (container, itemId) => {\r\n  const formNewMessage = document.createElement('div');\r\n  formNewMessage.innerHTML = '<h3 class=\"aligCener\">Add a Comment</h3>';\r\n  formNewMessage.classList.add('mesgContent');\r\n  const userName = document.createElement('input');\r\n  userName.type = 'text';\r\n  userName.name = 'username';\r\n  userName.placeholder = 'Your name';\r\n  const textMessage = document.createElement('textarea');\r\n  textMessage.name = 'comment';\r\n  textMessage.rows = '4';\r\n  textMessage.cols = '30';\r\n  textMessage.placeholder = 'Your comment';\r\n  const button = document.createElement('input');\r\n  button.type = 'button';\r\n  button.value = 'Comment';\r\n  button.addEventListener('click', () => newMessage(itemId, userName, textMessage));\r\n  formNewMessage.appendChild(userName);\r\n  formNewMessage.appendChild(textMessage);\r\n  formNewMessage.appendChild(button);\r\n\r\n  container.appendChild(formNewMessage);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://capstone-javascript/./src/modules/newComent.js?");

/***/ }),

/***/ "./src/assets/cookBanner3.jpg":
/*!************************************!*\
  !*** ./src/assets/cookBanner3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be0d5f6a85d7222b78e0.jpg\";\n\n//# sourceURL=webpack://capstone-javascript/./src/assets/cookBanner3.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/capstone-javascript/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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