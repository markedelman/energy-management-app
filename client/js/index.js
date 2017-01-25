import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import Display from './components/display';
// import UserInput from './components/userinput'
import Layout from './components/layout'

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.getElementById('app');

ReactDOM.render(<Layout />, app);