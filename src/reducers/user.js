import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    username: null,
    userId: null,
    accessToken: null,
    userCoins: null,
    userWeapons: null,
    userAvatar: null,
    error: null
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setUserId: (store, action) => {
      store.userId = action.payload
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload
    },
    setUserCoins: (store, action) => {
      store.userCoins = action.payload
    },
    setUserWeapons: (store, action) => {
      store.userWeapons = action.payload
    },
    setUserAvatar: (store, action) => {
      store.userAvatar = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    }
  }
});

export default user