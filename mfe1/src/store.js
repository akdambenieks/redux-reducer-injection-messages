import { configureStore } from '@reduxjs/toolkit'
import mfe1 from './mfe1slice.js'
// import { createStore, combineReducers } from 'redux';
// import mfe1 from './reducer';

// export default createStore(combineReducers({
//   mfe1
// }));

export default configureStore({
  reducer: {
    mfe1
  }
});
