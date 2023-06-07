import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import user from 'reducers/user';
import { HomeScreen } from 'screens/homeScreen';
import { ShopScreen } from 'screens/shopScreen';
import { AdventureBoardScreen } from 'screens/AdventureBoardScreen';
import { TopBar } from './TopBar';

const Main = () => {
  // const thoughtItems = useSelector((store) => store.thoughts.items);
  // const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  // const username = useSelector((store) => store.user.username);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: accessToken
    //   }
    // }
    // fetch(API_URL("thoughts"), options)
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.success) {
    //             dispatch(thoughts.actions.setError(null));
    //             dispatch(thoughts.actions.setItems(data.response));
    //         } else {
    //             dispatch(thoughts.actions.setError(response));
    //             dispatch(thoughts.actions.setItems([]));
    //         }
    //     });
  });

  return (
    <>
      <TopBar />
      <HomeScreen />
      <ShopScreen />
      <AdventureBoardScreen />
    </>
  );
};

export default Main;
