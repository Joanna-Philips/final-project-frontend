/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { PlayerEquipmentCard } from 'components/homeScreen/PlayerEquipmentCard';
import { PlayerAvatar } from 'components/homeScreen/PlayerAvatar';
import { EquipmentCard } from 'components/EquipmentCard';
import { HomeImg } from 'components/CSScomponents/HomeScreenCSS';
import { fetchEquipmentData } from 'reducers/equipment';
import homeBackground from '../assets/images/homestead.jpg';

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
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  // const username = useSelector((store) => store.user.username);
  // const userWeapons = useSelector((store) => store.user.UserWeapons);
  // const userCoins = useSelector((store) => store.user.userCoins)
  const currentUser = useSelector((store) => store.user)
  const isLoading = useSelector((state) => state.equipment.isLoading);

  /* const equipmentData = useSelector((state) => state.equipment.equipmentData); */

  useEffect(() => {
    dispatch(fetchEquipmentData(accessToken));
  }, [accessToken, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   dispatch(loader.actions.setLoading(true));
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: accessToken
  //     }
  //   }
  //   fetch(API_URL('users/profile'), options)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data.response.userWeapons);
  //       dispatch(user.actions.setUserCoins(data.response.userCoins));
  //       dispatch(user.actions.setUserWeapons(data.response.userWeapons));
  //       dispatch(user.actions.setUserAvatar(data.response.userAvatar));
  //       dispatch(loader.actions.setLoading(false));
  //       // console.log('data:', data.response.userWeapons);
  //     })
  //     .catch((error) => console.log(error))
  //     // .finally(() => { console.log('finally', currentUser.userWeapons) })
  // }, []);

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
            <Box
              sx={{
                bgcolor: 'transparent',
                pt: 6,
                pb: 6,
                paddingTop: 0
              }}>
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
                  {/* <Typography variant="h6" align="center" color="text.secondary" paragraph>
                  Customize your avatar here
                  </Typography> */}
                  <PlayerAvatar />
                </Box>
                <HomeImg alt="home" src={homeBackground} />
              </Container>
            </Box>
          </Grid>

          <Grid item xs={5}>

            <Container sx={{ py: 2, paddingTop: 0 }} maxWidth="md">
              <Typography variant="h6" align="center" color="white" paragraph>
                Inventory
              </Typography>
              <Grid container spacing={4}>
                <EquipmentCard />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
}
