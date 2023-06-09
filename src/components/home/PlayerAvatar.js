/* eslint-disable max-len */
/* eslint-disable max-len */
import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { API_URL } from 'utils/urls';
import { Box, Button, Grid, Container, createTheme, ThemeProvider, Stack, Typography } from '@mui/material';
// import { fetchAvatarData } from 'reducers/avatar';

// const playerAvatar = 'https://cdna.artstation.com/p/assets/images/images/051/793/398/original/guilherme-meireles-shyguy.gif?1658202660'

// const AvatarStyles = [
//   {
//     style: 1,
//     name: 'Spinning Man',
//     img_src: 'https://cdna.artstation.com/p/assets/images/images/009/882/016/original/molly-heady-carroll-schveretpteacherdancetransparent.gif?1521396516'
//   },
//   {
//     style: 2,
//     name: 'Dancing Lady',
//     img_src: 'https://cdna.artstation.com/p/assets/images/images/009/881/990/original/molly-heady-carroll-fero-feona-dance-xl.gif?1521396433'
//   },
//   {
//     style: 3,
//     name: 'Black Dog',
//     img_src: 'https://cdna.artstation.com/p/assets/images/images/009/881/992/original/molly-heady-carroll-frenchbulldog-run-postable-8colours.gif?1521396443'
//   },
//   { style: 4,
//     name: 'Backpack Man',
//     img_src: 'https://cdnb.artstation.com/p/assets/images/images/009/881/985/original/molly-heady-carroll-doctorspecialmove.gif?1521396421' }
// ]

const theme = createTheme({
  typography: {
    fontFamily: ['VT323', 'monospace'].join(','),
    fontSize: 20
  },
  status: {
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      main: '#3d4362',
      darker: '#2e3242'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    }
  }
});

export const PlayerAvatar = () => {
  // const dispatch = useDispatch();
  // const accessToken = useSelector((store) => store.user.accessToken);
  // const currentUser = useSelector((store) => store.user);
  const avatarData = useSelector((store) => store.avatar.avatarData);

  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState()

  // useEffect(() => {
  //   dispatch(fetchAvatarData(accessToken));
  // }, [accessToken, dispatch]);

  const avatarChoices = avatarData.map((singleAvatar) => ({
    style: singleAvatar.style,
    name: singleAvatar.name,
    img_src: singleAvatar.img_src
  }));

  const handlePreviousAvatar = () => {
    setSelectedAvatarIndex((arrayIndex) => {
      if (arrayIndex === 0) {
        return avatarChoices.length - 1;
      } else {
        return arrayIndex - 1;
      }
    });
  };

  const handleNextAvatar = () => {
    setSelectedAvatarIndex((arrayIndex) => {
      if (arrayIndex === avatarChoices.length - 1) {
        return 0;
      } else {
        return arrayIndex + 1;
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ padding: 0 }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Box
              component="div"
              sx={{
                height: 500,
                width: 300,
                maxHeight: { xs: 230 },
                maxWidth: { xs: 200 },
                // backgroundImage: `url(${avatarChoices[selectedAvatarIndex] ? avatarChoices[selectedAvatarIndex].img_src : ''})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: 'scale(1.8)'
              }} />
            <Typography
              sx={{ textAlign: 'center' }}>
              {/* {avatarChoices[selectedAvatarIndex] ? avatarChoices[selectedAvatarIndex].name : 'Avatar here'} */}
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button size="small" variant="contained" onClick={handlePreviousAvatar}> ◄ </Button>
              <Button size="small" variant="contained" onClick={handleNextAvatar}> ► </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
