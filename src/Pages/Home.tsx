import React from "react";
import CurrentWeather from "../Components/CurrentWeather.tsx";
import ForecastWeather from "../Components/ForecastWeather.tsx";
import HourlyWeather from "../Components/HourlyWeather.tsx";
import SearchCity from "../Components/SearchCity.tsx";
import TemperatureToggle from "../Components/TemperatureToggle.tsx";
import Container from "../Components/UI/Container.js";

const HomePage = () => {
  const content = (
    <div className="mt-8">
      <div className="flex">
        <div className="w-1/2 flex justify-center items-center">
          <CurrentWeather />
        </div>
        <div className="w-1/2">
          <HourlyWeather />
        </div>
      </div>
    </div>
  );
  const contentDays = (
    <>
      <ForecastWeather />
    </>
  );
  return (
    <>
      <div className="w-full py-4 bg-blue-400">
        <div className="max-w-screen-lg mx-auto flex justify-between">
          <SearchCity />
          <TemperatureToggle />
        </div>
      </div>
      <Container customStyle="max-w-screen-sm" content={content} />
      <Container customStyle="" content={contentDays} />
    </>
  );
};

export default HomePage;
