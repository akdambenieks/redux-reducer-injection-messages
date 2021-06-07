import { createSlice, createAction } from '@reduxjs/toolkit'

export const scope = 'mfe3';

const initialState = {
  globalLanguage: 'en',
};

//globally scoped actions must be created individually using createAction
const globalActions = {
  updateGlobalCount: createAction('GLOBAL/UPDATE_COUNT'),
  selectGlobalLanguage: createAction('GLOBAL/SELECT_LANGUAGE'),
}

export const mfe3Slice = createSlice({
  name: scope,
  initialState,
  reducers: {},
  // global reducers are passed using a builder function via the extraReducers key
  extraReducers: (builder) => {
    builder
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
export const actions = { ...mfe3Slice.actions, ...globalActions };

export default mfe3Slice.reducer;