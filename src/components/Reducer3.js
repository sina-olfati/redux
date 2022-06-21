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

const Reucer3 = () => {

  const [count, dispatch] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer, 0);

  return (
    <>
        <div style={{ border: "solid 1px" }}>
            <h1>Original</h1>
            {count}
            <br />
            <button onClick={() => {dispatch("increase")}}>Increase</button>
            <button onClick={() => {dispatch("reset")}}>Reset</button>
            <button onClick={() => {dispatch("decrease")}}>Decrease</button>
        </div>
        <div style={{ border: "solid 1px" }}>
            <h1>Clone</h1>
            {count2}
            <br />
            <button onClick={() => {dispatch2("increase")}}>Increase</button>
            <button onClick={() => {dispatch2("reset")}}>Reset</button>
            <button onClick={() => {dispatch2("decrease")}}>Decrease</button>
        </div>
    </>
  );
};

export default Reucer3;
