"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movies2";
exports.ids = ["pages/movies2"];
exports.modules = {

/***/ "./pages/movies2.js":
/*!**************************!*\
  !*** ./pages/movies2.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var stream_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stream/web */ \"stream/web\");\n/* harmony import */ var stream_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stream_web__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Movies2() {\n    const { data , error  } = useSWR(\"http://www.omdbapi.com/?apikey=b50d4423&s=hero\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n        lineNumber: 8,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n        lineNumber: 10,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n                lineNumber: 16,\n                columnNumber: 39\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies2.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n};\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNRO0FBRXhCLFNBQVNFLE9BQU8sR0FBRTtJQUU3QixNQUFNLEVBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFDLEdBQUdDLE1BQU0sQ0FBQyxnREFBZ0QsRUFBRUMsT0FBTyxDQUFDO0lBRXZGLElBQUlGLEtBQUssRUFBRSxxQkFBTyw4REFBQ0csS0FBRztrQkFBQywyQkFBbUI7Ozs7O1lBQU07SUFFaEQsSUFBSSxDQUFDSixJQUFJLEVBQUUscUJBQU8sOERBQUNJLEtBQUc7a0JBQUMsWUFBVTs7Ozs7WUFBTTtJQUV2QyxxQkFFSSw4REFBQ0EsS0FBRztrQkFFRUosSUFBSSxDQUFDSyxNQUFNLENBQUNDLEdBQUcsQ0FBRSxDQUFDQyxDQUFDLGlCQUFLLDhEQUFDSCxLQUFHOztvQkFBRUcsQ0FBQyxDQUFDQyxLQUFLO29CQUFDLE9BQUs7b0JBQUNELENBQUMsQ0FBQ0UsSUFBSTs7Ozs7O29CQUFPO1FBQUEsQ0FBRzs7Ozs7WUFFNUQsQ0FFVDtDQUVKO0FBSUQsZUFBZU4sT0FBTyxDQUFDTyxHQUFHLEVBQUU7SUFFeEIsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO0lBRTVCLE1BQU1HLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNFLElBQUksRUFBRTtJQUU3QixPQUFPQSxJQUFJLENBQUM7Q0FFZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL21vdmllczIuanM/ODNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU3dyIGZyb20gJ3N0cmVhbS93ZWInXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMigpe1xyXG5cclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1iNTBkNDQyMyZzPWhlcm8nLCBmZXRjaGVyKSAgICBcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8OjbzwvZGl2PlxyXG5cclxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kbzwvZGl2PlxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICB7IGRhdGEuU2VhcmNoLm1hcCggKG0pID0+IDxkaXY+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2PiAgKSB9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICkgICAgXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ganNvbjtcclxuXHJcbn0iXSwibmFtZXMiOlsidXNlU3dyIiwidXNlUm91dGVyIiwiTW92aWVzMiIsImRhdGEiLCJlcnJvciIsInVzZVNXUiIsImZldGNoZXIiLCJkaXYiLCJTZWFyY2giLCJtYXAiLCJtIiwiVGl0bGUiLCJZZWFyIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies2.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stream/web":
/*!*****************************!*\
  !*** external "stream/web" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("stream/web");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies2.js"));
module.exports = __webpack_exports__;

})();