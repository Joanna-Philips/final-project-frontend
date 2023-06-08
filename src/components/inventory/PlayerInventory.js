/* eslint-disable no-underscore-dangle */
import * as React from 'react';
// import equipment from 'reducers/equipment';
import { EquipmentCard } from 'components/equipments/EquipmentCard';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';
import { InventoryWrapper } from 'components/home/HomeScreenCSS';

const defaultTheme = createTheme({
  typography: {
    fontFamily: ['VT323', 'monospace'].join(',')
  },
  palette: {
    primary: {
      main: '#3d4362'
    }
  }
});

export const PlayerInventory = () => {
  const equipmentData = useSelector((store) => store.equipment.equipmentData);
  const currentUser = useSelector((store) => store.user);
  console.log('equipData from player inventory', equipmentData);
  console.log('current user from player inventory', currentUser);

  return (
    <ThemeProvider theme={defaultTheme}>
      <InventoryWrapper>
        {equipmentData && currentUser
                    && equipmentData.filter((e) => currentUser.userWeapons.includes(e._id))
                      .map((singleWeapon) => {
                        return (
                          <EquipmentCard singleWeapon={singleWeapon} />
                        )
                      })}
      </InventoryWrapper>
    </ThemeProvider>
  )
}