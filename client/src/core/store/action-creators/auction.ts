import axios from "axios";
import {auctionFetching, auctionFetchingError, auctionFetchingSuccess} from "../reducers/auctionSlice/auctionSlice";
import {AppDispatch} from "../store";

export const fetchAuction = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(auctionFetching());
    const {data} = await axios.get(`http://localhost:4000/auctions/${id}`);
    dispatch(auctionFetchingSuccess(data));
  } catch (error: any) {
    dispatch(auctionFetchingError(error));
  }
};