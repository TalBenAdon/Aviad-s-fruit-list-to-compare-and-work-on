import React from 'react'

export default function LoginInput({ label, name, type, handleChange }) {
    return (
        <div className='login-inputs'>
            <label >
                {label}
            </label>
            <input className='input' type={type} name={name} onChange={handleChange} />
        </div>
    )
}
