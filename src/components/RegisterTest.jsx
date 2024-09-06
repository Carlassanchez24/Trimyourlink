import { useState } from 'react';
import { registerUser } from '@/services/api';
import Button from '@/components/ui/Button';

const RegisterTest = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        try {
            const result = await registerUser(username, email, password);
            if (result.success) {
                setMessage('User registered successfully');
                console.log(result.data);
            } else {
                setMessage(result.error || 'An error occurred during registration');
            }
        } catch (error) {
            setMessage('An unexpected error occurred.');
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative flex flex-col justify-start w-full max-w-md pb-40">
                <h2 className="mb-12 text-2xl font-bold text-left">Prueba de Registro</h2>
                {message && <p className={`text-center mb-4 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
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
                <Button onClick={handleRegister} className="bg-primaryBlue">
                    Register
                </Button>
            </div>
        </div>
    );
};

export default RegisterTest;
