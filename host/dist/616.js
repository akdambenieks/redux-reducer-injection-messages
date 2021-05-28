(self["webpackChunk_redux_reducer_injection_messages_app1"] = self["webpackChunk_redux_reducer_injection_messages_app1"] || []).push([[616],{

/***/ 616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@^16.13.0 (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(558);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.13.0 (singleton) (fallback: ./node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(169);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
// EXTERNAL MODULE: consume shared module (default) react-redux@^7.2.0 (strict) (fallback: ./node_modules/react-redux/es/index.js)
var es_index_js_ = __webpack_require__(167);
// EXTERNAL MODULE: consume shared module (default) redux@^4.0.5 (strict) (fallback: ./node_modules/redux/es/redux.js)
var redux_js_ = __webpack_require__(592);
;// CONCATENATED MODULE: ./src/store.js

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
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : redux_js_.compose;
  const enhancer = composeEnhancers();
  const store = (0,redux_js_.createStore)(createReducer(), enhancer);
  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}

function createReducer(asyncReducers) {
  return (0,redux_js_.combineReducers)({ ...staticReducers,
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
;// CONCATENATED MODULE: ./src/constants.js
const LANGUAGE_OPTIONS = ['en', 'fr'];
;// CONCATENATED MODULE: ./src/components/LanguageToggle.jsx




const {
  getLanguage
} = selectors;
const {
  enqueueMessage
} = actions;

const LanguageToggle = () => {
  const dispatch = (0,es_index_js_.useDispatch)();
  const language = (0,es_index_js_.useSelector)(state => getLanguage(state));

  const dispatchChangeLanguageMessage = e => dispatch(enqueueMessage({
    type: CHANGE_LANGUAGE,
    payload: e.currentTarget.id
  }));

  return /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, /*#__PURE__*/index_js_default().createElement("p", null, "Current Language: ", language), /*#__PURE__*/index_js_default().createElement("p", null, "Change Language:"), LANGUAGE_OPTIONS.map(option => /*#__PURE__*/index_js_default().createElement("button", {
    onClick: e => dispatchChangeLanguageMessage(e),
    id: option,
    key: option,
    disabled: language === option
  }, option)));
};

/* harmony default export */ const components_LanguageToggle = (LanguageToggle);
;// CONCATENATED MODULE: ./src/components/Counter.jsx



const {
  getCount
} = selectors;
const {
  enqueueMessage: Counter_enqueueMessage
} = actions;

const Counter = () => {
  const dispatch = (0,es_index_js_.useDispatch)();
  const count = (0,es_index_js_.useSelector)(state => getCount(state));

  const dispatchIncrementCountMessage = () => dispatch(Counter_enqueueMessage({
    type: 'UPDATE_COUNT',
    payload: 1
  }));

  const dispatchDecrementCountMessage = () => dispatch(Counter_enqueueMessage({
    type: 'UPDATE_COUNT',
    payload: -1
  }));

  return /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, /*#__PURE__*/index_js_default().createElement("p", null, "Current Count: ", count), /*#__PURE__*/index_js_default().createElement("div", null, /*#__PURE__*/index_js_default().createElement("button", {
    onClick: dispatchIncrementCountMessage
  }, "Increment"), /*#__PURE__*/index_js_default().createElement("button", {
    onClick: dispatchDecrementCountMessage
  }, "Decrement")));
};

/* harmony default export */ const components_Counter = (Counter);
;// CONCATENATED MODULE: ./src/components/Messages.jsx



const {
  getMessages
} = selectors;
const {
  getCount: Messages_getCount
} = selectors;

const Messages = () => {
  const messages = (0,es_index_js_.useSelector)(getMessages);
  return /*#__PURE__*/index_js_default().createElement("div", null, "You have ", messages.length, " message(s)");
};

/* harmony default export */ const components_Messages = (Messages);
;// CONCATENATED MODULE: ./src/bootstrap.js







const {
  getMessages: bootstrap_getMessages
} = selectors;

const dynamicFederation = async (scope, module) => {
  const container = window[scope]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules

  await container.init(__webpack_require__.S.default);
  return container.get(module).then(factory => {
    const Module = factory();
    return Module;
  });
};

const RemoteApp = /*#__PURE__*/index_js_default().lazy(() => dynamicFederation('app2', './RemoteApp'));
const RemoteApp2 = /*#__PURE__*/index_js_default().lazy(() => dynamicFederation('app3', './RemoteApp2'));

const App = () => {
  const [displayApp2, toggleDisplayApp2] = (0,index_js_.useState)(false);
  const [displayApp3, toggleDisplayApp3] = (0,index_js_.useState)(false);
  return /*#__PURE__*/index_js_default().createElement(es_index_js_.Provider, {
    store: store
  }, /*#__PURE__*/index_js_default().createElement("div", null, "Welcome to Host App", /*#__PURE__*/index_js_default().createElement(components_LanguageToggle, null), /*#__PURE__*/index_js_default().createElement(components_Counter, null), /*#__PURE__*/index_js_default().createElement(components_Messages, null), /*#__PURE__*/index_js_default().createElement("div", null, /*#__PURE__*/index_js_default().createElement(index_js_.Suspense, {
    fallback: "Loading..."
  }, /*#__PURE__*/index_js_default().createElement("div", null, /*#__PURE__*/index_js_default().createElement("button", {
    onClick: () => toggleDisplayApp2(!displayApp2)
  }, "Show/Hide App2")), displayApp2 && /*#__PURE__*/index_js_default().createElement(RemoteApp, {
    store: store
  }), /*#__PURE__*/index_js_default().createElement("div", null, /*#__PURE__*/index_js_default().createElement("button", {
    onClick: () => toggleDisplayApp3(!displayApp3)
  }, "Show/Hide App3")), displayApp3 && /*#__PURE__*/index_js_default().createElement(RemoteApp2, {
    store: store
  })))));
};

react_dom_index_js_default().render( /*#__PURE__*/index_js_default().createElement(App, null), document.getElementById('root'));

/***/ })

}]);
//# sourceMappingURL=616.js.map