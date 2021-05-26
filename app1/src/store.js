import { combineReducers, createStore, compose } from 'redux';

const CHANGE_LANGUAGE = 'HOST/CHANGE_LANGUAGE'
const TOGGLE_APP2 = 'HOST/TOGGLE_APP2'
const TOGGLE_APP3 = 'HOST/TOGGLE_APP3'

const initialState = {
  appName: 'host',
  language: 'en',
  displayApp2: false,
  displayApp3: false
};

const hostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      };
    }
    case TOGGLE_APP2: {
      const currentDisplay = state.displayApp2;
      return {
        ...state,
        displayApp2: !currentDisplay
      }
    }
    case TOGGLE_APP3: {
      const currentDisplay = state.displayApp3;
      return {
        ...state,
        displayApp3: !currentDisplay
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
    console.log('key: ', key)
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

export const selectors = {
  getDisplayApp2: () => store.getState().displayApp2,
  getDisplayApp3: () => store.getState().displayApp3
}
