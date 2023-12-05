import React from 'react'
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
import { db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth, provider, username } from "../firebase";

export default function CreateSaving() {

    const [month, setMonth] = useState();
    const [savingAmount, setSavingAmount] = useState();
    const [sauid, setSauid] = useState();

    onAuthStateChanged(auth, (user) => {
      if (user) {
          setSauid(user.uid)
          }
      })
      const CreateExpense = async () =>{
        await addDoc(collection(db, "saving"),{
          month:month,
          amount:savingAmount,
          uid:sauid
        })
      }
      return (
        <div className='inputdetails'>
            <input type="text" placeholder='月を記入' onChange={(e) => setMonth(e.target.value)} />
            <input type="text" placeholder='金額を記入' onChange={(e) => setSavingAmount(e.target.value)} />
            <button className='postButton' onClick={CreateExpense}>貯金する</button>
      </div>
      )

}

