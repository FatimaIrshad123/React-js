import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import Render from '../Render'
import axios from 'axios'



function useTodos(n) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
    }, n*1000)
   
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      return (() => {
        clearInterval(value)
      })
    }, [n])
    return {todos,loading}
  }
  export default function AutoRefreshingHook() {
    const {todos,loading} = useTodos(5);
    // const { loading } = useTodos()
    if (loading){
      return(
        <div>Loading...</div>
      )
    }
    return (
      <>
        {todos.map(todo => <Track todo={todo} />)}
      </>
    )
  }
  function Track({ todo }) {
    return <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  }