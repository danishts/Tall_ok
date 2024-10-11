
// import React, { useState } from 'react';
// import img from './assets/img.png'; // Ensure the path to your image is correct
// import { TbCloudDownload } from "react-icons/tb";
// import { IoFilter } from "react-icons/io5";
// import { IoSearch } from 'react-icons/io5';

// function Check_Ins() {
//   // Sample data
//   const [data, setData] = useState([
//     { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'ALINA', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'QASIM', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'FAIZAN', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'SAIMA', email: 'saima@example.com', employer: 'Company D', welfareCentre: 'Centre D', checkIns: 'Thursday, Jan 4, 01:00 PM' },
//     { userName: 'HASSAN', email: 'hassan@example.com', employer: 'Company E', welfareCentre: 'Centre E', checkIns: 'Friday, Jan 5, 02:00 PM' },
//     { userName: 'ZARA', email: 'zara@example.com', employer: 'Company F', welfareCentre: 'Centre F', checkIns: 'Saturday, Jan 6, 03:00 PM' },
//     { userName: 'KHALID', email: 'khalid@example.com', employer: 'Company G', welfareCentre: 'Centre G', checkIns: 'Sunday, Jan 7, 04:00 PM' },
//     { userName: 'MALIK', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'ALINA', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'QASIM', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'FAIZAN', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'SAIMA', email: 'saima@example.com', employer: 'Company D', welfareCentre: 'Centre D', checkIns: 'Thursday, Jan 4, 01:00 PM' },
//     { userName: 'HASSAN', email: 'hassan@example.com', employer: 'Company E', welfareCentre: 'Centre E', checkIns: 'Friday, Jan 5, 02:00 PM' },
//     { userName: 'ZARA', email: 'zara@example.com', employer: 'Company F', welfareCentre: 'Centre F', checkIns: 'Saturday, Jan 6, 03:00 PM' },
//     { userName: 'KHALID', email: 'khalid@example.com', employer: 'Company G', welfareCentre: 'Centre G', checkIns: 'Sunday, Jan 7, 04:00 PM' },
//   ]);

//   // Search term state
//   const [searchTerm, setSearchTerm] = useState('');

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5; // Adjust this number as needed

//   // Filter data based on the search term
//   const filteredData = data.filter((row) =>
//     row.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     row.employer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     row.welfareCentre.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     row.checkIns.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Calculate total pages
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   // Get current page data
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Handle CSV export
//   const handleExportCSV = () => {
//     const csvRows = [];
//     // Get headers
//     const headers = ['User Name', 'Email', 'Employer Name', 'Welfare Centre Name', 'Check-ins'];
//     csvRows.push(headers.join(','));

//     // Get data rows
//     currentData.forEach(row => {
//       const values = [
//         row.userName,
//         row.email,
//         row.employer,
//         row.welfareCentre,
//         row.checkIns,
//       ];
//       csvRows.push(values.join(','));
//     });

//     // Create a Blob and trigger download
//     const csvString = csvRows.join('\n');
//     const blob = new Blob([csvString], { type: 'text/csv' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'check_ins.csv';
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className='min-h-screen bg-[#f6f6f6] p-4 lg:p-8'>
//       {/* Main container */}
//       <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-6'>
//         {/* Title */}
//         <h1 className='text-2xl lg:text-3xl font-bold mb-4 lg:mb-0'>Check-Ins</h1>

//         {/* Actions (Export CSV, Filter, Search) */}
//         <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full lg:w-auto'>
//           {/* Export CSV and Filter Buttons */}
//           <div className='flex items-center gap-4'>
//             {/* Export CSV */}
//             <button onClick={handleExportCSV} className="flex items-center text-lg lg:text-2xl">
//               <TbCloudDownload className='mr-2' />
//               <h1>Export CSV</h1>
//             </button>

//             {/* Filter Button */}
//             <div className='flex justify-center items-center text-xl lg:text-2xl gap-3 h-12 w-28 lg:h-16 lg:w-36 rounded-full bg-white px-4'>
//               <IoFilter />
//               <h1>Filter</h1>
//             </div>
//           </div>

//           {/* Search Bar */}
//           <div className='relative flex items-center bg-white rounded-full h-12 px-4 w-full sm:w-72 lg:w-[28rem]'>
//             <IoSearch className='absolute left-3 text-gray-500 text-xl' />
//             <input
//               type='text'
//               placeholder='Search any welfare/user'
//               className='bg-transparent outline-none w-full text-base lg:text-lg pl-10'
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1); // Reset to first page on search
//               }} // Update search term on input change
//             />
//           </div>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className='overflow-x-auto rounded-lg'>
//         <table className='min-w-full bg-white border border-gray-200 '>
//           <thead>
//             <tr className='bg-gray-100'>
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-gray-600'>User Name</th>
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-gray-600'>Employer Name</th>
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-gray-600'>Welfare Centre Name</th>
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-gray-600'>Check-ins</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.map((row, index) => (
//               <tr key={index} className='hover:bg-gray-50'>
//                 <td className='px-4 py-2 border-b text-sm text-gray-600'>
//                   <div className='flex items-center'>
//                     <img src={img} alt="user" className='h-10 w-10 rounded-full mr-2' />
//                     <div>
//                       <h1 className='font-medium'>{row.userName}</h1>
//                       <h2 className='text-xs text-gray-500'>{row.email}</h2>
//                     </div>
//                   </div>
//                 </td>
//                 <td className='px-4 py-2 border-b text-sm text-gray-600'>{row.employer}</td>
//                 <td className='px-4 py-2 border-b text-sm text-gray-600'>{row.welfareCentre}</td>
//                 <td className='px-4 py-2 border-b text-sm text-gray-600'>{row.checkIns}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className='flex justify-between items-center mt-4'>
//         <div>
//           Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries
//         </div>
//         <div className='flex gap-2'>
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(index + 1)}
//               className={`py-1 px-2 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Check_Ins;










































// import React, { useState } from 'react';
// import img from './assets/img.png'; // Ensure the path to your image is correct
// import { TbCloudDownload } from "react-icons/tb";
// import { IoFilter } from "react-icons/io5";
// import { IoSearch } from 'react-icons/io5';

// function Check_Ins() {
//   // Sample data
//   const [data, setData] = useState([
//     { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//      { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
//     { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
//     { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
//     { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
   
//     // Add more data as needed...
//   ]);

//   // Search term state
//   const [searchTerm, setSearchTerm] = useState('');

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8; // Adjust this number as needed

//   // Filter data based on the search term
//   const filteredData = data.filter((row) =>
//     row.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     row.employer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     row.welfareCentre.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     row.checkIns.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Calculate total pages
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   // Get current page data
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Handle CSV export
//   const handleExportCSV = () => {
//     const csvRows = [];
//     // Get headers
//     const headers = ['User Name', 'Email', 'Employer Name', 'Welfare Centre Name', 'Check-ins'];
//     csvRows.push(headers.join(','));

//     // Get data rows
//     currentData.forEach(row => {
//       const values = [
//         row.userName,
//         row.email,
//         row.employer,
//         row.welfareCentre,
//         row.checkIns,
//       ];
//       csvRows.push(values.join(','));
//     });

//     // Create a Blob and trigger download
//     const csvString = csvRows.join('\n');
//     const blob = new Blob([csvString], { type: 'text/csv' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'check_ins.csv';
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   // Pagination Component
//   const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//     const handlePageClick = (pageNumber) => {
//       if (pageNumber > 0 && pageNumber <= totalPages) {
//         onPageChange(pageNumber);
//       }
//     };

//     return (
//       <div className='flex justify-center mt-6'>
//         {/* Left Arrow */}
//         <button
//           onClick={() => handlePageClick(currentPage - 1)}
//           className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-200' : 'bg-white'} rounded-full border`}
//           disabled={currentPage === 1}
//         >
//           &lt;
//         </button>

//         {/* Page Numbers */}
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageClick(index + 1)}
//             className={`mx-1 px-4 py-2 rounded-full border ${currentPage === index + 1 ? 'bg-[#00774480] text-white' : 'bg-white text-gray-600'}`}
//           >
//             {index + 1}
//           </button>
//         ))}

//         {/* Right Arrow */}
//         <button
//           onClick={() => handlePageClick(currentPage + 1)}
//           className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-200' : 'bg-white'} rounded-full border`}
//           disabled={currentPage === totalPages}
//         >
//           &gt;
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div className='min-h-screen bg-[#f6f6f6] p-4 lg:p-8'>
//       {/* Main container */}
//       <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-6'>
//         {/* Title */}
//         <h1 className='text-2xl lg:text-3xl font-bold mb-4 lg:mb-0'>Check-Ins</h1>

//         {/* Actions (Export CSV, Filter, Search) */}
//         <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full lg:w-auto'>
//           {/* Export CSV and Filter Buttons */}
//           <div className='flex items-center gap-4'>
//             {/* Export CSV */}
//             <button onClick={handleExportCSV} className="flex items-center text-lg lg:text-2xl">
//               <TbCloudDownload className='mr-2' />
//               <h1>Export CSV</h1>
//             </button>

//             {/* Filter Button */}
//             <div className='flex justify-center items-center text-xl lg:text-2xl gap-3 h-12 w-28 lg:h-16 lg:w-36 rounded-full bg-white px-4'>
//               <IoFilter />
//               <h1>Filter</h1>
//             </div>
//           </div>

//           {/* Search Bar */}
//           <div className='relative flex items-center bg-white rounded-full h-12 px-4 w-full sm:w-72 lg:w-[28rem]'>
//             <IoSearch className='absolute left-3 text-gray-500 text-xl' />
//             <input
//               type='text'
//               placeholder='Search any welfare/user'
//               className='bg-transparent outline-none w-full text-base lg:text-lg pl-10'
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1); // Reset to first page on search
//               }} // Update search term on input change
//             />
//           </div>
//         </div>
//       </div>

 

//       {/* Table Section */}
//       <div className='overflow-x-auto rounded-lg'>
//         <table className='min-w-full bg-white border-1 rounded-lg border-[#00000033] '>
//           <thead>
//             <tr className='bg-[white] h-14'>
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-gray-600'>User Name</th>
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-gray-600'>Employer Name</th>
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-gray-600'>Welfare Centre Name</th>
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-gray-600'>Check-ins</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.map((row, index) => (
//               <tr key={index} className='hover:bg-gray-50'>
//                 <td className='px-4 py-2 border-b text-sm text-gray-600'>
//                   <div className='flex items-center'>
//                     <img src={img} alt="user" className='h-10 w-10 rounded-full mr-2' />
//                     <div>
//                       <h1 className='font-medium'>{row.userName}</h1>
//                       <h2 className='text-xs text-gray-500'>{row.email}</h2>
//                     </div>
//                   </div>
//                 </td>
//                 <td className='px-4 py-2 border-b text-sm text-gray-600'>{row.employer}</td>
//                 <td className='px-4 py-2 border-b text-sm text-gray-600'>{row.welfareCentre}</td>
//                 <td className='px-4 py-2 border-b text-sm text-gray-600'>{row.checkIns}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// }

// export default Check_Ins;


























import React, { useState } from 'react';
import img from './assets/img.png'; // Ensure the path to your image is correct
import { TbCloudDownload } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";
import { IoSearch } from 'react-icons/io5';

function Check_Ins() {
  // Sample data
  const [data, setData] = useState([
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
    { userName: 'UMAR', email: 'john@example.com', employer: 'Company A', welfareCentre: 'Centre A', checkIns: 'Monday, Jan 1, 10:00 AM' },
    { userName: 'ABBASI', email: 'jane@example.com', employer: 'Company B', welfareCentre: 'Centre B', checkIns: 'Tuesday, Jan 2, 11:00 AM' },
    { userName: 'ALI', email: 'mike@example.com', employer: 'Company C', welfareCentre: 'Centre C', checkIns: 'Wednesday, Jan 3, 12:00 PM' },
  
    // Add more data as needed...
  ]);

  // Search term state
  const [searchTerm, setSearchTerm] = useState('');

  // Filter state
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filter, setFilter] = useState({
    employer: '',
    welfareCentre: '',
  });

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Adjust this number as needed

  // Filter data based on the search term and filters
  const filteredData = data.filter((row) =>
    (row.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.checkIns.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filter.employer === '' || row.employer.toLowerCase().includes(filter.employer.toLowerCase())) &&
    (filter.welfareCentre === '' || row.welfareCentre.toLowerCase().includes(filter.welfareCentre.toLowerCase()))
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleExportCSV = () => {
    const csvRows = [];
    const headers = ['User Name', 'Email', 'Employer Name', 'Welfare Centre Name', 'Check-ins'];
    csvRows.push(headers.join(','));

    currentData.forEach(row => {
      const values = [
        row.userName,
        row.email,
        row.employer,
        row.welfareCentre,
        row.checkIns,
      ];
      csvRows.push(values.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'check_ins.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className='flex justify-center mt-6'>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-200' : 'bg-white'} rounded-full border`}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`mx-1 px-4 py-2 rounded-full border ${currentPage === index + 1 ? 'bg-[#00774480] text-white' : 'bg-white text-gray-600'}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-200' : 'bg-white'} rounded-full border`}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    );
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setShowFilterModal(false);
    setCurrentPage(1); // Reset to first page after applying filter
  };

  return (
    <div className='min-h-screen bg-[#f6f6f6] p-4 lg:p-8'>
      <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-6'>
        <h1 className='text-2xl lg:text-3xl font-bold mb-4 lg:mb-0'>Check-Ins</h1>
        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full lg:w-auto'>
          <div className='flex items-center gap-4'>
            <button onClick={handleExportCSV} className="flex items-center text-lg lg:text-1xl">
              <TbCloudDownload className='mr-2' />
              <h1>Export CSV</h1>
            </button>
            <div className='flex justify-center items-center text-xl lg:text-1xl gap-3 h-12 w-28 lg:h-10 lg:w-36 rounded-full bg-white px-4 cursor-pointer' onClick={() => setShowFilterModal(true)}>
              <IoFilter />
              <h1>Filter</h1>
            </div>
          </div>
          <div className='relative flex items-center bg-white rounded-full h-12 px-4 w-full sm:w-72 lg:w-[28rem]'>
            <IoSearch className='absolute left-3 text-gray-500 text-xl' />
            <input
              type='text'
              placeholder='Search any welfare/user'
              className='bg-transparent outline-none w-full text-base lg:text-lg pl-10'
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
      </div>

      <div className='overflow-x-auto rounded-lg'>
        <table className='min-w-full bg-white border-1 rounded-lg border-[#00000033] '>
          <thead>
            <tr className='bg-[white] h-14'>
              <th className='px-4 py-2 border-b text-left text-sm font-medium text-gray-600'>User Name</th>
              <th className='px-4 py-2 border-b text-left text-sm font-medium text-gray-600'>Employer Name</th>
              <th className='px-4 py-2 border-b text-left text-sm font-medium text-gray-600'>Welfare Centre Name</th>
              <th className='px-4 py-2 border-b text-left text-sm font-medium text-gray-600'>Check-ins</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index} className='hover:bg-gray-50'>
                <td className='px-4 py-2 border-b text-sm text-gray-600'>
                  <div className='flex items-center'>
                    <img src={img} alt="user" className='h-10 w-10 rounded-full mr-2' />
                    <div>
                      <h1 className='font-medium'>{row.userName}</h1>
                      <h2 className='text-xs text-gray-500'>{row.email}</h2>
                    </div>
                  </div>
                </td>
                <td className='px-4 py-2 border-b text-sm text-gray-600'>{row.employer}</td>
                <td className='px-4 py-2 border-b text-sm text-gray-600'>{row.welfareCentre}</td>
                <td className='px-4 py-2 border-b text-sm text-gray-600'>{row.checkIns}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Filter Modal */}
      {showFilterModal && (
    
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
  <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
  <div className='bg-white p-4 rounded-lg shadow-lg w-[450px] h-[350px]'>
    <h2 className='text-xl font-bold mb-4'>Filter</h2>
    <form onSubmit={handleFilterSubmit}>
      <div className='flex gap-4 justify-between'>
        <div>
        <label className='block mb-2'>Start Date:</label>
        <input
          type='text'
          name='startDate'
          value={filter.startDate}
          onChange={handleFilterChange}
          className='border border-gray-300 rounded p-2 w-full'
          placeholder='Start'
        />
      </div>
                <div className='flex flex-col mb-4'>
        <label className='block mb-2'>End Date:</label>
        <input
          type='text'
          name='endDate'
          value={filter.endDate}
          onChange={handleFilterChange}
          className='border border-gray-300 rounded p-2 w-full'
          placeholder='End'
          />
      </div>
        </div>
      <div className='mb-4'>
        <label className='block mb-2'>Sort By</label>
        <select
          name='sortBy'
          value={filter.sortBy}
          onChange={handleFilterChange}
          className='border border-gray-300 rounded p-2 w-full'
        >
          <option value=''>Choose</option>
          <option value='date'>Date</option>
          <option value='employer'>Employer Name</option>
          <option value='welfareCentre'>Welfare Centre Name</option>
        </select>
      </div>
      <div className='flex justify-center gap-4'>
        <button
          type='button'
          onClick={() => {
            setShowFilterModal(false);
            resetFilter(); // function to reset filter values
          }}
          className='bg-white w-36 border-2 text-black rounded-xl px-4 mb-4 py-2'
        >
          Reset
        </button>
        <button type='submit' className='bg-[#4fa760] w-36 text-white rounded-xl px-4 mb-4 py-2 '>
          Apply Filter
        </button>
      </div>
    </form>
  </div>
</div>

</div>

      )}
    </div>
  );
}

export default Check_Ins;
