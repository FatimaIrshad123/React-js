import React from 'react'
import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [title , setTitle] = useState('Fatima')

  return (
    <div>
    <button onClick={()=> {setTitle(Math.random())}}>Update Title</button>
    <Header title={title}></Header>
     <Header title='xyz'></Header>
     <Header title='xyz'></Header>
     <Header title='xyz'></Header>
     <Header title='xyz'></Header>
  </div> 
  )
}

// React.memo prevent un-neccessary re-renders
const Header = React.memo(function ({title}){
  return (
    <div>
       <p> My Name is {title}</p>
    </div>
  )
})


export default App
