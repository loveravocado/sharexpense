import { collection, getDocs, getFirestore, getAggregateFromServer,getCountFromServer, average, sum, query, where } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
import { db } from "../firebase";



export default function DisplayExpense(){
    const [sumExpense, setSumExpense] = useState();
    const [expenses, setExpenses] = useState([]);


      

    useEffect(() => {
      const expensedata = collection(db, "expense")
      getDocs(expensedata).then((detail) => {
        setExpenses(detail.docs.map((doc) => ({...doc.data()})));
      })
    }, []);
    console.log({expenses});
    const total = expenses.reduce((sum, i) => sum + i.amount, 0);
    // const CreateSum = async () =>{
    //     await getAggregateFromServer(orderQuery, {
    //         totalExpense: sum('amount')
    //     })
    //     setSumExpense(CreateSum.data().totalExpense);
    //     console.log('totalExpense: ', {sumExpense});
    // }  
 

    return(
        <>
        <div>出費一覧</div>
        {expenses.map((expense) => (
            <div key={expense.item}>
                <div>{expense.item}</div>
                <div>{expense.amount}</div>
                <div>{expense.time}</div>
            </div>
        
          ))}
    <div>合計値：{total}円</div>  
        </>
    )
}