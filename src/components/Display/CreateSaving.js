import React from 'react'
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
import { db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth, provider, username } from "../../firebase";

export default function CreateSaving() {

    const [month, setMonth] = useState();
    const [savingAmount, setSavingAmount] = useState();
    const [sauid, setSauid] = useState();
    const [sausername, setSausername] = useState();

    onAuthStateChanged(auth, (user) => {
      if (user) {
          setSauid(user.uid)
          setSausername(user.displayName)
          }
      })
      console.log(sausername)
      const CreateSaving = async () =>{
        await addDoc(collection(db, "saving"),{
          month:month,
          amount:savingAmount,
          uid:sauid,
          username: sausername
        })
      }
      return (
        <div className='inputdetails'>
            <input type="text" placeholder='月を記入' onChange={(e) => setMonth(e.target.value)} />
            <input type="text" placeholder='金額を記入' onChange={(e) => setSavingAmount(e.target.value)} />
            <button className='postButton' onClick={CreateSaving}>貯金する</button>
      </div>
      )

}

