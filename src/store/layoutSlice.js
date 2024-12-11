import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    fullscreen: false
  },
  reducers: {
    toggleFullScreen(state) {
      state.fullscreen = !state.fullscreen;
    }
  }
});

export const { toggleFullScreen } = layoutSlice.actions;
export default layoutSlice.reducer;
