import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './global/globalSlice';
import { combineReducers, createStore, compose } from 'redux';

export const SELECT_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';
export const UPDATE_COUNT = 'GLOBAL/UPDATE_COUNT';

const hostScope = 'host';

const initialState = {
  language: 'en',
  count: 0,
};

const hostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      };
    }
    case UPDATE_COUNT: {
      return {
        ...state,
        count: state.count + action.payload
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

export default configureStore({
  reducer: {
    global: globalReducer,
  },
  enhancers: []
});
