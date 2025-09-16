export default function ClientTable({ clients }) {
  const totalBalance = clients.reduce((sum, c) => sum + c.balance, 0);

  return (
    <div>
      <h3>Client List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>ASAL</th><th>VATTI</th><th>Contact</th><th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>₹{c.asal}</td>
              <td>₹{c.vatti}</td>
              <td>{c.email} / {c.phone}</td>
              <td>₹{c.balance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p><strong>Total Balance:</strong> ₹{totalBalance.toLocaleString()}</p>
    </div>
  );
}
