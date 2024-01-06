import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginInput from './LoginInput'

export default function Login({ setSavedUserInfo }) {

    const [userInfo, setUserInfo] = useState({ userName: '', password: '' })

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post('https://jbh-mockserver.onrender.com/login', userInfo)
            .then(response => {
                setSavedUserInfo(response)
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