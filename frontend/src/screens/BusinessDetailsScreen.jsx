/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { useState } from 'react';
import {} from '@heroicons/react/outline';
import BusinessDetails from '../components/BusinessDetails';
import Sidebar from '../components/Sidebar';

const navigation = [
  { name: 'Business Details', href: '#', current: true },

  {
    name: 'Formation Documents',
    href: '#',
    current: JSON.parse(localStorage.getItem('formationDoc')),
  },
  { name: 'Link Bank Details', href: '', current: false },
  { name: 'Review and Submit', href: '#', current: false },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

export default function BusinessDetailsScreen() {
  // const [memart, setMemart] = useState('');
  // const [formationDoc, setFormationDoc] = useState(false);

  let formData;

  const displayInConsole = (data) => {
    formData = data;
    // console.log(formData);
    return formData;
  };

  // console.log(formData);

  // const formData = displayInConsole();
  // console.log({ formData });

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   // console.log('Form:', data);
  //   // localStorage.setItem('business-details', JSON.stringify(data));
  // };

  return (
    <div className='max-w-[22rem] -mt-24 bg-slate-300 md:max-w-7xl mx-auto rounded-lg'>
      <div className='max-w-[22rem] md:max-w-7xl mx-auto bg-slate-400 lg:grid lg:grid-cols-12 lg:gap-x-5 py-7 px-5 rounded-lg drop-shadow-2xl shadow-black'>
        <Sidebar />
        <BusinessDetails
          displayInConsole={displayInConsole}
          // submitHandler={submitHandler}
        />
      </div>
    </div>
  );
}
