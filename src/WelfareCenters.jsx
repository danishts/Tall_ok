

// import React, { useState } from 'react';
// import { IoAdd, IoFilter, IoSearch } from 'react-icons/io5';
// import { TbCloudDownload } from 'react-icons/tb';
// import { AiFillEdit, AiFillDelete, AiOutlineClose } from 'react-icons/ai'; // Import close icon

// function WelfareCenters() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showFilterModal, setShowFilterModal] = useState(false);

//   const [tableData, setTableData] = useState([
//     {
//       firstName: 'John',
//       location: 'Location A',
//       pointOfContact: {
//         name: 'Alice Smith',
//         email: 'alice@example.com',
//       },
//       phoneNumber: '123-456-7890',
//       description: 'Description for John',
//       isActive: true,
//     },
//     {
//       firstName: 'Jane',
//       location: 'Location B',
//       pointOfContact: {
//         name: 'Bob Johnson',
//         email: 'bob@example.com',
//       },
//       phoneNumber: '098-765-4321',
//       description: 'Description for Jane',
//       isActive: false,
//     },
//   ]);

//   const [newData, setNewData] = useState({
//     firstName: '',
//     location: '',
//     pointOfContact: { name: '', email: '' },
//     phoneNumber: '',
//     description: '',
//     isActive: true,
//   });

//   const handleToggleActive = (index) => {
//     const updatedData = [...tableData];
//     updatedData[index].isActive = !updatedData[index].isActive;
//     setTableData(updatedData);
//   };

//   const handleAddData = () => {
//     // Validate required fields if needed
//     if (!newData.firstName || !newData.location || !newData.pointOfContact.name || !newData.pointOfContact.email || !newData.phoneNumber) {
//       alert("Please fill all required fields.");
//       return;
//     }
//     setTableData([...tableData, newData]);
//     setNewData({
//       firstName: '',
//       location: '',
//       pointOfContact: { name: '', email: '' },
//       phoneNumber: '',
//       description: '',
//       isActive: true,
//     });
//     setShowAddModal(false);
//   };

//   return (
//     <div className='min-h-screen bg-[#f6f6f6] p-4 lg:p-8'>
//       <div className="p-4">
//         <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-6'>
//           <div className='flex items-center mb-4 lg:mb-0'>
//             <h1 className='text-2xl lg:text-3xl font-bold mr-4'>Welfare Centers</h1>
//             <button
//               onClick={() => {
//                 setShowAddModal(true);
//               }}
//               className='text-2xl lg:text-3xl bg-[#007744] text-white rounded-full shadow-[0px_4px_12px_0px_rgba(0,119,68,0.5)] flex items-center justify-center'
//               title='Add Welfare Center'
//             >
//               <IoAdd />
//             </button>
//           </div>

//           <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full lg:w-auto'>
//             <div className='flex items-center gap-4'>
//               <button onClick={() => {/* Handle CSV Export */}} className="flex items-center text-lg lg:text-1xl">
//                 <TbCloudDownload className='mr-2' />
//                 <h1>Export CSV</h1>
//               </button>
//               <div className='flex justify-center items-center text-xl lg:text-1xl gap-3 h-12 w-28 lg:h-10 lg:w-36 rounded-full bg-white px-4 cursor-pointer' onClick={() => setShowFilterModal(true)}>
//                 <IoFilter />
//                 <h1>Filter</h1>
//               </div>
//             </div>
//             <div className='relative flex items-center bg-white rounded-full h-12 px-4 w-full sm:w-72 lg:w-[28rem] border border-gray-300'>
//               <IoSearch className='absolute left-3 text-gray-500 text-xl' />
//               <input
//                 type='text'
//                 placeholder='Search any welfare/user'
//                 className='bg-transparent outline-none w-full text-base lg:text-lg pl-10'
//                 value={searchTerm}
//                 onChange={(e) => {
//                   setSearchTerm(e.target.value);
//                   setCurrentPage(1);
//                 }}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="p-1 rounded-lg bg-white border-2 border-solid border-[#7777778C]">
//           <table className="min-w-full ">
//             <thead>
//               <tr className="bg-white">
//                 <th className="py-2 px-4 border-b text-center">First Name</th>
//                 <th className="py-2 px-4 border-b text-center">Point of Contact</th>
//                 <th className="py-2 px-4 border-b text-center">Phone Number</th>
//                 <th className="py-2 px-4 border-b text-center">Description</th>
//                 <th className="py-2 px-4 border-b text-center">Active/Inactive</th>
//                 <th className="py-2 px-4 border-b text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((data, index) => (
//                 <tr key={index} className="border-none">
//                   <td className="py-2 px-4 border-none text-center">
//                     <div>{data.firstName}</div>
//                     <div className="text-gray-500">{data.location}</div>
//                   </td>
//                   <td className="py-2 px-4 border-none text-center">
//                     <div>{data.pointOfContact.name}</div>
//                     <div className="text-gray-500">{data.pointOfContact.email}</div>
//                   </td>
//                   <td className="py-2 px-4 border-none text-center">{data.phoneNumber}</td>
//                   <td className="py-2 px-4 border-none text-center">{data.description}</td>
//                   <td className="py-2 px-4 border-none text-center">
//                     <label className="relative inline-flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         className="sr-only"
//                         checked={data.isActive}
//                         onChange={() => handleToggleActive(index)}
//                       />
//                       <div className="w-10 h-6 bg-[#EFEFEF] rounded-full"></div>
//                       <div className={`dot absolute left-1 top-1 bg-[#FFFFFF] w-4 h-4 rounded-full transition ${data.isActive ? 'transform translate-x-full bg-[#F1F1F2] ' : ''}`}></div>
//                     </label>
//                   </td>
//                   <td className="py-2 flex justify-center border-none items-center gap-3 px-4 ">
//                     <AiFillEdit className="text-[#A1A5B7] border-3 bg-[#F1F1F2] rounded-lg h-8 w-8 cursor-pointer mr-2" title="Edit" />
//                     <AiFillDelete className="text-[#A1A5B7] border-3 h-8 w-8 bg-[#F1F1F2] rounded-lg justify-center items-center cursor-pointer" title="Delete" />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Add Modal */}
//         {showAddModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setShowAddModal(false)}>
//             <div className="bg-white p-6 rounded-lg shadow-lg w-[522px] relative" onClick={(e) => e.stopPropagation()}>
//               {/* Close Icon */}
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//                 title="Close"
//               >
//                 <AiOutlineClose size={24} />
//               </button>

//               <h2 className="text-xl mb-4">Add Welfare Center</h2>
//               <label className="block mb-1">Welfare Center Name</label>
//               <input
//                 type="text" // Corrected type
//                 placeholder="Enter Welfare Center Name"
//                 className="border border-gray-300 rounded p-2 w-full mb-2"
//                 value={newData.firstName}
//                 onChange={(e) => setNewData({ ...newData, firstName: e.target.value })}
//               />
//               <label className="block mb-1">Location</label>
//               <input
//                 type="text"
//                 placeholder="Enter the welfare center location"
//                 className="border border-gray-300 rounded p-2 w-full mb-2"
//                 value={newData.location}
//                 onChange={(e) => setNewData({ ...newData, location: e.target.value })}
//               />
//               <label className="block mb-1">Description</label>
//               <textarea
//                 placeholder="Description"
//                 className="border border-gray-300 rounded p-2 w-full mb-2"
//                 value={newData.description}
//                 onChange={(e) => setNewData({ ...newData, description: e.target.value })}
//               ></textarea>
//               <label className="block mb-1">Point of Contact</label>
//               <input
//                 type="text"
//                 placeholder="Point of Contact Name"
//                 className="border border-gray-300 rounded p-2 w-full mb-2"
//                 value={newData.pointOfContact.name}
//                 onChange={(e) => setNewData({ ...newData, pointOfContact: { ...newData.pointOfContact, name: e.target.value } })}
//               />
//               <label className="block mb-1">Phone</label>
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="border border-gray-300 rounded p-2 w-full mb-2"
//                 value={newData.phoneNumber}
//                 onChange={(e) => setNewData({ ...newData, phoneNumber: e.target.value })}
//               />
//               <label className="block mb-1">Email Address</label>
//               <input
//                 type="email"
//                 required
//                 placeholder="Enter the contact email address"
//                 className="border border-gray-300 rounded p-2 w-full mb-2"
//                 value={newData.pointOfContact.email}
//                 onChange={(e) => setNewData({ ...newData, pointOfContact: { ...newData.pointOfContact, email: e.target.value } })}
//               />

//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={() => setShowAddModal(false)}
//                   className="bg-gray-300 text-black w-60 rounded-lg py-2 px-4 mr-2"
//                 >
//                   Discard
//                 </button>
//                 <button
//                   onClick={handleAddData}
//                   className="bg-green-500 text-white w-60 rounded-lg py-2 px-4"
//                 >
//                   Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default WelfareCenters;










import React, { useState, useMemo } from 'react';
import { IoAdd, IoFilter, IoSearch } from 'react-icons/io5';
import { TbCloudDownload } from 'react-icons/tb';
import { AiFillEdit, AiFillDelete, AiOutlineClose } from 'react-icons/ai';

function WelfareCenters() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const [tableData, setTableData] = useState([
    {
      firstName: 'John',
      location: 'Location A',
      pointOfContact: {
        name: 'Alice Smith',
        email: 'alice@example.com',
      },
      phoneNumber: '123-456-7890',
      description: 'Description for John',
      isActive: true,
    },
    {
      firstName: 'Jane',
      location: 'Location B',
      pointOfContact: {
        name: 'Bob Johnson',
        email: 'bob@example.com',
      },
      phoneNumber: '098-765-4321',
      description: 'Description for Jane',
      isActive: false,
    },
    // Add more data as needed
  ]);

  const [newData, setNewData] = useState({
    firstName: '',
    location: '',
    pointOfContact: { name: '', email: '' },
    phoneNumber: '',
    description: '',
    isActive: true,
  });

  // New State Variables for Editing
  const [selectedData, setSelectedData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleToggleActive = (index) => {
    const updatedData = [...tableData];
    updatedData[index].isActive = !updatedData[index].isActive;
    setTableData(updatedData);
  };

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

  // CSV Export Function
  const exportCSV = () => {
    const headers = [
      'First Name',
      'Location',
      'Point of Contact Name',
      'Point of Contact Email',
      'Phone Number',
      'Description',
      'Active',
    ];

    const rows = tableData.map((item) => [
      `"${item.firstName.replace(/"/g, '""')}"`,
      `"${item.location.replace(/"/g, '""')}"`,
      `"${item.pointOfContact.name.replace(/"/g, '""')}"`,
      `"${item.pointOfContact.email.replace(/"/g, '""')}"`,
      `"${item.phoneNumber.replace(/"/g, '""')}"`,
      `"${item.description.replace(/"/g, '""')}"`,
      item.isActive ? 'Active' : 'Inactive',
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      headers.join(',') +
      '\n' +
      rows.map((e) => e.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'welfare_centers.csv');
    document.body.appendChild(link); // Required for FF

    link.click();
    document.body.removeChild(link);
  };

  // Filtered Data Based on Search Term using useMemo for optimization
  const filteredData = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return tableData.filter((item) => {
      return (
        item.firstName.toLowerCase().includes(searchLower) ||
        item.location.toLowerCase().includes(searchLower) ||
        item.pointOfContact.name.toLowerCase().includes(searchLower) ||
        item.pointOfContact.email.toLowerCase().includes(searchLower) ||
        item.phoneNumber.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      );
    });
  }, [searchTerm, tableData]);

  const handleDelete = (data) => {
    // Confirm before deleting
    if (window.confirm(`Are you sure you want to delete ${data.firstName}?`)) {
      setTableData(tableData.filter((item) => item !== data));
    }
  };

  // Handle Edit Icon Click
  const handleEdit = (data) => {
    setSelectedData(data);
    setShowEditModal(true);
  };

  // Handle Update Data
  const handleUpdateData = () => {
    // Validate required fields
    if (
      !selectedData.firstName ||
      !selectedData.location ||
      !selectedData.pointOfContact.name ||
      !selectedData.pointOfContact.email ||
      !selectedData.phoneNumber
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const updatedTableData = tableData.map((item) =>
      item === selectedData ? selectedData : item
    );
    setTableData(updatedTableData);
    setShowEditModal(false);
    setSelectedData(null);
  };

  return (
    <div className='min-h-screen bg-[#f6f6f6] p-4 lg:p-8'>
      <div className='p-4'>
        {/* Header Section */}
        <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-6'>
          <div className='flex items-center mb-4 lg:mb-0'>
            <h1 className='text-2xl lg:text-3xl font-bold mr-4'>Welfare Centers</h1>
            <button
              onClick={() => setShowAddModal(true)}
              className='text-2xl lg:text-3xl bg-[#007744] text-white rounded-full shadow-[0px_4px_12px_0px_rgba(0,119,68,0.5)] flex items-center justify-center'
              title='Add Welfare Center'
            >
              <IoAdd />
            </button>
          </div>

          <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full lg:w-auto'>
            <div className='flex items-center gap-4'>
              <button onClick={exportCSV} className='flex items-center text-lg lg:text-1xl'>
                <TbCloudDownload className='mr-2' />
                <h1>Export CSV</h1>
              </button>
              <div
                className='flex justify-center items-center text-xl lg:text-1xl gap-3 h-12 w-28 lg:h-10 lg:w-36 rounded-full bg-white px-4 cursor-pointer'
                onClick={() => setShowFilterModal(true)}
              >
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
        <div className='p-1 rounded-lg bg-white border-2 border-solid border-[#7777778C]'>
          <table className='min-w-full '>
            <thead>
              <tr className='bg-white'>
                <th className='py-2 px-4 border-b text-center'>First Name</th>
                <th className='py-2 px-4 border-b text-center'>Point of Contact</th>
                <th className='py-2 px-4 border-b text-center'>Phone Number</th>
                <th className='py-2 px-4 border-b text-center'>Description</th>
                <th className='py-2 px-4 border-b text-center'>Active/Inactive</th>
                <th className='py-2 px-4 border-b text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((data, index) => (
                  <tr key={index} className='border-none'>
                    <td className='py-2 px-4 border-none text-center'>
                      <div>{data.firstName}</div>
                      <div className='text-gray-500'>{data.location}</div>
                    </td>
                    <td className='py-2 px-4 border-none text-center'>
                      <div>{data.pointOfContact.name}</div>
                      <div className='text-gray-500'>{data.pointOfContact.email}</div>
                    </td>
                    <td className='py-2 px-4 border-none text-center'>{data.phoneNumber}</td>
                    <td className='py-2 px-4 border-none text-center'>{data.description}</td>
                    <td className='py-2 px-4 border-none text-center'>
                      <label className='relative inline-flex items-center cursor-pointer'>
                        <input
                          type='checkbox'
                          className='sr-only'
                          checked={data.isActive}
                          onChange={() => handleToggleActive(index)}
                        />
                        <div className='w-10 h-6 bg-[#EFEFEF] rounded-full'></div>
                        <div
                          className={`dot absolute left-1 top-1 bg-[#FFFFFF] w-4 h-4 rounded-full transition ${
                            data.isActive ? 'transform translate-x-full bg-[#F1F1F2]' : ''
                          }`}
                        ></div>
                      </label>
                    </td>
                    <td className='py-2 flex justify-center border-none items-center gap-3 px-4 '>
                      <AiFillEdit
                        className='text-[#A1A5B7] border-3 bg-[#F1F1F2] rounded-lg h-8 w-8 cursor-pointer mr-2'
                        title='Edit'
                        onClick={() => handleEdit(data)} // Open Edit Modal
                      />
                      <AiFillDelete
                        className='text-[#A1A5B7] border-3 h-8 w-8 bg-[#F1F1F2] rounded-lg justify-center items-center cursor-pointer'
                        title='Delete'
                        onClick={() => handleDelete(data)} // Pass the current item
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan='6' className='text-center py-4'>
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Add Modal */}
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
                onChange={(e) => setNewData({ ...newData, firstName: e.target.value })}
              />
              <label className='block mb-1'>Location</label>
              <input
                type='text'
                placeholder='Enter the welfare center location'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={newData.location}
                onChange={(e) => setNewData({ ...newData, location: e.target.value })}
              />
              <label className='block mb-1'>Description</label>
              <textarea
                placeholder='Description'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={newData.description}
                onChange={(e) => setNewData({ ...newData, description: e.target.value })}
              ></textarea>
              <label className='block mb-1'>Point of Contact</label>
              <input
                type='text'
                placeholder='Point of Contact Name'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={newData.pointOfContact.name}
                onChange={(e) =>
                  setNewData({
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
                onChange={(e) => setNewData({ ...newData, phoneNumber: e.target.value })}
              />
              <label className='block mb-1'>Email Address</label>
              <input
                type='email'
                required
                placeholder='Enter the contact email address'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={newData.pointOfContact.email}
                onChange={(e) =>
                  setNewData({
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

        {/* Edit Modal */}
        {showEditModal && selectedData && (
          <div
            className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
            onClick={() => setShowEditModal(false)}
          >
            <div
              className='bg-white p-6 rounded-lg shadow-lg w-[522px] relative'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <button
                onClick={() => setShowEditModal(false)}
                className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
                title='Close'
              >
                <AiOutlineClose size={24} />
              </button>

              <h2 className='text-xl mb-4'>Edit Welfare Center</h2>
              <label className='block mb-1'>Welfare Center Name</label>
              <input
                type='text'
                placeholder='Enter Welfare Center Name'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={selectedData.firstName}
                onChange={(e) =>
                  setSelectedData({ ...selectedData, firstName: e.target.value })
                }
              />
              <label className='block mb-1'>Location</label>
              <input
                type='text'
                placeholder='Enter the welfare center location'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={selectedData.location}
                onChange={(e) =>
                  setSelectedData({ ...selectedData, location: e.target.value })
                }
              />
              <label className='block mb-1'>Description</label>
              <textarea
                placeholder='Description'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={selectedData.description}
                onChange={(e) =>
                  setSelectedData({ ...selectedData, description: e.target.value })
                }
              ></textarea>
              <label className='block mb-1'>Point of Contact</label>
              <input
                type='text'
                placeholder='Point of Contact Name'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={selectedData.pointOfContact.name}
                onChange={(e) =>
                  setSelectedData({
                    ...selectedData,
                    pointOfContact: { ...selectedData.pointOfContact, name: e.target.value },
                  })
                }
              />
              <label className='block mb-1'>Phone</label>
              <input
                type='text'
                placeholder='Phone Number'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={selectedData.phoneNumber}
                onChange={(e) =>
                  setSelectedData({ ...selectedData, phoneNumber: e.target.value })
                }
              />
              <label className='block mb-1'>Email Address</label>
              <input
                type='email'
                required
                placeholder='Enter the contact email address'
                className='border border-gray-300 rounded p-2 w-full mb-2'
                value={selectedData.pointOfContact.email}
                onChange={(e) =>
                  setSelectedData({
                    ...selectedData,
                    pointOfContact: { ...selectedData.pointOfContact, email: e.target.value },
                  })
                }
              />

              <div className='flex justify-between mt-4'>
                <button
                  onClick={() => setShowEditModal(false)}
                  className='bg-gray-300 text-black w-60 rounded-lg py-2 px-4 mr-2'
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateData}
                  className='bg-blue-500 text-white w-60 rounded-lg py-2 px-4'
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filter Modal (Implementation can be added as needed) */}
        {showFilterModal && (
          <div
            className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
            onClick={() => setShowFilterModal(false)}
          >
            <div
              className='bg-white p-6 rounded-lg shadow-lg w-[400px] relative'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <button
                onClick={() => setShowFilterModal(false)}
                className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
                title='Close'
              >
                <AiOutlineClose size={24} />
              </button>

              <h2 className='text-xl mb-4'>Filter Welfare Centers</h2>
              {/* Add filter options as needed */}
              <p>Filter options go here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WelfareCenters;
