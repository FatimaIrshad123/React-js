import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos,setTodo] = useState([])

  useEffect( () => {
      setInterval(() => {
        fetch('https://sum-server.100xdevs.com/todos')
        .then(async function (res){ 
        const json = await res.json()
         setTodo(json.todos)
        })

      },2000)    
    
    },[])
  
  return <div>

        {todos.map(todo => <Todo key = {todo.id} title={todo.title} description={todo.description}></Todo>)}
    </div>
  
}

function Todo({title,description}){
  return (
  <div>
  <h2>{title}</h2>
  <h3>{description}</h3>
  </div>
  )
}
export default App
