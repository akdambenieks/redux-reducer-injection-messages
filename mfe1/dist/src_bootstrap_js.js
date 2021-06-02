(self["webpackChunk_redux_reducer_injection_mfe1"] = self["webpackChunk_redux_reducer_injection_mfe1"] || []).push([["src_bootstrap_js"],{

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
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/reducer.js");
/* harmony import */ var _styled_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled.jsx */ "./src/styled.jsx");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _components_Counter_index_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Counter/index.jsx */ "./src/components/Counter/index.jsx");






const {
  getGlobalCount,
  getGlobalLanguage,
  getScopeCount
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.selectors;
const {
  updateGlobalCount,
  updateScopeCount
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.actions;

const MFE1 = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const globalLanguage = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getGlobalLanguage(state));
  const globalCount = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getGlobalCount);
  const scopeCount = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getScopeCount);

  const onGlobalIncrement = () => dispatch(updateGlobalCount(1));

  const onGlobalDecrement = () => dispatch(updateGlobalCount(-1));

  const onScopeIncrement = () => dispatch(updateScopeCount(1));

  const onScopeDecrement = () => dispatch(updateScopeCount(-1)); // NOTE: This MFE doesn't have it's own provider/store I think that we still need to pass in the store from the host as an optional prop with the default store being generated locally


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null, _constants_js__WEBPACK_IMPORTED_MODULE_4__.default[globalLanguage]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Counter_index_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: "Global Counter for MFE1",
    count: globalCount,
    onIncrement: onGlobalIncrement,
    onDecrement: onGlobalDecrement,
    themeColor: "blue"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Counter_index_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: "Counter for MFE1 Scope",
    count: scopeCount,
    onIncrement: onScopeIncrement,
    onDecrement: onScopeDecrement,
    themeColor: "green"
  }));
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






const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_3__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MFE1__WEBPACK_IMPORTED_MODULE_4__.default, null));
};

react_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./src/components/Counter/index.jsx":
/*!******************************************!*\
  !*** ./src/components/Counter/index.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled.jsx */ "./src/components/Counter/styled.jsx");



const Counter = ({
  title,
  count,
  onIncrement,
  onDecrement,
  themeColor
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_1__.CounterWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_1__.CounterTitle, {
    themeColor: themeColor
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_1__.CounterContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_1__.CounterButton, {
    onClick: () => onIncrement(),
    themeColor: themeColor
  }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_1__.CounterCount, null, count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_1__.CounterButton, {
    onClick: () => onDecrement(),
    themeColor: themeColor
  }, "-")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ "./src/components/Counter/styled.jsx":
/*!*******************************************!*\
  !*** ./src/components/Counter/styled.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterButton": () => (/* binding */ CounterButton),
/* harmony export */   "CounterContainer": () => (/* binding */ CounterContainer),
/* harmony export */   "CounterCount": () => (/* binding */ CounterCount),
/* harmony export */   "CounterTitle": () => (/* binding */ CounterTitle),
/* harmony export */   "CounterWrapper": () => (/* binding */ CounterWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CounterButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  font-size: 32px;
  padding: 4px 16px;
  background-color: white;
  text-decoration: none;
  font-weight: 500;
  color: ${({
  themeColor
}) => themeColor};
  border: solid 1px gainsboro;
  border-radius: 8px;
`;
const CounterContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 16px 0px;
`;
const CounterCount = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin: 0px 16px;
  font-size: 48px;
  min-width: 80px;
  text-align: center;
`;
const CounterTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: inline;
  font-size: 24px;
  color: ${({
  themeColor
}) => themeColor};
`;
const CounterWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: middle;
  font-family: Arial, Helvetica, sans-serif !important;
  margin-bottom: 48px;
`;

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/reducer.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  mfe1: _reducer__WEBPACK_IMPORTED_MODULE_0__.default
})));

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