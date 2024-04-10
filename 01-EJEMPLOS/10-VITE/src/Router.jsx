import { useState } from 'react'
import CryptoJS from 'crypto-js'
import Login from './Login';
import Dashboard from './Dashboard';
import Reporte from './Reporte';

function Router() {
    const [page, setPage] = useState("dashboard")
    const [loggedin, setLoggedIn] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState(null)

    const ingresar = () => {
        async function apilogin() {
            const response = await fetch("http://127.0.0.1:3001/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: CryptoJS.MD5(password).toString()
                })
            })

            if (!response.ok) {
                alert("Usuario inválido, intentalo nuevamente")
                return;
            }

            const usr = await response.json()

            setUsername("")
            setPassword("")

            setUser(usr)
            setLoggedIn(true)
        }

        apilogin()
    }
    const salir = () => {
        setLoggedIn(false)
    }

    const navegar = (componente) => {
        setPage(componente)
    }

    if (!loggedin) {
        return <Login
            ingresar={ingresar}
            setUsername={setUsername}
            setPassword={setPassword}
        />
    }

    let contenido;
    switch (page) {
        case "dashboard":
            contenido = <Dashboard />
            break;

        case "reporte":
            contenido = <Reporte />
            break;

        default:
            break;
    }

    return (
        <div>
            <nav>
                {user.name} ({user.username}) |
                <a href="javascript:void(0);" onClick={() => navegar("dashboard")}>Dashboard</a> |
                <a href="javascript:void(0);" onClick={() => navegar("reporte")}>Reporte</a> |
                <a href="javascript:void(0);" onClick={salir}>Salir</a>
            </nav>

            {contenido}
        </div>
    )
}

export default Router
