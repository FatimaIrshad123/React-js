import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import PointerHook from './hooks/UseMousePointerHook'
import Dimension from './hooks/Windowheight&width'
import SearchBar from './hooks/UseDebounceHook'



function App(){
  
  return (
    <>
      <SearchBar />
    </>
  )
}
export default App
