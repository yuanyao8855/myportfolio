import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router basename='/myportfolio'>
        <App />
    </Router>,
    document.getElementById('root')
);
