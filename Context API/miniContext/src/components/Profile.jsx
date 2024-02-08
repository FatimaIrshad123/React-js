import React from 'react'
import {useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Profile(){
    const {user} = useContext(UserContext)
    if (!user) return <h1>Not loged in</h1>
    return (
        <div>
            Profile : {user.username}
        </div>
    )
}