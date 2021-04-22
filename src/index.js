import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import LocalizationProvider from './localization/LocalizationProvider';

ReactDOM.render(
  <Provider store={store} >
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  </Provider>,
document.getElementById('root')
);
