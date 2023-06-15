/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from 'utils/urls';
import { Button, Container, createTheme, ThemeProvider, Stack, Typography } from '@mui/material';
import user from 'reducers/user';
import { AvatarIMG } from './HomeScreenCSS'

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
    setSelectedAvatarIndex(avatarData.findIndex((avatar) => avatar._id === currentUser.userAvatar));
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
        setSelectedAvatarIndex(avatarData.findIndex((avatar) => avatar._id === data.response));
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
      {(avatarData && avatarData.length > 0) && (
        <Container sx={{ padding: 0,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'center',
          height: '30vh',
          position: 'relative' }}>
          <Container sx={{ padding: '0 20px 20px' }}>
            <Typography
              sx={{ textAlign: 'center' }}>
              {avatarData[selectedAvatarIndex] ? avatarData[selectedAvatarIndex].name : 'Avatar'}
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" marginTop="120px">
              <AvatarIMG
                alt="avatar"
                src={avatarData[selectedAvatarIndex] ? avatarData[selectedAvatarIndex].img_src : ''} />
              <Button
                sx={{
                  borderStyle: 'outset',
                  borderColor: '#2e3242',
                  borderWidth: 'medium',
                  borderRadius: '12%',
                  widht: '35px',
                  height: '30px'
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
                  borderRadius: '12%',
                  widht: '35px',
                  height: '30px'
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
                  minWidth: 30,
                  backgroundColor: avatarData && avatarData[selectedAvatarIndex] != null && currentUser.userAvatar === avatarData[selectedAvatarIndex]._id ? '#097969' : ''
                }}
                size="small"
                variant="contained"
                onClick={onAvatarConfirm}>
                √
              </Button>
            </Stack>
          </Container>
        </Container>
      )}
    </ThemeProvider>
  );
};
