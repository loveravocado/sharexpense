import React from 'react';
import Header from './Header';
import Footer from './Footer';
import icon_expense from "../img/sharexpense_icon_expense.png";

import './Input.css';
import { collection, addDoc } from "firebase/firestore"; 
import { useState } from 'react';
import { db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Link} from "react-router-dom";

export default function InputExpense() {
        const [item, setExpenseItem] = useState();
        const [amount, setExpenseAmount] = useState();
        const [date, setExpenseDate] = useState("");
        const [exuid, setExpenseExuid] = useState();
    
        onAuthStateChanged(auth, (user) => {
          if (user) {
              setExpenseExuid(user.uid)
              }
          })
        
          const CreateExpense = async () =>{
            await addDoc(collection(db, "expense"),{
              item:item,
              amount:amount,
              date:date,
              uid:exuid
            })
          }
  return (
    <>
        <Header />
        <div className='input back_expense'>
            <div className='input_all'>
                <div className='input_income'>
                <img className= "input_expense_icon_contents" src= {icon_expense} alt="home"/><p className="input_text_contents">支出</p>
                <div className='input_item_back back_item expense_color'><input type="text" className='input_item' placeholder='項目を記入' onChange={(e) => setExpenseItem(e.target.value)}></input></div>
                <div className='input_item_back back_amount expense_color'><input type="text" className='input_item' placeholder='金額を記入' onChange={(e) => setExpenseAmount(Number(e.target.value))}></input></div>
                <div className='input_item_back back_date expense_color'><input type="date" className='input_item' placeholder='日付を記入' onChange={(e) => setExpenseDate(e.target.value)}></input></div>
                <Link to ="/input_incomedone" ><button className='income_postButton expense_color'onClick={CreateExpense} >決定</button></Link>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

