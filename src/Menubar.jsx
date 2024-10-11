


// import React from 'react';

// import img from './assets/img.png';
// const MenuBar = ({ toggleSidebar }) => {
//   return (
//     <div className="bg-[white] shadow-lg  h-24 p-4 flex justify-start items-center">
//       <button onClick={toggleSidebar} className="lg:hidden mr-4">
//         {/* Sidebar toggle button for screens below 500px */}
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//         </svg>
//       </button>
//       <div className='flex w-full justify-between'>
        
        
//         <div className='w-80  justify-center items-center  h-24  flex  flex-col'>
          
//           <h1 className='text-4xl font-bold'>Admin Panel</h1>
//           <p>Hey Ryan! Good Morning ☀️</p>
//        </div>
   

//         <div className='flex justify-center items-center w-60'>
          
//         <img src={img} alt="img" className="w-16 h-16 " />
    
//           <div className='flex px-3 justify-center items-center flex-col'>
//           <h1 className="text-3xl font-bold ">DANISH</h1>
//           <p>Admin</p>
//           </div>
//         </div>



//       </div>
//     </div>
//   );
// };

// export default MenuBar;






import React from 'react';
import img from './assets/img.png';

const MenuBar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white shadow-lg h-24  p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="lg:hidden mr-4">
        
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div className='flex w-full justify-between px-5 items-center'>
      
        <div className='flex flex-col justify-center items-start w-full lg:w-1/2'>
          <h1 className='text-4xl font-bold'>Admin Panel</h1>
          <p className='hidden lg:block'>Hey Ryan! Good Morning ☀️</p>
        </div>

        <div className='hidden lg:flex justify-end items-center w-1/2'>
          <img src={img} alt="img" className="w-16 h-16" />
          <div className='flex px-3 justify-center items-center flex-col'>
            <h1 className="text-3xl font-bold">DANISH</h1>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
