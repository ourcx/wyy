import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '@/App';
import store from './store';
import 'normalize.css';
import './assets/css/index.less'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
if (!process.env.REACT_APP_baseURL) {
  throw new Error('REACT_APP_baseURL is not defined');
}
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

