// import axios from 'axios';
import React from 'react';
import FileItem from './FileEachItemComponent';
import '../css/FileItem.css';

const FileDisplayComponent = ({ files, removeFile }) => {

    const deleteFileHandler = (fileName) => {
        removeFile(fileName);
        // let filesStored = localStorage.getItem("files-uploaded");
        // for (let i = 0; i < filesStored.length; ++i) {
        //     if (filesStored[i].name === fileName) {
        //         filesStored.splice(i, 1);
        //         localStorage.setItem("files-uploaded", filesStored);
        //     }
        // }
    }

    function downloadBase64File(contentType, base64Data, fileName) {
        const linkSource = `data:${contentType};base64,${base64Data}`;  // we don't need `data:${contentType};base64,${base64Data}`; instead  `${base64Data}`; is enough.
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }

    const downloadHandler = (type, name) => {
        // handle download file here
        console.log("inside download handler", type, name);
        let base64Data = localStorage.getItem('userFile');
        downloadBase64File(type, base64Data, name);
    }

    return (
        <ul className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    key={f.name}
                    file={f}
                    deleteFile={deleteFileHandler}
                    downloadFile={downloadHandler} />))
            }
        </ul>
    );
}

export default FileDisplayComponent;