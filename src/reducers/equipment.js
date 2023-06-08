/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

const equipment = createSlice({
  name: 'equipment',
  initialState: {
    equipmentData: []
  },
  reducers: {
    setEquipmentData: (state, action) => {
      console.log('action payload here!', action.payload);
      state.equipmentData = action.payload;
    }
  }
});

export default equipment;