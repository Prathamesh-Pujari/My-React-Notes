import React from "react";
import { useReducer, useState } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error(`Unhandled Action ${action.type}`);
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h2>Count is : {state.count}</h2>
      </div>
      <div>
        <button type="button" onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
      </div>
      <div>
        <button type="button" onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
      <div>
        <button type="button" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
