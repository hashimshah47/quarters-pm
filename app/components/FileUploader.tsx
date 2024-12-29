import { X } from 'lucide-react';
import React, { useState } from 'react';

type FileUploaderProps = {
    onFileUpload: (fileData: any) => void;
};

const FileUploader = ({ onFileUpload }: FileUploaderProps) => {
    const [dragging, setDragging] = useState(false);
    const [fileChosen, setFileChosen] = useState(false);


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
        setFileChosen(true)
    };

    const removeFile = () => {
        setFileChosen(false)
        onFileUpload(null)
    }

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
        <div>
            { !fileChosen ?
            <div className="flex justify-center">
            <div 
                className={`text-center p-8 border-2 rounded-lg bg-white w-96 ${dragging ? 'border-blue-500 bg-blue-50' : 'border-dashed border-gray-300'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <h2 className="text-2xl text-gray-800 mb-4">Let’s import your user list!</h2>
                <div className="mb-6">
                    <p className="text-gray-600">Drag and drop your file here</p>
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
                    className="inline-block px-4 py-2 bg-gray-400 text-white rounded-lg cursor-pointer hover:bg-gray-700"
                >
                    Choose File
                </label>
            </div>
            </div>
            :
                <div className=' flex justify-between '>
                    <div className=' start-0'>
                        Preview File Below
                    </div>
                    <div>
                        <div className="relative flex items-center">
                            <X onClick={removeFile} color='red' className="cursor-pointer hover:border rounded-xl" />
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max rounded-md bg-gray-800 text-white text-sm px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                                Remove file
                            </span>
                            <style jsx>{`.relative:hover span {opacity: 1;}`}</style>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default FileUploader;
