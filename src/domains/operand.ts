import { Reducer } from "redux";

export type Operator = "Plus" | "Minus" | "Multiplication" | "Division";

export type ActionType =
  | {
      type: "UpdateOperator";
      value: Operator;
    }
  | {
      type: "UpdateFormer";
      value: number;
    }
  | {
      type: "UpdateLater";
      value: number;
    };

type Store = {
  former: number;
  operator: Operator;
  later: number;
};

const initialState: Store = {
  former: 0,
  operator: "Plus",
  later: 0,
};

const reducer: Reducer<Store, ActionType> = (st = initialState, act) => {
  switch (act.type) {
    case "UpdateOperator":
      return { ...st, operator: act.value };

    case "UpdateFormer":
      return { ...st, former: act.value };

    case "UpdateLater":
      return { ...st, later: act.value };

    default:
      return st;
  }
};

export default reducer;
