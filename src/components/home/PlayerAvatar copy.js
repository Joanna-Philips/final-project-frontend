/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from 'utils/urls';
import { Box, Button, Container, createTheme, ThemeProvider, Stack, Typography } from '@mui/material';
import user from 'reducers/user';

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
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const avatarData = useSelector((store) => store.avatar.avatarData);
  const currentUser = useSelector((store) => store.user);
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);

  useEffect(() => {
    // console.log('currentUserAvatar', currentUser, 'avatar Data PI', avatarData);
    const indexOfCurrentAvatar = avatarData.findIndex((avatar) => avatar._id === currentUser.userAvatar);
    setSelectedAvatarIndex(indexOfCurrentAvatar);
  }, [avatarData, currentUser])

  const onAvatarConfirm = () => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ avatarId: avatarData[selectedAvatarIndex]._id })
    };

    fetch(API_URL('avatars/update'), options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      })
      .then((data) => {
        console.log('avatars update Data', data);
        dispatch(user.actions.setUserAvatar(data.response));
      })
      .catch((error) => console.log(error))
      .finally(() => { });
  }

  const handlePreviousAvatar = () => {
    setSelectedAvatarIndex((arrayIndex) => {
      if (arrayIndex === 0) {
        return avatarData.length - 1;
      } else {
        return arrayIndex - 1;
      }
    });
  };

  const handleNextAvatar = () => {
    setSelectedAvatarIndex((arrayIndex) => {
      if (arrayIndex === avatarData.length - 1) {
        return 0;
      } else {
        return arrayIndex + 1;
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ padding: 0, border: 2, borderColor: 'blue' }}>
        {/* <Grid container justifyContent="center" alignItems="center" sx={{ border: 2, borderColor: 'green' }}> */}
        {/* <Grid item> */}
        <Box
          component="div"
          sx={{
            height: 330,
            width: 300,
            maxHeight: { xs: 230 },
            maxWidth: { xs: 200 },
            backgroundImage: `url(${avatarData[selectedAvatarIndex] ? avatarData[selectedAvatarIndex].img_src : ''})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: 'scale(1.8)',
            border: 1,
            borderColor: 'red'
          }} />
        <Container sx={{ padding: '0 20px 20px' }}>
          <Typography
            sx={{ textAlign: 'center' }}>
            {avatarData[selectedAvatarIndex] ? avatarData[selectedAvatarIndex].name : 'Avatar'}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              sx={{
                borderStyle: 'outset',
                borderColor: '#2e3242',
                borderWidth: 'medium',
                borderRadius: '12%'
              }}
              size="small"
              variant="contained"
              onClick={handlePreviousAvatar}> ◄
            </Button>
            <Button
              sx={{
                borderStyle: 'outset',
                borderColor: '#2e3242',
                borderWidth: 'medium',
                borderRadius: '12%'
              }}
              size="small"
              variant="contained"
              onClick={handleNextAvatar}> ►
            </Button>
            <Button
              sx={{
                borderStyle: 'outset',
                borderColor: '#2e3242',
                borderWidth: 'medium',
                borderRadius: '12%',
                width: 30,
                height: 30,
                minWidth: 30
              }}
              size="small"
              variant="contained"
              onClick={onAvatarConfirm}>
                  √
            </Button>
          </Stack>
        </Container>
        {/* </Grid> */}
        {/* </Grid> */}
      </Container>
    </ThemeProvider>
  );
};
