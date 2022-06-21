import React, { useReducer } from "react";

const initialState = {
    num1: 0,
    num2: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return {...state, num1: state.num1 + action.amount};
    case "decrease":
        return {...state, num1: state.num1 - action.amount};
    case "increase2":
      return {...state, num2: state.num2 + action.amount};
    case "decrease2":
        return {...state, num2: state.num2 - action.amount};
    case "reset":
      return initialState;
    default:
      return state;
}}

const Reucer2 = () => {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ border: "solid 1px" }}>
        <div>
            <h1>Reducer 1</h1>
            {count.num1}
            <br />
            <button onClick={() => {dispatch({type: "increase", amount: 5})}}>Increase</button>
            <button onClick={() => {dispatch({type: "reset"})}}>Reset</button>
            <button onClick={() => {dispatch({type: "decrease", amount: 2})}}>Decrease</button>
        </div>
        <div>
            <h1>Reducer 2</h1>
            {count.num2}
            <br />
            <button onClick={() => {dispatch({type: "increase2", amount: 3})}}>Increase</button>
            <button onClick={() => {dispatch({type: "reset"})}}>Reset</button>
            <button onClick={() => {dispatch({type: "decrease2", amount: 3})}}>Decrease</button>
        </div>
    </div>
  );
};

export default Reucer2;
