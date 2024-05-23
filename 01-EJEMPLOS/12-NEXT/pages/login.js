import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Login() {
    const [username, setUsername] = useState('erick');
    const [password, setPassword] = useState('secret');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await signIn('credentials', {
            redirect: false,
            username,
            password,
        });

        console.log(result);

        if (result.ok) {
            router.push('/dashboard');
        } else {
            alert('Error de credenciales ✋🏼');
        }
    };

    return (
        <div className='container mt-5'>
            <h1>🔒 Login</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input
                        type="text"
                        className='form-control'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className='btn btn-success' type="submit">Ingresar</button>
            </form>
        </div>
    );
}
