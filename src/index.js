import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import App from './App';
import modStore from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={modStore.store}>
      <PersistGate loading={null} persistor={modStore.persistor}>
        <App />
      </PersistGate> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

console.log('Привіт, світ! Життя химерне!');
