// import React from 'react';
// import { Home, Users, BarChart2, FileText, Download, DollarSign, User } from 'lucide-react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
// import { formatINR } from '../utils/currency';
// import { exportClientsToCSV } from '../utils/export';
// import { revenueData, clientStatusData } from '../data/dummyData';

// // Dashboard Component
// const Dashboard = ({ clients }) => {
//   const totalClients = clients.length;
//   const totalRevenue = clients.reduce((sum, client) => sum + client.revenue, 0);
//   const avgRevenuePerClient = totalClients > 0 ? (totalRevenue / totalClients).toFixed(2) : 0;
//   const activeClients = clients.filter(client => client.status === 'Active').length;

//   const handleExport = (format) => {
//     if (format === 'CSV') {
//       exportClientsToCSV(clients);
//     } else if (format === 'PDF') {
//       window.confirm(`Exporting data in ${format} format... (PDF export not yet implemented)`);
//     }
//   };

//   return (
//     <div className="flex-1 p-8 bg-gray-100 min-h-screen rounded-l-lg">
//       <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Dashboard Overview</h1>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//         <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between transition-transform transform hover:scale-105">
//           <div>
//             <p className="text-gray-500 text-sm font-medium">Total Clients</p>
//             <p className="text-3xl font-bold text-gray-800">{totalClients}</p>
//           </div>
//           <Users className="text-blue-500 opacity-75" size={40} />
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between transition-transform transform hover:scale-105">
//           <div>
//             <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
//             <p className="text-3xl font-bold text-gray-800">{formatINR(totalRevenue)}</p>
//           </div>
//           <DollarSign className="text-green-500 opacity-75" size={40} />
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between transition-transform transform hover:scale-105">
//           <div>
//             <p className="text-gray-500 text-sm font-medium">Avg. Revenue/Client</p>
//             <p className="text-3xl font-bold text-gray-800">{formatINR(avgRevenuePerClient)}</p>
//           </div>
//           <BarChart2 className="text-purple-500 opacity-75" size={40} />
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between transition-transform transform hover:scale-105">
//           <div>
//             <p className="text-gray-500 text-sm font-medium">Active Clients</p>
//             <p className="text-3xl font-bold text-gray-800">{activeClients}</p>
//           </div>
//           <User className="text-orange-500 opacity-75" size={40} />
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">Revenue Over Time</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
//               <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
//               <YAxis tickFormatter={(value) => formatINR(value)} tick={{ fill: '#6b7280' }} />
//               <Tooltip
//                 contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '8px', color: '#fff' }}
//                 labelStyle={{ color: '#fff' }}
//                 formatter={(value) => formatINR(value)}
//               />
//               <Legend />
//               <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} name="Actual Revenue" strokeWidth={2} />
//               <Line type="monotone" dataKey="pv" stroke="#82ca9d" name="Projected Revenue" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">Client Status Distribution</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={clientStatusData}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 outerRadius={100}
//                 fill="#8884d8"
//                 dataKey="value"
//                 label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//               >
//                 {clientStatusData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Export Options */}
//       <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">Export Data</h2>
//         <div className="flex space-x-4">
//           <button
//             onClick={() => handleExport('CSV')}
//             className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
//           >
//             <Download className="mr-2" size={20} /> Export CSV
//           </button>
//           <button
//             onClick={() => handleExport('PDF')}
//             className="flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
//           >
//             <FileText className="mr-2" size={20} /> Export PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React from 'react';
// import { Home, Users, BarChart2, FileText, Download, DollarSign, User } from 'lucide-react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
// import { formatINR } from '../utils/currency.jsx';
// import { exportClientsToCSV } from '../utils/export.jsx';
// import { revenueData, clientStatusData } from '../data/dummyData.jsx';

// // Dashboard Component
// const Dashboard = ({ clients }) => {
//   const totalClients = clients.length;
//   const totalRevenue = clients.reduce((sum, client) => sum + client.revenue, 0);
//   const avgRevenuePerClient = totalClients > 0 ? (totalRevenue / totalClients).toFixed(2) : 0;
//   const activeClients = clients.filter(client => client.status === 'Active').length;

//   const handleExport = (format) => {
//     if (format === 'CSV') {
//       exportClientsToCSV(clients);
//     } else if (format === 'PDF') {
//       window.confirm(`Exporting data in ${format} format... (PDF export not yet implemented)`);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <style>
//         {`
//           .dashboard-container {
//             flex: 1;
//             padding: 2rem;
//             background-color: #f3f4f6; /* bg-gray-100 */
//             min-height: 100vh;
//             border-top-left-radius: 0.5rem; /* rounded-l-lg */
//             border-bottom-left-radius: 0.5rem; /* rounded-l-lg */
//           }

//           .dashboard-title {
//             font-size: 2.25rem; /* text-4xl */
//             font-weight: 800; /* font-extrabold */
//             margin-bottom: 2rem; /* mb-8 */
//             color: #111827; /* text-gray-900 */
//           }

//           .summary-cards-grid {
//             display: grid;
//             grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
//             gap: 1.5rem; /* gap-6 */
//             margin-bottom: 2.5rem; /* mb-10 */
//           }

//           @media (min-width: 768px) { /* md: */
//             .summary-cards-grid {
//               grid-template-columns: repeat(2, minmax(0, 1fr)); /* md:grid-cols-2 */
//             }
//           }

//           @media (min-width: 1024px) { /* lg: */
//             .summary-cards-grid {
//               grid-template-columns: repeat(4, minmax(0, 1fr)); /* lg:grid-cols-4 */
//             }
//           }

//           .summary-card {
//             background-color: #fff; /* bg-white */
//             padding: 1.5rem; /* p-6 */
//             border-radius: 0.75rem; /* rounded-xl */
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             transition: all 0.3s ease-in-out; /* transition-transform transform */
//             cursor: default;
//           }

//           .summary-card:hover {
//             transform: scale(1.05); /* hover:scale-105 */
//           }

//           .summary-card-label {
//             color: #6b7280; /* text-gray-500 */
//             font-size: 0.875rem; /* text-sm */
//             font-weight: 500; /* font-medium */
//           }

//           .summary-card-value {
//             font-size: 1.875rem; /* text-3xl */
//             font-weight: 700; /* font-bold */
//             color: #1f2937; /* text-gray-800 */
//           }

//           .summary-card-icon {
//             opacity: 0.75; /* opacity-75 */
//           }
//           .summary-card-icon.blue { color: #3b82f6; } /* text-blue-500 */
//           .summary-card-icon.green { color: #22c55e; } /* text-green-500 */
//           .summary-card-icon.purple { color: #9333ea; } /* text-purple-500 */
//           .summary-card-icon.orange { color: #f97316; } /* text-orange-500 */

//           .charts-grid {
//             display: grid;
//             grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
//             gap: 1.5rem; /* gap-6 */
//             margin-bottom: 2.5rem; /* mb-10 */
//           }

//           @media (min-width: 1024px) { /* lg: */
//             .charts-grid {
//               grid-template-columns: repeat(2, minmax(0, 1fr)); /* lg:grid-cols-2 */
//             }
//           }

//           .chart-card {
//             background-color: #fff; /* bg-white */
//             padding: 1.5rem; /* p-6 */
//             border-radius: 0.75rem; /* rounded-xl */
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
//           }

//           .chart-title {
//             font-size: 1.25rem; /* text-xl */
//             font-weight: 600; /* font-semibold */
//             margin-bottom: 1rem; /* mb-4 */
//             color: #1f2937; /* text-gray-800 */
//           }

//           .recharts-cartesian-grid line {
//             stroke: #e0e0e0; /* stroke-#e0e0e0 */
//           }
//           .recharts-cartesian-axis-tick text {
//             fill: #6b7280; /* fill-#6b7280 */
//           }
//           .recharts-tooltip-wrapper .recharts-default-tooltip {
//             background-color: #333 !important; /* bg-#333 */
//             border: none !important; /* border-none */
//             border-radius: 0.5rem !important; /* rounded-lg */
//             color: #fff !important; /* text-white */
//           }
//           .recharts-tooltip-label {
//             color: #fff !important; /* text-white */
//           }

//           .export-options-section {
//             background-color: #fff; /* bg-white */
//             padding: 1.5rem; /* p-6 */
//             border-radius: 0.75rem; /* rounded-xl */
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
//             display: flex;
//             flex-direction: column; /* flex-col */
//             align-items: center;
//             justify-content: space-between;
//           }

//           @media (min-width: 768px) { /* md: */
//             .export-options-section {
//               flex-direction: row; /* md:flex-row */
//             }
//           }

//           .export-section-title {
//             font-size: 1.25rem; /* text-xl */
//             font-weight: 600; /* font-semibold */
//             color: #1f2937; /* text-gray-800 */
//             margin-bottom: 1rem; /* mb-4 */
//           }

//           @media (min-width: 768px) { /* md: */
//             .export-section-title {
//               margin-bottom: 0; /* md:mb-0 */
//             }
//           }

//           .export-buttons-group {
//             display: flex;
//             gap: 1rem; /* space-x-4 */
//           }

//           .export-button {
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
//           }

//           .export-button:hover {
//             transform: scale(1.05); /* hover:scale-105 */
//             background-color: #1d4ed8; /* hover:bg-blue-700 */
//           }

//           .export-button.pdf {
//             background-color: #dc2626; /* bg-red-600 */
//           }

//           .export-button.pdf:hover {
//             background-color: #b91c1c; /* hover:bg-red-700 */
//           }

//           .export-button svg {
//             margin-right: 0.5rem; /* mr-2 */
//           }
//         `}
//       </style>
//       <h1 className="dashboard-title">Dashboard Overview</h1>

//       {/* Summary Cards */}
//       <div className="summary-cards-grid">
//         <div className="summary-card">
//           <div>
//             <p className="summary-card-label">Total Clients</p>
//             <p className="summary-card-value">{totalClients}</p>
//           </div>
//           <Users className="summary-card-icon blue" size={40} />
//         </div>
//         <div className="summary-card">
//           <div>
//             <p className="summary-card-label">Total Revenue</p>
//             <p className="summary-card-value">{formatINR(totalRevenue)}</p>
//           </div>
//           <DollarSign className="summary-card-icon green" size={40} />
//         </div>
//         <div className="summary-card">
//           <div>
//             <p className="summary-card-label">Avg. Revenue/Client</p>
//             <p className="summary-card-value">{formatINR(avgRevenuePerClient)}</p>
//           </div>
//           <BarChart2 className="summary-card-icon purple" size={40} />
//         </div>
//         <div className="summary-card">
//           <div>
//             <p className="summary-card-label">Active Clients</p>
//             <p className="summary-card-value">{activeClients}</p>
//           </div>
//           <User className="summary-card-icon orange" size={40} />
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="charts-grid">
//         <div className="chart-card">
//           <h2 className="chart-title">Revenue Over Time</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis tickFormatter={(value) => formatINR(value)} />
//               <Tooltip
//                 contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '8px', color: '#fff' }}
//                 labelStyle={{ color: '#fff' }}
//                 formatter={(value) => formatINR(value)}
//               />
//               <Legend />
//               <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} name="Actual Revenue" strokeWidth={2} />
//               <Line type="monotone" dataKey="pv" stroke="#82ca9d" name="Projected Revenue" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="chart-card">
//           <h2 className="chart-title">Client Status Distribution</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={clientStatusData}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 outerRadius={100}
//                 fill="#8884d8"
//                 dataKey="value"
//                 label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//               >
//                 {clientStatusData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Export Options */}
//       <div className="export-options-section">
//         <h2 className="export-section-title">Export Data</h2>
//         <div className="export-buttons-group">
//           <button
//             onClick={() => handleExport('CSV')}
//             className="export-button"
//           >
//             <Download size={20} /> Export CSV
//           </button>
//           <button
//             onClick={() => handleExport('PDF')}
//             className="export-button pdf"
//           >
//             <FileText size={20} /> Export PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useMemo } from 'react'; // Import useMemo
import { Home, Users, BarChart2, FileText, Download, DollarSign, User } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { formatINR } from '../utils/currency.jsx';
import { exportClientsToCSV } from '../utils/export.jsx';
// Removed: import { revenueData, clientStatusData } from '../data/dummyData.js'; // No longer using static dummy data

// Dashboard Component
const Dashboard = ({ clients }) => {
  // Calculate summary data
  const totalClients = clients.length;
  const totalRevenue = clients.reduce((sum, client) => sum + (client.revenue || 0), 0);
  const avgRevenuePerClient = totalClients > 0 ? (totalRevenue / totalClients).toFixed(2) : 0;
  const activeClients = clients.filter(client => client.status === 'Active').length;

  // Dynamic calculation for Revenue Over Time chart data
  const dynamicRevenueData = useMemo(() => {
    const monthlyRevenueMap = {};

    clients.forEach(client => {
      if (client.joinedDate && client.revenue) {
        // Assuming joinedDate is in 'YYYY-MM-DD' format
        const date = new Date(client.joinedDate);
        const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`; // YYYY-MM format

        if (!monthlyRevenueMap[monthYear]) {
          monthlyRevenueMap[monthYear] = { actual: 0, projected: 0 };
        }
        monthlyRevenueMap[monthYear].actual += client.revenue;
        // Simple projection: 10% more than actual for visual comparison
        monthlyRevenueMap[monthYear].projected = monthlyRevenueMap[monthYear].actual * 1.1;
      }
    });

    // Sort months chronologically and format for the chart
    const sortedMonths = Object.keys(monthlyRevenueMap).sort();

    return sortedMonths.map(monthYear => {
      const [year, month] = monthYear.split('-');
      const monthName = new Date(year, parseInt(month) - 1, 1).toLocaleString('en-US', { month: 'short' });
      return {
        name: `${monthName} ${year}`, // e.g., "Jan 2023"
        uv: monthlyRevenueMap[monthYear].actual, // Actual Revenue
        pv: monthlyRevenueMap[monthYear].projected, // Projected Revenue
      };
    });
  }, [clients]); // Recalculate only when clients data changes

  // Dynamic calculation for Client Status Distribution chart data
  const dynamicClientStatusData = useMemo(() => {
    const statusCounts = clients.reduce((acc, client) => {
      acc[client.status] = (acc[client.status] || 0) + 1;
      return acc;
    }, {});

    // Define colors for statuses
    const statusColors = {
      'Active': '#82ca9d',   // Green
      'Inactive': '#ffc658', // Yellow/Orange
      'Lead': '#8884d8',     // Purple
      // Add more statuses and colors if needed
    };

    return Object.keys(statusCounts).map(status => ({
      name: status,
      value: statusCounts[status],
      color: statusColors[status] || '#cccccc', // Default color if not defined
    }));
  }, [clients]); // Recalculate only when clients data changes


  const handleExport = (format) => {
    if (format === 'CSV') {
      exportClientsToCSV(clients);
    } else if (format === 'PDF') {
      window.confirm(`Exporting data in ${format} format... (PDF export not yet implemented)`);
    }
  };

  return (
    <div className="dashboard-container">
      <style>
        {`
          .dashboard-container {
            flex: 1;
            padding: 2rem;
            background-color: #f3f4f6; /* bg-gray-100 */
            min-height: 100vh;
            border-top-left-radius: 0.5rem; /* rounded-l-lg */
            border-bottom-left-radius: 0.5rem; /* rounded-l-lg */
          }

          @media (max-width: 767px) {
            .dashboard-container {
              padding: 1rem; /* Adjust padding for smaller screens */
            }
          }

          .dashboard-header {
            display: flex;
            flex-direction: column; /* Stack on small screens */
            justify-content: space-between;
            align-items: flex-start; /* Align items to start on small screens */
            margin-bottom: 2rem; /* mb-8 */
            padding-bottom: 1rem;
            border-bottom: 1px solid #e5e7eb; /* subtle separator */
          }

          @media (min-width: 768px) {
            .dashboard-header {
              flex-direction: row; /* Row on larger screens */
              align-items: center; /* Center items on larger screens */
            }
          }

          .dashboard-title {
            font-size: 2.5rem; /* text-4xl, slightly larger */
            font-weight: 800; /* font-extrabold */
            color: #111827; /* text-gray-900 */
            line-height: 1.2;
          }

          .dashboard-subtitle {
            font-size: 1rem;
            color: #6b7280;
            margin-top: 0.5rem;
          }

          .summary-cards-grid {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
            gap: 1.5rem; /* gap-6 */
            margin-bottom: 2.5rem; /* mb-10 */
          }

          @media (min-width: 768px) { /* md: */
            .summary-cards-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)); /* md:grid-cols-2 */
            }
          }

          @media (min-width: 1024px) { /* lg: */
            .summary-cards-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr)); /* lg:grid-cols-4 */
            }
          }

          .summary-card {
            background-color: #fff; /* bg-white */
            padding: 1.5rem; /* p-6 */
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 0.3s ease-in-out; /* transition-transform transform */
            cursor: default;
          }

          .summary-card:hover {
            transform: scale(1.05); /* hover:scale-105 */
          }

          .summary-card-label {
            color: #6b7280; /* text-gray-500 */
            font-size: 0.875rem; /* text-sm */
            font-weight: 500; /* font-medium */
          }

          .summary-card-value {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 700; /* font-bold */
            color: #1f2937; /* text-gray-800 */
          }

          .summary-card-icon {
            opacity: 0.75; /* opacity-75 */
          }
          .summary-card-icon.blue { color: #3b82f6; } /* text-blue-500 */
          .summary-card-icon.green { color: #22c55e; } /* text-green-500 */
          .summary-card-icon.purple { color: #9333ea; } /* text-purple-500 */
          .summary-card-icon.orange { color: #f97316; } /* text-orange-500 */

          .charts-grid {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
            gap: 1.5rem; /* gap-6 */
            margin-bottom: 2.5rem; /* mb-10 */
          }

          @media (min-width: 1024px) { /* lg: */
            .charts-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)); /* lg:grid-cols-2 */
            }
          }

          .chart-card {
            background-color: #fff; /* bg-white */
            padding: 1.5rem; /* p-6 */
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
          }

          .chart-title {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600; /* font-semibold */
            margin-bottom: 1rem; /* mb-4 */
            color: #1f2937; /* text-gray-800 */
          }

          .recharts-cartesian-grid line {
            stroke: #e0e0e0; /* stroke-#e0e0e0 */
          }
          .recharts-cartesian-axis-tick text {
            fill: #6b7280; /* fill-#6b7280 */
          }
          .recharts-tooltip-wrapper .recharts-default-tooltip {
            background-color: #333 !important; /* bg-#333 */
            border: none !important; /* border-none */
            border-radius: 0.5rem !important; /* rounded-lg */
            color: #fff !important; /* text-white */
          }
          .recharts-tooltip-label {
            color: #fff !important; /* text-white */
          }

          .export-options-section {
            background-color: #fff; /* bg-white */
            padding: 1.5rem; /* p-6 */
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            display: flex;
            flex-direction: column; /* flex-col */
            align-items: center;
            justify-content: space-between;
          }

          @media (min-width: 768px) { /* md: */
            .export-options-section {
              flex-direction: row; /* md:flex-row */
            }
          }

          .export-section-title {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600; /* font-semibold */
            color: #1f2937; /* text-gray-800 */
            margin-bottom: 1rem; /* mb-4 */
          }

          @media (min-width: 768px) { /* md: */
            .export-section-title {
              margin-bottom: 0; /* md:mb-0 */
            }
          }

          .export-buttons-group {
            display: flex;
            gap: 1rem; /* space-x-4 */
          }

          .export-button {
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
          }

          .export-button:hover {
            transform: scale(1.05); /* hover:scale-105 */
            background-color: #1d4ed8; /* hover:bg-blue-700 */
          }

          .export-button.pdf {
            background-color: #dc2626; /* bg-red-600 */
          }

          .export-button.pdf:hover {
            background-color: #b91c1c; /* hover:bg-red-700 */
          }

        `}
      </style>
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard Overview</h1>
          <p className="dashboard-subtitle">A comprehensive look at your financial data.</p>
        </div>
        {/* You can add more elements here, e.g., a date picker or quick actions */}
      </div>

      {/* Summary Cards */}
      <div className="summary-cards-grid">
        <div className="summary-card">
          <div>
            <p className="summary-card-label">Total Clients</p>
            <p className="summary-card-value">{totalClients}</p>
          </div>
          <Users className="summary-card-icon blue" size={40} />
        </div>
        <div className="summary-card">
          <div>
            <p className="summary-card-label">Total Revenue</p>
            <p className="summary-card-value">{formatINR(totalRevenue)}</p>
          </div>
          <DollarSign className="summary-card-icon green" size={40} />
        </div>
        
        <div className="summary-card">
          <div>
            <p className="summary-card-label">Avg. Revenue/Client</p>
            <p className="summary-card-value">{formatINR(avgRevenuePerClient)}</p>
          </div>
          <BarChart2 className="summary-card-icon purple" size={40} />
        </div>
        <div className="summary-card">
          <div>
            <p className="summary-card-label">Active Clients</p>
            <p className="summary-card-value">{activeClients}</p>
          </div>
          <User className="summary-card-icon orange" size={40} />
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-grid">
        <div className="chart-card">
          <h2 className="chart-title">Revenue Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dynamicRevenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => formatINR(value)} />
              <Tooltip
                contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '8px', color: '#fff' }}
                labelStyle={{ color: '#fff' }}
                formatter={(value) => formatINR(value)}
              />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} name="Actual Revenue" strokeWidth={2} />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" name="Projected Revenue" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2 className="chart-title">Client Status Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dynamicClientStatusData} // Use dynamic data here
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {dynamicClientStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Export Options */}
      <div className="export-options-section">
        <h2 className="export-section-title">Export Data</h2>
        <div className="export-buttons-group">
          <button
            onClick={() => handleExport('CSV')}
            className="export-button"
          >
            <Download size={20} /> Export CSV
          </button>
          <button
            onClick={() => handleExport('PDF')}
            className="export-button pdf"
          >
            <FileText size={20} /> Export PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
