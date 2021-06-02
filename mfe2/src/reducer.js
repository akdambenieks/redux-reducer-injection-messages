const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';

const initialState = {
  actionLogForCount: [],
  globalLanguage: 'en',
};

export const mfeScope = 'mfe2';

export const actions = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GLOBAL_COUNT:
      const newState = { ...state };
      if (action.payload === 1) {
        newState.actionLogForCount.push('Increment occured');
      }
      else {
        newState.actionLogForCount.push("Decrement occured");
      }
      return newState;
    case SELECT_GLOBAL_LANGUAGE:
      return {
        ...state,
        globalLanguage: action.payload
      }
    default:
      return state;
  }
};

export const selectors = {
  getGlobalLanguage: (state) => state[mfeScope].globalLanguage,
  getActionLog: (state) => state[mfeScope].actionLogForCount
}

export default reducer;
