import React, {useState} from 'react'
import {increase, decrease } from "../redux/counter/counterAction"
import { useSelector, useDispatch } from 'react-redux'


const Number2 = () => {

  const [value, setValue] = useState(1)

    const state = useSelector(state => state)
    const dispatch = useDispatch()

  return (
    <div>
      <h1>Number2 : {state.counterState.counter}</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch(increase(+value))}>+</button>
      <button onClick={() => dispatch(decrease(+value))}>-</button>
    </div>
  )
}


export default Number2