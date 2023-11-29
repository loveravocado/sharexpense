import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useEffect, useState, useContext } from 'react';
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"; 
import { auth, provider, username } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../firebase";
import { UserName } from './Home'; 



export default function Friend() {
  const [saving, setSaving] = useState([]);

  const [username, setUsername] = useState("ayako");
  

  console.log(username)
  useEffect(() => {
    (async()=>{ 
      onAuthStateChanged(auth, (user) => {
        if (user) {
            setUsername(user.displayName);
            }
        })

    const savingdata = query(collection(db, "saving"), where("name", "!=", {username}));
    const querySnapshot = await getDocs(savingdata);
  
    querySnapshot.forEach((doc) =>{ 
      setSaving((saving)=>[...saving, doc.data()]);
    });
      
    })()
  }, [])


  return (
    <div>
        <Header name="Friend"/>
        Friend
        <div className='friend'>
          <div className='displayfriend'>
            <h1>友達一覧</h1>
            {/* <div> {username ? (auth.currentUser.displayName):("")}</div> */}
            {saving.map((saving)=> ( 
              <div key={saving.name }>
                <div>{saving.name}</div>
                <div>{saving.month}</div>
                <div>{saving.amount}</div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
    </div>
  )
}
