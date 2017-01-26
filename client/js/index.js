import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
// import Display from './components/display';
// import UserInput from './components/userinput'
import Layout from './components/layout'

var store = createStore(allReducers, applyMiddleware(thunk));

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>, app);