import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider,db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, createContext } from 'react';
import { collection, addDoc, getDocs, where, query } from "firebase/firestore"; 
import icon_pigip  from "../../img/pigip.png";
import "./Home.css";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <>
            <div className="home">
                <div className="home_img">
                <Link to ="/start" >
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}}>
                    <img className= "home_pigip" src= {icon_pigip} alt="pigip"/>
                </motion.div>
                </Link>
                </div>
            </div>
            
        </>
    )
    
//     const [username, setUsername] = useState("");
//     const [uid, setUid] = useState("");
//     const [useremail, setUseremail] = useState("");
//     onAuthStateChanged(auth, (user) => {
//     if (user) {
//             setUsername(user.displayName);
//             setUid(user.uid);
//             setUseremail(user.email);

//     }})

//     return (
//       <>
//        <script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script> 
  
//       <div>
        
//               {username ? (
//                   <>
//                       <Header />

//                       <UserInfo username ={username} uid={uid} useremail={useremail}/>
//                       <SignOutButton />
//                     <Footer />

  
//                   </>
//               ):(
//                   <SignInButton />
//               )}    

//       </div> 
//       </>
//     )
//   }
//   function SignInButton(){
//       const signInWithGoogle = () =>{
//           signInWithPopup(auth, provider)
//       }
//       return (
//           <button onClick={signInWithGoogle}>
//               Googleでサインアップ
//           </button>
  
//       )
//   }
//   function SignOutButton(){
//       return (
//           <button onClick={() => auth.signOut()}>
//               サインアウト
//           </button>
  
//       )
//   }
//   function UserInfo({username, uid, useremail}){

//   useEffect(() => {
    
//     const f = async() => {
      
//     const userdata = query(collection(db, "userdata"), where("uid", "==", {uid}));

//     if(userdata){
//         const UserData = async () =>{

//             await addDoc(collection(db, "userdata"),{
//               username: username,
//               uid: uid,
//               useremail:useremail
//             })
//           }
//         UserData();
//     }
//     };
//     f();
   
    
//   }, []);
    
//       return (
//           <>
//               <div className='user-info'>
//                   <img src={auth.currentUser.photoURL} alt=""></img>
//                   <p> {auth.currentUser.displayName}</p>
//               </div>
//           </>
//       )
  }


