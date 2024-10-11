
// import React, { useState } from 'react';
// import img from './assets/img.png'; // Ensure the path to your image is correct
// import { TbCloudDownload } from "react-icons/tb";
// import { IoFilter, IoAdd, IoTrash, IoPencil } from "react-icons/io5";
// import { IoSearch } from 'react-icons/io5';

// function Users() {
//   // Initial sample data with necessary fields
//   const [data, setData] = useState([
//     {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   
//      {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   
//      {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   
//      {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   
//      {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   
//      {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   
//      {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   
//      {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   
//      {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   
//      {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   
//      {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   
//      {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   

//     // ... Add more data as needed
//   ]);

//   // Search term state
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filter state
//   const [showFilterModal, setShowFilterModal] = useState(false);
//   const [filter, setFilter] = useState({
//     employer: '',
//     welfareCentre: '',
//     startDate: '',
//     endDate: '',
//     sortBy: '',
//   });

//   // Add/Edit User Modal state
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [editUserId, setEditUserId] = useState(null); // To track which user is being edited
//   const [newUser, setNewUser] = useState({
//     userName: '',
//     userEmail: '',
//     employerName: '',
//     employerEmail: '',
//     lastLoginDate: '',
//     userVerified: false,
//     image: img, // Default image
//   });

//    const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8; // Adjust this number as needed


//   // Handle filter changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilter(prevFilter => ({
//       ...prevFilter,
//       [name]: value,
//     }));
//   };

//   // Reset filter values
//   const resetFilter = () => {
//     setFilter({
//       employer: '',
//       welfareCentre: '',
//       startDate: '',
//       endDate: '',
//       sortBy: '',
//     });
//   };

//   // Handle filter submission
//   const handleFilterSubmit = (e) => {
//     e.preventDefault();
//     setShowFilterModal(false);
//     setCurrentPage(1); // Reset to first page after applying filter
//   };

//   // Handle Add/Edit User form changes
//   const handleNewUserChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setNewUser(prevUser => ({
//       ...prevUser,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   // Handle Add/Edit User form submission
//   const handleAddUserSubmit = (e) => {
//     e.preventDefault();
//     // Simple validation
//     if (
//       !newUser.userName ||
//       !newUser.userEmail ||
//       !newUser.employerName ||
//       !newUser.employerEmail ||
//       !newUser.lastLoginDate
//     ) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     if (editUserId) {
//       // Edit existing user
//       setData(prevData =>
//         prevData.map(user =>
//           user.id === editUserId ? { ...user, ...newUser } : user
//         )
//       );
//       setEditUserId(null);
//       alert('User details updated successfully!');
//     } else {
//       // Add new user
//       const newUserEntry = {
//         ...newUser,
//         id: data.length > 0 ? data[data.length - 1].id + 1 : 1, // Simple ID increment
//       };
//       setData(prevData => [newUserEntry, ...prevData]);
//       alert('New user added successfully!');
//     }

//     // Reset newUser state
//     setNewUser({
//       userName: '',
//       userEmail: '',
//       employerName: '',
//       employerEmail: '',
//       lastLoginDate: '',
//       userVerified: false,
//       image: img,
//     });
//     // Close the modal
//     setShowAddModal(false);
//   };

//   // Handle Edit User
//   const handleEditUser = (user) => {
//     setEditUserId(user.id);
//     setNewUser({
//       userName: user.userName,
//       userEmail: user.userEmail,
//       employerName: user.employerName,
//       employerEmail: user.employerEmail,
//       lastLoginDate: user.lastLoginDate,
//       userVerified: user.userVerified,
//       image: user.image,
//     });
//     setShowAddModal(true);
//   };

//   // Handle Delete User
//   const handleDeleteUser = (id) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       setData(prevData => prevData.filter(user => user.id !== id));
//       alert('User deleted successfully!');
//     }
//   };

//   // Filter data based on the search term and filters
//   const filteredData = data.filter((row) => {
//     // Search term filter
//     const matchesSearch =
//       row.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       row.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       row.employerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       row.employerEmail.toLowerCase().includes(searchTerm.toLowerCase());

//     // Employer filter
//     const matchesEmployer = filter.employer === '' || row.employerName.toLowerCase().includes(filter.employer.toLowerCase());

//     // Welfare Centre filter (assuming welfareCentre is part of data; if not, remove this)
//     // const matchesWelfareCentre = filter.welfareCentre === '' || row.welfareCentre.toLowerCase().includes(filter.welfareCentre.toLowerCase());

//     // Start Date and End Date filter
//     let matchesStartDate = true;
//     let matchesEndDate = true;
//     if (filter.startDate) {
//       const rowDate = new Date(row.lastLoginDate);
//       const startDate = new Date(filter.startDate);
//       matchesStartDate = rowDate >= startDate;
//     }
//     if (filter.endDate) {
//       const rowDate = new Date(row.lastLoginDate);
//       const endDate = new Date(filter.endDate);
//       matchesEndDate = rowDate <= endDate;
//     }

//     return matchesSearch && matchesEmployer && matchesStartDate && matchesEndDate;
//   });

//   // Sort data based on sortBy filter
//   const sortedData = [...filteredData].sort((a, b) => {
//     if (filter.sortBy === 'date') {
//       return new Date(a.lastLoginDate) - new Date(b.lastLoginDate);
//     } else if (filter.sortBy === 'employer') {
//       return a.employerName.localeCompare(b.employerName);
//     }
//     return 0; // No sorting if sortBy is empty
//   });

//   // Pagination logic
//   const totalPages = Math.ceil(sortedData.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Handle CSV export
//   const handleExportCSV = () => {
//     const csvRows = [];
//     const headers = ['User Name', 'User Email', 'Employer Name', 'Employer Email', 'Last Login Date', 'User Verified'];
//     csvRows.push(headers.join(','));

//     currentData.forEach(row => {
//       const values = [
//         `"${row.userName}"`,
//         `"${row.userEmail}"`,
//         `"${row.employerName}"`,
//         `"${row.employerEmail}"`,
//         `"${row.lastLoginDate}"`,
//         row.userVerified ? 'Yes' : 'No',
//       ];
//       csvRows.push(values.join(','));
//     });

//     const csvString = csvRows.join('\n');
//     const blob = new Blob([csvString], { type: 'text/csv' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'users.csv';
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//    const [employerName, setEmployerName] = useState('');

//   const handleAssignEmployer = () => {
//     // Yahan tum action dal sakte ho jab button click ho, for example:
//     console.log('Assigned Employer:', employerName);
//   };






//   // Pagination Component
//   const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//     return (
//       <div className='flex justify-center mt-6'>
//         {/* Left Arrow */}
//         <button
//           onClick={() => onPageChange(currentPage - 1)}
//           className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-white text-gray-600 hover:bg-gray-100'} rounded-full border`}
//           disabled={currentPage === 1}
//         >
//           &lt;
//         </button>

//         {/* Page Numbers */}
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => onPageChange(index + 1)}
//             className={`mx-1 px-4 py-2 rounded-full border ${currentPage === index + 1 ? 'bg-[#00774480] text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
//           >
//             {index + 1}
//           </button>
//         ))}

//         {/* Right Arrow */}
//         <button
//           onClick={() => onPageChange(currentPage + 1)}
//           className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-white text-gray-600 hover:bg-gray-100'} rounded-full border`}
//           disabled={currentPage === totalPages}
//         >
//           &gt;
//         </button>
//       </div>
//     );
//   };
// const [users, setUsers] = useState(data); // yahan 'data' aapka initial user data hai

//   const updateUserVerification = (id, newStatus) => {
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user.id === id ? { ...user, userVerified: newStatus } : user
//       )
//     );
//   };





//   return (
//     <div className='min-h-screen bg-[#f6f6f6] p-4 lg:p-8'>
//       {/* Header Section */}
//       <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-6'>
//         {/* Title and Add Icon */}
//         <div className='flex items-center mb-4 lg:mb-0'>
//           <h1 className='text-2xl lg:text-3xl font-bold mr-4'>Users</h1>
//           {/* Add Icon with Custom Box-Shadow */}
//           <button
//             onClick={() => {
//               setShowAddModal(true);
//               setEditUserId(null); // Ensure it's in Add mode
//               setNewUser({
//                 userName: '',
//                 userEmail: '',
//                 employerName: '',
//                 employerEmail: '',
//                 lastLoginDate: '',
//                 userVerified: false,
//                 image: img,
//               });
//             }}
//             className='text-2xl lg:text-3xl bg-[#007744] text-white rounded-full shadow-[0px_4px_12px_0px_rgba(0,119,68,0.5)]'
//             title='Add User'
//           >
//             <IoAdd />
//           </button>
//         </div>

//         {/* Actions: Export CSV, Filter, Search */}
//         <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full lg:w-auto'>
//            <div className='flex items-center gap-4'>
//             <button onClick={handleExportCSV} className="flex items-center text-lg lg:text-1xl">
//               <TbCloudDownload className='mr-2' />
//               <h1>Export CSV</h1>
//             </button>
//             <div className='flex justify-center items-center text-xl lg:text-1xl gap-3 h-12 w-28 lg:h-10 lg:w-36 rounded-full bg-white px-4 cursor-pointer' onClick={() => setShowFilterModal(true)}>
//               <IoFilter />
//               <h1>Filter</h1>
//             </div>
//           </div>
//           {/* Search Bar */}
//           <div className='relative flex items-center bg-white rounded-full h-12 px-4 w-full sm:w-72 lg:w-[28rem] border border-gray-300'>
//             <IoSearch className='absolute left-3 text-gray-500 text-xl' />
//             <input
//               type='text'
//               placeholder='Search any welfare/user'
//               className='bg-transparent outline-none w-full text-base lg:text-lg pl-10'
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1);
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className='overflow-x-auto rounded-lg'>
//       <table className='min-w-full bg-white overflow-scroll border border-gray-200 rounded-lg'>
//         <thead>
//           <tr className='bg-[white] h-14'>
//             <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>User Name</th>
//             <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Employer Name</th>
//             <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Last Login Date</th>
//             <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Verified</th>
//             <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((row) => (
//             <tr key={row.id} className='hover:bg-gray-50'>
//               <td className='px-4 py-2 border-none text-sm text-gray-600'>
//                 <div className='flex items-center'>
//                   <img src={row.image} alt="user" className='h-10 w-10 rounded-full mr-2' />
//                   <div>
//                     <h1 className='font-medium'>{row.userName}</h1>
//                     <h2 className='text-xs text-gray-500'>{row.userEmail}</h2>
//                   </div>
//                 </div>
//               </td>

//               <td className='px-4 py-2 border-none text-sm text-gray-600'>
//                 <div>
//                   <h1 className='font-medium'>{row.employerName}</h1>
//                   <h2 className='text-xs text-gray-500'>{row.employerEmail}</h2>
//                 </div>
//               </td>

//               <td className='px-4 py-2 border-none text-sm text-gray-600 w-32'>{row.lastLoginDate}</td>

//               <td className='px-12 py-2 border-none text-2xl text-gray-600'>
//                 <select
//                   value={row.userVerified ? 'Yes' : 'No'}
//                   onChange={(e) => {
//                     const newStatus = e.target.value === 'Yes';
//                     updateUserVerification(row.id, newStatus);
//                   }}
//                   className='text-[#007744] bg-[#f1f1f2] border-none'
//                 >
//                   <option value='Yes'>Yes</option>
//                   <option value='No'>No</option>
//                 </select>
//               </td>

//               <td className='px-4 py-2 border-none text-sm text-gray-600'>
//                 <div className='flex items-center gap-5'>
//                   <button
//                     onClick={() => handleEditUser(row)}
//                     className='text-gray border-6 bg-[#f1f1f2] hover:text-blue-700 h-10 w-10 rounded-xl flex items-center justify-center'
//                     title='Edit User'
//                   >
//                     <IoPencil />
//                   </button>

//                   <button
//                     onClick={() => handleDeleteUser(row.id)}
//                     className='text-red-500 hover:text-gray h-10 w-10 flex bg-[#f1f1f2] rounded-xl items-center justify-center'
//                     title='Delete User'
//                   >
//                     <IoTrash />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//       {/* Pagination */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />

//       {/* Filter Modal */}
//       {showFilterModal && (
//         <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
//           <div className='bg-white p-6 rounded-lg shadow-lg w-[450px] h-auto max-h-full overflow-y-auto'>
//             <h2 className='text-xl font-bold mb-4'>Filter</h2>
//             <form onSubmit={handleFilterSubmit}>
//               {/* Employer Name Filter */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>Employer Name:</label>
//                 <input
//                   type='text'
//                   name='employer'
//                   value={filter.employer}
//                   onChange={handleFilterChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                   placeholder='Enter Employer Name'
//                 />
//               </div>

//               {/* Start Date and End Date */}
//               <div className='flex flex-col lg:flex-row lg:gap-4 mb-4'>
//                 <div className='flex flex-col mb-4 lg:mb-0 flex-1'>
//                   <label className='block mb-2'>Start Date:</label>
//                   <input
//                     type='date'
//                     name='startDate'
//                     value={filter.startDate}
//                     onChange={handleFilterChange}
//                     className='border border-gray-300 rounded p-2 w-full'
//                     placeholder='Start'
//                   />
//                 </div>
//                 <div className='flex flex-col flex-1'>
//                   <label className='block mb-2'>End Date:</label>
//                   <input
//                     type='date'
//                     name='endDate'
//                     value={filter.endDate}
//                     onChange={handleFilterChange}
//                     className='border border-gray-300 rounded p-2 w-full'
//                     placeholder='End'
//                   />
//                 </div>
//               </div>

//               {/* Sort By */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>Sort By:</label>
//                 <select
//                   name='sortBy'
//                   value={filter.sortBy}
//                   onChange={handleFilterChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                 >
//                   <option value=''>Choose</option>
//                   <option value='date'>Last Login Date</option>
//                   <option value='employer'>Employer Name</option>
//                 </select>
//               </div>

//               {/* Buttons */}
//               <div className='flex justify-center gap-4'>
//                 <button
//                   type='button'
//                   onClick={() => {
//                     setShowFilterModal(false);
//                     resetFilter();
//                   }}
//                   className='bg-white w-36 border-2 text-black rounded-xl px-4 py-2 hover:bg-gray-100'
//                 >
//                   Reset
//                 </button>
//                 <button
//                   type='submit'
//                   className='bg-[#4fa760] w-36 text-white rounded-xl px-4 py-2 hover:bg-[#3e9450]'
//                 >
//                   Apply Filter
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Add/Edit User Modal */}
//       {showAddModal && (
//         <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
//           <div className='bg-white p-6 rounded-lg shadow-lg w-[450px] h-auto max-h-full overflow-y-auto'>
//             <h2 className='text-xl font-bold mb-4'>{editUserId ? 'Edit User' : 'Add New User'}</h2>
//             <form onSubmit={handleAddUserSubmit}>
//               {/* User Name */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>User Name:</label>
//                 <input
//                   type='text'
//                   name='userName'
//                   value={newUser.userName}
//                   onChange={handleNewUserChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                   placeholder='DANISH'
//                 />
//               </div>

//               {/* User Email */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>User Email:</label>
//                 <input
//                   type='email'
//                   name='userEmail'
//                   value={newUser.userEmail}
//                   onChange={handleNewUserChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                   placeholder='danish@example.com'
//                 />
//               </div>

//               {/* Employer Name */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>Employer Name:</label>
//                 <input
//                   type='text'
//                   name='employerName'
//                   value={newUser.employerName}
//                   onChange={handleNewUserChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                   placeholder='Saddique'
//                 />
//               </div>

//               {/* Employer Email */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>Employer Email:</label>
//                 <input
//                   type='email'
//                   name='employerEmail'
//                   value={newUser.employerEmail}
//                   onChange={handleNewUserChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                   placeholder='saddique@company.com'
//                 />
//               </div>

//               {/* Last Login Date */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>Last Login Date:</label>
//                 <input
//                   type='date'
//                   name='lastLoginDate'
//                   value={newUser.lastLoginDate}
//                   onChange={handleNewUserChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                   placeholder='2 Jan 2024'
//                 />
//               </div>

//               {/* User Verified */}
//               <div className='mb-4 flex items-center'>
//                 <input
//                   type='checkbox'
//                   name='userVerified'
//                   checked={newUser.userVerified}
//                   onChange={handleNewUserChange}
//                   className='mr-2'
//                 />
//                 <label>User Verified</label>
//               </div>

//               {/* Buttons */}
//               <div className='flex justify-center gap-4'>
//                 <button
//                   type='button'
//                   onClick={() => {
//                     setShowAddModal(false);
//                     setEditUserId(null);
//                     setNewUser({
//                       userName: '',
//                       userEmail: '',
//                       employerName: '',
//                       employerEmail: '',
//                       lastLoginDate: '',
//                       userVerified: false,
//                       image: img,
//                     });
//                   }}
//                   className='bg-white w-36 border-2 text-black rounded-xl px-4 py-2 hover:bg-gray-100'
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type='submit'
//                   className='bg-[#4fa760] w-36 text-white rounded-xl px-4 py-2 hover:bg-[#3e9450]'
//                 >
//                   {editUserId ? 'Update User' : 'Add User'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Users;










































// import React, { useState } from 'react';
// import img from './assets/img.png'; // Ensure the path to your image is correct
// import { TbCloudDownload } from "react-icons/tb";
// import { IoFilter, IoAdd, IoTrash, IoPencil } from "react-icons/io5";
// import { IoSearch } from 'react-icons/io5';

// function Users() {
//   // Initial sample data with necessary fields
//   const [data, setData] = useState([
//     {
//       id: 1,
//       userName: 'UMAR',
//       userEmail: 'john@example.com',
//       employerName: 'UMAR',
//       employerEmail: 'contact@companya.com',
//       lastLoginDate: '2 Jan 2024',
//       userVerified: true,
//       image: img,
//     },
//     {
//       id: 2,
//       userName: 'ABBASI',
//       userEmail: 'jane@example.com',
//       employerName: 'ABBASI',
//       employerEmail: 'contact@companyb.com',
//       lastLoginDate: '5 Feb 2024',
//       userVerified: false,
//       image: img,
//     },
//     {
//       id: 3,
//       userName: 'ALI',
//       userEmail: 'mike@example.com',
//       employerName: 'ALI',
//       employerEmail: 'contact@companyc.com',
//       lastLoginDate: '15 Mar 2024',
//       userVerified: true,
//       image: img,
//     },
   

//     // ... Add more data as needed
//   ]);

//   // Search term state
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filter state
//   const [showFilterModal, setShowFilterModal] = useState(false);
//   const [filter, setFilter] = useState({
//     employer: '',
//     welfareCentre: '',
//     startDate: '',
//     endDate: '',
//     sortBy: '',
//   });

//   // Add/Edit User Modal state
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [editUserId, setEditUserId] = useState(null); // To track which user is being edited
//   const [newUser, setNewUser] = useState({
//     userName: '',
//     userEmail: '',
//     employerName: '',
//     employerEmail: '',
//     lastLoginDate: '',
//     userVerified: false,
//     image: img, // Default image
//   });

//    const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8; // Adjust this number as needed


//   // Handle filter changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilter(prevFilter => ({
//       ...prevFilter,
//       [name]: value,
//     }));
//   };

//   // Reset filter values
//   const resetFilter = () => {
//     setFilter({
//       employer: '',
//       welfareCentre: '',
//       startDate: '',
//       endDate: '',
//       sortBy: '',
//     });
//   };

//   // Handle filter submission
//   const handleFilterSubmit = (e) => {
//     e.preventDefault();
//     setShowFilterModal(false);
//     setCurrentPage(1); // Reset to first page after applying filter
//   };

//   // Handle Add/Edit User form changes
//   const handleNewUserChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setNewUser(prevUser => ({
//       ...prevUser,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   // Handle Add/Edit User form submission
//   const handleAddUserSubmit = (e) => {
//     e.preventDefault();
//     // Simple validation
//     if (
//       !newUser.userName ||
//       !newUser.userEmail ||
//       !newUser.employerName ||
//       !newUser.employerEmail ||
//       !newUser.lastLoginDate
//     ) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     if (editUserId) {
//       // Edit existing user
//       setData(prevData =>
//         prevData.map(user =>
//           user.id === editUserId ? { ...user, ...newUser } : user
//         )
//       );
//       setEditUserId(null);
//       alert('User details updated successfully!');
//     } else {
//       // Add new user
//       const newUserEntry = {
//         ...newUser,
//         id: data.length > 0 ? data[data.length - 1].id + 1 : 1, // Simple ID increment
//       };
//       setData(prevData => [newUserEntry, ...prevData]);
//       alert('New user added successfully!');
//     }

//     // Reset newUser state
//     setNewUser({
//       userName: '',
//       userEmail: '',
//       employerName: '',
//       employerEmail: '',
//       lastLoginDate: '',
//       userVerified: false,
//       image: img,
//     });
//     // Close the modal
//     setShowAddModal(false);
//   };

//   // Handle Edit User
//   const handleEditUser = (user) => {
//     setEditUserId(user.id);
//     setNewUser({
//       userName: user.userName,
//       userEmail: user.userEmail,
//       employerName: user.employerName,
//       employerEmail: user.employerEmail,
//       lastLoginDate: user.lastLoginDate,
//       userVerified: user.userVerified,
//       image: user.image,
//     });
//     setShowAddModal(true);
//   };

//   // Handle Delete User
//   const handleDeleteUser = (id) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       setData(prevData => prevData.filter(user => user.id !== id));
//       alert('User deleted successfully!');
//     }
//   };

//   // Filter data based on the search term and filters
//   const filteredData = data.filter((row) => {
//     // Search term filter
//     const matchesSearch =
//       row.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       row.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       row.employerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       row.employerEmail.toLowerCase().includes(searchTerm.toLowerCase());

//     // Employer filter
//     const matchesEmployer = filter.employer === '' || row.employerName.toLowerCase().includes(filter.employer.toLowerCase());

//     // Welfare Centre filter (assuming welfareCentre is part of data; if not, remove this)
//     // const matchesWelfareCentre = filter.welfareCentre === '' || row.welfareCentre.toLowerCase().includes(filter.welfareCentre.toLowerCase());

//     // Start Date and End Date filter
//     let matchesStartDate = true;
//     let matchesEndDate = true;
//     if (filter.startDate) {
//       const rowDate = new Date(row.lastLoginDate);
//       const startDate = new Date(filter.startDate);
//       matchesStartDate = rowDate >= startDate;
//     }
//     if (filter.endDate) {
//       const rowDate = new Date(row.lastLoginDate);
//       const endDate = new Date(filter.endDate);
//       matchesEndDate = rowDate <= endDate;
//     }

//     return matchesSearch && matchesEmployer && matchesStartDate && matchesEndDate;
//   });

//   // Sort data based on sortBy filter
//   const sortedData = [...filteredData].sort((a, b) => {
//     if (filter.sortBy === 'date') {
//       return new Date(a.lastLoginDate) - new Date(b.lastLoginDate);
//     } else if (filter.sortBy === 'employer') {
//       return a.employerName.localeCompare(b.employerName);
//     }
//     return 0; // No sorting if sortBy is empty
//   });

//   // Pagination logic
//   const totalPages = Math.ceil(sortedData.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Handle CSV export
//   const handleExportCSV = () => {
//     const csvRows = [];
//     const headers = ['User Name', 'User Email', 'Employer Name', 'Employer Email', 'Last Login Date', 'User Verified'];
//     csvRows.push(headers.join(','));

//     currentData.forEach(row => {
//       const values = [
//         `"${row.userName}"`,
//         `"${row.userEmail}"`,
//         `"${row.employerName}"`,
//         `"${row.employerEmail}"`,
//         `"${row.lastLoginDate}"`,
//         row.userVerified ? 'Yes' : 'No',
//       ];
//       csvRows.push(values.join(','));
//     });

//     const csvString = csvRows.join('\n');
//     const blob = new Blob([csvString], { type: 'text/csv' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'users.csv';
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//    const [employerName, setEmployerName] = useState('');

//   const handleAssignEmployer = () => {
//     // Yahan tum action dal sakte ho jab button click ho, for example:
//     console.log('Assigned Employer:', employerName);
//   };






//   // Pagination Component
//   const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//     return (
//       <div className='flex justify-center mt-6'>
//         {/* Left Arrow */}
//         <button
//           onClick={() => onPageChange(currentPage - 1)}
//           className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-white text-gray-600 hover:bg-gray-100'} rounded-full border`}
//           disabled={currentPage === 1}
//         >
//           &lt;
//         </button>

//         {/* Page Numbers */}
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => onPageChange(index + 1)}
//             className={`mx-1 px-4 py-2 rounded-full border ${currentPage === index + 1 ? 'bg-[#00774480] text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
//           >
//             {index + 1}
//           </button>
//         ))}

//         {/* Right Arrow */}
//         <button
//           onClick={() => onPageChange(currentPage + 1)}
//           className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-white text-gray-600 hover:bg-gray-100'} rounded-full border`}
//           disabled={currentPage === totalPages}
//         >
//           &gt;
//         </button>
//       </div>
//     );
//   };
// const [users, setUsers] = useState(data); // yahan 'data' aapka initial user data hai

//   const updateUserVerification = (id, newStatus) => {
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user.id === id ? { ...user, userVerified: newStatus } : user
//       )
//     );
//   };





//   return (
//     <div className='min-h-screen bg-[#f6f6f6] p-4 lg:p-8'>
//       {/* Header Section */}
//       <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-6'>
//         {/* Title and Add Icon */}
//         <div className='flex items-center mb-4 lg:mb-0'>
//           <h1 className='text-2xl lg:text-3xl font-bold mr-4'>Users</h1>
//           {/* Add Icon with Custom Box-Shadow */}
//           <button
//             onClick={() => {
//               setShowAddModal(true);
//               setEditUserId(null); // Ensure it's in Add mode
//               setNewUser({
//                 userName: '',
//                 userEmail: '',
//                 employerName: '',
//                 employerEmail: '',
//                 lastLoginDate: '',
//                 userVerified: false,
//                 image: img,
//               });
//             }}
//             className='text-2xl lg:text-3xl bg-[#007744] text-white rounded-full shadow-[0px_4px_12px_0px_rgba(0,119,68,0.5)]'
//             title='Add User'
//           >
//             <IoAdd />
//           </button>
//         </div>

//         {/* Actions: Export CSV, Filter, Search */}
//         <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full lg:w-auto'>
//            <div className='flex items-center gap-4'>
//             <button onClick={handleExportCSV} className="flex items-center text-lg lg:text-1xl">
//               <TbCloudDownload className='mr-2' />
//               <h1>Export CSV</h1>
//             </button>
//             <div className='flex justify-center items-center text-xl lg:text-1xl gap-3 h-12 w-28 lg:h-10 lg:w-36 rounded-full bg-white px-4 cursor-pointer' onClick={() => setShowFilterModal(true)}>
//               <IoFilter />
//               <h1>Filter</h1>
//             </div>
//           </div>
//           {/* Search Bar */}
//           <div className='relative flex items-center bg-white rounded-full h-12 px-4 w-full sm:w-72 lg:w-[28rem] border border-gray-300'>
//             <IoSearch className='absolute left-3 text-gray-500 text-xl' />
//             <input
//               type='text'
//               placeholder='Search any welfare/user'
//               className='bg-transparent outline-none w-full text-base lg:text-lg pl-10'
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1);
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className='overflow-x-auto rounded-lg'>
//       <table className='min-w-full bg-white overflow-scroll border border-gray-200 rounded-lg'>
//         <thead>
//           <tr className='bg-[white] h-14'>
//             <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>User Name</th>
//             <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Employer Name</th>
//             <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Last Login Date</th>
//             <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Verified</th>
//             <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((row) => (
//             <tr key={row.id} className='hover:bg-gray-50'>
//               <td className='px-4 py-2 border-none text-sm text-gray-600'>
//                 <div className='flex items-center'>
//                   <img src={row.image} alt="user" className='h-10 w-10 rounded-full mr-2' />
//                   <div>
//                     <h1 className='font-medium'>{row.userName}</h1>
//                     <h2 className='text-xs text-gray-500'>{row.userEmail}</h2>
//                   </div>
//                 </div>
//               </td>

//               <td className='px-4 py-2 border-none text-sm text-gray-600'>
//                 <div>
//                   <h1 className='font-medium'>{row.employerName}</h1>
//                   <h2 className='text-xs text-gray-500'>{row.employerEmail}</h2>
//                 </div>
//               </td>

//               <td className='px-4 py-2 border-none text-sm text-gray-600 w-32'>{row.lastLoginDate}</td>

//               <td className='px-12 py-2 border-none text-2xl text-gray-600'>
//                 <select
//                   value={row.userVerified ? 'Yes' : 'No'}
//                   onChange={(e) => {
//                     const newStatus = e.target.value === 'Yes';
//                     updateUserVerification(row.id, newStatus);
//                   }}
//                   className='text-[#007744] bg-[#f1f1f2] border-none'
//                 >
//                   <option value='Yes'>Yes</option>
//                   <option value='No'>No</option>
//                 </select>
//               </td>

//               <td className='px-4 py-2 border-none text-sm text-gray-600'>
//                 <div className='flex items-center gap-5'>
//                   <button
//                     onClick={() => handleEditUser(row)}
//                     className='text-gray border-6 bg-[#f1f1f2] hover:text-blue-700 h-10 w-10 rounded-xl flex items-center justify-center'
//                     title='Edit User'
//                   >
//                     <IoPencil />
//                   </button>

//                   <button
//                     onClick={() => handleDeleteUser(row.id)}
//                     className='text-red-500 hover:text-gray h-10 w-10 flex bg-[#f1f1f2] rounded-xl items-center justify-center'
//                     title='Delete User'
//                   >
//                     <IoTrash />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//       {/* Pagination */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />

//       {/* Filter Modal */}
//       {showFilterModal && (
//         <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
//           <div className='bg-white p-6 rounded-lg shadow-lg w-[450px] h-auto max-h-full overflow-y-auto'>
//             <h2 className='text-xl font-bold mb-4'>Filter</h2>
//             <form onSubmit={handleFilterSubmit}>
//               {/* Employer Name Filter */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>Employer Name:</label>
//                 <input
//                   type='text'
//                   name='employer'
//                   value={filter.employer}
//                   onChange={handleFilterChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                   placeholder='Enter Employer Name'
//                 />
//               </div>

//               {/* Start Date and End Date */}
//               <div className='flex flex-col lg:flex-row lg:gap-4 mb-4'>
//                 <div className='flex flex-col mb-4 lg:mb-0 flex-1'>
//                   <label className='block mb-2'>Start Date:</label>
//                   <input
//                     type='date'
//                     name='startDate'
//                     value={filter.startDate}
//                     onChange={handleFilterChange}
//                     className='border border-gray-300 rounded p-2 w-full'
//                     placeholder='Start'
//                   />
//                 </div>
//                 <div className='flex flex-col flex-1'>
//                   <label className='block mb-2'>End Date:</label>
//                   <input
//                     type='date'
//                     name='endDate'
//                     value={filter.endDate}
//                     onChange={handleFilterChange}
//                     className='border border-gray-300 rounded p-2 w-full'
//                     placeholder='End'
//                   />
//                 </div>
//               </div>

//               {/* Sort By */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>Sort By:</label>
//                 <select
//                   name='sortBy'
//                   value={filter.sortBy}
//                   onChange={handleFilterChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                 >
//                   <option value=''>Choose</option>
//                   <option value='date'>Last Login Date</option>
//                   <option value='employer'>Employer Name</option>
//                 </select>
//               </div>

//               {/* Buttons */}
//               <div className='flex justify-center gap-4'>
//                 <button
//                   type='button'
//                   onClick={() => {
//                     setShowFilterModal(false);
//                     resetFilter();
//                   }}
//                   className='bg-white w-36 border-2 text-black rounded-xl px-4 py-2 hover:bg-gray-100'
//                 >
//                   Reset
//                 </button>
//                 <button
//                   type='submit'
//                   className='bg-[#4fa760] w-36 text-white rounded-xl px-4 py-2 hover:bg-[#3e9450]'
//                 >
//                   Apply Filter
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Add/Edit User Modal */}
//       {showAddModal && (
//         <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
//           <div className='bg-white p-6 rounded-lg shadow-lg w-[450px] h-auto max-h-full overflow-y-auto'>
//             <h2 className='text-xl font-bold mb-4'>{editUserId ? 'Edit User' : 'Add New User'}</h2>
//             <form onSubmit={handleAddUserSubmit}>
//               {/* User Name */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>User Name:</label>
//                 <input
//                   type='text'
//                   name='userName'
//                   value={newUser.userName}
//                   onChange={handleNewUserChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                   placeholder='DANISH'
//                 />
//               </div>

//               {/* User Email */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>User Email:</label>
//                 <input
//                   type='email'
//                   name='userEmail'
//                   value={newUser.userEmail}
//                   onChange={handleNewUserChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                   placeholder='danish@example.com'
//                 />
//               </div>

//               {/* Employer Name */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>Employer Name:</label>
//                 <input
//                   type='text'
//                   name='employerName'
//                   value={newUser.employerName}
//                   onChange={handleNewUserChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                   placeholder='Saddique'
//                 />
//               </div>

//               {/* Employer Email */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>Employer Email:</label>
//                 <input
//                   type='email'
//                   name='employerEmail'
//                   value={newUser.employerEmail}
//                   onChange={handleNewUserChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                   placeholder='saddique@company.com'
//                 />
//               </div>

//               {/* Last Login Date */}
//               <div className='mb-4'>
//                 <label className='block mb-2'>Last Login Date:</label>
//                 <input
//                   type='date'
//                   name='lastLoginDate'
//                   value={newUser.lastLoginDate}
//                   onChange={handleNewUserChange}
//                   className='border border-gray-300 rounded p-2 w-full'
//                   placeholder='2 Jan 2024'
//                 />
//               </div>

//               {/* User Verified */}
//               <div className='mb-4 flex items-center'>
//                 <input
//                   type='checkbox'
//                   name='userVerified'
//                   checked={newUser.userVerified}
//                   onChange={handleNewUserChange}
//                   className='mr-2'
//                 />
//                 <label>User Verified</label>
//               </div>

//               {/* Buttons */}
//               <div className='flex justify-center gap-4'>
//                 <button
//                   type='button'
//                   onClick={() => {
//                     setShowAddModal(false);
//                     setEditUserId(null);
//                     setNewUser({
//                       userName: '',
//                       userEmail: '',
//                       employerName: '',
//                       employerEmail: '',
//                       lastLoginDate: '',
//                       userVerified: false,
//                       image: img,
//                     });
//                   }}
//                   className='bg-white w-36 border-2 text-black rounded-xl px-4 py-2 hover:bg-gray-100'
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type='submit'
//                   className='bg-[#4fa760] w-36 text-white rounded-xl px-4 py-2 hover:bg-[#3e9450]'
//                 >
//                   {editUserId ? 'Update User' : 'Add User'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Users;






































import React, { useState } from 'react';
import img from './assets/img.png'; // Ensure the path to your image is correct
import { TbCloudDownload } from "react-icons/tb";
import { IoFilter, IoAdd, IoTrash, IoPencil } from "react-icons/io5";
import { IoSearch } from 'react-icons/io5';

function Users() {
  // Initial sample data with necessary fields
  const [data, setData] = useState([
    {
      id: 1,
      userName: 'UMAR',
      userEmail: 'john@example.com',
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2 Jan 2024',
      userVerified: true,
      image: img,
    },
    {
      id: 2,
      userName: 'ABBASI',
      userEmail: 'jane@example.com',
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '5 Feb 2024',
      userVerified: false,
      image: img,
    },
    {
      id: 3,
      userName: 'ALI',
      userEmail: 'mike@example.com',
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '15 Mar 2024',
      userVerified: true,
      image: img,
    },
   
     {
      id: 4,
      userName: 'UMAR',
      userEmail: 'john@example.com',
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2 Jan 2024',
      userVerified: true,
      image: img,
    },
    {
      id: 5,
      userName: 'ABBASI',
      userEmail: 'jane@example.com',
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '5 Feb 2024',
      userVerified: false,
      image: img,
    },
    {
      id: 6,
      userName: 'ALI',
      userEmail: 'mike@example.com',
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '15 Mar 2024',
      userVerified: true,
      image: img,
    },
   
     {
      id: 7,
      userName: 'UMAR',
      userEmail: 'john@example.com',
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2 Jan 2024',
      userVerified: true,
      image: img,
    },
    {
      id: 8,
      userName: 'ABBASI',
      userEmail: 'jane@example.com',
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '5 Feb 2024',
      userVerified: false,
      image: img,
    },
    {
      id: 9,
      userName: 'ALI',
      userEmail: 'mike@example.com',
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '15 Mar 2024',
      userVerified: true,
      image: img,
    },
   
     {
      id: 10,
      userName: 'UMAR',
      userEmail: 'john@example.com',
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2 Jan 2024',
      userVerified: true,
      image: img,
    },
    {
      id: 2,
      userName: 'ABBASI',
      userEmail: 'jane@example.com',
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '5 Feb 2024',
      userVerified: false,
      image: img,
    },
    {
      id: 3,
      userName: 'ALI',
      userEmail: 'mike@example.com',
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '15 Mar 2024',
      userVerified: true,
      image: img,
    },
   
     {
      id: 1,
      userName: 'UMAR',
      userEmail: 'john@example.com',
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2 Jan 2024',
      userVerified: true,
      image: img,
    },
    {
      id: 2,
      userName: 'ABBASI',
      userEmail: 'jane@example.com',
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '5 Feb 2024',
      userVerified: false,
      image: img,
    },
    {
      id: 3,
      userName: 'ALI',
      userEmail: 'mike@example.com',
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '15 Mar 2024',
      userVerified: true,
      image: img,
    },
   
     {
      id: 1,
      userName: 'UMAR',
      userEmail: 'john@example.com',
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2 Jan 2024',
      userVerified: true,
      image: img,
    },
    {
      id: 2,
      userName: 'ABBASI',
      userEmail: 'jane@example.com',
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '5 Feb 2024',
      userVerified: false,
      image: img,
    },
    {
      id: 3,
      userName: 'ALI',
      userEmail: 'mike@example.com',
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '15 Mar 2024',
      userVerified: true,
      image: img,
    },
   
     {
      id: 1,
      userName: 'UMAR',
      userEmail: 'john@example.com',
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2 Jan 2024',
      userVerified: true,
      image: img,
    },
    {
      id: 2,
      userName: 'ABBASI',
      userEmail: 'jane@example.com',
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '5 Feb 2024',
      userVerified: false,
      image: img,
    },
    {
      id: 3,
      userName: 'ALI',
      userEmail: 'mike@example.com',
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '15 Mar 2024',
      userVerified: true,
      image: img,
    },
   
     {
      id: 1,
      userName: 'UMAR',
      userEmail: 'john@example.com',
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2 Jan 2024',
      userVerified: true,
      image: img,
    },
    {
      id: 2,
      userName: 'ABBASI',
      userEmail: 'jane@example.com',
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '5 Feb 2024',
      userVerified: false,
      image: img,
    },
    {
      id: 3,
      userName: 'ALI',
      userEmail: 'mike@example.com',
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '15 Mar 2024',
      userVerified: true,
      image: img,
    },
   
     {
      id: 1,
      userName: 'UMAR',
      userEmail: 'john@example.com',
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2 Jan 2024',
      userVerified: true,
      image: img,
    },
    {
      id: 2,
      userName: 'ABBASI',
      userEmail: 'jane@example.com',
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '5 Feb 2024',
      userVerified: false,
      image: img,
    },
    {
      id: 3,
      userName: 'ALI',
      userEmail: 'mike@example.com',
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '15 Mar 2024',
      userVerified: true,
      image: img,
    },
   
     {
      id: 1,
      userName: 'UMAR',
      userEmail: 'john@example.com',
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2 Jan 2024',
      userVerified: true,
      image: img,
    },
    {
      id: 2,
      userName: 'ABBASI',
      userEmail: 'jane@example.com',
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '5 Feb 2024',
      userVerified: false,
      image: img,
    },
    {
      id: 3,
      userName: 'ALI',
      userEmail: 'mike@example.com',
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '15 Mar 2024',
      userVerified: true,
      image: img,
    },
   
     {
      id: 1,
      userName: 'UMAR',
      userEmail: 'john@example.com',
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2 Jan 2024',
      userVerified: true,
      image: img,
    },
    {
      id: 2,
      userName: 'ABBASI',
      userEmail: 'jane@example.com',
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '5 Feb 2024',
      userVerified: false,
      image: img,
    },
    {
      id: 3,
      userName: 'ALI',
      userEmail: 'mike@example.com',
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '15 Mar 2024',
      userVerified: true,
      image: img,
    },
   
     {
      id: 1,
      userName: 'UMAR',
      userEmail: 'john@example.com',
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2 Jan 2024',
      userVerified: true,
      image: img,
    },
    {
      id: 2,
      userName: 'ABBASI',
      userEmail: 'jane@example.com',
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '5 Feb 2024',
      userVerified: false,
      image: img,
    },
    {
      id: 3,
      userName: 'ALI',
      userEmail: 'mike@example.com',
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '15 Mar 2024',
      userVerified: true,
      image: img,
    },
   

    // ... Add more data as needed
  ]);

  // Search term state
  const [searchTerm, setSearchTerm] = useState('');

  // Filter state
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filter, setFilter] = useState({
    employer: '',
    welfareCentre: '',
    startDate: '',
    endDate: '',
    sortBy: '',
  });

  // Add/Edit User Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [editUserId, setEditUserId] = useState(null); // To track which user is being edited
  const [newUser, setNewUser] = useState({
    userName: '',
    userEmail: '',
    employerName: '',
    employerEmail: '',
    lastLoginDate: '',
    userVerified: false,
    image: img, // Default image
  });

   const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust this number as needed


  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  // Reset filter values
  const resetFilter = () => {
    setFilter({
      employer: '',
      welfareCentre: '',
      startDate: '',
      endDate: '',
      sortBy: '',
    });
  };

  // Handle filter submission
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setShowFilterModal(false);
    setCurrentPage(1); // Reset to first page after applying filter
  };

  // Handle Add/Edit User form changes
  const handleNewUserChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle Add/Edit User form submission
  const handleAddUserSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (
      !newUser.userName ||
      !newUser.userEmail ||
      !newUser.employerName ||
      !newUser.employerEmail ||
      !newUser.lastLoginDate
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    if (editUserId) {
      // Edit existing user
      setData(prevData =>
        prevData.map(user =>
          user.id === editUserId ? { ...user, ...newUser } : user
        )
      );
      setEditUserId(null);
      alert('User details updated successfully!');
    } else {
      // Add new user
      const newUserEntry = {
        ...newUser,
        id: data.length > 0 ? data[data.length - 1].id + 1 : 1, // Simple ID increment
      };
      setData(prevData => [newUserEntry, ...prevData]);
      alert('New user added successfully!');
    }

    // Reset newUser state
    setNewUser({
      userName: '',
      userEmail: '',
      employerName: '',
      employerEmail: '',
      lastLoginDate: '',
      userVerified: false,
      image: img,
    });
    // Close the modal
    setShowAddModal(false);
  };

  // Handle Edit User
  const handleEditUser = (user) => {
    setEditUserId(user.id);
    setNewUser({
      userName: user.userName,
      userEmail: user.userEmail,
      employerName: user.employerName,
      employerEmail: user.employerEmail,
      lastLoginDate: user.lastLoginDate,
      userVerified: user.userVerified,
      image: user.image,
    });
    setShowAddModal(true);
  };

  // Handle Delete User
  const handleDeleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setData(prevData => prevData.filter(user => user.id !== id));
      alert('User deleted successfully!');
    }
  };

  // Filter data based on the search term and filters
  const filteredData = data.filter((row) => {
    // Search term filter
    const matchesSearch =
      row.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.employerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.employerEmail.toLowerCase().includes(searchTerm.toLowerCase());

    // Employer filter
    const matchesEmployer = filter.employer === '' || row.employerName.toLowerCase().includes(filter.employer.toLowerCase());

    // Welfare Centre filter (assuming welfareCentre is part of data; if not, remove this)
    // const matchesWelfareCentre = filter.welfareCentre === '' || row.welfareCentre.toLowerCase().includes(filter.welfareCentre.toLowerCase());

    // Start Date and End Date filter
    let matchesStartDate = true;
    let matchesEndDate = true;
    if (filter.startDate) {
      const rowDate = new Date(row.lastLoginDate);
      const startDate = new Date(filter.startDate);
      matchesStartDate = rowDate >= startDate;
    }
    if (filter.endDate) {
      const rowDate = new Date(row.lastLoginDate);
      const endDate = new Date(filter.endDate);
      matchesEndDate = rowDate <= endDate;
    }

    return matchesSearch && matchesEmployer && matchesStartDate && matchesEndDate;
  });

  // Sort data based on sortBy filter
  const sortedData = [...filteredData].sort((a, b) => {
    if (filter.sortBy === 'date') {
      return new Date(a.lastLoginDate) - new Date(b.lastLoginDate);
    } else if (filter.sortBy === 'employer') {
      return a.employerName.localeCompare(b.employerName);
    }
    return 0; // No sorting if sortBy is empty
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  // const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfLastItem = itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle CSV export
  const handleExportCSV = () => {
    const csvRows = [];
    const headers = ['User Name', 'User Email', 'Employer Name', 'Employer Email', 'Last Login Date', 'User Verified'];
    csvRows.push(headers.join(','));

    currentData.forEach(row => {
      const values = [
        `"${row.userName}"`,
        `"${row.userEmail}"`,
        `"${row.employerName}"`,
        `"${row.employerEmail}"`,
        `"${row.lastLoginDate}"`,
        row.userVerified ? 'Yes' : 'No',
      ];
      csvRows.push(values.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

   const [employerName, setEmployerName] = useState('');

  const handleAssignEmployer = () => {
    // Yahan tum action dal sakte ho jab button click ho, for example:
    console.log('Assigned Employer:', employerName);
  };






  // Pagination Component
  const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className='flex justify-center mt-6'>
        {/* Left Arrow */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-white text-gray-600 hover:bg-gray-100'} rounded-full border`}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`mx-1 px-4 py-2 rounded-full border ${currentPage === index + 1 ? 'bg-[#00774480] text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
          >
            {index + 1}
          </button>
        ))}

        {/* Right Arrow */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-white text-gray-600 hover:bg-gray-100'} rounded-full border`}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    );
  };
const [users, setUsers] = useState(data); // yahan 'data' aapka initial user data hai

  const updateUserVerification = (id, newStatus) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, userVerified: newStatus } : user
      )
    );
  };





  return (
    <div className='min-h-screen bg-[#f6f6f6] p-4 lg:p-8'>
      {/* Header Section */}
      <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-6'>
        {/* Title and Add Icon */}
        <div className='flex items-center mb-4 lg:mb-0'>
          <h1 className='text-2xl lg:text-3xl font-bold mr-4'>Users</h1>
          {/* Add Icon with Custom Box-Shadow */}
          <button
            onClick={() => {
              setShowAddModal(true);
              setEditUserId(null); // Ensure it's in Add mode
              setNewUser({
                userName: '',
                userEmail: '',
                employerName: '',
                employerEmail: '',
                lastLoginDate: '',
                userVerified: false,
                image: img,
              });
            }}
            className='text-2xl lg:text-3xl bg-[#007744] text-white rounded-full shadow-[0px_4px_12px_0px_rgba(0,119,68,0.5)]'
            title='Add User'
          >
            <IoAdd />
          </button>
        </div>

        {/* Actions: Export CSV, Filter, Search */}
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
          {/* Search Bar */}
          <div className='relative flex items-center bg-white rounded-full h-12 px-4 w-full sm:w-72 lg:w-[28rem] border border-gray-300'>
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

      {/* Table Section */}
      <div className='overflow-x-auto rounded-lg'>
      <table className='min-w-full bg-white overflow-scroll border border-gray-200 rounded-lg'>
        <thead>
          <tr className='bg-[white] h-14'>
            <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>User Name</th>
            <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Employer Name</th>
            <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Last Login Date</th>
            <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Verified</th>
            <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((row) => (
            <tr key={row.id} className='hover:bg-gray-50'>
              <td className='px-4 py-2 border-none text-sm text-gray-600'>
                <div className='flex items-center'>
                  <img src={row.image} alt="user" className='h-10 w-10 rounded-full mr-2' />
                  <div>
                    <h1 className='font-medium'>{row.userName}</h1>
                    <h2 className='text-xs text-gray-500'>{row.userEmail}</h2>
                  </div>
                </div>
              </td>

              <td className='px-4 py-2 border-none text-sm text-gray-600'>
                <div>
                  <h1 className='font-medium'>{row.employerName}</h1>
                  <h2 className='text-xs text-gray-500'>{row.employerEmail}</h2>
                </div>
              </td>

              <td className='px-4 py-2 border-none text-sm text-gray-600 w-32'>{row.lastLoginDate}</td>

              <td className='px-12 py-2 border-none text-2xl text-gray-600'>
                <select
                  value={row.userVerified ? 'Yes' : 'No'}
                  onChange={(e) => {
                    const newStatus = e.target.value === 'Yes';
                    updateUserVerification(row.id, newStatus);
                  }}
                  className='text-[#007744] bg-[#f1f1f2] border-none'
                >
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
                </select>
              </td>

              <td className='px-4 py-2 border-none text-sm text-gray-600'>
                <div className='flex items-center gap-5'>
                  <button
                    onClick={() => handleEditUser(row)}
                    className='text-gray border-6 bg-[#f1f1f2] hover:text-blue-700 h-10 w-10 rounded-xl flex items-center justify-center'
                    title='Edit User'
                  >
                    <IoPencil />
                  </button>

                  <button
                    onClick={() => handleDeleteUser(row.id)}
                    className='text-red-500 hover:text-gray h-10 w-10 flex bg-[#f1f1f2] rounded-xl items-center justify-center'
                    title='Delete User'
                  >
                    <IoTrash />
                  </button>
                </div>
              </td>
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
          <div className='bg-white p-6 rounded-lg shadow-lg w-[450px] h-auto max-h-full overflow-y-auto'>
            <h2 className='text-xl font-bold mb-4'>Filter</h2>
            <form onSubmit={handleFilterSubmit}>
              {/* Employer Name Filter */}
              <div className='mb-4'>
                <label className='block mb-2'>Employer Name:</label>
                <input
                  type='text'
                  name='employer'
                  value={filter.employer}
                  onChange={handleFilterChange}
                  className='border border-gray-300 rounded p-2 w-full'
                  placeholder='Enter Employer Name'
                />
              </div>

              {/* Start Date and End Date */}
              <div className='flex flex-col lg:flex-row lg:gap-4 mb-4'>
                <div className='flex flex-col mb-4 lg:mb-0 flex-1'>
                  <label className='block mb-2'>Start Date:</label>
                  <input
                    type='date'
                    name='startDate'
                    value={filter.startDate}
                    onChange={handleFilterChange}
                    className='border border-gray-300 rounded p-2 w-full'
                    placeholder='Start'
                  />
                </div>
                <div className='flex flex-col flex-1'>
                  <label className='block mb-2'>End Date:</label>
                  <input
                    type='date'
                    name='endDate'
                    value={filter.endDate}
                    onChange={handleFilterChange}
                    className='border border-gray-300 rounded p-2 w-full'
                    placeholder='End'
                  />
                </div>
              </div>

              {/* Sort By */}
              <div className='mb-4'>
                <label className='block mb-2'>Sort By:</label>
                <select
                  name='sortBy'
                  value={filter.sortBy}
                  onChange={handleFilterChange}
                  className='border border-gray-300 rounded p-2 w-full'
                >
                  <option value=''>Choose</option>
                  <option value='date'>Last Login Date</option>
                  <option value='employer'>Employer Name</option>
                </select>
              </div>

              {/* Buttons */}
              <div className='flex justify-center gap-4'>
                <button
                  type='button'
                  onClick={() => {
                    setShowFilterModal(false);
                    resetFilter();
                  }}
                  className='bg-white w-36 border-2 text-black rounded-xl px-4 py-2 hover:bg-gray-100'
                >
                  Reset
                </button>
                <button
                  type='submit'
                  className='bg-[#4fa760] w-36 text-white rounded-xl px-4 py-2 hover:bg-[#3e9450]'
                >
                  Apply Filter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add/Edit User Modal */}
      {showAddModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-[450px] h-auto max-h-full overflow-y-auto'>
            <h2 className='text-xl font-bold mb-4'>{editUserId ? 'Edit User' : 'Add New User'}</h2>
            <form onSubmit={handleAddUserSubmit}>
              {/* User Name */}
              <div className='mb-4'>
                <label className='block mb-2'>User Name:</label>
                <input
                  type='text'
                  name='userName'
                  value={newUser.userName}
                  onChange={handleNewUserChange}
                  className='border border-gray-300 rounded p-2 w-full'
                  placeholder='DANISH'
                />
              </div>

              {/* User Email */}
              <div className='mb-4'>
                <label className='block mb-2'>User Email:</label>
                <input
                  type='email'
                  name='userEmail'
                  value={newUser.userEmail}
                  onChange={handleNewUserChange}
                  className='border border-gray-300 rounded p-2 w-full'
                  placeholder='danish@example.com'
                />
              </div>

              {/* Employer Name */}
              <div className='mb-4'>
                <label className='block mb-2'>Employer Name:</label>
                <input
                  type='text'
                  name='employerName'
                  value={newUser.employerName}
                  onChange={handleNewUserChange}
                  className='border border-gray-300 rounded p-2 w-full'
                  placeholder='Saddique'
                />
              </div>

              {/* Employer Email */}
              <div className='mb-4'>
                <label className='block mb-2'>Employer Email:</label>
                <input
                  type='email'
                  name='employerEmail'
                  value={newUser.employerEmail}
                  onChange={handleNewUserChange}
                  className='border border-gray-300 rounded p-2 w-full'
                  placeholder='saddique@company.com'
                />
              </div>

              {/* Last Login Date */}
              <div className='mb-4'>
                <label className='block mb-2'>Last Login Date:</label>
                <input
                  type='date'
                  name='lastLoginDate'
                  value={newUser.lastLoginDate}
                  onChange={handleNewUserChange}
                  className='border border-gray-300 rounded p-2 w-full'
                  placeholder='2 Jan 2024'
                />
              </div>

              {/* User Verified */}
              <div className='mb-4 flex items-center'>
                <input
                  type='checkbox'
                  name='userVerified'
                  checked={newUser.userVerified}
                  onChange={handleNewUserChange}
                  className='mr-2'
                />
                <label>User Verified</label>
              </div>

              {/* Buttons */}
              <div className='flex justify-center gap-4'>
                <button
                  type='button'
                  onClick={() => {
                    setShowAddModal(false);
                    setEditUserId(null);
                    setNewUser({
                      userName: '',
                      userEmail: '',
                      employerName: '',
                      employerEmail: '',
                      lastLoginDate: '',
                      userVerified: false,
                      image: img,
                    });
                  }}
                  className='bg-white w-36 border-2 text-black rounded-xl px-4 py-2 hover:bg-gray-100'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='bg-[#4fa760] w-36 text-white rounded-xl px-4 py-2 hover:bg-[#3e9450]'
                >
                  {editUserId ? 'Update User' : 'Add User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;

