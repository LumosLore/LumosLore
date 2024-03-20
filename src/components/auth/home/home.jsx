import React from 'react';

const Home = () => {
  return (
    <div className="container bg-blue-200 py-10">
      <div className="container_login">
        <h1 className="text-4xl text-gray-700">Lumos Lore</h1>
        <p className="text-lg text-gray-600">Upload Your Document Here</p>
        <input type="file" className="file-input" />
        <p className="text-lg text-gray-600">Choose File Or drop a file here</p>
      </div>
    </div>
  );
};

export default Home;
