import { createSlice, createAction } from '@reduxjs/toolkit'

export const scope = 'mfe1';

const initialState = {
  globalLanguage: 'en',
  globalCount: 0,
}

//globally scoped actions must be created separately from mfe scoped actions using createAction
const globalActions = {
  updateGlobalCount: createAction('GLOBAL/UPDATE_COUNT'),
  selectGlobalLanguage: createAction('GLOBAL/SELECT_LANGUAGE'),
}

export const mfe1Slice = createSlice({
  name: scope,
  initialState,
  reducers: {},
  // global reducers are passed using a builder function via the extraReducers key
  extraReducers: (builder) => {
    builder
      .addCase(globalActions.updateGlobalCount, (state, action) => {
        state.globalCount += action.payload;
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
  getGlobalCount: (state) => state[scope].globalCount,
}

// global actions are not necessarily dispatched from the MFE, the MFE may simply subscribe to them
// The actions are included here so they can be accessed for the component locally via the bootstrap vesrions for local development.
export const actions = { ...mfe1Slice.actions, ...globalActions };

export default mfe1Slice.reducer;