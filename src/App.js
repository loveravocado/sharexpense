import Header from './components/Header';
import Footer from './components/Footer';
import { signInWithPopup } from 'firebase/auth';
import { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";
import Home from './components/Home';
import Input from './components/Input/Input';
import Display from './components/Display/Display';
import Friend from './components/Friend';
import InputSelect from './components/Input/InputSelect';
import InputIncome from './components/Input/InputIncome';
import InputIncomeDone from './components/Input/InputIncomeDone';
import InputExpenseDone from './components/Input/InputExpenseDone';
import InputExpense from './components/Input/InputExpense';
import InputSaving from './components/Input/InputSaving';
import InputSavingDone from './components/Input/InputSavingDone';
import DisplayExpense from './components/Display/DisplayTotal';



export default function App(){
  return(
    <>

    
             <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/input" element={<InputSelect />} />
                     <Route path="/input_income" element={<InputIncome />} />
                     <Route path="/input_incomedone" element={<InputIncomeDone />} />
                     <Route path="/input_expense" element={<InputExpense/>} />
                     <Route path="/input_expensedone" element={<InputExpenseDone />} />
                     <Route path="/input_saving" element={<InputSaving />} />
                     <Route path="/input_savingdone" element={<InputSavingDone />} />
                     <Route path="/display" element={<Display />} />
                     <Route path="/displayex" element={<DisplayExpense />} />
                     <Route path="/friend" element={<Friend />} />
             </Routes>

    </>
  )
}

