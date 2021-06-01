import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
  count: 0,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateGlobalCount: (state, action) => {
      state.count += action.payload
    },
    selectGlobalLanguage: (state, action) => {
      state.language = action.payload
    },
  },
});

export const { updateGlobalCount, selectGlobalLanguage } = globalSlice.actions;

export default globalSlice.reducer;