import React, { useEffect,useRef } from 'react'

function RefHooks() {
  const inputref = useRef(null)
  useEffect(()=>{
   inputref.current.focus()
  },[])
  return (
    <div>
      <input type="text" ref={inputref} />
    </div>
  )
}

export default RefHooks
