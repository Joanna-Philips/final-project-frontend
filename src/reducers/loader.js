import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false
}

export const loader = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

/*  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true));
    dispatch(labyrinth.actions.setResponse({}));
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type: 'move',
        direction: nextMove
      })
    };

    console.log(nextMove)
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        dispatch(labyrinth.actions.setResponse(json));
        dispatch(labyrinth.actions.setLoading(false));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}; */