
// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo2 from './assets/logo2.png';
// import { FaTachometerAlt, FaCheckCircle, FaUsers, FaBuilding, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Importing icons

// const Sidebar = () => {
//   return (
//     <div className="bg-white shadow-lg w-64 h-full fixed">
//       <div className="p-9 ">
//        <img src={logo2} alt="Logo 2" className="w-24 md:w-36 h-auto" />
//       </div>

//       <nav className="p-9mt-10">
//         <Link to="/dashboard" className="flex items-center py-2.5 text-2xl px-9 text-[#48525B] rounded transition duration-200 hover:bg-[#0077441A]">
//           <FaTachometerAlt className="mr-2" /> Dashboard
//         </Link>
//         <Link to="/check-ins" className="flex items-center py-2.5 px-9 text-2xl text-[#48525B] rounded transition duration-200 hover:bg-[#0077441A]">
//           <FaCheckCircle className="mr-2" /> Check-Ins
//         </Link>
//         <Link to="/users" className="flex items-center py-2.5 px-9 text-2xl text-[#48525B] rounded transition duration-200 hover:bg-[#0077441A]">
//           <FaUsers className="mr-2" /> Users
//         </Link>
//         <Link to="/welfare-centres" className="flex items-center text-2xl py-2.5 px-9 text-[#48525B] rounded transition duration-200 hover:bg-[#0077441A]">
//           <FaBuilding className="mr-2" /> Welfare
//         </Link>
//         <Link to="/employers" className="flex items-center py-2.5  text-2xl px-9 text-[#48525B] rounded transition duration-200 hover:bg-[#0077441A]">
//           <FaBuilding className="mr-2" /> Employers
//         </Link>
//         <Link to="/settings" className="flex items-center py-2.5 px-9  text-2xl text-[#48525B] rounded hover:bg-[var(--primary) transition duration-200 hover:bg-[#0077441A]">
//           <FaCog className="mr-2" /> Settings
//         </Link>
        
        
//         <div className='  h-60 flex  px-12 items-end '>
//         <Link to="/" className="flex items-center py-2.5 px-4 text-2xl  text-[#48525B] rounded transition duration-200 hover:bg-[#0077441A]">
//           <FaSignOutAlt className="mr-2" /> Logout
//         </Link>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo2 from './assets/logo2.png';
// import { FaTachometerAlt, FaCheckCircle, FaUsers, FaBuilding, FaCog, FaSignOutAlt } from 'react-icons/fa';

// const Sidebar = () => {
//   return (
//     <div className="bg-white shadow-lg  justify-center  w-64 h-full fixed">
//       <div className=" flex  h-36  justify-center ">
//         <img src={logo2} alt="Logo 2" className="w-34 h-36 md:w-36 " />
//       </div>
      
//       <nav className=" h-full flex  mt-8   flex-col ">
//         <Link to="/dashboard" className="flex items-center py-2.5 text-2xl px-9 text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
//           <FaTachometerAlt className="mr-2" /> Dashboard
//         </Link>
//         <Link to="/dashboard/check-ins" className="flex items-center py-2.5 px-9 text-2xl text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
//           <FaCheckCircle className="mr-2" /> Check-Ins
//         </Link>
//         <Link to="/dashboard/users" className="flex items-center py-2.5 px-9 text-2xl text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
//           <FaUsers className="mr-2" /> Users
//         </Link>
//         <Link to="/dashboard/welfare-centres" className="flex items-center text-2xl py-2.5 px-9 text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
//           <FaBuilding className="mr-2" /> Welfare
//         </Link>
//         <Link to="/dashboard/employers" className="flex items-center py-2.5 text-2xl px-9 text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
//           <FaBuilding className="mr-2" /> Employers
//         </Link>
//         <Link to="/dashboard/settings" className="flex items-center py-2.5 px-9 text-2xl text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
//           <FaCog className="mr-2" /> Settings
//         </Link>
//         <div className='h-60 flex px-12 items-end'>
//           <Link to="/" className="flex items-center bg-black  py-2.5 px-4 text-2xl text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
//             <FaSignOutAlt className="mr-2" /> Logout
//           </Link>
//         </div>
//       </nav>
      
//     </div>
//   );
// };

// export default Sidebar;
// // #007744






import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from './assets/logo2.png';
import { FaTachometerAlt, FaCheckCircle, FaUsers, FaBuilding, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-white shadow-lg justify-center  w-64 h-full fixed flex flex-col">
      <div className="flex h-44 items-end justify-center">
        <img src={logo2} alt="Logo 2" className="w-34  h-36 md:w-36" />
      </div>
  
      <nav className="flex-grow flex flex-col gap-4 mt-8">
        <Link to="/dashboard" className="flex items-center py-2.5 text-[18px] px-9 text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
          <FaTachometerAlt className="mr-2" /> Dashboard
        </Link>
        <Link to="/dashboard/check-ins" className="flex items-center py-2.5 px-9 text-[18px] text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
          <FaCheckCircle className="mr-2" /> Check-Ins
        </Link>
        <Link to="/dashboard/users" className="flex items-center py-2.5 px-9 text-[18px] text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
          <FaUsers className="mr-2" /> Users
        </Link>
        <Link to="/dashboard/welfare-centres" className="flex items-center text-[18px] py-2.5 px-9 text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
          <FaBuilding className="mr-2" /> Welfare
        </Link>
        <Link to="/dashboard/employers" className="flex items-center py-2.5 text-[18px] px-9 text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
          <FaBuilding className="mr-2" /> Employers
        </Link>
        <Link to="/dashboard/settings" className="flex items-center py-2.5 px-9 text-[18px] text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
          <FaCog className="mr-2" /> Settings
        </Link>
      </nav>
      
      <div className='px-4 pb-4'>
        <Link to="/" className="flex items-center  py-2.5 px-4 text-[18px] text-[#48525B] rounded transition duration-200 hover:text-[#007744] hover:bg-[#0077441A]">
          <FaSignOutAlt className="mr-2" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
