import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import icon_income from "../../img/sharexpense_icon_income.png";
import '../Header.css';
import './Input.css';
import { collection, addDoc } from "firebase/firestore"; 
import { useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Link} from "react-router-dom";
import { db } from '../../firebase';

export default function InputIncome() {
        const [item, setIncomeItem] = useState();
        const [amount, setIncomeAmount] = useState();
        const [date, setIncomeDate] = useState("");
        const [exuid, setIncomeExuid] = useState();
    
        onAuthStateChanged(auth, (user) => {
          if (user) {
              setIncomeExuid(user.uid)
              }
          })
        
          const CreateIncome = async () =>{
            await addDoc(collection(db, "income"),{
              item:item,
              amount:amount,
              date:date,
              uid:exuid
            })
          }
  return (
    <>
        <Header headercolor= "income_header-box"/>
        <div className='input back_income'>
            <div className='input_all'>
                <div className='input_size'>
                <img className= "input_income_icon_contents" src= {icon_income} alt="home"/><p className="input_text_contents">収入</p>
                <div className='input_item_back back_item income_color'><input type="text" className='input_item' placeholder='項目を記入' onChange={(e) => setIncomeItem(e.target.value)}></input></div>
                <div className='input_item_back back_amount income_color'><input type="text" className='input_item' placeholder='金額を記入' onChange={(e) => setIncomeAmount(Number(e.target.value))}></input></div>
                <div className='input_item_back back_date income_color'><input type="date" className='input_item' placeholder='日付を記入' onChange={(e) => setIncomeDate(e.target.value)}></input></div>
                <Link to ="/input_incomedone" ><button className='income_postButton income_color'onClick={CreateIncome} >決定</button></Link>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
