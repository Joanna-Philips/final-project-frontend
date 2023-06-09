/* eslint-disable max-len */
import React from 'react';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export const IntroDialog = ({ onClose }) => {
  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg">
      <img
        style={{ objectFit: 'cover', position: 'absolute', opacity: 0.7, width: '100%', height: '100%' }}
        src="https://i.pinimg.com/originals/07/e6/1f/07e61fbf05448a264881906c53b90367.gif"
        alt="intro" />
      <DialogContent style={{ height: '72vh' }}>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ color: 'white',
            textShadow: '2px 2px 3px black',
            zIndex: 1,
            position: 'relative',
            marginTop: '5%',
            fontSize: '2.3rem',
            padding: '1.5rem' }}>
            Lost in the woods, you find yourself in a desperate plight,
            with your life hanging in the balance, entangled in the enigmatic
            secrets of this enchanted realm.
            To escape, you must embark on perilous quests, putting your skills, wit, and courage to the test.
            Each challenge you conquer brings you closer to freedom,
            as the forest whispers its mysterious secrets, and you listen intently, determined to survive.
            Amidst the whispers, a glimmer of hope emerges—an oasis appears,
            in the form of an uninhabited house nestled by a serene lake.
            Here, you can find respite and gather strength to continue your journey.
            The forest calls...will you answer its beckoning?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ color: 'white',
            textShadow: '2px 2px 3px black',
            zIndex: 1,
            position: 'relative',
            height: '50px',
            width: '65px',
            borderStyle: 'outset',
            borderColor: '#2e3242',
            borderWidth: 'medium',
            borderRadius: '12%',
            backgroundColor: '#3d4362' }}
          onClick={onClose}
          autoFocus>
            X
        </Button>
      </DialogActions>
    </Dialog>
  );
}