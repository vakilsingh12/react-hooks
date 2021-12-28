import React,{useState} from 'react'

function HookCounterTwo() {
  const [Count, setCount] = useState(0);
  const increment = () => {
      for (let i = 0; i <=9; i++) {
      setCount(Count=>Count+1)
      }
    }
  return (
    <div>
      <h1>Hooks : {Count}</h1>
      <button onClick={increment}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo