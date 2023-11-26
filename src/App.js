import './App.css';
import CreateExpense from './components/CreateExpense';
import DisplayExpense from './components/DisplayExpense';
import Calendar from './components/Calendar.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { db } from "./firebase";
import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore"; 
import Footer from './components/Footer';
import { async } from '@firebase/util';
import Header from './components/Header';



function App(){
  const [expenses, setExpenses] = useState([]);
    useEffect(() => {
      const expensedata = collection(db, "expense")
      getDocs(expensedata).then((detail) => {
        console.log(detail.docs.map((doc) => ({...doc.data()})))
        setExpenses(detail.docs.map((doc) => ({...doc.data()})));
      })
    }, []);

  return(
    <>
    <script src="https://cdn.tailwindcss.com"></script>
    <div className='App'>
      <Header/>
      <Footer />     
    </div>

    </>
  );
}

export default App;

