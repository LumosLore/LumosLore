import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types';
import "./home.css";

const FileSelection = ({ onFilesSelect }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (event) => {
    event.preventDefault();
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true);
    } else if (event.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const files = event.dataTransfer.files;
    onFilesSelect(files);
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    onFilesSelect(files);
  };

  return (
    <div className={`file-selection-container ${dragActive ? 'drag-active' : ''}`} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
      <input type="file" accept="application/pdf" multiple className="pdf-file-input" onChange={handleFileInputChange} />
      <div className="button-container">
        <button className="select-pdf-button">Select PDF file</button>
      </div>
      <div className="or-text">or</div>
      <div className="drop-zone-container">
        <div className="drop-zone-text">Drop PDFs here</div>
      </div>
    </div>
  );
};

FileSelection.propTypes = {
  onFilesSelect: PropTypes.func.isRequired,
};

const FileSelector = () => {
  return (
    <div>
      <FileSelector onFilesSelect={(files) => console.log(files)} />
    </div>
  );
};

export default FileSelector;
