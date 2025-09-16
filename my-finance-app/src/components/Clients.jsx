// import React, { useState } from 'react';
// import { PlusCircle, FileText, Edit, Trash2, Search, ChevronDown, ChevronUp } from 'lucide-react';

// // Clients List Component
// const Clients = ({ clients, setClients, setCurrentPage, setSelectedClient, setClientToEdit }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

//   const filteredClients = clients.filter(client =>
//     client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     client.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedClients = [...filteredClients].sort((a, b) => {
//     if (sortConfig.key) {
//       const aValue = typeof a[sortConfig.key] === 'string' ? a[sortConfig.key].toLowerCase() : a[sortConfig.key];
//       const bValue = typeof b[sortConfig.key] === 'string' ? b[sortConfig.key].toLowerCase() : b[sortConfig.key];

//       if (aValue < bValue) {
//         return sortConfig.direction === 'ascending' ? -1 : 1;
//       }
//       if (aValue > bValue) {
//         return sortConfig.direction === 'ascending' ? 1 : -1;
//       }
//     }
//     return 0;
//   });

//   const requestSort = (key) => {
//     let direction = 'ascending';
//     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
//       direction = 'descending';
//     }
//     setSortConfig({ key, direction });
//   };

//   const getClassNamesFor = (name) => {
//     if (!sortConfig.key) {
//       return;
//     }
//     return sortConfig.key === name ? sortConfig.direction : undefined;
//   };

//   const handleViewClient = (client) => {
//     setSelectedClient(client);
//     setCurrentPage('clientDetail');
//   };

//   const handleDeleteClient = (id) => {
//     // Use the custom confirmation
//     window.confirm('Are you sure you want to delete this client?', () => {
//       setClients(clients.filter(client => client.id !== id));
//     });
//   };

//   return (
//     <div className="flex-1 p-8 bg-gray-100 min-h-screen rounded-l-lg">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-extrabold text-gray-900">Client Management</h1>
//         <button
//           onClick={() => setCurrentPage('addClient')}
//           className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
//         >
//           <PlusCircle className="mr-2" size={20} /> Add New Client
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="mb-6">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//           <input
//             type="text"
//             placeholder="Search clients by name or email..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
//           />
//         </div>
//       </div>

//       {/* Clients Table */}
//       <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
//         {sortedClients.length === 0 ? (
//           <p className="text-center text-gray-500 py-10">No clients found. Try adding a new one!</p>
//         ) : (
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                   onClick={() => requestSort('name')}
//                 >
//                   <div className="flex items-center">
//                     Name {getClassNamesFor('name') === 'ascending' ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
//                   </div>
//                 </th>
//                 <th
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                   onClick={() => requestSort('email')}
//                 >
//                   <div className="flex items-center">
//                     Email {getClassNamesFor('email') === 'ascending' ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
//                   </div>
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Phone
//                 </th>
//                 <th
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                   onClick={() => requestSort('joinedDate')}
//                 >
//                   <div className="flex items-center">
//                     Joined Date {getClassNamesFor('joinedDate') === 'ascending' ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
//                   </div>
//                 </th>
//                 <th
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                   onClick={() => requestSort('status')}
//                 >
//                   <div className="flex items-center">
//                     Status {getClassNamesFor('status') === 'ascending' ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
//                   </div>
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {sortedClients.map((client) => (
//                 <tr key={client.id} className="hover:bg-gray-50 transition-colors duration-150">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{client.name}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{client.email}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{client.phone}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{client.joinedDate}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       client.status === 'Active' ? 'bg-green-100 text-green-800' :
//                       client.status === 'Inactive' ? 'bg-red-100 text-red-800' :
//                       'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {client.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     <div className="flex space-x-3">
//                       <button
//                         onClick={() => handleViewClient(client)}
//                         className="text-blue-600 hover:text-blue-900 transition-colors duration-150"
//                         title="View Details"
//                       >
//                         <FileText size={20} />
//                       </button>
//                       <button
//                         onClick={() => setClientToEdit(client)}
//                         className="text-indigo-600 hover:text-indigo-900 transition-colors duration-150"
//                         title="Edit Client"
//                       >
//                         <Edit size={20} />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteClient(client.id)}
//                         className="text-red-600 hover:text-red-900 transition-colors duration-150"
//                         title="Delete Client"
//                       >
//                         <Trash2 size={20} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Clients;


// import React, { useState } from 'react';
// import { PlusCircle, FileText, Edit, Trash2, Search, ChevronDown, ChevronUp } from 'lucide-react';

// // Clients List Component
// const Clients = ({ clients, setClients, setCurrentPage, setSelectedClient, setClientToEdit }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

//   const filteredClients = clients.filter(client =>
//     client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     client.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedClients = [...filteredClients].sort((a, b) => {
//     if (sortConfig.key) {
//       const aValue = typeof a[sortConfig.key] === 'string' ? a[sortConfig.key].toLowerCase() : a[sortConfig.key];
//       const bValue = typeof b[sortConfig.key] === 'string' ? b[sortConfig.key].toLowerCase() : b[sortConfig.key];

//       if (aValue < bValue) {
//         return sortConfig.direction === 'ascending' ? -1 : 1;
//       }
//       if (aValue > bValue) {
//         return sortConfig.direction === 'ascending' ? 1 : -1;
//       }
//     }
//     return 0;
//   });

//   const requestSort = (key) => {
//     let direction = 'ascending';
//     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
//       direction = 'descending';
//     }
//     setSortConfig({ key, direction });
//   };

//   const getClassNamesFor = (name) => {
//     if (!sortConfig.key) {
//       return;
//     }
//     return sortConfig.key === name ? sortConfig.direction : undefined;
//   };

//   const handleViewClient = (client) => {
//     setSelectedClient(client);
//     setCurrentPage('clientDetail');
//   };

//   const handleDeleteClient = (id) => {
//     // Use the custom confirmation
//     window.confirm('Are you sure you want to delete this client?', () => {
//       setClients(clients.filter(client => client.id !== id));
//     });
//   };

//   return (
//     <div className="clients-container">
//       <style>
//         {`
//           .clients-container {
//             flex: 1;
//             padding: 2rem;
//             background-color: #f3f4f6; /* bg-gray-100 */
//             min-height: 100vh;
//             border-top-left-radius: 0.5rem; /* rounded-l-lg */
//             border-bottom-left-radius: 0.5rem; /* rounded-l-lg */
//           }

//           @media (max-width: 767px) {
//             .clients-container {
//               padding: 1rem; /* Adjust padding for smaller screens */
//             }
//           }

//           .clients-header {
//             display: flex;
//             flex-direction: column; /* Stack on small screens */
//             justify-content: space-between;
//             align-items: flex-start; /* Align items to start on small screens */
//             margin-bottom: 2rem; /* mb-8 */
//           }

//           @media (min-width: 768px) {
//             .clients-header {
//               flex-direction: row; /* Row on larger screens */
//               align-items: center; /* Center items on larger screens */
//             }
//           }

//           .clients-title {
//             font-size: 2.25rem; /* text-4xl */
//             font-weight: 800; /* font-extrabold */
//             color: #111827; /* text-gray-900 */
//             margin-bottom: 1rem; /* Add margin bottom for stacking */
//           }

//           @media (min-width: 768px) {
//             .clients-title {
//               margin-bottom: 0; /* Remove margin bottom on larger screens */
//             }
//           }

//           .add-client-button {
//             display: flex;
//             align-items: center;
//             background-color: #2563eb; /* bg-blue-600 */
//             color: #fff; /* text-white */
//             font-weight: 700; /* font-bold */
//             padding: 0.75rem 1.5rem; /* py-3 px-6 */
//             border-radius: 0.5rem; /* rounded-lg */
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
//             transition: all 0.3s ease-in-out; /* transition-all duration-300 transform */
//             cursor: pointer;
//             border: none;
//             width: 100%; /* Full width on small screens */
//             justify-content: center; /* Center content */
//           }

//           @media (min-width: 768px) {
//             .add-client-button {
//               width: auto; /* Auto width on larger screens */
//             }
//           }

//           .add-client-button:hover {
//             transform: scale(1.05); /* hover:scale-105 */
//             background-color: #1d4ed8; /* hover:bg-blue-700 */
//           }

//           .add-client-button svg {
//             margin-right: 0.5rem; /* mr-2 */
//           }

//           .search-bar-container {
//             margin-bottom: 1.5rem; /* mb-6 */
//           }

//           .search-input-wrapper {
//             position: relative;
//           }

//           .search-input-wrapper svg {
//             position: absolute;
//             left: 0.75rem; /* left-3 */
//             top: 50%;
//             transform: translateY(-50%); /* -translate-y-1/2 */
//             color: #9ca3af; /* text-gray-400 */
//           }

//           .search-input {
//             width: 100%;
//             padding: 0.75rem 0.75rem 0.75rem 2.5rem; /* p-3 pl-10 */
//             border: 1px solid #d1d5db; /* border border-gray-300 */
//             border-radius: 0.5rem; /* rounded-lg */
//             transition: all 0.2s ease-in-out; /* transition-all */
//             box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
//             box-sizing: border-box; /* Ensure padding is included in width */
//           }

//           .search-input:focus {
//             outline: none;
//             border-color: #3b82f6; /* focus:border-blue-500 */
//             box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25); /* focus:ring-2 focus:ring-blue-500 */
//           }

//           .clients-table-section {
//             background-color: #fff; /* bg-white */
//             padding: 1.5rem; /* p-6 */
//             border-radius: 0.75rem; /* rounded-xl */
//             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
//             overflow-x: auto; /* overflow-x-auto */
//           }

//           .no-clients-message {
//             text-align: center; /* text-center */
//             color: #6b7280; /* text-gray-500 */
//             padding-top: 2.5rem; /* py-10 */
//             padding-bottom: 2.5rem; /* py-10 */
//           }

//           .clients-table {
//             min-width: 100%; /* min-w-full */
//             border-collapse: collapse; /* ensure borders behave correctly */
//             table-layout: auto; /* Allow column widths to adjust */
//           }

//           @media (max-width: 767px) {
//             .clients-table {
//               display: block; /* Make table behave like a block for overflow */
//               width: max-content; /* Allow table to grow beyond container */
//             }
//             .clients-table thead, .clients-table tbody, .clients-table th, .clients-table td, .clients-table tr {
//               display: block; /* Make table elements behave like blocks */
//             }
//             .clients-table thead tr {
//               position: absolute;
//               top: -9999px;
//               left: -9999px; /* Hide table headers visually */
//             }
//             .clients-table tr {
//               margin-bottom: 1rem;
//               border: 1px solid #e5e7eb;
//               border-radius: 0.5rem;
//               padding: 1rem;
//             }
//             .clients-table td {
//               border: none;
//               position: relative;
//               padding-left: 50%; /* Space for pseudo-element label */
//               text-align: right;
//               white-space: normal; /* Allow text to wrap */
//             }
//             .clients-table td:before {
//               content: attr(data-label); /* Use data-label for mobile labels */
//               position: absolute;
//               left: 0.75rem;
//               width: 45%;
//               padding-right: 0.75rem;
//               white-space: nowrap;
//               text-align: left;
//               font-weight: 600;
//               color: #1f2937;
//             }
//             /* Specific adjustments for actions column on mobile */
//             .clients-table td:last-child {
//               text-align: center;
//               padding-left: 0;
//             }
//             .clients-table td:last-child:before {
//               content: ''; /* Hide label for actions */
//             }
//           }


//           .clients-table thead {
//             background-color: #f9fafb; /* bg-gray-50 */
//           }

//           .clients-table th {
//             padding: 0.75rem 1.5rem; /* px-6 py-3 */
//             text-align: left;
//             font-size: 0.75rem; /* text-xs */
//             font-weight: 500; /* font-medium */
//             color: #6b7280; /* text-gray-500 */
//             text-transform: uppercase; /* uppercase */
//             letter-spacing: 0.05em; /* tracking-wider */
//             cursor: pointer;
//             white-space: nowrap; /* Prevent wrapping in headers */
//           }

//           .clients-table th .sortable-header {
//             display: flex;
//             align-items: center;
//           }

//           .clients-table th .sortable-header svg {
//             margin-left: 0.25rem; /* ml-1 */
//             font-size: 1rem; /* size={16} */
//           }

//           .clients-table tbody {
//             background-color: #fff; /* bg-white */
//             border-top: 1px solid #e5e7eb; /* divide-y divide-gray-200 */
//           }

//           .clients-table td {
//             padding: 1rem 1.5rem; /* px-6 py-4 */
//             white-space: nowrap; /* whitespace-nowrap */
//             font-size: 0.875rem; /* text-sm */
//             color: #4b5563; /* text-gray-600 */
//           }

//           .clients-table tbody tr:hover {
//             background-color: #f9fafb; /* hover:bg-gray-50 */
//             transition: background-color 0.15s ease-in-out; /* transition-colors duration-150 */
//           }

//           .clients-table td.client-name {
//             font-weight: 500; /* font-medium */
//             color: #111827; /* text-gray-900 */
//           }

//           .status-badge {
//             padding: 0.25rem 0.5rem; /* px-2 inline-flex */
//             font-size: 0.75rem; /* text-xs */
//             line-height: 1.25rem; /* leading-5 */
//             font-weight: 600; /* font-semibold */
//             border-radius: 9999px; /* rounded-full */
//           }

//           .status-badge.active {
//             background-color: #d1fae5; /* bg-green-100 */
//             color: #065f46; /* text-green-800 */
//           }

//           .status-badge.inactive {
//             background-color: #fee2e2; /* bg-red-100 */
//             color: #991b1b; /* text-red-800 */
//           }

//           .status-badge.lead {
//             background-color: #fffbeb; /* bg-yellow-100 */
//             color: #92400e; /* text-yellow-800 */
//           }

//           .action-buttons-group {
//             display: flex;
//             gap: 0.75rem; /* space-x-3 */
//             justify-content: center; /* Center actions on mobile */
//           }

//           .action-icon-button {
//             background: none;
//             border: none;
//             padding: 0;
//             cursor: pointer;
//             transition: color 0.15s ease-in-out; /* transition-colors duration-150 */
//           }

//           .action-icon-button.view {
//             color: #2563eb; /* text-blue-600 */
//           }
//           .action-icon-button.view:hover {
//             color: #1e4ed8; /* hover:text-blue-900 */
//           }

//           .action-icon-button.edit {
//             color: #4f46e5; /* text-indigo-600 */
//           }
//           .action-icon-button.edit:hover {
//             color: #4338ca; /* hover:text-indigo-900 */
//           }

//           .action-icon-button.delete {
//             color: #dc2626; /* text-red-600 */
//           }
//           .action-icon-button.delete:hover {
//             color: #b91c1c; /* hover:text-red-900 */
//           }
//         `}
//       </style>
//       <div className="clients-header">
//         <h1 className="clients-title">Client Management</h1>
//         <button
//           onClick={() => setCurrentPage('addClient')}
//           className="add-client-button"
//         >
//           <PlusCircle size={20} /> Add New Client
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="search-bar-container">
//         <div className="search-input-wrapper">
//           <Search size={20} />
//           <input
//             type="text"
//             placeholder="Search clients by name or email..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>
//       </div>

//       {/* Clients Table */}
//       <div className="clients-table-section">
//         {sortedClients.length === 0 ? (
//           <p className="no-clients-message">No clients found. Try adding a new one!</p>
//         ) : (
//           <table className="clients-table">
//             <thead>
//               <tr>
//                 <th
//                   onClick={() => requestSort('name')}
//                 >
//                   <div className="sortable-header">
//                     Name {getClassNamesFor('name') === 'ascending' ? <ChevronUp /> : <ChevronDown />}
//                   </div>
//                 </th>
//                 <th
//                   onClick={() => requestSort('email')}
//                 >
//                   <div className="sortable-header">
//                     Email {getClassNamesFor('email') === 'ascending' ? <ChevronUp /> : <ChevronDown />}
//                   </div>
//                 </th>
//                 <th>
//                   Phone
//                 </th>
//                 <th
//                   onClick={() => requestSort('joinedDate')}
//                 >
//                   <div className="sortable-header">
//                     Joined Date {getClassNamesFor('joinedDate') === 'ascending' ? <ChevronUp /> : <ChevronDown />}
//                   </div>
//                 </th>
//                 <th
//                   onClick={() => requestSort('status')}
//                 >
//                   <div className="sortable-header">
//                     Status {getClassNamesFor('status') === 'ascending' ? <ChevronUp /> : <ChevronDown />}
//                   </div>
//                 </th>
//                 <th>
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedClients.map((client) => (
//                 <tr key={client.id}>
//                   <td className="client-name" data-label="Name">{client.name}</td>
//                   <td data-label="Email">{client.email}</td>
//                   <td data-label="Phone">{client.phone}</td>
//                   <td data-label="Joined Date">{client.joinedDate}</td>
//                   <td data-label="Status">
//                     <span className={`status-badge ${
//                       client.status === 'Active' ? 'active' :
//                       client.status === 'Inactive' ? 'inactive' :
//                       'lead'
//                     }`}>
//                       {client.status}
//                     </span>
//                   </td>
//                   <td data-label="Actions">
//                     <div className="action-buttons-group">
//                       <button
//                         onClick={() => handleViewClient(client)}
//                         className="action-icon-button view"
//                         title="View Details"
//                       >
//                         <FileText size={20} />
//                       </button>
//                       <button
//                         onClick={() => setClientToEdit(client)}
//                         className="action-icon-button edit"
//                         title="Edit Client"
//                       >
//                         <Edit size={20} />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteClient(client.id)}
//                         className="action-icon-button delete"
//                         title="Delete Client"
//                       >
//                         <Trash2 size={20} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Clients;


import React, { useState } from 'react';
import { PlusCircle, FileText, Edit, Trash2, Search, ChevronDown, ChevronUp } from 'lucide-react';

// Clients List Component
const Clients = ({ clients, setClients, setCurrentPage, setSelectedClient, setClientToEdit, onDeleteClient }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedClients = [...filteredClients].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = typeof a[sortConfig.key] === 'string' ? a[sortConfig.key].toLowerCase() : a[sortConfig.key];
      const bValue = typeof b[sortConfig.key] === 'string' ? b[sortConfig.key].toLowerCase() : b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig.key) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const handleViewClient = (client) => {
    setSelectedClient(client);
    setCurrentPage('clientDetail');
  };

  const handleEditClient = (client) => {
    setClientToEdit(client);
    setCurrentPage('editClient');
  };

  // Use onDeleteClient prop and pass client._id
  const handleDeleteClient = (clientToDelete) => {
    onDeleteClient(clientToDelete._id); // Pass the MongoDB _id
  };

  return (
    <div className="clients-container">
      <style>
        {`
          .clients-container {
            flex: 1;
            padding: 6rem;
            background-color: #f3f4f6; /* bg-gray-100 */
            min-height: 70vh;
            border-top-left-radius: 0.5rem; /* rounded-l-lg */
            border-bottom-left-radius: 0.5rem; /* rounded-l-lg */
          }

          @media (max-width: 767px) {
            .clients-container {
              padding: 1rem; /* Adjust padding for smaller screens */
            }
          }

          .clients-header {
            display: flex;
            flex-direction: column; /* Stack on small screens */
            justify-content: space-between;
            align-items: flex-start; /* Align items to start on small screens */
            margin-bottom: 2rem; /* mb-8 */
          }

          @media (min-width: 768px) {
            .clients-header {
              flex-direction: row; /* Row on larger screens */
              align-items: center; /* Center items on larger screens */
            }
          }

          .clients-title {
            font-size: 2.25rem; /* text-4xl */
            font-weight: 800; /* font-extrabold */
            color: #111827; /* text-gray-900 */
            margin-bottom: 1rem; /* Add margin bottom for stacking */
          }

          @media (min-width: 768px) {
            .clients-title {
              margin-bottom: 0; /* Remove margin bottom on larger screens */
            }
          }

          .add-client-button {
            display: flex;
            align-items: center;
            background-color: #2563eb; /* bg-blue-600 */
            color: #fff; /* text-white */
            font-weight: 700; /* font-bold */
            padding: 0.75rem 1.5rem; /* py-3 px-6 */
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            transition: all 0.3s ease-in-out; /* transition-all duration-300 transform */
            cursor: pointer;
            border: none;
            width: 100%; /* Full width on small screens */
            justify-content: center; /* Center content */
          }

          @media (min-width: 768px) {
            .add-client-button {
              width: auto; /* Auto width on larger screens */
            }
          }

          .add-client-button:hover {
            transform: scale(1.05); /* hover:scale-105 */
            background-color: #1d4ed8; /* hover:bg-blue-700 */
          }

          .add-client-button svg {
            margin-right: 0.5rem; /* mr-2 */
          }

          .search-bar-container {
            margin-bottom: 1.5rem; /* mb-6 */
          }

          .search-input-wrapper {
            position: relative;
          }

          .search-input-wrapper svg {
            position: absolute;
            left: 0.75rem; /* left-3 */
            top: 50%;
            transform: translateY(-50%); /* -translate-y-1/2 */
            color: #9ca3af; /* text-gray-400 */
          }

          .search-input {
            width: 100%;
            padding: 0.75rem 0.75rem 0.75rem 2.5rem; /* p-3 pl-10 */
            border: 1px solid #d1d5db; /* border border-gray-300 */
            border-radius: 0.5rem; /* rounded-lg */
            transition: all 0.2s ease-in-out; /* transition-all */
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
            box-sizing: border-box; /* Ensure padding is included in width */
          }

          .search-input:focus {
            outline: none;
            border-color: #3b82f6; /* focus:border-blue-500 */
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25); /* focus:ring-2 focus:ring-blue-500 */
          }

          .clients-table-section {
            background-color: #fff; /* bg-white */
            padding: 1.5rem; /* p-6 */
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            overflow-x: auto; /* overflow-x-auto */
          }

          .no-clients-message {
            text-align: center; /* text-center */
            color: #6b7280; /* text-gray-500 */
            padding-top: 2.5rem; /* py-10 */
            padding-bottom: 2.5rem; /* py-10 */
          }

          .clients-table {
            min-width: 100%; /* min-w-full */
            border-collapse: collapse; /* ensure borders behave correctly */
            table-layout: auto; /* Allow column widths to adjust */
          }

          @media (max-width: 767px) {
            .clients-table {
              display: block; /* Make table behave like a block for overflow */
              width: max-content; /* Allow table to grow beyond container */
            }
            .clients-table thead, .clients-table tbody, .clients-table th, .clients-table td, .clients-table tr {
              display: block; /* Make table elements behave like blocks */
            }
            .clients-table thead tr {
              position: absolute;
              top: -9999px;
              left: -9999px; /* Hide table headers visually */
            }
            .clients-table tr {
              margin-bottom: 1rem;
              border: 1px solid #e5e7eb;
              border-radius: 0.5rem;
              padding: 1rem;
            }
            .clients-table td {
              border: none;
              position: relative;
              padding-left: 50%; /* Space for pseudo-element label */
              text-align: right;
              white-space: normal; /* Allow text to wrap */
            }
            .clients-table td:before {
              content: attr(data-label); /* Use data-label for mobile labels */
              position: absolute;
              left: 0.75rem;
              width: 45%;
              padding-right: 0.75rem;
              white-space: nowrap;
              text-align: left;
              font-weight: 600;
              color: #1f2937;
            }
            /* Specific adjustments for actions column on mobile */
            .clients-table td:last-child {
              text-align: center;
              padding-left: 0;
            }
            .clients-table td:last-child:before {
              content: ''; /* Hide label for actions */
            }
          }


          .clients-table thead {
            background-color: #f9fafb; /* bg-gray-50 */
          }

          .clients-table th {
            padding: 0.75rem 1.5rem; /* px-6 py-3 */
            text-align: left;
            font-size: 0.75rem; /* text-xs */
            font-weight: 500; /* font-medium */
            color: #6b7280; /* text-gray-500 */
            text-transform: uppercase; /* uppercase */
            letter-spacing: 0.05em; /* tracking-wider */
            cursor: pointer;
            white-space: nowrap; /* Prevent wrapping in headers */
          }

          .clients-table th .sortable-header {
            display: flex;
            align-items: center;
          }

          .clients-table th .sortable-header svg {
            margin-left: 0.25rem; /* ml-1 */
            font-size: 1rem; /* size={16} */
          }

          .clients-table tbody {
            background-color: #fff; /* bg-white */
            border-top: 1px solid #e5e7eb; /* divide-y divide-gray-200 */
          }

          .clients-table td {
            padding: 1rem 1.5rem; /* px-6 py-4 */
            white-space: nowrap; /* whitespace-nowrap */
            font-size: 0.875rem; /* text-sm */
            color: #4b5563; /* text-gray-600 */
          }

          .clients-table tbody tr:hover {
            background-color: #f9fafb; /* hover:bg-gray-50 */
            transition: background-color 0.15s ease-in-out; /* transition-colors duration-150 */
          }

          .clients-table td.client-name {
            font-weight: 500; /* font-medium */
            color: #111827; /* text-gray-900 */
          }

          .status-badge {
            padding: 0.25rem 0.5rem; /* px-2 inline-flex */
            font-size: 0.75rem; /* text-xs */
            line-height: 1.25rem; /* leading-5 */
            font-weight: 600; /* font-semibold */
            border-radius: 9999px; /* rounded-full */
          }

          .status-badge.active {
            background-color: #d1fae5; /* bg-green-100 */
            color: #065f46; /* text-green-800 */
          }

          .status-badge.inactive {
            background-color: #fee2e2; /* bg-red-100 */
            color: #991b1b; /* text-red-800 */
          }

          .status-badge.lead {
            background-color: #fffbeb; /* bg-yellow-100 */
            color: #92400e; /* text-yellow-800 */
          }

          .action-buttons-group {
            display: flex;
            gap: 0.75rem; /* space-x-3 */
            justify-content: center; /* Center actions on mobile */
          }

          .action-icon-button {
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            transition: color 0.15s ease-in-out; /* transition-colors duration-150 */
          }

          .action-icon-button.view {
            color: #2563eb; /* text-blue-600 */
          }
          .action-icon-button.view:hover {
            color: #1e4ed8; /* hover:text-blue-900 */
          }

          .action-icon-button.edit {
            color: #4f46e5; /* text-indigo-600 */
          }
          .action-icon-button.edit:hover {
            color: #4338ca; /* hover:text-indigo-900 */
          }

          .action-icon-button.delete {
            color: #dc2626; /* text-red-600 */
          }
          .action-icon-button.delete:hover {
            color: #b91c1c; /* hover:text-red-900 */
          }
        `}
      </style>
      <div className="clients-header">
        <h1 className="clients-title">Client Management</h1>
        <button
          onClick={() => setCurrentPage('addClient')}
          className="add-client-button"
        >
          <PlusCircle size={20} /> Add New Client
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-bar-container">
        <div className="search-input-wrapper">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search clients by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Clients Table */}
      <div className="clients-table-section">
        {sortedClients.length === 0 ? (
          <p className="no-clients-message">No clients found. Try adding a new one!</p>
        ) : (
          <table className="clients-table">
            <thead>
              <tr>
                <th
                  onClick={() => requestSort('name')}
                >
                  <div className="sortable-header">
                    Name {getClassNamesFor('name') === 'ascending' ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </th>
                <th
                  onClick={() => requestSort('email')}
                >
                  <div className="sortable-header">
                    Email {getClassNamesFor('email') === 'ascending' ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </th>
                <th>
                  Phone
                </th>
                <th
                  onClick={() => requestSort('joinedDate')}
                >
                  <div className="sortable-header">
                    Joined Date {getClassNamesFor('joinedDate') === 'ascending' ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </th>
                <th
                  onClick={() => requestSort('status')}
                >
                  <div className="sortable-header">
                    Status {getClassNamesFor('status') === 'ascending' ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedClients.map((client) => (
                <tr key={client._id}> {/* Use client._id for the key */}
                  <td className="client-name" data-label="Name">{client.name}</td>
                  <td data-label="Email">{client.email}</td>
                  <td data-label="Phone">{client.phone}</td>
                  <td data-label="Joined Date">{client.joinedDate}</td>
                  <td data-label="Status">
                    <span className={`status-badge ${
                      client.status === 'Active' ? 'active' :
                      client.status === 'Inactive' ? 'inactive' :
                      'lead'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td data-label="Actions">
                    <div className="action-buttons-group">
                      <button
                        onClick={() => handleViewClient(client)}
                        className="action-icon-button view"
                        title="View Details"
                      >
                        <FileText size={20} />
                      </button>
                      <button
                        onClick={() => handleEditClient(client)}
                        className="action-icon-button edit"
                        title="Edit Client"
                      >
                        <Edit size={20} />
                      </button>
                      <button
                        // Pass the whole client object
                        onClick={() => handleDeleteClient(client)}
                        className="action-icon-button delete"
                        title="Delete Client"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Clients;
