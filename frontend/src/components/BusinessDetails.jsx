import React from 'react';

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

const BusinessDetails = ({ submitHandler }) => {
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
                Business Details
              </h3>
              <h5 className='mt-1 text-base font-medium text-gray-700'>
                Tell us about your business
              </h5>
              <p className='mt-2 text-sm text-gray-500'>
                We'll use this information to securely confirm your business
                identity and manage your corporate account.
              </p>
            </div>

            <div className='grid grid-cols-5 gap-6'>
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
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                    className='focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300'
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
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
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
                  type='text'
                  name='address'
                  id='address'
                  autoComplete='address'
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='region'
                  className='block text-sm font-medium text-gray-700'
                >
                  <span className='text-red-500 text-base'>*</span> State /
                  Region
                </label>
                <input
                  type='text'
                  name='region'
                  id='region'
                  autoComplete='address-level1'
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>

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
                  className='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>
          </div>
          <div className='px-4 py-5 bg-gray-50 text-right sm:px-6'>
            <button
              type='submit'
              className='bg-slate-600 border border-transparent rounded-md shadow-3xl py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 drop-shadow-xl'
            >
              Save & Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessDetails;
