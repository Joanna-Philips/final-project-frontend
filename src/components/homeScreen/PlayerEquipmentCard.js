import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axe from 'assets/images/UI/equipment/axe-equipment.png';

export const PlayerEquipmentCard = () => {
  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="div"
        sx={{
          // Specify the desired height and width for the image
          height: 0,
          paddingTop: '75%', // 4:3 aspect ratio (change as needed)
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${axe})`,
          bgcolor: '#edd99b'
        }} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2">
        The Old Axe
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" variant="contained">Equip</Button>
      </CardActions>
    </Card>
  )
}