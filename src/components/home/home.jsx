import React, { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import axios from 'axios';

const Home = () => {
    const { currentUser } = useAuth();
    const [file, setFile] = useState(null);

    // Function to handle file change
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Function to handle file submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            // Replace 'http://127.0.0.1:5000' with your Flask backend URL
            const response = await axios.post('http://127.0.0.1:5000', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully', response.data);
            // Handle success response
        } catch (error) {
            console.error('Error uploading file', error);
            // Handle error response
        }
    };

    return (
        <div className="bg-blue-100 min-h-screen">
            <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
            <form className="container py-10 flex items-center justify-center m-4 w-full" onSubmit={handleSubmit}>
                <div className="container_login bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-4xl text-gray-800 font-bold">Lumos Lore</h1>
                    <p className="text-lg text-gray-500">Upload Your Document Here</p>
                    <label htmlFor="fileInput" className="block mt-4 cursor-pointer bg-green-500 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded-lg flex justify-center items-center font-bold">
                        <span>Choose File</span>
                        <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
                    </label>
                    <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Upload File
                    </button>
                    <p className="text-lg text-gray-600 mt-4">Or drop a file here</p>
                </div>
            </form>
        </div>
    );
};

export default Home;
