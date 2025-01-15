import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSlice.tsx";

export const createStore = configureStore({
  reducer: { weather: weatherReducer },
});

export type RootState = ReturnType<typeof createStore.getState>;
export type AppDispatch = typeof createStore.dispatch;
