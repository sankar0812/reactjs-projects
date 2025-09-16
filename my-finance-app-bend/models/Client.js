    // const mongoose = require('mongoose');

    // const clientSchema = new mongoose.Schema({
    //   name: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //   },
    //   email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,
    //     lowercase: true,
    //   },
    //   phone: {
    //     type: String,
    //     trim: true,
    //   },
    //   address: {
    //     type: String,
    //     trim: true,
    //   },
    //   joinedDate: {
    //     type: String, // Storing as string for simplicity, can be Date
    //   },
    //   status: {
    //     type: String,
    //     enum: ['Active', 'Inactive', 'Lead'],
    //     default: 'Active',
    //   },
    //   revenue: {
    //     type: Number,
    //     default: 0,
    //   },
    //   transactions: {
    //     type: Number,
    //     default: 0,
    //   },
    //   loanAmount: {
    //     type: Number,
    //     default: 0,
    //   },
    //   interestRate: {
    //     type: Number,
    //     default: 0,
    //   },
    //   loanTermMonths: {
    //     type: Number,
    //     default: 0,
    //   },
    // }, {
    //   timestamps: true, // Adds createdAt and updatedAt timestamps
    // });

    // const Client = mongoose.model('Client', clientSchema);

    // module.exports = Client;
    

const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  joinedDate: {
    type: String, // Storing as string for simplicity, can be Date
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Lead'],
    default: 'Active',
  },
  revenue: {
    type: Number,
    default: 0,
  },
  transactions: {
    type: Number,
    default: 0,
  },
  loanAmount: {
    type: Number,
    default: 0,
  },
  interestRate: {
    type: Number,
    default: 0,
  },
  loanTermMonths: {
    type: Number,
    default: 0,
  },
  // New field to track current outstanding loan amount
  currentOutstandingLoanAmount: {
    type: Number,
    default: 0,
  },
  // New field to store payment history
  paymentHistory: [
    {
      paymentDate: { type: Date, default: Date.now },
      amountPaid: { type: Number, required: true },
      principalPaid: { type: Number, required: true },
      interestPaid: { type: Number, required: true },
      remainingBalance: { type: Number, required: true },
      paymentMonth: { type: Number }, // To track which month's payment this corresponds to
      paymentYear: { type: Number },
    }
  ],
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

// Middleware to set currentOutstandingLoanAmount on initial save if not set
clientSchema.pre('save', function(next) {
  if (this.isNew && this.loanAmount > 0 && this.currentOutstandingLoanAmount === 0) {
    this.currentOutstandingLoanAmount = this.loanAmount;
  }
  next();
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
