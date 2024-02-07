import { useContext, useState } from 'react'
import './App.css'
import { Countcontext} from './context/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Countcontext.Provider value={{count,setCount}}>
        <Count />
      </Countcontext.Provider>
      
    </div>
  )
}

function Count(){
  return (
    <div>
      <Button />
      <CountRender />
   </div>
  )
}

function CountRender(){
  const {count} = useContext(Countcontext)
  return (
    <div>
      {count}
    </div>
  )
}

function Button(){
  const {count,setCount} = useContext(Countcontext)
  
  return (
     <div>
       <button onClick={() => {setCount(count+1)}}>Increase</button>
       <button onClick = {() => {setCount(count-1)}}>Decrease</button>
     </div>
  )
}

export default App
