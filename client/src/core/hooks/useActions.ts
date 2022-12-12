import {useTypedDispatch} from "./redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import ActionCreators from "../store/action-creators";

export const useActions = () => {
  const dispatch = useTypedDispatch();
  return  bindActionCreators(ActionCreators, dispatch);
};
