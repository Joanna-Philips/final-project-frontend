/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import user, { fetchUserProfile } from 'reducers/user';
import { API_URL } from 'utils/urls';
import { Button } from '@mui/material';
import goldIconIMG from '../../assets/images/UI/coin.png';

export const ShopButton = ({ transactionID, transactionGold, transactionType }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);

  const onBuyClick = (equipmentId) => {
    console.log(equipmentId)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ equipmentId })
    };

    fetch(API_URL('purchases/buy'), options)
      .then((response) => {
        console.log(response.json)
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      })
      .then((data) => {
        console.log(data);
        dispatch(user.actions.setUserCoins(data.response));
        dispatch(user.actions.setUserWeapons(data.purchasedEquipment._id));
      })
      .catch((error) => console.log(error))
      .finally(() => { });
  }

  const onSellClick = (equipmentId) => {
    console.log(equipmentId)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ equipmentId })
    };

    fetch(API_URL('purchases/sell'), options)
      .then((response) => {
        console.log(response.json)
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      })
      .then((data) => {
        console.log(data);
        dispatch(user.actions.setUserCoins(data.response));
        dispatch(fetchUserProfile(accessToken));
      })
      .catch((error) => console.log(error))
      .finally(() => { });
  }

  return (
    <Button
      key={transactionType}
      sx={{
        color: 'white',
        fontWeight: 700,
        textDecoration: 'none',
        mt: 0,
        mb: 0,
        fontSize: '1rem',
        backgroundColor: '#3d4362',
        width: '50%',
        height: '110%',
        padding: 0,
        pt: 0.25,
        borderStyle: 'outset',
        borderWidth: 'medium',
        borderRadius: '12%',
        borderColor: '#2e3242'
      }}
      size="small"
      onClick={transactionType === 'Buy' ? () => onBuyClick(transactionID) : () => onSellClick(transactionID)}>
      {transactionGold}
      <img src={`${goldIconIMG}`} alt="gold display icon" />
      {transactionType}
    </Button>
  )
}