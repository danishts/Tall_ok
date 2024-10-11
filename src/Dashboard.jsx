
// import React from 'react';
// import heart from './assets/heart.png';
// function Dashboard() {
//   return (
//     <div className='flex flex-col  p-9'>
//       <div className='font-semibold flex flex-col h-24'>
//         <h1 className='text-3xl'>Statistics</h1>
//         <p className='text-[#33333366]'>Overall Information</p>
//       </div>

//       <div className='flex flex-wrap justify-around  gap-10'>
//         <div className='h-[165px] w-[280px] sm-w-full  bg-[#ddece7] rounded-lg flex'>
//           <div className='flex justify-center px-16 flex-col  '>
//             <p className='font-semibold'>Total Welfare </p>
//             <p className='font-semibold'>Centres</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//             <div>
//                <img src={heart} alt="heart" className="w-16 h-16" />
//             </div>
//           </div>
//         </div>
//         <div className='h-[165px] sm-w-full w-[280px] bg-[#ddece7] rounded-lg flex items-center justify-center'>
//           <p className='text-xl font-bold'>Data Here</p>
//         </div>
//         <div className='h-[165px] sm-w-full w-[283px] bg-[#ddece7] rounded-lg flex items-center justify-center'>
//           <p className='text-xl font-bold'>Data Here</p>
//         </div>
//         <div className='h-[165px] sm-w-full w-[283px] bg-[#ddece7] rounded-lg flex items-center justify-center'>
//           <p className='text-xl font-bold'>Data Here</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;









// import React from 'react';
// import heart from './assets/heart.png';

// function Dashboard() {
//   return (
//     <div className='flex flex-col p-9'>
//       <div className='font-semibold flex flex-col h-24'>
//         <h1 className='text-3xl'>Statistics</h1>
//         <p className='text-[#33333366]'>Overall Information</p>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
//         {/* Card 1 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Welfare</p>
//             <p className='font-semibold'>Centres</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 2 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Users</p>
            
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 3 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Employers</p>
            
//             <h1 className='font-semibold text-2xl'>412</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 4 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Check-ins</p>
            
//             <h1 className='font-semibold text-2xl'>1,011</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>
//       </div>

//       <div className='h-16 flex items-center'>
//         <h1 className='text-3xl'>Recent Check-ins</h1>
//       </div>
//       <div className='h-16 flex gap-3'>

//         <h1 className='text-2xl text-[#33333366]'>Overall Information</h1>
//         <p className=' text-2xl'>+6% than last month  </p>
//       </div>


//     </div>
//   );
// }

// export default Dashboard;















// import React from 'react';
// import heart from './assets/heart.png';
// import img from './assets/img.png'; // Replace with your goal image path

// function Dashboard() {
//   return (
//     <div className='flex flex-col p-9'>
//       <div className='font-semibold flex flex-col h-24'>
//         <h1 className='text-3xl'>Statistics</h1>
//         <p className='text-[#33333366]'>Overall Information</p>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
//         {/* Card 1 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Welfare</p>
//             <p className='font-semibold'>Centres</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 2 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Users</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 3 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Employers</p>
//             <h1 className='font-semibold text-2xl'>412</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 4 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Check-ins</p>
//             <h1 className='font-semibold text-2xl'>1,011</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>
//       </div>

//       <div className='h-16 flex items-center'>
//         <h1 className='text-3xl'>Recent Check-ins</h1>
//       </div>
//       <div className='h-16 flex gap-3'>
//         <h1 className='text-2xl text-[#33333366]'>Overall Information</h1>
//         <p className='text-2xl'>+6% than last month</p>
//       </div>

//       {/* User Table Section */}
//       <div className="overflow-x-auto mt-5">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">User Name</th>
//               <th className="border border-gray-300 px-4 py-2">Employer Name</th>
//               <th className="border border-gray-300 px-4 py-2">Welfare Centre Name</th>
//               <th className="border border-gray-300 px-4 py-2">Check-ins</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 <div className="flex flex-col items-center">
//                   <img src={img} alt="img" className="w-10 h-10 mb-1" /> {/* Goal image */}
//                   <span>User Name</span>
//                   <span className="text-sm text-gray-600">user@example.com</span>
//                 </div>
//               </td>
//               <td className="border border-gray-300 px-4 py-2">Employer Name</td>
//               <td className="border border-gray-300 px-4 py-2">Welfare Centre Name</td>
//               <td className="border border-gray-300 px-4 py-2">Day, Date, Time</td>
//             </tr>
//             {/* Add more rows as needed */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;





// import React from 'react';
// import heart from './assets/heart.png';
// import img from './assets/img.png'; // Replace with your goal image path

// function Dashboard() {
//   return (
//     <div className='flex flex-col p-9'>
//       <div className='font-semibold flex flex-col h-24'>
//         <h1 className='text-3xl'>Statistics</h1>
//         <p className='text-[#33333366]'>Overall Information</p>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
//         {/* Card 1 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Welfare</p>
//             <p className='font-semibold'>Centres</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 2 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Users</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 3 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Employers</p>
//             <h1 className='font-semibold text-2xl'>412</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 4 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Check-ins</p>
//             <h1 className='font-semibold text-2xl'>1,011</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>
//       </div>

//       <div className='h-16 flex items-center'>
//         <h1 className='text-3xl'>Recent Check-ins</h1>
//       </div>
//       <div className='h-16 flex gap-3'>
//         <h1 className='text-2xl text-[#33333366]'>Overall Information</h1>
//         <p className='text-2xl'>+6% than last month</p>
//       </div>

//       {/* User Table Section */}
//       <div className="overflow-x-auto mt-5">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">User Name</th>
//               <th className="border border-gray-300 px-4 py-2">Employer Name</th>
//               <th className="border border-gray-300 px-4 py-2">Welfare Centre Name</th>
//               <th className="border border-gray-300 px-4 py-2">Check-ins</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 <div className="flex flex-col items-center">
//                   <img src={img} alt="img" className="w-10 h-10 mb-1" /> {/* Goal image */}
//                   <span className="font-semibold">User Name</span> {/* User Name */}
//                   <span className="text-sm text-gray-600">user@example.com</span> {/* User Email */}
//                 </div>
//               </td>
//               <td className="border border-gray-300 px-4 py-2">Employer Name</td>
//               <td className="border border-gray-300 px-4 py-2">Welfare Centre Name</td>
//               <td className="border border-gray-300 px-4 py-2">Day, Date, Time</td>
//             </tr>
//             {/* Add more rows as needed */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;











// import React from 'react';
// import heart from './assets/heart.png';
// import img from './assets/img.png'; // Replace with your goal image path

// function Dashboard() {
//   return (
//     <div className='flex flex-col p-9'>
//       <div className='font-semibold flex flex-col h-24'>
//         <h1 className='text-3xl'>Statistics</h1>
//         <p className='text-[#33333366]'>Overall Information</p>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
//         {/* Card 1 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Welfare</p>
//             <p className='font-semibold'>Centres</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 2 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Users</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 3 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Employers</p>
//             <h1 className='font-semibold text-2xl'>412</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 4 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Check-ins</p>
//             <h1 className='font-semibold text-2xl'>1,011</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>
//       </div>

//       <div className='h-16 flex items-center'>
//         <h1 className='text-3xl'>Recent Check-ins</h1>
//       </div>
//       <div className='h-16 flex gap-3'>
//         <h1 className='text-2xl text-[#33333366]'>Overall Information</h1>
//         <p className='text-2xl'>+6% than last month</p>
//       </div>

//       {/* User Table Section */}
//       <div className="overflow-x-auto mt-5">
//         <table className="min-w-full border-collapse border rounded-lg border-gray-300">
//           <thead>
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">User Name</th>
//               <th className="border border-gray-300 px-4 py-2">Employer Name</th>
//               <th className="border border-gray-300 px-4 py-2">Welfare Centre Name</th>
//               <th className="border border-gray-300 px-4 py-2">Check-ins</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 <div className="flex  items-center">
//                   <img src={img} alt="img" className="w-16 h-16 mb-2" /> {/* Image First */}
//                   <div className='flex flex-col'>
//                   <span className="font-semibold">User Name</span> {/* Name Second */}
//                   <span className="text-sm text-gray-600">user@example.com</span> {/* Email Third */}
//                   </div>
//                 </div>
//               </td>
//               <td className="border border-gray-300 px-4 py-2">Employer Name</td>
//               <td className="border border-gray-300 px-4 py-2">Welfare Centre Name</td>
//               <td className="border border-gray-300 px-4 py-2">Day, Date, Time</td>
//             </tr>
//             {/* Add more rows as needed */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


























// import React from 'react';
// import heart from './assets/heart.png';
// import img from './assets/img.png'; // Replace with your goal image path

// function Dashboard() {
//   return (
//     <div className='flex flex-col p-9'>
//       <div className='font-semibold flex flex-col h-24'>
//         <h1 className='text-3xl'>Statistics</h1>
//         <p className='text-[#33333366]'>Overall Information</p>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
//         {/* Card 1 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Welfare</p>
//             <p className='font-semibold'>Centres</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 2 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Users</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 3 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Employers</p>
//             <h1 className='font-semibold text-2xl'>412</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 4 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Check-ins</p>
//             <h1 className='font-semibold text-2xl'>1,011</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>
//       </div>

//       <div className='h-16 flex items-center'>
//         <h1 className='text-3xl'>Recent Check-ins</h1>
//       </div>
//       <div className='h-16 flex gap-3'>
//         <h1 className='text-2xl text-[#33333366]'>Overall Information</h1>
//         <p className='text-2xl'>+6% than last month</p>
//       </div>

//       {/* User Table Section */}
//       <div className="overflow-x-auto mt-5">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border-b border-gray-300 px-4 py-2">User Name</th>
//               <th className="border-b border-gray-300 px-4 py-2">Employer Name</th>
//               <th className="border-b border-gray-300 px-4 py-2">Welfare Centre Name</th>
//               <th className="border-b border-gray-300 px-4 py-2">Check-ins</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300  px-4 py-2 text-center">
//                 <div className="flex gap-2 items-center">
//                   <img src={img} alt="img" className="w-16 h-16 mb-2" /> {/* Image First */}
//                   <div className='flex flex-col'>
//                     <span className="font-semibold">User Name</span> {/* Name Second */}
//                     <span className="text-sm text-gray-600">user@example.com</span> {/* Email Third */}
//                   </div>
//                 </div>
//               </td>
//               <th className="border border-gray-300 px-4 py-2">Employer Name</th>
//               <th className="border border-gray-300 px-4 py-2">Welfare Centre Name</th>
//               <th className="border border-gray-300 px-4 py-2">Day, Date, Time</th>
              
//             </tr>
//              <tr>
//               <td className="border gap-2 border-gray-300 px-4 py-2 text-center">
//                 <div className="flex items-center">
//                   <img src={img} alt="img" className="w-16 h-16 mb-2" /> {/* Image First */}
//                   <div className='flex flex-col'>
//                     <span className="font-semibold">User Name</span> {/* Name Second */}
//                     <span className="text-sm text-gray-600">user@example.com</span> {/* Email Third */}
//                   </div>
//                 </div>
//               </td>
//               <th className="border border-gray-300 px-4 py-2">Employer Name</th>
//               <th className="border border-gray-300 px-4 py-2">Welfare Centre Name</th>
//               <th className="border border-gray-300 px-4 py-2">Day, Date, Time</th>
              
//             </tr>
           
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;








































// import React from 'react';
// import heart from './assets/heart.png';
// import img from './assets/img.png'; // Replace with your goal image path

// function Dashboard() {
//   return (
//     <div className='flex flex-col p-9'>
//       <div className='font-semibold flex flex-col h-24'>
//         <h1 className='text-3xl'>Statistics</h1>
//         <p className='text-[#33333366]'>Overall Information</p>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
//         {/* Card 1 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Welfare</p>
//             <p className='font-semibold'>Centres</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 2 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Users</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 3 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Employers</p>
//             <h1 className='font-semibold text-2xl'>412</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 4 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Check-ins</p>
//             <h1 className='font-semibold text-2xl'>1,011</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>
//       </div>

//       <div className='h-16 flex items-center'>
//         <h1 className='text-3xl'>Recent Check-ins</h1>
//       </div>
//       <div className='h-16 flex gap-3'>
//         <h1 className='text-2xl text-[#33333366]'>Overall Information</h1>
//         <p className='text-2xl'>+6% than last month</p>
//       </div>

//       {/* User Table Section */}
//       <div className="overflow-x-auto mt-5">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border-b border-gray-300 px-4 py-2">User Name</th>
//               <th className="border-b border-gray-300 px-4 py-2">Employer Name</th>
//               <th className="border-b border-gray-300 px-4 py-2">Welfare Centre Name</th>
//               <th className="border-b border-gray-300 px-4 py-2">Check-ins</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 <div className="flex gap-2 items-center">
//                   <img src={img} alt="img" className="w-16 h-16 mb-2" /> {/* Image First */}
//                   <div className='flex flex-col'>
//                     <span className="font-semibold">User Name</span> {/* Name Second */}
//                     <span className="text-sm text-gray-600">user@example.com</span> {/* Email Third */}
//                   </div>
//                 </div>
//               </td>
//               <th className="border border-gray-300 px-4 py-2">Employer Name</th>
//               <th className="border border-gray-300 px-4 py-2">Welfare Centre Name</th>
//               <th className="border border-gray-300 px-4 py-2">Day, Date, Time</th>
//             </tr>
//             <tr>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 <div className="flex items-center">
//                   <img src={img} alt="img" className="w-16 h-16 mb-2" /> {/* Image First */}
//                   <div className='flex flex-col'>
//                     <span className="font-semibold">User Name</span> {/* Name Second */}
//                     <span className="text-sm text-gray-600">user@example.com</span> {/* Email Third */}
//                   </div>
//                 </div>
//               </td>
//               <th className="border-gray-300 px-4 py-2">Employer Name</th>
//               <th className="border-gray-300 px-4 py-2">Welfare Centre Name</th>
//               <th className="border-gray-300 px-4 py-2">Day, Date, Time</th>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


















// import React from 'react';
// import heart from './assets/heart.png';
// import img from './assets/img.png'; // Replace with your goal image path

// function Dashboard() {
//   return (
//     <div className='flex flex-col  bg-[#f9f9f9] p-9'>
//       <div className='font-semibold flex flex-col h-24'>
//         <h1 className='text-3xl'>Statistics</h1>
//         <p className='text-[#33333366]'>Overall Information</p>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
//         {/* Card 1 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Welfare</p>
//             <p className='font-semibold'>Centres</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 2 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Users</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 3 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Employers</p>
//             <h1 className='font-semibold text-2xl'>412</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 4 */}
//         <div className='h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around px-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Check-ins</p>
//             <h1 className='font-semibold text-2xl'>1,011</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>
//       </div>

//       <div className='h-16 flex items-center'>
//         <h1 className='text-3xl'>Recent Check-ins</h1>
//       </div>
//       <div className='h-16 flex gap-3'>
//         <h1 className='text-2xl text-[#33333366]'>Overall Information</h1>
//         <p className='text-2xl'>+6% than last month</p>
//       </div>

//       {/* User Table Section */}
//       <div className="overflow-x-auto bg-white mt-5">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border-b border-gray-300 px-4 py-2">User Name</th>
//               <th className="border-b border-gray-300 px-4 py-2">Employer Name</th>
//               <th className="border-b border-gray-300 px-4 py-2">Welfare Centre Name</th>
//               <th className="border-b border-gray-300 px-4 py-2">Check-ins</th>
//             </tr>
//           </thead>
//           <tbody>
//         <tr>
//               <td className="borderborder-none border-gray-300 px-4 py-2 text-center">
//                 <div className="flex  gap-3 items-center">
//                   <img src={img} alt="img" className="w-16 h-16 mb-2" /> {/* Image First */}
//                   <div className='flex flex-col'>
//                     <span className="font-semibold">User Name</span> {/* Name Second */}
//                     <span className="text-sm text-gray-600">user@example.com</span> {/* Email Third */}
//                   </div>
//                 </div>
//               </td>
//               <th className="border-none px-4 py-2">Employer Name</th> {/* No Border */}
//               <th className="border-none px-4 py-2">Welfare Centre Name</th> {/* No Border */}
//               <th className="border-none px-4 py-2">Day, Date, Time</th> {/* No Border */}
//             </tr>
//             <tr>
//               <td className="borderborder-none border-gray-300 px-4 py-2 text-center">
//                 <div className="flex gap-3 items-center">
//                   <img src={img} alt="img" className="w-16 h-16 mb-2" /> {/* Image First */}
//                   <div className='flex flex-col'>
//                     <span className="font-semibold">User Name</span> {/* Name Second */}
//                     <span className="text-sm text-gray-600">user@example.com</span> {/* Email Third */}
//                   </div>
//                 </div>
//               </td>
//               <th className="border-none px-4 py-2">Employer Name</th> {/* No Border */}
//               <th className="border-none px-4 py-2">Welfare Centre Name</th> {/* No Border */}
//               <th className="border-none px-4 py-2">Day, Date, Time</th> {/* No Border */}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;




















// import React from 'react';
// import heart from './assets/heart.png';
// import img from './assets/img.png'; // Replace with your goal image path

// function Dashboard() {
//   return (
//     <div className='flex flex-col bg-[#f9f9f9] p-5 md:p-9'>
//       <div className='font-semibold flex flex-col h-24'>
//         <h1 className='text-3xl'>Statistics</h1>
//         <p className='text-[#33333366]'>Overall Information</p>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10'>
//         {/* Card 1 */}
//         <div className='h-full min-h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around p-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Welfare</p>
//             <p className='font-semibold'>Centres</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 2 */}
//         <div className='h-full min-h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around p-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Users</p>
//             <h1 className='font-semibold text-2xl'>1,501</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 3 */}
//         <div className='h-full min-h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around p-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Employers</p>
//             <h1 className='font-semibold text-2xl'>412</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>

//         {/* Card 4 */}
//         <div className='h-full min-h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around p-4'>
//           <div className='flex flex-col'>
//             <p className='font-semibold'>Total Check-ins</p>
//             <h1 className='font-semibold text-2xl'>1,011</h1>
//           </div>
//           <img src={heart} alt="heart" className="w-16 h-16" />
//         </div>
//       </div>

//       <div className='h-16 flex items-center mt-5'>
//         <h1 className='text-3xl'>Recent Check-ins</h1>
//       </div>
//       <div className='h-16 flex gap-3'>
//         <h1 className='text-2xl text-[#33333366]'>Overall Information</h1>
//         <p className='text-2xl'>+6% than last month</p>
//       </div>

//       {/* User Table Section */}
//       <div className="overflow-x-auto bg-white mt-5">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border-b border-gray-300 px-4 py-2">User Name</th>
//               <th className="border-b border-gray-300 px-4 py-2">Employer Name</th>
//               <th className="border-b border-gray-300 px-4 py-2">Welfare Centre Name</th>
//               <th className="border-b border-gray-300 px-4 py-2">Check-ins</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border-none border-gray-300 px-4 py-2 text-center">
//                 <div className="flex gap-3 items-center">
//                   <img src={img} alt="img" className="w-16 h-16 mb-2" /> {/* Image First */}
//                   <div className='flex flex-col'>
//                     <span className="font-semibold">User Name</span> {/* Name Second */}
//                     <span className="text-sm text-gray-600">user@example.com</span> {/* Email Third */}
//                   </div>
//                 </div>
//               </td>
//               <th className="border-none px-4 py-2">Employer Name</th> {/* No Border */}
//               <th className="border-none px-4 py-2">Welfare Centre Name</th> {/* No Border */}
//               <th className="border-none px-4 py-2">Day, Date, Time</th> {/* No Border */}
//             </tr>
//             <tr>
//               <td className="border-none border-gray-300 px-4 py-2 text-center">
//                 <div className="flex gap-3 items-center">
//                   <img src={img} alt="img" className="w-16 h-16 mb-2" /> {/* Image First */}
//                   <div className='flex flex-col'>
//                     <span className="font-semibold">User Name</span> {/* Name Second */}
//                     <span className="text-sm text-gray-600">user@example.com</span> {/* Email Third */}
//                   </div>
//                 </div>
//               </td>
//               <th className="border-none px-4 py-2">Employer Name</th> {/* No Border */}
//               <th className="border-none px-4 py-2">Welfare Centre Name</th> {/* No Border */}
//               <th className="border-none px-4 py-2">Day, Date, Time</th> {/* No Border */}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
































import React from 'react';
import heart from './assets/heart.png';
import img from './assets/img.png'; // Replace with your goal image path

function Dashboard() {
  return (
    <div className='flex flex-col   bg-[#f9f9f9] p-5 md:p-9'>
      <div className='font-semibold flex flex-col h-24'>
        <h1 className='text-3xl'>Statistics</h1>
        <p className='text-[#33333366]'>Overall Information</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10'>
        {/* Card 1 */}
        <div className='h-full min-h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around p-4'>
          <div className='flex flex-col'>
            <p className='font-semibold'>Total Welfare</p>
            <p className='font-semibold'>Centres</p>
            <h1 className='font-semibold text-2xl'>1,501</h1>
          </div>
          <img src={heart} alt="heart" className="w-16 h-16" />
        </div>

        {/* Card 2 */}
        <div className='h-full min-h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around p-4'>
          <div className='flex flex-col'>
            <p className='font-semibold'>Total Users</p>
            <h1 className='font-semibold text-2xl'>1,501</h1>
          </div>
          <img src={heart} alt="heart" className="w-16 h-16" />
        </div>

        {/* Card 3 */}
        <div className='h-full min-h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around p-4'>
          <div className='flex flex-col'>
            <p className='font-semibold'>Total Employers</p>
            <h1 className='font-semibold text-2xl'>412</h1>
          </div>
          <img src={heart} alt="heart" className="w-16 h-16" />
        </div>

        {/* Card 4 */}
        <div className='h-full min-h-[165px] w-full bg-[#ddece7] rounded-lg flex items-center justify-around p-4'>
          <div className='flex flex-col'>
            <p className='font-semibold'>Total Check-ins</p>
            <h1 className='font-semibold text-2xl'>1,011</h1>
          </div>
          <img src={heart} alt="heart" className="w-16 h-16" />
        </div>
      </div>

      <div className='h-16 flex items-center mt-5'>
        <h1 className='text-3xl'>Recent Check-ins</h1>
      </div>
      <div className='h-16 flex gap-3'>
        <h1 className='text-2xl text-[#33333366]'>Overall Information</h1>
        <p className='text-2xl text-[#039D00] '>+6% than last month</p>

      </div>

      {/* User Table Section */}
      <div className="overflow-x-auto overflow-scroll rounded-lg bg-white mt-5">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border-b border-gray-300 px-4 py-2">User Name</th>
              <th className="border-b border-gray-300 px-4 py-2">Employer Name</th>
              <th className="border-b border-gray-300 px-4 py-2">Welfare Centre Name</th>
              <th className="border-b border-gray-300 px-4 py-2">Check-ins</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-none border-gray-300 px-4 py-2 text-center">
               <div className="flex items-center flex-col md:flex-row md:items-center">
                <img src={img} alt="img" className="w-16 h-16 mb-2 md:mb-0 md:mr-2" /> {/* Image First */}
                <div className='flex flex-col text-left'>
                  <span className="font-semibold">User Name</span> {/* Name Second */}
                  <span className="text-sm text-gray-600">user@example.com</span> {/* Email Third */}
                </div>
              </div>

              </td>
              
              <th className="border-none px-4 py-2">Employer Name</th> {/* No Border */}
              <th className="border-none px-4 py-2">Welfare Centre Name</th> {/* No Border */}
              <th className="border-none px-4 py-2">Day, Date, Time</th> {/* No Border */}
            </tr>
            <tr>
              <td className="border-none border-gray-300 px-4 py-2 text-center">
                          <div className="flex items-center flex-col md:flex-row md:items-center">
              <img src={img} alt="img" className="w-16 h-16 mb-2 md:mb-0 md:mr-2" /> {/* Image First */}
              <div className='flex flex-col text-left'>
                <span className="font-semibold">User Name</span> {/* Name Second */}
                <span className="text-sm text-gray-600">user@example.com</span> {/* Email Third */}
              </div>
            </div>

              </td>
              <th className="border-none px-4 py-2">Employer Name</th> {/* No Border */}
              <th className="border-none px-4 py-2">Welfare Centre Name</th> {/* No Border */}
              <th className="border-none px-4 py-2">Day, Date, Time</th> {/* No Border */}
            </tr>
             <tr>
              <td className="border-none border-gray-300 px-4 py-2 text-center">
                          <div className="flex items-center flex-col md:flex-row md:items-center">
              <img src={img} alt="img" className="w-16 h-16 mb-2 md:mb-0 md:mr-2" /> {/* Image First */}
              <div className='flex flex-col text-left'>
                <span className="font-semibold">User Name</span> {/* Name Second */}
                <span className="text-sm text-gray-600">user@example.com</span> {/* Email Third */}
              </div>
            </div>

              </td>
              <th className="border-none px-4 py-2">Employer Name</th> {/* No Border */}
              <th className="border-none px-4 py-2">Welfare Centre Name</th> {/* No Border */}
              <th className="border-none px-4 py-2">Day, Date, Time</th> {/* No Border */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
