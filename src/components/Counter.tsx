import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CounterAction, CounterState } from "../store/index";

import styles from "./Counter.module.css";

type CounterProps = {};

const Counter: React.FunctionComponent<CounterProps> = (props) => {
  const Counter = useSelector((state: CounterState) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch<CounterAction>({ type: "Increment" });
  };

  const decrementHandler = () => {
    dispatch<CounterAction>({ type: "Decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>{Counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
