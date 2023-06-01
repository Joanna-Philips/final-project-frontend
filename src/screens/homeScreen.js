import * as React from 'react';
import { useSelector } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PlayerEquipmentCard } from 'components/homeScreen/PlayerEquipmentCard';

const defaultTheme = createTheme();
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const HomeScreen = () => {
  const username = useSelector((store) => store.user.username);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Grid container spacing={2}>
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
                  This is the username: {username}
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Welcome to your home turf
                </Typography>
              </Container>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <Container sx={{ py: 8 }} maxWidth="md">
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
