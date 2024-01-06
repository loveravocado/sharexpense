import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import DisplayTotal from './DisplayTotal'
import "./Display.css";
import '../../App.css';
import { useEffect, useState } from 'react';
import { collection, getDocs, where, query } from "firebase/firestore"; 
import { auth} from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase";

export default function SavingDetail() {
    const [uid, setUid] = useState()

    onAuthStateChanged(auth, (user) => {
      if (user) {
          setUid(user.uid)
          }
      })
  return (
    <>
        <div>
        <Header name="貯金したいモノ" headercolor= "saving_header-box"/>
        <div className='input back_saving'>
          <div className='input_all overscroll'>
            <div className='input_size'>
              <div className='friend'>
                {uid 
                ? <SavingItemData uid={uid}/>
                : ("")
                }
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
    </>
  )
}
function SavingItemData({uid}){
  
    const [savingitems, setSavingItems] = useState([]);
  
    useEffect(() => {
      
      const f = async() => {
        
      const savingitemdata = query(collection(db, "savingitem"), where("uid", "!=", {uid}));
      const usersavingdata = query(collection(db, "userdata"), where("uid", "!=", {uid}));
       
      getDocs(savingitemdata, usersavingdata).then((detail) => {
        setSavingItems(detail.docs.map((doc) => ({...doc.data()})));  
      })
      };
      f();
     
      
    }, []);
    return(
      <>
      {savingitems.map((savingitem)=> ( 
        <div key={savingitem.id }>
          <div className='saving_maininfo'>
          <div className='saving_subinfo'>
              <div className='saving_info'>{savingitem.item}</div>
              <div className='saving_info'>{savingitem.amount}円</div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
}