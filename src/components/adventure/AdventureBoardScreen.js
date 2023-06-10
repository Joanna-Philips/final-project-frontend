/* eslint-disable no-underscore-dangle */
import * as React from 'react';
/* npm install @mui/x-data-grid done */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from 'utils/urls';
// import user from 'reducers/user';
import { createTheme, ThemeProvider, Box, Card, CardContent, Button, Typography, Container } from '@mui/material';

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
  const accessToken = useSelector((store) => store.user.accessToken);
  // const currentUser = useSelector((store) => store.user);

  const [adventureData, setAdventureData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    };

    fetch(API_URL('adventures/all'), options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      })
      .then((data) => {
        console.log('adventure data', data);
        setAdventureData(data.response);
      })
      .catch((error) => console.log(error))
      .finally(() => { });
  }, [accessToken]);

  const onAdventureComplete = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ adventureId: adventureData._id })
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
                  height: 100,
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
                  <Button size="small" variant="contained" onClick={onAdventureComplete} sx={{ height: '45px', width: '75px' }}>Complete</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Box>
    </ThemeProvider>
  );
}
