import React from 'react';
import './Input.css';
import Header from '../Header';
import Footer from '../Footer';
import './Input.css';
import { Link} from "react-router-dom";
import icon_expense from "../../img/sharexpense_icon_expense.png";
import icon_expense_money from  "../../img/sharexpense_icon_expensemoney.png";
import { motion } from 'framer-motion';



export default function InputExpenseDone() {
  return (
    <>
        <Header />
        <div className='whiteshadow'></div>
        <img className= "input_expense_icon_contents done_expense" src= {icon_expense} alt="expense" />
        <motion.img className= "done_income_money" src= {icon_expense_money} alt="moeny" initial={{top: "40vh", left: "30%"}} animate= {{top: "20vh", left: "25%", opacity: 0}} transition={{duration: 0.8}}/>
        <motion.img className= "done_income_money2" src= {icon_expense_money} alt="moeny" initial={{top: "40vh", left: "30%"}} animate= {{top: "10vh", left: "45%", opacity: 0}} transition={{duration: 0.4}}/>
        <motion.img className= "done_income_money3" src= {icon_expense_money} alt="moeny" initial={{top: "40vh", left: "25%"}}  animate= {{top: "25vh", left: "50%", opacity: 0}} transition={{duration: 0.6}}/>
        <motion.img className= "done_income_money4" src= {icon_expense_money} alt="moeny" initial={{top: "40vh", left: "30%"}} animate= {{top: "15vh", left: "20%", opacity: 0}} transition={{duration: 0.5}}/>
        <motion.img className= "done_income_money5" src= {icon_expense_money} alt="moeny" initial={{top: "40vh", left: "35%"}} animate= {{top: "18vh", left: "10%", opacity: 0}} transition={{duration: 0.5}}/>
        <motion.img className= "done_income_money6" src= {icon_expense_money} alt="moeny" initial={{top: "40vh", left: "35%"}} animate= {{top: "10vh", left: "70%", opacity: 0}} transition={{duration: 0.5}}/>
        <motion.img className= "done_income_money7" src= {icon_expense_money} alt="moeny" initial={{top: "40vh", left: "35%"}} animate= {{top: "8vh", left: "10%", opacity: 0}} transition={{duration: 0.5}}/>
        <motion.img className= "done_income_money8" src= {icon_expense_money} alt="moeny" initial={{top: "40vh", left: "35%"}} animate= {{top: "8vh", left: "20%", opacity: 0}} transition={{duration: 0.2}}/>
        <motion.img className= "done_income_money9" src= {icon_expense_money} alt="moeny" initial={{top: "40vh", left: "35%"}} animate= {{top: "4vh", left: "50%", opacity: 0}}transition={{duration: 0.2}}/>
        <div className='inputexpensedown'><p>保存されました</p></div>
        
        <Link to ="/input" ><div className='inputincomeback expense_color expense_text_color'><p>入力に戻る</p></div></Link>
        <Footer /> 
        
    </>
  )
}
