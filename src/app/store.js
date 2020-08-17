import { configureStore } from '@reduxjs/toolkit';
import flowReducer from '../features/flow/flowSlice';

export default configureStore({
  reducer: {
    flow: flowReducer,
  },
});
