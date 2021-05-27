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




const RemoteApp = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state[_reducer__WEBPACK_IMPORTED_MODULE_2__.remoteAppScope]);
  const hostState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state[_reducer__WEBPACK_IMPORTED_MODULE_2__.hostAppScope]);
  const [remoteAppInput, setRemoteAppInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const messages = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_reducer__WEBPACK_IMPORTED_MODULE_2__.getMessages);
  console.log('Messages', messages);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "RemoteApp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "RemoteApp's name from the redux store : ", state && state.appName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "HostApp's language from the redux store : ", hostState && hostState.language), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "You have ", messages.length, " message(s)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
    onClick: () => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_2__.enqueMessage)((0,_reducer__WEBPACK_IMPORTED_MODULE_2__.changeLanguageAction)(remoteAppInput)))
  }, "Dispatch HostApp change language")));
};

const RemoteAppWrapper = props => {
  const {
    store
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    store.injectReducer(_reducer__WEBPACK_IMPORTED_MODULE_2__.remoteAppScope, _reducer__WEBPACK_IMPORTED_MODULE_2__.default);
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
/* harmony export */   "changeLanguageAction": () => (/* binding */ changeLanguageAction),
/* harmony export */   "enqueMessage": () => (/* binding */ enqueMessage),
/* harmony export */   "getMessages": () => (/* binding */ getMessages),
/* harmony export */   "remoteAppScope": () => (/* binding */ remoteAppScope),
/* harmony export */   "hostAppScope": () => (/* binding */ hostAppScope),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialState = {
  appName: 'remoteApp',
  language: 'en',
  messages: []
};
const CHANGE_APP_NAME = 'CHANGE_APP_NAME';
const ENQUEUE_MESSAGE = 'GLOBAL/ENQUEUE_MESSAGE';
const CHANGE_LANGUAGE = 'GLOBAL/CHANGE_LANGUAGE';

const changeAppNameAction = appName => {
  return {
    type: CHANGE_APP_NAME,
    payload: appName
  };
};

const enqueMessage = message => {
  return {
    type: ENQUEUE_MESSAGE,
    payload: message
  };
};

const changeLanguageAction = language => {
  return {
    type: CHANGE_LANGUAGE,
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

    case ENQUEUE_MESSAGE:
      console.log('Action in app', action);
      return { ...state,
        messages: [...state.messages, action.payload]
      };

    case CHANGE_LANGUAGE:
      return { ...state,
        language: action.payload
      };

    default:
      return state;
  }

  return result;
};

const remoteAppScope = 'remoteApp';
const hostAppScope = 'host';

const getMessages = state => {
  if (state[remoteAppScope]) return state[remoteAppScope].messages;else return [];
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ })

}]);
//# sourceMappingURL=src_RemoteApp_js.js.map