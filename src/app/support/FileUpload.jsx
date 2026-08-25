import { useState } from 'react';
import Form from 'react-bootstrap/Form'; // Import Form from react-bootstrap if you're using Bootstrap

const FileUpload = () => {
    const [selectedFiles, setSelectedFiles] = useState({ file1: null });

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, fileKey) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFileChange(file, fileKey);
    };

    const handleFileInputChange = (e, fileKey) => {
        const file = e.target.files && e.target.files[0];
        handleFileChange(file, fileKey);
    };

    const handleFileChange = (file, fileKey) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFiles({
                    ...selectedFiles,
                    [fileKey]: {
                        file: file,
                        preview: reader.result,
                    },
                });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='form-group'>
            <Form.Label>ID Document</Form.Label>
            <div className='kycproffbox' onDrop={(e) => handleDrop(e, 'file1')} onDragOver={handleDragOver}>
                <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                    <p>Click or drag and drop a file here</p>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={(e) => handleFileInputChange(e, 'file1')}
                        style={{ display: 'none' }}
                    />
                </label>
                {selectedFiles.file1 && (
                    <div>
                        <p>{selectedFiles.file1.file.name}</p>
                        <img
                            src={selectedFiles.file1.preview}
                            alt="File 1 Preview"
                            style={{ maxWidth: '100%', maxHeight: '140px' }}
                        />
                    </div>
                )}
            </div>
            <p className="t-red m-0"><small>(Maximum file upload size: 10M)</small></p>
        </div>
    );
};

export default FileUpload;
