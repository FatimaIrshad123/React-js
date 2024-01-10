import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  let addcounter = () => {setCount(count +1)}
  
  let deletecounter = () => {setCount(count -1)}
  return (
    <>
      {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
      <button onClick={addcounter}>Add Counter {count < 10? count : count = 10}</button>
      <br /> <br />
      <button onClick={deletecounter}>Delete Counter {count > 0 ? count : count = 0}</button>
    </>
  )
}

// function CustomButton(props){
 
//   function count1(){
//     props.setCount(props.count + 1)
//   }
//   return <button onClick={count1}>
//       Counter {props.count}
//     </button>
  
// }
export default App
