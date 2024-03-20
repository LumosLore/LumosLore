import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn, currentUser } = useAuth(); // Assuming currentUser is available from useAuth

    return (
        <nav className="flex items-center justify-around h-8vh bg-blue-900 h-16">
            {userLoggedIn ? (
                <>
                    <>
                        <Link to='/' className="text-white uppercase font-bold text-lg">LumosLore</Link>
                        <Link className="text-white italic hover:italic text-lg" to={'/home'}>Home</Link>
                        <Link className="text-white italic hover:italic text-lg" to={'/pricing'}>Pricing</Link>
                    </>
                    <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className="text-white italic hover:italic text-lg">
                        Logout
                    </button>
                    <span className="text-white italic hover:italic text-lg">
                        Welcome {currentUser.displayName ? currentUser.displayName : currentUser.email} {/* Assuming displayName is available */}
                    </span>

                </>
            ) : (
                <>
                    <Link to='/' className="text-white uppercase font-bold text-lg">LumosLore</Link>
                    <Link className="text-white italic hover:italic text-lg" to={'/home'}>Home</Link>
                    <Link className="text-white italic hover:italic text-lg" to={'/pricing'}>Pricing</Link>
                    <Link className="text-white italic hover:italic text-lg" to={'/login'}>Login</Link>
                    <Link className="text-white italic hover:italic text-lg" to={'/register'}>Register</Link>
                </>
            )}
        </nav>
    );
};

export default Header;
