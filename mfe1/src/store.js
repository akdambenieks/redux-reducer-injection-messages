import { configureStore } from '@reduxjs/toolkit'
import mfe1 from './mfe1slice.js'

export default configureStore({
  reducer: {
    mfe1
  }
});
