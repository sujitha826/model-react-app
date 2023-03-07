import React, { useEffect, useState } from 'react';
import FileUploadComponent from './FileUploadComponent';
import FileDisplayComponent from './FilesDisplayComponent';

function FilesComponent() {

    const [files, setFiles] = useState([]);

    const removeFile = (filename) => {
        setFiles(files.filter(file => file.name !== filename));
        localStorage.removeItem('userFile');
    }

    useEffect(() => {
        localStorage.removeItem('userFile');
    }, []);

    return (
        <div className='file-container'>
            <div className="title">Upload file</div>
            <FileUploadComponent files={files} setFiles={setFiles}
            />
            <FileDisplayComponent files={files} removeFile={removeFile} />
        </div>
    );
}

export default FilesComponent;