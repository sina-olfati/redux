import './App.css';
import React from 'react';
import Counter from './components/Counter.js';
import Counter2 from './components/Counter2.js';
import Number2 from "./components/Number2"
import Users from './components/Users';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Counter2 />
        <Number2 />
        <Users />
      </div>
    </Provider>
  );
}

export default App;
