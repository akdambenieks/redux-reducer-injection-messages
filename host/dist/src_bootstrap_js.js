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
/* harmony import */ var _components_LanguageToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/LanguageToggle */ "./src/components/LanguageToggle.jsx");
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Counter */ "./src/components/Counter.jsx");
/* harmony import */ var _components_Messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Messages */ "./src/components/Messages.jsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/store.js");








const dynamicFederation = async (scope, module) => {
  const container = window[scope]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules

  await container.init(__webpack_require__.S.default);
  return container.get(module).then(factory => {
    const Module = factory();
    return Module;
  });
};

const MFE1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => dynamicFederation('mfe1', './MFE1'));
const MFE2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => dynamicFederation('mfe2', './MFE2'));

const App = () => {
  const [displayApp2, toggleDisplayApp2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [displayApp3, toggleDisplayApp3] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_6__.store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Welcome to Host App", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LanguageToggle__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Messages__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: "Loading..."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => toggleDisplayApp2(!displayApp2)
  }, "Show/Hide App2")), displayApp2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MFE1, {
    store: _store__WEBPACK_IMPORTED_MODULE_6__.store
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => toggleDisplayApp3(!displayApp3)
  }, "Show/Hide App3")), displayApp3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MFE2, {
    store: _store__WEBPACK_IMPORTED_MODULE_6__.store
  })))));
};

react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./src/components/Counter.jsx":
/*!************************************!*\
  !*** ./src/components/Counter.jsx ***!
  \************************************/
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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store.js");



const {
  getCount
} = _store__WEBPACK_IMPORTED_MODULE_2__.selectors;
const {
  enqueueMessage
} = _store__WEBPACK_IMPORTED_MODULE_2__.actions;

const Counter = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const count = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getCount(state));

  const dispatchIncrementCountMessage = () => dispatch(enqueueMessage({
    type: 'UPDATE_COUNT',
    payload: 1
  }));

  const dispatchDecrementCountMessage = () => dispatch(enqueueMessage({
    type: 'UPDATE_COUNT',
    payload: -1
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Current Count: ", count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: dispatchIncrementCountMessage
  }, "Increment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: dispatchDecrementCountMessage
  }, "Decrement")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ "./src/components/LanguageToggle.jsx":
/*!*******************************************!*\
  !*** ./src/components/LanguageToggle.jsx ***!
  \*******************************************/
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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/constants.js");




const {
  getLanguage
} = _store__WEBPACK_IMPORTED_MODULE_2__.selectors;
const {
  enqueueMessage
} = _store__WEBPACK_IMPORTED_MODULE_2__.actions;

const LanguageToggle = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const language = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getLanguage(state));

  const dispatchChangeLanguageMessage = e => dispatch(enqueueMessage({
    type: _store__WEBPACK_IMPORTED_MODULE_2__.CHANGE_LANGUAGE,
    payload: e.currentTarget.id
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Current Language: ", language), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Change Language:"), _constants__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE_OPTIONS.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: e => dispatchChangeLanguageMessage(e),
    id: option,
    key: option,
    disabled: language === option
  }, option)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageToggle);

/***/ }),

/***/ "./src/components/Messages.jsx":
/*!*************************************!*\
  !*** ./src/components/Messages.jsx ***!
  \*************************************/
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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store.js");



const {
  getMessages
} = _store__WEBPACK_IMPORTED_MODULE_2__.selectors;
const {
  getCount
} = _store__WEBPACK_IMPORTED_MODULE_2__.selectors;

const Messages = () => {
  const messages = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getMessages);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "You have ", messages.length, " message(s)");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messages);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LANGUAGE_OPTIONS": () => (/* binding */ LANGUAGE_OPTIONS)
/* harmony export */ });
const LANGUAGE_OPTIONS = ['en', 'fr'];

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANGE_LANGUAGE": () => (/* binding */ CHANGE_LANGUAGE),
/* harmony export */   "ENQUEUE_MESSAGE": () => (/* binding */ ENQUEUE_MESSAGE),
/* harmony export */   "default": () => (/* binding */ configureStore),
/* harmony export */   "store": () => (/* binding */ store),
/* harmony export */   "actions": () => (/* binding */ actions),
/* harmony export */   "selectors": () => (/* binding */ selectors)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "webpack/sharing/consume/default/redux/redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);

const CHANGE_LANGUAGE = 'GLOBAL/CHANGE_LANGUAGE';
const ENQUEUE_MESSAGE = 'GLOBAL/ENQUEUE_MESSAGE';
const DEFAULT_LANGUAGE = 'en';
const INITIAL_COUNT = 0;
const initialState = {
  appName: 'host',
  language: 'en',
  messages: []
};

const hostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      {
        return { ...state,
          language: action.payload
        };
      }

    case ENQUEUE_MESSAGE:
      {
        console.log('Action in host', action);
        return { ...state,
          messages: [...state.messages, action.payload]
        };
        console.log('Result', result);
      }

    default:
      return state;
  }

  return result;
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
  enqueueMessage: message => ({
    type: ENQUEUE_MESSAGE,
    payload: message
  })
};
const selectors = {
  getMessages: state => state.host.messages,
  getLanguage: state => {
    return state.host.messages.reduce((acc, message) => {
      if (message.type === 'CHANGE_LANGUAGE') {
        acc = message.payload;
      }

      ;
      return acc;
    }, DEFAULT_LANGUAGE);
  },
  getCount: state => {
    return state.host.messages.reduce((acc, message) => {
      if (message.type === 'UPDATE_COUNT') {
        acc = acc + parseInt(message.payload, 10);
      }

      ;
      return acc;
    }, INITIAL_COUNT);
  }
};

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_js.js.map