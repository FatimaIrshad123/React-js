import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value,setValue] = useState()
  //memonization means remembering some output given an input and not computing it again
  
  function Counter(){
    setCount(count + 1)
  }

  let sum = useMemo(() => {
    let sum = 0;
    for (let i = 1; i<= value; i++){
      sum = sum + i
    }
    return sum
  },[value])
  
  return (
    <div>
      <input type='Number' onChange={(e) => {setValue(e.target.value)}}></input>
      <button onClick={Counter}>Count : {count}</button>
      <div>The sum of {value} is {sum}</div>
    </div>
  )
}

export default App
