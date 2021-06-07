(self["webpackChunk_redux_reducer_injection_mfe1"] = self["webpackChunk_redux_reducer_injection_mfe1"] || []).push([["src_mfe1slice_js"],{

/***/ "./src/mfe1slice.js":
/*!**************************!*\
  !*** ./src/mfe1slice.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scope": () => (/* binding */ scope),
/* harmony export */   "mfe1Slice": () => (/* binding */ mfe1Slice),
/* harmony export */   "selectors": () => (/* binding */ selectors),
/* harmony export */   "actions": () => (/* binding */ actions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const scope = 'mfe1';
const initialState = {
  globalLanguage: 'en',
  globalCount: 0
}; //globally scoped actions must be created separately from mfe scoped actions using createAction

const globalActions = {
  updateGlobalCount: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('GLOBAL/UPDATE_COUNT'),
  selectGlobalLanguage: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('GLOBAL/SELECT_LANGUAGE')
};
const mfe1Slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: scope,
  initialState,
  reducers: {},
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
}; // global actions are not necessarily dispatched from the MFE, the MFE may simply subscribe to them
// The actions are included here so they can be accessed for the component locally via the bootstrap vesrions for local development.

const actions = { ...mfe1Slice.actions,
  ...globalActions
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mfe1Slice.reducer);

/***/ })

}]);
//# sourceMappingURL=src_mfe1slice_js.js.map