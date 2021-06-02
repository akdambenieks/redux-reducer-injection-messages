(self["webpackChunk_redux_reducer_injection_mfe1"] = self["webpackChunk_redux_reducer_injection_mfe1"] || []).push([["src_reducer_js"],{

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mfeScope": () => (/* binding */ mfeScope),
/* harmony export */   "selectors": () => (/* binding */ selectors),
/* harmony export */   "actions": () => (/* binding */ actions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const UPDATE_SCOPE_COUNT = 'MFE1/UPDATE_COUNT';
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';
const mfeScope = 'mfe1';
const initialState = {
  globalLanguage: 'en',
  globalCount: 0,
  scopeCount: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GLOBAL_COUNT:
      return { ...state,
        globalCount: state.globalCount + action.payload
      };

    case UPDATE_SCOPE_COUNT:
      return { ...state,
        scopeCount: state.scopeCount + action.payload
      };

    case SELECT_GLOBAL_LANGUAGE:
      return { ...state,
        globalLanguage: action.payload
      };

    default:
      return state;
  }
};

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
const selectors = {
  getGlobalLanguage: state => state[mfeScope] ? state[mfeScope].globalLanguage : initialState.globalLanguage,
  getGlobalCount: state => state[mfeScope] ? state[mfeScope].globalCount : initialState.globalCount,
  getScopeCount: state => state[mfeScope] ? state[mfeScope].scopeCount : initialState.scopeCount
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ })

}]);
//# sourceMappingURL=src_reducer_js.js.map