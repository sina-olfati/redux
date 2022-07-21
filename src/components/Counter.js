import React from 'react'
import {increase, decrease } from "../redux/counter/counterAction"
import { connect } from 'react-redux'
// import { Connect } from 'react-redux/es/exports'

const Counter = ({counter, increase, decrease}) => {
  return (
    <div>
      <h1>Counter - {counter}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
