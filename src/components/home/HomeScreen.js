/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { Container/* , Typography */ } from '@mui/material'
/* import Grid from '@mui/material/Grid'; */
/* import Box from '@mui/material/Box'; */
/* import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'; */
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PlayerAvatar } from 'components/home/PlayerAvatar';
import { PlayerInventory } from 'components/inventory/PlayerInventory';
// import { LoadingScreen } from 'components/loading/LoadingScreen';
import { AuthorizeAndLoad } from 'utils/AuthorizeAndLoad';
import { UserWrapper } from './HomeScreenCSS';

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

export const HomeScreen = () => {
  AuthorizeAndLoad(useNavigate(), useDispatch());
  /* const currentUser = useSelector((store) => store.user); */
  const isLoading = useSelector((store) => store.loader.isLoading);

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserWrapper>
        <Container sx={{
          width: '95%',
          height: '82vh',
          backgroundColor: 'rgba(237, 217, 155, 0.7)',
          borderStyle: 'outset',
          borderColor: '#3B241C',
          borderRadius: '2%',
          marginTop: '10px'
        }}>
          <Container sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            /* border: 2,
            borderColor: 'red', */
            height: '200px'
          }}>
            {/* <Typography textAlign="center">
              {currentUser.username}
            </Typography> */}
            <PlayerAvatar />
          </Container>
          <Container sx={{
            /* border: 2,
            borderColor: 'green', */
            maxHeight: '46vh',
            padding: 0
          }}>
            <PlayerInventory />
          </Container>
        </Container>
      </UserWrapper>
    </ThemeProvider>
  );
}
