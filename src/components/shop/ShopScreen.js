/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
/* import { API_URL } from 'utils/urls'; */
import { useSelector/* , useDispatch */ } from 'react-redux';
import { Card, CardActions, /* Typography, Button, */ createTheme, ThemeProvider } from '@mui/material';
import { ShopWrapper, ShopTopDiv, ShopBotDiv, ShopImage, WaresWrapper, SingleWareWrapper } from 'components/shop/ShopScreenCSS';
import { EquipmentCard } from 'components/equipments/EquipmentCard';
/* import user from '../../reducers/user'; */
import { ShopButton } from './ShopButton';
/* import goldIconIMG from '../../assets/images/UI/coin.png' */

export const ShopScreen = () => {
/*   const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken); */
  const equipmentData = useSelector((store) => store.equipment.equipmentData)

  /*   const onBuyClick = (equipmentId) => {
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
        dispatch(user.actions.setUserCoins(data.userCoins));
      })
      .catch((error) => console.log(error))
      .finally(() => { });
  } */

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
                <SingleWareWrapper>
                  <EquipmentCard singleWeapon={singleWeapon} />
                  <Card
                    key={singleWeapon._id}
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
                      <ShopButton
                        transactionID={singleWeapon._id}
                        transactionGold={singleWeapon.cost}
                        transactionType="Buy" />
                      <ShopButton
                        transactionID={singleWeapon._id}
                        transactionGold={singleWeapon.sell}
                        transactionType="Sell" />
                      {/* <Button
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          textDecoration: 'none',
                          mt: 0,
                          mb: 0,
                          fontSize: '1rem',
                          backgroundColor: '#3d4362',
                          borderRadius: '10%',
                          width: '48%'
                        }}
                        size="small"
                        onClick={() => onBuyClick(singleWeapon._id)}>
                        {singleWeapon.cost}
                        <img src={`${goldIconIMG}`} alt="gold display icon" />
                      Buy
                      </Button>
                      <Button
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          textDecoration: 'none',
                          mt: 0,
                          mb: 0,
                          fontSize: '1rem',
                          backgroundColor: '#3d4362',
                          borderRadius: '10%',
                          width: '48%'
                        }}
                        size="small"
                        onClick={() => onSellClick(singleWeapon._id)}>
                        {singleWeapon.sell}
                        <img src={`${goldIconIMG}`} alt="gold display icon" />
                      Sell
                      </Button> */}
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