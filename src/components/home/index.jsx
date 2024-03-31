import React, { useCallback, useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import './FileUpload.css'; // Make sure this is the correct path to your CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import dragIcon from './1.jpg'; // Import the drag icon

const Home = () => {
    const { currentUser } = useAuth();
    const [file, setFile] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    // Function to handle file submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://127.0.0.1:5000', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully', response.data);
        } catch (error) {
            console.error('Error uploading file', error);
        }
    };

    return (
        <div className="upload-container">
            <div className='greeting'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
            <form className="upload-form" onSubmit={handleSubmit}>
                <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    <div className="drop-message">
                        <img src={dragIcon} alt="Upload" className="upload-icon"/>
                        {file ? <p>{file.name}</p> : <p>Drag & Drop to Upload File</p>}
                        <p className='or'>OR</p>
                        <button type="button" className="browse-button">Browse File</button>
                    </div>
                </div>
            </form>
            <div>
                <Link to="/questions"> {/* Link to the Questions component */}
                    <button type="button" className='upload-button'>Upload File</button> {/* Button to navigate to Questions component */}
                </Link>
            </div>
        </div>
    );
};

export default Home;
