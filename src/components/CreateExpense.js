import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
import { db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth, provider, username } from "../firebase";

export default function CreateExpense(){
    const [item, setItem] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState("");
    const [exuid, setExuid] = useState();

    onAuthStateChanged(auth, (user) => {
      if (user) {
          setExuid(user.uid)
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
        <div className='inputdetails'>
        <input type="text" placeholder='項目を記入' onChange={(e) => setItem(e.target.value)} />
        <input type="text" placeholder='金額を記入' onChange={(e) => setAmount(Number(e.target.value))} />
        <input type="date" placeholder="日付" onChange={(e) => setDate(e.target.value)} />
        <button className='postButton' onClick={CreateExpense}>登録する</button>
      </div>
      )
  
  };
