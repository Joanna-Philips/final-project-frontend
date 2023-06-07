/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

const equipment = createSlice({
  name: 'equipment',
  initialState: {
    _id: null,
    name: null,
    img_src: null,
    damage: null,
    cost: null,
    sell: null,
    description: null
  },
  reducers: {
    setId: (store, action) => {
      store._id = action.payload
    },
    setName: (store, action) => {
      store.name = action.payload
    },
    setImg: (store, action) => {
      store.img_src = action.payload
    },
    setDamage: (store, action) => {
      store.damage = action.payload
    },
    setCosts: (store, action) => {
      store.cost = action.payload
    },
    setSell: (store, action) => {
      store.sell = action.payload
    },
    setDescription: (store, action) => {
      store.description = action.payload
    }
  }
});

export default equipment;