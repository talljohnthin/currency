import { Rate } from "./../types/Rate";
import {
  GET_RATES,
  GET_RATE,
  FETCH_RATES,
  AppActions,
  FETCH_RATES_LOADING,
  FETCH_RATES_SUCCESS,
  FETCH_PREVIOUS_DAY_RATES,
} from "../types/Actions";
import { Dispatch } from "redux";

export const fetchRates = (rates: Rate[]): AppActions => ({
  type: FETCH_RATES,
  rates,
});

export const fetchRateLoading = (isLoading: boolean): AppActions => ({
  type: FETCH_RATES_LOADING,
  isLoading,
});

export const fetchRateSuccess = (isSuccess: boolean): AppActions => ({
  type: FETCH_RATES_SUCCESS,
  isSuccess,
});

export const getRates = (rates: Rate[]): AppActions => ({
  type: GET_RATES,
  rates,
});

export const getRate = (rate: Rate[]): AppActions => ({
  type: GET_RATE,
  rate,
});

export const getPreviousDayRates = (rates: Rate[]): AppActions => ({
  type: FETCH_PREVIOUS_DAY_RATES,
  rates,
});

export const startfetchRates = () => {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchRateLoading(true));
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
    setTimeout(() => dispatch(fetchRateLoading(false)), 1000);
  };
};

export const startfetchYesterdaysRates = () => {
  return async (dispatch: Dispatch<AppActions>) => {
    let yesterday = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());
    let date = new Date(yesterday.toDateString());
    let dateString = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];

    const data = await GetRates<Rate[]>(
      `https://api.exchangeratesapi.io/${dateString}`
    );
    const rates = Object.entries(data);
    const ratesArray: Rate[] = [];
    rates.map((e) =>
      ratesArray.push({ currency: e[0], conversion: Number(e[1]) })
    );

    localStorage.setItem("PreviousDayRates", JSON.stringify(ratesArray));

    dispatch(getPreviousDayRates(ratesArray));
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
