/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from 'utils/urls';
import user from 'reducers/user';
import { AuthorizeAndLoad } from 'utils/AuthorizeAndLoad';
import { createTheme, ThemeProvider, Box, Card, CardContent, Button, Typography, Container } from '@mui/material';
import goldIconIMG from '../../assets/images/UI/coin.png';
import skullIconIMG from '../../assets/images/UI/equipment/skull.png';
import { QuestDisplayWrapper, QuestIMG, QuestIconDiv } from './AdventureBoardScreenCSS';
import { AdventureDialog } from './AdventureDialog';

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
  const adventureData = useSelector((store) => store.adventure.adventureData);
  const currentUser = useSelector((store) => store.user);

  const [showAdventureAlert, setShowAdventureAlert] = useState(false);
  const [questWon, setQuestWon] = useState(false);
  const [completedAdventure, setCompletedAdventure] = useState({});

  const onAdventureComplete = (adventureId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: currentUser.accessToken
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
        // const rewardCoins = Math.abs(data.response.userCoins - currentUser.userCoins);
        setCompletedAdventure(adventureData.find((a) => a._id === adventureId));
        setShowAdventureAlert(true);
        setQuestWon(data.response.questWon);
        dispatch(user.actions.setUserCoins(data.response.userCoins));
      })
      .catch((error) => console.log(error))
      .finally(() => { });
  }

  const generateMessage = (rewardCoins) => {
    const word = rewardCoins === 1 ? 'coin' : 'coins';
    const message = questWon
      ? `Congratulations, you won ${rewardCoins} gold ${word}`
      : `${completedAdventure.fail} You failed and lost ${rewardCoins} gold ${word}`;
    return message;
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
                sx={{
                  width: '48vw',
                  minWidth: 320,
                  height: '90px',
                  backgroundColor: 'rgba(237, 217, 155, 0.7)',
                  borderStyle: 'solid',
                  borderColor: '#3b241c',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '10px 0 10px 0',
                  color: 'white',
                  opacity: [0.85],
                  '&:hover': {
                    opacity: [1]
                  },
                  textShadow: '2px 2px 3px black'
                }}>
                <CardContent sx={{ padding: 2, display: 'flex', flexDirection: 'row' }}>
                  <Container sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: 900,
                        fontSize: '1rem',
                        lineHeight: 1,
                        '@media screen and (min-width: 1000px)': {
                          overflow: 'hidden',
                          fontSize: '1.2rem'
                        }
                      }}>
                      {singleAdventure.description}
                    </Typography>
                  </Container>
                  <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: '5px', marginRight: '1rem', flexDirection: 'column' }}>
                    <QuestIconDiv>
                      <img src={skullIconIMG} alt="quest difficulty" />
                      {singleAdventure.difficulty}
                    </QuestIconDiv>
                    <QuestIconDiv>
                      <img src={goldIconIMG} alt="user coins" />
                      {singleAdventure.rewardCoins}
                    </QuestIconDiv>
                  </Box>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => onAdventureComplete(singleAdventure._id)}
                    sx={{
                      height: '45px',
                      width: '75px',
                      borderStyle: 'outset',
                      borderColor: '#2e3242',
                      borderWidth: 'medium',
                      borderRadius: '12%'
                    }}>
                    <QuestIMG src="https://i.postimg.cc/XqWr4hMc/questswords.png" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
          <Card>
            {showAdventureAlert && (
              <AdventureDialog
                message={generateMessage(completedAdventure.rewardCoins)}
                onClose={() => setShowAdventureAlert(false)}
                adventure={completedAdventure} />
            )}
          </Card>
        </QuestDisplayWrapper>
      </Box>
    </ThemeProvider>
  );
}
