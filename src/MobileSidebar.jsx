// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo2 from './assets/logo2.png';
// const MobileSidebar = ({ isOpen, toggleSidebar }) => {
//     return (
//         <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
//             <div className={`fixed top-0 left-0 w-64 bg-white h-full transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                
//                 <img src={logo2} alt="Logo 2" className=" flex justify-center w-36 h-36 md:w-36  " />
               
//                 <div className=' flex justify-end'>
//                 <button onClick={toggleSidebar} className="p-4    text-[blue]">
//                     {/* Cross button */}
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 </button>
//                 </div>
//                 <nav className="mt-10">
                    
 
//                     <Link to="/dashboard" className="block py-2.5 px-12 text-green-500  rounded transition duration-200 hover:bg-gray-700">
//                         Dashboard
//                     </Link>
//                     <Link to="/dashboard/check-ins" className="block py-2.5 px-12 text-green-500 rounded transition duration-200 hover:bg-gray-700">
//                         Check-ins
//                     </Link>
//                     <Link to="/dashboard/users" className="block py-2.5 px-12 rounded text-green-500 transition duration-200 hover:bg-gray-700">
//                         Users
//                     </Link>
//                     <Link to="/dashboard/welfare-centres" className="block py-2.5 px-12 text-green-500 rounded transition duration-200 hover:bg-gray-700">
//                         Welfare Centres
//                     </Link>
//                     <Link to="/dashboard/employers" className="block py-2.5 px-12 text-green-500 rounded transition duration-200 hover:bg-gray-700">
//                       Employers
//                     </Link>
//                     <Link to="/dashboard/settings" className="block py-2.5 px-12 text-green-500 rounded transition duration-200 hover:bg-gray-700">
//                         Settings
//                     </Link>
//                     <div className='flex  justify-center items-end text-3xl h-96'>
//                     <Link to="/settings" className="block py-2.5 px-12 text-green-500 rounded transition duration-200 hover:bg-gray-700">
//                         Login
//                     </Link>
                    
                    
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );
// };

// export default MobileSidebar;














































import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from './assets/logo2.png';

const MobileSidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className={`fixed top-0 left-0 w-64 bg-white h-full transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <img src={logo2} alt="Logo 2" className="flex justify-center w-36 h-36 md:w-36" />

                <div className='flex justify-end'>
                    <button onClick={toggleSidebar} className="p-4 text-[blue]">
                        {/* Cross button */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="mt-10">
                    <Link to="/dashboard" onClick={toggleSidebar} className="block py-2.5 px-12 text-green-500 rounded transition duration-200 hover:bg-gray-700">
                        Dashboard
                    </Link>
                    <Link to="/dashboard/check-ins" onClick={toggleSidebar} className="block py-2.5 px-12 text-green-500 rounded transition duration-200 hover:bg-gray-700">
                        Check-ins
                    </Link>
                    <Link to="/dashboard/users" onClick={toggleSidebar} className="block py-2.5 px-12 rounded text-green-500 transition duration-200 hover:bg-gray-700">
                        Users
                    </Link>
                    <Link to="/dashboard/welfare-centres" onClick={toggleSidebar} className="block py-2.5 px-12 text-green-500 rounded transition duration-200 hover:bg-gray-700">
                        Welfare Centres
                    </Link>
                    <Link to="/dashboard/employers" onClick={toggleSidebar} className="block py-2.5 px-12 text-green-500 rounded transition duration-200 hover:bg-gray-700">
                        Employers
                    </Link>
                    <Link to="/dashboard/settings" onClick={toggleSidebar} className="block py-2.5 px-12 text-green-500 rounded transition duration-200 hover:bg-gray-700">
                        Settings
                    </Link>
                    <div className='flex justify-center items-end text-3xl h-96'>
                        <Link to="/settings" onClick={toggleSidebar} className="block py-2.5 px-12 text-green-500 rounded transition duration-200 hover:bg-gray-700">
                            Login
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default MobileSidebar;
