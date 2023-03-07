import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/FileUpload.css';
// import axios from 'axios';

const FileUploadComponent = ({ files, setFiles }) => {

    const uploadHandler = (e) => {
        const file = e.target.files[0];
        console.log(file, typeof (file));
        if (!file) return;

        // upload file to localstorage
        var reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result
                .replace("data:", "")
                .replace(/^.+,/, "");
            localStorage.setItem("userFile", base64);
            console.log('file stored in local', base64);
        }
        reader.readAsDataURL(file);
        // update component state
        setFiles([...files, file]);

        // axios.post('http://localhost:8080/upload', formData)
        //     .then((res) => {
        //         file.isUploading = false;
        //         setFiles([...files, file])
        //     })
        //     .catch((err) => {
        //         // inform the user in case of upload error
        //         console.error(err);
        //         removeFile(file.name);
        //     });
    }

    return (
        <>
            <div className="file-card">
                <div className="file-inputs">
                    <input type="file" onChange={uploadHandler} />
                    <button> <i>
                        <FontAwesomeIcon icon={faPlus} />
                    </i>
                        Upload
                    </button>
                </div>
                <p className="main">Supported files</p>
                <p className="info">PDF, JPG, PNG</p>
            </div>
        </>
    );
}

export default FileUploadComponent;