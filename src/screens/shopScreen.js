import * as React from 'react';
import { useEffect, useState } from 'react';
import { API_URL } from 'utils/urls';
import { useSelector } from 'react-redux';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  createTheme,
  ThemeProvider
} from '@mui/material';
import { ShopWrapper, ShopTopDiv, ShopBotDiv, ShopImage, WaresWrapper } from 'components/CSScomponents/ShopScreenCSS';
import goldIconIMG from '../assets/images/UI/coin.png'
import buttonbackgroundIMG from '../assets/images/UI/buttonsmall.png'

export const ShopScreen = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState([])
  const accessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('equipments'), options)
      .then((response) => response.json())
      .then((data) => { setEquipmentList(data.response) })
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [setLoading]);

  const onBuyClick = () => {

  }

  const theme = createTheme({
    typography: {
      fontFamily: ['VT323', 'monospace'].join(',')
    }
  });

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  } else {
    return (
      <ThemeProvider theme={theme}>
        <ShopWrapper>
          <ShopTopDiv>
            <ShopImage src="https://art3b.pixilart.com/sizes/sr282a958635e84_350.png?v=1.2" alt="shopkeeper" />
          </ShopTopDiv>
          <ShopBotDiv>
            <WaresWrapper>
              {equipmentList.map((singleWeapon) => {
                return (
                  <Card
                    key={singleWeapon.id}
                    sx={{ width: '25vw',
                      maxWidth: 175,
                      height: '97%',
                      backgroundColor: '#edd99b',
                      borderStyle: 'solid',
                      borderColor: '#3b241c',
                      scrollSnapAlign: 'start',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between' }}>
                    <CardMedia
                      sx={{ height: 85, backgroundSize: '55px' }}
                      image={singleWeapon.img_src}
                      title="weapon name" />
                    <CardContent sx={{ padding: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: 900,
                          fontSize: '1.2rem',
                          lineHeight: 1 }}>
                        {singleWeapon.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', fontWeight: '700' }}>
                        Damage: {singleWeapon.damage}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                        {singleWeapon.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between' }}>
                      <Typography sx={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '55%' }}>
                        {singleWeapon.cost}
                        <img src={`${goldIconIMG}`} alt="gold display icon" />
                      </Typography>
                      <Button
                        sx={{
                          backgroundImage: `url(${buttonbackgroundIMG})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                          color: 'white',
                          fontWeight: 700,
                          textDecoration: 'none'
                        }}
                        size="small"
                        onClick={onBuyClick}>
                        Buy
                      </Button>
                    </CardActions>
                  </Card>
                )
              })}
            </WaresWrapper>
          </ShopBotDiv>
        </ShopWrapper>
      </ThemeProvider>
    );
  }
}