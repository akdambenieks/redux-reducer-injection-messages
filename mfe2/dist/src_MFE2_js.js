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
/* harmony import */ var host_Counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! host/Counter */ "webpack/container/remote/host/Counter");
/* harmony import */ var host_Counter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(host_Counter__WEBPACK_IMPORTED_MODULE_5__);






const {
  getGlobalLanguage,
  getCount,
  getGlobalCount
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.selectors;
const {
  updateCount,
  updateGlobalCount
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.actions;

const MFE2 = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const language = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getGlobalLanguage);
  const count = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getCount);
  const globalCount = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getGlobalCount);
  const [countUpdateValue, setCountUpdateValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);

  const onIncrement = () => dispatch(updateCount(parseInt(countUpdateValue)));

  const onDecrement = () => dispatch(updateCount(parseInt(-countUpdateValue)));

  const onGlobalIncrement = () => dispatch(updateGlobalCount(parseInt(countUpdateValue)));

  const onGlobalDecrement = () => dispatch(updateGlobalCount(parseInt(-countUpdateValue)));

  const changeCountUpdateValue = value => setCountUpdateValue(value);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.StyledTitle, null, _constants_js__WEBPACK_IMPORTED_MODULE_4__.default[language]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.CountUpdateValueContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.StyledLabel, {
    htmlFor: "count-update-value"
  }, "Update Count By:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.StyledInput, {
    type: "number",
    id: "count-update-value",
    onChange: e => changeCountUpdateValue(e.currentTarget.value),
    value: countUpdateValue
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((host_Counter__WEBPACK_IMPORTED_MODULE_5___default()), {
    title: "MFE2 Counter",
    count: count,
    onIncrement: onIncrement,
    onDecrement: onDecrement,
    themeColor: "red"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((host_Counter__WEBPACK_IMPORTED_MODULE_5___default()), {
    title: "Host Counter from MFE2",
    count: globalCount,
    onIncrement: onGlobalIncrement,
    onDecrement: onGlobalDecrement,
    themeColor: "blue"
  }));
};

const MFE2Wrapper = props => {
  const {
    store
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    store.injectReducer(_reducer__WEBPACK_IMPORTED_MODULE_2__.mfeScope, _reducer__WEBPACK_IMPORTED_MODULE_2__.default);
    return () => console.log('Unmounting MFE2');
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: store || {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MFE2, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MFE2Wrapper);

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
const UPDATE_COUNT = 'MFE2/UPDATE_COUNT';
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const initialState = {
  count: 0
};
const globalDefault = {
  language: 'en',
  count: 0
};
const mfeScope = 'mfe2';
const hostScope = 'host';
const actions = {
  updateCount: byValue => ({
    type: UPDATE_COUNT,
    payload: byValue
  }),
  updateGlobalCount: byValue => ({
    type: UPDATE_GLOBAL_COUNT,
    payload: byValue
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COUNT:
      {
        return { ...state,
          count: state.count + action.payload
        };
      }
  }

  return state;
};

const selectors = {
  getGlobalLanguage: state => state[hostScope] ? state[hostScope].language : globalDefault.language,
  getCount: state => state[mfeScope] ? state[mfeScope].count : initialState.count,
  getGlobalCount: state => state[hostScope] ? state[hostScope].count : globalDefault.count
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

/***/ })

}]);
//# sourceMappingURL=src_MFE2_js.js.map