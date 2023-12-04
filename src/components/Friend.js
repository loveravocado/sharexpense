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


export default function Friend(prpos){
  const [username, setUsername] = useState()

  onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("1")
        setUsername(user.displayName)
        console.log({username});
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
            {username ? (
            <>
            <FriendData  name={username}/>
            </>
            ) :("")}

            
            
          </div>
        </div>
        <Footer />
    </div>
  )
  
}

function FriendData({name}){
  
  const [saving, setSaving] = useState([]);
  console.log("2")
  console.log(name)
  
  

  useEffect(() => {
    
    const f = async() => {
      
    const savingdata = query(collection(db, "saving"), where("name", "!=", name));
    console.log("3")
       
      const querySnapshot = await getDocs(savingdata);
    
      querySnapshot.forEach((doc) =>{ 
        setSaving((saving)=>[...saving, doc.data()]);
      });
    };
    f();
    
  }, []);
  return(
    <>
    {saving.map((saving)=> ( 
      <div key={saving.name }>
        <div>{saving.name}</div>
        <div>{saving.month}</div>
        <div>{saving.amount}</div>
      </div>
    ))}
    </>
  )
    
  
}


