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
import { QuestDisplayWrapper, QuestIMG } from './AdventureBoardScreenCSS';

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
          height: '91lvh',
          backgroundImage: 'url(https://i.redd.it/usyvrjkyi3g41.gif)',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'row',
          backgroundPosition: 'center',
          justifyContent: 'center'
        }}>
        <QuestDisplayWrapper>
          {adventureData.map((singleAdventure) => {
            return (
              <Card
                key={singleAdventure._id}
                sx={{ width: '48vw',
                  minWidth: 145,
                  height: '6em',
                  backgroundColor: 'rgba(237, 217, 155, 0.7)',
                  borderStyle: 'solid',
                  borderColor: '#3b241c',
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  opacity: [0.6],
                  '&:hover': {
                    opacity: [1]
                  } }}>
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
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => onAdventureComplete(singleAdventure._id)}
                    sx={{ height: '45px',
                      width: '75px',
                      borderStyle: 'outset',
                      borderColor: '#2e3242',
                      borderWidth: 'medium',
                      borderRadius: '12%' }}>
                    <QuestIMG src="https://i.postimg.cc/XqWr4hMc/questswords.png" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </QuestDisplayWrapper>
      </Box>
    </ThemeProvider>
  );
}
