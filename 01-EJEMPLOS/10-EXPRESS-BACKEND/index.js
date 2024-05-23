import express from 'express'
import cors from 'cors'
import { processLogin } from './db.js'
import { generateToken, validateToken } from './jwt.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors());

const products = [
    {"id": 1, "name": "Bluetooth Speaker", "price": 49.99, "description": "Compact wireless speaker with built-in Bluetooth technology for streaming music from your smartphone or tablet."},
    {"id": 2, "name": "Smartphone Case", "price": 12.50, "description": "Protective case designed to fit various models of smartphones, offering shock absorption and scratch resistance."},
    {"id": 3, "name": "Wireless Headphones", "price": 79.99, "description": "Over-ear headphones featuring wireless connectivity, noise cancellation technology, and long-lasting battery life."},
    {"id": 4, "name": "Portable Charger", "price": 29.99, "description": "Compact power bank capable of recharging mobile devices such as smartphones and tablets on the go."},
    {"id": 5, "name": "Coffee Maker", "price": 69.99, "description": "Automatic drip coffee maker with programmable features, brew strength options, and a removable water reservoir."},
    {"id": 6, "name": "Fitness Tracker", "price": 89.99, "description": "Wearable device that tracks various fitness metrics including steps taken, calories burned, heart rate, and sleep patterns."},
    {"id": 7, "name": "Electric Toothbrush", "price": 39.99, "description": "Rechargeable toothbrush with oscillating bristles and multiple cleaning modes for improved dental hygiene."},
    {"id": 8, "name": "Digital Camera", "price": 199.99, "description": "High-resolution digital camera with advanced autofocus capabilities, optical zoom, and 4K video recording."},
    {"id": 9, "name": "External Hard Drive", "price": 79.99, "description": "External storage device for backing up and transferring files, featuring large capacity and fast data transfer speeds."},
    {"id": 10, "name": "Smart Watch", "price": 149.99, "description": "Wearable device that combines fitness tracking, notifications, and customizable watch faces, compatible with smartphones."},
]
  

app.get('/', (req, res) => {
  res.send('Blog Login 🔒')
})

app.post('/login', async (req, res) => {
    const [username, password] = [req.body.username, req.body.password];

    console.log(username);
    console.log(password);

    // const user = await processLogin(username, password);
    // NO DEJAR PARA PRODUCCION
    const user = {
        "name": "Erick Marroquin",
        "username": "erick"
    }

    console.log(user);
    
    if (user) {
        const token = generateToken(user);
        res.status(200);
        res.json({ "success": true, access_token: token });
        return;
    }

    res.status(401);
    res.json({ "success": false });
});

app.get('/report', async (req, res) => {
    console.log('req.headers', req.headers);
    
    const { authorization } = req.headers;
    const access_token = authorization.substring(7);

    if (validateToken(access_token)) {
        res.status(200);
        res.json([
            {id: 1, name: 'Ventas', value: 10543}, 
            {id: 2, name: 'Compras', value: 3553}
        ]);

        return
    }

    res.status(403);
    res.json([]);
});

app.get('/products', async (req, res) => {
    res.status(200);
    res.json(products);

    return
});

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).send('Product not found');
    }

    res.status(200);
    res.json(product);

    return
});

app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`);
})