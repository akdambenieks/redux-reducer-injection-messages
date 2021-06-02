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
const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const initialState = {
  actionLogForCount: [],
  globalLanguage: 'en'
};
const mfeScope = 'mfe2';
const actions = {};

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
        globalLanguage: action.payload
      };

    default:
      return state;
  }
};

const selectors = {
  getGlobalLanguage: state => state[mfeScope].globalLanguage,
  getActionLog: state => state[mfeScope].actionLogForCount
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ })

}]);
//# sourceMappingURL=src_reducer_js.js.map