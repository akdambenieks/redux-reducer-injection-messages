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





const {
  getGlobalCount,
  getGlobalLanguage
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.selectors;

const MFE1 = () => {
  const globalLanguage = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getGlobalLanguage(state));
  const globalCount = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getGlobalCount);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null, _constants_js__WEBPACK_IMPORTED_MODULE_4__.default[globalLanguage]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "The count is: ", globalCount, " "));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MFE1);

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
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';
const mfeScope = 'mfe1';
const initialState = {
  globalLanguage: 'en',
  globalCount: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GLOBAL_COUNT:
      return { ...state,
        globalCount: state.globalCount + action.payload
      };

    case SELECT_GLOBAL_LANGUAGE:
      return { ...state,
        globalLanguage: action.payload
      };

    default:
      return state;
  }
};

const actions = {};
const selectors = {
  getGlobalLanguage: state => state[mfeScope] ? state[mfeScope].globalLanguage : initialState.globalLanguage,
  getGlobalCount: state => state[mfeScope] ? state[mfeScope].globalCount : initialState.globalCount
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