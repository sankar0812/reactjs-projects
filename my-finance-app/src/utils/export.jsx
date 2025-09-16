// Function to export clients data to CSV
export const exportClientsToCSV = (clients) => {
  if (!clients || clients.length === 0) {
    window.confirm("No client data to export.");
    return;
  }

  const headers = [
    "ID", "Name", "Email", "Phone", "Address", "Joined Date", "Status",
    "Revenue", "Transactions", "Loan Amount", "Interest Rate (%)", "Loan Term (Months)"
  ];

  const csvRows = [];
  csvRows.push(headers.join(',')); // Add header row

  clients.forEach(client => {
    const row = [
      client.id,
      `"${client.name.replace(/"/g, '""')}"`, // Handle commas in names
      client.email,
      client.phone,
      `"${client.address.replace(/"/g, '""')}"`,
      client.joinedDate,
      client.status,
      client.revenue,
      client.transactions,
      client.loanAmount,
      client.interestRate,
      client.loanTermMonths
    ];
    csvRows.push(row.join(','));
  });

  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'clients_data.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.confirm("Client data exported successfully to clients_data.csv!");
};
