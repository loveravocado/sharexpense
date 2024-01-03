import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import icon_saving from "../../img/sharexpense_icon_saving.png";
import icon_saving_white from "../../img/sharexpense_icon_saving_white.png";

export default function InputSavingSelect() {
  return (
    <>
    <Header name="" headercolor = "saving_header-box"/>
    <div className='input back_saving'>
        <div className='input_all'>
            <Link to ="/input_saving" ><img className= "input_icon_saving_saving" src= {icon_saving} alt="saving"/><p className="input_text_saving_saving ">貯金額</p></Link>
            <Link to ="/input_savingitem" ><img className= "input_icon_saving_item" src= {icon_saving_white} alt="saving_item"/><p className="input_text_saving_item">貯金目標</p></Link>
        </div>
    </div>
    <Footer />
    </>
  )
}
