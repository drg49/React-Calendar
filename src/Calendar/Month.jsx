import React from 'react';
import * as utils from '../utils';

export default function Month() {
  // An integer representing the month of the year
  const [month, setMonth] = React.useState(utils.now.getMonth());
  // THe current year
  const [year, setYear] = React.useState(utils.now.getFullYear());
  
  const increaseMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      return setMonth(0);
    }

    return setMonth(month + 1);
  }

  const decreaseMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      return setMonth(11);
    }
    
    return setMonth(month - 1);
  }

  return (
    <>
      <div id="month">
        <button
          className="btn"
          onClick={decreaseMonth}
        >
          &#10094;
        </button>
        <span>
          {utils.displayMonth(month)}
        </span>
        <button
          className="btn"
          onClick={increaseMonth}
        >
          &#10095;
        </button>
      </div>
      <span>{year}</span>
    </>
  )
}
