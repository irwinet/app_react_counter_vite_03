/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);

  // eslint-disable-next-line no-unused-vars
  const handleAdd = (event) => {
    // console.log(event)
    setCounter(counter+1);
    // setCounter((c) => c+1);
  }  

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }>
            +1
        </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,    
}
