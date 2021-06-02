import { processGlobalLanguageActions, processGlobalCountActions, processScopeCountActions } from './utils.js';

const UPDATE_SCOPE_COUNT = 'MFE2/UPDATE_COUNT';
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE'

const initialState = {
  actionLogForCount: [],
  language: 'en'
};

export const mfeScope = 'mfe2';

export const actions = {
  updateScopeCount: (byValue) => ({
    type: UPDATE_SCOPE_COUNT,
    payload: byValue
  }),
  updateGlobalCount: (byValue) => ({
    type: UPDATE_GLOBAL_COUNT,
    payload: byValue
  })
};


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
        language: action.payload
      }
    default:
      return state;
  }
};

export const selectors = {
  getGlobalLanguage: (state) => state[mfeScope].language,
  getActionLog: (state) => state[mfeScope].actionLogForCount
  // getScopeCount: (state) => processScopeCountActions(state[mfeScope].actionLog),
  // getGlobalCount: (state) => processGlobalCountActions(state[mfeScope].actionLog)
}

export default reducer;
