import { useRouter } from 'next/router';
import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import LoadingSpinner from '../UI/LoadingSpinner';  

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated && router.route === '/login') {
        router.push('/');
      } else if (!isAuthenticated && router.route !== '/login') {
        router.push('/login');
      }
    }
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingSpinner />; 
  } else if (isAuthenticated || router.route === '/login') {
    return children;
  } else {
    return null;
  }
};

export default PrivateRoute;
