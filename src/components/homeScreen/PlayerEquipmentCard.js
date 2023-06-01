import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const PlayerEquipmentCard = () => {
  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="div"
        sx={{
        // 16:9
          pt: '56.25%'
        }}
        image="https://source.unsplash.com/random?wallpapers" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
        Equipment
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Equip</Button>
      </CardActions>
    </Card>
  )
}