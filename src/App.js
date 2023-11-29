import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { signInWithPopup } from 'firebase/auth';
import { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";
import Home from './components/Home';
import Input from './components/Input';
import Display from './components/Display';
import Friend from './components/Friend';



export default function App(){
  return(
    <>

    
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/input" element={<Input />} />
                    <Route path="/display" element={<Display />} />
                    <Route path="/friend" element={<Friend />} />
            </Routes>

    </>
  )
}

