import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  let addcounter = () => {setCount(count +1)}
  
  let deletecounter = () => {setCount(count -1)}
  return (
    <>
      <button onClick={addcounter}>Add Counter {count < 10? count : count = 10}</button>
      <br /> <br />
      <button onClick={deletecounter}>Delete Counter {count > 0 ? count : count = 0}</button>
    </>
  )
}


export default App
