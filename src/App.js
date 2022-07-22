import './App.css';
import React from 'react';
import Counter2 from './components/Counter2.js';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Counter2 />
      </div>
    </Provider>
  );
}

export default App;
