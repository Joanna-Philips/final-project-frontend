/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardActions, createTheme, ThemeProvider } from '@mui/material';
import { ShopWrapper, ShopTopDiv, ShopBotDiv, ShopImage, WaresWrapper, SingleWareWrapper } from 'components/shop/ShopScreenCSS';
import { EquipmentCard } from 'components/equipments/EquipmentCard';
import { AuthorizeAndLoad } from 'utils/AuthorizeAndLoad';
import { ShopButton } from './ShopButton';

export const ShopScreen = () => {
  AuthorizeAndLoad(useNavigate(), useDispatch());
  const equipmentData = useSelector((store) => store.equipment.equipmentData);
  const currentUser = useSelector((store) => store.user);

  const defaultTheme = createTheme({
    typography: {
      fontFamily: ['VT323', 'monospace'].join(',')
    },
    palette: {
      primary: {
        main: '#3d4362',
        darker: '#2e3242'
      }
    }
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShopWrapper>
        <ShopTopDiv>
          <ShopImage src="https://i.pinimg.com/564x/f0/05/28/f00528a9404e2959c3c5e5e440f1761a.jpg" alt="shopkeeper" />
        </ShopTopDiv>
        <ShopBotDiv>
          <WaresWrapper>
            {equipmentData.slice(1).map((singleWeapon) => {
              return (
                <SingleWareWrapper key={singleWeapon._id}>
                  <EquipmentCard singleWeapon={singleWeapon} />
                  <Card
                    sx={{
                      width: '25vw',
                      maxWidth: 175,
                      minWidth: '145px',
                      height: '14%',
                      backgroundColor: '#edd99b',
                      borderStyle: 'solid',
                      borderColor: '#3b241c',
                      scrollSnapAlign: 'start',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                    <CardActions sx={{ justifyContent: 'space-between', padding: 0 }}>
                      {currentUser.userWeapons.includes(singleWeapon._id) ? (
                        <ShopButton
                          transactionID={singleWeapon._id}
                          transactionGold={singleWeapon.sell}
                          transactionType="Sell" />
                      ) : (
                        <ShopButton
                          transactionID={singleWeapon._id}
                          transactionGold={singleWeapon.cost}
                          transactionType="Buy" />
                      )}
                    </CardActions>
                  </Card>
                </SingleWareWrapper>
              )
            })}
          </WaresWrapper>
        </ShopBotDiv>
      </ShopWrapper>
    </ThemeProvider>
  );
}