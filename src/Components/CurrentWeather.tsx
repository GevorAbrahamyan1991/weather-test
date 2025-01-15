import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const CurrentWeather: React.FC = () => {
  const { current, unit } = useSelector((state: RootState) => state.weather);

  if (!current) return <p>Loading...</p>;

  return (
    <div>
      <h2>Current Weather in {current.name}</h2>
      <p>
        Temperature: {current.main.temp}° {unit === "metric" ? "C" : "F"}
      </p>
      <p>Condition: {current.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
        alt={current.weather[0].description}
      />
    </div>
  );
};

export default CurrentWeather;
