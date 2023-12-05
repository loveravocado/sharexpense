import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useEffect, useState, useContext, useRef  } from 'react';
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"; 
import { auth, provider, username } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../firebase";
import { UserName } from './Home'; 


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
        <Header name="Friend"/>
        Friend
        <div className='friend'>
          <div className='displayfriend'>
            <h1>友達一覧</h1>
            {fruid ? (
            <>
            <FriendData  uid={fruid}/>
            </>
            ) :("")}

            
            
          </div>
        </div>
        <Footer />
    </div>
  )
  
}

function FriendData({uid}){
  
  const [savings, setSavings] = useState([]);

  useEffect(() => {
    
    const f = async() => {
      
    const savingdata = query(collection(db, "saving"), where("name", "!=", uid));

      const querySnapshot = await getDocs(savingdata);
    
      querySnapshot.forEach((doc) =>{ 
        setSavings((savings)=>[...savings, doc.data()]);
      });
    };
    f();
   
    
  }, []);
  return(
    <>
    {savings.map((saving)=> ( 
      <div key={saving.name }>
        <div>{saving.name}</div>
        <div>{saving.month}</div>
        <div>{saving.amount}</div>
      </div>
    ))}
    </>
  )
    
  
}


