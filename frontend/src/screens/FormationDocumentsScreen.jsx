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

import FormationDocument from '../components/FormationDocuments';
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FormationDocumentsScreen() {
  const [memart, setMemart] = useState('');
  const [formationDoc, setFormationDoc] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    setFormationDoc(true);

    localStorage.setItem('formationDoc', JSON.stringify(true));
    navigation[2].current = true;
    console.log(navigation[2]);
  };
  return (
    <div className='max-w-[22rem] sm:max-w-xl md:max-w-4xl -mt-24 bg-slate-300 lg:max-w-7xl mx-auto rounded-lg'>
      <div className='max-w-[22rem] sm:max-w-xl md:max-w-4xl lg:max-w-7xl mx-auto bg-slate-400 lg:grid lg:grid-cols-12 lg:gap-x-5 py-7 px-5 rounded-lg drop-shadow-2xl shadow-black'>
        <Sidebar />

        <FormationDocument formationDoc={formationDoc} />
      </div>
    </div>
  );
}
