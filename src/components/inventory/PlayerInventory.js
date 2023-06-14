/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
// import equipment from 'reducers/equipment';
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
        {/* <InventoryChildWrapper> */}
        {equipmentData && currentUser
          && equipmentData.filter((e) => currentUser.userWeapons.includes(e._id))
            .map((singleWeapon) => {
              return (
                <InventoryChildWrapper>
                  <EquipmentCard singleWeapon={singleWeapon} key={singleWeapon.name} />
                  <EquipButton weaponId={singleWeapon._id} key={singleWeapon._id} />
                </InventoryChildWrapper>
              )
            })}
        {/* </InventoryChildWrapper> */}
      </InventoryWrapper>
    </ThemeProvider>
  )
}