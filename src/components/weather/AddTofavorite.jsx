import React, { useContext, useState,useEffect } from "react";
import red_heart from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { FavoriteContext } from "../../context";
import { useLocalStorage, useWeather } from "../../hooks";

export default function AddTofavorite() {
  const [isFavorite, setFavorite] = useState(false);
  const { weatherData } = useWeather();
  const { favorites,addToFavorites,removeFavorites } = useContext(FavoriteContext);
  //const { favorites } = useLocalStorage();
  const { location, latitude, longitude } = weatherData;
  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    setFavorite(found);
}, []);

function handleFavorites() {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
        addToFavorites( location,latitude, longitude);
    } else {
        removeFavorites(location);
    }
    setFavorite(!isFavorite);
}
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorites}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? red_heart : heart} alt="" />
        </button>
      </div>
    </div>
  );
}
