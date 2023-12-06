import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateExpense from './CreateExpense'
import CreateSaving from './CreateSaving'
import { useEffect, useState, useContext } from 'react'; 

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
