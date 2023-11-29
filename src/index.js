import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from "react-router-dom";
import Home from './components/Home';
import Input from './components/Input';
import Display from './components/Display';
import Friend from './components/Friend';
import { Provider } from 'react-redux';
import store from "./components/store/reindex";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
);

