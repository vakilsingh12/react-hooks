import React,{useContext} from 'react'
import {userContext} from '../App';
function ComC() {
  const data=useContext(userContext);
  return (
    <div>
      {data}
    </div>
  )
}

export default ComC
