import {
  GET_RATES,
  GET_RATE,
  RateActionTypes,
  FETCH_RATES,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_LOADING,
  FETCH_PREVIOUS_DAY_RATES,
} from "../types/Actions";
import { Rate } from "./../types/Rate";

export interface RateState {
  list: Rate[];
  previousDayList: Rate[];
  fetchLoading: boolean;
  fetchSuccess: boolean;
}

const rateReducerDefaultState: RateState = {
  list: [],
  previousDayList: [],
  fetchLoading: false,
  fetchSuccess: false,
};

const rateReducer = (
  state = rateReducerDefaultState,
  action: RateActionTypes
) => {
  switch (action.type) {
    case GET_RATES:
      return {
        ...state,
        list: action.rates,
      };
    case FETCH_RATES:
      return {
        ...state,
        list: action.rates,
      };
    case GET_RATE:
      return {
        ...state,
        list: action.rate,
      };
    case FETCH_RATES_SUCCESS:
      return {
        ...state,
        fetchSuccess: action.isSuccess,
        fetchLoading: false,
      };
    case FETCH_RATES_LOADING:
      return {
        ...state,
        fetchSuccess: false,
        fetchLoading: action.isLoading,
      };
    case FETCH_PREVIOUS_DAY_RATES:
      return {
        ...state,
        previousDayList: action.rates,
      };

    default:
      return state;
  }
};

export { rateReducer };
