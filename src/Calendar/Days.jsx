import React from "react";
import * as utils from '../utils';
import DayCard from "./DayCard";

export default function Days() {
  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
  
  const daysMapper = getDaysInMonth(
    utils.now.getMonth(),
    utils.now.getFullYear()
  ).map((day, index) => {
    console.log(day, index + 1)
    return (
      <DayCard 
        dayNumber={index + 1}
        day={day}
      />
    )
  })

  return <div id="calendar">{daysMapper}</div>;
}
