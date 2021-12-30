import {useState} from 'react'

function useCounter(countVal=0,value=0) {
  const [count, setcount] = useState(countVal)
  const increment = () => {
    setcount(count=>count+value)
  }
  const decrement = () => {
    setcount(count=>count-value)
  }
  const reset = () => {
    setcount(countVal)
  }
  return [count,increment,decrement,reset]
}

export default useCounter
