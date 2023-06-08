/* eslint-disable max-len */
import * as React from 'react';
import { useState } from 'react';
/* import { useSelector } from 'react-redux';
import { API_URL } from 'utils/urls'; */
import { Box, Button, Grid, Container, createTheme, ThemeProvider, Stack, Typography } from '@mui/material';

const playerAvatar = 'https://cdna.artstation.com/p/assets/images/images/051/793/398/original/guilherme-meireles-shyguy.gif?1658202660'

const AvatarStyles = [
  {
    style: 1,
    img_src: 'https://cdna.artstation.com/p/assets/images/images/009/882/016/original/molly-heady-carroll-schveretpteacherdancetransparent.gif?1521396516'
  },
  {
    style: 2,
    img_src: 'https://cdna.artstation.com/p/assets/images/images/009/881/990/original/molly-heady-carroll-fero-feona-dance-xl.gif?1521396433'
  },
  {
    style: 3,
    img_src: 'https://cdna.artstation.com/p/assets/images/images/009/881/992/original/molly-heady-carroll-frenchbulldog-run-postable-8colours.gif?1521396443'
  },
  { style: 4,
    img_src: 'https://cdnb.artstation.com/p/assets/images/images/009/881/985/original/molly-heady-carroll-doctorspecialmove.gif?1521396421' }
]

const theme = createTheme({
  typography: {
    fontFamily: ['VT323', 'monospace'].join(','),
    fontSize: 20
  },
  status: {
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      main: '#3d4362',
      darker: '#2e3242'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    }
  }
});

export const PlayerAvatar = () => {
  /* const accessToken = useSelector((store) => store.user.accessToken);
  const [avatarList, setAvatarList] = useState([]); */
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);

  /* useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('avatars'), options)
      .then((response) => response.json())
      .then((data) => { setAvatarList(data.response) })
      .catch((error) => console.log(error))
      .finally(() => { })
  }, []); */

  const avatarChoices = AvatarStyles.map((singleAvatar) => ({
    style: singleAvatar.style,
    img_src: singleAvatar.img_src
  }));

  const handlePreviousAvatar = () => {
    setSelectedAvatarIndex((prevIndex) => {
      if (prevIndex === 0) {
        return avatarChoices.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNextAvatar = () => {
    setSelectedAvatarIndex((prevIndex) => {
      if (prevIndex === avatarChoices.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ padding: 0 }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Box
              component="div"
              sx={{
                height: 500,
                width: 300,
                maxHeight: { xs: 230 },
                maxWidth: { xs: 200 },
                backgroundImage: `url(${avatarChoices[selectedAvatarIndex] ? avatarChoices[selectedAvatarIndex].img_src : playerAvatar})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: 'scale(1.8)'
                /*                 '@media (min-width: 600px)': {
                  transform: 'scale(1.8)'
                },
                '@media (min-width: 900px)': {
                  transform: 'scale(1.5)'
                } */
              }} />
            <Typography
              sx={{ textAlign: 'center' }}>
              {avatarChoices[selectedAvatarIndex] ? avatarChoices[selectedAvatarIndex].name : 'Avatar here'}
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button size="small" variant="contained" onClick={handlePreviousAvatar}> ◄ </Button>
              <Button size="small" variant="contained" onClick={handleNextAvatar}> ► </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
