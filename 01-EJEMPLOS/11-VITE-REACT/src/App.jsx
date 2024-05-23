import '@styles/App.css'
import { TokenProvider } from '@hooks/useToken'
import { NavigationProvider } from '@hooks/useNavigate'
import Router from './router'

function App() {
    return (
        <TokenProvider>
            <NavigationProvider>
                <Router />
            </NavigationProvider>
        </TokenProvider>
    )
}

export default App
