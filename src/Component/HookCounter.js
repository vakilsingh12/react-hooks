import React, { useState } from 'react';
function HookCounter() {
  const [count, setcount] = useState(0)
  return (
    <div>
      <button onClick={()=>setcount(count+100)}>Click Me{count}</button>
    </div>
  )
}

export default HookCounter
