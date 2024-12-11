import { configureStore } from '@reduxjs/toolkit';
import nasaReducer from './nasaSlice';
import layoutReducer from './layoutSlice';

const store = configureStore({
  reducer: {
    nasa: nasaReducer,
    layout: layoutReducer,
  },
});

export default store;
