const UPDATE_GLOBAL_COUNT = 'GLOBAL/UPDATE_COUNT';
const SELECT_GLOBAL_LANGUAGE = 'GLOBAL/SELECT_LANGUAGE';
import reducer from './mfe1slice.js'

export const scope = 'mfe1';

const initialState = {
  globalLanguage: 'en',
  globalCount: 0,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_GLOBAL_COUNT:
//       return {
//         ...state,
//         globalCount: state.globalCount + action.payload
//       }
//     case SELECT_GLOBAL_LANGUAGE:
//       return {
//         ...state,
//         globalLanguage: action.payload
//       }
//     default:
//       return state
//   }
// };

const actions = {}

const selectors = {
  getGlobalLanguage: (state) => state[scope].globalLanguage,
  getGlobalCount: (state) => state[scope].globalCount,
}

export { selectors, actions };
export default reducer;
