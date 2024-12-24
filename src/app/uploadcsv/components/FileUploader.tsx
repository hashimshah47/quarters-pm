import React, { useState } from 'react';

type FileUploaderProps = {
    onFileUpload: (fileData: any) => void;
};

const FileUploader = ({ onFileUpload }: FileUploaderProps) => {
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (e: any) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleFileChange = (event: any) => {
        if (event.target.files[0]) {
            handleFile(event.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target?.result as string;
            const parsedData = parseCSV(text);
            onFileUpload(parsedData); // Passing data to parent
        };
        reader.readAsText(file);
    };

    const parseCSV = (csvText: string) => {
        const rows = csvText.split('\n').map(row => row.split(','));
        const headers = rows[0];
        const data = rows.slice(1).map(row => {
            return row.reduce((acc:any, value, idx) => {
                acc[headers[idx]] = value;
                return acc;
            }, {});
        });
        return data;
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div 
                className={`text-center p-8 border-2 rounded-lg bg-white w-96 ${dragging ? 'border-blue-500 bg-blue-50' : 'border-dashed border-gray-300'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <h2 className="text-2xl text-gray-800 mb-4">Let’s import checks!</h2>
                <div className="mb-6">
                    <p className="text-gray-600">Drag and drop your file here</p>
                    <p className="text-sm text-gray-500">Support only for CSV files.</p>
                </div>
                <input 
                    type="file" 
                    accept=".csv" 
                    className="hidden" 
                    id="fileInput"
                    onChange={handleFileChange}
                />
                <label 
                    htmlFor="fileInput" 
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700"
                >
                    Choose File
                </label>
                <p className="text-sm text-gray-500 mt-4">Fields are mapped on next step. <span className="text-blue-600 cursor-pointer">?</span></p>
            </div>
        </div>
    );
};

export default FileUploader;
