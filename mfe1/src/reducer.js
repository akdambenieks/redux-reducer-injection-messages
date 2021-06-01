const UPDATE_COUNT = 'MFE1/UPDATE_COUNT';
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';

const hostScope = 'host';
export const mfeScope = 'mfe1';

const initialState = {
  count: 0
};

const globalDefault = {
  language: 'en',
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
  getGlobalCount: (state) => state[hostScope] ? state[hostScope].count : globalDefault.count,
  getCount: (state) => state[mfeScope] ? state[mfeScope].count : initialState.count
}

export { selectors, actions };
export default reducer;
