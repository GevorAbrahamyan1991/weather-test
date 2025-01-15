import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.tsx";

const ForecastWeather: React.FC = () => {
  const { forecast } = useSelector((state: RootState) => state.weather);
  const [selectedDay, setSelectedDay] = useState(0);

  if (!forecast) return <p>Loading.. .</p>;

  const days = forecast.list.filter(
    (item: any, index: number) => index % 8 === 0
  );

  return (
    <div>
      <h2>5-Day Forecast</h2>
      <div>
        {days.map((day: any, index: number) => (
          <button
            key={index}
            onClick={() => setSelectedDay(index)}
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
        <p>Condition: {days[selectedDay].weather[0].description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${days[selectedDay].weather[0].icon}@2x.png`}
          alt={days[selectedDay].weather[0].description}
        />
      </div>
    </div>
  );
};

export default ForecastWeather;
