// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import MenuBar from './MenuBar';
// import MobileSidebar from './MobileSidebar';

// const Layout = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex">
//       <MobileSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <div className={`hidden lg:block`}>
//         <Sidebar />
//       </div>
//       <div className="flex-1 lg:ml-64">
//         <MenuBar toggleSidebar={toggleSidebar} />
//         {/* Add your child routes or other content here */}
//       </div>
//     </div>
//   );
// };

// export default Layout;






















import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import MenuBar from './Menubar';
import MobileSidebar from './MobileSidebar';
import Dashboard from './Dashboard';
import Users from './Users';
import Check_Ins from './Check_Ins';
import WelfareCenters from './WelfareCenters';
import Employers from './Employers';
import Settings from './Settings';
import { useState } from 'react';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  }; 

  return (
    <div className="flex ">
      <MobileSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`hidden lg:block`}>
        <Sidebar />
      </div>
      <div className="flex-1 lg:ml-64">
        <MenuBar toggleSidebar={toggleSidebar} />
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
