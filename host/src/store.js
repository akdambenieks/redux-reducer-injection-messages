import { combineReducers, createStore, compose } from 'redux';

export const SELECT_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';
export const UPDATE_COUNT = 'GLOBAL/UPDATE_COUNT';

const hostScope = 'host';

const initialState = {
  language: 'en',
  count: 0,
  messages: {}
};

const hostReducer = (state = initialState, action) => {
  const updatedMessages = {...state.messages};
  if (action.type.startsWith('GLOBAL/')) {
    if (updatedMessages.hasOwnProperty(action.type)) {
      updatedMessages[action.type].push(action.payload);
    } else {
      updatedMessages[action.type] = [action.payload];
    }
  }
  switch (action.type) {
    case SELECT_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
        messages: updatedMessages,
      };
    }
    case UPDATE_COUNT: {
      return {
        ...state,
        count: state.count + action.payload,
        messages: updatedMessages,
      }
    }
    default: {
      return {
        ...state,
        messages: updatedMessages,
      }
    }
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
    console.log('Injecting Reducer: ', key);
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    // const processMessageQueueAction = key.toUpperCase().concat('/PROCESS_MESSAGE_QUEUE');
    // const messageQueue = store.getState()[hostScope].messages;
    // store.dispatch({ type: processMessageQueueAction, payload: messageQueue});
  };

  // store.ejectReducer = (key) => {
  //   console.log('Ejecting Reducer: ', key);
  //   delete store.asyncReducers[key];
  //   store.replaceReducer(createReducer(store.asyncReducers));
  // }

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
  selectLanguage: (language) => ({
    type: SELECT_LANGUAGE,
    payload: language
  }),
  updateCount: (byValue) => ({
    type: UPDATE_COUNT,
    payload: byValue
  })
}

export const selectors = {
  getLanguage: (state) => state[hostScope].language,
  getCount: (state) => state[hostScope].count
}
