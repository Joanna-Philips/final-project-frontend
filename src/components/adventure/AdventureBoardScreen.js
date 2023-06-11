/* eslint-disable no-underscore-dangle */
/* npm install @mui/x-data-grid done */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from 'utils/urls';
import user from 'reducers/user';
import { AuthorizeAndLoad } from 'utils/AuthorizeAndLoad';
import { createTheme, ThemeProvider, Box, Card, CardContent, Button, Typography, Container } from '@mui/material';
import goldIconIMG from '../../assets/images/UI/coin.png';

const theme = createTheme({
  typography: {
    fontFamily: ['VT323', 'monospace'].join(','),
    fontSize: 20,
    color: 'white'
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

export const AdventureBoardScreen = () => {
  AuthorizeAndLoad(useNavigate(), useDispatch());
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const adventureData = useSelector((store) => store.adventure.adventureData);
  // const currentUser = useSelector((store) => store.user);

  const onAdventureComplete = (adventureId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ adventureId })
    };

    fetch(API_URL('adventures/complete'), options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      })
      .then((data) => {
        console.log('adventure update data', data);
        dispatch(user.actions.setUserCoins(data.response));
      })
      .catch((error) => console.log(error))
      .finally(() => { });
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100vw',
          height: '94lvh',
          backgroundColor: 'primary.dark',
          display: 'flex',
          flexDirection: 'row'
        }}>
        <div>
          <img alt="questgiver" src="https://i.pinimg.com/originals/f4/bd/35/f4bd35b9b301a9934c559cc19a8766c2.gif" style={{ borderStyle: 'outset', width: '100%' }} />
        </div>
        <div style={{ height: '100vh', width: '100%' }}>
          {adventureData.map((singleAdventure) => {
            return (
              <Card
                key={singleAdventure._id}
                sx={{ width: '50vw',
                  maxWidth: '50vw',
                  minWidth: 145,
                  height: '6em',
                  backgroundColor: 'rgba(237, 217, 155, 0.7)',
                  borderStyle: 'solid',
                  borderColor: '#3b241c',
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between' }}>
                <CardContent sx={{ padding: 2, display: 'flex', flexDirection: 'row' }}>
                  <Container>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: 900,
                        fontSize: '1.2rem',
                        lineHeight: 1 }}>
                      {singleAdventure.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', fontWeight: '700' }}>
                      Difficulty: {singleAdventure.difficulty}
                    </Typography>
                  </Container>
                  <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: '5px', marginRight: '1rem' }}>
                    <img src={goldIconIMG} alt="user coins" />
                    {singleAdventure.rewardCoins}
                  </Box>
                  <Button size="small" variant="contained" onClick={() => onAdventureComplete(singleAdventure._id)} sx={{ height: '45px', width: '75px' }}>Complete</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Box>
    </ThemeProvider>
  );
}
