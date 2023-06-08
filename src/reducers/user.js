import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    username: null,
    userId: null,
    accessToken: null,
    userCoins: null,
    userWeapons: [],
    userAvatar: null,
    error: null
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setUserCoins: (state, action) => {
      state.userCoins = action.payload;
    },
    setUserWeapons: (state, action) => {
      // console.log(action.payload)
      state.userWeapons = action.payload;
    },
    setUserAvatar: (state, action) => {
      state.userAvatar = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export default user;
