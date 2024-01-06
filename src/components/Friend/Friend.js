import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useEffect, useState } from 'react';
import { collection, getDocs, where, query } from "firebase/firestore"; 
import { auth} from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase";
import "./Friend.css";


export default function Friend(){
  const [fruid, setFruid] = useState();
  const [fruiamge, setFruimage] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
        setFruid(user.uid)
        }
    }
    
  );
  return (
    <div>
        <Header name="フレンドの貯金" headercolor= "saving_header-box"/>
        <div className='input back_saving'>
          <div className='input_all overscroll'>
            <div className='input_size'>
              <div className='friend'>
                {fruid 
                ? (<><FriendData  uid={fruid}/></>) 
                :("")}
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
  
}

function FriendData({uid}){
  const [savings, setSavings] = useState([]);
  console.log(auth.currentUser.photoURL)

  useEffect(() => {
    
    const f = async() => {
      
    const savingdata = query(collection(db, "savingitem"), where("uid", "!=", uid));
    const usersavingdata = query(collection(db, "userdata"), where("uid", "!=", uid));
     
    getDocs(savingdata, usersavingdata).then((detail) => {
      setSavings(detail.docs.map((doc) => ({...doc.data()})));  
    })
    };
    f();
   
    
  }, []);
  return(
    <>
    {savings.map((saving)=> ( 
      <div key={saving.username}>
        <div className='saving_maininfo'>
        {/* <img className="saving_img" src={saving.userimage} alt=""></img> */}
        <div className='saving_subinfo'>
            <div className='saving_info'>{saving.username}</div>
            <div className="info_amount">
            <div className='saving_info'>{saving.item}</div>
            <div className='saving_info'>{saving.nowamount}円 / </div>
            <div className='saving_info'>{saving.amount}円</div>
            </div>
          </div>
        </div>
      </div>
    ))}
    </>
  )
    
  
}


