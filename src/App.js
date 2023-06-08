import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from 'components/NotFound';
import Main from 'components/Main';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from 'reducers/user';
import equipment from 'reducers/equipment';
import { Provider } from 'react-redux';
import { Footer } from 'components/Footer';
import { HomeScreen } from 'screens/HomeScreen';
import { Layout } from 'components/Layout';
import { AdventureBoardScreen } from 'screens/AdventureBoardScreen';
import { ShopScreen } from './screens/ShopScreen';
import { LoginScreen } from './screens/LoginScreen';

export const App = () => {
  const reducer = combineReducers({
    user: user.reducer,
    equipment: equipment.reducer
  });
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />}> </Route>
          <Route path="/" element={<Main />}> </Route>
          <Route path="/home" element={<Layout><HomeScreen /></Layout>}> </Route>
          <Route path="/shop" element={<Layout><ShopScreen /></Layout>}> </Route>
          <Route
            path="/quests"
            element={<Layout><AdventureBoardScreen /></Layout>} />
          {/* <Route path="/game"
           element={<Layout><AdventureGameScreen /></Layout>}> </Route> */}
          <Route path="*" element={<NotFound />}> </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>

  );
}

/// npm i react-redux
/// npm i @reduxjs/toolkit
/// npm i react-router-dom
/// npm install @mui/material @emotion/react @emotion/styled
/// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
