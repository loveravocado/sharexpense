import icon_input from "../img/sharexpense_icon_input.png";
import icon_display from "../img/sharexpense_icon_display.png";
import icon_friend from "../img/sharexpense_icon_friend.png";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import React from 'react';
import {motion} from "framer-motion"


import Home from './Home/Home';
import Input from './Input/Input';
import Display from './Display/Display';
import Friend from './Friend/Friend';
import "./Footer.css";


export default function Footer(){

    return(
        <>

            <div className= "footer">
                <motion.div 
                className="footer_box" 
                initial = {{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.6, delay: 0.5}}
                exit={{}}
                >
            
                    <Link to ="/input" ><img className= "sharexpense_icon_input" src= {icon_input} alt="input"/></Link>
                    <Link to ="/display" ><img className= "sharexpense_icon_display" src= {icon_display} alt="display"/></Link>
                    <Link to ="/friend" ><img className= "sharexpense_icon_friend" src= {icon_friend} alt="friend"/></Link>
                </motion.div>

            </div>

        
    </>
    )
    }
