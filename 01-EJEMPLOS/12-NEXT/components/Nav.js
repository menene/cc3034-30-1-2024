import Link from 'next/link';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">NextApp</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/" className='nav-link'>
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" className='nav-link'>
                            Sobre nosotros
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/products" className='nav-link'>
                            Productos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/login" className='nav-link'>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}