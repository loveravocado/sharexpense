import React from 'react';
import './Input.css';
import Header from '../Header';
import Footer from '../Footer';
import { Link} from "react-router-dom";



export default function InputIncomeDone() {
  return (
    <>
        <Header />
        <div className='whiteshadow'></div>
        <div className='inputincomedown income_color'><p>保存されました</p></div>
        <Link to ="/input" ><div className='inputincomeback income_color'><p>入力に戻る</p></div></Link>
        <Footer /> 
        
    </>
  )
}