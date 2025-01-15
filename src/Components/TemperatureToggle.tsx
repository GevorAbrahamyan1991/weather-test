import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleUnit } from "../redux/slices/weatherSlice.tsx";
import { RootState } from "../redux/store";

const TemperatureToggle: React.FC = () => {
  const { unit } = useSelector((state: RootState) => state.weather);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="bg-black py-2 rounded-lg px-4 text-white"
        onClick={() => dispatch(toggleUnit())}
      >
        Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
};

export default TemperatureToggle;
