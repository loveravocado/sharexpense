import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateExpense from './CreateExpense'

export default function Input() {
  return (
    <div>
        <Header name="Input"/>
            Input
            <CreateExpense />
        <Footer />
    </div>
  )
}
