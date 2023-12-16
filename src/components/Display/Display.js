import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import DisplayExpense from './DisplayExpense'
import Calendar from './Calendar'
import "./Display.css";

export default function Display(){

    return (
      <> 
          <Header name="12月のオカネ事情" headercolor= "beige_header-box"/>
          <div className="input back_default">
            <div className='input_all'>
              <div className='input_size'>
                <div className='calendar'><Calendar /></div>
              </div>
            </div>
          </div>
          <Footer />
          
        
      </>
    )

}