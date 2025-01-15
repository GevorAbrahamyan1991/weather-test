import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Container from "./UI/Container";

const HourlyWeather: React.FC = () => {
  const { forecast, current, unit } = useSelector(
    (state: RootState) => state.weather
  );
  if (!forecast) return <p>Loading...</p>;

  const currentDayHours = forecast.list.slice(0, 8);

  const content = (
    <div className="">
      <div className="flex flex-col justify-center">
        {currentDayHours.map((hour: any, index: number) => (
          <div key={index} className="flex gap-1">
            <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
            <p className="font-normal ">
              {unit === "metric"
                ? `${current.main.temp}° C`
                : `${(current.main.temp * 1.8 + 32).toFixed(2)}° F`}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
              className="w-8 h-8"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return <Container content={content} />;
};

export default HourlyWeather;
