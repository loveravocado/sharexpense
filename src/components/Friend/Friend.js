import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useEffect, useState, useContext, useRef  } from 'react';
import { collection, getDocs, where, query } from "firebase/firestore"; 
import { auth, provider, username } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../firebase";
import { UserName } from '../Home'; 
import "./Friend.css";


export default function Friend(){
  const [fruid, setFruid] = useState()

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
          <div className='input_all'>
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
  const [usersaving, setUsersaving] = useState([]);

  useEffect(() => {
    
    const f = async() => {
      
    const savingdata = query(collection(db, "saving"), where("uid", "!=", {uid}));
    const usersavingdata = query(collection(db, "userdata"), where("uid", "!=", {uid}));
     
    getDocs(savingdata, usersavingdata).then((detail) => {
      setSavings(detail.docs.map((doc) => ({...doc.data()})));  
    })
    };
    f();
   
    
  }, []);
  return(
    <>
    {savings.map((saving)=> ( 
      <div key={saving.username }>
        <div className='saving_maininfo'>
        <img className="saving_img" src={auth.currentUser.photoURL} alt=""></img>
        <div className='saving_subinfo'>
            <div className='saving_info'>{saving.username}</div>
            <div className='saving_info'>{saving.date}月</div>
            <div className='saving_info'>{saving.amount}円</div>
          </div>
        </div>
      </div>
    ))}
    </>
  )
    
  
}


