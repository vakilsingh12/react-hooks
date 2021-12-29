import React from 'react'

function Count(props) {
  console.log("count com");
  return (
    <div>
      <h1>{props.text} , {props.count}</h1>
    </div>
  )
}

export default React.memo(Count)
