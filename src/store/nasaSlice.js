import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getApods, getNewApod, appendApods } from '../services/NasaDataService';

export const fetchApods = createAsyncThunk('nasa/fetchApods', async (apodRequest) => {
  const response = await getApods(apodRequest);
  return response;
});

export const fetchNewApod = createAsyncThunk('nasa/fetchNewApod', async () => {
  const response = await getNewApod();
  return response;
});

export const fetchAppendApods = createAsyncThunk('nasa/fetchAppendApods', async (apodRequest, { getState }) => {
  const state = getState().nasa;
  const response = await appendApods(apodRequest);
  return response;
});

const nasaSlice = createSlice({
  name: 'nasa',
  initialState: {
    apodImage: null,
    apods: [],
    loading: false,
    loaded: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApods.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchApods.fulfilled, (state, action) => {
        state.apods = action.payload;
        state.loaded = true;
        state.loading = false;
      })
      .addCase(fetchNewApod.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewApod.fulfilled, (state, action) => {
        state.apodImage = action.payload;
        state.loaded = true;
        state.loading = false;
      })
      .addCase(fetchAppendApods.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAppendApods.fulfilled, (state, action) => {
        state.apods = state.apods.concat(action.payload);
        state.loaded = true;
        state.loading = false;
      });
  }
});

export default nasaSlice.reducer;
