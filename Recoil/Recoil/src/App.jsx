import { useState ,useMemo} from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobAtom, messageAtom, networkAtom, notificationAtom, totalNoticationCount } from './atoms'

function App(){
  return (
      <RecoilRoot>
        <Main />
      </RecoilRoot>
  )
}

function Main() {
    const networkCount = useRecoilValue(networkAtom)
    const jobCount = useRecoilValue(jobAtom)
    const messageCount = useRecoilValue(messageAtom)
    const [notificationCount,setNotificationCount] = useRecoilState(notificationAtom)
    const totalNotificationCounts = useRecoilValue(totalNoticationCount)  
    // selector is used in place of usememo
//  const totalNotification = useMemo(() => {
//   return networkCount+jobCount+messageCount+notificationCount
// },[networkCount,jobCount,messageCount,notificationCount])


    return (
    <>
      <button >Home ({totalNotificationCounts})</button>
      <button>My Network({networkCount >= 100 ? '99+' : networkCount})</button>
      <button>Job({jobCount})</button>
      <button>Messaging({messageCount})</button>
      <button>Notification({notificationCount})</button>
      <button onClick={() => {setNotificationCount(notificationCount+1)}}>Me</button>
      </>
  )
}

export default App
