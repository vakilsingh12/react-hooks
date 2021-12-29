import React, { useMemo, useState } from 'react'

function Counter() {
  const [counter1, setcounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const incrementOne = (params) => {
    setcounter1(counter1+1)
  }
  const incrementTwo = (params) => {
    setCounter2(counter2+1)
  }
  const isEven = useMemo(() => {
    let i=0;
    while(i<2000000000) i++
    return counter1%2===0
  },[counter1])
  return (
    <div>
    <h1>{counter1} , {counter2}</h1>
    <h1>{isEven?"Even":"Odd"}</h1>
      <button onClick={incrementOne}>Increment1</button>
      <button onClick={incrementTwo}>Increment2</button>
    </div>
  )
}

export default Counter
