import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import DisplayExpense from './DisplayExpense'
import Calendar from './Calendar'

export class Display extends Component {
  render() {
    return (
      <div>
        <Header name="Display"/>
            <Calendar />
            <DisplayExpense />
        <Footer />
      </div>
    )
  }
}

export default Display
