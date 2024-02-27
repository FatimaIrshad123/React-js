import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilStateLoadable, useRecoilValue } from 'recoil'
import { TodoAtomFamily } from './atom'

function App() {
  
  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
    </RecoilRoot>
  )
}

// suspense , error boundary
function Todo({id}){
  const [todoFamily,setTodoFamily] = useRecoilStateLoadable(TodoAtomFamily(id))
   console.log(todoFamily.state)

  if (todoFamily.state === 'loading'){
    return (
      <div>Loading...</div>
    )
  }
  else if(todoFamily.state === 'hasValue'){
    return (
      <div>
        {todoFamily.contents.title}
        {todoFamily.contents.description}
      </div>
    )
  }
  
}
export default App
