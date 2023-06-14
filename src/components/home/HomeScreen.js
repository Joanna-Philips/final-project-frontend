/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PlayerAvatar } from 'components/home/PlayerAvatar';
import { PlayerInventory } from 'components/inventory/PlayerInventory';
// import { LoadingScreen } from 'components/loading/LoadingScreen';
import { AuthorizeAndLoad } from 'utils/AuthorizeAndLoad';
import { UserWrapper } from './HomeScreenCSS';
import { IntroDialog } from './IntroDialog';

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
  const isLoading = useSelector((store) => store.loader.isLoading);
  const [showIntroDialog, setShowIntroDialog] = useState(true);

  useEffect(() => {
    const hasShownIntroDialog = sessionStorage.getItem('hasShownIntroDialog');
    if (hasShownIntroDialog) {
      setShowIntroDialog(false);
    } else {
      sessionStorage.setItem('hasShownIntroDialog', true);
    }
  }, []);

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserWrapper>
        {showIntroDialog && (
          <IntroDialog onClose={() => setShowIntroDialog(false)} />
        )}
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
            height: '200px'
          }}>
            <PlayerAvatar />
          </Container>
          <Container sx={{
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
