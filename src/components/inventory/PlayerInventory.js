/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { EquipmentCard } from 'components/equipments/EquipmentCard';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';
import { InventoryWrapper, InventoryChildWrapper } from 'components/home/HomeScreenCSS';
import { EquipButton } from 'components/home/EquipButton';

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

  return (
    <ThemeProvider theme={defaultTheme}>
      <InventoryWrapper>
        {equipmentData && currentUser
          && equipmentData.filter((e) => currentUser.userWeapons.includes(e._id))
            .map((singleWeapon) => {
              return (
                <InventoryChildWrapper key={singleWeapon._id}>
                  <EquipmentCard singleWeapon={singleWeapon} />
                  <EquipButton weaponId={singleWeapon._id} />
                </InventoryChildWrapper>
              )
            })}
      </InventoryWrapper>
    </ThemeProvider>
  )
}