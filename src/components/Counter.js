import React from 'react'
import {increase, decrease } from "../redux/counter/counterAction"
import { connect } from 'react-redux'
// import { Connect } from 'react-redux/es/exports'

const Counter = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Counter : {props.counter}</h1>
      <button onClick={props.increase}>+</button>
      <button onClick={props.decrease}>-</button>
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
