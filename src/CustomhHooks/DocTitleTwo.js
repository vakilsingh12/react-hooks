import React, {useState } from 'react'
import useDocumentTitle from '../customHooks/useDocumentTitle'

function DocTitleTwo() {
  const [count, setCount] = useState(0)
  useDocumentTitle(count)
  return (
    <div>
      <button onClick={()=>setCount(count+5)}>Increment-{count}</button>
    </div>
  )
}

export default DocTitleTwo
