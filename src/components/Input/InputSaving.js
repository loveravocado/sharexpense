import React, { useCallback, useEffect, useMemo } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import icon_saving from "../../img/sharexpense_icon_saving.png";

import './Input.css';
import { collection, addDoc, query, where, getDocs, updateDoc, doc } from "firebase/firestore"; 
import { useState } from 'react';
import { db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Link} from "react-router-dom";

export default function InputSaving() {
        const [date, setSavingDate] = useState("");
        const [amount, setSavingAmount] = useState();
        const [exuid, setSavingExuid] = useState("user");
        const [exusername, setExusername] = useState("username");
        const [itemid, setItemid] = useState("itemid");
        const [savingitems, setSavingItems] = useState([]);
        const [savingid, setSavingId] = useState([]);
        useEffect(() => {
          onAuthStateChanged(auth, (user) => {
            if (user) {
                setSavingExuid(user.uid);
                setExusername(user.displayName);
                }
            })
        }, [])
        
        
          const CreateSaving = async () =>{
            await addDoc(collection(db, "saving"),{
              date:date,
              amount:amount,
              itemid: itemid,
              uid:exuid,
              username: exusername

            })
          }
          useEffect(() => {
      
      
            const f = async() => {
              
            const savingitemdata = query(collection(db, "savingitem"), where("uid", "==", exuid));
             
            getDocs(savingitemdata).then((detail) => {
              setSavingId(detail.docs.map((doc) => ({...doc.data()})));  
            })
            };
            f();
           
          }, [exuid]);
          const InputChange = (e) => {
            setItemid(e.target.value) 
        }

          useEffect(() => {
            const f = async () => {
            const savingitemdata = query(collection(db, "savingitem"), where("id", "==", itemid));
            await getDocs(savingitemdata).then((detail) => {
              setSavingItems(detail.docs.map((doc) => doc.data()));
              })
            }
            f();
          }, [itemid]);
        
  return (
    <>
    <Header headercolor="saving_header-box"/>
    <div className='input back_saving'>
        <div className='input_all'>
          <div className='input_size'>
          <img className= "input_saving_icon_contents" src= {icon_saving} alt="home"/><p className="input_text_contents">貯金</p>
          
          <div className='input_item_back back_item saving_color'>
          <select name="item" className='input_item select_item' onChange={InputChange}>
          <option>貯金するモノを選択</option>
          {savingid.map((savingid)=> (
                <option key={savingid.id} value={savingid.id}>{savingid.item}</option>
          ))}
        </select></div>
          <div className='input_item_back back_amount saving_color'><input type="text" className='input_item' placeholder='金額を記入' onChange={(e) => setSavingAmount(Number(e.target.value))}></input></div>
          <Link to ="/input_savingdone" ><button className='income_postButton saving_color'onClick={() => {CreateSaving();SumAmount({savingitems, amount, itemid });}} >決定</button></Link>
          </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

function SumAmount({savingitems, amount, itemid}){
  const item = savingitems[0];
  const total_savingitems = item.nowamount + Number(amount);
    updateDoc(doc(db, 'savingitem', itemid), {
      nowamount: Number(total_savingitems),
    })

}