import React from 'react'
function Button(props) {
  return (
    <div>
      <button style={{padding:'5px 15px',cursor:'pointer'}} onClick={props.handleClick}>{props.children}</button>
    </div>
  )
}

export default Button
