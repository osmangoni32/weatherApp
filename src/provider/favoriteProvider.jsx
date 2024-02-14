import React from "react";
import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const addToFavorites = (location, latitude, longitude) => {
    setFavorites([
      ...favorites,
      {
        location: location,
        latitude: latitude,
        longitude: longitude,
      },
    ]);
  };
  const removeFavorites = (location) => {
    const restFavorites = favorites.filter((fav) => fav.location !== location);
    setFavorites(restFavorites);
  };
  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
