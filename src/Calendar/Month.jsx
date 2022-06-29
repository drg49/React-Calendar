import React from 'react';
import * as utils from '../utils';

export default function Month() {
  const [month, setMonth] = React.useState(utils.now.getMonth());
  
  const increaseMonth = () => month === 11 ? setMonth(0) : setMonth(month + 1);

  const decreaseMonth = () => month === 0 ? setMonth(11) : setMonth(month - 1);

  return (
    <div id="month">
      <button
        class="btn"
        onClick={decreaseMonth}
      >
        &#10094;
      </button>
      <span>
        {utils.displayMonth(month)}
      </span>
      <button
        class="btn"
        onClick={increaseMonth}
      >
        &#10095;
      </button>
    </div>
  )
}
