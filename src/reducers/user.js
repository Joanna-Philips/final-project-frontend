/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import loader from './loader';

const localStorageUser = localStorage.getItem('user');
const localUser = JSON.parse(localStorageUser);

const user = createSlice({
  name: 'user',
  initialState: {
    username: localUser !== null ? localUser.username : null,
    userId: localUser !== null ? localUser._id : null,
    accessToken: localUser !== null ? localUser.accessToken : null,
    userCoins: null,
    userWeapons: [],
    equippedWeapon: null,
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
    setEquippedWeapon: (state, action) => {
      state.equippedWeapon = action.payload;
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
  } catch (error) {
    console.log(error);
  }
};
