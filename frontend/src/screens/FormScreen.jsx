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

import { useEffect } from 'react';
import {} from '@heroicons/react/outline';
import BusinessDetails from '../components/BusinessDetails';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function BusinessDetailsScreen() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo]);

  return (
    <div className=' sm:max-w-xl -mt-24 bg-slate-300 md:max-w-7xl mx-auto rounded-lg'>
      <div className=' sm:max-w-xl md:max-w-7xl mx-auto bg-slate-400 lg:grid lg:grid-cols-12 lg:gap-x-5 py-7 px-5 rounded-lg drop-shadow-2xl shadow-black'>
        <div className='col-span-12 space-y-5'>
          <BusinessDetails />
        </div>
      </div>
    </div>
  );
}
