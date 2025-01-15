import React from "react";
import CurrentWeather from "../Components/CurrentWeather.tsx";
import ForecastWeather from "../Components/ForecastWeather.tsx";
import HourlyWeather from "../Components/HourlyWeather.tsx";
import SearchCity from "../Components/SearchCity.tsx";
import TemperatureToggle from "../Components/TemperatureToggle.tsx";

const HomePage: React.FC = () => {
  return (
    <>
      <SearchCity />
      <TemperatureToggle />
      <CurrentWeather />
      <HourlyWeather />
      <ForecastWeather />
    </>
  );
};

export default HomePage;
