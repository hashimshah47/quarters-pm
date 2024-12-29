'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { ThemeContext } from '../components/Provider'
import TitlePage from '../components/TitlePage'
import FileUploader from '../components/FileUploader'

function DashboardPage() {
    const theme = useContext(ThemeContext);
    const [csvData, setCsvData] = useState<any[]>([]);
    const handleFileUpload = (fileData: any) => {
        setCsvData(fileData);
    };

    const handleSubmit = () => {
        alert("File Submitted")
    }
    return (
        <>
            <TitlePage title="Upload Users" description="Upload the list of your users here!" />
            <Card className='mt-10 border-dashed'>
                <CardContent>
                    {/* <center> */}
                        {/* <Image
                            className='m-10'
                            width={300}
                            height={300}
                            priority
                            src={theme?.theme === 'dark' ? "/team_engineering_white.svg" : "/team_engineering.svg"}
                            alt="illustration.svg"
                        /> */}
                        {/* <CardHeader> */}

                            {/* <CardTitle className='font-bold'>{`That's It`}</CardTitle>
                            
                            <CardDescription className='text-slate-300'>Replace this with your content</CardDescription>
                         */}

<div className="container mx-auto p-4">
            <FileUploader onFileUpload={handleFileUpload} />
            
            {csvData && csvData.length > 0 && (
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
                    <Button onClick={handleSubmit}>
                        <>Submit CSV File</>
                    </Button>
                </div>
            )}
        </div>
                </CardContent>
            </Card>

        </>
    )
}

export default DashboardPage
