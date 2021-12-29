import React,{useCallback, useState} from 'react'
import Button from './Button';
import Count from './Count'
import Title from './Title'

function Parent() {
  console.log("parent");
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(24000)
  const incrementAge = useCallback(()=> {
    setAge(age+1)
  },[age]) 
  const incrementSalary = useCallback(() => {
    setSalary(salary+500)
  },[salary])
  return (
    <div>
    <Title/>
    <Count text="Age" count={age}/>
    <Button handleClick={incrementAge}>Increment Age</Button>
    <Count text="Salary" count={salary}/>
    <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default Parent
