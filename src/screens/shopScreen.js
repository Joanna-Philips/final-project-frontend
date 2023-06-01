import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ShopWrapper, ShopTopDiv, ShopBotDiv, ShopImage, WaresWrapper } from 'components/CSScomponents/ShopScreenCSS';
import goldIconIMG from '../assets/images/UI/coin.png'
import buttonbackgroundIMG from '../assets/images/UI/buttonsmall.png'

export const ShopScreen = () => {
  const onBuyClick = () => {

  }

  const theme = createTheme({
    typography: {
      fontFamily: ['VT323', 'monospace'].join(',')
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <ShopWrapper>
        <ShopTopDiv>
          <ShopImage src="https://art.ngfiles.com/images/3060000/3060538_steelsoldier_copper-weapon-merchant.gif?f1677009972" alt="shopkeeper" />
        </ShopTopDiv>
        <ShopBotDiv>
          <WaresWrapper>
            <Card sx={{ maxWidth: 175,
              backgroundColor: '#edd99b',
              borderStyle: 'solid',
              borderColor: '#3b241c',
              scrollSnapAlign: 'start' }}>
              <CardMedia
                sx={{ height: 125 }}
                image="https://i.pinimg.com/564x/61/ac/19/61ac19b44980dba2348e06197c3b20f7.jpg"
                title="weapon name" />
              <CardContent sx={{ padding: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
          WEAPON NAME
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
          WEAPON DESCRIPTION, a bit longer, something like this
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Typography>
                PRICE HERE
                </Typography>
                <Button
                  sx={{
                    backgroundImage: `url(${buttonbackgroundIMG})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    color: 'white',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                  size="small"
                  onClick={onBuyClick}>
                  <img src={`${goldIconIMG}`} alt="gold display icon" />
                Buy
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 175,
              backgroundColor: '#edd99b',
              borderStyle: 'solid',
              borderColor: '#3b241c',
              scrollSnapAlign: 'start' }}>
              <CardMedia
                sx={{ height: 125 }}
                image="https://i.pinimg.com/236x/c7/52/7a/c7527a61b7b952a4e4ffa7d07fa6c645.jpg"
                title="weapon name" />
              <CardContent sx={{ padding: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
          WEAPON NAME
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
          WEAPON DESCRIPTION, a bit longer, something like this
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Typography>
                PRICE HERE
                </Typography>
                <Button
                  sx={{
                    backgroundImage: `url(${buttonbackgroundIMG})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    color: 'white',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                  size="small"
                  onClick={onBuyClick}>
                  <img src={`${goldIconIMG}`} alt="gold display icon" />
                Buy
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 175,
              backgroundColor: '#edd99b',
              borderStyle: 'solid',
              borderColor: '#3b241c',
              scrollSnapAlign: 'start' }}>
              <CardMedia
                sx={{ height: 125 }}
                image="https://i.pinimg.com/564x/61/ac/19/61ac19b44980dba2348e06197c3b20f7.jpg"
                title="weapon name" />
              <CardContent sx={{ padding: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
          WEAPON NAME
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
          WEAPON DESCRIPTION, a bit longer, something like this
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Typography>
                PRICE HERE
                </Typography>
                <Button
                  sx={{
                    backgroundImage: `url(${buttonbackgroundIMG})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    color: 'white',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                  size="small"
                  onClick={onBuyClick}>
                  <img src={`${goldIconIMG}`} alt="gold display icon" />
                Buy
                </Button>
              </CardActions>
            </Card>
          </WaresWrapper>
        </ShopBotDiv>
      </ShopWrapper>
    </ThemeProvider>
  );
}