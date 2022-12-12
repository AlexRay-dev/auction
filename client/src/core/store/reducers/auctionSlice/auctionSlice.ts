import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";
import {IAuction} from "../../../types/types";
import {IAuctionState} from "./interface";

const initialState: IAuctionState = {
  isLoading: false,
  error: '',
  auction: {
    _id: '',
    name: '',
    startedAt: 0,
    participators: [],
  }
};

const auctionSlice = createSlice({
  name: "auction",
  initialState,
  reducers: {
    auctionFetching(state) {
      state.isLoading = true;
    },
    auctionFetchingSuccess(state, action: PayloadAction<IAuction>) {
      state.isLoading = false;
      state.auction = action.payload;
    },
    auctionFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const {
  auctionFetchingError,
  auctionFetchingSuccess,
  auctionFetching
} = auctionSlice.actions;
export const selectAuction = (state: RootState) => state.auctionReducer;
export default auctionSlice.reducer;