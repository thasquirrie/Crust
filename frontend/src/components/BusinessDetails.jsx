import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ClipboardIcon, XIcon } from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { createForm } from '../actions/formActions';
import Uploading from './Uploading';
import SuccessAlert from './SuccessAlert';
import ErrorALert from './ErrorAlert';

const industryTypeOptions = [
  'Hospitality',
  'Media, Adevertising, Entertainment',
  'Education',
  'Agriculture',
  'Finance',
  'Construction',
  'Health and Wellness',
  'Manufacturing',
  'Restaurants/Bars/Catering',
  'Retail-Primarily Online',
  'Retail-Primarily Offline',
  'Fashion',
  'General Services',
  'Legal Services',
  'Technology',
  'Transportation',
  'Travel',
  'Consulting',
  'Logistics',
  'Ecommerce',
  'Real Estate',
  'Utilities',
  'Membership Groups',
  'Others',
];

const BusinessDetails = () => {
  const [nameOfCompany, setNameOfCompany] = useState('');
  const [industryType, setIndustryType] = useState('Hospitality');
  const [entityType, setEntityType] = useState('Sole Proprietorship');
  const [rcNumber, setRCNumber] = useState('');
  const [tin, setTin] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [businessDetails, setBusinessDetails] = useState('');
  const [yearOfIncoporation, setYearOfIncoporation] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegionalState] = useState('');
  const [companySize, setCompanySize] = useState('Under 10 employees');
  const [typeOfCustomers, setTypeOfCustomers] = useState('Large companies');
  const [lineOfCredit, setLineOfCredit] = useState('');
  const [annualRevenue, setAnnualRevenue] = useState('');
  const [avgMonthlyTurnover, setAvgMonthlyTurnonver] = useState('');
  const [certificateOfIncoporation, setCertificateOfIncoporation] = useState(
    {}
  );
  const [cac, setCac] = useState({});
  const [memart, setMemart] = useState({});
  const [
    certificateOfIncoporationUploading,
    setCertificateOfIncoporationUploading,
  ] = useState(false);
  const [cacUploading, setCacUploading] = useState(false);
  const [memartUploading, setMemartUploading] = useState(false);

  const formData = {
    nameOfCompany,
    industryType,
    entityType,
    rcNumber,
    tin,
    phone,
    country,
    email,
    website,
    businessDetails,
    yearOfIncoporation,
    address,
    city,
    region,
    companySize,
    typeOfCustomers,
    lineOfCredit,
    annualRevenue,
    avgMonthlyTurnover,
    certificateOfIncoporation,
    cac,
    memart,
  };
  console.log(formData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formCreate = useSelector((state) => state.formCreate);
  const {
    loading: createLoading,
    success: createSuccess,
    error: createError,
  } = formCreate;

  console.log({ formCreate });

  const uploadFileHandler = async (e, nameOfField) => {
    console.log({ nameOfField });
    console.log(e.target.files);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append(nameOfField, file);
    // setUploading(true);
    if (nameOfField === 'certificateOfIncoportaton') {
      setCertificateOfIncoporation(true);
    } else if (nameOfField === 'cac') {
      setCacUploading(true);
    } else if (nameOfField === 'memart') {
      setMemartUploading(true);
    }

    try {
      const headers = {
        'Content-Type': 'multipart/form-data',
      };

      const {
        data: { path, name },
      } = await axios({
        method: 'POST',
        url: `/api/v1/uploads/${nameOfField}`,
        data: formData,
        headers,
      });

      if (nameOfField === 'certificateOfIncoporation') {
        // setCertificateOfIncoporationUploading(true);
        setCertificateOfIncoporation({
          name,
          path,
        });
      } else if (nameOfField === 'cac') {
        // setCacUploading(true);
        setCac({
          name,
          path,
        });
      } else if (nameOfField === 'memart') {
        // setMemartUploading(true);
        setMemart({
          name,
          path,
        });
      }

      console.log({ path });

      // setUploading(false);
      setCertificateOfIncoporationUploading(false);
      setCacUploading(false);
      setMemartUploading(false);

      // const {}
    } catch (error) {
      console.log('Error:', error);
      // setUploading(false);
      setCertificateOfIncoporationUploading(false);
      setCacUploading(false);
      setMemartUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createForm(formData));
  };

  useEffect(() => {
    if (createSuccess) {
      navigate('/link-bank-details');
    }
  });

  const removeFileHandler = (fieldName) => {
    if (fieldName === 'certificateOfIncoporation') {
      setCertificateOfIncoporation({});
    } else if (fieldName === 'cac') {
      setCac({});
    } else if (fieldName === 'memart') {
      setMemart({});
    }
  };

  return (
    <div className='space-y-6 sm:px-6 lg:px-0 lg:col-span-8'>
      <form onSubmit={submitHandler}>
        <div
          id='business-details'
          className='shadow sm:rounded-md sm:overflow-hidden'
        >
          <div className='bg-white py-6 px-4 space-y-6 sm:p-6'>
            <div>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Provide Business Details
              </h3>
              <h5 className='mt-1 text-base font-medium text-gray-700'>
                Tell us about your business
              </h5>
              <p className='mt-2 text-sm text-gray-500'>
                We'll use this information to securely confirm your business
                identity and manage your corporate account.
              </p>
            </div>

            <div className='grid grid-cols-9 gap-6'>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='company-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-600 text-base'>*</span> Name of
                  Company
                </label>
                <input
                  type='text'
                  name='company-name'
                  id='company-name'
                  autoComplete='company-name'
                  value={nameOfCompany}
                  onChange={(e) => setNameOfCompany(e.target.value)}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='industry-type'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-500'>*</span> Industry Type
                </label>
                <select
                  id='industry-type'
                  name='industry-type'
                  autoComplete='industry-type'
                  value={industryType}
                  onChange={(e) => setIndustryType(e.target.value)}
                  required
                  className='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                >
                  {industryTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='entity-type'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-500'>*</span> Entity Type
                </label>
                <select
                  id='entity-type'
                  name='entity-type'
                  autoComplete='entity-type'
                  value={entityType}
                  onChange={(e) => setEntityType(e.target.value)}
                  required
                  className='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                >
                  <option value='Sole Proprietorship'>
                    Sole Proprietorshp
                  </option>
                  <option value='Limited Liability Company'>
                    Limited Liability Company
                  </option>
                  <option value='Partnership'>Partnership</option>
                  <option value='Other'>Other</option>
                </select>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='business-number'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-600 text-base'>*</span> RC
                  Number/Business Number
                </label>
                <input
                  type='text'
                  name='business-number'
                  id='business-number'
                  autoComplete='business-number'
                  value={rcNumber}
                  onChange={(e) => setRCNumber(e.target.value)}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='tin-number'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-600 text-base'>*</span> TIN Number
                </label>
                <input
                  type='text'
                  name='tin-number'
                  id='tin-number'
                  autoComplete='tin-number'
                  value={tin}
                  onChange={(e) => setTin(e.target.value)}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='phone-number'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-600 text-base'>*</span> Phone Number
                </label>
                <input
                  type='text'
                  name='phone-number'
                  id='phone-number'
                  autoComplete='phone-number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-500'>*</span> Country
                </label>
                <select
                  id='country'
                  name='country'
                  autoComplete='country'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  className='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                >
                  <option className='bg-gray-300 py-2' value='Nigeria'>
                    Nigeria
                  </option>
                  <option value='Ghana'>Ghana</option>
                </select>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-600 text-base'>*</span> Business
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='company-website'
                  className='block text-sm font-medium text-gray-700'
                >
                  Website
                </label>
                <div className='mt-1 rounded-md shadow-sm flex'>
                  <span className='bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm'>
                    https://
                  </span>
                  <input
                    type='text'
                    name='website'
                    id='website'
                    autoComplete='website'
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className='focus:ring-slate-500 focus:border-slate-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300'
                  />
                </div>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='about'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-500 text-base'>*</span> Business
                  Details
                </label>
                <div className='mt-1'>
                  <textarea
                    id='about'
                    name='about'
                    rows={3}
                    value={businessDetails}
                    onChange={(e) => setBusinessDetails(e.target.value)}
                    required
                    className='shadow-sm focus:ring-slate-500 focus:border-slate-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                  />
                </div>
                <p className='mt-2 text-sm text-gray-500'>
                  Brief description for your business profile.
                </p>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-600 text-base'>*</span> Address
                </label>
                <input
                  type='date'
                  name='year'
                  id='year'
                  autoComplete='year'
                  value={yearOfIncoporation}
                  onChange={(e) => setYearOfIncoporation(e.target.value)}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-600 text-base'>*</span> Address
                </label>
                <input
                  type='text'
                  name='address'
                  id='address'
                  autoComplete='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-500 text-base'>*</span> City
                </label>
                <input
                  type='text'
                  name='city'
                  id='city'
                  autoComplete='address-level2'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='state-region'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-500 text-base'>*</span> State
                </label>
                <input
                  type='text'
                  name='state-region'
                  id='state-region'
                  autoComplete='address-level2'
                  value={region}
                  onChange={(e) => setRegionalState(e.target.value)}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div>

              {/* <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-500 text-base'>*</span> State /
                  Region
                </label>
                <input
                  type='text'
                  name='region'
                  id='region'
                  // autoComplete='region'
                  value={region}
                  onChange={(e) => setRegionalState(e.target.value)}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div> */}

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='company-size'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-500'>*</span> Company Size
                </label>
                <select
                  id='company-size'
                  name='company-size'
                  autoComplete='company-size'
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  required
                  className='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                >
                  <option value='under 10 employees'>Under 10 employees</option>
                  <option value='10-50 employees'>10-50 employees</option>
                  <option value='50-250 employees'>50-250 employees</option>
                  <option value='over 250 employees'>Over 250 employees</option>
                </select>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='customer-type'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-500'>*</span> Type of Customers
                </label>
                <select
                  id='customer-type'
                  name='customer-type'
                  autoComplete='customer-type'
                  value={typeOfCustomers}
                  onChange={(e) => setTypeOfCustomers(e.target.value)}
                  required
                  className='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                >
                  <option value='Large companies'>Large companies</option>
                  <option value='Small companies'>Small companies</option>
                  <option value='Consumer/Private Individuals'>
                    Consumer/Private Individuals
                  </option>
                  <option value='Public Sector/Government'>
                    Public Sector/Government
                  </option>
                </select>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='turnover'
                    className='block text-sm font-medium text-gray-700'
                  >
                    {' '}
                    Desired line of credit
                  </label>
                  <span className='text-gray-400 font-medium text-lg'>
                    &#8358;
                  </span>
                </div>
                <input
                  type='text'
                  name='credit'
                  id='credit'
                  autoComplete='credit'
                  value={lineOfCredit}
                  onChange={(e) => setLineOfCredit(e.target.value)}
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='turnover'
                    className='block text-sm font-medium text-gray-700'
                  >
                    <span className='text-red-500 text-base'>*</span> Annual
                    Revenue
                  </label>
                  <span className='text-gray-400 font-medium text-lg'>
                    &#8358;
                  </span>
                </div>
                <input
                  type='text'
                  name='revenue'
                  id='revenue'
                  autoComplete='revenue'
                  value={annualRevenue}
                  onChange={(e) => setAnnualRevenue(e.target.value)}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='turnover'
                    className='block text-sm font-medium text-gray-700'
                  >
                    <span className='text-red-500 text-base'>*</span> Average
                    Monthly Turnover
                  </label>
                  <span className='text-gray-400 font-medium text-lg'>
                    &#8358;
                  </span>
                </div>
                <input
                  type='text'
                  name='turnover'
                  id='turnover'
                  autoComplete='turnover'
                  value={avgMonthlyTurnover}
                  onChange={(e) => setAvgMonthlyTurnonver(e.target.value)}
                  required
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                />
              </div>
            </div>
          </div>
          <div className='bg-white pl-6'>
            <div className='grid grid-cols-5 gap-12'>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='incoporation-certificate'
                >
                  Certification of Incorportation
                </label>
                <div className='relative mt-1 rounded-lg border-dashed border-2 border-gray-300'>
                  {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                  <ClipboardIcon className='h-8 w-8 text-gray-500 font-thin' />
                </div> */}
                  {certificateOfIncoporationUploading ? (
                    <Uploading />
                  ) : certificateOfIncoporation.name ? (
                    <div className='flex items-center justify-center w-full pl-3 py-12'>
                      <ClipboardIcon className='h-8 w-8 text-slate-500 font-thin mr-3' />
                      <div className='flex items-center justify-between flex-1'>
                        <p className='text-slate-500 font-bold text-base'>
                          {certificateOfIncoporation.name}
                        </p>
                        <XIcon
                          className='h-6 w-6 text-red-400 mr-3 cursor-pointer'
                          onClick={() =>
                            removeFileHandler('certificateOfIncoporation')
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    <label className='block'>
                      <span className='sr-only'>Choose Certi</span>
                      <input
                        type='file'
                        name='certificateOfIncoporation'
                        className='pl-3 py-12 w-full text-base font-medium text-center mx-auto flex items-center justify-center text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-base file:hover:cursor-pointer file:font-semibold file:text-slate-500 file:rounded-lg focus-within:outline-none hover:cursor-pointer '
                        onChange={(e) => {
                          console.log(e.target.files[0]);
                          uploadFileHandler(e, 'certificateOfIncoporation');
                        }}
                      />
                    </label>
                  )}
                </div>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='incoporation-certificate'
                >
                  CAC 1.1 Form (Certified True Copy)
                </label>
                <div className='relative mt-1 rounded-lg border-dashed border-2 border-gray-300'>
                  {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                  <ClipboardIcon className='h-8 w-8 text-gray-500 font-thin' />
                </div> */}

                  {cacUploading ? (
                    <Uploading />
                  ) : cac.name ? (
                    <div className='flex items-center justify-start w-full pl-3 py-12'>
                      <ClipboardIcon className='h-8 w-8 text-slate-500 font-thin mr-3' />
                      <div className='flex items-center justify-between flex-1'>
                        <p className='text-slate-500 font-bold text-base'>
                          {cac.name}
                        </p>
                        <XIcon
                          className='h-6 w-6 text-red-400 mr-3 cursor-pointer'
                          onClick={() => removeFileHandler('cac')}
                        />
                      </div>
                    </div>
                  ) : (
                    <label className='block'>
                      <span className='sr-only'>Choose profile photo</span>
                      <input
                        type='file'
                        name='cac'
                        className='pl-3 py-12 w-full text-base font-medium text-center mx-auto flex items-center justify-center text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-base file:hover:cursor-pointer file:font-semibold file:text-slate-500 file:rounded-lg focus-within:outline-none hover:cursor-pointer '
                        onChange={(e) => {
                          uploadFileHandler(e, 'cac');
                        }}
                      />
                    </label>
                  )}
                </div>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='incoporation-certificate'
                >
                  Memorandum of Articles (MEMART)
                </label>
                <div className='relative mt-1 mb-2 rounded-lg border-dashed border-2 border-gray-300'>
                  {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                  <ClipboardIcon className='h-8 w-8 text-gray-500 font-thin' />
                </div> */}
                  {memartUploading ? (
                    <Uploading />
                  ) : memart.name ? (
                    <div className='flex items-center justify-start w-full pl-3 py-12'>
                      <ClipboardIcon className='h-8 w-8 text-slate-500 font-thin mr-3' />
                      <div className='flex items-center justify-between flex-1'>
                        <p className='text-slate-500 font-bold text-base'>
                          {memart.name}
                        </p>
                        <XIcon
                          className='h-6 w-6 text-red-400 mr-3 cursor-pointer'
                          onClick={() => removeFileHandler('memart')}
                        />
                      </div>
                    </div>
                  ) : (
                    <label className='block'>
                      <span className='sr-only'>Choose profile photo</span>
                      <input
                        type='file'
                        name='memart'
                        className='pl-3 py-12 w-full text-base font-medium text-center mx-auto flex items-center justify-center text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-base file:hover:cursor-pointer file:font-semibold file:text-slate-500 file:rounded-lg focus-within:outline-none hover:cursor-pointer '
                        onChange={(e) => {
                          uploadFileHandler(e, 'memart');
                        }}
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='my-4'>
            {createSuccess && <SuccessAlert action={'Save successful'} />}
            {createError && <ErrorALert error={createError} />}
          </div>
          <div className='px-4 py-5 bg-gray-50 text-right sm:px-6'>
            {createLoading ? (
              <button
                type='button'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 hover:drop-shadow-lg hover:-translate-y-1 active:-translate-y-1'
                disabled
              >
                <svg
                  className={`animate-spin -ml-1 mr-3 h-4 w-4 text-white`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                Saving...
              </button>
            ) : (
              <button
                type='submit'
                className='bg-slate-600 border border-transparent rounded-md shadow-3xl py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 drop-shadow-xl'
              >
                Save and Continue
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessDetails;
