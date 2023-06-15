/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { WWTheme } from 'utils/MuiTheme';
import { PlayerAvatar } from 'components/home/PlayerAvatar';
import { PlayerInventory } from 'components/inventory/PlayerInventory';
import { AuthorizeAndLoad } from 'utils/AuthorizeAndLoad';
import { LoadingScreen } from 'components/loading/LoadingScreen';
import { UserWrapper } from './HomeScreenCSS';
import { IntroDialog } from './IntroDialog';

const theme = WWTheme

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
      <LoadingScreen />
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
          height: 'fit-content',
          backgroundColor: 'rgba(237, 217, 155, 0.7)',
          borderStyle: 'outset',
          borderColor: '#3B241C',
          borderRadius: '2%',
          marginTop: '10px',
          paddingBottom: '45px'
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
