import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const token = Cookies.get('accessToken');
    if(token) setIsAuthenticated(true);
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
