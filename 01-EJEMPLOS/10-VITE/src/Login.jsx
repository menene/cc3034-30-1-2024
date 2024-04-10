function Login({ ingresar, setUsername, setPassword }) {
    return (
        <div>
            <h1>Login</h1>
            <p>
                <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
            </p>
            <p>
                <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
            </p>
            <p>
                <button onClick={ingresar}>Ingresar</button>
            </p>
        </div>
    )
}

export default Login
