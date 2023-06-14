/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  createTheme,
  ThemeProvider
} from '@mui/material';

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

export const EquipmentCard = ({ singleWeapon, specificButton }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Card
        sx={{ width: '25vw',
          maxWidth: 175,
          minWidth: 135,
          height: 210,
          backgroundColor: 'rgba(237, 217, 155, 0.7)',
          borderStyle: 'outset',
          borderColor: '#3b241c',
          scrollSnapAlign: 'start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {!isHovered && (
          <CardMedia
            sx={{ height: 85, backgroundSize: '65px', backgroundPosition: '50% 15%' }}
            image={singleWeapon.img_src}
            title="weapon name" />
        )}
        <CardContent sx={{ paddingBottom: '10px', paddingTop: 0 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 900,
              fontSize: '1.4rem',
              lineHeight: 1 }}>
            {singleWeapon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem', fontWeight: '700' }}>
            Damage: {singleWeapon.damage}
          </Typography>
          {isHovered && (
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
              {singleWeapon.description}
            </Typography>
          )}
          {specificButton}
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}