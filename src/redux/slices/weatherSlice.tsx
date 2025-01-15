import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "98b50e2066922b734f9024c599418f2f";

interface WeatherState {
  current: any;
  forecast: any;
  unit: "metric" | "imperial";
  error: string | null;
}

const initialState: WeatherState = {
  current: null,
  forecast: null,
  unit: "metric",
  error: null,
};

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (
    { city, lat, lon }: { city?: string; lat?: number; lon?: number },
    { rejectWithValue }
  ) => {
    try {
      let endpoint = "";
      if (city) {
        endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      } else if (lat !== undefined && lon !== undefined) {
        endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      } else {
        throw new Error("City or coordinates are required.");
      }
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to fetch weather data."
      );
    }
  }
);

export const getForecast = createAsyncThunk(
  "weather/getForecast",
  async (
    { city, lat, lon }: { city?: string; lat?: number; lon?: number },
    { rejectWithValue }
  ) => {
    try {
      let endpoint = "";
      if (city) {
        endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
      } else if (lat !== undefined && lon !== undefined) {
        endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      } else {
        throw new Error("City or coordinates are required.");
      }
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Unable to fetch forecast data."
      );
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    toggleUnit: (state) => {
      state.unit = state.unit === "metric" ? "imperial" : "metric";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.fulfilled, (state, action) => {
        state.current = action.payload;
        state.error = null;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(getForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
        state.error = null;
      })
      .addCase(getForecast.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { toggleUnit } = weatherSlice.actions;
export default weatherSlice.reducer;
