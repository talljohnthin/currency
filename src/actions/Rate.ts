import { Rate } from "./../types/Rate";
import { GET_RATES, GET_RATE, FETCH_RATES, AppActions } from "../types/Actions";
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";

export const fetchRates = (rates: Rate[]): AppActions => ({
  type: FETCH_RATES,
  rates,
});

export const getRates = (rates: Rate[]): AppActions => ({
  type: GET_RATES,
  rates,
});

export const getRate = (rate: Rate[]): AppActions => ({
  type: GET_RATE,
  rate,
});

export const startfetchRates = () => {
  return async (dispatch: Dispatch<AppActions>) => {
    const data = await GetRates<Rate[]>(
      "https://api.exchangeratesapi.io/latest?base=USD"
    );
    const rates = Object.entries(data);
    const ratesArray: Rate[] = [];
    rates.map((e) =>
      ratesArray.push({ currency: e[0], conversion: Number(e[1]) })
    );
    localStorage.setItem("Rates", JSON.stringify(ratesArray));
    dispatch(fetchRates(ratesArray));
  };
};

export const startGetRates = () => {
  return (dispatch: Dispatch<AppActions>) => {
    const rates = JSON.parse(localStorage.getItem("Rates") || "{}");
    dispatch(getRates(rates));
  };
};

export const startGetRate = (currency: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    const rates = JSON.parse(localStorage.getItem("Rates") || "{}");
    const filteredCurrency = rates.filter((e: Rate) => e.currency === "PLN");
    dispatch(getRate(filteredCurrency));
  };
};

export async function GetRates<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body.rates;
}
