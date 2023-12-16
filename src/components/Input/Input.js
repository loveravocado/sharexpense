import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CreateExpense from '../Display/CreateExpense'
import CreateSaving from '../Display/CreateSaving'

export default function Input() {

  return (
    <div>
        <Header name="Input"/>
            Input
            <CreateExpense />
            <CreateSaving />
        <Footer />
    </div>
  )
}
