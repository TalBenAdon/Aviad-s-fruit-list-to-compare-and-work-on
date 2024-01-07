import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import UserContext from './context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Categories() {
    const nav = useNavigate()
    const [cat, setCat] = useState({})

    const { loggedIn } = useContext(UserContext)
    useEffect(() => {
        if (!loggedIn || !localStorage.user) {
            nav('/login')

        }
    }, [])
    useEffect(() => {
        // api >> response >> body >> setCat/Object.keys

        fetch('https://jbh-mockserver.onrender.com/categories')
            .then(j => j.json())
            .then(res => setCat(res))

    }, [])


    return (
        <div>
            {Object.keys(cat).map((c) => <button key={c}><Link to={"/categories/" + c}><img src={cat[c]} /></Link></button>)}
        </div>
    )
}
