import './App.css';
import CreateExpense from './components/CreateExpense';
import DisplayExpense from './components/DisplayExpense';
import Calendar from './components/Calendar.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import db from "./firebase";
import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore"; 
import Footer from './components/Footer';
import Home from './components/Home';
import Input from './components/Input';
import Display from './components/Display';
import Friend from './components/Friend';
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
      <Footer />     
    </div>

    </>
  );
}

export default App;

