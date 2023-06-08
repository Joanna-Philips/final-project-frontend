import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { API_URL } from 'utils/urls';
// import equipment from 'reducers/equipment';

const Main = () => {
  // const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    } else {
      navigate('/home');
    }
  }, [accessToken, navigate]);

//   useEffect(() => {
//     const options = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: accessToken
//       }
//     }
//     fetch(API_URL('equipments/all'), options)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('data:', data);
//         dispatch(equipment.actions.setEquipmentData(data.response));
//         console.log('equipment data', data.response)
//       })
//       .catch((error) => console.log(error))
//   }, [accessToken, dispatch]);
};
export default Main;
