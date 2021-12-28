import React,{useContext} from 'react'
import {CountContext} from '../App';
function CounterD() {
  const context = useContext(CountContext);
  return (
    <div>
    <h1>Counter D {context.countState}</h1>
      <button onClick={()=>context.countDispatch("increment")}>increment</button>
      <button onClick={()=>context.countDispatch("decrement")}>decrement</button>
      <button onClick={()=>context.countDispatch("reset")}>reset</button>
    </div>
  )
}

export default CounterD
