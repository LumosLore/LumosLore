import React from 'react';
import { useAuth } from '../../contexts/authContext';
/*import './FileUpload.css'*/

const Home = () => {
    const { currentUser } = useAuth();

    return (
        <div className="bg-blue-100 min-h-screen">
            <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
            <div className="container py-10 flex items-center justify-center m-4 w-full">
                <div className="container_login bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl text-gray-800 font-bold">Lumos Lore</h1>
                    <p className="text-lg text-gray-500">Upload Your Document Here</p>
                    <label htmlFor="fileInput" className="block mt-4 cursor-pointer bg-green-500 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded-lg flex justify-center items-center font-bold">
                        <span>Choose File</span>
                        <input type="file" id="fileInput" className="hidden" />
                    </label>
                    <p className="text-lg text-gray-600 mt-4">Or drop a file here</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
