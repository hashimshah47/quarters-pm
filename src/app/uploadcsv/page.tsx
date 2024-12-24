'use client';
import React, { useState } from 'react';
import FileUploader from './components/FileUploader';

const FileUploadWithPreview = () => {
    const [csvData, setCsvData] = useState<any[]>([]);

    const handleFileUpload = (fileData: any) => {
        setCsvData(fileData);
    };

    return (
        <div className="container mx-auto p-4">
            <FileUploader onFileUpload={handleFileUpload} />
            
            {csvData.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-xl mb-4">CSV Data Preview</h3>
                    <table className="min-w-full border-collapse table-auto">
                        <thead>
                            <tr>
                                {Object.keys(csvData[0]).map((header, index) => (
                                    <th key={index} className="border px-4 py-2">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {csvData.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Object.values(row).map((value:any, index) => (
                                        <td key={index} className="border px-4 py-2">{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default FileUploadWithPreview;
