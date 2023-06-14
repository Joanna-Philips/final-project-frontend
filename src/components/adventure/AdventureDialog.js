import * as React from 'react';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const AdventureDialog = ({ message, onClose, adventure }) => {
  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title" sx={{ zIndex: 1, color: 'white', textShadow: '2px 2px 3px black', marginTop: '5%' }}>
        {adventure.description}
      </DialogTitle>
      <img
        style={{ objectFit: 'cover', position: 'absolute', opacity: 0.8, width: '100%', height: '100%' }}
        src={adventure.img_src}
        alt="adventure" />
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ color: 'white',
            textShadow: '2px 2px 3px black',
            zIndex: 1,
            position: 'relative',
            marginTop: '15%' }}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ color: 'white',
            textShadow: '2px 2px 3px black',
            zIndex: 1,
            position: 'relative',
            height: '35px',
            width: '45px',
            borderStyle: 'outset',
            borderColor: '#2e3242',
            borderWidth: 'medium',
            borderRadius: '12%',
            backgroundColor: '#3d4362' }}
          onClick={onClose}
          autoFocus>
            OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}