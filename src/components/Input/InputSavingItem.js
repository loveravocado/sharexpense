import React from 'react'
import './Input.css';
import { collection, addDoc, DocumentReference, doc, setDoc } from "firebase/firestore"; 
import { useState } from 'react';
import { db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Link} from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import icon_saving_white from "../../img/sharexpense_icon_saving_white.png";

export default function InputSavingItem() {
    const [item, setSavingItem] = useState("");
    const [amount, setSavingAmount] = useState();
    const [exuid, setSavingExuid] = useState();
    const [exusername, setExusername] = useState();

    onAuthStateChanged(auth, (user) => {
      if (user) {
          setSavingExuid(user.uid);
          setExusername(user.displayName);
          }
      })
      const CreateSavingItem = async () =>{
      const addDataRef = doc(collection(db, 'savingitem'))
      await setDoc(addDataRef, {
          item:item,
          amount:amount,
          uid:exuid,
          username: exusername,
          nowamount: 0,
          id: addDataRef.id
      });
    }

  return (
    <>
        <Header headercolor="saving_header-box"/>
        <div className='input back_saving'>
            <div className='input_all'>
                <div className='input_size'>
                <img className= "input_saving_icon_contents" src= {icon_saving_white} alt="home"/><p className="text_saving_item input_text_contents">貯金目標</p>
                <div className='input_item_back back_item saving_color'><input type="text" className='input_item' placeholder='貯金するモノを記入' onChange={(e) => setSavingItem(e.target.value)}></input></div>
                <div className='input_item_back back_amount saving_color'><input type="text" className='input_item' placeholder='金額を記入' onChange={(e) => setSavingAmount(Number(e.target.value))}></input></div>
                <Link to ="/input_savingitemdone" ><button className='income_postButton saving_color'onClick={CreateSavingItem} >決定</button></Link>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
