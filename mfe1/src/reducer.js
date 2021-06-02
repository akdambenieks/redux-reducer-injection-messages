const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';

export const mfeScope = 'mfe1';

const initialState = {
  globalLanguage: 'en',
  globalCount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GLOBAL_COUNT:
      return {
        ...state,
        globalCount: state.globalCount + action.payload
      }
    case SELECT_GLOBAL_LANGUAGE:
      return {
        ...state,
        globalLanguage: action.payload
      }
    default:
      return state
  }
};

const actions = {}

const selectors = {
  getGlobalLanguage: (state) => state[mfeScope] ? state[mfeScope].globalLanguage : initialState.globalLanguage,
  getGlobalCount: (state) => state[mfeScope] ? state[mfeScope].globalCount : initialState.globalCount,
}

export { selectors, actions };
export default reducer;
