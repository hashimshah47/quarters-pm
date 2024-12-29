'use client';
// import React, { useState } from 'react';
// import FileUploadWithPreview from '../uploadcsv/page'; // Assuming the uploader is implemented
// import IncentivesPage from './IncentivesPage'; // Placeholder for the incentives page

// const SidebarLayout = () => {
//     const [activePage, setActivePage] = useState('uploader');

//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className="w-64 bg-blue-600 text-white flex flex-col">
//                 <h1 className="text-xl font-bold p-4">My App</h1>
//                 <nav className="flex-1">
//                     <ul>
//                         <li>
//                             <button
//                                 className={`w-full text-left px-4 py-2 hover:bg-blue-700 ${
//                                     activePage === 'uploader' ? 'bg-blue-800' : ''
//                                 }`}
//                                 onClick={() => setActivePage('uploader')}
//                             >
//                                 File Uploader
//                             </button>
//                         </li>
//                         <li>
//                             <button
//                                 className={`w-full text-left px-4 py-2 hover:bg-blue-700 ${
//                                     activePage === 'incentives' ? 'bg-blue-800' : ''
//                                 }`}
//                                 onClick={() => setActivePage('incentives')}
//                             >
//                                 Incentives
//                             </button>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 p-4 overflow-y-auto">
//                 {activePage === 'uploader' && <FileUploadWithPreview />}
//                 {activePage === 'incentives' && <IncentivesPage />}
//             </div>
//         </div>
//     );
// };

// export default SidebarLayout;


import React, { useState } from 'react'
import Sidebar from './components/Sidebar';
import { BarChart } from 'lucide-react';
import { SidebarItem } from './components/SidebarItem';

const Bar = () => {

  const [homeActive, setHomeActive] = useState(true);
  const [incentiveActive, setIncentiveActive] = useState(false);

  return (
    <div>
    <Sidebar>
        <SidebarItem icon={<BarChart size={30}/>} text="Upload Users" active={homeActive}/>
        <SidebarItem icon={<BarChart size={30}/>} text="Incentives"  active={incentiveActive}/>
        {/* <SidebarItem icon={<BarChart size={30}/>} text="Projects" />
        <SidebarItem icon={<BarChart size={30}/>} text="Calendar" />
        <SidebarItem icon={<BarChart size={30}/>} text="Tasks" />
        <SidebarItem icon={<BarChart size={30}/>} text="Reporting" />
        <SidebarItem icon={<BarChart size={30}/>} text="wtqtw"/> */}
      </Sidebar>
    </div>
  )
}

export default Bar