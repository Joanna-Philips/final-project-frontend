/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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
  const currentUser = useSelector((store) => store.user);
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
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '70vw',
            height: '60vh',
            backgroundColor: 'rgba(237, 217, 155, 0.7)',
            borderStyle: 'outset',
            borderColor: '#3b241c'
          }}>
          <Grid
            marginTop={0}
            sx={{ display: 'flex',
              flexDirection: 'column',
              '@media screen and (min-width: 700px)': {
                display: 'flex',
                flexDirection: 'row'
              } }}>
            <Grid item xs={7}>
              <Container
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '40vw'
                }}>
                <Box
                  sx={{
                    bgcolor: 'rgba(237, 217, 155, 0.7)',
                    maxWidth: '320px',
                    borderStyle: 'outset',
                    borderColor: '#3b241c',
                    borderRadius: '3%'
                  }}>
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    color="text.primary"
                    sx={{ margin: 0,
                      backgroundColor: '#3d4362',
                      color: 'white',
                      padding: '0 5px',
                      borderStyle: 'outset',
                      fontSize: '1rem',
                      borderRadius: '13%',
                      width: 'fit-content',
                      marginTop: '-3px',
                      marginLeft: '-3px' }}
                    gutterBottom>
                    {currentUser.username} 👾
                  </Typography>
                  <PlayerAvatar />
                </Box>
              </Container>
            </Grid>
            <Grid item xs={5}>
              <Container sx={{ py: 2, paddingTop: 0 }} maxWidth="md">
                <Grid container spacing={4}>
                  <PlayerInventory />
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </UserWrapper>
    </ThemeProvider>
  );
}
