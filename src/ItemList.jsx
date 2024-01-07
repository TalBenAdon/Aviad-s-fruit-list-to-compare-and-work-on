import { useEffect, useState } from "react"
import Item from "./Item"
import { useParams } from "react-router-dom"
import UserContext from './context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ItemList() {

    const nav = useNavigate()

    const { loggedIn } = useContext(UserContext)

    const { categoryName } = useParams()

    const [items, setItems] = useState([])

    useEffect(() => {
        if (!loggedIn || !localStorage.user) {
            nav('/login')

        }
    }, [])

    useEffect(() => {
        fetch(`https://jbh-mockserver.onrender.com/categories/` + categoryName)
            .then((response) => response.json())
            .then((res) => setItems(res))
    }), []



    return (
        <div>
            <div id="itemList">
                {items
                    .map(f => <Item key={f.id} item={f} />)}
            </div>
        </div>
    )
}
