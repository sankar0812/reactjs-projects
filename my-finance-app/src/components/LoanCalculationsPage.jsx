// import React, { useState, useEffect } from 'react'; // Added useEffect for console.log
// import { DollarSign, PlusCircle } from 'lucide-react';
// import { formatINR } from '../utils/currency.jsx';

// const API_BASE_URL = 'http://localhost:5000/api/clients';

// const LoanCalculationsPage = ({ clients, authToken, fetchClients, customConfirm }) => {
//   const [showRecordPaymentModal, setShowRecordPaymentModal] = useState(false);
//   const [selectedClientForPayment, setSelectedClientForPayment] = useState(null);
//   const [paymentAmount, setPaymentAmount] = useState('');
//   const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);
//   const [paymentError, setPaymentError] = useState('');

//   // Log clients data to console for debugging
//   useEffect(() => {
//     console.log("LoanCalculationsPage clients:", clients);
//     if (!clients || clients.length === 0) {
//       console.log("No clients data received or clients array is empty.");
//     }
//   }, [clients]);

//   const openRecordPaymentModal = (client) => {
//     setSelectedClientForPayment(client);
//     setPaymentAmount(''); // Reset amount for new payment
//     setPaymentDate(new Date().toISOString().split('T')[0]); // Reset date
//     setPaymentError(''); // Clear any previous errors
//     setShowRecordPaymentModal(true);
//   };

//   const closeRecordPaymentModal = () => {
//     setShowRecordPaymentModal(false);
//     setSelectedClientForPayment(null);
//   };

//   const handleRecordPayment = async () => {
//     setPaymentError('');
//     if (!paymentAmount || parseFloat(paymentAmount) <= 0) {
//       setPaymentError('Please enter a valid payment amount.');
//       return;
//     }
//     if (!selectedClientForPayment) {
//       setPaymentError('No client selected for payment.');
//       return;
//     }

//     try {
//       const response = await fetch(`${API_BASE_URL}/${selectedClientForPayment._id}/record-payment`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${authToken}`,
//         },
//         body: JSON.stringify({
//           amountPaid: parseFloat(paymentAmount),
//           paymentDate: paymentDate,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to record payment.');
//       }

//       await fetchClients(); // Re-fetch all clients to update data across the app
//       closeRecordPaymentModal();
//       customConfirm('Payment recorded successfully!');
//     } catch (error) {
//       console.error("Error recording payment:", error);
//       customConfirm(error.message || 'Error recording payment. Please try again.');
//       setPaymentError(error.message || 'Error recording payment. Please try again.');
//     }
//   };

//   return (
//     <div className="loan-calculations-container">
//       <style>
//         {`
//           .loan-calculations-container {
//             flex: 1;
//             padding: 2rem;
//             background-color: #f3f4f6;
//             min-height: 100vh;
//             border-top-left-radius: 0.5rem;
//             border-bottom-left-radius: 0.5rem;
//           }

//           @media (max-width: 767px) {
//             .loan-calculations-container {
//               padding: 1rem;
//             }
//           }

//           .page-header {
//             font-size: 2.25rem;
//             font-weight: 800;
//             color: #111827;
//             margin-bottom: 2rem;
//             padding-bottom: 1rem;
//             border-bottom: 1px solid #e5e7eb;
//           }

//           .loan-client-list {
//             display: grid;
//             grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//             gap: 1.5rem;
//           }

//           .loan-client-card {
//             background-color: #fff;
//             padding: 1.5rem;
//             border-radius: 0.75rem;
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//           }

//           .loan-client-card h3 {
//             font-size: 1.25rem;
//             font-weight: 700;
//             color: #1f2937;
//             margin-bottom: 1rem;
//           }

//           .loan-details p {
//             font-size: 0.95rem;
//             color: #4b5563;
//             margin-bottom: 0.5rem;
//             display: flex;
//             align-items: center;
//           }

//           .loan-details p svg {
//             margin-right: 0.5rem;
//             color: #2563eb;
//           }

//           .record-payment-button {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             background-color: #22c55e; /* bg-green-500 */
//             color: #fff;
//             font-weight: 700;
//             padding: 0.6rem 1rem;
//             border-radius: 0.5rem;
//             border: none;
//             cursor: pointer;
//             transition: background-color 0.2s ease-in-out;
//             margin-top: 1rem;
//           }

//           .record-payment-button:hover {
//             background-color: #16a34a; /* hover:bg-green-600 */
//           }

//           .record-payment-button svg {
//             margin-right: 0.5rem;
//           }

//           .no-clients-message {
//             text-align: center;
//             color: #6b7280;
//             padding-top: 2.5rem;
//           }

//           /* Modal Styles (copied from App.js/ClientDetail.js for consistency) */
//           .modal-overlay {
//             position: fixed;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: rgba(0, 0, 0, 0.6);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             z-index: 100;
//           }

//           .modal-content {
//             background: white;
//             padding: 2rem;
//             border-radius: 0.75rem;
//             box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//             width: 90%;
//             max-width: 500px;
//           }

//           .modal-header {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             margin-bottom: 1.5rem;
//             border-bottom: 1px solid #e5e7eb;
//             padding-bottom: 1rem;
//           }

//           .modal-title {
//             font-size: 1.5rem;
//             font-weight: 700;
//             color: #1f2937;
//           }

//           .modal-close-button {
//             background: none;
//             border: none;
//             font-size: 1.5rem;
//             cursor: pointer;
//             color: #6b7280;
//           }

//           .modal-body .form-group {
//             margin-bottom: 1rem;
//           }

//           .modal-body label {
//             display: block;
//             font-weight: 500;
//             margin-bottom: 0.5rem;
//             color: #374151;
//           }

//           .modal-body input {
//             width: 100%;
//             padding: 0.75rem;
//             border: 1px solid #d1d5db;
//             border-radius: 0.5rem;
//             box-sizing: border-box;
//           }

//           .modal-body input:focus {
//             outline: none;
//             border-color: #3b82f6;
//             box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
//           }

//           .modal-error {
//             color: #dc2626;
//             font-size: 0.875rem;
//             margin-top: 0.5rem;
//           }

//           .modal-actions {
//             margin-top: 1.5rem;
//             display: flex;
//             justify-content: flex-end;
//             gap: 1rem;
//           }

//           .modal-button {
//             padding: 0.75rem 1.5rem;
//             border-radius: 0.5rem;
//             font-weight: 600;
//             cursor: pointer;
//             transition: all 0.2s ease-in-out;
//             border: none;
//           }

//           .modal-button.cancel {
//             background-color: #d1d5db;
//             color: #374151;
//           }
//           .modal-button.cancel:hover {
//             background-color: #9ca3af;
//           }

//           .modal-button.confirm {
//             background-color: #2563eb;
//             color: #fff;
//           }
//           .modal-button.confirm:hover {
//             background-color: #1d4ed8;
//           }
//         `}
//       </style>
//       <h1 className="page-header">Manage Loan Payments</h1>

//       {/* Defensive check for clients array before mapping */}
//       {clients && clients.length > 0 ? (
//         <div className="loan-client-list">
//           {clients.map(client => (
//             // Ensure client and its loan properties exist before rendering
//             <div key={client._id} className="loan-client-card">
//               <h3>{client.name}</h3>
//               <div className="loan-details">
//                 <p><DollarSign size={16} /> Original Loan: {formatINR(client.loanAmount || 0)}</p>
//                 <p><DollarSign size={16} /> Outstanding: {formatINR(client.currentOutstandingLoanAmount || 0)}</p>
//                 <p><DollarSign size={16} /> Interest Rate: {client.interestRate || 0}%</p>
//                 <p><DollarSign size={16} /> Loan Term: {client.loanTermMonths || 0} months</p>
//                 <p><DollarSign size={16} /> Payments Made: {client.paymentHistory ? client.paymentHistory.length : 0}</p>
//               </div>
//               <button
//                 onClick={() => openRecordPaymentModal(client)}
//                 className="record-payment-button"
//                 disabled={client.currentOutstandingLoanAmount <= 0} // Disable if loan is paid
//               >
//                 <PlusCircle size={20} /> Record Payment
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="no-clients-message">No clients with loan details found.</p>
//       )}

//       {/* Record Payment Modal */}
//       {showRecordPaymentModal && selectedClientForPayment && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3 className="modal-title">Record Payment for {selectedClientForPayment.name}</h3>
//               <button className="modal-close-button" onClick={closeRecordPaymentModal}>
//                 &times;
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="form-group">
//                 <label htmlFor="paymentAmount">Amount Paid (INR)</label>
//                 <input
//                   type="number"
//                   id="paymentAmount"
//                   value={paymentAmount}
//                   onChange={(e) => setPaymentAmount(e.target.value)}
//                   placeholder="e.g., 5000"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="paymentDate">Payment Date</label>
//                 <input
//                   type="date"
//                   id="paymentDate"
//                   value={paymentDate}
//                   onChange={(e) => setPaymentDate(e.target.value)}
//                   required
//                 />
//               </div>
//               {paymentError && <p className="modal-error">{paymentError}</p>}
//             </div>
//             <div className="modal-actions">
//               <button className="modal-button cancel" onClick={closeRecordPaymentModal}>
//                 Cancel
//               </button>
//               <button className="modal-button confirm" onClick={handleRecordPayment}>
//                 Record Payment
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoanCalculationsPage;



import React, { useState, useEffect } from 'react';
import { DollarSign, PlusCircle } from 'lucide-react';
import { formatINR } from '../utils/currency.jsx';

const API_BASE_URL = 'http://localhost:5000/api/clients';

const LoanCalculationsPage = ({ clients, authToken, fetchClients, customConfirm }) => {
  const [showRecordPaymentModal, setShowRecordPaymentModal] = useState(false);
  const [selectedClientForPayment, setSelectedClientForPayment] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);
  const [paymentError, setPaymentError] = useState('');

  // Log clients data to console for debugging
  useEffect(() => {
    console.log("LoanCalculationsPage clients:", clients);
    if (!clients || clients.length === 0) {
      console.log("No clients data received or clients array is empty.");
    }
  }, [clients]);

  const openRecordPaymentModal = (client) => {
    setSelectedClientForPayment(client);
    setPaymentAmount(''); // Reset amount for new payment
    setPaymentDate(new Date().toISOString().split('T')[0]); // Reset date
    setPaymentError(''); // Clear any previous errors
    setShowRecordPaymentModal(true);
  };

  const closeRecordPaymentModal = () => {
    setShowRecordPaymentModal(false);
    setSelectedClientForPayment(null);
  };

  const handleRecordPayment = async () => {
    setPaymentError('');
    if (!paymentAmount || parseFloat(paymentAmount) <= 0) {
      setPaymentError('Please enter a valid payment amount.');
      return;
    }
    if (!selectedClientForPayment) {
      setPaymentError('No client selected for payment.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/${selectedClientForPayment._id}/record-payment`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          amountPaid: parseFloat(paymentAmount),
          paymentDate: paymentDate,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to record payment.');
      }

      await fetchClients(); // Re-fetch all clients to update data across the app
      closeRecordPaymentModal();
      customConfirm('Payment recorded successfully!');
    } catch (error) {
      console.error("Error recording payment:", error);
      customConfirm(error.message || 'Error recording payment. Please try again.');
      setPaymentError(error.message || 'Error recording payment. Please try again.');
    }
  };

  return (
    <div className="loan-calculations-container">
      <style>
        {`
          .loan-calculations-container {
            flex: 1;
            padding: 2rem;
            background-color: #f3f4f6;
            min-height: 100vh;
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
            /* Allow horizontal expansion if content overflows */
            overflow-x: auto;
          }

          @media (max-width: 767px) {
            .loan-calculations-container {
              padding: 1rem;
            }
          }

          .page-header {
            font-size: 2.25rem;
            font-weight: 800;
            color: #111827;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #e5e7eb;
          }

          .loan-client-list {
            display: flex; /* Changed to flex */
            flex-wrap: nowrap; /* Prevent wrapping to new lines */
            gap: 1.5rem;
            padding-bottom: 1rem; /* Add padding for scrollbar */
            overflow-x: auto; /* Enable horizontal scrolling */
            align-items: flex-start; /* Align cards to the top */
          }

          .loan-client-card {
            background-color: #fff;
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            flex-shrink: 0; /* Prevent cards from shrinking */
            width: 300px; /* Fixed width for each card */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .loan-client-card h3 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 1rem;
          }

          .loan-details p {
            font-size: 0.95rem;
            color: #4b5563;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
          }

          .loan-details p svg {
            margin-right: 0.5rem;
            color: #2563eb;
          }

          .record-payment-button {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #22c55e; /* bg-green-500 */
            color: #fff;
            font-weight: 700;
            padding: 0.6rem 1rem;
            border-radius: 0.5rem;
            border: none;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
            margin-top: 1rem;
          }

          .record-payment-button:hover {
            background-color: #16a34a; /* hover:bg-green-600 */
          }

          .record-payment-button svg {
            margin-right: 0.5rem;
          }

          .no-clients-message {
            text-align: center;
            color: #6b7280;
            padding-top: 2.5rem;
          }

          /* Modal Styles (copied from App.js/ClientDetail.js for consistency) */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
          }

          .modal-content {
            background: white;
            padding: 2rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            width: 90%;
            max-width: 500px;
          }

          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 1rem;
          }

          .modal-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1f2937;
          }

          .modal-close-button {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #6b7280;
          }

          .modal-body .form-group {
            margin-bottom: 1rem;
          }

          .modal-body label {
            display: block;
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: #374151;
          }

          .modal-body input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            box-sizing: border-box;
          }

          .modal-body input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
          }

          .modal-error {
            color: #dc2626;
            font-size: 0.875rem;
            margin-top: 0.5rem;
          }

          .modal-actions {
            margin-top: 1.5rem;
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
          }

          .modal-button {
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            border: none;
          }

          .modal-button.cancel {
            background-color: #d1d5db;
            color: #374151;
          }
          .modal-button.cancel:hover {
            background-color: #9ca3af;
          }

          .modal-button.confirm {
            background-color: #2563eb;
            color: #fff;
          }
          .modal-button.confirm:hover {
            background-color: #1d4ed8;
          }
        `}
      </style>
      <h1 className="page-header">Manage Loan Payments</h1>

      {/* Defensive check for clients array before mapping */}
      {clients && clients.length > 0 ? (
        <div className="loan-client-list">
          {clients.map(client => (
            // Ensure client and its loan properties exist before rendering
            <div key={client._id} className="loan-client-card">
              <h3>{client.name}</h3>
              <div className="loan-details">
                <p><DollarSign size={16} /> Original Loan: {formatINR(client.loanAmount || 0)}</p>
                <p><DollarSign size={16} /> Outstanding: {formatINR(client.currentOutstandingLoanAmount || 0)}</p>
                <p><DollarSign size={16} /> Interest Rate: {client.interestRate || 0}%</p>
                <p><DollarSign size={16} /> Loan Term: {client.loanTermMonths || 0} months</p>
                <p><DollarSign size={16} /> Payments Made: {client.paymentHistory ? client.paymentHistory.length : 0}</p>
              </div>
              <button
                onClick={() => openRecordPaymentModal(client)}
                className="record-payment-button"
                disabled={client.currentOutstandingLoanAmount <= 0} // Disable if loan is paid
              >
                <PlusCircle size={20} /> Record Payment
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-clients-message">No clients with loan details found.</p>
      )}

      {/* Record Payment Modal */}
      {showRecordPaymentModal && selectedClientForPayment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Record Payment for {selectedClientForPayment.name}</h3>
              <button className="modal-close-button" onClick={closeRecordPaymentModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="paymentAmount">Amount Paid (INR)</label>
                <input
                  type="number"
                  id="paymentAmount"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  placeholder="e.g., 5000"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="paymentDate">Payment Date</label>
                <input
                  type="date"
                  id="paymentDate"
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                  required
                />
              </div>
              {paymentError && <p className="modal-error">{paymentError}</p>}
            </div>
            <div className="modal-actions">
              <button className="modal-button cancel" onClick={closeRecordPaymentModal}>
                Cancel
              </button>
              <button className="modal-button confirm" onClick={handleRecordPayment}>
                Record Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanCalculationsPage;
