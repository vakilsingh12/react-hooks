import React, { useState } from 'react'
import HookUseeffect2 from './HookUseeffect2';
function HookContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {display && <HookUseeffect2/>}
    </div>
  )
}

export default HookContainer
