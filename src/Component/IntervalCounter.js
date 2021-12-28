import React,{useState,useEffect} from 'react'

function IntervalCounter() {
  const [count, setCount] = useState(0);
  const tick=()=>{
    setCount(prevcount=>prevcount+1)
  }
  useEffect(()=>{
    console.log("effect run");
    let interval=setInterval(tick,1000);
    return ()=>{
      clearInterval(interval)
    }
  },[])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default IntervalCounter
