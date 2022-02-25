const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  nameOfCompany: {
    type: String,
    required: [true, 'Name of Company is required'],
  },
  industryType: {
    type: String,
    required: [true, 'Industry type is required'],
  },
  entityType: {
    type: String,
    required: [true, 'Entity type is required'],
  },
  rcNumber: {
    type: String,
    required: [true, 'Business Number is required'],
  },
  tin: {
    type: String,
    required: [true, 'TIN is needed'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
  email: {
    type: String,
    required: [true, 'Business email is required'],
  },
  website: {
    type: String,
  },
  businessDetails: {
    type: String,
    required: [true, 'Business details is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  region: {
    type: String,
    required: [true, 'State is required'],
  },
  companySize: {
    type: String,
    required: [true, 'Company is required'],
  },
  typeOfCustomers: {
    type: String,
    required: [true, 'Customer type is required'],
  },
  lineOfCredit: {
    type: String,
  },
  annualRevenue: {
    type: String,
    required: [true, 'Annual Revenue is required'],
  },
  avgMonthlyTurnover: {
    type: String,
    required: [true, 'Average Monthly Turnover is required'],
  },
  certificationOfIncoporation: {
    type: String,
    required: [true, 'Certification of Incoportation is required'],
  },
  cac: {
    type: String,
    required: [true, 'CAC 1.1 Form is required'],
  },
  memart: {
    type: String,
    required: [true, 'Memorandum of Articles (MEMART) is required'],
  },
});

formSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'email, firstName, lastName',
  });
  next();
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;
