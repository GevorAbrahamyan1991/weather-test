import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const CurrentWeather: React.FC = () => {
  const { current, unit } = useSelector((state: RootState) => state.weather);
  console.log("M", current);
  if (!current) return <p>Loading...</p>;

  return (
    <div className=" flex flex-col space-y-3">
      <h2 className="text-center text-3xl font-serif"> {current.name}</h2>
      <p className="font-normal text-6xl">
        {unit === "metric"
          ? `${current.main.temp}° C`
          : `${(current.main.temp * 1.8 + 32).toFixed(2)}° F`}
      </p>

      <p className="text-center text-3xl font-serif capitalize">
        {current.weather[0].description}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
        alt={current.weather[0].description}
        className=""
      />
    </div>
  );
};

export default CurrentWeather;
