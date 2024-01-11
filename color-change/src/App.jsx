import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState(0)

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='flex flex-wrap fixed justify-center buttom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap fixed justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor('red')}>Red</button>
            
            <button onClick={() => setColor('green')}>Green</button>
            <button onClick={() => setColor('blue')}>Blue</button>
        </div>

      </div>
      </div>
  )
}

export default App
