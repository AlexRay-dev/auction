import {IAuction} from "../../../types/types";

export interface IAuctionState {
  isLoading: boolean,
  error: string,
  auction: IAuction,
}