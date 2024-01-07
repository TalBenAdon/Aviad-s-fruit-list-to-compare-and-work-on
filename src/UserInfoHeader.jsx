import React from 'react'
import UserContext from './context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
export default function UserInfoHeader() {

    const nav = useNavigate()

    const handleOnclick = () => {
        if (localStorage.user) {
            localStorage.removeItem('user')
            nav('/login')
        }
    }

    const { savedUserInfo } = useContext(UserContext)
    console.log(savedUserInfo);
    return (
        <div className='header-container'>
            <button onClick={handleOnclick}>
                Logout
            </button>
            <img src={savedUserInfo.avatar} alt="" />
            {`Hello, ${savedUserInfo.userName}!`}
        </div>
    )
}
