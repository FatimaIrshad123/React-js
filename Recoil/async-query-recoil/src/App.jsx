import { useState,useEffect } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from './Atom'
import axios from 'axios'

function App(){
  return(
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {  
  const [networkCount,setNetworkCount] = useRecoilState(notifications)
  const totalNotification = useRecoilValue(totalNotificationSelector)

  // useEffect(() => {
  //   axios.get('https://sum-server.100xdevs.com/notifications')
  //   .then ((res) => setNetworkCount(res.data))
  // },[])    *use selector instead of this
  
  return (
    <>
      <button>Home({totalNotification})</button>
      <button>My network({networkCount.network})</button>
      <button>Job({networkCount.jobs})</button>
      <button>Notification({networkCount.notifications})</button>
      <button>Messages({networkCount.messaging})</button>
      <button>Me</button>
    </>
  )
}

export default App
