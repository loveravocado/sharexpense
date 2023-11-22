import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import React from "react";
import "../App.css"; 



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
          {/* 1行目に曜日を表示 */}
          {rowIdx === 0 && <p className="text-sm mt-1">{day.format("ddd")}</p>}
          <p className={`text-sm p-1 my-1 text-center" ${getCurrentDayClass()}`}></p>
          <p className={"text-sm p-1 my-1 text-center"}>{day.format("DD")}</p>
        </header>
      </div>
    );
  };
const Month = (props) => {
    const { month } = props;
    return (
      <div className="flex-1 grid grid-cols-7 grid-rows-5">
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
        <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          {/* <Sidebar /> */}
          <Month month={currentMonth} />
        </div>
        <div>aaa</div>
      </div>
        </>
    )
}