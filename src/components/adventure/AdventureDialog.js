/* eslint-disable react/jsx-closing-bracket-location */
import * as React from 'react';
import { Button, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Image from 'mui-image';

export const AdventureDialog = ({ message, onClose, adventure }) => {
  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
    >
      <Box
        // component="div"
        sx={{
          // height: '50vh',
          // width: 'auto',
          backgroundColor: 'red'
          // maxHeight: { xs: 230 },
          // maxWidth: { xs: 200 },
          // backgroundImage: `url(${adventure.img_src})`,
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat'
          // transform: 'scale(1)'
          // border: 1,
          // borderColor: 'red'
        }}>
        <DialogTitle id="alert-dialog-title">
          Quest
        </DialogTitle>
        <DialogContent style={{ overflow: 'hidden' }}>

          {/* <Container sx={{ height: '10rem' }}>
          <img
            style={{ width: '100%' }}
            src={adventure.img_src}
            alt="adventure" />
        </Container> */}
          <Image src={adventure.img_src} sx={{ display: 'flex', height: '100px' }} />
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}