const Pokemon = () => {
    const [pokemones, setPokemones] = React.useState([])

    async function pokeApi() {
        let listado = await fetch('https://pokeapi.co/api/v2/pokemon?limit=3&offset=0')
        let listado_json = await listado.json()

        setPokemones(listado_json.results)
    }

    React.useEffect(() => {
        pokeApi()
    }, [])

    return (
        <div>
            <h1>Listado Pokemon</h1>
            <ul>
                {pokemones.map((p, index) => {
                    return <li key={index} style={{ fontSize: '20px' }}>
                        {p.name}
                    </li>
                })}
            </ul>
        </div>
    )
}

ReactDOM.render(<Pokemon />, document.getElementById('root'));