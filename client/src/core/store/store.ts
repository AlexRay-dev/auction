import {combineReducers, configureStore} from "@reduxjs/toolkit";
import auctionReducer from "./reducers/auctionSlice/auctionSlice";

const rootReducer = combineReducers({
  auctionReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];