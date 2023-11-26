import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from './components/Home';
import Input from './components/Input';
import Display from './components/Display';
import Friend from './components/Friend';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Router>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/input" element={<Input />} />
                    <Route path="/display" element={<Display />} />
                    <Route path="/friend" element={<Friend />} />
            </Routes>
        </Router>

);

