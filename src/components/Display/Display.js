import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import DisplayTotal from './DisplayTotal'
import "./Display.css";
import '../../App.css';

export default function Display(){

    return (
      <> 
          <Header name="オカネ事情" headercolor= "beige_header-box"/>
          <div className="input back_default">
            <div className='input_all overscroll'>
              <div className='input_size'>
                <DisplayTotal />

              </div>
            </div>
          </div>
          <Footer />
          
        
      </>
    )

}