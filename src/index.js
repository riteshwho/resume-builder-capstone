import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/store';
import { Provider } from 'react-redux';
import Home from './components/Home';
import './components/Home.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
      <Home />
    </Provider>
);


