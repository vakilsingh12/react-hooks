import React from 'react'

function Title() {
  console.log("title componenet");
  return (
    <div>
      <h1>Callback Hook</h1>
    </div>
  )
}

export default React.memo(Title)
