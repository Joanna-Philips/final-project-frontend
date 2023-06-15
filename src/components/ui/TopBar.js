import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import equipment from 'reducers/equipment';
import avatar from 'reducers/avatar';
import loader from 'reducers/loader';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import shopIMG from '../../assets/images/UI/shopIMG.png';
import homeIMG from '../../assets/images/UI/home.png';
import questIMG from '../../assets/images/UI/questmap.png';
import barIMG from '../../assets/images/UI/GUI.png';
import coinIMG from '../../assets/images/UI/coin.png';

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
          backgroundPosition: '50% 46%'
        }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
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
                              width: '20px'
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
                      style={{ marginRight: '0.8em', width: '35px' }} />
                  </NavLink>
                  <NavLink to={page.navLink}>{page.name}</NavLink>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <img src={coinIMG} alt="user coins" />
              {currentUser.userCoins}
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft: 3 }}>
                  <Avatar sx={{ backgroundColor: 'transparent' }}>
                    <SettingsOutlinedIcon />
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
