export enum ActionTypes {
  getRatesBaseInUSD,
  getRatesGlobal,
  getRatesPoland,
}

export interface Rate {
  currency: string;
  conversion: number;
}

export interface RateState {
  rates: Rate[];
  base: string;
  date: string;
}

export type RateActions =
  | {
      type: ActionTypes.getRatesBaseInUSD;
      payload: RateState;
    }
  | {
      type: ActionTypes.getRatesGlobal;
    }
  | {
      type: ActionTypes.getRatesPoland;
    };
