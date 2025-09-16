// import React, { useState } from 'react';
// import { User, Mail, Phone, MapPin, Calendar, Briefcase, DollarSign, FileText, Percent, Clock } from 'lucide-react';
// import { generateId } from '../utils/helpers';

// // Add/Edit Client Form Component
// const AddClientForm = ({ clientToEdit, onSave, onCancel }) => {
//   const [client, setClient] = useState(
//     clientToEdit || {
//       id: '',
//       name: '',
//       email: '',
//       phone: '',
//       address: '',
//       joinedDate: '',
//       status: 'Active',
//       revenue: 0,
//       transactions: 0,
//       loanAmount: 0,
//       interestRate: 0,
//       loanTermMonths: 0,
//     }
//   );

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     setClient((prev) => ({
//       ...prev,
//       [name]: type === 'number' ? parseFloat(value) : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({ ...client, id: client.id || generateId() });
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl transform transition-all scale-100 opacity-100">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">{clientToEdit ? 'Edit Client' : 'Add New Client'}</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
//               <User className="inline-block mr-1" size={16} /> Client Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={client.name}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
//               <Mail className="inline-block mr-1" size={16} /> Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={client.email}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
//               <Phone className="inline-block mr-1" size={16} /> Phone
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={client.phone}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//           </div>
//           <div>
//             <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">
//               <MapPin className="inline-block mr-1" size={16} /> Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={client.address}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//           </div>
//           <div>
//             <label htmlFor="joinedDate" className="block text-gray-700 text-sm font-medium mb-2">
//               <Calendar className="inline-block mr-1" size={16} /> Joined Date
//             </label>
//             <input
//               type="date"
//               id="joinedDate"
//               name="joinedDate"
//               value={client.joinedDate}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//           </div>
//           <div>
//             <label htmlFor="status" className="block text-gray-700 text-sm font-medium mb-2">
//               <Briefcase className="inline-block mr-1" size={16} /> Status
//             </label>
//             <select
//               id="status"
//               name="status"
//               value={client.status}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             >
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//               <option value="Lead">Lead</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="revenue" className="block text-gray-700 text-sm font-medium mb-2">
//               <DollarSign className="inline-block mr-1" size={16} /> Revenue
//             </label>
//             <input
//               type="number"
//               id="revenue"
//               name="revenue"
//               value={client.revenue}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//           </div>
//           <div>
//             <label htmlFor="transactions" className="block text-gray-700 text-sm font-medium mb-2">
//               <FileText className="inline-block mr-1" size={16} /> Transactions
//             </label>
//             <input
//               type="number"
//               id="transactions"
//               name="transactions"
//               value={client.transactions}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//           </div>
//           {/* New fields for loan calculation */}
//           <div>
//             <label htmlFor="loanAmount" className="block text-gray-700 text-sm font-medium mb-2">
//               <DollarSign className="inline-block mr-1" size={16} /> Loan Amount
//             </label>
//             <input
//               type="number"
//               id="loanAmount"
//               name="loanAmount"
//               value={client.loanAmount}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//           </div>
//           <div>
//             <label htmlFor="interestRate" className="block text-gray-700 text-sm font-medium mb-2">
//               <Percent className="inline-block mr-1" size={16} /> Interest Rate (%)
//             </label>
//             <input
//               type="number"
//               id="interestRate"
//               name="interestRate"
//               value={client.interestRate}
//               onChange={handleChange}
//               step="0.01"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//           </div>
//           <div>
//             <label htmlFor="loanTermMonths" className="block text-gray-700 text-sm font-medium mb-2">
//               <Clock className="inline-block mr-1" size={16} /> Loan Term (Months)
//             </label>
//             <input
//               type="number"
//               id="loanTermMonths"
//               name="loanTermMonths"
//               value={client.loanTermMonths}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//           </div>

//           <div className="md:col-span-2 flex justify-end space-x-4 mt-6">
//             <button
//               type="button"
//               onClick={onCancel}
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
//             >
//               Save Client
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddClientForm;


// import React, { useState } from 'react';
// import { User, Mail, Phone, MapPin, Calendar, Briefcase, DollarSign, FileText, Percent, Clock } from 'lucide-react';
// import { generateId } from '../utils/helpers.jsx'; // Added .js extension

// // Add/Edit Client Form Component
// const AddClientForm = ({ clientToEdit, onSave, onCancel }) => {
//   const [client, setClient] = useState(
//     clientToEdit || {
//       id: '',
//       name: '',
//       email: '',
//       phone: '',
//       address: '',
//       joinedDate: '',
//       status: 'Active',
//       revenue: 0,
//       transactions: 0,
//       loanAmount: 0,
//       interestRate: 0,
//       loanTermMonths: 0,
//     }
//   );

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     setClient((prev) => ({
//       ...prev,
//       [name]: type === 'number' ? parseFloat(value) : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({ ...client, id: client.id || generateId() });
//   };

//   return (
//     <div className="add-client-form-overlay">
//       <style>
//         {`
//           .add-client-form-overlay {
//             position: fixed;
//             inset: 0; /* inset-0 */
//             background-color: rgba(0, 0, 0, 0.5); /* bg-black bg-opacity-50 */
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             padding: 1rem; /* p-4 */
//             z-index: 50; /* z-50 */
//           }

//           .add-client-form-card {
//             background-color: #fff; /* bg-white */
//             padding: 2rem; /* p-8 */
//             border-radius: 0.75rem; /* rounded-xl */
//             box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* shadow-2xl */
//             width: 100%;
//             max-width: 42rem; /* max-w-2xl */
//             transform: scale(1); /* scale-100 */
//             opacity: 1; /* opacity-100 */
//             transition: all 0.3s ease-in-out; /* transform transition-all */
//             box-sizing: border-box; /* Ensure padding is included in width */
//           }

//           @media (max-width: 767px) {
//             .add-client-form-card {
//               padding: 1.5rem; /* Adjust padding for smaller screens */
//               max-width: 95%; /* Make it take more width on small screens */
//             }
//           }

//           .form-title {
//             font-size: 1.875rem; /* text-3xl */
//             font-weight: 700; /* font-bold */
//             margin-bottom: 1.5rem; /* mb-6 */
//             color: #1f2937; /* text-gray-800 */
//           }

//           .form-grid {
//             display: grid;
//             grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 for mobile */
//             gap: 1.5rem; /* gap-6 */
//           }

//           @media (min-width: 768px) { /* md: */
//             .form-grid {
//               grid-template-columns: repeat(2, minmax(0, 1fr)); /* md:grid-cols-2 */
//             }
//           }

//           .form-group label {
//             display: block;
//             color: #374151; /* text-gray-700 */
//             font-size: 0.875rem; /* text-sm */
//             font-weight: 500; /* font-medium */
//             margin-bottom: 0.5rem; /* mb-2 */
//           }

//           .form-group label svg {
//             display: inline-block;
//             margin-right: 0.25rem; /* mr-1 */
//           }

//           .form-group input,
//           .form-group select {
//             width: 100%;
//             padding: 0.75rem; /* p-3 */
//             border: 1px solid #d1d5db; /* border border-gray-300 */
//             border-radius: 0.5rem; /* rounded-lg */
//             transition: all 0.2s ease-in-out; /* transition-all */
//             box-sizing: border-box; /* Ensure padding is included in width */
//           }

//           .form-group input:focus,
//           .form-group select:focus {
//             outline: none;
//             border-color: #3b82f6; /* focus:border-blue-500 */
//             box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25); /* focus:ring-2 focus:ring-blue-500 */
//           }

//           .form-actions {
//             grid-column: span 1; /* Default to single column span */
//             display: flex;
//             flex-direction: column; /* Stack buttons on small screens */
//             justify-content: flex-end; /* justify-end */
//             gap: 1rem; /* space-x-4 */
//             margin-top: 1.5rem; /* mt-6 */
//           }

//           @media (min-width: 768px) { /* md: */
//             .form-actions {
//               grid-column: span 2; /* Span two columns on medium screens and up */
//               flex-direction: row; /* Arrange buttons in a row */
//             }
//           }

//           .form-button {
//             font-weight: 700; /* font-bold */
//             padding: 0.75rem 1.5rem; /* py-3 px-6 */
//             border-radius: 0.5rem; /* rounded-lg */
//             transition: all 0.2s ease-in-out; /* transition-colors duration-200 */
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
//             border: none;
//             cursor: pointer;
//             width: 100%; /* Make buttons full width on small screens */
//           }

//           @media (min-width: 768px) {
//             .form-button {
//               width: auto; /* Revert to auto width on larger screens */
//             }
//           }

//           .cancel-button {
//             background-color: #d1d5db; /* bg-gray-300 */
//             color: #1f2937; /* text-gray-800 */
//           }

//           .cancel-button:hover {
//             background-color: #9ca3af; /* hover:bg-gray-400 */
//           }

//           .save-button {
//             background-color: #2563eb; /* bg-blue-600 */
//             color: #fff; /* text-white */
//           }

//           .save-button:hover {
//             background-color: #1d4ed8; /* hover:bg-blue-700 */
//           }
//         `}
//       </style>
//       <div className="add-client-form-card">
//         <h2 className="form-title">{clientToEdit ? 'Edit Client' : 'Add New Client'}</h2>
//         <form onSubmit={handleSubmit} className="form-grid">
//           <div className="form-group">
//             <label htmlFor="name">
//               <User size={16} /> Client Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={client.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">
//               <Mail size={16} /> Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={client.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">
//               <Phone size={16} /> Phone
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={client.phone}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="address">
//               <MapPin size={16} /> Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={client.address}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="joinedDate">
//               <Calendar size={16} /> Joined Date
//             </label>
//             <input
//               type="date"
//               id="joinedDate"
//               name="joinedDate"
//               value={client.joinedDate}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="status">
//               <Briefcase size={16} /> Status
//             </label>
//             <select
//               id="status"
//               name="status"
//               value={client.status}
//               onChange={handleChange}
//             >
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//               <option value="Lead">Lead</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="revenue">
//               <DollarSign size={16} /> Revenue
//             </label>
//             <input
//               type="number"
//               id="revenue"
//               name="revenue"
//               value={client.revenue}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="transactions">
//               <FileText size={16} /> Transactions
//             </label>
//             <input
//               type="number"
//               id="transactions"
//               name="transactions"
//               value={client.transactions}
//               onChange={handleChange}
//             />
//           </div>
//           {/* New fields for loan calculation */}
//           <div className="form-group">
//             <label htmlFor="loanAmount">
//               <DollarSign size={16} /> Loan Amount
//             </label>
//             <input
//               type="number"
//               id="loanAmount"
//               name="loanAmount"
//               value={client.loanAmount}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="interestRate">
//               <Percent size={16} /> Interest Rate (%)
//             </label>
//             <input
//               type="number"
//               id="interestRate"
//               name="interestRate"
//               value={client.interestRate}
//               onChange={handleChange}
//               step="0.01"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="loanTermMonths">
//               <Clock size={16} /> Loan Term (Months)
//             </label>
//             <input
//               type="number"
//               id="loanTermMonths"
//               name="loanTermMonths"
//               value={client.loanTermMonths}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-actions">
//             <button
//               type="button"
//               onClick={onCancel}
//               className="form-button cancel-button"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="form-button save-button"
//             >
//               Save Client
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddClientForm;


import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Briefcase, DollarSign, FileText, Percent, Clock } from 'lucide-react';
import { generateId } from '../utils/helpers.jsx'; // Added .js extension

// Add/Edit Client Form Component
const AddClientForm = ({ clientToEdit, onSave, onCancel }) => {
  const [client, setClient] = useState(
    clientToEdit || {
      id: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      joinedDate: '',
      status: 'Active',
      revenue: 0,
      transactions: 0,
      loanAmount: 0,
      interestRate: 0,
      loanTermMonths: 0,
    }
  );

  // Use useEffect to set the client state when clientToEdit prop changes
  // This ensures the form is correctly populated when editing an existing client.
  useEffect(() => {
    if (clientToEdit) {
      setClient(clientToEdit);
    }
  }, [clientToEdit]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    let newValue = type === 'number' ? parseFloat(value) : value;

    setClient((prev) => {
      const updatedClient = { ...prev, [name]: newValue };

      // Automatic revenue calculation based on loanAmount and interestRate
      // This will calculate the annual interest amount as revenue.
      const currentLoanAmount = name === 'loanAmount' ? (parseFloat(newValue) || 0) : (prev.loanAmount || 0);
      const currentInterestRate = name === 'interestRate' ? (parseFloat(newValue) || 0) : (prev.interestRate || 0);

      if (currentLoanAmount > 0 && currentInterestRate > 0) {
        updatedClient.revenue = parseFloat(((currentLoanAmount * currentInterestRate) / 100).toFixed(2));
      } else {
        updatedClient.revenue = 0; // Reset revenue if loan or interest rate is zero/invalid
      }

      return updatedClient;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...client, id: client.id || generateId() });
  };

  return (
    <div className="add-client-form-overlay">
      <style>
        {`
          .add-client-form-overlay {
            position: fixed;
            inset: 0; /* inset-0 */
            background-color: rgba(0, 0, 0, 0.5); /* bg-black bg-opacity-50 */
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem; /* p-4 */
            z-index: 50; /* z-50 */
          }

          .add-client-form-card {
            background-color: #fff; /* bg-white */
            padding: 2rem; /* p-8 */
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* shadow-2xl */
            width: 100%;
            max-width: 42rem; /* max-w-2xl */
            transform: scale(1); /* scale-100 */
            opacity: 1; /* opacity-100 */
            transition: all 0.3s ease-in-out; /* transform transition-all */
            box-sizing: border-box; /* Ensure padding is included in width */
          }

          @media (max-width: 767px) {
            .add-client-form-card {
              padding: 1.5rem; /* Adjust padding for smaller screens */
              max-width: 95%; /* Make it take more width on small screens */
            }
          }

          .form-title {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 700; /* font-bold */
            margin-bottom: 1.5rem; /* mb-6 */
            color: #1f2937; /* text-gray-800 */
          }

          .form-grid {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 for mobile */
            gap: 1.5rem; /* gap-6 */
          }

          @media (min-width: 768px) { /* md: */
            .form-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)); /* md:grid-cols-2 */
            }
          }

          .form-group label {
            display: block;
            color: #374151; /* text-gray-700 */
            font-size: 0.875rem; /* text-sm */
            font-weight: 500; /* font-medium */
            margin-bottom: 0.5rem; /* mb-2 */
          }

          .form-group label svg {
            display: inline-block;
            margin-right: 0.25rem; /* mr-1 */
          }

          .form-group input,
          .form-group select {
            width: 100%;
            padding: 0.75rem; /* p-3 */
            border: 1px solid #d1d5db; /* border border-gray-300 */
            border-radius: 0.5rem; /* rounded-lg */
            transition: all 0.2s ease-in-out; /* transition-all */
            box-sizing: border-box; /* Ensure padding is included in width */
          }

          .form-group input:focus,
          .form-group select:focus {
            outline: none;
            border-color: #3b82f6; /* focus:border-blue-500 */
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25); /* focus:ring-2 focus:ring-blue-500 */
          }

          .form-actions {
            grid-column: span 1; /* Default to single column span */
            display: flex;
            flex-direction: column; /* Stack buttons on small screens */
            justify-content: flex-end; /* justify-end */
            gap: 1rem; /* space-x-4 */
            margin-top: 1.5rem; /* mt-6 */
          }

          @media (min-width: 768px) { /* md: */
            .form-actions {
              grid-column: span 2; /* Span two columns on medium screens and up */
              flex-direction: row; /* Arrange buttons in a row */
            }
          }

          .form-button {
            font-weight: 700; /* font-bold */
            padding: 0.75rem 1.5rem; /* py-3 px-6 */
            border-radius: 0.5rem; /* rounded-lg */
            transition: all 0.2s ease-in-out; /* transition-colors duration-200 */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            border: none;
            cursor: pointer;
            width: 100%; /* Make buttons full width on small screens */
          }

          @media (min-width: 768px) {
            .form-button {
              width: auto; /* Revert to auto width on larger screens */
            }
          }

          .cancel-button {
            background-color: #d1d5db; /* bg-gray-300 */
            color: #1f2937; /* text-gray-800 */
          }

          .cancel-button:hover {
            background-color: #9ca3af; /* hover:bg-gray-400 */
          }

          .save-button {
            background-color: #2563eb; /* bg-blue-600 */
            color: #fff; /* text-white */
          }

          .save-button:hover {
            background-color: #1d4ed8; /* hover:bg-blue-700 */
          }
        `}
      </style>
      <div className="add-client-form-card">
        <h2 className="form-title">{clientToEdit ? 'Edit Client' : 'Add New Client'}</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label htmlFor="name">
              <User size={16} /> Client Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={client.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <Mail size={16} /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={client.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              <Phone size={16} /> Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={client.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">
              <MapPin size={16} /> Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={client.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="joinedDate">
              <Calendar size={16} /> Joined Date
            </label>
            <input
              type="date"
              id="joinedDate"
              name="joinedDate"
              value={client.joinedDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">
              <Briefcase size={16} /> Status
            </label>
            <select
              id="status"
              name="status"
              value={client.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Lead">Lead</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="revenue">
              <DollarSign size={16} /> Revenue
            </label>
            <input
              type="number"
              id="revenue"
              name="revenue"
              value={client.revenue}
              onChange={handleChange}
              // The revenue field is now automatically calculated, but still visible/editable if needed
            />
          </div>
          <div className="form-group">
            <label htmlFor="transactions">
              <FileText size={16} /> Transactions
            </label>
            <input
              type="number"
              id="transactions"
              name="transactions"
              value={client.transactions}
              onChange={handleChange}
            />
          </div>
          {/* New fields for loan calculation */}
          <div className="form-group">
            <label htmlFor="loanAmount">
              <DollarSign size={16} /> Loan Amount
            </label>
            <input
              type="number"
              id="loanAmount"
              name="loanAmount"
              value={client.loanAmount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="interestRate">
              <Percent size={16} /> Interest Rate (%)
            </label>
            <input
              type="number"
              id="interestRate"
              name="interestRate"
              value={client.interestRate}
              onChange={handleChange}
              step="0.01"
            />
          </div>
          <div className="form-group">
            <label htmlFor="loanTermMonths">
              <Clock size={16} /> Loan Term (Months)
            </label>
            <input
              type="number"
              id="loanTermMonths"
              name="loanTermMonths"
              value={client.loanTermMonths}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={onCancel}
              className="form-button cancel-button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="form-button save-button"
            >
              Save Client
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AddClientForm;
