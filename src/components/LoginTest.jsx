import { useState } from 'react';
import { loginUser } from '@/services/api';
import Button from '@/components/ui/Button';

const LoginTest = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const result = await loginUser(email, password);
            const { token } = result;
            localStorage.setItem('token', token); 
            setMessage('Usuario logueado con éxito');
            console.log(result);
        } catch (error) {
            setMessage('Error al loguear el usuario');
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative flex flex-col justify-start w-full max-w-md pb-40">
                <h2 className="mb-12 text-2xl font-bold text-left">Prueba de Login</h2>
                {message && <p className={`text-center mb-4 ${message.includes('éxito') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
                <div className="mb-8">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
                <Button onClick={handleLogin} className="bg-primaryBlue">
                    Login
                </Button>
            </div>
        </div>
    );
};

export default LoginTest;
