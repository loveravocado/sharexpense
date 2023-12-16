import React from 'react';
import Header from './Header';
import Footer from './Footer';
import icon_saving from "../img/sharexpense_icon_saving.png";

import './Input.css';
import { collection, addDoc } from "firebase/firestore"; 
import { useState } from 'react';
import { db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Link} from "react-router-dom";

export default function InputSaving() {
        const [date, setSavingDate] = useState("");
        const [amount, setSavingAmount] = useState();
        const [exuid, setSavingExuid] = useState();
    
        onAuthStateChanged(auth, (user) => {
          if (user) {
              setSavingExuid(user.uid)
              }
          })
        
          const CreateSaving = async () =>{
            await addDoc(collection(db, "saving"),{
              date:date,
              amount:amount,
              uid:exuid
            })
          }
  return (
    <>
        <Header />
        <div className='input back_saving'>
            <div className='input_all'>
                <div className='input_size'>
                <img className= "input_saving_icon_contents" src= {icon_saving} alt="home"/><p className="input_text_contents">貯金</p>
                <div className='input_item_back back_item saving_color'><input type="text" className='input_item' placeholder='月を記入' onChange={(e) => setSavingDate(Number(e.target.value))}></input></div>
                <div className='input_item_back back_amount saving_color'><input type="text" className='input_item' placeholder='金額を記入' onChange={(e) => setSavingAmount(Number(e.target.value))}></input></div>
                <Link to ="/input_savingdone" ><button className='income_postButton saving_color'onClick={CreateSaving} >決定</button></Link>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
