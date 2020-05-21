import {
  ActionTypes,
  RateState,
  RateActions,
  Rate,
} from "../actions/rates/ratesTypes";

const initialState: RateState = {
  rates: [],
  base: "",
  date: "",
};

const reducer = (state = initialState, action: RateActions) => {
  switch (action.type) {
    case ActionTypes.getRatesBaseInUSD:
      const { rates, base, date } = action.payload;
      return {
        ...state,
        rates,
        base,
        date,
      };
    case ActionTypes.getRatesGlobal:
      return {
        ...state,
        rates: filterGlobalRates(state),
      };
    case ActionTypes.getRatesPoland:
      return {
        ...state,
        rates: filterPolandRates(state),
      };
    default:
      return state;
  }
};

const filterGlobalRates = (state: RateState): Rate[] => {
  if (localStorage.getItem("Rates")) {
    const data: RateState = JSON.parse(localStorage.getItem("Rates") || "{}");
    return data.rates;
  }
  return state.rates;
};

const filterPolandRates = (state: RateState): Rate[] => {
  if (localStorage.getItem("Rates")) {
    const data = JSON.parse(localStorage.getItem("Rates") || "{}");
    return data.rates.filter((e: Rate) => e.currency === "PLN");
  }
  return state.rates;
};

export default reducer;
