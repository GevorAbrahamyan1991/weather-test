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
    <div className="flex gap-x-2">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 rounded-lg"
      />
      <button
        onClick={handleSearch}
        className="bg-black py-2 rounded-lg px-4 text-white"
      >
        Search City
      </button>
    </div>
  );
};

export default SearchBar;
