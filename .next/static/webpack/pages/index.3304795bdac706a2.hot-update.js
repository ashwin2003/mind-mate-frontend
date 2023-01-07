"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Wave.tsx":
/*!*********************************!*\
  !*** ./src/components/Wave.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hooks_useCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useCanvas */ \"./src/hooks/useCanvas.ts\");\n/* harmony import */ var _hooks_useResponsiveSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useResponsiveSize */ \"./src/hooks/useResponsiveSize.ts\");\n/* harmony import */ var _utils_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/wave */ \"./src/utils/wave.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nvar Wave = function() {\n    _s1();\n    var context = (0,_hooks_useCanvas__WEBPACK_IMPORTED_MODULE_0__.useCanvasContext)().context;\n    var width = (0,_hooks_useResponsiveSize__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().width;\n    var height = 600;\n    var frequency = 0.013;\n    var waves = {\n        frontWave: new _utils_wave__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([\n            0.0211,\n            0.028,\n            0.015\n        ], 'rgb(102, 204, 255, 0.5)'),\n        backWave: new _utils_wave__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([\n            0.0122,\n            0.018,\n            0.005\n        ], 'rgb(249, 168, 168, 0.1)')\n    };\n    var render = function() {\n        context === null || context === void 0 ? void 0 : context.clearRect(0, 0, width, height);\n        Object.entries(waves).forEach(function(param) {\n            var _param = _slicedToArray(param, 2), wave = _param[1];\n            wave.draw(context, width, height, frequency);\n        });\n        frequency += 0.013;\n        requestAnimationFrame(render);\n    };\n    if (context) render();\n    return null;\n};\n_s1(Wave, \"iqicXJw2lnscz33xDdQd32CmsXA=\", false, function() {\n    return [\n        _hooks_useCanvas__WEBPACK_IMPORTED_MODULE_0__.useCanvasContext,\n        _hooks_useResponsiveSize__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Wave;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wave);\nvar _c;\n$RefreshReg$(_c, \"Wave\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XYXZlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVxRDtBQUNLO0FBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsR0FBSyxDQUFDRyxJQUFJLEdBQU8sUUFDakIsR0FEdUIsQ0FBQzs7SUFDdEIsR0FBSyxDQUFHQyxPQUFPLEdBQUtKLGtFQUFnQixHQUE1QkksT0FBTztJQUNmLEdBQUssQ0FBR0MsS0FBSyxHQUFLSixvRUFBaUIsR0FBM0JJLEtBQUs7SUFDYixHQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHO0lBQ2xCLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLEtBQUs7SUFDckIsR0FBSyxDQUFDQyxLQUFLLEdBQUcsQ0FBQztRQUNiQyxTQUFTLEVBQUUsR0FBRyxDQUFDUCxtREFBTyxDQUFDLENBQUM7WUFBQSxNQUFNO1lBQUUsS0FBSztZQUFFLEtBQUs7UUFBQSxDQUFDLEVBQUUsQ0FBeUI7UUFDeEVRLFFBQVEsRUFBRSxHQUFHLENBQUNSLG1EQUFPLENBQUMsQ0FBQztZQUFBLE1BQU07WUFBRSxLQUFLO1lBQUUsS0FBSztRQUFBLENBQUMsRUFBRSxDQUF5QjtJQUN6RSxDQUFDO0lBRUQsR0FBSyxDQUFDUyxNQUFNLEdBQUcsUUFDakIsR0FEdUIsQ0FBQztRQUNwQlAsT0FBTyxhQUFQQSxPQUFPLEtBQVBBLElBQUksQ0FBSkEsQ0FBa0IsR0FBbEJBLElBQUksQ0FBSkEsQ0FBa0IsR0FBbEJBLE9BQU8sQ0FBRVEsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVQLEtBQUssRUFBRUMsTUFBTTtRQUN0Q08sTUFBTSxDQUFDQyxPQUFPLENBQUNOLEtBQUssRUFBRU8sT0FBTyxDQUFDLFFBQVEsUUFBTSxDQUFDO21EQUFYQyxJQUFJO1lBQ3BDQSxJQUFJLENBQUNDLElBQUksQ0FBQ2IsT0FBTyxFQUFHQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsU0FBUztRQUM5QyxDQUFDO1FBQ0RBLFNBQVMsSUFBSSxLQUFLO1FBQ2xCVyxxQkFBcUIsQ0FBQ1AsTUFBTTtJQUM5QixDQUFDO0lBQ0QsRUFBRSxFQUFFUCxPQUFPLEVBQUVPLE1BQU07SUFDbkIsTUFBTSxDQUFDLElBQUk7QUFDYixDQUFDO0lBcEJLUixJQUFJOztRQUNZSCw4REFBZ0I7UUFDbEJDLGdFQUFpQjs7O0tBRi9CRSxJQUFJO0FBc0JWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV2F2ZS50c3g/MWIwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlQ2FudmFzQ29udGV4dCB9IGZyb20gJy4uL2hvb2tzL3VzZUNhbnZhcyc7XG5pbXBvcnQgdXNlUmVzcG9uc2l2ZVNpemUgZnJvbSAnLi4vaG9va3MvdXNlUmVzcG9uc2l2ZVNpemUnO1xuaW1wb3J0IFdhdmVPYmogZnJvbSAnLi4vdXRpbHMvd2F2ZSc7XG5cbmNvbnN0IFdhdmU6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbnRleHQgfSA9IHVzZUNhbnZhc0NvbnRleHQoKTtcbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlUmVzcG9uc2l2ZVNpemUoKTtcbiAgY29uc3QgaGVpZ2h0ID0gNjAwO1xuICBsZXQgZnJlcXVlbmN5ID0gMC4wMTM7XG4gIGNvbnN0IHdhdmVzID0ge1xuICAgIGZyb250V2F2ZTogbmV3IFdhdmVPYmooWzAuMDIxMSwgMC4wMjgsIDAuMDE1XSwgJ3JnYigxMDIsIDIwNCwgMjU1LCAwLjUpJyksXG4gICAgYmFja1dhdmU6IG5ldyBXYXZlT2JqKFswLjAxMjIsIDAuMDE4LCAwLjAwNV0sICdyZ2IoMjQ5LCAxNjgsIDE2OCwgMC4xKScpLFxuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBjb250ZXh0Py5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgT2JqZWN0LmVudHJpZXMod2F2ZXMpLmZvckVhY2goKFssIHdhdmVdKSA9PiB7XG4gICAgICB3YXZlLmRyYXcoY29udGV4dCEsIHdpZHRoLCBoZWlnaHQsIGZyZXF1ZW5jeSk7XG4gICAgfSk7XG4gICAgZnJlcXVlbmN5ICs9IDAuMDEzO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9O1xuICBpZiAoY29udGV4dCkgcmVuZGVyKCk7XG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2F2ZTtcbiJdLCJuYW1lcyI6WyJ1c2VDYW52YXNDb250ZXh0IiwidXNlUmVzcG9uc2l2ZVNpemUiLCJXYXZlT2JqIiwiV2F2ZSIsImNvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImZyZXF1ZW5jeSIsIndhdmVzIiwiZnJvbnRXYXZlIiwiYmFja1dhdmUiLCJyZW5kZXIiLCJjbGVhclJlY3QiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsIndhdmUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Wave.tsx\n");

/***/ })

});