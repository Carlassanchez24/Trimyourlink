import { useState } from "react";
import Button from "./ui/Button";
import { loginUser } from "@/services/api";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!passwordRegex.test(password)) {
      setError('Password or login empty.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    try {
      const result = await loginUser(email, password);
      const { token, user } = result;
      
      localStorage.setItem('token', token);
      localStorage.setItem('userData', JSON.stringify(user));

      setMessage('User logged in successfully');
      console.log(result);
      navigate('/Inspireme');
    } catch (error) {
      setError('An error occurred during login');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-customgray ">
      <div className="relative flex flex-col justify-start p-8  rounded-lg max-w-md w-full">
        <h2 className="mt-2 mb-12 text-2xl font-bold text-center text-primaryBlue">Log in</h2>
        <div className="relative mb-4">
          {error && <p className="mb-4 text-center text-red-500">{error}</p>}
          {message && <p className="mb-4 text-center text-green-500">{message}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-md text-darkGrayBlue focus:outline-none focus:ring-2 focus:ring-primaryBlue"
              />
            </div>
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-md text-darkGrayBlue focus:outline-none focus:ring-2 focus:ring-primaryBlue"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-accentBlue" />
              </button>
            </div>
            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-primaryBlue hover:text-accentBlue">
                Forgot your password?
              </a>
            </div>
            <Button
              type="submit"
              className="w-full py-2 mb-4 bg-primaryBlue text-white font-poppins transition-colors rounded-full hover:bg-accentBlue"
            >
              Log in
            </Button>
            <div className="text-center text-sm text-primaryBlue mt-6">
              Don&apos;t have an account yet?{" "}
              <Link to="/SignUp" className="text-accentBlue hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
