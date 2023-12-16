import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function InputSavingDone() {
  return (
    <>
    <Header />
    <div className='whiteshadow'></div>
    <div className='inputincomedown saving_color'><p>保存されました</p></div>
    <Link to ="/input" ><div className='inputincomeback saving_color'><p>入力に戻る</p></div></Link>
    <Footer /> 
    
</>
  )
}
