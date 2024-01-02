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
    
    }