import {useState} from 'react'

function useCounter(countVal=0) {
  const [count, setcount] = useState(countVal)
  const increment = (params) => {
    setcount(count=>count+1)
  }
  const decrement = (params) => {
    setcount(count=>count-1)
  }
  const reset = (params) => {
    setcount(countVal)
  }
  return [count,increment,decrement,reset]
}

export default useCounter
