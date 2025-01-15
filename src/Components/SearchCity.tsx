import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather, getForecast } from "../redux/slices/weatherSlice.tsx";

const SearchBar: React.FC = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(getWeather({ city }));
      dispatch(getForecast({ city }));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
