(self["webpackChunk_redux_reducer_injection_host"] = self["webpackChunk_redux_reducer_injection_host"] || []).push([["src_bootstrap_js-webpack_sharing_consume_default_react_react"],{

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom?2b58");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header/index.jsx");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages */ "./src/pages/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/store.js");








const history = (0,history__WEBPACK_IMPORTED_MODULE_7__.createBrowserHistory)();

const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_6__.store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Router, {
    history: history
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages__WEBPACK_IMPORTED_MODULE_5__.Routes, {
    store: _store__WEBPACK_IMPORTED_MODULE_6__.store
  })));
};

react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById('root'));

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/store.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/components/Counter/styled.jsx");




const {
  getCount
} = _store__WEBPACK_IMPORTED_MODULE_2__.selectors;
const {
  updateCount
} = _store__WEBPACK_IMPORTED_MODULE_2__.actions;

const Counter = ({
  title
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const count = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getCount(state));

  const dispatchIncrementCount = () => dispatch(updateCount(1));

  const dispatchDecrementCount = () => dispatch(updateCount(-1));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_3__.CounterWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_3__.CounterTitle, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_3__.CounterContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_3__.CounterButton, {
    onClick: () => dispatchIncrementCount()
  }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_3__.CounterCount, null, count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_3__.CounterButton, {
    onClick: () => dispatchDecrementCount()
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const CounterButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button`
  font-size: 32px;
  padding: 4px 16px;
  background-color: white;
  text-decoration: none;
  font-weight: 500;
  color: blue;
  border: solid 1px gainsboro;
  border-radius: 8px;
`;
const CounterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 16px 0px;
`;
const CounterCount = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin: 0px 16px;
  font-size: 48px;
  min-width: 80px;
  text-align: center;
`;
const CounterTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: inline;
  font-size: 24px;
  color: blue;
`;
const CounterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: middle;
  font-family: Arial, Helvetica, sans-serif !important;
`;

/***/ }),

/***/ "./src/components/Header/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation */ "./src/components/Navigation/index.jsx");
/* harmony import */ var _LanguageSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LanguageSelector */ "./src/components/LanguageSelector/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/components/Header/styled.jsx");





const Header = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navigation__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LanguageSelector__WEBPACK_IMPORTED_MODULE_2__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Header/styled.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/styled.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid gainsboro;
`);

/***/ }),

/***/ "./src/components/LanguageSelector/constants.js":
/*!******************************************************!*\
  !*** ./src/components/LanguageSelector/constants.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LANGUAGE_OPTIONS": () => (/* binding */ LANGUAGE_OPTIONS)
/* harmony export */ });
const LANGUAGE_OPTIONS = ['en', 'fr'];

/***/ }),

/***/ "./src/components/LanguageSelector/index.jsx":
/*!***************************************************!*\
  !*** ./src/components/LanguageSelector/index.jsx ***!
  \***************************************************/
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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/store.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/components/LanguageSelector/styled.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/components/LanguageSelector/constants.js");





const {
  getLanguage
} = _store__WEBPACK_IMPORTED_MODULE_2__.selectors;
const {
  selectLanguage
} = _store__WEBPACK_IMPORTED_MODULE_2__.actions;

const LanguageSelector = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const language = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getLanguage(state));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_3__.SelectorContainer, null, _constants__WEBPACK_IMPORTED_MODULE_4__.LANGUAGE_OPTIONS.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_3__.StyledButton, {
    onClick: e => dispatch(selectLanguage(e.currentTarget.id)),
    id: option,
    key: option,
    className: language === option ? 'selected' : '',
    disabled: language === option
  }, option)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageSelector);

/***/ }),

/***/ "./src/components/LanguageSelector/styled.jsx":
/*!****************************************************!*\
  !*** ./src/components/LanguageSelector/styled.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledButton": () => (/* binding */ StyledButton),
/* harmony export */   "SelectorContainer": () => (/* binding */ SelectorContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button`
  font-size: 24px;
  margin-left: 16px;
  padding: 4px 8px;
  background-color: white;
  text-decoration: none;
  font-weight: 500;
  color: blue;
  border: none;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif !important;
  &.selected {
    background-color: blue;
    color: white;
    border: solid 2px blue;
  };
`;
const SelectorContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
`;

/***/ }),

/***/ "./src/components/Navigation/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/Navigation/index.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/components/Navigation/styled.jsx");



const Navigation = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_1__.NavigationContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_1__.StyledLink, {
    to: "/",
    exact: true
  }, "Host"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_1__.StyledLink, {
    to: "/mfe1",
    exact: true
  }, "MFE1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_1__.StyledLink, {
    to: "/mfe2",
    exact: true
  }, "MFE2"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./src/components/Navigation/styled.jsx":
/*!**********************************************!*\
  !*** ./src/components/Navigation/styled.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledLink": () => (/* binding */ StyledLink),
/* harmony export */   "NavigationContainer": () => (/* binding */ NavigationContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);


const StyledLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.NavLink)`
  margin-right: 16px;
  padding: 8px 16px;
  background-color: white;
  text-decoration: none;
  font-size: 32px;
  font-weight: 500;
  color: blue;
  font-family: Arial, Helvetica, sans-serif !important;
  &.active {
    background-color: blue;
    color: white;
  };
`;
const NavigationContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 16px 16px 0px 16px;
`;

/***/ }),

/***/ "./src/pages/Host/Host.jsx":
/*!*********************************!*\
  !*** ./src/pages/Host/Host.jsx ***!
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
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Counter */ "./src/components/Counter/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/pages/Host/styled.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/pages/Host/constants.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./src/store.js");






const {
  getLanguage
} = _store__WEBPACK_IMPORTED_MODULE_5__.selectors;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const language = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getLanguage(state));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_3__.default, null, _constants__WEBPACK_IMPORTED_MODULE_4__.default[language]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Host Counter"
  }));
});

/***/ }),

/***/ "./src/pages/Host/constants.js":
/*!*************************************!*\
  !*** ./src/pages/Host/constants.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  en: 'Welcome to Host!',
  fr: 'Bienvenue a Host!'
});

/***/ }),

/***/ "./src/pages/Host/index.js":
/*!*********************************!*\
  !*** ./src/pages/Host/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Host */ "./src/pages/Host/Host.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Host__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/pages/Host/styled.jsx":
/*!***********************************!*\
  !*** ./src/pages/Host/styled.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h1`
  font-size: 48px;
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif !important;
`);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* reexport safe */ _route_builder__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _route_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-builder */ "./src/pages/route-builder.js");
// eslint-disable-next-line import/prefer-default-export


/***/ }),

/***/ "./src/pages/route-builder.js":
/*!************************************!*\
  !*** ./src/pages/route-builder.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-config */ "./src/pages/route-config.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/jsx-props-no-spreading */




const Routes = ({
  store
}) => {
  const elements = _route_config__WEBPACK_IMPORTED_MODULE_2__.default.map(({
    render,
    ...route
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({
    key: route.path
  }, route, {
    render: props => render({ ...props,
      store
    })
  })));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, elements));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

/***/ }),

/***/ "./src/pages/route-config.js":
/*!***********************************!*\
  !*** ./src/pages/route-config.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.js");
/* harmony import */ var _Host__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Host */ "./src/pages/Host/index.js");


 // const dynamicFederation = async (scope, module) => {
//   const container = window[scope]; // or get the container somewhere else
//   // Initialize the container, it may provide shared modules
//   await container.init(__webpack_share_scopes__.default);
//   return container.get(module).then((factory) => {
//     const Module = factory();
//     return Module;
//   });
// };

const MFE1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.default)('mfe1', './MFE1'));
const MFE2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.default)('mfe2', './MFE2'));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '/mfe1',
  render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MFE1, props),
  exact: false
}, {
  path: '/mfe2',
  render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MFE2, props),
  exact: false
}, {
  path: '/',
  render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Host__WEBPACK_IMPORTED_MODULE_2__.default, props),
  exact: true
}]);

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SELECT_LANGUAGE": () => (/* binding */ SELECT_LANGUAGE),
/* harmony export */   "UPDATE_COUNT": () => (/* binding */ UPDATE_COUNT),
/* harmony export */   "default": () => (/* binding */ configureStore),
/* harmony export */   "store": () => (/* binding */ store),
/* harmony export */   "actions": () => (/* binding */ actions),
/* harmony export */   "selectors": () => (/* binding */ selectors)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "webpack/sharing/consume/default/redux/redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);

const SELECT_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';
const UPDATE_COUNT = 'GLOBAL/UPDATE_COUNT';
const hostScope = 'host';
const initialState = {
  language: 'en',
  count: 0
};

const hostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LANGUAGE:
      {
        return { ...state,
          language: action.payload
        };
      }

    case UPDATE_COUNT:
      {
        return { ...state,
          count: state.count + action.payload
        };
      }

    default:
      return state;
  }
};

const staticReducers = {
  host: hostReducer
};
/**
 * Cf. redux docs:
 * https://redux.js.org/recipes/code-splitting/#defining-an-injectreducer-function
 */

function configureStore(initialState) {
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : redux__WEBPACK_IMPORTED_MODULE_0__.compose;
  const enhancer = composeEnhancers();
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(createReducer(), enhancer);
  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}

function createReducer(asyncReducers) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({ ...staticReducers,
    ...asyncReducers
  });
}

const store = configureStore();
const actions = {
  selectLanguage: language => ({
    type: SELECT_LANGUAGE,
    payload: language
  }),
  updateCount: byValue => ({
    type: UPDATE_COUNT,
    payload: byValue
  })
};
const selectors = {
  getLanguage: state => state[hostScope].language,
  getCount: state => state[hostScope].count
};

/***/ }),

/***/ "./src/utils/dynamicFederation.js":
/*!****************************************!*\
  !*** ./src/utils/dynamicFederation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (scope, module) => {
  const container = window[scope]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules

  await container.init(__webpack_require__.S.default);
  return container.get(module).then(factory => {
    const Module = factory();
    return Module;
  });
});

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dynamicFederation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamicFederation */ "./src/utils/dynamicFederation.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_dynamicFederation__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_js-webpack_sharing_consume_default_react_react.js.map