import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import FileSelector from "./Components/Home/home";

const App = () => {
  return (
      <div>
        <Navbar />
        <FileSelector onFilesSelect={(files) => console.log(files)} />
      </div>
  );
};

export default App;
