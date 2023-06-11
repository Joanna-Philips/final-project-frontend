import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchEquipmentData } from 'reducers/equipment';
import { fetchUserProfile } from 'reducers/user';
import { fetchAdventureData } from 'reducers/adventure';
import { fetchAvatarData } from 'reducers/avatar';

export const AuthorizeAndLoad = (navigate, dispatch) => {
  const accessToken = useSelector((store) => store.user.accessToken);
  useEffect(() => {
    if (window.location.pathname !== '/login') {
      if (!accessToken) {
        navigate('/login');
      } else {
        dispatch(fetchEquipmentData(accessToken));
        dispatch(fetchAvatarData(accessToken));
        dispatch(fetchUserProfile(accessToken));
        dispatch(fetchAdventureData(accessToken));
      }
    }
  }, [accessToken, dispatch, navigate]);
};