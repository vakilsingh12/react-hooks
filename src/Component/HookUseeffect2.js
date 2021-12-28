import React, { useEffect, useState } from 'react'

function HookUseeffect2() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0)
  const handle = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(()=>{
    console.log("useEffect method");
    window.addEventListener('mousemove',handle);
    return ()=>{
      window.addEventListener('mousemove',handle);
    }
  },[])
  return (
    <div>
      <h1>Hooks-X axies {x}, Y-axies {y}</h1>
    </div>
  )
}

export default HookUseeffect2
