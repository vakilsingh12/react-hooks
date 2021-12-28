import React, { useState } from 'react'

function HookArray() {
  const [number, setNumber] = useState([])
  console.log(number);
  const handle = () => {
    setNumber([...number,{
      id:number.length,
      value:Math.floor(Math.random()*10)+1
    }])
  }
  return (
    <div>
    <button onClick={handle}>Add Number</button>
    <ul>
      {number.map(res=><li key={res.id}>Number is : {res.value}</li>)}
    </ul>
    </div>
  )
}

export default HookArray
