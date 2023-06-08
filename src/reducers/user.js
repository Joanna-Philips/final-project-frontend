import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import { loader } from './loader';

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

export const fetchUserProfile = (accessToken) => async (dispatch) => {
  dispatch(loader.actions.setLoading(true));
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken
    }
  };

  try {
    const response = await fetch(API_URL('users/profile'), options);
    const data = await response.json();
    dispatch(user.actions.setUserCoins(data.response.userCoins));
    dispatch(user.actions.setUserWeapons(data.response.userWeapons));
    dispatch(user.actions.setUserAvatar(data.response.userAvatar));
    dispatch(loader.actions.setLoading(false));
    console.log('equipment data', data.response);
  } catch (error) {
    console.log(error);
  }
};
