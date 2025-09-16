//     // const express = require('express');
//     // const router = express.Router();
//     // const Client = require('../models/Client');

//     // // GET all clients
//     // router.get('/', async (req, res) => {
//     //   try {
//     //     const clients = await Client.find();
//     //     res.json(clients);
//     //   } catch (err) {
//     //     res.status(500).json({ message: err.message });
//     //   }
//     // });

//     // // GET a single client by ID
//     // router.get('/:id', async (req, res) => {
//     //   try {
//     //     const client = await Client.findById(req.params.id);
//     //     if (!client) return res.status(404).json({ message: 'Client not found' });
//     //     res.json(client);
//     //   } catch (err) {
//     //     res.status(500).json({ message: err.message });
//     //   }
//     // });

//     // // CREATE a new client
//     // router.post('/', async (req, res) => {
//     //   const client = new Client({
//     //     name: req.body.name,
//     //     email: req.body.email,
//     //     phone: req.body.phone,
//     //     address: req.body.address,
//     //     joinedDate: req.body.joinedDate,
//     //     status: req.body.status,
//     //     revenue: req.body.revenue,
//     //     transactions: req.body.transactions,
//     //     loanAmount: req.body.loanAmount,
//     //     interestRate: req.body.interestRate,
//     //     loanTermMonths: req.body.loanTermMonths,
//     //   });

//     //   try {
//     //     const newClient = await client.save();
//     //     res.status(201).json(newClient);
//     //   } catch (err) {
//     //     res.status(400).json({ message: err.message });
//     //   }
//     // });

//     // // UPDATE a client by ID
//     // router.put('/:id', async (req, res) => {
//     //   try {
//     //     const client = await Client.findById(req.params.id);
//     //     if (!client) return res.status(404).json({ message: 'Client not found' });

//     //     // Update fields if they exist in the request body
//     //     if (req.body.name != null) client.name = req.body.name;
//     //     if (req.body.email != null) client.email = req.body.email;
//     //     if (req.body.phone != null) client.phone = req.body.phone;
//     //     if (req.body.address != null) client.address = req.body.address;
//     //     if (req.body.joinedDate != null) client.joinedDate = req.body.joinedDate;
//     //     if (req.body.status != null) client.status = req.body.status;
//     //     if (req.body.revenue != null) client.revenue = req.body.revenue;
//     //     if (req.body.transactions != null) client.transactions = req.body.transactions;
//     //     if (req.body.loanAmount != null) client.loanAmount = req.body.loanAmount;
//     //     if (req.body.interestRate != null) client.interestRate = req.body.interestRate;
//     //     if (req.body.loanTermMonths != null) client.loanTermMonths = req.body.loanTermMonths;

//     //     const updatedClient = await client.save();
//     //     res.json(updatedClient);
//     //   } catch (err) {
//     //     res.status(400).json({ message: err.message });
//     //   }
//     // });

//     // // DELETE a client by ID
//     // router.delete('/:id', async (req, res) => {
//     //   try {
//     //     const client = await Client.findById(req.params.id);
//     //     if (!client) return res.status(404).json({ message: 'Client not found' });

//     //     await Client.deleteOne({ _id: req.params.id }); // Use deleteOne for Mongoose 6+
//     //     res.json({ message: 'Client deleted' });
//     //   } catch (err) {
//     //     res.status(500).json({ message: err.message });
//     //   }
//     // });

//     // module.exports = router;
    

// const express = require('express');
// const router = express.Router();
// const Client = require('../models/Client');

// // GET all clients
// router.get('/', async (req, res) => {
//   try {
//     const clients = await Client.find();
//     res.json(clients);
//   } catch (err) {
//     console.error('Error fetching clients:', err); // Log the actual error
//     res.status(500).json({ message: 'Server error fetching clients.' });
//   }
// });

// // GET a single client by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const client = await Client.findById(req.params.id);
//     if (!client) return res.status(404).json({ message: 'Client not found' });
//     res.json(client);
//   } catch (err) {
//     console.error('Error fetching single client:', err); // Log the actual error
//     res.status(500).json({ message: 'Server error fetching client.' });
//   }
// });

// // CREATE a new client
// router.post('/', async (req, res) => {
//   const client = new Client({
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     address: req.body.address,
//     joinedDate: req.body.joinedDate,
//     status: req.body.status,
//     revenue: req.body.revenue,
//     transactions: req.body.transactions,
//     loanAmount: req.body.loanAmount,
//     interestRate: req.body.interestRate,
//     loanTermMonths: req.body.loanTermMonths,
//   });

//   try {
//     const newClient = await client.save();
//     res.status(201).json(newClient);
//   } catch (err) {
//     console.error('Error creating client:', err); // Log the actual error
//     res.status(400).json({ message: err.message });
//   }
// });

// // UPDATE a client by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const client = await Client.findById(req.params.id);
//     if (!client) return res.status(404).json({ message: 'Client not found' });

//     // Update fields if they exist in the request body
//     if (req.body.name != null) client.name = req.body.name;
//     if (req.body.email != null) client.email = req.body.email;
//     if (req.body.phone != null) client.phone = req.body.phone;
//     if (req.body.address != null) client.address = req.body.address;
//     if (req.body.joinedDate != null) client.joinedDate = req.body.joinedDate;
//     if (req.body.status != null) client.status = req.body.status;
//     if (req.body.revenue != null) client.revenue = req.body.revenue;
//     if (req.body.transactions != null) client.transactions = req.body.transactions;
//     if (req.body.loanAmount != null) client.loanAmount = req.body.loanAmount;
//     if (req.body.interestRate != null) client.interestRate = req.body.interestRate;
//     if (req.body.loanTermMonths != null) client.loanTermMonths = req.body.loanTermMonths;

//     const updatedClient = await client.save();
//     res.json(updatedClient);
//   } catch (err) {
//     console.error('Error updating client:', err); // Log the actual error
//     res.status(400).json({ message: err.message });
//   }
// });

// DELETE a client by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     // Validate if the ID is a valid MongoDB ObjectId format
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ message: 'Invalid client ID format.' });
//     }

//     // Find and delete the client
//     const result = await Client.deleteOne({ _id: req.params.id });

//     if (result.deletedCount === 0) {
//       return res.status(404).json({ message: 'Client not found.' });
//     }

//     res.json({ message: 'Client deleted successfully.' });
//   } catch (err) {
//     console.error('Error deleting client:', err); // Log the actual error
//     res.status(500).json({ message: 'Server error deleting client.' });
//   }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Client = require('../models/Client');
// const mongoose = require('mongoose'); // <--- ADD THIS LINE

// // GET all clients
// router.get('/', async (req, res) => {
//   try {
//     const clients = await Client.find();
//     res.json(clients);
//   } catch (err) {
//     console.error('Error fetching clients:', err); // Log the actual error
//     res.status(500).json({ message: 'Server error fetching clients.' });
//   }
// });

// // GET a single client by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const client = await Client.findById(req.params.id);
//     if (!client) return res.status(404).json({ message: 'Client not found' });
//     res.json(client);
//   } catch (err) {
//     console.error('Error fetching single client:', err); // Log the actual error
//     res.status(500).json({ message: 'Server error fetching client.' });
//   }
// });

// // CREATE a new client
// router.post('/', async (req, res) => {
//   const client = new Client({
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     address: req.body.address,
//     joinedDate: req.body.joinedDate,
//     status: req.body.status,
//     revenue: req.body.revenue,
//     transactions: req.body.transactions,
//     loanAmount: req.body.loanAmount,
//     interestRate: req.body.interestRate,
//     loanTermMonths: req.body.loanTermMonths,
//   });

//   try {
//     const newClient = await client.save();
//     res.status(201).json(newClient);
//   } catch (err) {
//     console.error('Error creating client:', err); // Log the actual error
//     res.status(400).json({ message: err.message });
//   }
// });

// // UPDATE a client by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const client = await Client.findById(req.params.id);
//     if (!client) return res.status(404).json({ message: 'Client not found' });

//     // Update fields if they exist in the request body
//     if (req.body.name != null) client.name = req.body.name;
//     if (req.body.email != null) client.email = req.body.email;
//     if (req.body.phone != null) client.phone = req.body.phone;
//     if (req.body.address != null) client.address = req.body.address;
//     if (req.body.joinedDate != null) client.joinedDate = req.body.joinedDate;
//     if (req.body.status != null) client.status = req.body.status;
//     if (req.body.revenue != null) client.revenue = req.body.revenue;
//     if (req.body.transactions != null) client.transactions = req.body.transactions;
//     if (req.body.loanAmount != null) client.loanAmount = req.body.loanAmount;
//     if (req.body.interestRate != null) client.interestRate = req.body.interestRate;
//     if (req.body.loanTermMonths != null) client.loanTermMonths = req.body.loanTermMonths;

//     const updatedClient = await client.save();
//     res.json(updatedClient);
//   } catch (err) {
//     console.error('Error updating client:', err); // Log the actual error
//     res.status(400).json({ message: err.message });
//   }
// });

// // DELETE a client by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     // Validate if the ID is a valid MongoDB ObjectId format
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ message: 'Invalid client ID format.' });
//     }

//     // Find and delete the client
//     const result = await Client.deleteOne({ _id: req.params.id });

//     if (result.deletedCount === 0) {
//       return res.status(404).json({ message: 'Client not found.' });
//     }

//     res.json({ message: 'Client deleted successfully.' });
//   } catch (err) {
//     console.error('Error deleting client:', err); // Log the actual error
//     res.status(500).json({ message: 'Server error deleting client.' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const mongoose = require('mongoose');

// Helper function to calculate monthly payment and breakdown (replicated from frontend for consistency)
// IMPORTANT: This function calculates for a *given* principal, not necessarily the original loan amount.
const calculateLoanPaymentDetails = (principal, annualInterestRate, loanTermMonths) => {
  if (principal <= 0 || loanTermMonths <= 0 || annualInterestRate < 0) {
    return { monthlyPayment: 0, interestPortion: 0, principalPortion: 0 };
  }

  const monthlyInterestRate = (annualInterestRate / 100) / 12;
  let monthlyPayment;

  if (monthlyInterestRate === 0) {
    monthlyPayment = principal / loanTermMonths;
  } else {
    monthlyPayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));
  }

  const interestPortion = principal * monthlyInterestRate;
  const principalPortion = monthlyPayment - interestPortion;

  return {
    monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
    interestPortion: parseFloat(interestPortion.toFixed(2)),
    principalPortion: parseFloat(principalPortion.toFixed(2)),
  };
};


// GET all clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    console.error('Error fetching clients:', err); // Log the actual error
    res.status(500).json({ message: 'Server error fetching clients.' });
  }
});

// GET a single client by ID
router.get('/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: 'Client not found' });
    res.json(client);
  } catch (err) {
    console.error('Error fetching single client:', err); // Log the actual error
    // Check for CastError if ID format is invalid
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid client ID format.' });
    }
    res.status(500).json({ message: 'Server error fetching client.' });
  }
});

// CREATE a new client
router.post('/', async (req, res) => {
  const client = new Client({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    joinedDate: req.body.joinedDate,
    status: req.body.status,
    revenue: req.body.revenue,
    transactions: req.body.transactions,
    loanAmount: req.body.loanAmount,
    interestRate: req.body.interestRate,
    loanTermMonths: req.body.loanTermMonths,
    // currentOutstandingLoanAmount will be set by pre-save hook if loanAmount > 0
  });

  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (err) {
    console.error('Error creating client:', err); // Log the actual error
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a client by ID
router.put('/:id', async (req, res) => {
  try {
    // Validate if the ID is a valid MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid client ID format.' });
    }

    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: 'Client not found' });

    // Update fields if they exist in the request body
    if (req.body.name != null) client.name = req.body.name;
    if (req.body.email != null) client.email = req.body.email;
    if (req.body.phone != null) client.phone = req.body.phone;
    if (req.body.address != null) client.address = req.body.address;
    if (req.body.joinedDate != null) client.joinedDate = req.body.joinedDate;
    if (req.body.status != null) client.status = req.body.status;
    if (req.body.revenue != null) client.revenue = req.body.revenue;
    if (req.body.transactions != null) client.transactions = req.body.transactions;
    // Special handling for loanAmount, interestRate, loanTermMonths
    // If loanAmount is updated and it's a new loan or currentOutstanding is 0, reset currentOutstanding
    if (req.body.loanAmount != null && req.body.loanAmount !== client.loanAmount) {
      client.loanAmount = req.body.loanAmount;
      // If loan amount is changed, and there are no payments, or the loan was fully paid, reset outstanding
      if (client.paymentHistory.length === 0 || client.currentOutstandingLoanAmount <= 0) {
        client.currentOutstandingLoanAmount = req.body.loanAmount;
      }
    }
    if (req.body.interestRate != null) client.interestRate = req.body.interestRate;
    if (req.body.loanTermMonths != null) client.loanTermMonths = req.body.loanTermMonths;
    // Only update currentOutstandingLoanAmount if explicitly provided (e.g., for initial setup/correction)
    // This allows manual correction but usually it's calculated
    if (req.body.currentOutstandingLoanAmount != null) {
      client.currentOutstandingLoanAmount = req.body.currentOutstandingLoanAmount;
    }


    const updatedClient = await client.save();
    res.json(updatedClient);
  } catch (err) {
    console.error('Error updating client:', err); // Log the actual error
    res.status(400).json({ message: err.message });
  }
});

// DELETE a client by ID
router.delete('/:id', async (req, res) => {
  try {
    // Validate if the ID is a valid MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid client ID format.' });
    }

    // Find and delete the client
    const result = await Client.deleteOne({ _id: req.params.id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Client not found.' });
    }

    res.json({ message: 'Client deleted successfully.' });
  } catch (err) {
    console.error('Error deleting client:', err); // Log the actual error
    res.status(500).json({ message: 'Server error deleting client.' });
  }
});

// NEW ROUTE: Record a loan payment for a client
router.put('/:id/record-payment', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid client ID format.' });
    }

    const { amountPaid, paymentDate } = req.body; // paymentMonth and paymentYear are derived

    if (amountPaid === undefined || amountPaid <= 0) {
      return res.status(400).json({ message: 'Payment amount must be a positive number.' });
    }

    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found.' });
    }

    if (client.currentOutstandingLoanAmount <= 0) {
      return res.status(400).json({ message: 'Loan is already fully paid or not applicable.' });
    }

    // Determine remaining loan term for accurate calculation
    const remainingLoanTerm = client.loanTermMonths - client.paymentHistory.length;

    // Calculate principal and interest portion for this payment based on CURRENT outstanding balance
    const { monthlyPayment, interestPortion, principalPortion } = calculateLoanPaymentDetails(
      client.currentOutstandingLoanAmount, // Use current outstanding for calculation
      client.interestRate,
      remainingLoanTerm > 0 ? remainingLoanTerm : 1 // Ensure at least 1 remaining term for calculation
    );

    let actualPrincipalPaid = 0;
    let actualInterestPaid = 0;

    // Distribute the amountPaid: first cover interest, then principal
    // If payment covers at least the calculated interest portion for the current balance
    if (amountPaid >= interestPortion) {
      actualInterestPaid = interestPortion;
      const remainingAmountAfterInterest = amountPaid - interestPortion;
      // Principal paid is the lesser of remaining amount or the calculated principal portion,
      // and also not more than the current outstanding loan amount.
      actualPrincipalPaid = Math.min(remainingAmountAfterInterest, principalPortion, client.currentOutstandingLoanAmount);
    } else {
      // If payment is less than interest, all of it goes to interest
      actualInterestPaid = amountPaid;
      actualPrincipalPaid = 0;
    }

    // Ensure principalPaid doesn't exceed remaining balance
    actualPrincipalPaid = Math.min(actualPrincipalPaid, client.currentOutstandingLoanAmount);


    // Update the outstanding loan amount
    client.currentOutstandingLoanAmount -= actualPrincipalPaid;
    if (client.currentOutstandingLoanAmount < 0) {
      client.currentOutstandingLoanAmount = 0; // Ensure it doesn't go negative
    }

    // Get month and year for payment history
    const dateOfPayment = paymentDate ? new Date(paymentDate) : new Date();
    const payMonth = dateOfPayment.getMonth() + 1; // Month is 0-indexed
    const payYear = dateOfPayment.getFullYear();

    // Add payment to history
    client.paymentHistory.push({
      paymentDate: dateOfPayment,
      amountPaid: parseFloat(amountPaid.toFixed(2)),
      principalPaid: parseFloat(actualPrincipalPaid.toFixed(2)),
      interestPaid: parseFloat(actualInterestPaid.toFixed(2)),
      remainingBalance: parseFloat(client.currentOutstandingLoanAmount.toFixed(2)),
      paymentMonth: payMonth,
      paymentYear: payYear,
    });

    // Optionally update transactions count
    client.transactions += 1;

    await client.save();

    res.json({
      message: 'Payment recorded successfully!',
      updatedClient: client,
      paymentDetails: {
        amountPaid: parseFloat(amountPaid.toFixed(2)),
        principalPaid: parseFloat(actualPrincipalPaid.toFixed(2)),
        interestPaid: parseFloat(actualInterestPaid.toFixed(2)),
        remainingBalance: parseFloat(client.currentOutstandingLoanAmount.toFixed(2)),
      }
    });

  } catch (err) {
    console.error('Error recording payment:', err);
    res.status(500).json({ message: 'Server error recording payment.' });
  }
});


module.exports = router;
