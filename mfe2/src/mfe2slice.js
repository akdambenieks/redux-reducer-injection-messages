import { createSlice, createAction } from '@reduxjs/toolkit'

export const scope = 'mfe2';

const initialState = {
  actionLogForCount: [],
  globalLanguage: 'en',
};

//globally scoped actions must be created individually using createAction
const globalActions = {
  updateGlobalCount: createAction('GLOBAL/UPDATE_COUNT'),
  selectGlobalLanguage: createAction('GLOBAL/SELECT_LANGUAGE'),
}

export const mfe2Slice = createSlice({
  name: scope,
  initialState,
  reducers: {},
  // global reducers are passed using a builder function via the extraReducers key
  extraReducers: (builder) => {
    builder
      .addCase(globalActions.updateGlobalCount, (state, action) => {
        if (action.payload >= 1) {
          state.actionLogForCount.push('Increment occured');
        }
        else {
          state.actionLogForCount.push("Decrement occured");
        }
      })
      .addCase(globalActions.selectGlobalLanguage, (state, action) => {
        state.globalLanguage = action.payload;
      })
      .addDefaultCase((state) => {
        state;
      })
  }
});

export const selectors = {
  getGlobalLanguage: (state) => state[scope].globalLanguage,
  getActionLog: (state) => state[scope].actionLogForCount,
}

// global actions are not necessarily dispatched from the MFE, the MFE may simply subscribe to them
// The actions are included here so they can be accessed for the component locally via the bootstrap vesrions for local development.
export const actions = { ...mfe2Slice.actions, ...globalActions };

export default mfe2Slice.reducer;