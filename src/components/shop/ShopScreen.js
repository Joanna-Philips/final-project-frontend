/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { API_URL } from 'utils/urls';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardActions, Typography, Button, createTheme, ThemeProvider } from '@mui/material';
import { ShopWrapper, ShopTopDiv, ShopBotDiv, ShopImage, WaresWrapper } from 'components/shop/ShopScreenCSS';
import { EquipmentCard } from 'components/equipments/EquipmentCard';
import user from '../../reducers/user';
import goldIconIMG from '../../assets/images/UI/coin.png'

export const ShopScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const equipmentData = useSelector((store) => store.equipment.equipmentData)

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
        dispatch(user.actions.setUserWeapons(data.purchasedEquipment._id));
      })
      .catch((error) => console.log(error))
      .finally(() => { });
  }

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
                <>
                  <EquipmentCard singleWeapon={singleWeapon} />
                  <Card
                    key={singleWeapon._id}
                    sx={{
                      width: '25vw',
                      maxWidth: 175,
                      minWidth: '145px',
                      height: '97%',
                      backgroundColor: '#edd99b',
                      borderStyle: 'solid',
                      borderColor: '#3b241c',
                      scrollSnapAlign: 'start',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                    <CardActions sx={{ justifyContent: 'space-between' }}>
                      <Typography sx={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '55%' }}>
                        {singleWeapon.cost}
                        <img src={`${goldIconIMG}`} alt="gold display icon" />
                      </Typography>
                      <Button
                        sx={{
                        /* backgroundImage: `url(${buttonbackgroundIMG})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover', */
                          color: 'white',
                          fontWeight: 700,
                          textDecoration: 'none',
                          mt: 3,
                          mb: 2,
                          fontSize: '1.2rem',
                          backgroundColor: '#3d4362',
                          borderRadius: '14%'
                        }}
                        size="small"
                        onClick={() => onBuyClick(singleWeapon._id)}>
                      Buy
                      </Button>
                    </CardActions>
                  </Card>
                </>
              )
            })}
          </WaresWrapper>
        </ShopBotDiv>
      </ShopWrapper>
    </ThemeProvider>
  );
}