import { useState,useRef,useEffect } from 'react'

function App() {
  const [incomeTax, setIncomeTax] = useState(0)
const divRef = useRef()

useEffect(() => {
        setTimeout(() => {
          console.log(divRef.current)
          divRef.current.innerHTML = 10
        },2000)
},[])

  return (
    <div>
      Hi there your income tax returns are here<div ref={divRef}>{incomeTax}</div>
        
    </div>
  )
}

export default App
