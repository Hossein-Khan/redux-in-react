import React from "react";

import styles from "./Counter.module.css";

type CounterProps = {};

const Counter = function (props: CounterProps): JSX.Element {
  const toggleCounterHandler = () => {};

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>-- COUNTER VALUE --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
