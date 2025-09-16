import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function FinanceChart({ clients }) {
  const data = clients.map(c => ({
    name: c.name,
    total: c.asal + c.vatti
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
