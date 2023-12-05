import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
import { db } from "../firebase";
import "../App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, provider, username } from "../firebase";



export default function DisplayExpense(){

    const [diexuid, setDiexuid] = useState();

    onAuthStateChanged(auth, (user) => {
      if (user) {
          setDiexuid(user.uid)
          }
      })

    return(
        <>
        <div className="displayexpense">
        <div>出費一覧</div>
        {diexuid ? (
            <>
            <DisplayExpenseData  uid={diexuid}/>
            </>
            ) :("")}
    </div> 
        </>
    
    )
}
function DisplayExpenseData({uid}){
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const f = async() => {
    const expensedata = query(collection(db, "expense"), where("uid", "==", uid))
    getDocs(expensedata).then((detail) => {
      setExpenses(detail.docs.map((doc) => ({...doc.data()})));
      
    })
  }
  f();
  }, []);
  const total = expenses.reduce((sum, i) => sum + i.amount, 0);

  return(
    <>
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