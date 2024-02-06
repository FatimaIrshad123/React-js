import React from 'react'
import { useState,useEffect } from 'react'

function useIsOnline(){
    const [isOnline,setisOnline] = useState(window.navigator.onLine)
    useEffect(() => {
      window.addEventListener('online', () => setisOnline(true));
      window.addEventListener('offline', () => setisOnline(false));
    },[])
    return isOnline;
  }
export default function isOnline(){
    const online = useIsOnline()
    if (online){
      return <div>You are online</div>
    }
    return(
      <div>
        You are offline
      </div>
    )
  }