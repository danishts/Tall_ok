
        // import React, { useState } from 'react';
        // import gee from './assets/gee.png';
        // import { FaEye, FaEyeSlash } from 'react-icons/fa';
            
        // export default function Settings() {
        //   const [showChangePassword, setShowChangePassword] = useState(false);
        //   const [showOldPassword, setShowOldPassword] = useState(false);
        //   const [showNewPassword, setShowNewPassword] = useState(false);
        //   const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
          
        //   const handleChangePasswordClick = () => {
        //     setShowChangePassword(!showChangePassword);
        //   };

        //   return (
        //     <div className='h-full border-3 overflow-scroll'>
        //       <div className='text-3xl mt-6 '>
        //         <p className='px-10'>Settings</p>
        //       </div>
        //       <div className='flex justify-center'>
               
        //         <div className='border-2 h-[770px]   w-[553px] rounded-lg'>
                  
        //           <div>
        //             <form className="flex flex-col items-center justify-center gap-4 p-12">
        //               <div className={showChangePassword? "blur": " "}>
        //               <div className="w-full flex flex-col gap-2 relative">
        //                 <div className=' flex justify-center'>
        //                 <img className='h-24  flex justify- w-24' src={gee} alt="gee" />
        //                 </div>

        //                 <label className="text-xs pl-2 text-gray-500 font-semibold" htmlFor="username_field">Username</label>
        //                 <input placeholder="John Doe K" title="Input title" name="input-name" type="text" id="username_field" className="pl-4 w-[420px] h-10 rounded-md" />
        //               </div>

        //               <div className="w-full flex flex-col gap-2 relative">
        //                 <label className="text-xs pl-2 text-gray-500 font-semibold" htmlFor="email_field">Email</label>
        //                 <input placeholder="username@gmail.com" title="Input title" name="input-name" type="email" id="email_field" className="pl-4 w-[420px] h-10 rounded-md border border-gray-500 shadow-sm focus:ring-2 focus:ring-gray-800 outline-none transition duration-300 ease-in-out" />
        //               </div>
        //               </div>

        //               <h2>
        //                 <u onClick={handleChangePasswordClick} style={{ cursor: 'pointer' }}>
        //                   {showChangePassword ? '' : 'Change Password'}
        //                 </u>
        //               </h2>

        //               {!showChangePassword ? (
        //                 <div className=' mt-32 flex gap-5 flex-col justify-center'>
        //                   <button type="submit" className="w-[300px] mt-24 font-semibold h-10  border-[gray] bg-white border-2 text-black rounded-lg">Discard</button>
        //                   <button style={{ background: 'linear-gradient(91.32deg, #007744 0.26%, #00AC62 99.74%)', color: 'white' }} type="submit" className="w-[300px] h-10 border-[gray] text-white border-2 rounded-lg">Update</button>
        //                 </div>
        //               ) : (
        //                 <div className=" mt-8">
        //                   <form className="flex h-[98%]  flex-col items-center justify-center gap-4">
        //                     <div className="w-full flex flex-col gap-2 relative">
        //                       <label className="text-xs pl-2 text-gray-500 font-semibold" htmlFor="old_password">Old Password</label>
        //                       <div className="relative">
        //                         <input
        //                           placeholder="Old Password"
        //                           title="Input title"
        //                           name="old-password"
        //                           type={showOldPassword ? 'text' : 'password'}
        //                           id="old_password"
        //                           className="pl-4 w-[420px] h-10 rounded-md pr-12"
        //                         />
        //                         <span
        //                           onClick={() => setShowOldPassword(!showOldPassword)}
        //                           className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
        //                           style={{ top: '50%', transform: 'translateY(-50%)' }}
        //                         >
        //                           {showOldPassword ? <FaEyeSlash /> : <FaEye />}
        //                         </span>
        //                       </div>
        //                     </div>

        //                     <div className="w-full h-[98%] flex flex-col gap-2 relative">
        //                       <label className="text-xs pl-2  text-gray-500 font-semibold" htmlFor="new_password">New Password</label>
        //                       <div className="relative">
        //                         <input
        //                           placeholder="New Password"
        //                           title="Input title"
        //                           name="new-password"
        //                           type={showNewPassword ? 'text' : 'password'}
        //                           id="new_password"
        //                           className="pl-4 h-10 w-[420px] rounded-md pr-12"
        //                         />
        //                         <span
        //                           onClick={() => setShowNewPassword(!showNewPassword)}
        //                           className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
        //                           style={{ top: '50%', transform: 'translateY(-50%)' }}
        //                         >
        //                           {showNewPassword ? <FaEyeSlash /> : <FaEye />}
        //                         </span>
        //                       </div>
        //                     </div>

        //                     <div className="w-full flex flex-col gap-2 relative">
        //                       <label className="text-xs pl-2 text-gray-500 font-semibold" htmlFor="confirm_new_password">Confirm New Password</label>
        //                       <div className="relative">
        //                         <input
        //                           placeholder="Confirm New Password"
        //                           title="Input title"
        //                           name="confirm-new-password"
        //                           type={showConfirmNewPassword ? 'text' : 'password'}
        //                           id="confirm_new_password"
        //                           className="pl-4 h-10 w-[420px] rounded-md pr-12"
        //                         />
        //                         <span
        //                           onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
        //                           className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
        //                           style={{ top: '50%', transform: 'translateY(-50%)' }}
        //                         >
        //                           {showConfirmNewPassword ? <FaEyeSlash /> : <FaEye />}
        //                         </span>
        //                       </div>
        //                     </div>

        //                     <button type="submit" className="w-[300px] mt-16 font-semibold h-10 border-[gray] bg-white border-2 text-black rounded-lg">Discard</button>
        //                     <button style={{ background: 'linear-gradient(91.32deg, #007744 0.26%, #00AC62 99.74%)', color: 'white' }} type="submit" className="w-[300px] h-10 border-[gray] text-white border-2 rounded-lg">Update</button>
        //                   </form>
        //                 </div>
        //               )}
        //             </form>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   );
        // }



















      import React, { useState } from 'react';
import gee from './assets/gee.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Settings() {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const handleChangePasswordClick = () => {
    setShowChangePassword(!showChangePassword);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[WHITE] p-4'>
      <div className='w-full max-w-md bg-[WHITE] h-[720px] border-2 h- rounded-lg  overflow-hidden'>
        <div className='p-6'>
          <h1 className='text-2xl font-semibold mb-6 text-center'>Settings</h1>
          <form className="space-y-6">
            {/* User Information Section */}
            <div className={showChangePassword ? "blur-sm transition duration-300" : ""}>
              <div className="flex flex-col items-center">
                <img className='h-24 w-24 object-cover mb-4' src={gee} alt="Profile" />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1" htmlFor="username_field">Username</label>
                <input
                  placeholder="John Doe K"
                  title="Username"
                  name="username"
                  type="text"
                  id="username_field"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
                />
              </div>

              <div className="flex flex-col mt-4">
                <label className="text-sm text-gray-600 mb-1" htmlFor="email_field">Email</label>
                <input
                  placeholder="username@gmail.com"
                  title="Email"
                  name="email"
                  type="email"
                  id="email_field"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
                />
              </div>
            </div>

            {/* Change Password Toggle */}
            <div className="text-center">
             <button
                type="button"
                onClick={handleChangePasswordClick}
                className="text-[black] hover:underline focus:outline-none"
              >
                {showChangePassword ? 'Hide Change Password' : 'Change Password'}
              </button>
                
            </div>

            {/* Change Password Section */}
            {showChangePassword && (
              <div className="space-y-4">
                {/* Old Password */}
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1" htmlFor="old_password">Old Password</label>
                  <div className="relative">
                    <input
                      placeholder="Old Password"
                      title="Old Password"
                      name="old-password"
                      type={showOldPassword ? 'text' : 'password'}
                      id="old_password"
                      className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <span
                      onClick={() => setShowOldPassword(!showOldPassword)}
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                    >
                      {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                {/* New Password */}
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1" htmlFor="new_password">New Password</label>
                  <div className="relative">
                    <input
                      placeholder="New Password"
                      title="New Password"
                      name="new-password"
                      type={showNewPassword ? 'text' : 'password'}
                      id="new_password"
                      className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <span
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                    >
                      {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                {/* Confirm New Password */}
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1" htmlFor="confirm_new_password">Confirm New Password</label>
                  <div className="relative">
                    <input
                      placeholder="Confirm New Password"
                      title="Confirm New Password"
                      name="confirm-new-password"
                      type={showConfirmNewPassword ? 'text' : 'password'}
                      id="confirm_new_password"
                      className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <span
                      onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                    >
                      {showConfirmNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col  space-y-4 mt-6">
              <button
                type="button"
                className="w-full py-2 bg-white border border-gray-400 text-black rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                Discard
              </button>
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-green-700 to-green-500 text-white rounded-md hover:from-green-800 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
