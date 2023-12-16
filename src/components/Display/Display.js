import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import DisplayExpense from './DisplayExpense'
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
                <div className='display_four'>
                    <div className="display_box income_box back_income">
                      <img className= "display_four_icon four_income" src= {icon_income} alt="income"/><p className="display_text_contents">収入</p>
                    </div>
                    <div className="display_box expense_box back_expense">
                      <img className="display_four_icon four_expense" src={icon_expense} alt="expense"/><p className="display_text_contents expense_text_color">支出</p>
                    </div>
                    <div className="display_box saving_box back_saving">
                      <img className="display_four_icon four_saving" src={icon_saving} alt="saving"/><p className="display_text_contents">貯金</p>
                    </div>
                    <div className="display_box rest_box">
                      <img className="display_four_icon four_rest" src={icon_expense} alt="rest"/><p className="display_text_contents expense_text_color">残高</p>
                    </div>
                </div>
                <div className="sidebar"><p className="monthnumber">12月</p></div>
                <div className='calendar'><Calendar /></div>
              </div>
            </div>
          </div>
          <Footer />
          
        
      </>
    )

}