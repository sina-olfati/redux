import './App.css';
import React, { useState, createContext } from 'react';
import Context from './components/Context';


export const Number = createContext()


function App() {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <Number.Provider value={count}>
      Sina
      <br />
      <button onClick={() => {setCount(count + 1)}}>+</button>
      <Context />
      </Number.Provider>
    </div>
  );
}

export default App;
