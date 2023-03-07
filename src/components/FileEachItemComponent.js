import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFileAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../css/FileItem.css';

const FileEachItemComponent = ({ file, deleteFile, downloadFile }) => {
    return (
        <>
            <li
                className="file-item"
                key={file.name}>
                <FontAwesomeIcon icon={faFileAlt} />
                <p>{file.name}</p>

                <div className='download-file' title='download'>
                    <FontAwesomeIcon icon={faDownload} onClick={() => downloadFile(file.type, file.name)} />
                </div>

                <div className="actions" title='delete'>
                    <FontAwesomeIcon icon={faTrash}
                        onClick={() => deleteFile(file.name)} />
                </div>
            </li>
        </>
    );
}

export default FileEachItemComponent;