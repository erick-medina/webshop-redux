import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import configureStore from './redux/configureStore';
import {Provider} from 'react-redux'; // to provide Redux store data to our React components

// const store = configureStore();

ReactDOM.render(
    // <Provider store={store}>
        <App />,
    // </Provider>,
  document.getElementById('root')
);
