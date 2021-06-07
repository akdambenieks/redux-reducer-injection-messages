import { configureStore } from '@reduxjs/toolkit'
import mfe2 from './mfe2slice';

export default configureStore({
  reducer: {
    mfe2
  }
});
