import React from 'react'
import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [title , setTitle] = useState('Fatima')

  return (
    <div>
    {/* <HeaderWithButton /> */}
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

// function HeaderWithButton(){
//   const [title , setTitle] = useState('Fatima')
//   function UpdateTitle(){
//     setTitle(Math.random())
//   }
//   return (
//     <div>
//       <button onClick={UpdateTitle}>Update Title</button>
//       <Header title={title}></Header>
//     </div>
//   )
// }


export default App
