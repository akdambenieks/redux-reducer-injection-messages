(self["webpackChunk_redux_reducer_injection_mfe3"] = self["webpackChunk_redux_reducer_injection_mfe3"] || []).push([["src_reducer_js"],{

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
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';
const initialState = {
  globalLanguage: 'en',
  globalCount: 0
};
const mfeScope = 'mfe3';
const actions = {
  updateGlobalCount: byValue => ({
    type: UPDATE_GLOBAL_COUNT,
    payload: byValue
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GLOBAL_LANGUAGE:
      return { ...state,
        globalLanguage: action.payload
      };

    case UPDATE_GLOBAL_COUNT:
      return { ...state,
        globalCount: state.globalCount + action.payload
      };

    default:
      return state;
  }
};

const selectors = {
  getGlobalCount: state => state[mfeScope].globalCount,
  getGlobalLanguage: state => state[mfeScope].globalLanguage
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ })

}]);
//# sourceMappingURL=src_reducer_js.js.map