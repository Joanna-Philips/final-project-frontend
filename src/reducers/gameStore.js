import { createSlice } from '@reduxjs/toolkit'
import { loader } from './loader'

const initialState = {
  username: null,
  currentGameState: {}
}

export const gameStore = createSlice({
  name: 'gameStore',
  initialState,

  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },

    setcurrentGameState: (store, action) => {
      store.currentGameState = action.payload
    },

    restart: (store) => {
      console.log('Restarting game...');
      store.username = null;
      store.currentGameState = '';
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(loader.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().gameStore.username })
    }

    fetch('startURL', options)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        dispatch(gameStore.actions.setcurrentGameState(data))
        dispatch(loader.actions.setLoading(false));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

