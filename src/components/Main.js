import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import user from 'reducers/user';

// import { HomeScreen } from 'screens/homeScreen';
// import { ShopScreen } from 'screens/shopScreen';
// import { TopBar } from './TopBar';

import { AdventureBoardScreen } from 'screens/AdventureBoardScreen';

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    } else {
      navigate('/home');
    }
  }, [accessToken, navigate]);

  return (
    <AdventureBoardScreen />
  );
};
export default Main;
