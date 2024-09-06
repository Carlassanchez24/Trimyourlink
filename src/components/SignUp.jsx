import { useState } from "react";
import Button from "./ui/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { loginUser } from "@/services/api";
import { useNavigate } from 'react-router-dom';




function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState(true); // Estado para mostrar el mensaje de error
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setError('');
      return;
    }

    if (userName.length < 3 || /\s/.test(userName)) {
      setError('Username must be at least 3 characters long and contain no spaces.');
      ;

      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
     
      return;
    }
    try {
      await loginUser(userName, email, password);
     
      setSuccess('Account created successfully!');

      setEmail('');
      setPassword('');
      setUserName('');
    }
    catch (error) {
      setError('Registration failed. Please try again.');
    }

  };

  return (
    <>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
        <div className=" relative flex flex-col justify-start pb-40"><h2 className="text-2xl font-bold  text-left mt-2 mb-12">Sign up</h2>
          <div className="relative mb-1">
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="userName"
                  placeholder="UserName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="shadow-lg w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required

                />

              </div>

              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow-lg w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"

                />

              </div>

              <div className="mb-8 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow-lg w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                </button>
              </div>
              <Button
                type="submit"
                className=" text-white rounded-full font-semibold hover:bg-blue-700 transition-colors "
              >
                Sign up
              </Button>

              <div className="w-[334px] mb-4 text-center mt-6 text-sm text-gray-600">
                Already have an account? {" "}
                <a href="#" className="text-blue-600 hover:underline" onClick={() => navigate('/Login')}>
                  Log in

                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default SignUp;