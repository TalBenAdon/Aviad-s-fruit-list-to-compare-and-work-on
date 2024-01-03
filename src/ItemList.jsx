import { useEffect, useState } from "react"
import Item from "./Item"
import { useParams } from "react-router-dom"


export default function ItemList() {

    const { categoryName } = useParams()

    const [items, setItems] = useState([])

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
