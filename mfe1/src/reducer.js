// import processMessageQueue from './utils';

const UPDATE_COUNT = 'MFE1/UPDATE_COUNT';
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const PROCESS_MESSAGE_QUEUE = 'MFE1/PROCESS_MESSAGE_QUEUE';
// const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';

const hostScope = 'host';
export const mfeScope = 'mfe1';

const initialState = {
  language: 'en',
  count: 0,
  globalCount: 0
};

const globalDefault = {
  language: 'en',
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROCESS_MESSAGE_QUEUE:
      console.log('message queue from host: ', action.payload);
      // const stateUpdates = processMessageQueue(payload);
      return state
    case UPDATE_GLOBAL_COUNT:
      return {
        ...state,
        globalCount: state.count + action.payload
      }
    case UPDATE_COUNT:
      return {
        ...state,
        count: state.count + action.payload
      }
    default:
      return state
  }
};

const actions = {
  updateCount: (byValue) => ({
    type: UPDATE_COUNT,
    payload: byValue
  }),
  updateGlobalCount: (byValue) => ({
    type: UPDATE_GLOBAL_COUNT,
    payload: byValue
  })
}

const selectors = {
  getGlobalLanguage: (state) => state[hostScope] ? state[hostScope].language : globalDefault.language,
  getGlobalCount: (state) => state[mfeScope] ? state[mfeScope].count : initialState.globalCount,
  getCount: (state) => state[mfeScope] ? state[mfeScope].count : initialState.count
}

export { selectors, actions };
export default reducer;
