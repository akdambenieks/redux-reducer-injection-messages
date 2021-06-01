(self["webpackChunk_redux_reducer_injection_mfe1"] = self["webpackChunk_redux_reducer_injection_mfe1"] || []).push([["src_MFE1_js"],{

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
/* harmony import */ var host_Counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! host/Counter */ "webpack/container/remote/host/Counter");
/* harmony import */ var host_Counter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(host_Counter__WEBPACK_IMPORTED_MODULE_5__);






const {
  getCount,
  getGlobalCount,
  getGlobalLanguage
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.selectors;
const {
  updateCount,
  updateGlobalCount
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.actions;

const MFE1 = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const language = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getGlobalLanguage(state));
  const count = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getCount(state));
  const globalCount = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getGlobalCount);

  const onIncrement = () => dispatch(updateCount(1));

  const onDecrement = () => dispatch(updateCount(-1));

  const onGlobalIncrement = () => dispatch(updateGlobalCount(1));

  const onGlobalDecrement = () => dispatch(updateGlobalCount(-1));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null, _constants_js__WEBPACK_IMPORTED_MODULE_4__.default[language]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((host_Counter__WEBPACK_IMPORTED_MODULE_5___default()), {
    title: "MFE1 Counter",
    count: count,
    onIncrement: onIncrement,
    onDecrement: onDecrement,
    themeColor: "green"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((host_Counter__WEBPACK_IMPORTED_MODULE_5___default()), {
    title: "Host Counter from MFE1",
    count: globalCount,
    onIncrement: onGlobalIncrement,
    onDecrement: onGlobalDecrement,
    themeColor: "blue"
  }));
};

const MFE1Wrapper = () =>
/*props*/
{
  // const { store } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // store.injectReducer(mfeScope, reducer);
    console.log('Mounting MFE1');
    return () => {
      console.log('Unmounting MFE1'); // store.ejectReducer(mfeScope);
    };
  }, []);
  return (
    /*#__PURE__*/
    // <Provider store={store || {}}>
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MFE1, null) // </Provider>

  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MFE1Wrapper);

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
// import processMessageQueue from './utils';
const UPDATE_COUNT = 'MFE1/UPDATE_COUNT';
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const PROCESS_MESSAGE_QUEUE = 'MFE1/PROCESS_MESSAGE_QUEUE'; // const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';

const hostScope = 'host';
const mfeScope = 'mfe1';
const initialState = {
  language: 'en',
  count: 0,
  globalCount: 0
};
const globalDefault = {
  language: 'en',
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROCESS_MESSAGE_QUEUE:
      console.log('message queue from host: ', action.payload); // const stateUpdates = processMessageQueue(payload);

      return state;

    case UPDATE_GLOBAL_COUNT:
      return { ...state,
        globalCount: state.count + action.payload
      };

    case UPDATE_COUNT:
      return { ...state,
        count: state.count + action.payload
      };

    default:
      return state;
  }
};

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
const selectors = {
  getGlobalLanguage: state => state[hostScope] ? state[hostScope].language : globalDefault.language,
  getGlobalCount: state => state[mfeScope] ? state[mfeScope].count : initialState.globalCount,
  getCount: state => state[mfeScope] ? state[mfeScope].count : initialState.count
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
//# sourceMappingURL=src_MFE1_js.js.map