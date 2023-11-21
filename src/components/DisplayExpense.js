import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
import db from "../firebase";

export default function DisplayExpense(){
    const [expenses, setExpenses] = useState([]);
    useEffect(() => {
      const expensedata = collection(db, "expense")
      getDocs(expensedata).then((detail) => {
        console.log(detail.docs.map((doc) => ({...doc.data()})))
        setExpenses(detail.docs.map((doc) => ({...doc.data()})));
      })
    }, []);

    return(
        <>
        <div>出費一覧</div>
        {expenses.map((expense) => (
            <div key={expense.item}>
                <div>{expense.item}</div>
                <div>{expense.amount}</div>
            </div>
          ))}
        </>
    )
}