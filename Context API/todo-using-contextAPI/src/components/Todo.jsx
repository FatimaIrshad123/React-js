import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

export default function Todo(){
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const {todo,setTodo} = useContext(TodoContext)
    
    const titleChange = (e) => {
        setTitle(e.target.value)
    }

    const descriptionChange = (e) => {
        setDescription(e.target.value)        
    }
    
    function CreateTodo(e){
        e.preventDefault()
        setTodo({title,description})
        
        let y = document.createElement('h2')
        y.innerHTML = 'Title :' +todo.title
        let z = document.createElement('h3')
        z.innerHTML = 'Description :' +todo.description

        return( 
            <div>
                {document.getElementById('todo').appendChild(y)}
                {document.getElementById('todo').appendChild(z)}
            </div>
            )    
    }
    
    return (
        <div>
            Title : <input type='text' value={title} onChange={titleChange}></input>
            <br /><br />
            Description : <input type='text' value={description} onChange={descriptionChange}></input>
            <br></br><br></br>
            <button onClick={CreateTodo}>Add Todo</button>
            <br /><br />
            <div id="todo"></div>               
        </div>
    )
}