import React from 'react'
import { useState,useEffect } from 'react'

function useInterval(fn,timeout){
    useEffect(() => {
      setInterval(() => {
        fn(),
        timeout
      },1000)
    },[])
  }
 export default function Interval(){
    const [count, setCount] = useState(0);
    useInterval(() => {
      setCount(c => c+1);
    }, 1000)
    return (
      <>
        Timer is at {count}
      </>
    )
  }  