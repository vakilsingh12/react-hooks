import React,{useContext} from 'react'
import {CountContext} from '../App';
function CounterF() {
  const context = useContext(CountContext);
  return (
    <div>
    <h1>Counter F {context.countState}</h1>
      <button onClick={()=>context.countDispatch("increment")}>increment</button>
      <button onClick={()=>context.countDispatch("decrement")}>decrement</button>
      <button onClick={()=>context.countDispatch("reset")}>reset</button>
    </div>
  )
}

export default CounterF

