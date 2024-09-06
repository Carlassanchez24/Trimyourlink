import { NavLink } from 'react-router-dom';
import { Home, User, MessageSquare } from 'feather-icons-react';




const Navbar = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-full shadow-lg bg-card" aria-label="Main Navigation">
            <ul className="flex justify-around py-2">
                <li className="flex flex-col items-center group">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `flex flex-col items-center ${isActive ? 'text-primary-foreground' : ''} transition-colors duration-300`}
                        aria-label="Home"
                    >
                        <Home className="w-6 h-6 transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue" />
                        <span className="text-sm transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue font-roboto">Home</span>
                    </NavLink>
                </li>
                <li className="flex flex-col items-center group">
                    <NavLink 
                        to="/Account" 
                        className={({ isActive }) => 
                            `flex flex-col items-center ${isActive ? 'text-primary-foreground' : ''} transition-colors duration-300`}
                        aria-label="Account"
                    >


                        <User className="w-6 h-6 transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue" />
                        <span className="text-sm transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue font-roboto">Account</span>

                    </NavLink>
                </li>
                <li className="flex flex-col items-center group">
                    <NavLink 
                        to="/Inspireme" 
                        className={({ isActive }) => 
                            `flex flex-col items-center ${isActive ? 'text-primary-foreground' : ''} transition-colors duration-300`}
                        aria-label="Inspireme"
                    >
                        <MessageSquare className="w-6 h-6 transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue" />
                        <span className="text-sm transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue font-roboto">Inspireme</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
