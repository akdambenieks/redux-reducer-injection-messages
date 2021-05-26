(self["webpackChunk_redux_reducer_injection_messages_app2"] = self["webpackChunk_redux_reducer_injection_messages_app2"] || []).push([["src_RemoteApp_js"],{

/***/ "./src/RemoteApp.js":
/*!**************************!*\
  !*** ./src/RemoteApp.js ***!
  \**************************/
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



const remoteAppScope = 'remoteApp';
const hostAppScope = 'host';

const RemoteApp = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state[remoteAppScope]);
  const hostState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state[hostAppScope]);
  const [remoteAppInput, setRemoteAppInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "RemoteApp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "RemoteApp's name from the redux store : ", state && state.appName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "HostApp's language from the redux store : ", hostState && hostState.language), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    style: {
      marginRight: '10px'
    },
    type: "text",
    onChange: e => {
      setRemoteAppInput(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_2__.changeAppNameAction)(remoteAppInput))
  }, "Dispatch RemoteApp new name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_2__.changeHostLanguageAction)(remoteAppInput))
  }, "Dispatch HostApp change language")));
};

const RemoteAppWrapper = props => {
  const {
    store
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    store.injectReducer(remoteAppScope, _reducer__WEBPACK_IMPORTED_MODULE_2__.default);
    return () => console.log('Unmounting App2');
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: store || {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RemoteApp, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoteAppWrapper);

/***/ }),

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeAppNameAction": () => (/* binding */ changeAppNameAction),
/* harmony export */   "changeHostLanguageAction": () => (/* binding */ changeHostLanguageAction),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialState = {
  appName: 'remoteApp'
};
const CHANGE_APP_NAME = 'CHANGE_APP_NAME';

const changeAppNameAction = appName => {
  return {
    type: CHANGE_APP_NAME,
    payload: appName
  };
};

const changeHostLanguageAction = language => {
  return {
    type: 'HOST/CHANGE_LANGUAGE',
    payload: language
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_NAME:
      {
        return { ...state,
          appName: action.payload
        };
      }
  }

  return state;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ })

}]);
//# sourceMappingURL=src_RemoteApp_js.js.map