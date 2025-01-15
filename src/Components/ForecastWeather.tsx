import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.tsx";

const ForecastWeather: React.FC = () => {
  const { forecast, unit } = useSelector((state: RootState) => state.weather);
  const [selectedDay, setSelectedDay] = useState(0);

  if (!forecast) return <p>Loading.. .</p>;

  const days = forecast.list.filter(
    (item: any, index: number) => index % 8 === 0
  );

  return (
    <div>
      <div className="shadow-lg">
        <div className="grid grid-cols-5">
          {days.map((day: any, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`${
                selectedDay === index ? "bg-slate-500" : "bg-slate-300"
              } py-2 text-center`}
              style={{
                fontWeight: selectedDay === index ? "bold" : "normal",
              }}
            >
              {new Date(day.dt * 1000).toLocaleDateString()}
            </button>
          ))}
        </div>
        <div>
          <h3>
            Weather for{" "}
            {new Date(days[selectedDay].dt * 1000).toLocaleDateString()}
          </h3>
          <p>Temperature: {days[selectedDay].main.temp}°</p>
          <p className="font-normal ">
            {unit === "metric"
              ? `${days[selectedDay].main.temp}° C`
              : `${(days[selectedDay].main.temp * 1.8 + 32).toFixed(2)}° F`}
          </p>

          <p>Condition: {days[selectedDay].weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${days[selectedDay].weather[0].icon}@2x.png`}
            alt={days[selectedDay].weather[0].description}
          />
        </div>
      </div>
    </div>
  );
};

export default ForecastWeather;
