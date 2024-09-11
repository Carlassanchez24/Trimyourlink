import { NavLink } from 'react-router-dom';
import { Scissors, User, Link } from 'feather-icons-react';

const Navbar = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-backgroundLila shadow-lg border-t-4 border-secondaryLila" aria-label="Main Navigation">
            <ul className="flex justify-around py-2">
                <li className="flex flex-col items-center group">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `flex flex-col items-center ${isActive ? 'text-primaryLila' : 'text-accentLila'} transition-colors duration-300`}
                        aria-label="Home">
                        <Scissors className="w-6 h-6 transition-colors duration-300 text-accentLila group-hover:text-primaryLila" />
                        <span className="text-sm transition-colors duration-300 text-accentLila group-hover:text-primaryLila font-poppins">Shorten your URL</span>
                    </NavLink>
                </li>
                <li className="flex flex-col items-center group">
                    <NavLink 
                        to="/account" 
                        className={({ isActive }) => 
                            `flex flex-col items-center ${isActive ? 'text-primaryLila' : 'text-accentLila'} transition-colors duration-300`}
                        aria-label="Account"
                    >
                        <User className="w-6 h-6 transition-colors duration-300 text-accentLila group-hover:text-primaryLila" />
                        <span className="text-sm transition-colors duration-300 text-accentLila group-hover:text-primaryLila font-poppins">Account</span>
                    </NavLink>
                </li>
                <li className="flex flex-col items-center group">
                    <NavLink 
                        to='/user/urls'
                        className={({ isActive }) => 
                            `flex flex-col items-center ${isActive ? 'text-primaryLila' : 'text-accentLila'} transition-colors duration-300`}
                        aria-label="Account"
                    >
                        <Link className="w-6 h-6 transition-colors duration-300 text-accentLila group-hover:text-primaryLila" />
                        <span className="text-sm transition-colors duration-300 text-accentLila group-hover:text-primaryLila font-poppins">My URLS</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
