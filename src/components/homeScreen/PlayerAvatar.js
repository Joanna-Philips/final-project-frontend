import * as React from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import playerAvatar from 'assets/images/player.png';

const theme = createTheme({
  typography: {
    fontFamily: ['VT323', 'monospace'].join(','),
    fontSize: 18
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

export const PlayerAvatar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Box
              component="img"
              sx={{
                height: 500,
                width: 300,
                maxHeight: { xs: 230, md: 500 },
                maxWidth: { xs: 200, md: 300 }
              }}
              alt="Player avatar"
              src={playerAvatar} />
            <Typography
              sx={{ textAlign: 'center' }}>
              Avatar here
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button size="small" variant="contained"> ◄ </Button>
              <Button size="small" variant="contained"> ► </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
