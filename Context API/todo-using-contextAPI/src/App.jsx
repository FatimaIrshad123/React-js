import { useState } from 'react'
import './App.css'
import TodoContext from './context/TodoContext'
import TodoContextProvider from './context/TodoContextProvider'
import Todo from './components/Todo'

function App() {
  
  return (
    <div>
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    </div>
  )
}

export default App
