(self["webpackChunk_redux_reducer_injection_mfe2"] = self["webpackChunk_redux_reducer_injection_mfe2"] || []).push([["src_bootstrap_js"],{

/***/ "./src/MFE2.js":
/*!*********************!*\
  !*** ./src/MFE2.js ***!
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
  getGlobalLanguage,
  getScopeCount,
  getGlobalCount
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.selectors;
const {
  updateScopeCount,
  updateGlobalCount
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.actions;

const MFE2 = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const globalLanguage = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getGlobalLanguage);
  const scopeCount = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getScopeCount);
  const globalCount = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getGlobalCount);
  const [countUpdateValue, setCountUpdateValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);

  const onScopeIncrement = () => dispatch(updateScopeCount(parseInt(countUpdateValue)));

  const onScopeDecrement = () => dispatch(updateScopeCount(parseInt(-countUpdateValue)));

  const onGlobalIncrement = () => dispatch(updateGlobalCount(parseInt(countUpdateValue)));

  const onGlobalDecrement = () => dispatch(updateGlobalCount(parseInt(-countUpdateValue)));

  const changeCountUpdateValue = value => setCountUpdateValue(value);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.StyledTitle, null, _constants_js__WEBPACK_IMPORTED_MODULE_4__.default[globalLanguage]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.CountUpdateValueContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.StyledLabel, {
    htmlFor: "count-update-value"
  }, "Update Count By:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.StyledInput, {
    type: "number",
    id: "count-update-value",
    onChange: e => changeCountUpdateValue(e.currentTarget.value),
    value: countUpdateValue
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Counter_index_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: "Global Counter for MFE2",
    count: globalCount,
    onIncrement: onGlobalIncrement,
    onDecrement: onGlobalDecrement,
    themeColor: "blue"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Counter_index_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: "Counter for MFE2 Scope",
    count: scopeCount,
    onIncrement: onScopeIncrement,
    onDecrement: onScopeDecrement,
    themeColor: "red"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MFE2);

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
/* harmony import */ var _MFE2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MFE2 */ "./src/MFE2.js");






const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_3__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MFE2__WEBPACK_IMPORTED_MODULE_4__.default, null));
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
  en: 'Welcome to MFE2!',
  fr: 'Bienvenue a MFE2!'
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
  mfe2: _reducer__WEBPACK_IMPORTED_MODULE_0__.default
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
/* harmony export */   "StyledTitle": () => (/* binding */ StyledTitle),
/* harmony export */   "CountUpdateValueContainer": () => (/* binding */ CountUpdateValueContainer),
/* harmony export */   "StyledLabel": () => (/* binding */ StyledLabel),
/* harmony export */   "StyledInput": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`
  font-size: 48px;
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif !important;
`;
const CountUpdateValueContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  align-items: center;
  justify-content: center;
`;
const StyledLabel = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().label)`
  font-size: 24px;
  color: red;
  font-family: Arial, Helvetica, sans-serif !important;
  padding-bottom: 16px;
`;
const StyledInput = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().input)`
  padding: 4px 8px;
  font-size: 32px;
  border: solid 1px gainsboro;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif !important;
  text-align: center;
  width: 100px;
`;

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
//# sourceMappingURL=src_bootstrap_js.js.map