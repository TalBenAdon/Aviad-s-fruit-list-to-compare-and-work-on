import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginInput from './LoginInput'

export default function Login({ setSavedUserInfo, setLoggedIn }) {
    const nav = useNavigate()
    const [userInfo, setUserInfo] = useState({ userName: '', password: '' })
    useEffect(() => {
        if (localStorage.user) {
            let userInfo = JSON.parse(localStorage.user)
            setSavedUserInfo(userInfo)
            setLoggedIn(true)
            nav('/')
        }
    }, [])



    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post('https://jbh-mockserver.onrender.com/login', userInfo)
            .then(response => {
                if (response.data.status) {

                    setSavedUserInfo(response.data.user)
                    setLoggedIn(true)
                    nav('/')
                    localStorage.user = JSON.stringify(response.data.user)
                }

            })
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setUserInfo(oldInfo => {
            const newInfo = { ...oldInfo, [name]: value }
            return newInfo
        })

    }

    const inputList = [{ type: 'text', name: 'userName', label: 'User Name' }, { type: 'password', name: 'password', label: 'Password' }]
    return (
        <div>
            <form className='login-form' onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className='line'></div>
                {inputList.map(input => {
                    return <LoginInput key={input.label} label={input.label} type={input.type} name={input.name} handleChange={handleChange} />
                })}
                <button type='submit'>

                </button>
            </form>
        </div>
    )

}