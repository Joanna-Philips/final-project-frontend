// /* eslint-disable no-underscore-dangle */
// import * as React from 'react';
// // import { useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import { PlayerAvatar } from 'components/home/PlayerAvatar';
// // import { HomeImg } from 'components/home/HomeScreenCSS';
// // import { fetchEquipmentData } from 'reducers/equipment';
// // import { PlayerInventory } from 'components/inventory/PlayerInventory';

// const theme = createTheme({
//   typography: {
//     fontFamily: ['VT323', 'monospace'].join(','),
//     fontSize: 20
//   },
//   status: {
//     danger: '#e53e3e'
//   },
//   palette: {
//     primary: {
//       main: '#733214',
//       darker: '#5c270f'
//     },
//     neutral: {
//       main: '#64748B',
//       contrastText: '#fff'
//     }
//   }
// });

// export const PlayerAvatarCard = ({ singleAvatar }) => {
//   // const currentUser = useSelector((store) => store.user);

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Grid container spacing={2} marginTop={0}>
//         <Grid item xs={7}>
//           <Container maxWidth="sm">
//             <Box
//               sx={{
//                 bgcolor: 'rgba(237, 217, 155, 0.7)',
//                 pt: 2,
//                 pb: 2,
//                 maxWidth: '500px'
//               }}>
//               <Card
//                 key={singleAvatar._id}
//                 sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//                 <CardMedia
//                   component="div"
//                   sx={{
//                     height: 50,
//                     paddingTop: '75%',
//                     backgroundSize: 'contain',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center',
//                     backgroundImage: `url(${singleAvatar.img_src})`,
//                     bgcolor: '#edd99b'
//                   }} />
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography gutterBottom variant="h6" component="h2">
//                     {singleAvatar.name}
//                   </Typography>
//                 </CardContent>
//                 <CardActions sx={{ justifyContent: 'center' }}>
//                   <Button size="small" variant="contained">
//                     Confirm
//                   </Button>
//                 </CardActions>
//               </Card>
//               {/* <Typography
//                 component="h1"
//                 variant="h5"
//                 align="center"
//                 color="text.primary"
//                 sx={{ margin: 0 }}
//                 gutterBottom>
//                   Hi {currentUser.username} 👾
//               </Typography> */}
//             </Box>
//           </Container>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }
