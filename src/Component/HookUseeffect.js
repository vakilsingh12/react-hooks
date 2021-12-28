import React, { useEffect, useState } from 'react'

function HookUseeffect() {
  const [count, setCount] = useState(0);
  const [name, setname] = useState('')
  useEffect(()=>{
    console.log("hello");
    document.title=`you clicked ${count} times`
  },[count]) //here agar app count deta pass karta ho to means effect is depends on state if i will pass empty array then means our state and props not depends this and don't run useEffect again
  return (  
    <div>
    <h1>{name}</h1>
    <input type="text" value={name} onChange={e=>setname(e.target.value)}/>
    <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default HookUseeffect
