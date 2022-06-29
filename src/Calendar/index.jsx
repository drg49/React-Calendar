import React from 'react';
import Month from './Month';
import * as utils from '../utils';

import './index.scss';

export default function Calendar() {
  const [month, setMonth] = React.useState(utils.now.getMonth());

  return (
    <>
      <Month month={utils.displayMonth(month)} />
    </>
  )
}
