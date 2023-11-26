import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export default function Home() {
    const [user] = useAuthState(auth);
  return (
    <>
    <script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>

    <div>
        <Header name="Home"/>
            Home
            {user ? (
                <>
                    <UserInfo />
                    <SignOutButton />
                </>
            ):(
                <SignInButton />
            )}
            

        <Footer/>
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