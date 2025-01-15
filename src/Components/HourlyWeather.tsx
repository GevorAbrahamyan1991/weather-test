import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Container from "./UI/Container";

const HourlyWeather: React.FC = () => {
  const { forecast, current } = useSelector(
    (state: RootState) => state.weather
  );
  console.log(forecast);
  if (!forecast) return <p>Loading...</p>;

  const currentDayHours = forecast.list.slice(0, 8);

  const content = (
    <div className="">
      <h2 className="font-bold text-2xl ">Hourly Weather in {current.name}</h2>
      <div className="flex">
        {currentDayHours.map((hour: any, index: number) => (
          <div key={index}>
            <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
            <p>Temperature: {hour.main.temp}°</p>
            <p>Condition: {hour.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return <Container content={content} />;
};

export default HourlyWeather;
