import { Rate } from "./Rate";

export const FETCH_RATES = "FETCH_RATES";
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
export type RateActionTypes = getRatesAction | getRateAction | fetchRateAction;

export type AppActions = RateActionTypes;
