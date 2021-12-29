import React, {useState } from 'react'
import useDocumentTitle from '../customHooks/useDocumentTitle'

function DocTitleOne() {
  const [count, setCount] = useState(0)
  useDocumentTitle(count)
  return (
    <div>
      <button onClick={()=>setCount(count+10)}>Increment-{count}</button>
    </div>
  )
}

export default DocTitleOne
