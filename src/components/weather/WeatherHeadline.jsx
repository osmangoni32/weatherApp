import React, { useContext } from "react";
import cloudIcon from "../../assets/cloud.svg";
import hazeIcon from "../../assets/haze.svg";
import pin from "../../assets/pin.svg";
import rainyIcon from "../../assets/rainy.svg";
import sunIcon from "../../assets/sun.svg";
import { WeatherContext } from "../../context";
import { formattedDate } from "../../utils/utila-date";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const { location, time, temperature, climate } = weatherData;
  //const { favorites } = useLocalStorage();
  //console.log(favorites);
  const getIcon = (opt) => {
    switch (opt) {
      case "cloud":
        return cloudIcon;
      case "haze":
        return hazeIcon;
      case "cloud":
        return cloudIcon;
      case "rainy":
        return rainyIcon;

      case "sun":
        return sunIcon;
      default:
        return sunIcon;
    }
  };
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {temperature}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {formattedDate(time, "time", false)}-{" "}
        {formattedDate(time, "date", false)}
      </p>
    </div>
  );
}
