import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'

import Nav from '@components/Nav'

import Login from '@pages/Login';
import Logout from '@pages/Logout';
import Home from '@pages/Home';
import About from '@pages/About';
import Dashboard from '@pages/Dashboard';
import Reporte from '@pages/Reporte';
import Products from '@pages/Products';
import Product from '@pages/Product';

const routes = [
    {
        path: "/",
        component: Home,
        requiresAuth: false
    },
    {
        path: '/about',
        component: About,
        requiresAuth: false
    },
    {
        path: '/dashboard',
        component: Dashboard,
        requiresAuth: true
    },
    {
        path: '/report',
        component: Reporte,
        requiresAuth: true
    },
    {
        path: '/login',
        component: Login,
        requiresAuth: false
    },
    {
        path: '/logout',
        component: Logout,
        requiresAuth: false
    },
    {
        path: '/products',
        component: Products,
        requiresAuth: false
    },
    {
        path: '/products/*',
        component: Product,
        requiresAuth: false
    },
]

function Router() {
    const { token } = useToken()
    const { page } = useNavigate()

    let CurrentPage = () => <h1>404 Página no encontrada 🥲</h1>

    const route = routes.find((r) => {
        const regex = new RegExp(`^${r.path.replace(/\*/g, ".*")}$`);
        return regex.test(page);
    });

    let id = null;
    if (route) {
        if (route.path == "/logout") {
            window.location.replace("/");
            CurrentPage = Home
        } else {
            if (route.requiresAuth && !token) {
                CurrentPage = Login
            } else {
                CurrentPage = route.component
            }
        }

        if (route.path.includes("*")) {
            id = page.split("/")[2];
        }
    }

    console.log(route)
    console.log(id)

    return (
        <div>
            <Nav />
            <div className="container mt-3">
                <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <CurrentPage id={id} />
                </div>
            </div>
        </div>
    )
}

export default Router