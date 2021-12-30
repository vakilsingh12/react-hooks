import React from 'react'
import useCounter from './useCounter'

function CounterOne() {
  const [count,increment,decrement,reset]=useCounter(0,1)
  return (
    <div>
    <h1>Count={count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterOne
