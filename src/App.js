import React from 'react';
import './App.scss';
import Routes from './routes'
import { Provider } from 'react-redux';
import { Store } from './state/createStore';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
