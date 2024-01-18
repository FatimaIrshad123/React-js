import { useState } from 'react'
import './App.css'
import { Profile } from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Profile />
    </div>
  )
}

export default App
