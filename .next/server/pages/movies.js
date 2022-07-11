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
exports.id = "pages/movies";
exports.ids = ["pages/movies"];
exports.modules = {

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Movies({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        m.Title,\n                        \" --- \",\n                        m.Year,\n                        \" --- \",\n                        m.Type,\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: m.Poster\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies.js\",\n                            lineNumber: 10,\n                            columnNumber: 77\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies.js\",\n                    lineNumber: 10,\n                    columnNumber: 36\n                }, this)\n            )\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies.js\",\n            lineNumber: 7,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies.js\",\n        lineNumber: 5,\n        columnNumber: 7\n    }, this);\n};\nasync function getServerSideProps(context) {\n    const res = await fetch(`http://www.omdbapi.com/?apikey=b50d4423&s=hero`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQWUsU0FBU0EsTUFBTSxDQUFDLEVBQUNDLElBQUksR0FBQyxFQUFDO0lBRXBDLHFCQUVJLDhEQUFDQyxLQUFHO2tCQUVBLDRFQUFDQSxLQUFHO3NCQUdIRCxJQUFJLENBQUNFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFFLENBQUNDLENBQUMsaUJBQUssOERBQUNILEtBQUc7O3dCQUFFRyxDQUFDLENBQUNDLEtBQUs7d0JBQUMsT0FBSzt3QkFBQ0QsQ0FBQyxDQUFDRSxJQUFJO3dCQUFDLE9BQUs7d0JBQUNGLENBQUMsQ0FBQ0csSUFBSTt3QkFBQyxHQUFDO3NDQUFBLDhEQUFDQyxLQUFHOzRCQUFDQyxHQUFHLEVBQUVMLENBQUMsQ0FBQ00sTUFBTTs7Ozs7Z0NBQUc7Ozs7Ozt3QkFBTTtZQUFBLENBQUc7Ozs7O2dCQUUxRjs7Ozs7WUFFSixDQUVUO0NBRUY7QUFFTSxlQUFlQyxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFDO0lBRS9DLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0lBRXpFLE1BQU1kLElBQUksR0FBRyxNQUFNYSxHQUFHLENBQUNFLElBQUksRUFBRTtJQUU3QixPQUFPO1FBRUhDLEtBQUssRUFBRTtZQUVIaEIsSUFBSTtTQUVQO0tBRUo7Q0FFRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL21vdmllcy5qcz9hZjU0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcyh7ZGF0YX0pe1xyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCggKG0pID0+IDxkaXY+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfSAtLS0ge20uVHlwZX0gPGltZyBzcmM9e20uUG9zdGVyfS8+PC9kaXY+ICApfSAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9YjUwZDQ0MjMmcz1oZXJvYClcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgICAgIHByb3BzOiB7XHJcblxyXG4gICAgICAgICAgZGF0YVxyXG5cclxuICAgICAgfVxyXG5cclxuICB9XHJcblxyXG59Il0sIm5hbWVzIjpbIk1vdmllcyIsImRhdGEiLCJkaXYiLCJTZWFyY2giLCJtYXAiLCJtIiwiVGl0bGUiLCJZZWFyIiwiVHlwZSIsImltZyIsInNyYyIsIlBvc3RlciIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies.js"));
module.exports = __webpack_exports__;

})();