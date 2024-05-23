import Pokemon from '@assets/pokemon.svg'

function About() {
    return (
        <div>
            <h1>Sobre Nosotros</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, lacus a egestas aliquet, nulla lacus pellentesque nibh, vel facilisis tortor ante sed sapien.</p>
            <div className="text-center">
                <img src={Pokemon} alt="Pokemon" />
            </div>
        </div>
    )
}

export default About
