(self["webpackChunk_redux_reducer_injection_mfe2"] = self["webpackChunk_redux_reducer_injection_mfe2"] || []).push([["src_MFE2_js"],{

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





 // const { getGlobalLanguage, getScopeCount, getGlobalCount } = selectors;

const {
  getActionLog,
  getGlobalLanguage
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.selectors;
const {
  updateScopeCount,
  updateGlobalCount
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.actions;

const printActionLog = actionLog => {
  return actionLog.map((action, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: `${index}-action`
    }, index + 1, ": ", action);
  });
};

const MFE2 = () => {
  // const dispatch = useDispatch();
  const globalLanguage = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getGlobalLanguage);
  const actionLog = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getActionLog); // const scopeCount = useSelector(getScopeCount);
  // const globalCount = useSelector(getGlobalCount);
  // const [countUpdateValue, setCountUpdateValue] = useState(1);
  // const onScopeIncrement = () => dispatch(updateScopeCount(parseInt(countUpdateValue)));
  // const onScopeDecrement = () =>  dispatch(updateScopeCount(parseInt(-countUpdateValue)));
  // const onGlobalIncrement = () => dispatch(updateGlobalCount(parseInt(countUpdateValue)));
  // const onGlobalDecrement = () =>  dispatch(updateGlobalCount(parseInt(-countUpdateValue)));
  // const changeCountUpdateValue = value => setCountUpdateValue(value);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.StyledTitle, null, _constants_js__WEBPACK_IMPORTED_MODULE_4__.default[globalLanguage]), printActionLog(actionLog));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MFE2);

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
//# sourceMappingURL=src_MFE2_js.js.map