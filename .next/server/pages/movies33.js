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
exports.id = "pages/movies33";
exports.ids = ["pages/movies33"];
exports.modules = {

/***/ "./pages/movies33.js":
/*!***************************!*\
  !*** ./pages/movies33.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TheForm\": () => (/* binding */ TheForm),\n/* harmony export */   \"TheLink\": () => (/* binding */ TheLink),\n/* harmony export */   \"TheMovies\": () => (/* binding */ TheMovies),\n/* harmony export */   \"default\": () => (/* binding */ Movies33)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);\n([swr__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction TheForm({ url , acao  }) {\n    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"form-search-movie\",\n            onSubmit: handleSubmit(acao),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"titleSearchString\",\n                    children: \"Filtro de titulo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"titleSearchString\",\n                    ...register(\"titleSearchString\", {\n                        required: true,\n                        minLength: 2\n                    }),\n                    type: \"text\",\n                    autoComplete: \"true\",\n                    placeholder: \"T\\xedtulo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this),\n                errors.titleSearchString && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Insira o m\\xednimo de caracteres\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n                    lineNumber: 15,\n                    columnNumber: 46\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"typeSearchString\",\n                    ...register(\"typeSearchString\", {\n                        required: true,\n                        minLength: 5,\n                        maxLength: 5\n                    }),\n                    type: \"text\",\n                    autoComplete: \"true\",\n                    placeholder: \"Tipo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this),\n                errors.typeSearchString && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \" Insira a palavra movie \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n                    lineNumber: 18,\n                    columnNumber: 45\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: url === \"\" ? \"Mostrar\" : \"Ocultar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\nfunction TheMovies({ data , show  }) {\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n        lineNumber: 29,\n        columnNumber: 24\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n        lineNumber: 30,\n        columnNumber: 24\n    }, this);\n    if (data.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na pesquisa\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n        lineNumber: 31,\n        columnNumber: 29\n    }, this);\n    if (data.Search === \"\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n        lineNumber: 32,\n        columnNumber: 38\n    }, this);\n    if (data.Response === \"False\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"N\\xe3o existe\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n        lineNumber: 33,\n        columnNumber: 44\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, m.imdbID, true, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n                lineNumber: 37,\n                columnNumber: 39\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\nfunction TheLink({ url , handler  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/movies3.js\",\n            onClick: handler,\n            children: [\n                \" \",\n                url === \"\" ? \"Mostrar\" : \"Ocultar\",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\nfunction Movies33() {\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        url: \"\",\n        titleSearchString: \"\",\n        typeSearchString: \"\"\n    });\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.url, async ()=>{\n        if (!state.url || !state.titleSearchString || !state.typeSearchString) return {\n            Search: \"\"\n        };\n        if (state.url === \"\" || state.titleSearchString === \"\" || state.typeSearchString === \"\") return {\n            Search: \"\"\n        };\n        const res = await fetch(`${state.url}/?apikey=b50d4423&s=${state.titleSearchString}&y=${state.yearSearchNumber}`);\n        const json = await res.json();\n        return json;\n    });\n    const onClickHandler = ()=>{\n        const t = document.querySelector(\"#titleSearchString\").value;\n        const s = document.querySelector(\"#typeSearchString\").value;\n        if (state.url === \"\") {\n            setState({\n                url: \"https://www.omdbapi.com\",\n                titleSearchString: t,\n                typeSearchString: s\n            });\n        } else {\n            setState({\n                url: \"\",\n                titleSearchString: state.titleSearchString,\n                typeSearchString: state.typeSearchString\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheForm, {\n                filtro: \"Titulo\",\n                url: state.url,\n                acao: onClickHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: error ? {\n                    error: \"Erro na pesquisa\"\n                } : data ? data : {\n                    Search: \"\"\n                },\n                show: state.url !== \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\next0\\\\pages\\\\movies33.js\",\n        lineNumber: 85,\n        columnNumber: 9\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzPzcyYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZUZvcm19IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlRm9ybSh7dXJsLCBhY2FvfSl7XHJcbiAgICBjb25zdHtyZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6e2Vycm9yc319ID0gdXNlRm9ybSgpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWUgPSAnZm9ybS1zZWFyY2gtbW92aWUnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoYWNhbyl9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVNlYXJjaFN0cmluZ1wiPkZpbHRybyBkZSB0aXR1bG88L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRpdGxlU2VhcmNoU3RyaW5nXCIgey4uLnJlZ2lzdGVyKFwidGl0bGVTZWFyY2hTdHJpbmdcIiwge3JlcXVpcmVkOiB0cnVlLCBtaW5MZW5ndGg6IDJ9KX0gdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJ0cnVlXCIgcGxhY2Vob2xkZXI9J1TDrXR1bG8nPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnRpdGxlU2VhcmNoU3RyaW5nICYmIDxzcGFuPkluc2lyYSBvIG3DrW5pbW8gZGUgY2FyYWN0ZXJlczwvc3Bhbj59XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidHlwZVNlYXJjaFN0cmluZ1wiIHsuLi5yZWdpc3RlcihcInR5cGVTZWFyY2hTdHJpbmdcIiwge3JlcXVpcmVkOiB0cnVlLCBtaW5MZW5ndGg6IDUsIG1heExlbmd0aDogNX0pfSB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cInRydWVcIiBwbGFjZWhvbGRlcj0nVGlwbyc+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMudHlwZVNlYXJjaFN0cmluZyAmJiA8c3Bhbj4gSW5zaXJhIGEgcGFsYXZyYSBtb3ZpZSA8L3NwYW4+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz57dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ308L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZU1vdmllcyh7ZGF0YSxzaG93fSl7XHJcblxyXG4gICAgaWYgKCFzaG93KSByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiAoPGRpdj5mYWxoYSBuYSBwZXNxdWlzYTwvZGl2PilcclxuICAgIGlmIChkYXRhLlNlYXJjaCA9PT0gJycgKSByZXR1cm4gKDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PilcclxuICAgIGlmIChkYXRhLlJlc3BvbnNlID09PSAnRmFsc2UnKSByZXR1cm4gKDxkaXY+TsOjbyBleGlzdGU8L2Rpdj4pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7IGRhdGEuU2VhcmNoLm1hcCggKG0pID0+IDxkaXYga2V5PXttLmltZGJJRH0+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2PiAgKSB9ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVMaW5rKHt1cmwsIGhhbmRsZXJ9KXtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWVzMy5qc1wiIG9uQ2xpY2s9e2hhbmRsZXJ9PiB7dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ30gPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMzMygpe1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe3VybDonJywgdGl0bGVTZWFyY2hTdHJpbmc6JycsIHR5cGVTZWFyY2hTdHJpbmc6Jyd9KTtcclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1Ioc3RhdGUudXJsLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFzdGF0ZS51cmwgfHwgIXN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nIHx8ICFzdGF0ZS50eXBlU2VhcmNoU3RyaW5nKSByZXR1cm4ge1NlYXJjaDonJ31cclxuICAgICAgICBpZiAoc3RhdGUudXJsID09PSAnJyB8fCBzdGF0ZS50aXRsZVNlYXJjaFN0cmluZyA9PT0nJyB8fCBzdGF0ZS50eXBlU2VhcmNoU3RyaW5nID09PSAnJykgcmV0dXJuIHtTZWFyY2g6Jyd9XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c3RhdGUudXJsfS8/YXBpa2V5PWI1MGQ0NDIzJnM9JHtzdGF0ZS50aXRsZVNlYXJjaFN0cmluZ30meT0ke3N0YXRlLnllYXJTZWFyY2hOdW1iZXJ9YClcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGpzb25cclxuXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlU2VhcmNoU3RyaW5nJykudmFsdWVcclxuICAgICAgICBjb25zdCBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGVTZWFyY2hTdHJpbmcnKS52YWx1ZVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUudXJsID09PSAnJykge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7dXJsOidodHRwczovL3d3dy5vbWRiYXBpLmNvbScsdGl0bGVTZWFyY2hTdHJpbmc6dCwgdHlwZVNlYXJjaFN0cmluZzpzfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0U3RhdGUoe3VybDonJyx0aXRsZVNlYXJjaFN0cmluZzogc3RhdGUudGl0bGVTZWFyY2hTdHJpbmcsIHR5cGVTZWFyY2hTdHJpbmc6IHN0YXRlLnR5cGVTZWFyY2hTdHJpbmd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRoZUZvcm0gZmlsdHJvPXsnVGl0dWxvJ30gdXJsPXtzdGF0ZS51cmx9IGFjYW89e29uQ2xpY2tIYW5kbGVyfS8+XHJcbiAgICAgICAgICAgIDxUaGVNb3ZpZXMgZGF0YT17ZXJyb3I/e2Vycm9yOidFcnJvIG5hIHBlc3F1aXNhJ306IGRhdGEgPyBkYXRhOiB7U2VhcmNoOicnfSB9IHNob3c9e3N0YXRlLnVybCAhPT0gJyd9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwiVGhlRm9ybSIsInVybCIsImFjYW8iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsImRpdiIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsInR5cGUiLCJhdXRvQ29tcGxldGUiLCJwbGFjZWhvbGRlciIsInRpdGxlU2VhcmNoU3RyaW5nIiwic3BhbiIsIm1heExlbmd0aCIsInR5cGVTZWFyY2hTdHJpbmciLCJidXR0b24iLCJUaGVNb3ZpZXMiLCJkYXRhIiwic2hvdyIsImVycm9yIiwiU2VhcmNoIiwiUmVzcG9uc2UiLCJtYXAiLCJtIiwiVGl0bGUiLCJZZWFyIiwiaW1kYklEIiwiVGhlTGluayIsImhhbmRsZXIiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJNb3ZpZXMzMyIsInN0YXRlIiwic2V0U3RhdGUiLCJyZXMiLCJmZXRjaCIsInllYXJTZWFyY2hOdW1iZXIiLCJqc29uIiwib25DbGlja0hhbmRsZXIiLCJ0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJzIiwiZmlsdHJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies33.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies33.js"));
module.exports = __webpack_exports__;

})();