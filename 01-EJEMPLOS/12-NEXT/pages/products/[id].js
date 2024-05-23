import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'

import Nav from '../../components/Nav';

export default function Product() {
    const router = useRouter();
    const { id } = router.query;

    const [product, setProduct] = useState(null)

    async function getProduct() {
        const prod = await fetch("http://127.0.0.1:3001/products/" + id)
        const prod_json = await prod.json()

        setProduct(prod_json)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
        <Nav />
            <div className='container mt-4'>
                {
                    product ? (
                        <>
                            <h1>{product.name}</h1>
                            <p>Precio: {product.price}</p>
                            <p>{product.description}</p>
                        </>
                    ) : (<h2>Producto no encontrado 🫥</h2>)
                }
            </div>
        </>
    );
}