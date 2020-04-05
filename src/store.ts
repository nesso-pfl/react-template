import { combineReducers, createStore } from "redux";
import operandReducer from "./domains/operand";

export type Store = {
  operand: ReturnType<typeof operandReducer>;
};

export default createStore(
  combineReducers({
    operand: operandReducer,
  })
);
