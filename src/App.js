import './App.css';
import React, { useState, createContext } from 'react';
import Context from './components/Context';


export const Number = createContext()
export const Name = createContext()


function App() {
  const [count, setCount] = useState(0);
  const name = "Sinaaaaaa"

  return (
    <div className="App">
      <Number.Provider value={count}>
      <Name.Provider value={name}>
      Sina
      <br />
      <button onClick={() => {setCount(count + 1)}}>+</button>
      <Context />
      </Name.Provider>
      </Number.Provider>
    </div>
  );
}

export default App;
