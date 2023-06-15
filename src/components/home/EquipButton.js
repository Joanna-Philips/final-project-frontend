/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import user from 'reducers/user';
import { API_URL } from 'utils/urls';
import { Button } from '@mui/material';

export const EquipButton = ({ weaponId }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.user);

  const onEquipItemClick = (equipmentId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: currentUser.accessToken
      },
      body: JSON.stringify({ equipmentId })
    };

    fetch(API_URL('users/equip'), options)
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
        dispatch(user.actions.setEquippedWeapon(data.response));
      })
      .catch((error) => console.log(error))
      .finally(() => { });
  }

  return (
    <Button
      sx={{
        color: 'white',
        fontWeight: 700,
        textDecoration: 'none',
        fontSize: '1rem',
        backgroundColor: '#3d4362',
        width: '60px',
        height: '40px',
        padding: 0,
        pt: 0.25,
        borderStyle: 'outset',
        borderWidth: 'medium',
        borderRadius: '12%',
        borderColor: '#2e3242',
        marginTop: '-50px',
        marginBottom: '11px'
      }}
      size="small"
      onClick={() => onEquipItemClick(weaponId)}>
      {currentUser.equippedWeapon === weaponId ? 'Equipped' : 'Equip '}
    </Button>
  )
}