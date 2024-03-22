import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn, currentUser } = useAuth(); // Assuming currentUser is available from useAuth

    return (
        <nav className="flex w-full items-center justify-around h-8vh bg-blue-900 h-16 ">
            {userLoggedIn ? (
                <>
                    <div className='w-[200px] ml-10 mr-10'>
                        <Link to='/' className="text-white uppercase font-bold text-lg">LumosLore</Link>
                    </div>
                    <div className='w-full flex justify-end items-center gap-[2%] mr-4'>
                        <>
                            <Link className="text-[#FFF] italic hover:italic text-lg" to={'/'}>Home</Link>
                            <Link className="text-[#FFF] italic hover:italic text-lg" to={'/pricing'}>Pricing</Link>
                        </>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className="text-[#FFF] italic hover:italic text-lg">
                            Logout
                        </button>
                        <span className="text-[#FFF] italic hover:italic text-lg">
                            Welcome {currentUser.displayName ? currentUser.displayName : currentUser.email} {/* Assuming displayName is available */}
                        </span>
                    </div>
                </>

            ) : (
                <>
                    <Link to='/' className="text-white uppercase font-bold text-lg">LumosLore</Link>
                    <Link className="text-white italic hover:italic text-lg" to={'/'}>Home</Link>
                    <Link className="text-white italic hover:italic text-lg" to={'/pricing'}>Pricing</Link>
                    <Link className="text-white italic hover:italic text-lg" to={'/login'}>Login</Link>
                    <Link className="text-white italic hover:italic text-lg" to={'/register'}>Register</Link>
                </>
            )}
        </nav>
    );
};

export default Header;