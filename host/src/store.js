import { combineReducers, createStore, compose } from 'redux';

export const SELECT_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';

const hostScope = 'host';

const initialState = {
  language: 'en',
};

const hostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      };
    }
    default: {
      return state
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

  store.injectReducers = (reducers) => {
    console.log('Injecting Reducers');
    reducers.map(({key, reducer}) => {
      store.asyncReducers[key] = reducer;
    })
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
  })
}

export const selectors = {
  getLanguage: (state) => state[hostScope].language
}
