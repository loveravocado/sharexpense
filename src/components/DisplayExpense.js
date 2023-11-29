import { collection, getDocs, getFirestore,  } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
import { db } from "../firebase";
import "../App.css"



export default function DisplayExpense(){
    const [sumExpense, setSumExpense] = useState();
    const [expenses, setExpenses] = useState([]);


      

    useEffect(() => {
      const expensedata = collection(db, "expense")
      getDocs(expensedata).then((detail) => {
        setExpenses(detail.docs.map((doc) => ({...doc.data()})));
        
      })
    }, []);
    const total = expenses.reduce((sum, i) => sum + i.amount, 0);

 

    return(
        <>
        <div className="displayexpense">
        <div>出費一覧</div>
        {expenses.map((expense) => (
            <div key={expense.item}>
                <div>{expense.item}</div>
                <div>{expense.amount}</div>
                <div>{expense.time}</div>
            </div>
        
          ))}
    <div>合計値：{total}円</div> 
    </div> 
        </>
    
    )
}