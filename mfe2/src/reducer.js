import { processGlobalLanguageActions, processGlobalCountActions, processScopeCountActions } from './utils.js';

const UPDATE_SCOPE_COUNT = 'MFE2/UPDATE_COUNT';
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';

const initialState = {
  actionLog: {}
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
  if (action.type.startsWith('GLOBAL/') || action.type.startsWith('MFE2/')) {
    const existingLogForActionType = state.actionLog[action.type] || [];
    return {
      ...state,
      actionLog: {...state.actionLog, [action.type]: [...existingLogForActionType, action.payload]}
    }
  }
  return state;
};

export const selectors = {
  getGlobalLanguage: (state) => processGlobalLanguageActions(state[mfeScope].actionLog),
  getScopeCount: (state) => processScopeCountActions(state[mfeScope].actionLog),
  getGlobalCount: (state) => processGlobalCountActions(state[mfeScope].actionLog)
}

export default reducer;
