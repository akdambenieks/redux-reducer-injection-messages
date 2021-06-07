import { createSlice, createAction } from '@reduxjs/toolkit'

export const scope = 'global';

const initialState = {
  globalLanguage: 'en',
}

//globally scoped actions must be created separately from mfe scoped actions using createAction
const globalActions = {
  selectGlobalLanguage: createAction('GLOBAL/SELECT_LANGUAGE'),
}

export const globalSlice = createSlice({
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
}

// global actions are not necessarily dispatched from the MFE, the MFE may simply subscribe to them
// The actions are included here so they can be accessed for the component locally via the bootstrap vesrions for local development.
export const actions = { ...globalSlice.actions, ...globalActions };

export default globalSlice.reducer;