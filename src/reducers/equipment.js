/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import loader from './loader';

const equipment = createSlice({
  name: 'equipment',
  initialState: {
    equipmentData: []
  },
  reducers: {
    setEquipmentData: (state, action) => {
      state.equipmentData = action.payload;
    }
  }
});
export default equipment;

export const fetchEquipmentData = (accessToken) => async (dispatch) => {
  dispatch(loader.actions.setLoading(true));
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken
    }
  };

  try {
    const response = await fetch(API_URL('equipments/all'), options);
    const data = await response.json();
    dispatch(equipment.actions.setEquipmentData(data.response));
    dispatch(loader.actions.setLoading(false));
  } catch (error) {
    console.log(error);
  }
};