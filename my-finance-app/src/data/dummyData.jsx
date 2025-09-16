// Dummy data for demonstration
export const initialClients = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown',
    joinedDate: '2023-01-15',
    status: 'Active',
    revenue: 15000,
    transactions: 12,
    loanAmount: 100000,
    interestRate: 4.5, // Annual interest rate in percent
    loanTermMonths: 120, // Loan term in months (10 years)
  },
  {
    id: '2',
    name: 'Bob Williams',
    email: 'bob@example.com',
    phone: '098-765-4321',
    address: '456 Oak Ave, Somewhere',
    joinedDate: '2023-03-20',
    status: 'Active',
    revenue: 22000,
    transactions: 18,
    loanAmount: 250000,
    interestRate: 3.8,
    loanTermMonths: 360, // 30 years
  },
  {
    id: '3',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    phone: '555-123-4567',
    address: '789 Pine Ln, Nowhere',
    joinedDate: '2023-05-10',
    status: 'Inactive',
    revenue: 8000,
    transactions: 7,
    loanAmount: 50000,
    interestRate: 6.0,
    loanTermMonths: 60, // 5 years
  },
  {
    id: '4',
    name: 'Diana Prince',
    email: 'diana@example.com',
    phone: '111-222-3333',
    address: '101 Hero Blvd, Themyscira',
    joinedDate: '2024-02-01',
    status: 'Active',
    revenue: 30000,
    transactions: 25,
    loanAmount: 180000,
    interestRate: 4.0,
    loanTermMonths: 240, // 20 years
  },
];

export const revenueData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

export const clientStatusData = [
  { name: 'Active', value: 300, color: '#82ca9d' },
  { name: 'Inactive', value: 100, color: '#ffc658' },
  { name: 'New', value: 50, color: '#8884d8' },
];
