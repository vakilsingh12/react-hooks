import React, { useEffect,useState,useRef } from 'react'

function HookCounter() {
  const [counter, setCounter] = useState(0)
  const ref = useRef()
  useEffect(()=>{
    ref.current=setInterval(()=>{
      setCounter(counter=>counter+1)
    },1000)
    return ()=>{
      clearInterval(ref.current)
    }
  },[])
  return (
    <div>
     <h1>Hook counter{counter}</h1>
     <button onClick={()=>clearInterval(ref.current)}>Clear Interval</button>
    </div>
  )
}

export default HookCounter
