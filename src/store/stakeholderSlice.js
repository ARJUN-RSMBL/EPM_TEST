import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getStakeholders, addStakeholder } from '../services/stakeholderService';

export const fetchStakeholders = createAsyncThunk('stakeholders/fetch', async () => {
  return await getStakeholders();
});

const stakeholderSlice = createSlice({
  name: 'stakeholders',
  initialState: { data: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStakeholders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStakeholders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      });
  },
});

export default stakeholderSlice.reducer;
