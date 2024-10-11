// import React, { useState } from 'react';
// import img from './assets/img.png';
// import { TbCloudDownload } from "react-icons/tb";
// import { IoFilter, IoAdd, IoTrash, IoPencil } from "react-icons/io5";
// import { IoSearch } from 'react-icons/io5';

// function Employers() {
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

//   // ... (baqi ka code waise ka waise hai)

//   return (
//     <div className='min-h-screen bg-[#f6f6f6] p-4 lg:p-8'>
//       {/* Header Section */}
//       <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-6'>
//         {/* Title */}
//         <div className='flex items-center mb-4 lg:mb-0'>
//           <h1 className='text-2xl lg:text-3xl font-bold mr-4'>Users</h1>
//         </div>

//         {/* Actions: Add, Export CSV, Filter, Search */}
//         <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full lg:w-auto'>
//           <div className='flex items-center gap-4'>
//             {/* Add Button */}
//             <button
//               onClick={() => {
//                 setShowAddModal(true);
//                 setEditUserId(null); // Ensure it's in Add mode
//                 setNewUser({
//                   userName: '',
//                   userEmail: '',
//                   employerName: '',
//                   employerEmail: '',
//                   lastLoginDate: '',
//                   userVerified: false,
//                   image: img,
//                 });
//               }}
//               className='text-2xl lg:text-3xl bg-[#007744] text-white rounded-full shadow-[0px_4px_12px_0px_rgba(0,119,68,0.5)]'
//               title='Add User'
//             >
//               <IoAdd />
//             </button>

//             {/* Export CSV */}
//             <button onClick={handleExportCSV} className="flex items-center text-lg lg:text-1xl">
//               <TbCloudDownload className='mr-2' />
//               <h1>Export CSV</h1>
//             </button>

//             {/* Filter */}
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
//         <table className='min-w-full bg-white overflow-scroll border border-gray-200 rounded-lg'>
//           <thead>
//             <tr className='bg-[white] h-14'>
//               {/* Employer Name ko User Name se pehle rakha gaya */}
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Employer Name</th>
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>User Name</th>
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Last Login Date</th>
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Verified</th>
//               <th className='px-4 py-2 border-b text-left text-sm font-medium text-[48525B]'>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((row) => (
//               <tr key={row.id} className='hover:bg-gray-50'>
//                 {/* Employer Name pehle */}
//                 <td className='px-4 py-2 border-none text-sm text-gray-600'>
//                   <div>
//                     <h1 className='font-medium'>{row.employerName}</h1>
//                     <h2 className='text-xs text-gray-500'>{row.employerEmail}</h2>
//                   </div>
//                 </td>

//                 {/* User Name */}
//                 <td className='px-4 py-2 border-none text-sm text-gray-600'>
//                   <div className='flex items-center'>
//                     <img src={row.image} alt="user" className='h-10 w-10 rounded-full mr-2' />
//                     <div>
//                       <h1 className='font-medium'>{row.userName}</h1>
//                       <h2 className='text-xs text-gray-500'>{row.userEmail}</h2>
//                     </div>
//                   </div>
//                 </td>

//                 <td className='px-4 py-2 border-none text-sm text-gray-600 w-32'>{row.lastLoginDate}</td>

//                 <td className='px-12 py-2 border-none text-2xl text-gray-600'>
//                   <select
//                     value={row.userVerified ? 'Yes' : 'No'}
//                     onChange={(e) => {
//                       const newStatus = e.target.value === 'Yes';
//                       updateUserVerification(row.id, newStatus);
//                     }}
//                     className='text-[#007744] bg-[#f1f1f2] border-none'
//                   >
//                     <option value='Yes'>Yes</option>
//                     <option value='No'>No</option>
//                   </select>
//                 </td>

//                 <td className='px-4 py-2 border-none text-sm text-gray-600'>
//                   <div className='flex items-center gap-5'>
//                     <button
//                       onClick={() => handleEditUser(row)}
//                       className='text-gray border-6 bg-[#f1f1f2] hover:text-blue-700 h-10 w-10 rounded-xl flex items-center justify-center'
//                       title='Edit User'
//                     >
//                       <IoPencil />
//                     </button>

//                     <button
//                       onClick={() => handleDeleteUser(row.id)}
//                       className='text-red-500 hover:text-gray h-10 w-10 flex bg-[#f1f1f2] rounded-xl items-center justify-center'
//                       title='Delete User'
//                     >
//                       <IoTrash />
//                     </button>
//                   </div>
//                 </td>
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

//       {/* ... (baqi ka code waise ka waise hai) */}
//     </div>
//   );
// }

// export default Employers;






import React, { useState } from 'react';
import img from './assets/img.png'; // Ensure the path to your image is correct
import { TbCloudDownload } from "react-icons/tb";
import { IoFilter, IoAdd, IoTrash, IoPencil } from "react-icons/io5";
import { IoSearch } from 'react-icons/io5';
import { AiFillEdit, AiFillDelete, AiOutlineClose } from "react-icons/ai";

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

function Employers() {
  // Initial sample data with necessary fields
  const [data, setData] = useState([
    {
      id: 1,
      employerName: 'UMAR',
      employerEmail: 'contact@companya.com',
      lastLoginDate: '2024-01-02',
      employerVerified: true,
      image: img,
    },
    {
      id: 2,
      employerName: 'ABBASI',
      employerEmail: 'contact@companyb.com',
      lastLoginDate: '2024-02-05',
      employerVerified: false,
      image: img,
    },
    {
      id: 3,
      employerName: 'ALI',
      employerEmail: 'contact@companyc.com',
      lastLoginDate: '2024-03-15',
      employerVerified: true,
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
    startDate: '',
    endDate: '',
    sortBy: '',
  });

  // Add/Edit Employer Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [editEmployerId, setEditEmployerId] = useState(null); // To track which employer is being edited
  const [newEmployer, setNewEmployer] = useState({
    employerName: '',
    employerEmail: '',
    lastLoginDate: '',
    employerVerified: false,
    image: img, // Default image
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Adjust this number as needed

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

  // Handle Add/Edit Employer form changes
  const handleNewEmployerChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewEmployer(prevEmployer => ({
      ...prevEmployer,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle Add/Edit Employer form submission
  const handleAddEmployerSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (
      !newEmployer.employerName ||
      !newEmployer.employerEmail ||
      !newEmployer.lastLoginDate
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    if (editEmployerId) {
      // Edit existing employer
      setData(prevData =>
        prevData.map(employer =>
          employer.id === editEmployerId ? { ...employer, ...newEmployer } : employer
        )
      );
      setEditEmployerId(null);
      alert('Employer details updated successfully!');
    } else {
      // Add new employer
      const newEmployerEntry = {
        ...newEmployer,
        id: data.length > 0 ? data[data.length - 1].id + 1 : 1, // Simple ID increment
      };
      setData(prevData => [newEmployerEntry, ...prevData]);
      alert('New employer added successfully!');
    }

    // Reset newEmployer state
    setNewEmployer({
      employerName: '',
      employerEmail: '',
      lastLoginDate: '',
      employerVerified: false,
      image: img,
    });
    // Close the modal
    setShowAddModal(false);
  };

  // Handle Edit Employer
  const handleEditEmployer = (employer) => {
    setEditEmployerId(employer.id);
    setNewEmployer({
      employerName: employer.employerName,
      employerEmail: employer.employerEmail,
      lastLoginDate: employer.lastLoginDate,
      employerVerified: employer.employerVerified,
      image: employer.image,
    });
    setShowAddModal(true);
  };

  // Handle Delete Employer
  const handleDeleteEmployer = (id) => {
    if (window.confirm('Are you sure you want to delete this employer?')) {
      setData(prevData => prevData.filter(employer => employer.id !== id));
      alert('Employer deleted successfully!');
    }
  };

  // Handle Toggle Active/Inactive
  const handleToggleActive = (id) => {
    setData(prevData =>
      prevData.map(employer =>
        employer.id === id ? { ...employer, employerVerified: !employer.employerVerified } : employer
      )
    );
  };

  // Filter data based on the search term and filters
  const filteredData = data.filter((row) => {
    // Search term filter
    const matchesSearch =
      row.employerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.employerEmail.toLowerCase().includes(searchTerm.toLowerCase());

    // Employer filter
    const matchesEmployer = filter.employer === '' || row.employerName.toLowerCase().includes(filter.employer.toLowerCase());

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
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Handle CSV export
  const handleExportCSV = () => {
    const csvRows = [];
    const headers = ['Employer Name', 'Employer Email', 'Last Login Date', 'Verified'];
    csvRows.push(headers.join(','));

    currentData.forEach(row => {
      const values = [
        `"${row.employerName}"`,
        `"${row.employerEmail}"`,
        `"${row.lastLoginDate}"`,
        row.employerVerified ? 'Yes' : 'No',
      ];
      csvRows.push(values.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'employers.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Update Employer Verification (Alternative to handleToggleActive if needed)
  const updateEmployerVerification = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((employer) =>
        employer.id === id ? { ...employer, employerVerified: newStatus } : employer
      )
    );
  };

  const [newData, setNewData] = useState({
    firstName: '',
    location: '',
    pointOfContact: { name: '', email: '' },
    phoneNumber: '',
    description: '',
    isActive: true,
  });

  const handleAddData = () => {
    // Validate required fields
    if (
      !newData.firstName ||
      !newData.location ||
      !newData.pointOfContact.name ||
      !newData.pointOfContact.email ||
      !newData.phoneNumber
    ) {
      alert('Please fill all required fields.');
      return;
    }

    setTableData([...tableData, newData]);
    setNewData({
      firstName: '',
      location: '',
      pointOfContact: { name: '', email: '' },
      phoneNumber: '',
      description: '',
      isActive: true,
    });
    setShowAddModal(false);
  };

  return (
    <div className='min-h-screen bg-[#f6f6f6] p-4 lg:p-8'>
      {/* Header Section */}
      <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-6'>
        {/* Title */}
        <div className='flex items-center mb-4 lg:mb-0'>
          <h1 className='text-2xl lg:text-3xl font-bold mr-4'>Employers</h1>
        </div>

        {/* Actions: Add, Export CSV, Filter, Search */}
        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full lg:w-auto'>
          <div className='flex items-center gap-4'>
            {/* Add Button */}
            <button
              onClick={() => {
                setShowAddModal(true);
                setEditEmployerId(null); // Ensure it's in Add mode
                setNewEmployer({
                  employerName: '',
                  employerEmail: '',
                  lastLoginDate: '',
                  employerVerified: false,
                  image: img,
                });
              }}
              className='text-2xl lg:text-3xl bg-[#007744] text-white rounded-full shadow-[0px_4px_12px_0px_rgba(0,119,68,0.5)]'
              title='Add Employer'
            >
              <IoAdd />
            </button>

            {/* Export CSV */}
            <button onClick={handleExportCSV} className="flex items-center text-lg lg:text-1xl">
              <TbCloudDownload className='mr-2' />
              <h1>Export CSV</h1>
            </button>

            {/* Filter */}
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
              placeholder='Search any employer'
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
            <tr className='bg-white h-14'>
              <th className='py-2 px-4 border-b text-center text-sm font-medium text-[#48525B]'>Employer Name</th>
              <th className='py-2 px-4 border-b text-center text-sm font-medium text-[#48525B]'>Employer Email</th>
              <th className='py-2 px-4 border-b text-center text-sm font-medium text-[#48525B]'>Last Login Date</th>
              <th className='py-2 px-4 border-b text-center text-sm font-medium text-[#48525B]'>Verified</th>
              <th className='py-2 px-4 border-b text-center text-sm font-medium text-[#48525B]'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row) => (
                <tr key={row.id} className='hover:bg-gray-50'>
                  {/* Employer Name */}
                  <td className='py-2 px-4 border-none text-sm text-gray-600 text-center'>
                    <div>{row.employerName}</div>
                  </td>

                  {/* Employer Email */}
                  <td className='py-2 px-4 border-none text-sm text-gray-600 text-center'>
                    <div>{row.employerEmail}</div>
                  </td>

                  {/* Last Login Date */}
                  <td className='py-2 px-4 border-none text-sm text-gray-600 text-center'>{new Date(row.lastLoginDate).toLocaleDateString()}</td>

                  {/* Verified */}
                  <td className='py-2 px-4 border-none text-center'>
                    <label className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type='checkbox'
                        className='sr-only'
                        checked={row.employerVerified}
                        onChange={() => handleToggleActive(row.id)}
                      />
                      <div className='w-10 h-6 bg-[#EFEFEF] rounded-full'></div>
                      <div
                        className={`dot absolute left-1 top-1 bg-[#FFFFFF] w-4 h-4 rounded-full transition ${
                          row.employerVerified ? 'transform translate-x-full bg-[#4fa760]' : ''
                        }`}
                      ></div>
                    </label>
                  </td>

                  {/* Actions */}
                  <td className='py-2 px-4 border-none text-sm text-gray-600 text-center'>
                    <div className='flex justify-center items-center gap-3'>
                      <button
                        onClick={() => handleEditEmployer(row)}
                        className='text-[#4fa760] bg-[#F1F1F2] rounded-lg h-8 w-8 flex items-center justify-center hover:text-blue-700'
                        title='Edit Employer'
                      >
                        <AiFillEdit />
                      </button>

                      <button
                        onClick={() => handleDeleteEmployer(row.id)}
                        className='text-red-500 bg-[#F1F1F2] rounded-lg h-8 w-8 flex items-center justify-center hover:text-red-700'
                        title='Delete Employer'
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='5' className='text-center py-4'>
                  No matching records found.
                </td>
              </tr>
            )}
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

      {/* Add/Edit Employer Modal */}
      {showAddModal && (
          <div
            className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
            onClick={() => setShowAddModal(false)}
          >
            <div
              className='bg-white p-6 rounded-lg shadow-lg w-[522px] relative'
              onClick={(e) => e.stopPropagation()}   >
             
              <button
                onClick={() => setShowAddModal(false)}
                className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
                title='Close'
              >
                <AiOutlineClose size={24} />
              </button>

              <h2 className='text-xl mb-4'>Add Welfare Center</h2>
              <label className='block mb-1'>Welfare Center Name</label>
              <input
                type='text'
                placeholder='Enter Welfare Center Name'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={newData.firstName}
                onChange={(e) => setData({ ...newData, firstName: e.target.value })}
              />
              <label className='block mb-1'>Location</label>
              <input
                type='text'
                placeholder='Enter the welfare center location'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={newData.location}
                onChange={(e) => setData({ ...newData, location: e.target.value })}
              />
              <label className='block mb-1'>Description</label>
              <textarea
                placeholder='Description'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={newData.description}
                onChange={(e) => setData({ ...newData, description: e.target.value })}
              ></textarea>
              <label className='block mb-1'>Point of Contact</label>
              <input
                type='text'
                placeholder='Point of Contact Name'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={newData.pointOfContact.name}
                onChange={(e) =>
                  setData({
                    ...newData,
                    pointOfContact: { ...newData.pointOfContact, name: e.target.value },
                  })
                }
              />
              <label className='block mb-1'>Phone</label>
              <input
                type='text'
                placeholder='Phone Number'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={newData.phoneNumber}
                onChange={(e) => setData({ ...newData, phoneNumber: e.target.value })}
              />
              <label className='block mb-1'>Email Address</label>
              <input
                type='email'
                required
                placeholder='Enter the contact email address'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={newData.pointOfContact.email}
                onChange={(e) =>
                  setData({
                    ...newData,
                    pointOfContact: { ...newData.pointOfContact, email: e.target.value },
                  })
                }
              />

              <div className='flex justify-between mt-4'>
                <button
                  onClick={() => setShowAddModal(false)}
                  className='bg-gray-300 text-black w-60 rounded-lg py-2 px-4 mr-2'
                >
                  Discard
                </button>
                <button
                  onClick={handleAddData}
                  className='bg-green-500 text-white w-60 rounded-lg py-2 px-4'
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default Employers;
