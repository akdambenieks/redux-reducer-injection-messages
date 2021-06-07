(self["webpackChunk_redux_reducer_injection_mfe1"] = self["webpackChunk_redux_reducer_injection_mfe1"] || []).push([["src_reducer_js"],{

/***/ "./src/mfe1slice.js":
/*!**************************!*\
  !*** ./src/mfe1slice.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mfe1Slice": () => (/* binding */ mfe1Slice),
/* harmony export */   "selectors": () => (/* binding */ selectors),
/* harmony export */   "actions": () => (/* binding */ actions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const scope = 'mfe1';
const initialState = {
  globalLanguage: 'en',
  globalCount: 0
}; //globally scoped actions must be created individually using createAction

const globalActions = {
  updateGlobalCount: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('GLOBAL/UPDATE_COUNT'),
  selectGlobalLanguage: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('GLOBAL/SELECT_LANGUAGE')
};
const mfe1Slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: scope,
  initialState,
  reducers: {
    test: (state, action) => {
      console.log(action.type);
      state;
    }
  },
  // global reducers are passed using a builder function via the extraReducers key
  extraReducers: builder => {
    builder.addCase(globalActions.updateGlobalCount, (state, action) => {
      state.globalCount += action.payload;
    }).addCase(globalActions.selectGlobalLanguage, (state, action) => {
      state.globalLanguage = action.payload;
    }).addDefaultCase(state => {
      state;
    });
  }
});
const selectors = {
  getGlobalLanguage: state => state[scope].globalLanguage,
  getGlobalCount: state => state[scope].globalCount
}; // global actions are not necessarily be disptched from the MFE, the MFE may simply subscribe to them

const actions = { ...mfe1Slice.actions,
  ...globalActions
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mfe1Slice.reducer);

/***/ }),

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scope": () => (/* binding */ scope),
/* harmony export */   "selectors": () => (/* binding */ selectors),
/* harmony export */   "actions": () => (/* binding */ actions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mfe1slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mfe1slice.js */ "./src/mfe1slice.js");
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';

const scope = 'mfe1';
const initialState = {
  globalLanguage: 'en',
  globalCount: 0
}; // const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_GLOBAL_COUNT:
//       return {
//         ...state,
//         globalCount: state.globalCount + action.payload
//       }
//     case SELECT_GLOBAL_LANGUAGE:
//       return {
//         ...state,
//         globalLanguage: action.payload
//       }
//     default:
//       return state
//   }
// };

const actions = {};
const selectors = {
  getGlobalLanguage: state => state[scope].globalLanguage,
  getGlobalCount: state => state[scope].globalCount
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mfe1slice_js__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ })

}]);
//# sourceMappingURL=src_reducer_js.js.map