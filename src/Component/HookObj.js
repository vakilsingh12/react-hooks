import React, { useState } from 'react'

function HookObj() {
  const [name, setName] = useState({fname:"",lname:""});
  return (
    <div>
      <form action="">
        <input type="text" value={name.fname} onChange={e=>setName({...name,fname:e.target.value})}/><br />
        <input type="text" value={name.lanme} onChange={e=>setName({...name,lname:e.target.value})}/><br />
        <h1>{name.fname} {name.lname}</h1>
        <h1>{JSON.stringify(name)}</h1>
      </form>
    </div>
  )
}

export default HookObj
