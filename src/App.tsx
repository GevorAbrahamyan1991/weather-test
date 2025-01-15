// packages
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./Pages/Home.tsx";
import { useDispatch } from "react-redux";
import { getWeather, getForecast } from "./redux/slices/weatherSlice.tsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(getWeather({ lat: latitude, lon: longitude }));
          dispatch(getForecast({ lat: latitude, lon: longitude }));
        },
        (error) => {
          console.error("Geolocation failed:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
