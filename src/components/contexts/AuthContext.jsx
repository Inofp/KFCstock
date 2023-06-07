import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const token = Cookies.get('accessToken');
    console.log('Check 1');
    if (token) {
      console.log('Check 2');
      axios.get('/api/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        console.log('Check 3');
        const user = response.data;
        setUser(user);
        setIsAuthenticated(true);
      }).catch(err => {
        console.error(err);
        setIsAuthenticated(false);
        setUser(null);
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
      });
    }
  }, []);

  const login = async (login, password) => {   
    try {
      const res = await axios.post('/api/login', { login, password });
      const { accessToken, refreshToken, user } = res.data; 
      Cookies.set('accessToken', accessToken);
      Cookies.set('refreshToken', refreshToken);
      setUser(user); 
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };

  const logout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    setIsAuthenticated(false);
    setUser(null); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}> 
      {children}
    </AuthContext.Provider>
  );
};
