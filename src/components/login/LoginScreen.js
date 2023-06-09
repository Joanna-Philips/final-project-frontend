/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import { API_URL } from 'utils/urls';
import { Button, FormControlLabel, FormGroup, CssBaseline, TextField, Switch, Grid, Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginWrapper, LogoIMG } from 'components/login/LoginScreenCSS';
import loader from 'reducers/loader';
import logo from 'assets/images/UI/logo.png';
import { generatePassword, generateRandomName } from './GuestLoginUtils';

export const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const [guestLogin, setGuestLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);

  const onFormSubmit = (event) => {
    if (event != null) {
      event.preventDefault();
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    };
    fetch(API_URL(`users/${mode}`), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(loader.actions.setLoading(true));
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setError(null));
          setLoginError(false);
          localStorage.setItem('user', JSON.stringify(data.response));
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response));
          setLoginError(true);
          setLoginErrorMessage(data.response);
        }
      });
  };

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken]);

  useEffect(() => {
    if (guestLogin && (username !== '' && password !== '' && mode === 'register')) {
      onFormSubmit()
    }
  }, [guestLogin, username, password, mode]);

  const GuestLogin = () => {
    setUsername(generateRandomName());
    setPassword(generatePassword());
    setMode('register');
    setGuestLogin(true);
  };

  const defaultTheme = createTheme({
    typography: {
      fontFamily: ['VT323', 'monospace'].join(',')
    },
    palette: {
      primary: {
        main: '#3d4362'
      }
    }
  });

  const handleModeChange = () => {
    if (mode === 'login') {
      setMode('register');
    } else {
      setMode('login');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <LoginWrapper>
        <LogoIMG src={logo} alt="lost logo" />

        <Container
          component="main"
          maxWidth="xs"
          sx={{ backgroundColor: 'rgba(237, 217, 155, 0.8)',
            borderStyle: 'outset',
            borderColor: '#3b241c' }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              marginBottom: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
            <Typography component="h1" variant="h5">
              Welcome, please {mode === 'login' ? 'login' : 'register'}
            </Typography>
            <Box
              component="form"
              onSubmit={onFormSubmit}
              noValidate
              sx={{ mt: 1 }}>
              <TextField
                type="text"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
                id="username"
                label="Name"
                name="username"
                autoFocus
                error={loginError}
                helperText={
                  loginError
                    ? (() => {
                      if (mode === 'register') {
                        if (
                          loginErrorMessage
                            === 'Username taken, try another one'
                        ) {
                          return 'Username is already taken, please choose another one';
                        } else if (
                          loginErrorMessage
                            === 'Username cannot contain special characters or spaces'
                        ) {
                          return 'Username cannot contain special characters or spaces';
                        } else {
                          return '';
                        }
                      } else if (mode === 'login') {
                        return 'Credentials do not match';
                      } else {
                        return '';
                      }
                    })()
                    : ''
                } />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                error={loginError}
                helperText={
                  loginError
                    ? mode === 'login'
                      ? 'Credentials do not match'
                      : ''
                    : ''
                } />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, fontSize: '1.2rem', borderStyle: 'outset', borderWidth: 'medium', borderColor: '#2e3242' }}>
                {mode === 'login' ? 'Login' : 'Register'}
              </Button>
              <Button
                type="button"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, fontSize: '1.2rem' }}
                onClick={GuestLogin}>
                Login as Guest
              </Button>
              <Grid container>
                <FormGroup>
                  {mode === 'login'
                    ? "Don't have an account? →"
                    : 'Already have an account? →'}
                  {mode === 'login' ? (
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={handleModeChange}
                          inputProps={{ 'aria-label': 'controlled' }} />
                      }
                      label="Login" />
                  ) : (
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={handleModeChange}
                          inputProps={{ 'aria-label': 'controlled' }} />
                      }
                      label="Register" />
                  )}
                </FormGroup>
              </Grid>
            </Box>
          </Box>
        </Container>
      </LoginWrapper>
    </ThemeProvider>

  );
};
