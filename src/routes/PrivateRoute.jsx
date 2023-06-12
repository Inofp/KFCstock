import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/authSlice';
import { fetchCartItems } from '../redux/cartSlice';
import { fetchFavorites } from '../redux/favoritesSlice'

const PrivateRoute = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
      const verifyToken = async () => {
        const accessToken = Cookies.get('accessToken');
        if (!accessToken) {
          if (Router.pathname !== '/login') {
            Router.replace('/login');
          }
          setVerified(true);
        } else {
          if (Router.pathname === '/login') {
            Router.replace('/');
          }
          try {
            const response = await axios.post('/api/validate', {}, {
              headers: { Authorization: `Bearer ${accessToken}` }
            });
            if (response.status === 200) {
              setVerified(true);
              const user = await dispatch(fetchUser()).unwrap();  
              dispatch(fetchCartItems(user.id));
              dispatch(fetchFavorites({userId: user.id}));
            } else {
              setVerified(false);
            }
          } catch (e) {

            if (e.response && e.response.data.message === 'jwt expired') {
              const refreshToken = Cookies.get('refreshToken');
              if (!refreshToken) {
                setVerified(false);
                return;
              }
              try {
                const response = await axios.post('/api/refresh_token', { refreshToken });
                if (response.status === 200) {
                  Cookies.set('accessToken', response.data.accessToken);
                  return verifyToken(); // повторяем проверку с новым токеном
                } else {
                  setVerified(false);
                }
              } catch (refreshError) {
                setVerified(false);
              }
            } else {
              setVerified(false);
            }
          }
        }
      };
      verifyToken();
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return <LoadingSpinner />;
    }
  }
};

export default PrivateRoute;
