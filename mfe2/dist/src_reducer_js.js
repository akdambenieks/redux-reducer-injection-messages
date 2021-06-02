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
const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';
const initialState = {
  actionLogForCount: [],
  language: 'en'
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
  switch (action.type) {
    case UPDATE_GLOBAL_COUNT:
      const newState = { ...state
      };

      if (action.payload === 1) {
        newState.actionLogForCount.push('Increment occured');
      } else {
        newState.actionLogForCount.push("Decrement occured");
      }

      return newState;

    case SELECT_GLOBAL_LANGUAGE:
      return { ...state,
        language: action.payload
      };

    default:
      return state;
  }
};

const selectors = {
  getGlobalLanguage: state => state[mfeScope].language,
  getActionLog: state => state[mfeScope].actionLogForCount // getScopeCount: (state) => processScopeCountActions(state[mfeScope].actionLog),
  // getGlobalCount: (state) => processGlobalCountActions(state[mfeScope].actionLog)

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