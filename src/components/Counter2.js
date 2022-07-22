import React from 'react'
import {increase, decrease } from "../redux/counter/counterAction"
import { useSelector, useDispatch } from 'react-redux'


const Counter = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter : {state.counter}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  )
}


export default Counter
