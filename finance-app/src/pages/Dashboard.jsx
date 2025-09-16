// import { useState } from 'react';
// import AddClientForm from '../components/AddClientForm';
// import ClientTable from '../components/ClientTable';
// import RevenueChart from '../components/RevenueChart';

// export default function Dashboard() {
//   const [clients, setClients] = useState([]);

//   const handleAddClient = (client) => {
//     setClients([...clients, client]);
//   };

//   const totalRevenue = clients.reduce((sum, c) => sum + c.asal, 0);
//   const totalExpenses = clients.reduce((sum, c) => sum + c.vatti, 0);

//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>
//       <AddClientForm onAdd={handleAddClient} />
//       <div className="stats">
//         <p><strong>Total Revenue:</strong> €{totalRevenue.toLocaleString()}</p>
//         <RevenueChart revenue={totalRevenue} expenses={totalExpenses} />
//       </div>
//       <ClientTable clients={clients} />
//     </div>
//   );
// }


// import { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import ClientForm from '../components/AddClientForm';
// import ClientTable from '../components/ClientTable';
// import FinanceChart from '../components/FinanceChart';

// export default function Dashboard() {
//   const [clients, setClients] = useState([]);

//   const handleAddClient = (client) => {
//     setClients([...clients, client]);
//   };

//   return (
//     <div className="app-container">
//       <Sidebar />

//       <main className="main-content">
//         <Header />

//         <div className="dashboard-content">
//           <ClientForm onAdd={handleAddClient} />

//           <div className="dashboard-stats">
//             <FinanceChart clients={clients} />
//           </div>

//           <ClientTable clients={clients} />
//         </div>
//       </main>
//     </div>
//   );
// }


import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ClientTable from '../components/ClientTable';
import FinanceChart from '../components/FinanceChart';

export default function Dashboard() {
  const [clients, setClients] = useState([]);

  return (
    <div className="app-container flex">
      <Sidebar />

      <main className="main-content flex-1 p-6 bg-gray-100 min-h-screen">
        <Header />

        <div className="dashboard-content space-y-6">
          {/* Welcome */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to the Dashboard</h2>
            <p className="text-gray-600">Overview of your client finances and activity</p>
          </div>

          {/* Finance Chart */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Finance Overview</h3>
            <div className="w-full h-64">
              <FinanceChart clients={clients} />
            </div>
          </div>

          {/* Client Table */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Client List</h3>
            <ClientTable clients={clients} />
          </div>
        </div>
      </main>
    </div>
  );
}

