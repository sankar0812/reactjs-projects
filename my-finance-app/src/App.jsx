// import React, { useState, useEffect } from 'react';
// import Sidebar from './components/Sidebar.jsx'; // Added .js extension
// import Dashboard from './components/Dashboard.jsx'; // Added .js extension
// import Clients from './components/Clients.jsx'; // Added .js extension
// import AddClientForm from './components/AddClientForm.jsx'; // Added .js extension
// import ClientDetail from './components/ClientDetail.jsx'; // Added .js extension
// import { initialClients } from './data/dummyData.jsx'; // Added .js extension // Importing dummy data

// // Main App Component
// const App = () => {
//   const [currentPage, setCurrentPage] = useState('dashboard'); // 'dashboard', 'clients', 'addClient', 'clientDetail', 'editClient'
//   const [clients, setClients] = useState(initialClients);
//   const [selectedClient, setSelectedClient] = useState(null);
//   const [clientToEdit, setClientToEdit] = useState(null); // Used for editing existing client

//   const handleSaveClient = (newClient) => {
//     if (clientToEdit) {
//       // Update existing client
//       setClients(clients.map(c => (c.id === newClient.id ? newClient : c)));
//       setClientToEdit(null); // Clear edit state
//     } else {
//       // Add new client
//       setClients([...clients, newClient]);
//     }
//     setCurrentPage('clients'); // Go back to clients list after saving
//   };

//   const handleCancelEdit = () => {
//     setClientToEdit(null);
//     setCurrentPage('clients'); // Go back to clients list
//   };

//   // Custom alert/confirmation logic (as alert() is disallowed)
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [confirmMessage, setConfirmMessage] = useState('');
//   const [confirmAction, setConfirmAction] = useState(null);

//   const customConfirm = (message, action) => {
//     setConfirmMessage(message);
//     setConfirmAction(() => action); // Store the action to be executed
//     setShowConfirm(true);
//   };

//   const handleConfirmYes = () => {
//     if (confirmAction) {
//       confirmAction();
//     }
//     setShowConfirm(false);
//     setConfirmAction(null);
//   };

//   const handleConfirmNo = () => {
//     setShowConfirm(false);
//     setConfirmAction(null);
//   };

//   // Override window.confirm for this app's context
//   useEffect(() => {
//     window.confirm = (message, onConfirm) => { // Modified to accept a callback
//       return new Promise((resolve) => {
//         customConfirm(message, () => {
//           if (onConfirm) onConfirm(); // Execute the provided callback if it exists
//           resolve(true);
//         });
//         // If user clicks "No" or closes, it will resolve to false implicitly
//       });
//     };
//   }, []);

//   const handleDeleteClientFromDetail = (id) => {
//     customConfirm('Are you sure you want to delete this client permanently?', () => {
//       setClients(clients.filter(client => client.id !== id));
//       setCurrentPage('clients'); // Go back to clients list after deletion
//       setSelectedClient(null); // Clear selected client
//     });
//   };

//   return (
//     <div className="flex font-inter antialiased">
//       {/* Tailwind CSS CDN */}
//       <script src="https://cdn.tailwindcss.com"></script>
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
//           body {
//             font-family: 'Inter', sans-serif;
//           }
//           /* Custom styles for sort arrows */
//           th .flex {
//             display: flex;
//             align-items: center;
//           }
//           th svg {
//             margin-left: 0.5rem;
//             opacity: 0.6;
//           }
//           th[aria-sort="ascending"] svg.down {
//             opacity: 1;
//           }
//           th[aria-sort="descending"] svg.up {
//             opacity: 1;
//           }
//           /* Custom confirm dialog styling */
//           .custom-confirm-overlay {
//             position: fixed;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: rgba(0, 0, 0, 0.6);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             z-index: 1000;
//           }
//           .custom-confirm-box {
//             background: white;
//             padding: 2.5rem;
//             border-radius: 12px;
//             box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//             text-align: center;
//             max-width: 400px;
//             width: 90%;
//           }
//           .custom-confirm-box p {
//             font-size: 1.125rem;
//             margin-bottom: 1.5rem;
//             color: #333;
//             font-weight: 500;
//           }
//           .custom-confirm-box button {
//             padding: 0.75rem 1.5rem;
//             border-radius: 8px;
//             font-weight: 600;
//             cursor: pointer;
//             transition: all 0.2s ease-in-out;
//             margin: 0 0.5rem;
//           }
//           .custom-confirm-box .btn-yes {
//             background-color: #ef4444; /* red-500 */
//             color: white;
//           }
//           .custom-confirm-box .btn-yes:hover {
//             background-color: #dc2626; /* red-600 */
//           }
//           .custom-confirm-box .btn-no {
//             background-color: #e5e7eb; /* gray-200 */
//             color: #374151; /* gray-800 */
//           }
//           .custom-confirm-box .btn-no:hover {
//             background-color: #d1d5db; /* gray-300 */
//           }
//         `}
//       </style>

//       <Sidebar setCurrentPage={setCurrentPage} />

//       {currentPage === 'dashboard' && <Dashboard clients={clients} />}
//       {currentPage === 'clients' && (
//         <Clients
//           clients={clients}
//           setClients={setClients}
//           setCurrentPage={setCurrentPage}
//           setSelectedClient={setSelectedClient}
//           setClientToEdit={setClientToEdit}
//         />
//       )}
//       {currentPage === 'addClient' && (
//         <AddClientForm onSave={handleSaveClient} onCancel={() => setCurrentPage('clients')} />
//       )}
//       {currentPage === 'editClient' && clientToEdit && (
//         <AddClientForm clientToEdit={clientToEdit} onSave={handleSaveClient} onCancel={handleCancelEdit} />
//       )}
//       {currentPage === 'clientDetail' && selectedClient && (
//         <ClientDetail
//           client={selectedClient}
//           onBack={() => { setCurrentPage('clients'); setSelectedClient(null); }}
//           onEdit={() => { setClientToEdit(selectedClient); setCurrentPage('editClient'); }}
//           onDelete={handleDeleteClientFromDetail}
//         />
//       )}

//       {/* Custom Confirmation Dialog */}
//       {showConfirm && (
//         <div className="custom-confirm-overlay">
//           <div className="custom-confirm-box">
//             <p>{confirmMessage}</p>
//             <div className="flex justify-center">
//               <button className="btn-yes" onClick={handleConfirmYes}>Yes</button>
//               <button className="btn-no" onClick={handleConfirmNo}>No</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import Sidebar from './components/Sidebar.jsx';
// import Dashboard from './components/Dashboard.jsx';
// import Clients from './components/Clients.jsx';
// import AddClientForm from './components/AddClientForm.jsx';
// import ClientDetail from './components/ClientDetail.jsx';
// import { initialClients } from './data/dummyData.jsx'; // Importing dummy data

// // Main App Component
// const App = () => {
//   const [currentPage, setCurrentPage] = useState('dashboard'); // 'dashboard', 'clients', 'addClient', 'clientDetail', 'editClient'
//   const [clients, setClients] = useState(initialClients);
//   const [selectedClient, setSelectedClient] = useState(null);
//   const [clientToEdit, setClientToEdit] = useState(null); // Used for editing existing client

//   const handleSaveClient = (newClient) => {
//     if (clientToEdit) {
//       // Update existing client
//       setClients(clients.map(c => (c.id === newClient.id ? newClient : c)));
//       setClientToEdit(null); // Clear edit state
//     } else {
//       // Add new client
//       setClients([...clients, newClient]);
//     }
//     setCurrentPage('clients'); // Go back to clients list after saving
//   };

//   const handleCancelEdit = () => {
//     setClientToEdit(null);
//     setCurrentPage('clients'); // Go back to clients list
//   };

//   // Custom alert/confirmation logic (as alert() is disallowed)
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [confirmMessage, setConfirmMessage] = useState('');
//   const [confirmAction, setConfirmAction] = useState(null);

//   const customConfirm = (message, action) => {
//     setConfirmMessage(message);
//     setConfirmAction(() => action); // Store the action to be executed
//     setShowConfirm(true);
//   };

//   const handleConfirmYes = () => {
//     if (confirmAction) {
//       confirmAction();
//     }
//     setShowConfirm(false);
//     setConfirmAction(null);
//   };

//   const handleConfirmNo = () => {
//     setShowConfirm(false);
//     setConfirmAction(null);
//   };

//   // Override window.confirm for this app's context
//   useEffect(() => {
//     window.confirm = (message, onConfirm) => { // Modified to accept a callback
//       return new Promise((resolve) => {
//         customConfirm(message, () => {
//           if (onConfirm) onConfirm(); // Execute the provided callback if it exists
//           resolve(true);
//         });
//         // If user clicks "No" or closes, it will resolve to false implicitly
//       });
//     };
//   }, []);

//   const handleDeleteClientFromDetail = (id) => {
//     customConfirm('Are you sure you want to delete this client permanently?', () => {
//       setClients(clients.filter(client => client.id !== id));
//       setCurrentPage('clients'); // Go back to clients list after deletion
//       setSelectedClient(null); // Clear selected client
//     });
//   };

//   return (
//     <div className="app-wrapper"> {/* Changed class from "flex font-inter antialiased" */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          
//           /* Global app layout */
//           .app-wrapper {
//             display: flex; /* Make it a flex container */
//             min-height: 100vh; /* Ensure it takes full viewport height */
//             font-family: 'Inter', sans-serif; /* Apply font globally */
//             -webkit-font-smoothing: antialiased; /* For smoother fonts */
//             -moz-osx-font-smoothing: grayscale; /* For smoother fonts */
//           }

//           /* Custom confirm dialog styling */
//           .custom-confirm-overlay {
//             position: fixed;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: rgba(0, 0, 0, 0.6);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             z-index: 1000;
//           }
//           .custom-confirm-box {
//             background: white;
//             padding: 2.5rem;
//             border-radius: 12px;
//             box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//             text-align: center;
//             max-width: 400px;
//             width: 90%;
//           }
//           .custom-confirm-box p {
//             font-size: 1.125rem;
//             margin-bottom: 1.5rem;
//             color: #333;
//             font-weight: 500;
//           }
//           .custom-confirm-box button {
//             padding: 0.75rem 1.5rem;
//             border-radius: 8px;
//             font-weight: 600;
//             cursor: pointer;
//             transition: all 0.2s ease-in-out;
//             margin: 0 0.5rem;
//           }
//           .custom-confirm-box .btn-yes {
//             background-color: #ef4444; /* red-500 */
//             color: white;
//           }
//           .custom-confirm-box .btn-yes:hover {
//             background-color: #dc2626; /* red-600 */
//           }
//           .custom-confirm-box .btn-no {
//             background-color: #e5e7eb; /* gray-200 */
//             color: #374151; /* gray-800 */
//           }
//           .custom-confirm-box .btn-no:hover {
//             background-color: #d1d5db; /* gray-300 */
//           }
//         `}
//       </style>

//       <Sidebar setCurrentPage={setCurrentPage} />

//       {/* The main content area will expand to fill remaining space */}
//       {currentPage === 'dashboard' && <Dashboard clients={clients} />}
//       {currentPage === 'clients' && (
//         <Clients
//           clients={clients}
//           setClients={setClients}
//           setCurrentPage={setCurrentPage}
//           setSelectedClient={setSelectedClient}
//           setClientToEdit={setClientToEdit}
//         />
//       )}
//       {currentPage === 'addClient' && (
//         <AddClientForm onSave={handleSaveClient} onCancel={() => setCurrentPage('clients')} />
//       )}
//       {currentPage === 'editClient' && clientToEdit && (
//         <AddClientForm clientToEdit={clientToEdit} onSave={handleSaveClient} onCancel={handleCancelEdit} />
//       )}
//       {currentPage === 'clientDetail' && selectedClient && (
//         <ClientDetail
//           client={selectedClient}
//           onBack={() => { setCurrentPage('clients'); setSelectedClient(null); }}
//           onEdit={() => { setClientToEdit(selectedClient); setCurrentPage('editClient'); }}
//           onDelete={handleDeleteClientFromDetail}
//         />
//       )}

//       {/* Custom Confirmation Dialog */}
//       {showConfirm && (
//         <div className="custom-confirm-overlay">
//           <div className="custom-confirm-box">
//             <p>{confirmMessage}</p>
//             <div className="flex justify-center">
//               <button className="btn-yes" onClick={handleConfirmYes}>Yes</button>
//               <button className="btn-no" onClick={handleConfirmNo}>No</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect, useCallback } from 'react';
// import Sidebar from './components/Sidebar.jsx';
// import Dashboard from './components/Dashboard.jsx';
// import Clients from './components/Clients.jsx';
// import AddClientForm from './components/AddClientForm.jsx';
// import ClientDetail from './components/ClientDetail.jsx';
// // Removed: import { initialClients } from './data/dummyData.js'; // Dummy data no longer needed

// const API_BASE_URL = 'http://localhost:5000/api/clients'; // Your backend API URL

// // Main App Component
// const App = () => {
//   const [currentPage, setCurrentPage] = useState('dashboard');
//   const [clients, setClients] = useState([]); // Initialize with empty array, data will be fetched
//   const [selectedClient, setSelectedClient] = useState(null);
//   const [clientToEdit, setClientToEdit] = useState(null);

//   // Custom alert/confirmation logic (as alert() is disallowed)
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [confirmMessage, setConfirmMessage] = useState('');
//   const [confirmAction, setConfirmAction] = useState(null);

//   const customConfirm = (message, action) => {
//     setConfirmMessage(message);
//     setConfirmAction(() => action);
//     setShowConfirm(true);
//   };

//   const handleConfirmYes = () => {
//     if (confirmAction) {
//       confirmAction();
//     }
//     setShowConfirm(false);
//     setConfirmAction(null);
//   };

//   const handleConfirmNo = () => {
//     setShowConfirm(false);
//     setConfirmAction(null);
//   };

//   // Override window.confirm for this app's context
//   useEffect(() => {
//     window.confirm = (message, onConfirm) => {
//       return new Promise((resolve) => {
//         customConfirm(message, () => {
//           if (onConfirm) onConfirm();
//           resolve(true);
//         });
//       });
//     };
//   }, []);

//   // Function to fetch clients from the backend
//   const fetchClients = useCallback(async () => {
//     try {
//       const response = await fetch(API_BASE_URL);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setClients(data);
//     } catch (error) {
//       console.error("Error fetching clients:", error);
//       customConfirm("Failed to load clients. Please ensure the backend server is running.");
//     }
//   }, []); // Empty dependency array means this function is created once

//   // Fetch clients on initial component mount
//   useEffect(() => {
//     fetchClients();
//   }, [fetchClients]); // Dependency on fetchClients to re-run if it changes (though it's useCallback'd)

//   // Function to add a new client
//   const addClient = async (newClientData) => {
//     try {
//       // For new clients, the backend will generate _id, so we don't need to send 'id'
//       const { id, ...dataToSend } = newClientData; // Destructure to remove 'id' if present
//       const response = await fetch(API_BASE_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dataToSend), // Send data without 'id'
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await response.json(); // Get the new client data from response if needed
//       fetchClients(); // Re-fetch all clients to update the UI
//       setCurrentPage('clients');
//       customConfirm("Client added successfully!");
//     } catch (error) {
//       console.error("Error adding client:", error);
//       customConfirm("Failed to add client. Please try again.");
//     }
//   };

//   // Function to update an existing client
//   const updateClient = async (updatedClientData) => {
//     try {
//       // Use _id from the client data for the PUT request URL
//       const idToUse = updatedClientData._id || updatedClientData.id; // Use _id if available, fallback to id
//       const response = await fetch(`${API_BASE_URL}/${idToUse}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedClientData),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await response.json(); // Get the updated client data from response if needed
//       fetchClients(); // Re-fetch all clients to update the UI
//       setCurrentPage('clients');
//       setClientToEdit(null); // Clear edit state
//       customConfirm("Client updated successfully!");
//     } catch (error) {
//       console.error("Error updating client:", error);
//       customConfirm("Failed to update client. Please try again.");
//     }
//   };

//   // Function to delete a client
//   const deleteClient = async (id) => {
//     customConfirm('Are you sure you want to delete this client permanently?', async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/${id}`, {
//           method: 'DELETE',
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         fetchClients(); // Re-fetch all clients to update the UI
//         setCurrentPage('clients'); // Go back to clients list after deletion
//         setSelectedClient(null); // Clear selected client
//         customConfirm("Client deleted successfully!");
//       } catch (error) {
//         console.error("Error deleting client:", error);
//         customConfirm("Failed to delete client. Please try again.");
//       }
//     });
//   };

//   const handleSaveClient = (clientData) => {
//     // When saving, if clientData has an _id, it's an update. Otherwise, it's a new client.
//     if (clientData._id) { // Check for _id from MongoDB
//       updateClient(clientData);
//     } else {
//       addClient(clientData);
//     }
//   };

//   const handleCancelEdit = () => {
//     setClientToEdit(null);
//     setCurrentPage('clients');
//   };

//   return (
//     <div className="app-wrapper">
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

//           /* Global app layout */
//           .app-wrapper {
//             display: flex;
//             min-height: 100vh;
//             font-family: 'Inter', sans-serif;
//             -webkit-font-smoothing: antialiased;
//             -moz-osx-font-smoothing: grayscale;
//           }

//           /* Custom confirm dialog styling */
//           .custom-confirm-overlay {
//             position: fixed;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: rgba(0, 0, 0, 0.6);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             z-index: 1000;
//           }
//           .custom-confirm-box {
//             background: white;
//             padding: 2.5rem;
//             border-radius: 12px;
//             box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//             text-align: center;
//             max-width: 400px;
//             width: 90%;
//           }
//           .custom-confirm-box p {
//             font-size: 1.125rem;
//             margin-bottom: 1.5rem;
//             color: #333;
//             font-weight: 500;
//           }
//           .custom-confirm-box button {
//             padding: 0.75rem 1.5rem;
//             border-radius: 8px;
//             font-weight: 600;
//             cursor: pointer;
//             transition: all 0.2s ease-in-out;
//             margin: 0 0.5rem;
//           }
//           .custom-confirm-box .btn-yes {
//             background-color: #ef4444; /* red-500 */
//             color: white;
//           }
//           .custom-confirm-box .btn-yes:hover {
//             background-color: #dc2626; /* red-600 */
//           }
//           .custom-confirm-box .btn-no {
//             background-color: #e5e7eb; /* gray-200 */
//             color: #374151; /* gray-800 */
//           }
//           .custom-confirm-box .btn-no:hover {
//             background-color: #d1d5db; /* gray-300 */
//           }
//         `}
//       </style>

//       <Sidebar setCurrentPage={setCurrentPage} />

//       {/* The main content area will expand to fill remaining space */}
//       {currentPage === 'dashboard' && <Dashboard clients={clients} />}
//       {currentPage === 'clients' && (
//         <Clients
//           clients={clients}
//           setClients={setClients} // Keeping setClients for now, but CRUD operations are handled by App
//           setCurrentPage={setCurrentPage}
//           setSelectedClient={setSelectedClient}
//           setClientToEdit={setClientToEdit}
//           onDeleteClient={deleteClient} // Pass delete function
//         />
//       )}
//       {currentPage === 'addClient' && (
//         <AddClientForm onSave={handleSaveClient} onCancel={() => setCurrentPage('clients')} />
//       )}
//       {currentPage === 'editClient' && clientToEdit && (
//         <AddClientForm clientToEdit={clientToEdit} onSave={handleSaveClient} onCancel={handleCancelEdit} />
//       )}
//       {currentPage === 'clientDetail' && selectedClient && (
//         <ClientDetail
//           client={selectedClient}
//           onBack={() => { setCurrentPage('clients'); setSelectedClient(null); }}
//           onEdit={() => { setClientToEdit(selectedClient); setCurrentPage('editClient'); }}
//           onDelete={deleteClient} // Pass delete function
//         />
//       )}

//       {/* Custom Confirmation Dialog */}
//       {showConfirm && (
//         <div className="custom-confirm-overlay">
//           <div className="custom-confirm-box">
//             <p>{confirmMessage}</p>
//             <div className="flex justify-center">
//               <button className="btn-yes" onClick={handleConfirmYes}>Yes</button>
//               <button className="btn-no" onClick={handleConfirmNo}>No</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect, useCallback } from 'react';
// import Sidebar from './components/Sidebar.jsx';
// import Dashboard from './components/Dashboard.jsx';
// import Clients from './components/Clients.jsx';
// import AddClientForm from './components/AddClientForm.jsx';
// import ClientDetail from './components/ClientDetail.jsx';
// import LoginPage from './components/LoginPage.jsx'; // Import the new LoginPage component
// // Removed: import { initialClients } from './data/dummyData.js'; // Dummy data no longer needed

// const API_BASE_URL = 'http://localhost:5000/api/clients'; // Your backend API URL
// // const AUTH_API_URL = 'http://localhost:5000/api/auth'; // Your backend authentication API URL

// // Main App Component
// const App = () => {
//   const [currentPage, setCurrentPage] = useState('dashboard');
//   const [clients, setClients] = useState([]);
//   const [selectedClient, setSelectedClient] = useState(null);
//   const [clientToEdit, setClientToEdit] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state
//   const [authToken, setAuthToken] = useState(null); // Store JWT token

//   // Custom alert/confirmation logic (as alert() is disallowed)
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [confirmMessage, setConfirmMessage] = useState('');
//   const [confirmAction, setConfirmAction] = useState(null);

//   const customConfirm = (message, action) => {
//     setConfirmMessage(message);
//     setConfirmAction(() => action);
//     setShowConfirm(true);
//   };

//   const handleConfirmYes = () => {
//     if (confirmAction) {
//       confirmAction();
//     }
//     setShowConfirm(false);
//     setConfirmAction(null);
//   };

//   const handleConfirmNo = () => {
//     setShowConfirm(false);
//     setConfirmAction(null);
//   };

//   // Override window.confirm for this app's context
//   useEffect(() => {
//     window.confirm = (message, onConfirm) => {
//       return new Promise((resolve) => {
//         customConfirm(message, () => {
//           if (onConfirm) onConfirm();
//           resolve(true);
//         });
//       });
//     };
//   }, []);

  

//   // Load token from localStorage on initial load
//   useEffect(() => {
//     const storedToken = localStorage.getItem('authToken');
//     if (storedToken) {
//       setAuthToken(storedToken);
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Handle successful login
//   const handleLoginSuccess = (token) => {
//     setAuthToken(token);
//     setIsLoggedIn(true);
//     localStorage.setItem('authToken', token); // Store token
//     fetchClients(); // Fetch data after successful login
//     setCurrentPage('dashboard'); // Navigate to dashboard
//   };

//   // Handle logout
//   const handleLogout = () => {
//     setAuthToken(null);
//     setIsLoggedIn(false);
//     localStorage.removeItem('authToken'); // Clear token
//     setClients([]); // Clear client data on logout
//     setCurrentPage('dashboard'); // Go back to dashboard (which will show login)
//     customConfirm("Logged out successfully.");
//   };

//   // Function to fetch clients from the backend
//   const fetchClients = useCallback(async () => {
//     if (!authToken) return; // Don't fetch if not authenticated

//     try {
//       const response = await fetch(API_BASE_URL, {
//         headers: {
//           'Authorization': `Bearer ${authToken}`, // Include token
//         },
//       });
//       if (!response.ok) {
//         if (response.status === 401 || response.status === 403) {
//           // Token expired or invalid, force logout
//           handleLogout();
//           customConfirm("Session expired or unauthorized. Please log in again.");
//           return;
//         }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setClients(data);
//     } catch (error) {
//       console.error("Error fetching clients:", error);
//       customConfirm("Failed to load clients. Please ensure the backend server is running and you are logged in.");
//     }
//   }, [authToken, handleLogout]); // Dependency on authToken and handleLogout


//   useEffect(() => {
//     if (isLoggedIn && authToken) { // Ensure both are true before fetching
//       fetchClients();
//     }
//   }, [isLoggedIn, authToken]);


//   // Function to add a new client
//   const addClient = async (newClientData) => {
//     if (!authToken) {
//       customConfirm("You must be logged in to add a client.");
//       return;
//     }
//     try {
//       const { id, ...dataToSend } = newClientData;
//       const response = await fetch(API_BASE_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${authToken}`, // Include token
//         },
//         body: JSON.stringify(dataToSend),
//       });
//       if (!response.ok) {
//         if (response.status === 401 || response.status === 403) { handleLogout(); customConfirm("Session expired or unauthorized. Please log in again."); return; }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await response.json();
//       fetchClients();
//       setCurrentPage('clients');
//       customConfirm("Client added successfully!");
//     }
//     catch (error) {
//       console.error("Error adding client:", error);
//       customConfirm("Failed to add client. Please try again.");
//     }
//   };

//   // Function to update an existing client
//   const updateClient = async (updatedClientData) => {
//     if (!authToken) {
//       customConfirm("You must be logged in to update a client.");
//       return;
//     }
//     try {
//       const idToUse = updatedClientData._id || updatedClientData.id;
//       const response = await fetch(`${API_BASE_URL}/${idToUse}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${authToken}`, // Include token
//         },
//         body: JSON.stringify(updatedClientData),
//       });
//       if (!response.ok) {
//         if (response.status === 401 || response.status === 403) { handleLogout(); customConfirm("Session expired or unauthorized. Please log in again."); return; }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await response.json();
//       fetchClients();
//       setCurrentPage('clients');
//       setClientToEdit(null);
//       customConfirm("Client updated successfully!");
//     } catch (error) {
//       console.error("Error updating client:", error);
//       customConfirm("Failed to update client. Please try again.");
//     }
//   };

//   // Function to delete a client
//   const deleteClient = async (id) => {
//     if (!authToken) {
//       customConfirm("You must be logged in to delete a client.");
//       return;
//     }
//     customConfirm('Are you sure you want to delete this client permanently?', async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/${id}`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${authToken}`, // Include token
//           },
//         });
//         if (!response.ok) {
//           if (response.status === 401 || response.status === 403) { handleLogout(); customConfirm("Session expired or unauthorized. Please log in again."); return; }
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         fetchClients();
//         setCurrentPage('clients');
//         setSelectedClient(null);
//         customConfirm("Client deleted successfully!");
//       } catch (error) {
//         console.error("Error deleting client:", error);
//         customConfirm("Failed to delete client. Please try again.");
//       }
//     });
//   };

//   const handleSaveClient = (clientData) => {
//     if (clientData._id) {
//       updateClient(clientData);
//     } else {
//       addClient(clientData);
//     }
//   };

//   const handleCancelEdit = () => {
//     setClientToEdit(null);
//     setCurrentPage('clients');
//   };

//   return (
//     <div className="app-wrapper">
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

//           /* Global app layout */
//           .app-wrapper {
//             display: flex;
//             min-height: 100vh;
//             font-family: 'Inter', sans-serif;
//             -webkit-font-smoothing: antialiased;
//             -moz-osx-font-smoothing: grayscale;
//           }

//           /* Custom confirm dialog styling */
//           .custom-confirm-overlay {
//             position: fixed;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: rgba(0, 0, 0, 0.6);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             z-index: 1000;
//           }
//           .custom-confirm-box {
//             background: white;
//             padding: 2.5rem;
//             border-radius: 12px;
//             box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//             text-align: center;
//             max-width: 400px;
//             width: 90%;
//           }
//           .custom-confirm-box p {
//             font-size: 1.125rem;
//             margin-bottom: 1.5rem;
//             color: #333;
//             font-weight: 500;
//           }
//           .custom-confirm-box button {
//             padding: 0.75rem 1.5rem;
//             border-radius: 8px;
//             font-weight: 600;
//             cursor: pointer;
//             transition: all 0.2s ease-in-out;
//             margin: 0 0.5rem;
//           }
//           .custom-confirm-box .btn-yes {
//             background-color: #ef4444; /* red-500 */
//             color: white;
//           }
//           .custom-confirm-box .btn-yes:hover {
//             background-color: #dc2626; /* red-600 */
//           }
//           .custom-confirm-box .btn-no {
//             background-color: #e5e7eb; /* gray-200 */
//             color: #374151; /* gray-800 */
//           }
//           .custom-confirm-box .btn-no:hover {
//             background-color: #d1d5db; /* gray-300 */
//           }
//         `}
//       </style>

//       {/* Conditionally render Login Page or Main App */}
//       {!isLoggedIn ? (
//         <LoginPage onLoginSuccess={handleLoginSuccess} />
//       ) : (
//         <>
//           <Sidebar setCurrentPage={setCurrentPage} onLogout={handleLogout} /> {/* Pass onLogout */}
//           {currentPage === 'dashboard' && <Dashboard clients={clients} />}
//           {currentPage === 'clients' && (
//             <Clients
//               clients={clients}
//               setClients={setClients}
//               setCurrentPage={setCurrentPage}
//               setSelectedClient={setSelectedClient}
//               setClientToEdit={setClientToEdit}
//               onDeleteClient={deleteClient}
//             />
//           )}
//           {currentPage === 'addClient' && (
//             <AddClientForm onSave={handleSaveClient} onCancel={() => setCurrentPage('clients')} />
//           )}
//           {currentPage === 'editClient' && clientToEdit && (
//             <AddClientForm clientToEdit={clientToEdit} onSave={handleSaveClient} onCancel={handleCancelEdit} />
//           )}
//           {currentPage === 'clientDetail' && selectedClient && (
//             <ClientDetail
//               client={selectedClient}
//               onBack={() => { setCurrentPage('clients'); setSelectedClient(null); }}
//               onEdit={() => { setClientToEdit(selectedClient); setCurrentPage('editClient'); }}
//               onDelete={deleteClient}
//             />
//           )}
//         </>
//       )}

//       {/* Custom Confirmation Dialog */}
//       {showConfirm && (
//         <div className="custom-confirm-overlay">
//           <div className="custom-confirm-box">
//             <p>{confirmMessage}</p>
//             <div className="flex justify-center">
//               <button className="btn-yes" onClick={handleConfirmYes}>Yes</button>
//               <button className="btn-no" onClick={handleConfirmNo}>No</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect, useCallback } from 'react';
// import Sidebar from './components/Sidebar.jsx';
// import Dashboard from './components/Dashboard.jsx';
// import Clients from './components/Clients.jsx';
// import AddClientForm from './components/AddClientForm.jsx';
// import ClientDetail from './components/ClientDetail.jsx';
// import LoginPage from './components/LoginPage.jsx';

// const API_BASE_URL = 'http://localhost:5000/api/clients';

// // Main App Component
// const App = () => {
//   const [currentPage, setCurrentPage] = useState('dashboard');
//   const [clients, setClients] = useState([]);
//   const [selectedClient, setSelectedClient] = useState(null);
//   const [clientToEdit, setClientToEdit] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [authToken, setAuthToken] = useState(null);

//   const [showConfirm, setShowConfirm] = useState(false);
//   const [confirmMessage, setConfirmMessage] = useState('');
//   const [confirmResolver, setConfirmResolver] = useState(null); // New state to hold the Promise resolver

//   // Modified customConfirm to return a Promise
//   const customConfirm = useCallback((message) => {
//     return new Promise((resolve) => {
//       setConfirmMessage(message);
//       setConfirmResolver(() => resolve); // Store the resolve function
//       setShowConfirm(true);
//     });
//   }, []);

//   // Handle "Yes" click in custom dialog
//   const handleConfirmYes = () => {
//     if (confirmResolver) {
//       confirmResolver(true); // Resolve the promise with true
//     }
//     setShowConfirm(false);
//     setConfirmResolver(null);
//   };

//   // Handle "No" click in custom dialog
//   const handleConfirmNo = () => {
//     if (confirmResolver) {
//       confirmResolver(false); // Resolve the promise with false
//     }
//     setShowConfirm(false);
//     setConfirmResolver(null);
//   };

//   // Removed the useEffect that overrides window.confirm
//   // window.confirm is no longer being overridden.
//   // Instead, customConfirm will be explicitly awaited where needed.

//   // Handle logout - now wrapped in useCallback
//   const handleLogout = useCallback(() => {
//     setAuthToken(null);
//     setIsLoggedIn(false);
//     localStorage.removeItem('authToken');
//     setClients([]);
//     setCurrentPage('dashboard');
//     customConfirm("Logged out successfully.");
//   }, [customConfirm, setAuthToken, setIsLoggedIn, setClients, setCurrentPage]); // Include all state setters as dependencies

//   // Load token from localStorage on initial load
//   useEffect(() => {
//     const storedToken = localStorage.getItem('authToken');
//     if (storedToken) {
//       setAuthToken(storedToken);
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Handle successful login
//   const handleLoginSuccess = (token) => {
//     setAuthToken(token);
//     setIsLoggedIn(true);
//     localStorage.setItem('authToken', token);
//     // fetchClients will be called by the useEffect below when isLoggedIn becomes true
//     setCurrentPage('dashboard');
//   };

//   // Function to fetch clients from the backend - now more stable due to stable handleLogout
//   const fetchClients = useCallback(async () => {
//     if (!authToken) return;

//     try {
//       const response = await fetch(API_BASE_URL, {
//         headers: {
//           'Authorization': `Bearer ${authToken}`,
//         },
//       });
//       if (!response.ok) {
//         if (response.status === 401 || response.status === 403) {
//           handleLogout();
//           customConfirm("Session expired or unauthorized. Please log in again.");
//           return;
//         }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setClients(data);
//     } catch (error) {
//       console.error("Error fetching clients:", error);
//       customConfirm("Failed to load clients. Please ensure the backend server is running and you are logged in.");
//     }
//   }, [authToken, handleLogout, customConfirm, setClients]);

//   // Fetch clients whenever isLoggedIn or authToken changes
//   useEffect(() => {
//     if (isLoggedIn && authToken) { // Ensure both are true before fetching
//       fetchClients();
//     }
//   }, [isLoggedIn, authToken, fetchClients]);

//   const addClient = async (newClientData) => {
//     if (!authToken) {
//       customConfirm("You must be logged in to add a client.");
//       return;
//     }
//     try {
//       const { id, ...dataToSend } = newClientData;
//       const response = await fetch(API_BASE_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${authToken}`,
//         },
//         body: JSON.stringify(dataToSend),
//       });
//       if (!response.ok) {
//         if (response.status === 401 || response.status === 403) { handleLogout(); customConfirm("Session expired or unauthorized. Please log in again."); return; }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await response.json();
//       fetchClients();
//       setCurrentPage('clients');
//       customConfirm("Client added successfully!");
//     }
//     catch (error) {
//       console.error("Error adding client:", error);
//       customConfirm("Failed to add client. Please try again.");
//     }
//   };

//   const updateClient = async (updatedClientData) => {
//     if (!authToken) {
//       customConfirm("You must be logged in to update a client.");
//       return;
//     }
//     try {
//       const idToUse = updatedClientData._id || updatedClientData.id;
//       const response = await fetch(`${API_BASE_URL}/${idToUse}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${authToken}`,
//         },
//         body: JSON.stringify(updatedClientData),
//       });
//       if (!response.ok) {
//         if (response.status === 401 || response.status === 403) { handleLogout(); customConfirm("Session expired or unauthorized. Please log in again."); return; }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       await response.json();
//       fetchClients();
//       setCurrentPage('clients');
//       setClientToEdit(null);
//       customConfirm("Client updated successfully!");
//     } catch (error) {
//       console.error("Error updating client:", error);
//       customConfirm("Failed to update client. Please try again.");
//     }
//   };

//   const deleteClient = async (id) => {
//     if (!authToken) {
//       customConfirm("You must be logged in to delete a client.");
//       return;
//     }
//     // Await the customConfirm result
//     const confirmed = await customConfirm('Are you sure you want to delete this client permanently?');

//     if (confirmed) {
//       try {
//         const response = await fetch(`${API_BASE_URL}/${id}`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${authToken}`,
//           },
//         });
//         if (!response.ok) {
//           if (response.status === 401 || response.status === 403) { handleLogout(); customConfirm("Session expired or unauthorized. Please log in again."); return; }
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         fetchClients();
//         setCurrentPage('clients');
//         setSelectedClient(null);
//         customConfirm("Client deleted successfully!");
//       } catch (error) {
//         console.error("Error deleting client:", error);
//         customConfirm("Failed to delete client. Please try again.");
//       }
//     }
//   };

//   const handleSaveClient = (clientData) => {
//     if (clientData._id) {
//       updateClient(clientData);
//     } else {
//       addClient(clientData);
//     }
//   };

//   const handleCancelEdit = () => {
//     setClientToEdit(null);
//     setCurrentPage('clients');
//   };

//   return (
//     <div className="app-wrapper">
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

//           /* Global app layout */
//           .app-wrapper {
//             display: flex;
//             // min-height: 100vh;
//             font-family: 'Inter', sans-serif;
//             -webkit-font-smoothing: antialiased;
//             -moz-osx-font-smoothing: grayscale;
//           }

//           /* Custom confirm dialog styling */
//           .custom-confirm-overlay {
//             position: fixed;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: rgba(0, 0, 0, 0.6);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             z-index: 1000;
//           }
//           .custom-confirm-box {
//             background: white;
//             padding: 2.5rem;
//             border-radius: 12px;
//             box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//             text-align: center;
//             max-width: 400px;
//             width: 90%;
//           }
//           .custom-confirm-box p {
//             font-size: 1.125rem;
//             margin-bottom: 1.5rem;
//             color: #333;
//             font-weight: 500;
//           }
//           .custom-confirm-box button {
//             padding: 0.75rem 1.5rem;
//             border-radius: 8px;
//             font-weight: 600;
//             cursor: pointer;
//             transition: all 0.2s ease-in-out;
//             margin: 0 0.5rem;
//           }
//           .custom-confirm-box .btn-yes {
//             background-color: #ef4444; /* red-500 */
//             color: white;
//           }
//           .custom-confirm-box .btn-yes:hover {
//             background-color: #dc2626; /* red-600 */
//           }
//           .custom-confirm-box .btn-no {
//             background-color: #e5e7eb; /* gray-200 */
//             color: #374151; /* gray-800 */
//           }
//           .custom-confirm-box .btn-no:hover {
//             background-color: #d1d5db; /* gray-300 */
//           }
//         `}
//       </style>

//       {/* Conditionally render Login Page or Main App */}
//       {!isLoggedIn ? (
//         <LoginPage onLoginSuccess={handleLoginSuccess} />
//       ) : (
//         <>
//           <Sidebar setCurrentPage={setCurrentPage} onLogout={handleLogout} />
//           {currentPage === 'dashboard' && <Dashboard clients={clients} />}
//           {currentPage === 'clients' && (
//             <Clients
//               clients={clients}
//               setClients={setClients}
//               setCurrentPage={setCurrentPage}
//               setSelectedClient={setSelectedClient}
//               setClientToEdit={setClientToEdit}
//               onDeleteClient={deleteClient}
//             />
//           )}
//           {currentPage === 'addClient' && (
//             <AddClientForm onSave={handleSaveClient} onCancel={() => setCurrentPage('clients')} />
//           )}
//           {currentPage === 'editClient' && clientToEdit && (
//             <AddClientForm clientToEdit={clientToEdit} onSave={handleSaveClient} onCancel={handleCancelEdit} />
//           )}
//           {currentPage === 'clientDetail' && selectedClient && (
//             <ClientDetail
//               client={selectedClient}
//               onBack={() => { setCurrentPage('clients'); setSelectedClient(null); }}
//               onEdit={() => { setClientToEdit(selectedClient); setCurrentPage('editClient'); }}
//               onDelete={deleteClient}
//             />
//           )}
//         </>
//       )}

//       {/* Custom Confirmation Dialog */}
//       {showConfirm && (
//         <div className="custom-confirm-overlay">
//           <div className="custom-confirm-box">
//             <p>{confirmMessage}</p>
//             <div className="flex justify-center">
//               <button className="btn-yes" onClick={handleConfirmYes}>Yes</button>
//               <button className="btn-no" onClick={handleConfirmNo}>No</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Clients from './components/Clients.jsx';
import AddClientForm from './components/AddClientForm.jsx';
import ClientDetail from './components/ClientDetail.jsx';
import LoginPage from './components/LoginPage.jsx';
import LoanCalculationsPage from './components/LoanCalculationsPage.jsx'; // Import new page
import { Button } from '@mui/material';


const API_BASE_URL = 'http://localhost:5000/api/clients';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clientToEdit, setClientToEdit] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [confirmResolver, setConfirmResolver] = useState(null);

  const customConfirm = useCallback((message) => {
    return new Promise((resolve) => {
      setConfirmMessage(message);
      setConfirmResolver(() => resolve);
      setShowConfirm(true);
    });
  }, []);

  const handleConfirmYes = () => {
    if (confirmResolver) {
      confirmResolver(true);
    }
    setShowConfirm(false);
    setConfirmResolver(null);
  };

  const handleConfirmNo = () => {
    if (confirmResolver) {
      confirmResolver(false);
    }
    setShowConfirm(false);
    setConfirmResolver(null);
  };

  const handleLogout = useCallback(() => {
    setAuthToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem('authToken');
    setClients([]);
    setCurrentPage('dashboard');
    customConfirm("Logged out successfully.");
  }, [customConfirm, setAuthToken, setIsLoggedIn, setClients, setCurrentPage]);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setAuthToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = (token) => {
    setAuthToken(token);
    setIsLoggedIn(true);
    localStorage.setItem('authToken', token);
    setCurrentPage('dashboard');
  };

  const fetchClients = useCallback(async () => {
    if (!authToken) return;

    try {
      const response = await fetch(API_BASE_URL, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          handleLogout();
          customConfirm("Session expired or unauthorized. Please log in again.");
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error("Error fetching clients:", error);
      customConfirm("Failed to load clients. Please ensure the backend server is running and you are logged in.");
    }
  }, [authToken, handleLogout, customConfirm, setClients]);

  useEffect(() => {
    if (isLoggedIn && authToken) {
      fetchClients();
    }
  }, [isLoggedIn, authToken]);

  const addClient = async (newClientData) => {
    if (!authToken) {
      customConfirm("You must be logged in to add a client.");
      return;
    }
    try {
      const { id, ...dataToSend } = newClientData;
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify(dataToSend),
      });
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) { handleLogout(); customConfirm("Session expired or unauthorized. Please log in again."); return; }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await response.json();
      fetchClients();
      setCurrentPage('clients');
      customConfirm("Client added successfully!");
    }
    catch (error) {
      console.error("Error adding client:", error);
      customConfirm("Failed to add client. Please try again.");
    }
  };

  const updateClient = async (updatedClientData) => {
    if (!authToken) {
      customConfirm("You must be logged in to update a client.");
      return;
    }
    try {
      const idToUse = updatedClientData._id || updatedClientData.id;
      const response = await fetch(`${API_BASE_URL}/${idToUse}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify(updatedClientData),
      });
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) { handleLogout(); customConfirm("Session expired or unauthorized. Please log in again."); return; }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await response.json();
      fetchClients();
      setCurrentPage('clients');
      setClientToEdit(null);
      customConfirm("Client updated successfully!");
    } catch (error) {
      console.error("Error updating client:", error);
      customConfirm("Failed to update client. Please try again.");
    }
  };

  const deleteClient = async (id) => {
    if (!authToken) {
      customConfirm("You must be logged in to delete a client.");
      return;
    }
    const confirmed = await customConfirm('Are you sure you want to delete this client permanently?');

    if (confirmed) {
      try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
        });
        if (!response.ok) {
          if (response.status === 401 || response.status === 403) { handleLogout(); customConfirm("Session expired or unauthorized. Please log in again."); return; }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        fetchClients();
        setCurrentPage('clients');
        setSelectedClient(null);
        customConfirm("Client deleted successfully!");
      } catch (error) {
        console.error("Error deleting client:", error);
        customConfirm("Failed to delete client. Please try again.");
      }
    }
  };

  const handleSaveClient = (clientData) => {
    if (clientData._id) {
      updateClient(clientData);
    } else {
      addClient(clientData);
    }
  };

  const handleCancelEdit = () => {
    setClientToEdit(null);
    setCurrentPage('clients');
  };

  return (
    <div className="app-wrapper">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

          /* Global app layout */
          .app-wrapper {
            display: flex;
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          /* Custom confirm dialog styling */
          .custom-confirm-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }
          .custom-confirm-box {
            background: white;
            padding: 2.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            text-align: center;
            max-width: 400px;
            width: 90%;
          }
          .custom-confirm-box p {
            font-size: 1.125rem;
            margin-bottom: 1.5rem;
            color: #333;
            font-weight: 500;
          }
          .custom-confirm-box button {
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            margin: 0 0.5rem;
          }
          .custom-confirm-box .btn-yes {
            background-color: #ef4444; /* red-500 */
            color: white;
          }
          .custom-confirm-box .btn-yes:hover {
            background-color: #dc2626; /* red-600 */
          }
          .custom-confirm-box .btn-no {
            background-color: #e5e7eb; /* gray-200 */
            color: #374151; /* gray-800 */
          }
          .custom-confirm-box .btn-no:hover {
            background-color: #d1d5db; /* gray-300 */
          }
        `}
      </style>

      {/* Conditionally render Login Page or Main App */}
      {!isLoggedIn ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Sidebar setCurrentPage={setCurrentPage} onLogout={handleLogout} />
          {currentPage === 'dashboard' && <Dashboard clients={clients} />}
          {currentPage === 'clients' && (
            <Clients
              clients={clients}
              setClients={setClients}
              setCurrentPage={setCurrentPage}
              setSelectedClient={setSelectedClient}
              setClientToEdit={setClientToEdit}
              onDeleteClient={deleteClient}
            />
          )}
          {currentPage === 'addClient' && (
            <AddClientForm onSave={handleSaveClient} onCancel={() => setCurrentPage('clients')} />
          )}
          {currentPage === 'editClient' && clientToEdit && (
            <AddClientForm clientToEdit={clientToEdit} onSave={handleSaveClient} onCancel={handleCancelEdit} />
          )}
          {currentPage === 'clientDetail' && selectedClient && (
            <ClientDetail
              client={selectedClient}
              onBack={() => { setCurrentPage('clients'); setSelectedClient(null); }}
              onEdit={() => { setClientToEdit(selectedClient); setCurrentPage('editClient'); }}
              onDelete={deleteClient}
              authToken={authToken}
              fetchClients={fetchClients}
            />
          )}
          {currentPage === 'loanCalculations' && ( // New page rendering
            <LoanCalculationsPage
              clients={clients}
              authToken={authToken}
              fetchClients={fetchClients}
              customConfirm={customConfirm}
            />
          )}
        </>
      )}

      {/* Custom Confirmation Dialog */}
      {showConfirm && (
        <div className="custom-confirm-overlay">
          <div className="custom-confirm-box">
            <p>{confirmMessage}</p>
            <div className="flex justify-center">
              <Button variant="contained" color='error' onClick={handleConfirmYes}>Outlined</Button>
              <button className="btn-yes" onClick={handleConfirmYes}>Yes</button>
              <button className="btn-no" onClick={handleConfirmNo}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
