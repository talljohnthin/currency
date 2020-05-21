import { ActionTypes, RateState, RateActions, Rate } from "./ratesTypes";
import { Dispatch } from "redux";

export async function GetRates<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

export const fetchRates = () => {
  return async (dispatch: Dispatch) => {
    const data = await GetRates<RateState>(
      "https://api.exchangeratesapi.io/latest?base=USD"
    );
    const rates = Object.entries(data.rates);
    const ratesArray: Rate[] = [];
    rates.map((e) =>
      ratesArray.push({ currency: e[0], conversion: Number(e[1]) })
    );
    const newData = {
      rates: ratesArray,
      base: data.base,
      date: data.date,
    };

    localStorage.setItem("Rates", JSON.stringify(newData));
    dispatch<RateActions>({
      type: ActionTypes.getRatesBaseInUSD,
      payload: newData,
    });
  };
};

export const getRatesGlobal = (): RateActions => {
  return {
    type: ActionTypes.getRatesGlobal,
  };
};

export const getRatesPoland = (): RateActions => {
  return {
    type: ActionTypes.getRatesPoland,
  };
};
