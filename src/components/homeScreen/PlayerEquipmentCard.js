import * as React from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const PlayerEquipmentCard = () => {
  const userInventory = useSelector((store) => store.user.userWeapons);
  return (
    userInventory && userInventory.map((singleWeapon) => (
      <Card
        key={singleWeapon.id}
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="div"
          sx={{
            height: 0,
            paddingTop: '75%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${singleWeapon.img_src})`,
            bgcolor: '#edd99b'
          }} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="h2">
            {singleWeapon.name}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size="small" variant="contained">
              Equip
          </Button>
        </CardActions>
      </Card>
    ))
  );
};