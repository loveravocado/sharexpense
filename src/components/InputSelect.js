import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link} from "react-router-dom";
import icon_income from "../img/sharexpense_icon_income.png";
import icon_expense from "../img/sharexpense_icon_expense.png";
import icon_saving from "../img/sharexpense_icon_saving.png";
import "./Input.css";

export default function InputSelect() {
  return (
    <>
    <Header/>
    <div className='input back_default'>
        <div className='input_all'>
            <Link to ="/input_income" ><img className= "input_icon_income" src= {icon_income} alt="home"/><p className="input_text_income">収入</p></Link>
            <Link to ="/input_expense" ><img className= "input_icon_expense" src= {icon_expense} alt="home"/><p className="input_text_expense expense_text_color">支出</p></Link>
            <Link to ="/input_saving" ><img className= "input_icon_saving" src= {icon_saving} alt="home"/><p className="input_text_saving">貯金</p></Link>
        </div>
    </div>
    <Footer />
    </>
  )
}
