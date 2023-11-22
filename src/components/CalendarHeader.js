import React from "react";
import dayjs from 'dayjs';
import { useEffect, useState, useContext } from 'react';

export default function CalendarHeader(){
    const GlobalContext = React.createContext({
        monthIndex: 0,
        setMonthIndex: (index) => {},
      });
      const { monthIndex, setMonthIndex } = useContext(GlobalContext);
      const handleReset = () => {
        // 現在の月を取得
        setMonthIndex(dayjs().month());
      };
      return(
        <>
         <button onClick={handleReset} className="border rounded py-2 px-4 mr-5"></button>
        </>
      )
}