const UPDATE_COUNT = 'MFE2/UPDATE_COUNT';
const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';

const initialState = {
  count: 0
};

const globalDefault = {
  language: 'en',
  count: 0
}

export const mfeScope = 'mfe2';
const hostScope = 'host';

export const actions = {
  updateCount: (byValue) => ({
    type: UPDATE_COUNT,
    payload: byValue
  }),
  updateGlobalCount: (byValue) => ({
    type: UPDATE_GLOBAL_COUNT,
    payload: byValue
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COUNT: {
      return {
        ...state,
        count: state.count + action.payload
      }
    }
  }
  return state;
};

export const selectors = {
  getGlobalLanguage: (state) => state[hostScope] ? state[hostScope].language : globalDefault.language,
  getCount: (state) => state[mfeScope] ? state[mfeScope].count : initialState.count,
  getGlobalCount: (state) => state[hostScope] ? state[hostScope].count : globalDefault.count
}

export default reducer;
