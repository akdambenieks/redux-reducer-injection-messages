const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE'

const initialState = {
  globalLanguage: 'en',
};

export const scope = 'mfe3';

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
    default:
      return state;
  }
};

export const selectors = {
  getGlobalLanguage: (state) => state[scope].globalLanguage,
}

export default reducer;
