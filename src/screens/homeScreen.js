import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from 'utils/urls';
import user from 'reducers/user';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PlayerEquipmentCard } from 'components/homeScreen/PlayerEquipmentCard';
import { PlayerAvatar } from 'components/homeScreen/PlayerAvatar';
import homeBackground from '../assets/images/homestead.jpg';

// const defaultTheme = createTheme();
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
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('users/profile'), options)
      .then((response) => response.json())
      .then((data) => {
        dispatch(user.actions.setUserCoins(data.response.userCoins));
        dispatch(user.actions.setUserWeapons(data.response.UserWeapons));
        dispatch(user.actions.setUserAvatar(data.response.userAvatar));
      })
      .catch((error) => console.log(error))
      .finally(() => { /* setLoading(false) */ })
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main
        style={{
          backgroundImage: `url(${homeBackground})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '90vh'
        }}>
        <Grid container spacing={2} marginTop={0}>
          <Grid item xs={7}>
            <Box
              sx={{
                bgcolor: 'transparent',
                pt: 6,
                pb: 6,
                padding: 0
              }}>
              <Container maxWidth="sm">
                <Box
                  sx={{
                    bgcolor: 'rgba(237, 217, 155, 0.7)',
                    pt: 2,
                    pb: 2
                  }}>
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    color="text.primary"
                    sx={{ margin: 0 }}
                    gutterBottom>
                  Hi {username} 👾
                  </Typography>
                  {/* <Typography variant="h6" align="center" color="text.secondary" paragraph>
                  Customize your avatar here
                  </Typography> */}
                  <PlayerAvatar />
                </Box>
              </Container>
            </Box>
          </Grid>

          <Grid item xs={5}>

            <Container sx={{ py: 2 }} maxWidth="md">
              <Typography variant="h6" align="center" color="text.secondary" paragraph>
                Inventory
              </Typography>
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <PlayerEquipmentCard />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
}
