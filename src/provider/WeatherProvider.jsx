import React from "react";
import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

export default function WeatherProvider({ children }) {
  const { weatherData, loading, error } = useWeather();
  //console.log(weatherData);
  return (
    <WeatherContext.Provider value={{weatherData, loading, error}}>
      {children}
    </WeatherContext.Provider>
  );
}
