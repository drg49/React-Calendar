import React from 'react';

export default function Month({ month }) {
  
  return (
    <div id="month">
      <button class="btn">&#10094;</button>
      <span>{month}</span>
      <button class="btn">&#10095;</button>
    </div>
  )
}
