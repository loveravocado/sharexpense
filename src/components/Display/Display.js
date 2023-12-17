import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import DisplayTotal from './DisplayTotal'
import Calendar from './Calendar'
import "./Display.css";
import '../../App.css';
import icon_income from "../../img/sharexpense_icon_income.png";
import icon_expense from "../../img/sharexpense_icon_expense.png";
import icon_saving from "../../img/sharexpense_icon_saving.png";

export default function Display(){

    return (
      <> 
          <Header name="12月のオカネ事情" headercolor= "beige_header-box"/>
          <div className="input back_default">
            <div className='input_all'>
              <div className='input_size'>
                <DisplayTotal />

              </div>
            </div>
          </div>
          <Footer />
          
        
      </>
    )

}