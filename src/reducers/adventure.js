/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import loader from './loader';

const adventure = createSlice({
  name: 'adventure',
  initialState: {
    adventureData: []
  },
  reducers: {
    setAdventureData: (state, action) => {
      state.adventureData = action.payload;
    }
  }
});

export default adventure;

export const fetchAdventureData = (accessToken) => async (dispatch) => {
  dispatch(loader.actions.setLoading(true));
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken
    }
  };

  try {
    const response = await fetch(API_URL('adventures/all'), options);
    const data = await response.json();
    dispatch(adventure.actions.setAdventureData(data.response));
    dispatch(loader.actions.setLoading(false));
  } catch (error) {
    console.log(error);
  }
};