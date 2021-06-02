const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE'

const initialState = {
  globalLanguage: 'en',
  globalCount:0,
};

export const mfeScope = 'mfe3';

export const actions = {
  updateGlobalCount: (byValue) => ({
    type: UPDATE_GLOBAL_COUNT,
    payload: byValue
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GLOBAL_LANGUAGE:
      return {
        ...state,
        globalLanguage: action.payload
      }
    case UPDATE_GLOBAL_COUNT:
      return {
        ...state,
        globalCount: state.globalCount + action.payload
      }
    default:
      return state;
  }
};

export const selectors = {
  getGlobalCount: (state) => state[mfeScope].globalCount,
  getGlobalLanguage: (state) => state[mfeScope].globalLanguage,
}

export default reducer;
