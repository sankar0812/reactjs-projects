import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { formatINR } from '../utils/currency';

// Loan Amortization Component
const LoanAmortization = ({ loanAmount, annualInterestRate, loanTermMonths }) => {
  const [amortizationData, setAmortizationData] = useState([]);

  useEffect(() => {
    const calculateAmortization = () => {
      if (loanAmount <= 0 || annualInterestRate < 0 || loanTermMonths <= 0) {
        setAmortizationData([]);
        return;
      }

      const monthlyInterestRate = (annualInterestRate / 100) / 12;
      let monthlyPayment;

      if (monthlyInterestRate === 0) {
        monthlyPayment = loanAmount / loanTermMonths;
      } else {
        monthlyPayment =
          (loanAmount * monthlyInterestRate) /
          (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));
      }

      let currentBalance = loanAmount;
      const data = [];

      for (let i = 1; i <= loanTermMonths; i++) {
        const interestPayment = currentBalance * monthlyInterestRate;
        let principalPayment = monthlyPayment - interestPayment;

        // Adjust last payment to zero out balance
        if (i === loanTermMonths) {
          principalPayment = currentBalance;
          monthlyPayment = principalPayment + interestPayment; // Adjust final payment amount
        }

        currentBalance -= principalPayment;
        if (currentBalance < 0) currentBalance = 0; // Ensure balance doesn't go negative due to floating point

        data.push({
          month: i,
          startingBalance: parseFloat((currentBalance + principalPayment).toFixed(2)),
          monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
          principalPaid: parseFloat(principalPayment.toFixed(2)),
          interestPaid: parseFloat(interestPayment.toFixed(2)),
          endingBalance: parseFloat(currentBalance.toFixed(2)),
        });
      }
      setAmortizationData(data);
    };

    calculateAmortization();
  }, [loanAmount, annualInterestRate, loanTermMonths]);

  if (amortizationData.length === 0) {
    return (
      <div className="p-6 bg-white rounded-xl shadow-md mt-6">
        <p className="text-gray-600 italic text-center">
          Please enter valid Loan Amount, Interest Rate, and Loan Term to view the amortization schedule.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg mt-6">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Amortization Schedule</h3>

      {/* Amortization Chart */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4 text-gray-700">Principal vs. Interest Over Time</h4>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={amortizationData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" label={{ value: "Month", position: "insideBottom", offset: 0 }} />
            <YAxis tickFormatter={(value) => formatINR(value)} label={{ value: "Amount", angle: -90, position: "insideLeft" }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '8px', color: '#fff' }}
              labelStyle={{ color: '#fff' }}
              formatter={(value, name) => [`${formatINR(value)}`, name]}
            />
            <Legend />
            <Area type="monotone" dataKey="principalPaid" stackId="1" stroke="#8884d8" fill="#8884d8" name="Principal Paid" />
            <Area type="monotone" dataKey="interestPaid" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Interest Paid" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Amortization Table */}
      <h4 className="text-xl font-semibold mb-4 text-gray-700">Detailed Breakdown</h4>
      <div className="overflow-x-auto max-h-96">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Starting Balance</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Payment</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal Paid</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest Paid</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ending Balance</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {amortizationData.map((row) => (
              <tr key={row.month} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{row.month}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{formatINR(row.startingBalance)}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{formatINR(row.monthlyPayment)}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{formatINR(row.principalPaid)}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{formatINR(row.interestPaid)}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{formatINR(row.endingBalance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanAmortization;
