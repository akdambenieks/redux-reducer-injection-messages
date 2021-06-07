import { configureStore } from '@reduxjs/toolkit'
import mfe3 from './mfe3slice';

export default configureStore({
  reducer: {
    mfe3
  }
});
