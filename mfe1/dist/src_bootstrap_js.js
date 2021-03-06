(self["webpackChunk_redux_reducer_injection_mfe1"] = self["webpackChunk_redux_reducer_injection_mfe1"] || []).push([["src_bootstrap_js"],{

/***/ "./src/DispatchControls.js":
/*!*********************************!*\
  !*** ./src/DispatchControls.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mfe1slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mfe1slice.js */ "./src/mfe1slice.js");



const {
  updateGlobalCount,
  selectGlobalLanguage
} = _mfe1slice_js__WEBPACK_IMPORTED_MODULE_2__.actions;

const DispatchControls = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px',
      border: 'solid 1px gainsboro',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Global Actions Dispatchers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: {
      margin: '5px'
    },
    onClick: () => dispatch(updateGlobalCount(1))
  }, "Increment Global Counter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: {
      margin: '5px'
    },
    onClick: () => dispatch(updateGlobalCount(-1))
  }, "Decrement Global Counter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: {
      margin: '5px'
    },
    onClick: () => dispatch(selectGlobalLanguage('en'))
  }, "Select 'en' as Global Language"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: {
      margin: '5px'
    },
    onClick: () => dispatch(selectGlobalLanguage('fr'))
  }, "Select 'fr' as Global Language"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DispatchControls);

/***/ }),

/***/ "./src/MFE1.js":
/*!*********************!*\
  !*** ./src/MFE1.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled.jsx */ "./src/styled.jsx");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _mfe1slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mfe1slice.js */ "./src/mfe1slice.js");





const {
  getGlobalCount,
  getGlobalLanguage
} = _mfe1slice_js__WEBPACK_IMPORTED_MODULE_4__.selectors;

const MFE1 = () => {
  const globalLanguage = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getGlobalLanguage);
  const globalCount = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getGlobalCount);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null, _constants_js__WEBPACK_IMPORTED_MODULE_3__.default[globalLanguage]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "The count is: ", globalCount, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "MFE1 architecture:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Exposes two endpoints (via webpack 5 module federation): ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "reducer"), " and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "MFE1"), ".  These are imported by the host app."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "reducer"), " endpoint provides access to the MFE reducer (via default export) as well a the scope name to be used in the store (via the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "scope"), " constant)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "MFE1"), " endpoint provides access to the MFE react component itself.  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "NOTE:"), " the exported react component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "MUST NOT"), " be wrapped in a redux ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Provider"), " as this would result in a nested store when it is imported into the host which can lead to errors in reading or updating the store"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Stores ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "globalLanguage"), " and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "globalCount"), " in it's local store (scoped to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "mfe1"), ") for updating display of the greeting and count respectively"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "MFE1 reducer is subscribed to actions of type ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "GLOBAL/SELECT_LANGUAGE"), " and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "GLOBAL/UPDATE_COUNT"), " to update the mfe1 scoped store"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Note:"), " this component does not dispatch any actions whatsoever, updates to its store are entirely dependent on global actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Note:"), " to properly display this MFE as a stand alone app it must be provided with its own store.  In this case the root url for the app (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "http://localhost:3002",
    target: "_blank"
  }, "http://localhost:3002"), ") loads MFE1 wrapped in a redux ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Provider"), " (found in ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "src/bootstrap.js"), ")")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MFE1);

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom?2b58");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _MFE1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MFE1 */ "./src/MFE1.js");
/* harmony import */ var _DispatchControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DispatchControls */ "./src/DispatchControls.js");







const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_3__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DispatchControls__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MFE1__WEBPACK_IMPORTED_MODULE_4__.default, null));
};

react_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  en: 'Welcome to MFE1!',
  fr: 'Bienvenue a MFE1!'
});

/***/ }),

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

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mfe1slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mfe1slice.js */ "./src/mfe1slice.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    mfe1: _mfe1slice_js__WEBPACK_IMPORTED_MODULE_1__.default
  }
}));

/***/ }),

/***/ "./src/styled.jsx":
/*!************************!*\
  !*** ./src/styled.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`
  font-size: 48px;
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif !important;
`);

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_js.js.map