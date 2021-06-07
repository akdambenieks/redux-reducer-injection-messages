import { configureStore } from '@reduxjs/toolkit';
import global from './globalSlice';
// Note: no lazy loading of reducers since they need to be present from the outset
import mfe1reducer, {scope as mfe1scope } from 'mfe1/reducer';
import mfe2reducer, {scope as mfe2scope } from 'mfe2/reducer';
import mfe3reducer, {scope as mfe3scope } from 'mfe3/reducer';

export default configureStore({
  reducer: {
    global,
    [mfe1scope]: mfe1reducer,
    [mfe2scope]: mfe2reducer,
    [mfe3scope]: mfe3reducer
  },
});
