import axios from "axios";

const API_KEY = "98b50e2066922b734f9024c599418f2f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchCurrentWeather = (city: any) =>
  axios.get(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);

export const fetchForecastWeather = (city: any) =>
  axios.get(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`);
