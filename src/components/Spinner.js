import React from 'react';
import spinner from './Spinner-2.gif';

export default function Spinner() {
  return (
    <div className="text-center">
        <img src={spinner} alt="loading" />
    </div>
  )
}
