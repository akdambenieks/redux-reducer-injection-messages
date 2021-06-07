(self["webpackChunk_redux_reducer_injection_host"] = self["webpackChunk_redux_reducer_injection_host"] || []).push([["src_bootstrap_js"],{

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
    store: _store__WEBPACK_IMPORTED_MODULE_6__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Router, {
    history: history
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages__WEBPACK_IMPORTED_MODULE_5__.Routes, null)));
};

react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById('root'));

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
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
/* harmony import */ var _globalSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globalSlice */ "./src/globalSlice.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/components/LanguageSelector/styled.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/components/LanguageSelector/constants.js");





const {
  getGlobalLanguage
} = _globalSlice__WEBPACK_IMPORTED_MODULE_2__.selectors;
const {
  selectGlobalLanguage
} = _globalSlice__WEBPACK_IMPORTED_MODULE_2__.actions;

const LanguageSelector = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const language = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getGlobalLanguage(state));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_3__.SelectorContainer, null, _constants__WEBPACK_IMPORTED_MODULE_4__.LANGUAGE_OPTIONS.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_3__.StyledButton, {
    onClick: e => dispatch(selectGlobalLanguage(e.currentTarget.id)),
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
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
const SelectorContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
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
  }, "MFE2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_1__.StyledLink, {
    to: "/mfe3",
    exact: true
  }, "MFE3"));
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink)`
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
const NavigationContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 16px 16px 0px 16px;
`;

/***/ }),

/***/ "./src/globalSlice.js":
/*!****************************!*\
  !*** ./src/globalSlice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scope": () => (/* binding */ scope),
/* harmony export */   "globalSlice": () => (/* binding */ globalSlice),
/* harmony export */   "selectors": () => (/* binding */ selectors),
/* harmony export */   "actions": () => (/* binding */ actions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const scope = 'global';
const initialState = {
  globalLanguage: 'en'
}; //globally scoped actions must be created separately from mfe scoped actions using createAction

const globalActions = {
  selectGlobalLanguage: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('GLOBAL/SELECT_LANGUAGE')
};
const globalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: scope,
  initialState,
  reducers: {},
  // global reducers are passed using a builder function via the extraReducers key
  extraReducers: builder => {
    builder.addCase(globalActions.selectGlobalLanguage, (state, action) => {
      state.globalLanguage = action.payload;
    }).addDefaultCase(state => {
      state;
    });
  }
});
const selectors = {
  getGlobalLanguage: state => state[scope].globalLanguage
}; // global actions are not necessarily dispatched from the MFE, the MFE may simply subscribe to them
// The actions are included here so they can be accessed for the component locally via the bootstrap vesrions for local development.

const actions = { ...globalSlice.actions,
  ...globalActions
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalSlice.reducer);

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




const Routes = () => {
  const elements = _route_config__WEBPACK_IMPORTED_MODULE_2__.default.map(route => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({
    key: route.path
  }, route)));
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

const Host = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_pages_Host_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Host */ "./src/pages/Host/index.js")));
const MFE1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_mfe1_MFE1").then(__webpack_require__.t.bind(__webpack_require__, /*! mfe1/MFE1 */ "webpack/container/remote/mfe1/MFE1", 23)));
const MFE2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_mfe2_MFE2").then(__webpack_require__.t.bind(__webpack_require__, /*! mfe2/MFE2 */ "webpack/container/remote/mfe2/MFE2", 23)));
const MFE3 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_mfe3_MFE3").then(__webpack_require__.t.bind(__webpack_require__, /*! mfe3/MFE3 */ "webpack/container/remote/mfe3/MFE3", 23)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '/mfe1',
  component: MFE1,
  exact: false
}, {
  path: '/mfe2',
  component: MFE2,
  exact: false
}, {
  path: '/mfe3',
  component: MFE3,
  exact: false
}, {
  path: '/',
  component: Host,
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalSlice */ "./src/globalSlice.js");
/* harmony import */ var mfe1_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mfe1/reducer */ "webpack/container/remote/mfe1/reducer");
/* harmony import */ var mfe1_reducer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mfe1_reducer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mfe2_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mfe2/reducer */ "webpack/container/remote/mfe2/reducer");
/* harmony import */ var mfe2_reducer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mfe2_reducer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mfe3_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mfe3/reducer */ "webpack/container/remote/mfe3/reducer");
/* harmony import */ var mfe3_reducer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mfe3_reducer__WEBPACK_IMPORTED_MODULE_4__);

 // Note: no lazy loading of reducers since they need to be present from the outset




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    global: _globalSlice__WEBPACK_IMPORTED_MODULE_1__.default,
    [mfe1_reducer__WEBPACK_IMPORTED_MODULE_2__.scope]: (mfe1_reducer__WEBPACK_IMPORTED_MODULE_2___default()),
    [mfe2_reducer__WEBPACK_IMPORTED_MODULE_3__.scope]: (mfe2_reducer__WEBPACK_IMPORTED_MODULE_3___default()),
    [mfe3_reducer__WEBPACK_IMPORTED_MODULE_4__.scope]: (mfe3_reducer__WEBPACK_IMPORTED_MODULE_4___default())
  }
}));

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_js.js.map