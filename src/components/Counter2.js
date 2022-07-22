import React from 'react'
import {increase2, decrease2 } from "../redux/counter2/counter2Action"
import { useSelector, useDispatch } from 'react-redux'


const Counter2 = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter2 : {state.counter2State.counter2}</h1>
      <button onClick={() => dispatch(increase2())}>+</button>
      <button onClick={() => dispatch(decrease2())}>-</button>
    </div>
  )
}


export default Counter2
