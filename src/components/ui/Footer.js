import React from 'react';
import { BottomNavigation, Typography, Link, Paper } from '@mui/material';

export const Footer = () => {
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        color: 'white',
        height: '50px',
        backgroundColor: '#3b241c',
        borderStyle: 'outset',
        borderColor: '#3b241c'
      }}
      elevation={3}>
      <BottomNavigation
        sx={{
          backgroundColor: 'transparent'
        }}>
        <Typography
          variant="body1"
          color="white"
          fontFamily="VT323, monospace"
          fontSize="1.2rem"
          fontWeight="500"
          paddingTop={1}
          textAlign="center">
          {'Made by '}
          <Link
            color="inherit"
            href="https://joannaphilips.se/"
            target="_blank"
            rel="noreferrer"
            alt="Joanna's portfolio">
          Joanna Philips
          </Link>
          {' & '}
          <Link
            color="inherit"
            href="https://leothunellportfoliowebdev.netlify.app/"
            target="_blank"
            rel="noreferrer"
            alt="Leo's portfolio">
          Leo Thunell
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </BottomNavigation>
    </Paper>
  );
};