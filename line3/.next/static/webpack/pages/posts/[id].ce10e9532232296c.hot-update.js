"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Post = (param)=>{\n    let { title, content } = param;\n    _s();\n    const [valueTotal, setValueTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setValueTotal(content.reduce((total, value)=>total + parseInt(value, 10) || 0, 0)); //Convert variable \"value\" from str to int, update variable \"valueTotal\" when content changes\n    }, [\n        content\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let scrollPosition = 0;\n        const handleScroll = ()=>{\n            const newScrollPosition = window.scrollY;\n            // Delay 200ms\n            setTimeout(()=>{\n                // Move the image to the left if scrolling down\n                if (newScrollPosition > scrollPosition && newScrollPosition < 1000 && newScrollPosition > 900) {\n                    document.querySelector(\".Line3Train\").style.left = \"-350px\";\n                } else {\n                    document.querySelector(\".Line3Train\").style.left = \"350px\";\n                }\n                scrollPosition = newScrollPosition;\n            }, 200);\n        };\n        document.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            document.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                href: \"https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap\",\n                rel: \"stylesheet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"secOne\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"ValueTotalText\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Scarboroughians have lost\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    valueTotal,\n                                    \" minutes\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"since the closure of Line 3.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.ttcriders.ca/servicecuts\",\n                                class: \"button1\",\n                                children: \"Share your experiences with shuttle buses!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"towercontain\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        class: \"tower left\",\n                                        src: \"/tower.svg\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        class: \"tower right\",\n                                        src: \"/tower.svg\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                class: \"Line3Train\",\n                                id: \"Line3T//rain\",\n                                src: \"/Line3Train.svg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"Line3Rail\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"Line3PolePlacement\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"Line3Pole\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"Line3Pole\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"Line3Pole\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"Line3Pole\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"GradTrans\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"secTwo\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"ValueTotalText blackPriority\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"The Line 3 busway will save commuters \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"10 minutes\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"in each direction, but the busway is stalled!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"interiorContainerFlexBody\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        class: \"interiorImg\",\n                                        src: \"/Line3Replacement.png\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"text\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Running from Ellesmere Road to Kennedy Station, this busway will benefit all of Scarborough, even after the opening of the Scarborough busway.\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"Buses won’t get stuck in traffic and be faster\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"An opportunity for green space\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                                lineNumber: 79,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"More cycling trails, connecting Gatineau trail\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"Reduced traffic in Kennedy Road and Midland Avenue\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: \"Legacy busway projects like the York University busway are still being used today, despite their subway extension counterparts\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                                lineNumber: 82,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\twotoque\\\\ttcLine3Calculator-1\\\\line3\\\\line3\\\\pages\\\\posts\\\\[id].js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Post, \"ixhWIvFSYfUctjpibB16PU+Su0I=\");\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9baWRdLmpzPzc5NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdvb2dsZSB9IGZyb20gJ2dvb2dsZWFwaXMnO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHRpdGxlLCBjb250ZW50IH0pID0+IHtcclxuICBjb25zdCBbdmFsdWVUb3RhbCwgc2V0VmFsdWVUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFZhbHVlVG90YWwoY29udGVudC5yZWR1Y2UoKHRvdGFsLCB2YWx1ZSkgPT4gdG90YWwgKyBwYXJzZUludCh2YWx1ZSwgMTApIHx8IDAsIDApKTsgLy9Db252ZXJ0IHZhcmlhYmxlIFwidmFsdWVcIiBmcm9tIHN0ciB0byBpbnQsIHVwZGF0ZSB2YXJpYWJsZSBcInZhbHVlVG90YWxcIiB3aGVuIGNvbnRlbnQgY2hhbmdlc1xyXG4gIH0sIFtjb250ZW50XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSAwO1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgLy8gRGVsYXkgMjAwbXNcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gTW92ZSB0aGUgaW1hZ2UgdG8gdGhlIGxlZnQgaWYgc2Nyb2xsaW5nIGRvd25cclxuICAgICAgICBpZiAobmV3U2Nyb2xsUG9zaXRpb24gPiBzY3JvbGxQb3NpdGlvbiAmJiBuZXdTY3JvbGxQb3NpdGlvbiA8IDEwMDAgJiYgbmV3U2Nyb2xsUG9zaXRpb24gPiA5MDApIHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5MaW5lM1RyYWluJykuc3R5bGUubGVmdCA9ICctMzUwcHgnOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTW92ZSB0aGUgaW1hZ2UgdG8gdGhlIHJpZ2h0IGlmIHNjcm9sbGluZyB1cFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxpbmUzVHJhaW4nKS5zdHlsZS5sZWZ0ID0gJzM1MHB4JzsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzY3JvbGxQb3NpdGlvbiA9IG5ld1Njcm9sbFBvc2l0aW9uO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRpdGlsbGl1bStXZWI6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNjAwOzAsNzAwOzAsOTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjT25lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiVmFsdWVUb3RhbFRleHRcIj5cclxuICAgICAgICAgICAgPGgyPlNjYXJib3JvdWdoaWFucyBoYXZlIGxvc3Q8L2gyPlxyXG4gICAgICAgICAgICA8aDE+e3ZhbHVlVG90YWx9IG1pbnV0ZXM8L2gxPlxyXG4gICAgICAgICAgICA8aDI+c2luY2UgdGhlIGNsb3N1cmUgb2YgTGluZSAzLjwvaDI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50dGNyaWRlcnMuY2Evc2VydmljZWN1dHNcIiBjbGFzcz1cImJ1dHRvbjFcIj5TaGFyZSB5b3VyIGV4cGVyaWVuY2VzIHdpdGggc2h1dHRsZSBidXNlcyE8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG93ZXJjb250YWluXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3MgPSBcInRvd2VyIGxlZnRcIiBzcmM9XCIvdG93ZXIuc3ZnXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3MgPSBcInRvd2VyIHJpZ2h0XCIgc3JjPVwiL3Rvd2VyLnN2Z1wiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwiTGluZTNUcmFpblwiIGlkID1cIkxpbmUzVC8vcmFpblwiIHNyYz1cIi9MaW5lM1RyYWluLnN2Z1wiPjwvaW1nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIkxpbmUzUmFpbFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIkxpbmUzUG9sZVBsYWNlbWVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiTGluZTNQb2xlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJMaW5lM1BvbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkxpbmUzUG9sZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiTGluZTNQb2xlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiR3JhZFRyYW5zXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWNUd29cIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJWYWx1ZVRvdGFsVGV4dCBibGFja1ByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgICAgPGgyPlRoZSBMaW5lIDMgYnVzd2F5IHdpbGwgc2F2ZSBjb21tdXRlcnMgPC9oMj5cclxuICAgICAgICAgICAgICA8aDE+MTAgbWludXRlczwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyPmluIGVhY2ggZGlyZWN0aW9uLCBidXQgdGhlIGJ1c3dheSBpcyBzdGFsbGVkITwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludGVyaW9yQ29udGFpbmVyRmxleEJvZHlcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImludGVyaW9ySW1nXCIgc3JjPVwiL0xpbmUzUmVwbGFjZW1lbnQucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5SdW5uaW5nIGZyb20gRWxsZXNtZXJlIFJvYWQgdG8gS2VubmVkeSBTdGF0aW9uLCB0aGlzIGJ1c3dheSB3aWxsIGJlbmVmaXQgYWxsIG9mIFNjYXJib3JvdWdoLCBldmVuIGFmdGVyIHRoZSBvcGVuaW5nIG9mIHRoZSBTY2FyYm9yb3VnaCBidXN3YXkuPC9wPlxyXG4gICAgICAgICAgICAgICAgPGxpPkJ1c2VzIHdvbuKAmXQgZ2V0IHN0dWNrIGluIHRyYWZmaWMgYW5kIGJlIGZhc3RlcjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+QW4gb3Bwb3J0dW5pdHkgZm9yIGdyZWVuIHNwYWNlPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5Nb3JlIGN5Y2xpbmcgdHJhaWxzLCBjb25uZWN0aW5nIEdhdGluZWF1IHRyYWlsPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5SZWR1Y2VkIHRyYWZmaWMgaW4gS2VubmVkeSBSb2FkIGFuZCBNaWRsYW5kIEF2ZW51ZTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+TGVnYWN5IGJ1c3dheSBwcm9qZWN0cyBsaWtlIHRoZSBZb3JrIFVuaXZlcnNpdHkgYnVzd2F5IGFyZSBzdGlsbCBiZWluZyB1c2VkIHRvZGF5LCBkZXNwaXRlIHRoZWlyIHN1YndheSBleHRlbnNpb24gY291bnRlcnBhcnRzPC9saT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgY29uc3QgYXV0aCA9IGF3YWl0IGdvb2dsZS5hdXRoLmdldENsaWVudCh7IHNjb3BlczogWydodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cy5yZWFkb25seSddIH0pO1xyXG4gIGNvbnN0IHNoZWV0cyA9IGdvb2dsZS5zaGVldHMoeyB2ZXJzaW9uOiAndjQnLCBhdXRoIH0pOyAvL1NldHMgdXAgR29vZ2xlIFNoZXRzIEFQSVxyXG5cclxuICBjb25zdCB7aWR9ID0gcXVlcnk7XHJcbiAgY29uc3QgcmFuZ2UgPSBgQjE6QmA7IC8vIEdldCByYW5nZSBvZiBzcHJlYWRzaGVldFxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuYmF0Y2hHZXQoeyAvL1NlbmQgcmVxdWVzdCB0byBBUEkgdy8gc2hlZXQgaWQgYW5kIHJhbmdlXHJcbiAgICBzcHJlYWRzaGVldElkOiBwcm9jZXNzLmVudi5TSEVFVF9JRCwgXHJcbiAgICByYW5nZXM6IFtyYW5nZV0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHZhbHVlcyA9IHJlc3BvbnNlLmRhdGEudmFsdWVSYW5nZXNbMF0/LnZhbHVlcyB8fCBbXTsgLy8gQ29sbGVjdHMgdGhvc2UgdmFsdWVzXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0aXRsZTogdmFsdWVzWzBdIHx8IG51bGwsXHJcbiAgICAgIGNvbnRlbnQ6IHZhbHVlcy5mbGF0KCksXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBvc3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJ2YWx1ZVRvdGFsIiwic2V0VmFsdWVUb3RhbCIsInJlZHVjZSIsInRvdGFsIiwidmFsdWUiLCJwYXJzZUludCIsInNjcm9sbFBvc2l0aW9uIiwiaGFuZGxlU2Nyb2xsIiwibmV3U2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwibGVmdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwibGluayIsImhyZWYiLCJyZWwiLCJjbGFzcyIsImgyIiwiaDEiLCJhIiwiaW1nIiwic3JjIiwiaWQiLCJwIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n"));

/***/ })

});