import { useState, useEffect } from 'react'
import Link from 'next/link';

import Nav from '../../components/Nav';

export default function Products() {
    const [products, setProduct] = useState([])

    async function getProducts() {
        const listado = await fetch("http://127.0.0.1:3001/products")
        const listado_json = await listado.json()

        setProduct(listado_json)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <Nav />
            <div className='container mt-4'>
                <h1>Lista de productos</h1>
                <div className="list-group mt-4">
                    {products.map(p => (
                        <Link key={p.id} href={`/products/${p.id}`} className="list-group-item d-flex justify-content-between align-items-start">
                            {p.name}
                            <span class="badge text-bg-primary rounded-pill">${p.price}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}