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



const {
  getLanguage,
  getAppName,
  getLanguageFromMessages
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.selectors;
const {
  changeAppNameAction,
  enqueueMessageAction
} = _reducer__WEBPACK_IMPORTED_MODULE_2__.actions;
const mfeScope = 'mfe2';

const MFE2 = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const languageFromHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getLanguageFromMessages(state));
  const language = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getLanguage(state));
  const appName = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => getAppName(state));
  const [remoteAppInput, setRemoteAppInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [remoteAppIncrementDecrementByValue, setRemoteAppIncrementDecrementByValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "MFE2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "MFE2's name from the redux store : ", appName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "MFE2's language from the redux store : ", language), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "MFE2's language derived from host getMessages : ", languageFromHost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    style: {
      marginRight: '10px'
    },
    type: "text",
    onChange: e => {
      setRemoteAppInput(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => dispatch(changeAppNameAction(remoteAppInput))
  }, "Dispatch MFE2 new name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "increment-decrement-by-value"
  }, "Increment/Decrement by: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "increment-decrement-by-value",
    style: {
      marginRight: '10px'
    },
    value: remoteAppIncrementDecrementByValue,
    type: "number",
    onChange: e => {
      setRemoteAppIncrementDecrementByValue(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => dispatch(enqueueMessageAction({
      type: 'UPDATE_COUNT',
      payload: remoteAppIncrementDecrementByValue
    }))
  }, "Increment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => dispatch(enqueueMessageAction({
      type: 'UPDATE_COUNT',
      payload: -remoteAppIncrementDecrementByValue
    }))
  }, "Decrement"))));
};

const MFE2Wrapper = props => {
  const {
    store
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    store.injectReducer(mfeScope, _reducer__WEBPACK_IMPORTED_MODULE_2__.default);
    return () => console.log('Unmounting MFE2');
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: store || {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MFE2, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MFE2Wrapper);

/***/ }),

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* binding */ actions),
/* harmony export */   "selectors": () => (/* binding */ selectors),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialState = {
  appName: 'mfe2',
  language: 'en'
};
const mfeScope = 'mfe2';
const hostAppScope = 'host';
const CHANGE_APP_NAME = 'APP3/CHANGE_APP_NAME';
const CHANGE_LANGUAGE = 'APP3/CHANGE_LANGUAGE';
const ENQUEUE_MESSAGE = 'HOST/ENQUEUE_MESSAGE';
const actions = {
  changeAppNameAction: appName => {
    return {
      type: CHANGE_APP_NAME,
      payload: appName
    };
  },
  enqueueMessageAction: message => {
    return {
      type: ENQUEUE_MESSAGE,
      payload: message
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_NAME:
      {
        return { ...state,
          appName: action.payload
        };
      }

    case CHANGE_LANGUAGE:
      {
        return { ...state
        };
      }
  }

  return state;
};

const selectors = {
  getAppName: state => state[mfeScope] ? state[mfeScope].appName : initialState.appName,
  getLanguage: state => state[mfeScope] ? state[mfeScope].language : initialState.language,
  getLanguageFromMessages: state => {
    if (state[hostAppScope] && state[hostAppScope].messages) {
      return state[hostAppScope].messages.reduce((acc, message) => {
        if (message.type === 'CHANGE_LANGUAGE') {
          acc = message.payload;
        }

        return acc;
      }, initialState.language);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ })

}]);
//# sourceMappingURL=src_MFE2_js.js.map