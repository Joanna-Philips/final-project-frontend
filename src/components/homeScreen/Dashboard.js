import * as React from 'react';
// import AppBar from '@mui/material/AppBar';

// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const Dashboard = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Grid container spacing={2}>
          {/* Hero unit */}
          <Grid item xs={7}>
            <Box
              sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6
              }}>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom>
              Username
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Welcome to your home turf
                </Typography>
              </Container>
            </Box>
          </Grid>
          {/* End hero unit */}
        </Grid>
      </main>
    </ThemeProvider>
  );
}