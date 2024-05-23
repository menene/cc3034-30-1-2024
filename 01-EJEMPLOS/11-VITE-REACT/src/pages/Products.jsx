import { useState, useEffect } from 'react'
import useNavigate from "@hooks/useNavigate"

function Products() {
    const [products, setProduct] = useState([])
    const { navigate } = useNavigate()

    async function getProducts() {
        const listado = await fetch("http://127.0.0.1:3001/products")
        const listado_json = await listado.json()

        setProduct(listado_json)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <h1>Listado de productos</h1>
            <ul>
                {products.map(p => (
                    <li key={p.id}>
                        <a onClick={() => navigate('/products/' + p.id)}>{p.name}</a>: <b>${p.price}</b>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products
