import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthContext); 

  useEffect(() => {
    console.log('User updated:', user);

    const loadFavorites = async () => {
      if (user) {
        const response = await fetch(`/api/favorites?userId=${user.id}`);
        const data = await response.json();
        setFavorites(data.favorites);
      }
    };

    if (user) {
      loadFavorites();
    }
  }, [user]);

  const addToFavorites = async (productId) => {
    console.log('Add to favorites:', productId, user);
    setFavorites((prevFavorites) => [...(prevFavorites || []), productId]);

    const response = await fetch('/api/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id, productId }),
    });

    if (!response.ok) {
      throw new Error('Failed to add to favorites');
    }
  };

  
  const removeFromFavorites = async (productId) => {
    console.log('Remove from favorites:', productId, user);
    setFavorites((prevFavorites) => prevFavorites.filter(id => id !== productId));

    const response = await fetch('/api/favorites', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id, productId }),
    });

    if (!response.ok) {
      throw new Error('Failed to remove from favorites');
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};
