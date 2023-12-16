import React from 'react';
import './Input.css';
import Header from './Header';
import Footer from './Footer';
import './Input.css';
import { Link} from "react-router-dom";



export default function InputExpenseDone() {
  return (
    <>
        <Header />
        <div className='whiteshadow'></div>
        <div className='inputincomedown expense_color expense_text_color'><p>保存されました</p></div>
        <Link to ="/input" ><div className='inputincomeback expense_color expense_text_color'><p>入力に戻る</p></div></Link>
        <Footer /> 
        
    </>
  )
}
