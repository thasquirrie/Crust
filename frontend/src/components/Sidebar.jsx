import React from 'react';
import {
  // CreditCardIcon,
  // KeyIcon,
  // UserCircleIcon,
  // UserGroupIcon,
  // ViewGridAddIcon,
  LockClosedIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import BusinessDetails from '../components/BusinessDetails';
import FormationDocuments from '../components/FormationDocuments';

const navigation = [
  { name: 'Business Details', href: '#', current: true },

  {
    name: 'Formation Documents',
    href: '#',
    current: JSON.parse(localStorage.getItem('formationDoc')),
  },
  {
    name: 'Link Bank Details',
    href: '',
    current: JSON.parse(localStorage.getItem('linkBank')),
  },
  { name: 'Review and Submit', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = () => {
  return (
    <aside className='py-6 sm:px-6 lg:py-0 lg:px-3 lg:col-span-4'>
      <div className='text-blue-500'>
        <div className='px-4 py-3 bg-white lg:rounded-md drop-shadow-xl shadow-slate-800'>
          <h5 className='text-sm font-semibold'>Average completion time</h5>
          <h1 className='text-2xl font-semibold tracking-wide mt-5'>
            5-12 min
          </h1>
        </div>
      </div>
      <nav className='hidden lg:block mt-6 space-y-1'>
        {console.log('Oui!')}
        {navigation.map((item) => (
          <a
            key={item.name}
            href={
              !item.current
                ? item.href
                : `/${item.name.toLowerCase().split(' ').join('-')}`
            }
            className={classNames(
              item.current
                ? 'bg-gray-50 text-slate-700 hover:text-slate-700 hover:bg-white'
                : 'text-gray-200 hover:text-gray-900 cursor-not-allowed',
              'group rounded-md px-3 py-2 flex items-center text-sm font-medium justify-between'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            <span className='truncate'>{item.name}</span>
            {!item.current ? (
              <LockClosedIcon className='h-6 w-6 text-gray-200' />
            ) : (
              <ChevronRightIcon
                className={classNames(
                  item.current
                    ? 'text-slate-500 group-hover:text-slate-500'
                    : 'text-gray-400 group-hover:text-gray-500 ',
                  'flex-shrink-0 h-6 w-6'
                )}
                aria-hidden='true'
              />
            )}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
