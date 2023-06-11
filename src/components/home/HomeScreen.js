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
import { HomeImg } from 'components/home/HomeScreenCSS';
import { PlayerInventory } from 'components/inventory/PlayerInventory';
// import { LoadingScreen } from 'components/loading/LoadingScreen';
import { AuthorizeAndLoad } from 'utils/AuthorizeAndLoad';
import homeBackground from '../../assets/images/homestead.jpg';

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
      <main
        style={{
          backgroundColor: '#3b241c',
          minHeight: '90vh'
        }}>
        <Grid container spacing={2} marginTop={0}>
          <Grid item xs={7}>
            {/* <Box
              sx={{
                bgcolor: 'transparent',
                pt: 6,
                pb: 6,
                paddingTop: 0
              }}> */}
            <Container maxWidth="sm">
              <Box
                sx={{
                  bgcolor: 'rgba(237, 217, 155, 0.7)',
                  pt: 2,
                  pb: 2,
                  maxWidth: '320px'
                }}>
                <Typography
                  component="h1"
                  variant="h5"
                  align="center"
                  color="text.primary"
                  sx={{ margin: 0 }}
                  gutterBottom>
                  Hi {currentUser.username} 👾
                </Typography>
                <PlayerAvatar />
              </Box>
              <HomeImg alt="home" src={homeBackground} />
            </Container>
            {/* </Box> */}
          </Grid>
          <Grid item xs={5}>
            <Container sx={{ py: 2, paddingTop: 0 }} maxWidth="md">
              <Typography variant="h6" align="center" color="white" paragraph>
                Inventory
              </Typography>
              <Grid container spacing={4}>
                <PlayerInventory />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
}
