import React, { useReducer } from "react";


const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      if (state > 0) {
        return state - 1;
      }
    case "reset":
      return 0;
    default:
      return state;
}}

const Reucer = () => {

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ border: "solid 1px" }}>
        {count}
        <br />
        <button onClick={() => {dispatch("increase")}}>Increase</button>
        <button onClick={() => {dispatch("reset")}}>Reset</button>
        <button onClick={() => {dispatch("decrease")}}>Decrease</button>
    </div>
  );
};

export default Reucer;
