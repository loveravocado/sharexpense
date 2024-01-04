import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import icon_saving from "../../img/sharexpense_icon_saving.png";

import './Input.css';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 
import { useState } from 'react';
import { db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Link} from "react-router-dom";

export default function InputSaving() {
        const [date, setSavingDate] = useState("");
        const [amount, setSavingAmount] = useState();
        const [exuid, setSavingExuid] = useState();
        const [exusername, setExusername] = useState();
        const [itemid, setItemid] = useState();

    
        onAuthStateChanged(auth, (user) => {
          if (user) {
              setSavingExuid(user.uid);
              setExusername(user.displayName);
              }
          })
        
          const CreateSaving = async () =>{
            await addDoc(collection(db, "saving"),{
              date:date,
              amount:amount,
              itemid: itemid,
              uid:exuid,
              username: exusername

            })
          }
  return (
    <>
    <Header headercolor="saving_header-box"/>
    <div className='input back_saving'>
        <div className='input_all'>
          <div className='input_size'>
          <img className= "input_saving_icon_contents" src= {icon_saving} alt="home"/><p className="input_text_contents">貯金</p>
          {exuid 
          ? <SavingItemData uid={exuid} setItemid={setItemid}/>
          : ("")
          }
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
function SavingItemData(props){
    const uid = props.uid;
    const [savingitems, setSavingItems] = useState([]);

  
    useEffect(() => {
      
      const f = async() => {
        
      const savingitemdata = query(collection(db, "savingitem"), where("uid", "!=", {uid}));
       
      getDocs(savingitemdata).then((detail) => {
        setSavingItems(detail.docs.map((doc) => ({...doc.data()})));  
      })
      };
      f();
     
      
    }, []);
    const InputChange = (e) => {
      props.setItemid(e.target.value)

    
  }
    return(
      <>
      <select name="item" className='select_item' onChange={InputChange}>
        <option>貯金するモノを選択</option>
        {savingitems.map((savingitem)=> (
              <option key={savingitem.id} value={savingitem.id}>{savingitem.item}</option>
        ))}
      </select>
      </>
    )
}