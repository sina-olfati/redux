import React, {useContext} from 'react'
import {Number} from '../App.js'

const Context = () => {

    const count = useContext(Number)
    
    
    return (
        <div style={{border: "solid 1px"}}>
      Context
      <br/>
      {count}
    </div>
  )
}

export default Context
