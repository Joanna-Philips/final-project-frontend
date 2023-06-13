import * as React from 'react';
import { Button, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Image from 'mui-image';

export const AdventureDialog = ({ message, title, onClose, adventure }) => {
  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm">
      <Box
        sx={{
          backgroundColor: 'rgba(237, 217, 155, 0.7)',
          borderStyle: 'outset',
          borderColor: '#3b241c'
        }}>
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent style={{ overflow: 'hidden' }}>
          <Image src={adventure.img_src} sx={{ display: 'flex', height: '100px' }} />
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: 'white',
              fontWeight: 700,
              textDecoration: 'none',
              mt: 0,
              mb: 0,
              fontSize: '1rem',
              backgroundColor: '#3d4362',
              width: '20%',
              height: '110%',
              padding: 0,
              pt: 0.25,
              borderStyle: 'outset',
              borderWidth: 'medium',
              borderRadius: '12%',
              borderColor: '#2e3242'
            }}
            size="small"
            onClick={onClose}
            autoFocus>
            OK
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}