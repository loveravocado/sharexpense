import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, createContext } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Provider } from "react-redux"
import store from "./store/reindex";
import { useSelector, useDispatch } from "react-redux";
export const UserName = createContext()


export default function Home() {
    const count = useSelector((state) => state.count);
    const [username, setUsername] = useState(null);
    onAuthStateChanged(auth, (user) => {
    if (user) {
        if(user.displayName){
            setUsername(user.displayName);
        }

    }})

    return (
      <>
      <script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>
  
      <div>
        
              {username ? (
                  <>
                      <Header />
                      <p>Count:{store.getState().count}</p>

                      <UserInfo />
                      <SignOutButton />
                      <Footer />

  
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
          <button onClick={signInWithGoogle}>
              Googleでサインイン
          </button>
  
      )
  }
  function SignOutButton(){
      return (
          <button onClick={() => auth.signOut()}>
              サインアウト
          </button>
  
      )
  }
  function UserInfo(){
    
      return (
          <>
              <div className='user-info'>
                  <img src={auth.currentUser.photoURL} alt=""></img>
                  <p> {auth.currentUser.displayName}</p>
              </div>
          </>
      )
  }



  