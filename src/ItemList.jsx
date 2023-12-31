import { useEffect, useState } from "react"
import Item from "./Item"


export default function ItemList({ category }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jbh-mockserver.onrender.com/categories/${category}`)
            .then(response => response.json())
            .then(res => setItems(res))
            .then(console.log(category))
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
