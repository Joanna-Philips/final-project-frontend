import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import goldIconIMG from '../assets/images/UI/coin.png'
import buttonbackgroundIMG from '../assets/images/UI/buttonsmall.png'

export const ShopScreen = () => {
  const onBuyClick = () => {

  }

  const theme = createTheme({
    typography: {
      fontFamily: ['VT323', 'monospace'].join(','),
      fontSize: 18
    },
    status: {
      danger: '#e53e3e'
    },
    palette: {
      primary: {
        main: '#733214',
        darker: '#5c270f'
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Card sx={{ maxWidth: 175 }}>
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
          <CardActions>
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
              <img src={`${goldIconIMG}`} alt="gold display icon" />
                Buy
            </Button>
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
}