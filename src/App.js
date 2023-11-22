import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import CreateExpense from './components/CreateExpense';
import DisplayExpense from './components/DisplayExpense';
import Calendar from './components/Calendar.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import db from "./firebase";
import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore"; 

import { async } from '@firebase/util';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/blog" element={<BlogPage />} />
          
//         </Routes>
//       </div>
//     </Router>
//   );
// }


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
      <div >出費を入力する</div>
      <div><CreateExpense /></div>
      <DisplayExpense />
      <Calendar />

        
    </div>

    </>
  );
}

export default App;

