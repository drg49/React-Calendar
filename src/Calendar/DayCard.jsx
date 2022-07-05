import React from 'react';

export default function DayCard({ day, dayNumber }) {

  return (
    <div
      id="day-card"
      onClick={() => console.log(day)}
    >
      {dayNumber}
    </div>
  )
}