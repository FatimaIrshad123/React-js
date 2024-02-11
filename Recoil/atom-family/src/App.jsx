import { useState,useEffect } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
// import { Todo } from './Todo'
import {  todoAtomFamily } from './atom'

function App() {
  
  return (
    <RecoilRoot>
      <UpdatedTodo id={1}/>
      <Todos id={2} />
      <Todos id={1} />
    </RecoilRoot>
  )
}

function UpdatedTodo({id}){
  const updateTodo = useSetRecoilState(todoAtomFamily(id))

  useEffect(() => {
    setTimeout(() => {
      updateTodo({id : 2,title:'todo3',description:'todo'})
    },2000)
  },[])
  
  return(
    <div></div>
  )
}

function Todos({id}){
  const currentTodo = useRecoilValue(todoAtomFamily(id))
  return(
    <div>
      <h3>{currentTodo.title }</h3>
      {currentTodo.description}      
    </div>
  )
}
export default App
