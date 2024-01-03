import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"; 
import { useEffect, useState,useContext } from 'react';
import dayjs from 'dayjs';
import React from "react";
import { db } from "../../firebase";
import "../../App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, provider, username } from "../../firebase";
import icon_income from "../../img/sharexpense_icon_income.png";
import icon_expense from "../../img/sharexpense_icon_expense.png";
import icon_saving from "../../img/sharexpense_icon_saving.png";
import "./Display.css";
import { Link } from "react-router-dom";



export default function DisplayTotal(){

    const [diexuid, setDiexuid] = useState();

    onAuthStateChanged(auth, (user) => {
      if (user) {
          setDiexuid(user.uid)
          }
      })

    return(
        <>
        <div className="displayexpense">
        {diexuid ? (
            <>
            <DisplayTotalData  uid={diexuid}/>
            </>
            ) :("")}
    </div> 
        </>
    
    )
}
function getMonth(month = dayjs().month()){
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}
function CalendarHeader(){
  const [monthIndex, setMonthIndex] =useState(0);
  const handlePrevMonth = () => {
    
    setMonthIndex(monthIndex - 1);
  };
  const handelNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  useEffect(() => {
    // setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return(
    <>


    </>
  )
}
const Day = (props) => {
  const { day, rowIdx, incomes, expenses } = props;
  
  const currentlocation = day.format("YYYY-MM-DD");

  const getCurrentDayClass = () => {
      return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
        ? "bg-blue-600 text-white rounded-full w-7"
        : "";
    };

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && <p className="line_height ">{day.format("ddd")}</p>}
        <p className={`line_height  text-center " ${getCurrentDayClass()}`}></p>
        <p className={"line_height  text-center"}>{day.format("DD")}</p>
        {rowIdx === 0 ? (<p className="week_margin" ></p>) : ("")}
        
        <p>{incomes.map((income) => (
            <div className="list_income" key={income.item}>
                <div>{income.date === currentlocation ? 
                (<>{income.amount}</>):("")}</div>
            </div>
        
          ))}</p>
        <p>{expenses.map((expense) => (
            <div className="list_expense" key={expense.item}>
                <div>{expense.date === currentlocation ? 
                (<>{expense.amount}</>):("")}</div>
            </div>
        
          ))}</p>
      </header>
    </div>
  );
};
const Month = (props) => {
  const { month, incomes, expenses } = props;
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 ">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} incomes={incomes} expenses={expenses}/>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
function DisplayTotalData({uid}){
  const m = new Date();
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [monthIndex, setMonthIndex] =useState(m.getMonth() );
  const handlePrevMonth = () => {
    
    setMonthIndex(monthIndex - 1);
  };
  const handelNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);


  useEffect(() => {
    const f = async() => {
    const incomedata = query(collection(db, "income"), where("uid", "==", uid))
    const expensedata = query(collection(db, "expense"), where("uid", "==", uid))
    const savingdata = query(collection(db, "saving"), where("uid", "==", uid))

    getDocs(incomedata).then((detail) => {
      setIncomes(detail.docs.map((doc) => ({...doc.data()})));  
    })
    getDocs(expensedata).then((detail) => {
      setExpenses(detail.docs.map((doc) => ({...doc.data()})));  
    })
    getDocs(savingdata).then((detail) => {
      setSavings(detail.docs.map((doc) => ({...doc.data()})));  
    })
  }
  f();
  }, []);


  

  const total_income = incomes.reduce((sum, i) => sum + i.amount, 0);
  const total_expense = expenses.reduce((sum, i) => sum + i.amount, 0);
  const total_saving = savings.reduce((sum, i) => sum + i.amount, 0);
  const total_rest = total_income - (total_expense + total_saving);

  return(
    <>

            
          <div className='display_four'>
            <div className="display_box income_box back_income">
              <img className= "display_four_icon four_income" src= {icon_income} alt="income"/>
              <p className="display_text_contents">収入</p><p className="total">{total_income}円</p>
            </div>
            <div className="display_box expense_box back_expense">
              <img className="display_four_icon four_expense" src={icon_expense} alt="expense"/>
              <p className="display_text_contents expense_text_color">支出</p><p className="total">{total_expense}円</p>
            </div>
            <Link to ="saving_detail" className="display_box saving_box back_saving">
              <img className="display_four_icon four_saving" src={icon_saving} alt="saving"/>
              <p className="display_text_contents">貯金</p><p className="total">{total_saving}円</p>
            </Link>
            <div className="display_box rest_box">
              <img className="display_four_icon four_rest" src={icon_expense} alt="rest"/>
              <p className="display_text_contents expense_text_color">残高</p><p className="total">{total_rest}円</p>
            </div>
          </div>

          <div className="calendar">

          <div className="sidebar">
          <p className="monthnumber">{dayjs(new Date(dayjs().year(), monthIndex )).format("YYYY MM月")}</p>
      <button className="sidebar_btn_left" onClick={handlePrevMonth}>先月</button>
      
      <button className="sidebar_btn_light" onClick={handelNextMonth}>来月</button>
      </div>
        <div className="h-2 flex flex-col ">
        <div className="flex flex-1 ">
          <Month month={currentMonth} incomes={incomes}expenses={expenses} />
        </div>
    </div>
          </div>

    </>
  )
}

