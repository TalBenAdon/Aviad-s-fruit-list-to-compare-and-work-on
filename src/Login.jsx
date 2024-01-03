import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ setLoggedIn }) {
    const nav = useNavigate()
    return (
        <div>
            <h1>Login</h1>
            <h3>Welcome! Please log in</h3>


            <button onClick={() => {
                setLoggedIn(true)
                nav('/')
            }}>🧧</button>


        </div>
    )
}
