import { Rate } from "./../types/Rate";
import { GET_RATES, GET_RATE, RateActionTypes } from "../types/Actions";

interface RateState {
  list: Array<string | number>;
}

const rateReducerDefaultState: RateState = {
  list: [],
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
    case GET_RATE:
      return {
        ...state,
        list: action.rate,
      };
    default:
      return state;
  }
};

export { rateReducer };
