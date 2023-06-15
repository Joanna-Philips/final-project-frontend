import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import equipment from 'reducers/equipment';
import avatar from 'reducers/avatar';
import loader from 'reducers/loader';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, createTheme, ThemeProvider, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { LogoIcon, OptionsIconImg } from 'components/home/HomeScreenCSS';
import shopIMG from '../../assets/images/UI/shopIMG.png';
import homeIMG from '../../assets/images/UI/home.png';
import questIMG from '../../assets/images/UI/questmap.png';
import barIMG from '../../assets/images/UI/GUI.png';
import coinIMG from '../../assets/images/UI/coin.png';
import LogoIconIMG from '../../assets/images/UI/runestone.png';
import optionsIcon from '../../assets/images/UI/cog.png'

const pages = [
  { name: 'Homestead', image: homeIMG, navLink: '/home' },
  { name: 'Quests', image: questIMG, navLink: '/quests' },
  { name: 'Shop', image: shopIMG, navLink: '/shop' }
];

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
      main: '#733214',
      darker: '#5c270f'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    }
  }
});

export const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((store) => store.user);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogoutButtonClick = () => {
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setUserWeapons(null));
    dispatch(user.actions.setUserCoins(null));
    dispatch(user.actions.setUserAvatar(null));
    dispatch(user.actions.setError(null));
    dispatch(equipment.actions.setEquipmentData([]));
    dispatch(avatar.actions.setAvatarData([]));
    dispatch(loader.actions.setLoading(false));
    localStorage.setItem('user', null);
    navigate('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          backgroundImage: `url(${barIMG})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '150% 101%',
          backgroundPosition: '50% 46%',
          width: '100vw'
        }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LogoIcon src={LogoIconIMG} alt="logo icon" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                fontSize: '1.5rem',
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}>
              WAYWARD WILDS
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Tooltip title="Travel menu">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit">
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiMenu-paper': {
                    backgroundColor: '#edd99b',
                    borderStyle: 'outset',
                    borderColor: '#3b241c'
                  }
                }}>
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography textAlign="center">
                        <NavLink to={page.navLink}>
                          <img
                            src={page.image}
                            alt={page.name}
                            style={{
                              marginRight: '8px',
                              height: '20px',
                              width: '20px',
                              marginTop: '5px'
                            }} />
                        </NavLink>
                        <NavLink to={page.navLink}>{page.name}</NavLink>
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'flex' }}>
                  <NavLink to={page.navLink}>
                    <img
                      src={page.image}
                      alt={page.name}
                      style={{ marginRight: '0.8em', width: '35px', display: 'flex' }} />
                  </NavLink>
                  <NavLink to={page.navLink}>{page.name}</NavLink>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <img src={coinIMG} alt="user coins" />
              {currentUser.userCoins}
              <Tooltip title="Option menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft: 3 }}>
                  <Avatar sx={{ backgroundColor: 'transparent' }}>
                    {/* <SettingsOutlinedIcon /> */}
                    <OptionsIconImg src={optionsIcon} alt="options icon" />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  mt: '45px',
                  '& .MuiMenu-paper': {
                    backgroundColor: '#edd99b',
                    borderStyle: 'outset',
                    borderColor: '#3b241c'
                  }
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                <MenuItem>
                  <Button sx={{ fontSize: '1.5rem', fontWeight: '700', color: 'black' }}>
                    {currentUser.username}
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    onClick={onLogoutButtonClick}
                    sx={{ fontSize: '1.5rem', fontWeight: '700', color: 'black' }}>
                    Logout
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
