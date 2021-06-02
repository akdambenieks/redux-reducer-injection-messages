(self["webpackChunk_redux_reducer_injection_mfe2"] = self["webpackChunk_redux_reducer_injection_mfe2"] || []).push([["src_reducer_js"],{

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mfeScope": () => (/* binding */ mfeScope),
/* harmony export */   "actions": () => (/* binding */ actions),
/* harmony export */   "selectors": () => (/* binding */ selectors),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

const UPDATE_SCOPE_COUNT = 'MFE2/UPDATE_COUNT';
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const initialState = {
  actionLog: {}
};
const mfeScope = 'mfe2';
const actions = {
  updateScopeCount: byValue => ({
    type: UPDATE_SCOPE_COUNT,
    payload: byValue
  }),
  updateGlobalCount: byValue => ({
    type: UPDATE_GLOBAL_COUNT,
    payload: byValue
  })
};

const reducer = (state = initialState, action) => {
  if (action.type.startsWith('GLOBAL/') || action.type.startsWith('MFE2/')) {
    const existingLogForActionType = state.actionLog[action.type] || [];
    return { ...state,
      actionLog: { ...state.actionLog,
        [action.type]: [...existingLogForActionType, action.payload]
      }
    };
  }

  return state;
};

const selectors = {
  getGlobalLanguage: state => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.processGlobalLanguageActions)(state[mfeScope].actionLog),
  getScopeCount: state => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.processScopeCountActions)(state[mfeScope].actionLog),
  getGlobalCount: state => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.processGlobalCountActions)(state[mfeScope].actionLog)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processGlobalLanguageActions": () => (/* binding */ processGlobalLanguageActions),
/* harmony export */   "processGlobalCountActions": () => (/* binding */ processGlobalCountActions),
/* harmony export */   "processScopeCountActions": () => (/* binding */ processScopeCountActions)
/* harmony export */ });
const processGlobalLanguageActions = actions => {
  const globalLanguageActions = actions['GLOBAL/SELECT_LANGUAGE'] || [];
  return globalLanguageActions[actions.length - 1] || 'en';
};

const processGlobalCountActions = actions => {
  const globalCountActions = actions['GLOBAL/UPDATE_COUNT'] || [];
  return globalCountActions.reduce((acc, action) => {
    return acc + action;
  }, 0);
};

const processScopeCountActions = actions => {
  const scopeCountActions = actions['MFE2/UPDATE_COUNT'] || [];
  return scopeCountActions.reduce((acc, action) => {
    return acc + action;
  }, 0);
};



/***/ })

}]);
//# sourceMappingURL=src_reducer_js.js.map