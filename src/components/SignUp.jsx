/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "./ui/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { registerUser } from "@/services/api";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (userName.length < 3 || /\s/.test(userName)) {
      setError('Username must be at least 3 characters long and contain no spaces.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      await registerUser(userName, email, password);
      setError('');
      setEmail('');
      setPassword('');
      setUserName('');
      navigate("/Login");
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-customgray">
      <div className="relative flex flex-col justify-start p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-12 text-primaryBlue">Sign up</h2>
        <div className="relative mb-1">
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="shadow-lg w-full px-4 py-2 border border-gray-300 rounded-full text-darkGrayBlue focus:outline-none focus:ring-2 focus:ring-primaryBlue"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-lg w-full px-4 py-2 border border-gray-300 rounded-full text-darkGrayBlue focus:outline-none focus:ring-2 focus:ring-primaryBlue"
                required
              />
            </div>
            <div className="relative mb-8">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                autoCorrect="off"
                className="shadow-lg w-full px-4 py-2 border border-gray-300 rounded-full text-darkGrayBlue focus:outline-none focus:ring-2 focus:ring-primaryBlue"
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
            <Button
              type="submit"
              className="w-full py-2 mb-4 bg-primaryBlue text-white font-poppins transition-colors rounded-full hover:bg-accentBlue"
            >
              Sign up
            </Button>
            <div className="text-center text-sm text-primaryBlue mt-6">
              Already have an account?{" "}
              <a href="#" className="text-accentBlue hover:underline" onClick={() => navigate('/Login')}>
                Log in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
