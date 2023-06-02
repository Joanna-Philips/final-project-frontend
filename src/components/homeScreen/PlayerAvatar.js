/* eslint-disable max-len */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from 'utils/urls';
import { Box, Button, Grid, Container, createTheme, ThemeProvider, Stack, Typography } from '@mui/material';
import playerAvatar from 'assets/images/player.png';

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
      main: '#733214',
      darker: '#5c270f'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    }
  }
});

export const PlayerAvatar = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const [avatarList, setAvatarList] = useState([]);
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);

  useEffect(() => {
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
  }, []);

  const avatarChoices = avatarList.map((singleAvatar) => ({
    name: singleAvatar.style,
    image: singleAvatar.img_src
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
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Box
              component="img"
              sx={{
                height: 500,
                width: 300,
                maxHeight: { xs: 230, md: 500 },
                maxWidth: { xs: 200, md: 300 }
              }}
              alt="Player avatar"
              src={avatarChoices[selectedAvatarIndex] ? avatarChoices[selectedAvatarIndex].image : playerAvatar} />
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
