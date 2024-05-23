import { useState, useEffect } from 'react'

function Product({ id }) {
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
        <div>
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
    )
}

export default Product
