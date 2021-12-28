import React,{useReducer} from 'react'

function CounterTwo() {
  const initialState={
    fname:0,
    scount:0
  };
  const reducer = (state,action) => {
    switch(action.type){
      case "increment":
        return {...state,fname:state.fname+action.value}
      case "increment2":
        return {...state,scount:state.scount+action.value}
      default:
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>{count.fname}</h1>
      <h1>{count.scount}</h1>
      <button onClick={()=>dispatch({type:"increment",value:1})}>Increment By 1</button>
      <button onClick={()=>dispatch({type:"increment",value:5})}>Increment By 5</button>
      <button onClick={()=>dispatch({type:"increment2",value:5})}>Increment2 By 5</button>
    </div>
  )
}

export default CounterTwo
