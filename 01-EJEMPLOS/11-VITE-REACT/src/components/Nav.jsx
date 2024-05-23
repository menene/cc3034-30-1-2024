import useToken from "@hooks/useToken"
import useNavigate from "@hooks/useNavigate"
import Logo from '@assets/logo.png'

const Nav = () => {
    const { isLoggedIn, getRawToken } = useToken()
    const { page, navigate } = useNavigate()

    let decodedToken = {}
    if (isLoggedIn) {
        decodedToken = getRawToken()
        console.log(decodedToken)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src={Logo} alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={page == "/" ? "nav-link active" : "nav-link"} onClick={() => navigate('/')}>
                                <i className="fa-solid fa-house-chimney"></i> Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={page == "/about" ? "nav-link active" : "nav-link"} onClick={() => navigate('/about')}>
                                <i className="fa-solid fa-circle-info"></i> Sobre nosotros
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={page == "/products" ? "nav-link active" : "nav-link"} onClick={() => navigate('/products')}>
                                <i className="fa-solid fa-boxes"></i> Productos
                            </a>
                        </li>
                        {
                            isLoggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <a className={page == "/report" ? "nav-link active" : "nav-link"} onClick={() => navigate('/report')}>
                                            <i className="fa-solid fa-chart-line"></i> Reporte
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={page == "/logout" ? "nav-link active" : "nav-link"} onClick={() => navigate('/logout')}>
                                            <i className="fa-solid fa-right-from-bracket"></i> Salir
                                        </a>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <a className={page == "/login" ? "nav-link active" : "nav-link"} onClick={() => navigate('/login')}>
                                        <i className="fa-solid fa-right-to-bracket"></i> Ingresar
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                    {
                        isLoggedIn ? (
                            <span className="navbar-text">
                                <i className="fa-solid fa-user"></i> {decodedToken.name}
                            </span>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Nav