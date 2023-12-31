import { useEffect, useState } from "react"

export default function Categories({ setCategory }) {
    const [cat, setCat] = useState({})

    useEffect(() => {
        // api >> response >> body >> setCat/Object.keys

        fetch('https://jbh-mockserver.onrender.com/categories')
            .then(j => j.json())
            .then(res => setCat(res))

    }, [])

    return (
        <div>
            {Object.keys(cat).map(c => <button onClick={() => setCategory(c)}><a href={"/Categories/" + c}><img src={cat[c]} /></a></button>)}
        </div>
    )
}
