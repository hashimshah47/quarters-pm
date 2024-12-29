'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { ThemeContext } from '../components/Provider'
import TitlePage from '../components/TitlePage'
import PropertyCard from './components/PropertyCard'
import { Delete, Plus } from 'lucide-react'
import AddProperty from './components/AddProperty'

function DashboardPage() {
    const theme = useContext(ThemeContext);
    const [isDialogVisible, setDialogVisible] = useState(false);
    const handleDeleteClick = () => {
      setDialogVisible(true);
    };
    const handleCancel = () => {
      console.log('Delete canceled');
      setDialogVisible(false);
    };
    const handleDelete = async () => {
      setDialogVisible(false);
      }
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <>
            <div className=' grid grid-cols-2'>
                <div>
                    <TitlePage title="Manage Properties" description="Configure your property list" />
                </div>
                <div onClick={handleDeleteClick} className='flex items-center justify-end text-gray-500 hover:text-gray-800 hover:cursor-pointer hover:border w-fit fixed right-0 mr-5'>
                    <div>
                        <Plus />
                    </div>
                    <div >Add</div>
                </div>
            </div>
            <Card className='mt-10 border-dashed'>
                <CardContent>

                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        {[...Array(5)].map((_,i) => (
                            <div className=' m-2' key={i}>
                                <PropertyCard/>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            {isDialogVisible && (
                  <AddProperty
                    onConfirm={handleDelete}
                    onCancel={handleCancel}
                  />
                )}

        </>
    )
}

export default DashboardPage
