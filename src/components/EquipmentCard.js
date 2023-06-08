/* eslint-disable no-underscore-dangle */
import * as React from 'react';
// import equipment from 'reducers/equipment';
import { useSelector } from 'react-redux';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  createTheme,
  ThemeProvider
} from '@mui/material';
import { WaresWrapper } from 'components/CSScomponents/ShopScreenCSS';
import goldIconIMG from '../assets/images/UI/coin.png'

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

export const EquipmentCard = () => {
  const equipmentData = useSelector((store) => store.equipment.equipmentData)
  return (
    <ThemeProvider theme={defaultTheme}>
      <WaresWrapper>
        {equipmentData && equipmentData.map((singleWeapon) => {
          return (
            <Card
              key={singleWeapon._id}
              sx={{ width: '25vw',
                maxWidth: 175,
                minWidth: '145px',
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
              </CardActions>
            </Card>
          )
        })}
      </WaresWrapper>
    </ThemeProvider>
  )
}