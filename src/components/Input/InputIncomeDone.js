import React from 'react';
import './Input.css';
import Header from '../Header';
import Footer from '../Footer';
import { Link} from "react-router-dom";
import icon_income from "../../img/sharexpense_icon_income.png";
import icon_income_money from  "../../img/sharexpense_icon_income_money.png";
import { motion } from 'framer-motion';



export default function InputIncomeDone() {
  return (
    <>
        <Header />
        <div className='whiteshadow'></div>
        
        <img className= "input_income_icon_contents done_income" src= {icon_income} alt="home" />
        
        <motion.img className= "done_income_money" src= {icon_income_money} alt="moeny" initial={{top: "20vh", bottom: 0}} animate={{top: "40vh", left: "30%", opacity: 0}} transition={{duration: 0.8}}/>
        <motion.img className= "done_income_money2" src= {icon_income_money} alt="moeny" initial={{top: "10vh", bottom: 0}} animate={{top: "40vh", left: "30%", opacity: 0}} transition={{duration: 0.4}}/>
        <motion.img className= "done_income_money3" src= {icon_income_money} alt="moeny" initial={{top: "25vh", bottom: 0}} animate={{top: "40vh", left: "25%", opacity: 0}} transition={{duration: 0.6}}/>
        <motion.img className= "done_income_money4" src= {icon_income_money} alt="moeny" initial={{top: "15vh", bottom: 0}} animate={{top: "40vh", left: "30%", opacity: 0}} transition={{duration: 0.5}}/>
        <motion.img className= "done_income_money5" src= {icon_income_money} alt="moeny" initial={{top: "18vh", bottom: 0}} animate={{top: "40vh", left: "35%", opacity: 0}} transition={{duration: 0.5}}/>
        <motion.img className= "done_income_money6" src= {icon_income_money} alt="moeny" initial={{top: "10vh", bottom: 0}} animate={{top: "40vh", left: "35%", opacity: 0}} transition={{duration: 0.5}}/>
        <motion.img className= "done_income_money7" src= {icon_income_money} alt="moeny" initial={{top: "8vh", bottom: 0}} animate={{top: "40vh", left: "35%", opacity: 0}} transition={{duration: 0.5}}/>
        <motion.img className= "done_income_money7" src= {icon_income_money} alt="moeny" initial={{top: "8vh", bottom: 0}} animate={{top: "40vh", left: "35%", opacity: 0}} transition={{duration: 0.3}}/>
        <motion.img className= "done_income_money8" src= {icon_income_money} alt="moeny" initial={{top: "8vh", bottom: 0}} animate={{top: "40vh", left: "35%", opacity: 0}} transition={{duration: 0.2}}/>
        <motion.img className= "done_income_money9" src= {icon_income_money} alt="moeny" initial={{top: "4vh", bottom: 0}} animate={{top: "40vh", left: "35%", opacity: 0}} transition={{duration: 0.2}}/>
        <div className='inputincomedown'><p>保存されました</p></div>
        <Link to ="/input" ><div className='inputincomeback income_color'><p>入力に戻る</p></div></Link>
        <Footer /> 
        
    </>
  )
}
