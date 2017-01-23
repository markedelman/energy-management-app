import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/display';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.getElementById('app');

ReactDOM.render(<Display />, app);