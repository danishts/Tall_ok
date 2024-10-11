// import React, { useState, createContext, useContext } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './Login';
// import Layout from './Layout';
// import Dashboard from './Dashboard';
// import Users from './Users';
// import Check_Ins from './Check_Ins';
// import WelfareCenters from './WelfareCenters'; // Ensure this component exists
// import Employers from './Employers'; // Ensure this component exists
// import Settings from './Settings'; // Ensure this component exists

// // Create a context for authentication
// const AuthContext = createContext();

// // Custom hook to use authentication
// export const useAuth = () => useContext(AuthContext);

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login }}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} /> 
//           <Route path="/dashboard" element={isAuthenticated ?  <Layout /> : <Navigate to="/" />} >
//             <Route index element={<Dashboard />} />
//             <Route path="check-ins" element={<Check_Ins />} />
//             <Route path="users" element={<Users />} />
//             <Route path="welfare-centres" element={<WelfareCenters /> } />
//             <Route path="employers" element={<Employers />} />
//             <Route path="settings" element={<Settings />} />
//           </Route>
//         </Routes>
//       </Router>
//     </AuthContext.Provider>
//   );
// }

// export default App;





import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Users from './Users';
import Check_Ins from './Check_Ins';
import WelfareCenters from './WelfareCenters';
import Employers from './Employers';
import Settings from './Settings';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {
 
            (isAuthenticated) &&
          
            <Route path='dashboard' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="check-ins" element={<Check_Ins />} />
            <Route path="users" element={<Users />} />
            <Route path="welfare-centres" element={<WelfareCenters />} />
            <Route path="employers" element={<Employers />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          }
          <Route path="/dashboard/*" element={isAuthenticated ? <Layout /> : <Navigate to="/" />} />
        </Routes>
      </Router>

    </AuthContext.Provider>
  
  );
}
  
export default App;
