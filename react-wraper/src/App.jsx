import { useState } from 'react'


function App() {
  return (
    <div>
    <CardWrapper><TextComponent /></CardWrapper>
    <CardWrapper >Hello</CardWrapper>
    </div>
  )
  
}

function TextComponent(){
  return (
  <div>
    Hi there
  </div>
  )
}

function CardWrapper({children}){
  return(
  <div style={{border : '2px solid black', padding:'20px'}}> 
    {children}
  </div>
  )
}

export default App
