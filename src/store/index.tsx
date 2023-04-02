import { createStore, Action } from "redux";

export interface CounterState {
  counter: number;
}

interface IncrementAction extends Action {
  type: "Increment";
}

interface DecrementAction extends Action {
  type: "Decrement";
}

export type CounterAction = IncrementAction | DecrementAction;

const initialState: CounterState = {
  counter: 0,
};

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  if (action.type === "Increment") {
    return { counter: state.counter + 1 };
  } else if (action.type === "Decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
