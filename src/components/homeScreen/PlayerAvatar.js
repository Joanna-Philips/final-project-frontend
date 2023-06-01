import * as React from 'react';
import Box from '@mui/material/Box';

// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import playerAvatar from 'assets/images/player.png';

export const PlayerAvatar = () => {
  return (
    <Container>
      <Box
        component="img"
        sx={{
          height: 500,
          width: 300,
          maxHeight: { xs: 230, md: 500 },
          maxWidth: { xs: 200, md: 300 },
          border: 'black'
        }}
        alt="Player avatar"
        src={playerAvatar} />
      <Typography> Avatar here </Typography>
    </Container>
  )
}
