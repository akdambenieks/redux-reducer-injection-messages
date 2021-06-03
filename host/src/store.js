import { combineReducers, createStore, compose } from 'redux';

// global actions are namespaced with the 'GLOBAL/' prefix to expose them to other MFE's
export const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';

const hostScope = 'global';

const initialState = {
  globalLanguage: 'en',
};

const hostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GLOBAL_LANGUAGE: {
      return {
        ...state,
        globalLanguage: action.payload,
      };
    }
    default: {
      return state
    }
  }
};

const staticReducers = {
  [hostScope]: hostReducer,
};

export default function configureStore() {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers();
  const store = createStore(createReducer(), enhancer);

  store.asyncReducers = {};

  // Code for extending the store to allow injection of reducers from MFEs
  store.injectReducers = (reducers) => {
    reducers.forEach(({scope, reducer}) => {
      console.log('injecting reducer ', scope, ' into the store');
      store.asyncReducers[scope] = reducer;
    });
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
    type: SELECT_GLOBAL_LANGUAGE,
    payload: language
  }),
  updateGlobalCount: (byValue) => ({
    type: UPDATE_GLOBAL_COUNT,
    payload: byValue
  })
}

export const selectors = {
  getLanguage: (state) => state[hostScope].globalLanguage,
}
