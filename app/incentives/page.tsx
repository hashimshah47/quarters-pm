'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { ThemeContext } from '../components/Provider'
import TitlePage from '../components/TitlePage'
import IncentiveCard from './components/IncentiveCard'
import { Delete, Plus } from 'lucide-react'
import AddBox from './components/AddBox'

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
                    <TitlePage title="Incentives" description="Configure the list of incentives to provide to your users" />
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
                                <IncentiveCard/>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            {isDialogVisible && (
                  <AddBox
                    onConfirm={handleDelete}
                    onCancel={handleCancel}
                  />
                )}

        </>
    )
}

export default DashboardPage
