import Header from './components/Header';
import Footer from './components/Footer';
import { signInWithPopup } from 'firebase/auth';
import { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from "react-router-dom";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";
import Home from './components/Home/Home';
import Input from './components/Input/Input';
import Display from './components/Display/Display';
import Friend from './components/Friend/Friend';
import InputSelect from './components/Input/InputSelect';
import InputIncome from './components/Input/InputIncome';
import InputIncomeDone from './components/Input/InputIncomeDone';
import InputExpenseDone from './components/Input/InputExpenseDone';
import InputExpense from './components/Input/InputExpense';
import InputSaving from './components/Input/InputSaving';
import InputSavingDone from './components/Input/InputSavingDone';
import DisplayExpense from './components/Display/DisplayTotal';
import { AnimatePresence } from "framer-motion";
import Start from './components/Home/Start';
import Login from './components/Home/Login';
import InputSavingSelect from './components/Input/InputSavingSelect';
import InputSavingItem from './components/Input/InputSavingItem';
import InputSavingItemDone from './components/Input/InputSavingItemDone';
import SavingDetail from './components/Display/SavingDetail';



export default function App(){
  const location = useLocation();
  return(
    <>

    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path='start' element={<Start />} />
              <Route path='login' element={<Login />} />
              <Route path="/input" element={<InputSelect />} />
              <Route path="/input_income" element={<InputIncome />} />
              <Route path="/input_incomedone" element={<InputIncomeDone />} />
              <Route path="/input_expense" element={<InputExpense/>} />
              <Route path="/input_expensedone" element={<InputExpenseDone />} />
              <Route path="/input_saving" element={<InputSaving />} />
              <Route path="/input_savingselect" element={<InputSavingSelect />} />
              <Route path="/input_savingitem" element={<InputSavingItem />} />
              <Route path="/input_savingdone" element={<InputSavingDone />} />
              <Route path="/input_savingitemdone" element={<InputSavingItemDone />} />
              <Route path="/display" element={<Display />} />
              <Route path="/displayex" element={<DisplayExpense />} />
              <Route path="/display/saving_detail" element={<SavingDetail />} />
              <Route path="/friend" element={<Friend />} />
      </Routes>
    </AnimatePresence>

    </>
  )
}

