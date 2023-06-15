/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import loader from './loader';

const avatar = createSlice({
  name: 'avatar',
  initialState: {
    avatarData: []
  },
  reducers: {
    setAvatarData: (state, action) => {
      // console.log('avatar action payload here!', action.payload);
      state.avatarData = action.payload;
    }
  }
});

export default avatar;

export const fetchAvatarData = (accessToken) => async (dispatch) => {
  dispatch(loader.actions.setLoading(true));
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken
    }
  };

  try {
    const response = await fetch(API_URL('avatars/all'), options);
    const data = await response.json();
    dispatch(avatar.actions.setAvatarData(data.response));
    dispatch(loader.actions.setLoading(false));
  } catch (error) {
    console.log(error);
  }
};