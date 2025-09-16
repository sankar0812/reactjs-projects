// import React, { useState } from 'react';
// import { User, Mail, Phone, MapPin, Calendar, Briefcase, DollarSign, FileText, Percent, Clock, Calculator } from 'lucide-react';
// import { formatINR } from '../utils/currency';
// import { calculateLoanPayment } from '../utils/loanCalculations';
// import LoanAmortization from './LoanAmortization';

// // Client Detail Component
// const ClientDetail = ({ client, onBack, onEdit, onDelete }) => {
//   const [showAmortization, setShowAmortization] = useState(false);

//   if (!client) {
//     return (
//       <div className="flex-1 p-8 bg-gray-100 min-h-screen rounded-l-lg">
//         <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Client Details</h1>
//         <p className="text-gray-600">Client not found.</p>
//         <button
//           onClick={onBack}
//           className="mt-6 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
//         >
//           Back to Clients
//         </button>
//       </div>
//     );
//   }

//   const { monthlyPayment, totalInterest, totalAmount } = calculateLoanPayment(
//     client.loanAmount,
//     client.interestRate,
//     client.loanTermMonths
//   );

//   return (
//     <div className="flex-1 p-8 bg-gray-100 min-h-screen rounded-l-lg">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-extrabold text-gray-900">Client Details: {client.name}</h1>
//         <div className="flex space-x-4">
//           <button
//             onClick={() => onEdit(client)}
//             className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
//           >
//             <Edit className="mr-2" size={20} /> Edit
//           </button>
//           <button
//             onClick={() => onDelete(client.id)}
//             className="flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
//           >
//             <Trash2 className="mr-2" size={20} /> Delete
//           </button>
//         </div>
//       </div>

//       <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">General Information</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
//           <p className="flex items-center text-gray-700"><User className="mr-3 text-blue-500" size={20} /> <span className="font-semibold">Name:</span> {client.name}</p>
//           <p className="flex items-center text-gray-700"><Mail className="mr-3 text-blue-500" size={20} /> <span className="font-semibold">Email:</span> {client.email}</p>
//           <p className="flex items-center text-gray-700"><Phone className="mr-3 text-blue-500" size={20} /> <span className="font-semibold">Phone:</span> {client.phone}</p>
//           <p className="flex items-center text-gray-700"><MapPin className="mr-3 text-blue-500" size={20} /> <span className="font-semibold">Address:</span> {client.address}</p>
//           <p className="flex items-center text-gray-700"><Calendar className="mr-3 text-blue-500" size={20} /> <span className="font-semibold">Joined Date:</span> {client.joinedDate}</p>
//           <p className="flex items-center text-gray-700"><Briefcase className="mr-3 text-blue-500" size={20} /> <span className="font-semibold">Status:</span> {client.status}</p>
//           <p className="flex items-center text-gray-700"><DollarSign className="mr-3 text-blue-500" size={20} /> <span className="font-semibold">Total Revenue:</span> {formatINR(client.revenue)}</p>
//           <p className="flex items-center text-gray-700"><FileText className="mr-3 text-blue-500" size={20} /> <span className="font-semibold">Total Transactions:</span> {client.transactions}</p>
//         </div>
//       </div>

//       {/* Loan Calculation Section */}
//       <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Loan Details & Calculation</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
//           <p className="flex items-center text-gray-700"><DollarSign className="mr-3 text-green-500" size={20} /> <span className="font-semibold">Loan Amount:</span> {formatINR(client.loanAmount)}</p>
//           <p className="flex items-center text-gray-700"><Percent className="mr-3 text-green-500" size={20} /> <span className="font-semibold">Interest Rate (Annual):</span> {client.interestRate}%</p>
//           <p className="flex items-center text-gray-700"><Clock className="mr-3 text-green-500" size={20} /> <span className="font-semibold">Loan Term (Months):</span> {client.loanTermMonths}</p>
//         </div>
//         {(client.loanAmount > 0 && client.loanTermMonths > 0 && client.interestRate >= 0) ? (
//           <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
//             <h3 className="text-xl font-semibold mb-4 text-blue-800">Calculated Loan Payments</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
//               <p className="flex items-center text-blue-700"><DollarSign className="mr-3" size={20} /> <span className="font-semibold">Monthly Payment:</span> {formatINR(monthlyPayment)}</p>
//               <p className="flex items-center text-blue-700"><DollarSign className="mr-3" size={20} /> <span className="font-semibold">Total Interest Paid:</span> {formatINR(totalInterest)}</p>
//               <p className="flex items-center text-blue-700"><DollarSign className="mr-3" size={20} /> <span className="font-semibold">Total Amount Paid:</span> {formatINR(totalAmount)}</p>
//             </div>
//             <div className="mt-6 text-center">
//               <button
//                 onClick={() => setShowAmortization(!showAmortization)}
//                 className="flex items-center justify-center mx-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
//               >
//                 <Calculator className="mr-2" size={20} />
//                 {showAmortization ? 'Hide Amortization Schedule' : 'View Amortization Schedule'}
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="mt-8 text-gray-600 italic">Enter Loan Amount, Interest Rate, and Loan Term to see calculations.</p>
//         )}
//       </div>

//       {showAmortization && (
//         <LoanAmortization
//           loanAmount={client.loanAmount}
//           annualInterestRate={client.interestRate}
//           loanTermMonths={client.loanTermMonths}
//         />
//       )}

//       <button
//         onClick={onBack}
//         className="mt-6 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
//       >
//         Back to Clients
//       </button>
//     </div>
//   );
// };

// export default ClientDetail;


import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Briefcase, DollarSign, FileText, Percent, Clock, Calculator, Edit, Trash2 } from 'lucide-react';
import { formatINR } from '../utils/currency.jsx';
import { calculateLoanPayment } from '../utils/loanCalculations.jsx';
import LoanAmortization from './LoanAmortization.jsx';

// Client Detail Component
const ClientDetail = ({ client, onBack, onEdit, onDelete }) => {
  const [showAmortization, setShowAmortization] = useState(false);
  // State for loan scenario analysis
  const [scenarioLoanAmount, setScenarioLoanAmount] = useState(client.loanAmount);
  const [scenarioInterestRate, setScenarioInterestRate] = useState(client.interestRate);
  const [scenarioLoanTermMonths, setScenarioLoanTermMonths] = useState(client.loanTermMonths);

  if (!client) {
    return (
      <div className="client-detail-container">
        <h1 className="client-detail-title">Client Details</h1>
        <p className="client-detail-not-found">Client not found.</p>
        <button
          onClick={onBack}
          className="back-button"
        >
          Back to Clients
        </button>
      </div>
    );
  }

  const { monthlyPayment, totalInterest, totalAmount } = calculateLoanPayment(
    client.loanAmount,
    client.interestRate,
    client.loanTermMonths
  );

  const {
    monthlyPayment: scenarioMonthlyPayment,
    totalInterest: scenarioTotalInterest,
    totalAmount: scenarioTotalAmount,
  } = calculateLoanPayment(
    scenarioLoanAmount,
    scenarioInterestRate,
    scenarioLoanTermMonths
  );

  const resetScenario = () => {
    setScenarioLoanAmount(client.loanAmount);
    setScenarioInterestRate(client.interestRate);
    setScenarioLoanTermMonths(client.loanTermMonths);
  };

  return (
    <div className="client-detail-container">
      <style>
        {`
          .client-detail-container {
            flex: 1;
            padding: 2rem;
            background-color: #f3f4f6; /* bg-gray-100 */
            min-height: 100vh;
            border-top-left-radius: 0.5rem; /* rounded-l-lg */
            border-bottom-left-radius: 0.5rem; /* rounded-l-lg */
          }

          .client-detail-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem; /* mb-8 */
          }

          .client-detail-title {
            font-size: 2.25rem; /* text-4xl */
            font-weight: 800; /* font-extrabold */
            color: #111827; /* text-gray-900 */
          }

          .client-actions {
            display: flex;
            gap: 1rem; /* space-x-4 */
          }

          .action-button {
            display: flex;
            align-items: center;
            font-weight: 700; /* font-bold */
            padding: 0.75rem 1.5rem; /* py-3 px-6 */
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            transition: all 0.3s ease-in-out; /* transition-all */
            cursor: pointer;
            border: none;
          }

          .action-button:hover {
            transform: scale(1.05); /* hover:scale-105 */
          }

          .action-button svg {
            margin-right: 0.5rem; /* mr-2 */
          }

          .edit-button {
            background-color: #f59e0b; /* bg-yellow-500 */
            color: #fff; /* text-white */
          }
          .edit-button:hover {
            background-color: #d97706; /* hover:bg-yellow-600 */
          }

          .delete-button {
            background-color: #dc2626; /* bg-red-600 */
            color: #fff; /* text-white */
          }
          .delete-button:hover {
            background-color: #b91c1c; /* hover:bg-red-700 */
          }

          .info-section {
            background-color: #fff; /* bg-white */
            padding: 2rem; /* p-8 */
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            margin-bottom: 2rem; /* mb-8 */
          }

          .section-title {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 700; /* font-bold */
            margin-bottom: 1.5rem; /* mb-6 */
            color: #1f2937; /* text-gray-800 */
            border-bottom: 1px solid #e5e7eb; /* border-b border-gray-200 */
            padding-bottom: 1rem; /* pb-4 */
          }

          .info-grid {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
            gap: 1.5rem; /* gap-6 */
            font-size: 1.125rem; /* text-lg */
          }

          @media (min-width: 768px) { /* md: */
            .info-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)); /* md:grid-cols-2 */
            }
            .scenario-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)); /* md:grid-cols-3 */
            }
          }

          .info-item {
            display: flex;
            align-items: center;
            color: #374151; /* text-gray-700 */
          }

          .info-item svg {
            margin-right: 0.75rem; /* mr-3 */
          }

          .info-item .label {
            font-weight: 600; /* font-semibold */
          }

          .text-blue-500 { color: #3b82f6; }
          .text-green-500 { color: #22c55e; }

          .calculation-box {
            margin-top: 2rem; /* mt-8 */
            padding: 1.5rem; /* p-6 */
            background-color: #eff6ff; /* bg-blue-50 */
            border-radius: 0.5rem; /* rounded-lg */
            border: 1px solid #bfdbfe; /* border border-blue-200 */
          }

          .calculation-title {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600; /* font-semibold */
            margin-bottom: 1rem; /* mb-4 */
            color: #1e40af; /* text-blue-800 */
          }

          .calculation-grid {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
            gap: 1rem; /* gap-4 */
            font-size: 1.125rem; /* text-lg */
          }

          @media (min-width: 768px) { /* md: */
            .calculation-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)); /* md:grid-cols-3 */
            }
          }

          .calculation-item {
            display: flex;
            align-items: center;
            color: #1d4ed8; /* text-blue-700 */
          }

          .calculation-item svg {
            margin-right: 0.75rem; /* mr-3 */
          }

          .calculation-item .label {
            font-weight: 600; /* font-semibold */
          }

          .button-group-center {
            margin-top: 1.5rem; /* mt-6 */
            text-align: center; /* text-center */
          }

          .purple-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-left: auto; /* mx-auto */
            margin-right: auto; /* mx-auto */
            background-color: #9333ea; /* bg-purple-600 */
            color: #fff; /* text-white */
            font-weight: 700; /* font-bold */
            padding: 0.75rem 1.5rem; /* py-3 px-6 */
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            transition: all 0.3s ease-in-out; /* transition-all */
            cursor: pointer;
            border: none;
          }

          .purple-button:hover {
            background-color: #7e22ce; /* hover:bg-purple-700 */
            transform: scale(1.05); /* hover:scale-105 */
          }

          .purple-button svg {
            margin-right: 0.5rem; /* mr-2 */
          }

          .italic-text {
            margin-top: 2rem; /* mt-8 */
            color: #4b5563; /* text-gray-600 */
            font-style: italic; /* italic */
          }

          .scenario-analysis-section {
            background-color: #fff; /* bg-white */
            padding: 2rem; /* p-8 */
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            margin-bottom: 2rem; /* mb-8 */
          }

          .scenario-input-group {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
            gap: 1.5rem; /* gap-6 */
            font-size: 1.125rem; /* text-lg */
            margin-bottom: 1.5rem; /* mb-6 */
          }

          .scenario-input-item label {
            display: block;
            color: #374151; /* text-gray-700 */
            font-size: 0.875rem; /* text-sm */
            font-weight: 500; /* font-medium */
            margin-bottom: 0.5rem; /* mb-2 */
          }

          .scenario-input-item label svg {
            display: inline-block;
            margin-right: 0.25rem; /* mr-1 */
          }

          .scenario-input-item input {
            width: 100%;
            padding: 0.75rem; /* p-3 */
            border: 1px solid #d1d5db; /* border border-gray-300 */
            border-radius: 0.5rem; /* rounded-lg */
            transition: all 0.2s ease-in-out; /* transition-all */
          }

          .scenario-input-item input:focus {
            outline: none;
            border-color: #3b82f6; /* focus:border-blue-500 */
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25); /* focus:ring-2 focus:ring-blue-500 */
          }

          .scenario-results-box {
            margin-top: 1rem; /* mt-4 */
            padding: 1.5rem; /* p-6 */
            background-color: #f0fdf4; /* bg-green-50 */
            border-radius: 0.5rem; /* rounded-lg */
            border: 1px solid #bbf7d0; /* border border-green-200 */
          }

          .scenario-results-title {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600; /* font-semibold */
            margin-bottom: 1rem; /* mb-4 */
            color: #166534; /* text-green-800 */
          }

          .scenario-results-grid {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
            gap: 1rem; /* gap-4 */
            font-size: 1.125rem; /* text-lg */
          }

          @media (min-width: 768px) { /* md: */
            .scenario-results-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)); /* md:grid-cols-3 */
            }
          }

          .scenario-result-item {
            display: flex;
            align-items: center;
            color: #047857; /* text-green-700 */
          }

          .scenario-result-item svg {
            margin-right: 0.75rem; /* mr-3 */
          }

          .scenario-result-item .label {
            font-weight: 600; /* font-semibold */
          }

          .reset-button-container {
            margin-top: 1.5rem; /* mt-6 */
            text-align: center; /* text-center */
          }

          .reset-button {
            background-color: #4b5563; /* bg-gray-600 */
            color: #fff; /* text-white */
            font-weight: 700; /* font-bold */
            padding: 0.75rem 1.5rem; /* py-3 px-6 */
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            transition: all 0.3s ease-in-out; /* transition-all */
            cursor: pointer;
            border: none;
          }

          .reset-button:hover {
            background-color: #374151; /* hover:bg-gray-700 */
            transform: scale(1.05); /* hover:scale-105 */
          }

          .back-button {
            margin-top: 1.5rem; /* mt-6 */
            background-color: #4b5563; /* bg-gray-600 */
            color: #fff; /* text-white */
            font-weight: 700; /* font-bold */
            padding: 0.75rem 1.5rem; /* py-3 px-6 */
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            transition: all 0.3s ease-in-out; /* transition-all */
            cursor: pointer;
            border: none;
          }

          .back-button:hover {
            background-color: #374151; /* hover:bg-gray-700 */
            transform: scale(1.05); /* hover:scale-105 */
          }
        `}
      </style>
      <div className="client-detail-header">
        <h1 className="client-detail-title">Client Details: {client.name}</h1>
        <div className="client-actions">
          <button
            onClick={() => onEdit(client)}
            className="action-button edit-button"
          >
            <Edit size={20} /> Edit
          </button>
          <button
            onClick={() => onDelete(client.id)}
            className="action-button delete-button"
          >
            <Trash2 size={20} /> Delete
          </button>
        </div>
      </div>

      <div className="info-section">
        <h2 className="section-title">General Information</h2>
        <div className="info-grid">
          <p className="info-item"><User className="text-blue-500" size={20} /> <span className="label">Name:</span> {client.name}</p>
          <p className="info-item"><Mail className="text-blue-500" size={20} /> <span className="label">Email:</span> {client.email}</p>
          <p className="info-item"><Phone className="text-blue-500" size={20} /> <span className="label">Phone:</span> {client.phone}</p>
          <p className="info-item"><MapPin className="text-blue-500" size={20} /> <span className="label">Address:</span> {client.address}</p>
          <p className="info-item"><Calendar className="text-blue-500" size={20} /> <span className="label">Joined Date:</span> {client.joinedDate}</p>
          <p className="info-item"><Briefcase className="text-blue-500" size={20} /> <span className="label">Status:</span> {client.status}</p>
          <p className="info-item"><DollarSign className="text-blue-500" size={20} /> <span className="label">Total Revenue:</span> {formatINR(client.revenue)}</p>
          <p className="info-item"><FileText className="text-blue-500" size={20} /> <span className="label">Total Transactions:</span> {client.transactions}</p>
        </div>
      </div>

      {/* Loan Calculation Section */}
      <div className="info-section">
        <h2 className="section-title">Loan Details & Calculation</h2>
        <div className="info-grid">
          <p className="info-item"><DollarSign className="text-green-500" size={20} /> <span className="label">Loan Amount:</span> {formatINR(client.loanAmount)}</p>
          <p className="info-item"><Percent className="text-green-500" size={20} /> <span className="label">Interest Rate (Annual):</span> {client.interestRate}%</p>
          <p className="info-item"><Clock className="text-green-500" size={20} /> <span className="label">Loan Term (Months):</span> {client.loanTermMonths}</p>
        </div>
        {(client.loanAmount > 0 && client.loanTermMonths > 0 && client.interestRate >= 0) ? (
          <div className="calculation-box">
            <h3 className="calculation-title">Calculated Loan Payments</h3>
            <div className="calculation-grid">
              <p className="calculation-item"><DollarSign size={20} /> <span className="label">Monthly Payment:</span> {formatINR(monthlyPayment)}</p>
              <p className="calculation-item"><DollarSign size={20} /> <span className="label">Total Interest Paid:</span> {formatINR(totalInterest)}</p>
              <p className="calculation-item"><DollarSign size={20} /> <span className="label">Total Amount Paid:</span> {formatINR(totalAmount)}</p>
            </div>
            <div className="button-group-center">
              <button
                onClick={() => setShowAmortization(!showAmortization)}
                className="purple-button"
              >
                <Calculator size={20} />
                {showAmortization ? 'Hide Amortization Schedule' : 'View Amortization Schedule'}
              </button>
            </div>
          </div>
        ) : (
          <p className="italic-text">Enter Loan Amount, Interest Rate, and Loan Term to see calculations.</p>
        )}
      </div>

      {showAmortization && (
        <LoanAmortization
          loanAmount={client.loanAmount}
          annualInterestRate={client.interestRate}
          loanTermMonths={client.loanTermMonths}
        />
      )}

      {/* Loan Scenario Analysis Section */}
      <div className="scenario-analysis-section">
        <h2 className="section-title">Loan Scenario Analysis</h2>
        <div className="scenario-input-group">
          <div className="scenario-input-item">
            <label htmlFor="scenarioLoanAmount">
              <DollarSign size={16} /> Scenario Loan Amount
            </label>
            <input
              type="number"
              id="scenarioLoanAmount"
              name="scenarioLoanAmount"
              value={scenarioLoanAmount}
              onChange={(e) => setScenarioLoanAmount(parseFloat(e.target.value))}
            />
          </div>
          <div className="scenario-input-item">
            <label htmlFor="scenarioInterestRate">
              <Percent size={16} /> Scenario Interest Rate (%)
            </label>
            <input
              type="number"
              id="scenarioInterestRate"
              name="scenarioInterestRate"
              value={scenarioInterestRate}
              onChange={(e) => setScenarioInterestRate(parseFloat(e.target.value))}
              step="0.01"
            />
          </div>
          <div className="scenario-input-item">
            <label htmlFor="scenarioLoanTermMonths">
              <Clock size={16} /> Scenario Loan Term (Months)
            </label>
            <input
              type="number"
              id="scenarioLoanTermMonths"
              name="scenarioLoanTermMonths"
              value={scenarioLoanTermMonths}
              onChange={(e) => setScenarioLoanTermMonths(parseFloat(e.target.value))}
            />
          </div>
        </div>

        {(scenarioLoanAmount > 0 && scenarioLoanTermMonths > 0 && scenarioInterestRate >= 0) ? (
          <div className="scenario-results-box">
            <h3 className="scenario-results-title">Scenario Results</h3>
            <div className="scenario-results-grid">
              <p className="scenario-result-item"><DollarSign size={20} /> <span className="label">Monthly Payment:</span> {formatINR(scenarioMonthlyPayment)}</p>
              <p className="scenario-result-item"><DollarSign size={20} /> <span className="label">Total Interest Paid:</span> {formatINR(scenarioTotalInterest)}</p>
              <p className="scenario-result-item"><DollarSign size={20} /> <span className="label">Total Amount Paid:</span> {formatINR(scenarioTotalAmount)}</p>
            </div>
            <div className="reset-button-container">
              <button
                onClick={resetScenario}
                className="reset-button"
              >
                Reset Scenario
              </button>
            </div>
          </div>
        ) : (
          <p className="italic-text">Adjust scenario parameters above to see results.</p>
        )}
      </div>

      <button
        onClick={onBack}
        className="back-button"
      >
        Back to Clients
      </button>
    </div>
  );
};

export default ClientDetail;
