import React, { useCallback } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { ActionType as Act, Operator } from "../domains/operand";
import { Store } from "../store";

const Operand = () => {
  const dispatch = useDispatch<Dispatch<Act>>();
  const former = useSelector((st: Store) => st.operand.former);
  const operator = useSelector((st: Store) => st.operand.operator);
  const later = useSelector((st: Store) => st.operand.later);

  const updateFormer = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: "UpdateFormer",
        value: +e.target.value ? +e.target.value : former,
      }),
    [dispatch, former]
  );
  const updateOperator = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch({ type: "UpdateOperator", value: e.target.value as Operator });
    },
    [dispatch]
  );
  const updateLater = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: "UpdateLater",
        value: +e.target.value ? +e.target.value : later,
      }),
    [dispatch, later]
  );
  const result = useCallback(() => {
    switch (operator) {
      case "Plus":
        return former + later;
      case "Minus":
        return former - later;
      case "Multiplication":
        return former * later;
      case "Division":
        return former / later;
    }
  }, [former, operator, later]);

  return (
    <React.Fragment>
      <input value={former} onChange={updateFormer} />
      <select value={operator} onChange={updateOperator}>
        <option value="Plus">+</option>
        <option value="Minus">-</option>
        <option value="Multiplication">*</option>
        <option value="Division">/</option>
      </select>
      <input value={later} onChange={updateLater} />
      <div>{result()}</div>
    </React.Fragment>
  );
};

export default Operand;
