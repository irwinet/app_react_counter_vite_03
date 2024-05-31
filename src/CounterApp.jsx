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

  const handleSubtract = () => setCounter(counter-1);

  const handleReset= () => setCounter(value);

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd } className='btn btn-primary'>
            +1
        </button>
        <button onClick={ handleSubtract } className='btn btn-primary'>
            -1
        </button>
        <button aria-label="btn-reset" onClick={ handleReset } className='btn btn-primary'>
            Reset
        </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,    
}
