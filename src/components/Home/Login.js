import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider,db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, createContext } from 'react';
import { collection, addDoc, getDocs, where, query } from "firebase/firestore"; 
import { Link } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState("");
    const [uid, setUid] = useState("");
    const [useremail, setUseremail] = useState("");
    const [userimage, setUserimage] = useState();
    onAuthStateChanged(auth, (user) => {
    if (user) {
            setUsername(user.displayName);
            setUid(user.uid);
            setUseremail(user.email);
            setUserimage(auth.currentUser.photoURL)

    }})

    return (
      <>
       <script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script> 
  
      <div className='login'>
            
              {username ? (
                  <>
                  <div className="login_set"> 
                      <UserInfo username ={username} uid={uid} useremail={useremail} userimage={userimage}/>
                      <SignOutButton />
                </div>
                  </>
              ):(
                  <SignInButton />
              )}    
        
      </div> 
      </>
    )
  }
  function SignInButton(){
      const signInWithGoogle = () =>{
          signInWithPopup(auth, provider)
      }
      return (
        <div className='signup'>
            <div className='circle_signup'>
            <button className='btn_signup'onClick={signInWithGoogle}>
                <div className='incircle'>
                    <div className='text_signup'>
                    Googleで<br></br>サインアップ
                    </div>
                </div>
            </button>
          </div>
          </div>
  
      )
  }
  function SignOutButton(){
      return (
        <>
        <button  className="btn_signout" onClick={() => auth.signOut()}>
            <div className='circle_signout'>
                <div className='incircle'>
                <div className="signout">
                サインアウト
                </div>
            </div>
            </div>
        </button>
        
        <div className='circle_home'>
        <Link to ="/display" >
            <div className='incircle'>
            <div className="signout">
              Home
            </div>
          </div>
          </Link>
        </div>
       
        </>
      )
  }
  function UserInfo({username, uid, useremail, userimage}){

  useEffect(() => {
    
    const f = async() => {
      
    const userdata = query(collection(db, "userdata"), where("uid", "==", uid));

    if(userdata){
        const UserData = async () =>{

            await addDoc(collection(db, "userdata"),{
              username: username,
              uid: uid,
              useremail:useremail,
              userimage: userimage
            })
          }
        UserData();
    }
    };
    f();
   
    
  }, []);
    
      return (
          <>
              <div className='login_info'>
                  <img src={auth.currentUser.photoURL} alt=""></img>
                  <p> {auth.currentUser.displayName}</p>
              </div>
          </>
      )
}



