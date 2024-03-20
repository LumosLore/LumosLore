import React from 'react';
import { useAuth } from '../../contexts/authContext';

const Home = () => {
    const { currentUser } = useAuth();

    return (
        <div className="bg-blue-100 min-h-screen">
            <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
            <div class="container py-10 flex items-center justify-center m-4 w-full">
                <div class="container_login">
                    <h1 className="text-4xl text-gray-700">Lumos Lore</h1>
                    <p className="text-lg text-gray-600">Upload Your Document Here</p>
                    <input type="file" className="file-input" />
                    <p className="text-lg text-gray-600">Choose File Or drop a file here</p>
                </div>
            </div>


        </div>
    );
};

export default Home;
