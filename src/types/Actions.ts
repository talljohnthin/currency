import { Rate } from "./Rate";

export const FETCH_RATES = "FETCH_RATES";
export const FETCH_PREVIOUS_DAY_RATES = "FETCH_PREVIOUS_DAY_RATES";
export const FETCH_RATES_LOADING = "FETCH_RATES_LOADING";
export const FETCH_RATES_SUCCESS = "FETCH_RATES_SUCCESS";
export const GET_RATES = "GET_RATES";
export const GET_RATE = "GET_RATE";

export interface getRatesAction {
  type: typeof GET_RATES;
  rates: Rate[];
}

export interface getRateAction {
  type: typeof GET_RATE;
  rate: Rate[];
}

export interface fetchRateAction {
  type: typeof FETCH_RATES;
  rates: Rate[];
}

export interface fetchPreviousDayRateAction {
  type: typeof FETCH_PREVIOUS_DAY_RATES;
  rates: Rate[];
}

export interface fetchRateLoadingAction {
  type: typeof FETCH_RATES_LOADING;
  isLoading: boolean;
}

export interface fetchRateSuccessAction {
  type: typeof FETCH_RATES_SUCCESS;
  isSuccess: boolean;
}

export type RateActionTypes =
  | getRatesAction
  | getRateAction
  | fetchRateAction
  | fetchRateLoadingAction
  | fetchRateSuccessAction
  | fetchPreviousDayRateAction;

export type AppActions = RateActionTypes;
