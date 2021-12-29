import React from 'react'
function Button(props) {
  console.log("button com");
  return (
    <div>
      <button style={{padding:'5px 15px',cursor:'pointer'}} onClick={props.handleClick}>{props.children}</button>
    </div>
  )
}

export default React.memo(Button)
