import { combineReducers, createStore, compose } from 'redux';

const CHANGE_LANGUAGE = 'HOST/CHANGE_LANGUAGE';
const ENQUEUE_MESSAGE = 'HOST/ENQUEUE_MESSAGE';
const DEFAULT_LANGUAGE = 'en';

const initialState = {
  appName: 'host',
  language: 'en',
  messages: []
};

const hostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      };
    }
    case ENQUEUE_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    }
    default:
      return state;
  }
};

const staticReducers = {
  host: hostReducer,
};

/**
 * Cf. redux docs:
 * https://redux.js.org/recipes/code-splitting/#defining-an-injectreducer-function
 */
export default function configureStore(initialState) {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers();
  const store = createStore(createReducer(), enhancer);

  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export const store = configureStore();

export const actions = {
  enqueueMessage: (message) => ({
    type: ENQUEUE_MESSAGE,
    payload: message
  })
}

export const selectors = {
  getMessages: (state) => state.host.messages,
  getLanguage: (state) => {
    return state.host.messages.reduce((acc, message) => {
      if (message.type === 'CHANGE_LANGUAGE') {
        acc = message.payload
      };
      return acc;
    }, DEFAULT_LANGUAGE);
  }
}
