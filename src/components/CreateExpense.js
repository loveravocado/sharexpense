import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
import db from "../firebase";

export default function CreateExpense(){
    const [item, setItem] = useState();
    const [amount, setAmount] = useState();

        
      const CreateExpense = async () =>{
        await addDoc(collection(db, "expense"),{
          item:item,
          amount:amount,
        })
      }
      return (
        <div className='inputdetails'>
        <input type="text" placeholder='項目を記入' onChange={(e) => setItem(e.target.value)} />
        <input type="text" placeholder='金額を記入' onChange={(e) => setAmount(e.target.value)} />
        <button className='postButton' onClick={CreateExpense}>登録する</button>
      </div>
      )
  
  };
