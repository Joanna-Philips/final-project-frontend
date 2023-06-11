import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false
}

const loader = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export default loader;
