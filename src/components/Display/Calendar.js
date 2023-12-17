import dayjs from 'dayjs';
import React from "react";
import { useEffect, useState } from 'react';
import "../../App.css"; 
import './Display.css';



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
const Day = (props) => {
    const { day, rowIdx } = props;
    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
          ? "bg-blue-600 text-white rounded-full w-7"
          : "";
      };

    return (
      <div className="border border-gray-200 flex flex-col">
        <header className="flex flex-col items-center">
          {rowIdx === 0 && <p className="line_height">{day.format("ddd")}</p>}
          <p className={`line_height  text-center" ${getCurrentDayClass()}`}></p>
          <p className={"line_height  text-center"}>{day.format("DD")}</p>
          <p>a</p>
        </header>
      </div>
    );
  };
const Month = (props) => {
    const { month } = props;
    return (
      <div className="flex-1 grid grid-cols-7 grid-rows-5 ">
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} />
            ))}
          </React.Fragment>
        ))}
      </div>
    );
  };

export default function Calendar(){
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    return(
        <>
        <div className="sidebar"><p className="monthnumber">12月</p></div>
        <div className="h-2 flex flex-col ">
        <div className="flex flex-1 ">
          <Month month={currentMonth} />
        </div>
      </div>
        </>
    )
}