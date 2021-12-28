import React,{useReducer} from 'react'

const initialState=0;
const reducer=(state,action)=>{
      switch(action){
        case 'increment':
          return state+1
        case 'decrement':
          return state-1
        case 'reset':
          return initialState
        default:
          return state
      }
}
function CounterThree() {

  const [count, dispatch] = useReducer(reducer, initialState);
  const [cTwo, dispatch2] = useReducer(reducer, initialState);
  return (
    <>
    <div>{count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      <div>{cTwo}</div>
      <button onClick={()=>dispatch2('increment')}>Increment</button>
      <button onClick={()=>dispatch2('decrement')}>Decrement</button>
      <button onClick={()=>dispatch2('reset')}>Reset</button>
    </>
  )
}

export default CounterThree
