import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateExpense from './CreateExpense'
import CreateSaving from './CreateSaving'
import { useEffect, useState, useContext } from 'react';
import { UserName } from './Home'; 

export default function Input() {
  const username = useContext(UserName);
  console.log({username})
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
